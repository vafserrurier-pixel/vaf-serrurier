// Genere lib/contentDates.generated.ts : pour chaque page.tsx, la date de
// fraicheur de contenu utilisee par app/sitemap.ts (<lastmod>) et par
// serviceSchema (dateModified). Priorite :
//   1. content/freshness-overrides.json (defini a la main via
//      `npm run update-freshness -- --page=/xxx/`) si present pour la page ;
//   2. articles de blog : le champ `dateModified` deja renseigne dans lib/blogPosts.ts
//      (c'est la date affichee au lecteur et dans le JSON-LD de l'article) ;
//   3. sinon la date du dernier commit Git du fichier de la page ET de ses fichiers de
//      contenu (composant voisin comme TarifsBody.tsx, HomeBody.tsx pour l'accueil,
//      lib/blogPosts.ts pour l'index du blog), en prenant la plus recente ;
//   4. si git ne peut pas la prouver (clone superficiel), la valeur deja presente dans le
//      fichier .ts commite precedent (voir plus bas pourquoi) ;
//   5. sinon AUCUNE date : la page n'a pas de <lastmod> dans le sitemap. Une date inventee
//      (heure du build) est pire que pas de date : Google ignore un <lastmod> peu fiable.
//
// Execute au moment du build (npm run build), jamais au runtime : Git n'est
// pas forcement disponible dans l'environnement serverless deploye, donc on
// fige le resultat dans un fichier .ts commite plutot que d'appeler `git`
// depuis une route qui pourrait re-executer en production (ISR).
//
// Vercel clone le depot en mode superficiel (shallow clone) par defaut : sur
// ces builds, `git log -1 -- <fichier>` ne trouve souvent rien pour un
// fichier modifie avant la fenetre d'historique disponible, et TOUTES les
// pages concernees retombaient alors sur le meme fallback `now()` (calcule
// une seule fois par build) - d'ou un <lastmod> identique sur des dizaines
// de pages au lieu d'une date reelle par page. Reutiliser la derniere valeur
// connue et commitee comme fallback intermediaire evite ce probleme : les
// dates restent reelles et distinctes meme quand l'historique Git n'est pas
// entierement disponible au moment du build.
const { execSync } = require("child_process");
const { readdirSync, writeFileSync, existsSync, readFileSync } = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OVERRIDES_PATH = path.join(ROOT, "content/freshness-overrides.json");
const GENERATED_PATH = path.join(ROOT, "lib/contentDates.generated.ts");

function loadOverrides() {
  if (!existsSync(OVERRIDES_PATH)) return {};
  try {
    return JSON.parse(readFileSync(OVERRIDES_PATH, "utf8"));
  } catch {
    return {};
  }
}

function loadPreviouslyGenerated() {
  if (!existsSync(GENERATED_PATH)) return {};
  try {
    const src = readFileSync(GENERATED_PATH, "utf8");
    const match = src.match(/contentDates:[^=]*=\s*(\{[\s\S]*\});?\s*$/);
    return match ? JSON.parse(match[1]) : {};
  } catch {
    return {};
  }
}

function walkPages(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walkPages(full, out);
    } else if (entry.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

function urlPathFor(filePath) {
  const rel = path.relative(path.join(ROOT, "app"), path.dirname(filePath)).split(path.sep).join("/");
  return rel === "" ? "/" : `/${rel}/`;
}

// Un clone superficiel (celui que fait Vercel par defaut au build) greffe un
// commit racine synthetique sans parent a la profondeur ou il s'arrete. Face
// a `git log -1 -- <fichier>`, git ne peut alors plus prouver qu'un fichier
// n'a PAS ete modifie par ce commit racine (rien a comparer avant lui), et
// l'attribue par defaut a TOUS les fichiers du depot - meme ceux qu'il n'a
// jamais touches. Resultat observe en production : 83 pages retombaient sur
// la poignee de commits limites visibles dans le clone superficiel au lieu
// de leur propre historique reel. Un resultat qui pointe vers un commit sans
// parent est donc invérifiable dans ce contexte et doit etre ignore.
const rootCommitCache = new Map();
function isUnverifiableRootCommit(hash) {
  if (rootCommitCache.has(hash)) return rootCommitCache.get(hash);
  let isRoot = false;
  try {
    const parents = execSync(`git log -1 --format=%P ${hash}`, { cwd: ROOT, encoding: "utf8" }).trim();
    isRoot = parents === "";
  } catch {
    isRoot = false;
  }
  rootCommitCache.set(hash, isRoot);
  return isRoot;
}

function lastCommitDate(filePath) {
  try {
    const out = execSync(`git log -1 --format=%H%x09%cI -- "${filePath}"`, {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    if (!out) return null;
    const [hash, date] = out.split("\t");
    if (!hash || !date || isUnverifiableRootCommit(hash)) return null;
    return date;
  } catch {
    return null;
  }
}

// Fichiers de contenu supplementaires, en plus de page.tsx, dont la modification change le contenu
// de la page. Pour les autres pages, les fichiers voisins de page.tsx (ex. TarifsBody.tsx,
// ContactBody.tsx) sont ajoutes automatiquement. Les gabarits partages (ServicePageTemplate...) ne
// comptent pas : un changement de gabarit ne change pas le contenu d'une page precise.
const EXTRA_CONTENT_FILES = {
  "/": ["app/HomeBody.tsx"],
  "/blog/": ["lib/blogPosts.ts"],
  "/tarifs-serrurier-nice/": ["lib/pricingCards.ts"],
  // La liste des quartiers (zones) vient de lib/business.ts : pages Zones et secteurs.
  "/zones-intervention-nice/": ["lib/business.ts"],
  "/serrurier-nice-centre/": ["lib/business.ts"],
  "/serrurier-nice-est/": ["lib/business.ts"],
  "/serrurier-nice-nord/": ["lib/business.ts"],
  "/serrurier-nice-ouest/": ["lib/business.ts"],
};
const NOT_CONTENT = /^(page|route|layout|loading|error|not-found|sitemap|robots|manifest|opengraph-image|twitter-image|icon)\.(tsx?|jsx?)$/;

function contentFilesFor(file, urlPath) {
  const files = [path.relative(ROOT, file).split(path.sep).join("/")];
  if (urlPath !== "/") {
    const dir = path.dirname(file);
    for (const name of readdirSync(dir)) {
      if (/\.(tsx?|jsx?)$/.test(name) && !NOT_CONTENT.test(name)) {
        files.push(path.relative(ROOT, path.join(dir, name)).split(path.sep).join("/"));
      }
    }
  }
  files.push(...(EXTRA_CONTENT_FILES[urlPath] ?? []));
  return files;
}

// Date de contenu d'une page : la plus recente des dates de commit de ses fichiers. Si l'une
// d'elles n'est pas prouvable (null), on ne devine pas : la page retombe sur la valeur precedente.
function contentCommitDate(files) {
  let latest = null;
  for (const f of files) {
    const d = lastCommitDate(f);
    if (!d) return null;
    if (!latest || new Date(d) > new Date(latest)) latest = d;
  }
  return latest;
}

// Articles de blog : champ dateModified de lib/blogPosts.ts (href -> date).
function loadBlogDates() {
  const p = path.join(ROOT, "lib/blogPosts.ts");
  if (!existsSync(p)) return {};
  const src = readFileSync(p, "utf8");
  const out = {};
  for (const m of src.matchAll(/href:\s*"([^"]+)"[\s\S]*?dateModified:\s*"([^"]+)"/g)) out[m[1]] = m[2];
  return out;
}

const pages = walkPages(path.join(ROOT, "app"));
const overrides = loadOverrides();
const previous = loadPreviouslyGenerated();
const blogDates = loadBlogDates();
const entries = {};
const undated = [];

for (const file of pages) {
  const urlPath = urlPathFor(file);
  // override manuel > date de blog renseignee > dernier commit Git des fichiers de contenu
  // (historique complet) > derniere valeur reelle connue (build precedent) > pas de date.
  const date =
    overrides[urlPath] ??
    blogDates[urlPath] ??
    contentCommitDate(contentFilesFor(file, urlPath)) ??
    previous[urlPath];
  if (date) entries[urlPath] = date;
  else undated.push(urlPath);
}

const fileContent = `// Fichier genere automatiquement par scripts/generate-content-dates.js
// a chaque "npm run build". Ne pas editer a la main : les changements seraient
// ecrases au prochain build. Mappe chaque chemin de page a la date ISO de sa
// derniere fraicheur reelle (override manuel dans
// content/freshness-overrides.json en priorite, sinon dernier commit Git du
// fichier et de ses fichiers de contenu), utilisee comme signal de fraicheur (sitemap
// <lastmod>, schema.org dateModified). Une page absente de cette table n'a pas de date fiable.
export const contentDates: Record<string, string> = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(path.join(ROOT, "lib/contentDates.generated.ts"), fileContent);
console.log(
  `contentDates.generated.ts : ${Object.keys(entries).length} pages datees sur ${pages.length}` +
    (undated.length ? ` | sans date fiable (pas de lastmod) : ${undated.join(", ")}` : ""),
);

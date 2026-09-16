// Genere lib/contentDates.generated.ts : pour chaque page.tsx, la date de
// fraicheur de contenu utilisee par app/sitemap.ts (<lastmod>) et par
// serviceSchema (dateModified). Priorite :
//   1. content/freshness-overrides.json (defini a la main via
//      `npm run update-freshness -- --page=/xxx/`) si present pour la page ;
//   2. la date du dernier commit Git qui a modifie le fichier, si trouvable ;
//   3. sinon, la valeur deja presente dans le fichier .ts commite precedent
//      (voir plus bas pourquoi) ;
//   4. en tout dernier recours (page reellement nouvelle, jamais construite),
//      l'heure actuelle.
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

const pages = walkPages(path.join(ROOT, "app"));
const overrides = loadOverrides();
const previous = loadPreviouslyGenerated();
const now = new Date().toISOString();
const entries = {};

for (const file of pages) {
  const urlPath = urlPathFor(file);
  // override manuel > commit Git (historique complet) > derniere valeur reelle
  // connue (build precedent, historique complet ou partiel) > page vraiment
  // nouvelle, jamais datee auparavant.
  const date = overrides[urlPath] ?? lastCommitDate(file) ?? previous[urlPath] ?? now;
  entries[urlPath] = date;
}

const fileContent = `// Fichier genere automatiquement par scripts/generate-content-dates.js
// a chaque "npm run build". Ne pas editer a la main : les changements seraient
// ecrases au prochain build. Mappe chaque chemin de page a la date ISO de sa
// derniere fraicheur reelle (override manuel dans
// content/freshness-overrides.json en priorite, sinon dernier commit Git du
// fichier), utilisee comme signal de fraicheur (sitemap <lastmod>,
// schema.org dateModified).
export const contentDates: Record<string, string> = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(path.join(ROOT, "lib/contentDates.generated.ts"), fileContent);
console.log(`contentDates.generated.ts : ${pages.length} pages`);

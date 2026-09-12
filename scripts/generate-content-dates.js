// Genere lib/contentDates.generated.ts : pour chaque page.tsx, la date du
// dernier commit Git qui l'a modifiee (vraie date de fraicheur de contenu),
// utilisee par app/sitemap.ts (<lastmod>) et par serviceSchema (dateModified).
//
// Execute au moment du build (npm run build), jamais au runtime : Git n'est
// pas forcement disponible dans l'environnement serverless deploye, donc on
// fige le resultat dans un fichier .ts commite plutot que d'appeler `git`
// depuis une route qui pourrait re-executer en production (ISR).
const { execSync } = require("child_process");
const { readdirSync, writeFileSync } = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

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

function lastCommitDate(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const pages = walkPages(path.join(ROOT, "app"));
const now = new Date().toISOString();
const entries = {};

for (const file of pages) {
  const urlPath = urlPathFor(file);
  const date = lastCommitDate(file) ?? now; // fallback si le fichier est non versionne ou hors depot Git
  entries[urlPath] = date;
}

const fileContent = `// Fichier genere automatiquement par scripts/generate-content-dates.js
// a chaque "npm run build". Ne pas editer a la main : les changements seraient
// ecrases au prochain build. Mappe chaque chemin de page a la date ISO de son
// dernier commit Git, utilisee comme signal de fraicheur (sitemap <lastmod>,
// schema.org dateModified).
export const contentDates: Record<string, string> = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(path.join(ROOT, "lib/contentDates.generated.ts"), fileContent);
console.log(`contentDates.generated.ts : ${pages.length} pages`);

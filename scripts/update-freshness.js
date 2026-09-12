// Commande manuelle : npm run update-freshness -- --page=/serrurier-nice-est/ [--date=2026-09-12]
//
// Enregistre (ou met a jour) une date de fraicheur pour UNE page precise dans
// content/freshness-overrides.json. Cette date prend le pas sur la date de
// commit Git au prochain build (voir generate-content-dates.js) et se
// retrouve dans le <lastmod> du sitemap et le dateModified du schema Service.
//
// Usage explicite, jamais appele automatiquement par une Action ou un hook
// de build : c'est VOUS qui decidez quand une page merite une date de
// fraicheur mise a jour, independamment du bruit des commits Git (un commit
// qui ne touche qu'a la mise en forme, par exemple, ne devrait pas a lui
// seul faire croire a Google que le contenu a change).
const { writeFileSync, existsSync, readFileSync, mkdirSync } = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OVERRIDES_PATH = path.join(ROOT, "content/freshness-overrides.json");

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const match = arg.match(/^--([a-zA-Z-]+)=(.*)$/);
    if (match) out[match[1]] = match[2];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

if (!args.page) {
  console.error("Usage : npm run update-freshness -- --page=/serrurier-nice-est/ [--date=YYYY-MM-DD]");
  console.error('Le chemin doit commencer et finir par "/", ex. "/serrurier-nice-est/" ou "/" pour l\'accueil.');
  process.exit(1);
}

const pagePath = args.page;
if (pagePath !== "/" && (!pagePath.startsWith("/") || !pagePath.endsWith("/"))) {
  console.error(`Chemin invalide : "${pagePath}". Attendu un format du type "/serrurier-nice-est/".`);
  process.exit(1);
}

let isoDate;
if (args.date) {
  const parsed = new Date(args.date);
  if (Number.isNaN(parsed.getTime())) {
    console.error(`Date invalide : "${args.date}". Format attendu : YYYY-MM-DD.`);
    process.exit(1);
  }
  isoDate = parsed.toISOString();
} else {
  isoDate = new Date().toISOString();
}

mkdirSync(path.dirname(OVERRIDES_PATH), { recursive: true });
const overrides = existsSync(OVERRIDES_PATH)
  ? JSON.parse(readFileSync(OVERRIDES_PATH, "utf8"))
  : {};

overrides[pagePath] = isoDate;

writeFileSync(OVERRIDES_PATH, JSON.stringify(overrides, null, 2) + "\n");

console.log(`OK : ${pagePath} -> ${isoDate}`);
console.log("Rappel : ce fichier n'a d'effet qu'au prochain `npm run build` (regenere lib/contentDates.generated.ts).");
console.log("N'oubliez pas de committer content/freshness-overrides.json pour que le changement soit deploye.");

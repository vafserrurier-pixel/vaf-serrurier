// npm run freshness-report
//
// Outil manuel de suivi (Partie 4) : compare la date de fraicheur reelle de
// chaque page (lib/contentDates.generated.ts, alimente par les vrais commits
// Git + les overrides manuels) a la cadence cible de son niveau de priorite,
// et signale les pages "en retard". Ne modifie rien, ne commite rien, ne
// declenche rien : un simple rapport a lancer quand vous voulez faire un
// point, ou consulte par le workflow content-refresh-reminder.yml pour
// enrichir le corps de l'Issue (lecture seule, jamais d'ecriture).
const fs = require("fs");
const path = require("path");
const { LEVEL1, LEVEL2, TARGET_DAYS } = require("./editorial-pages");

const ROOT = path.join(__dirname, "..");
const CONTENT_DATES_PATH = path.join(ROOT, "lib/contentDates.generated.ts");

function loadContentDates() {
  if (!fs.existsSync(CONTENT_DATES_PATH)) {
    console.error("lib/contentDates.generated.ts introuvable. Lancez d'abord `npm run build` (ou `node scripts/generate-content-dates.js`).");
    process.exit(1);
  }
  const src = fs.readFileSync(CONTENT_DATES_PATH, "utf8");
  const match = src.match(/=\s*(\{[\s\S]*\});?\s*$/);
  if (!match) {
    console.error("Impossible de lire lib/contentDates.generated.ts (format inattendu).");
    process.exit(1);
  }
  return JSON.parse(match[1]);
}

const contentDates = loadContentDates();
const now = new Date();

function daysSince(iso) {
  if (!iso) return null;
  const diff = now - new Date(iso);
  return Math.floor(diff / 86400000);
}

function reportFor(level, pages) {
  const target = TARGET_DAYS[level];
  const rows = pages
    .map((p) => {
      const iso = contentDates[p.path];
      const age = daysSince(iso);
      return { ...p, iso, age, late: age === null || age > target };
    })
    .sort((a, b) => (b.age ?? Infinity) - (a.age ?? Infinity));

  const late = rows.filter((r) => r.late);
  console.log(`\n=== Niveau ${level} (cible : ${target} jours) ===`);
  console.log(`${rows.length} pages, ${late.length} en retard\n`);
  for (const r of rows) {
    const flag = r.late ? "EN RETARD" : "OK       ";
    const ageStr = r.age === null ? "jamais date" : `${r.age}j`;
    console.log(`  [${flag}] ${ageStr.padStart(12)}  ${r.label}  (${r.path})`);
  }
  return late;
}

const lateL1 = reportFor(1, LEVEL1);
const lateL2 = reportFor(2, LEVEL2);

console.log(`\n--- Resume ---`);
console.log(`Niveau 1 en retard : ${lateL1.length}/${LEVEL1.length}`);
console.log(`Niveau 2 en retard : ${lateL2.length}/${LEVEL2.length}`);

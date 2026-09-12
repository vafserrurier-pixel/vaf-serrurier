// Genere content/editorial-calendar.md (lisible) et
// content/editorial-calendar.json (consomme par le workflow GitHub Action
// content-refresh-reminder.yml). Script a executer manuellement quand le
// calendrier a besoin d'etre etendu ou reordonne (ex. nouvelle page ajoutee
// au site, voir scripts/editorial-pages.js) -- jamais execute
// automatiquement par une Action.
//
// Mecanique : a chaque "cycle" (lundi/mercredi/vendredi), on avance de 2 pas
// dans la liste Niveau 1 (14 pages, cycle complet ~= 7 cycles ~= 2-3
// semaines) et de 1 pas dans la liste Niveau 2 (50 pages, cycle complet ~=
// 50 cycles ~= 3-4 mois). Rotation deterministe et sans etat : la date fait
// foi, pas un fichier de progression a maintenir.

const fs = require("fs");
const path = require("path");
const { LEVEL1, LEVEL2 } = require("./editorial-pages");

const ROOT = path.join(__dirname, "..");

if (LEVEL1.length !== 14) throw new Error(`Niveau 1 attendu 14, trouve ${LEVEL1.length}`);
if (LEVEL2.length !== 50) throw new Error(`Niveau 2 attendu 50, trouve ${LEVEL2.length}`);

// --- Generation des dates de cycle (lundi/mercredi/vendredi) ---
function nextCycleDay(d) {
  const day = d.getDay(); // 0=dim..6=sam
  const next = new Date(d);
  if (day === 1 || day === 3 || day === 5) return next; // deja un jour de cycle
  const daysToAdd = { 0: 1, 2: 1, 4: 1, 6: 2 }[day];
  next.setDate(next.getDate() + daysToAdd);
  return next;
}

const WEEKS = 52;
const CYCLES = WEEKS * 3; // lundi/mercredi/vendredi

let cursor = nextCycleDay(new Date());
let l1Idx = 0;
let l2Idx = 0;
const cycles = [];

for (let i = 0; i < CYCLES; i++) {
  const dateStr = cursor.toISOString().slice(0, 10);
  const l1Picks = [LEVEL1[l1Idx % LEVEL1.length], LEVEL1[(l1Idx + 1) % LEVEL1.length]];
  l1Idx = (l1Idx + 2) % LEVEL1.length;
  const l2Pick = LEVEL2[l2Idx % LEVEL2.length];
  l2Idx = (l2Idx + 1) % LEVEL2.length;

  cycles.push({
    date: dateStr,
    items: [
      { ...l1Picks[0], level: 1 },
      { ...l1Picks[1], level: 1 },
      { ...l2Pick, level: 2 },
    ],
  });

  // avancer de 2 jours ouvres (lun->mer, mer->ven, ven->lun+weekend)
  const day = cursor.getDay();
  const add = day === 5 ? 3 : 2;
  cursor = new Date(cursor);
  cursor.setDate(cursor.getDate() + add);
}

// --- content/editorial-calendar.json (consomme par le workflow) ---
fs.mkdirSync(path.join(ROOT, "content"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "content/editorial-calendar.json"),
  JSON.stringify(cycles, null, 2) + "\n",
);

// --- content/editorial-calendar.md (lisible, echantillon + resume) ---
const sampleDays = 30;
const sampleCycles = cycles.filter((c) => {
  const diffDays = (new Date(c.date) - new Date(cycles[0].date)) / 86400000;
  return diffDays < sampleDays;
});

let md = `# Calendrier editorial - vaf-serrurier.fr

Genere par \`scripts/generate-editorial-calendar.js\`. Ne pas editer a la
main : relancer le script pour regenerer (ex. si une page est ajoutee/retiree
du site, voir \`scripts/editorial-pages.js\`). Le fichier JSON jumeau
(\`editorial-calendar.json\`) est celui lu par le workflow GitHub Action de
rappel ; ce Markdown est la version pour consultation humaine.

## Principe

- **Niveau 1** (priorite haute, ${LEVEL1.length} pages) : accueil, 4 secteurs,
  tarifs, agences-syndics, 7 pages service. 2 pages proposees a chaque cycle
  -> rotation complete tous les ~7 cycles (~2-3 semaines).
- **Niveau 2** (priorite normale, ${LEVEL2.length} pages) : 46 quartiers + 4
  communes voisines. 1 page proposee a chaque cycle -> rotation complete tous
  les ~50 cycles (~3-4 mois).
- **Cycle** : chaque lundi/mercredi/vendredi (3 par semaine).
- Calendrier genere sur ${WEEKS} semaines (${CYCLES} cycles) a partir du
  ${cycles[0]?.date ?? "?"}.

## Echantillon des 30 premiers jours

| Date | Niveau 1 | Niveau 1 | Niveau 2 |
|---|---|---|---|
${sampleCycles
  .map((c) => {
    const l1 = c.items.filter((i) => i.level === 1);
    const l2 = c.items.find((i) => i.level === 2)?.label ?? "";
    return `| ${c.date} | ${l1[0]?.label ?? ""} | ${l1[1]?.label ?? ""} | ${l2} |`;
  })
  .join("\n")}

## Listes completes

### Niveau 1 (${LEVEL1.length} pages)
${LEVEL1.map((p, i) => `${i + 1}. ${p.label} (\`${p.path}\`)`).join("\n")}

### Niveau 2 (${LEVEL2.length} pages)
${LEVEL2.map((p, i) => `${i + 1}. ${p.label} (\`${p.path}\`)`).join("\n")}
`;

fs.writeFileSync(path.join(ROOT, "content/editorial-calendar.md"), md);

console.log(`OK : ${cycles.length} cycles generes (${WEEKS} semaines), du ${cycles[0].date} au ${cycles[cycles.length - 1].date}`);
console.log(`Niveau 1 : ${LEVEL1.length} pages | Niveau 2 : ${LEVEL2.length} pages | Total : ${LEVEL1.length + LEVEL2.length} pages`);

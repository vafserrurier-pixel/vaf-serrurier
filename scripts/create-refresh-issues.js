// Execute uniquement par le workflow .github/workflows/content-refresh-reminder.yml
// (ou manuellement pour tester). Lit content/editorial-calendar.json, trouve
// les pages prevues pour la date du jour, et ouvre une Issue GitHub par page
// -- rien d'autre. Aucune modification de fichier, aucun commit, aucun
// build, aucun deploiement : cette Issue est une notification, pas une
// action sur le site.
//
// Necessite `gh` (CLI GitHub, deja present sur les runners GitHub-hosted) et
// la variable d'environnement GH_TOKEN (voir le workflow).
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const match = arg.match(/^--([a-zA-Z-]+)=(.*)$/);
    if (match) out[match[1]] = match[2];
  }
  return out;
}
const args = parseArgs(process.argv.slice(2));
const targetDate = args.date || new Date().toISOString().slice(0, 10);

const calendarPath = path.join(ROOT, "content/editorial-calendar.json");
if (!fs.existsSync(calendarPath)) {
  console.error("content/editorial-calendar.json introuvable.");
  process.exit(1);
}
const cycles = JSON.parse(fs.readFileSync(calendarPath, "utf8"));
const today = cycles.find((c) => c.date === targetDate);

if (!today) {
  console.log(`Aucun cycle programme pour ${targetDate} (hors calendrier genere, ou date de repos). Rien a faire.`);
  process.exit(0);
}

const CHECKLIST = `- [ ] Le contenu ajouté ou modifié est-il factuellement exact (prix réel, avis réellement laissé par un client, statistique avec source vérifiable) ?
- [ ] Le changement apporte-t-il une vraie valeur au lecteur, ou est-ce cosmétique sans substance ?
- [ ] Le ton et le style sont-ils cohérents avec le reste du site (première personne, direct, sans jargon commercial) ?
- [ ] Si un schema JSON-LD est concerné (avis, FAQ, tarif), les données modifiées sont-elles cohérentes avec ce qui est affiché visuellement ?
- [ ] Le \`dateModified\` / \`lastmod\` sera-t-il mis à jour uniquement si le contenu a réellement changé (voir \`npm run update-freshness\`) ?
- [ ] Ai-je relu l'ensemble du paragraphe ou de la section modifiée, pas seulement la phrase changée ?
- [ ] Aucun tiret cadratin (—) introduit dans le texte ajouté ?
- [ ] Si un lieu spécifique est mentionné dans une carte de service (\`lib/serviceCards.ts\`), le texte reste-t-il cohérent pour ce lieu précis ?
- [ ] Le titre de la page (\`<title>\`) et sa meta description reflètent-ils toujours fidèlement le contenu après modification ?`;

function issueBody(item) {
  return `## Page concernée

- **Chemin** : \`${item.path}\`
- **Niveau de priorité** : ${item.level === 1 ? "1 (haute)" : "2 (normale)"}
- **Date proposée** : ${targetDate}

Cette Issue est une **notification uniquement**. Aucune modification n'a été
faite automatiquement. C'est à vous (ou à une session Claude Code que vous
lancez explicitement) de relire la page et de décider si un rafraîchissement
est utile.

## Checklist avant de clore cette Issue

${CHECKLIST}

## Une fois la mise à jour faite

Si vous avez réellement modifié le contenu, mettez à jour la date de
fraîcheur manuellement :

\`\`\`bash
npm run update-freshness -- --page=${item.path}
\`\`\`

Voir \`content/freshness-overrides.json\` et \`scripts/update-freshness.js\`
pour le détail. Si vous jugez qu'aucune modification n'était nécessaire,
fermez simplement cette Issue sans rien changer.
`;
}

function existingOpenIssue(title) {
  try {
    const out = execSync(
      `gh issue list --state open --search ${JSON.stringify(`in:title "${title}"`)} --json title --jq ".[].title"`,
      { cwd: ROOT, encoding: "utf8" },
    );
    return out.split("\n").some((line) => line.trim() === title);
  } catch {
    return false; // en cas de doute, ne bloque pas la creation (mieux vaut un doublon rare qu'un rappel silencieusement perdu)
  }
}

let created = 0;
for (const item of today.items) {
  const title = `Rafraîchissement de contenu — ${item.label}`;
  if (existingOpenIssue(title)) {
    console.log(`Deja ouverte, ignoree : ${title}`);
    continue;
  }
  const bodyFile = path.join(ROOT, `.tmp-issue-body-${created}.md`);
  fs.writeFileSync(bodyFile, issueBody(item));
  try {
    execSync(
      `gh issue create --title ${JSON.stringify(title)} --body-file "${bodyFile}" --label "content-refresh" --label "niveau-${item.level}"`,
      { cwd: ROOT, stdio: "inherit" },
    );
    created++;
  } finally {
    fs.rmSync(bodyFile, { force: true });
  }
}

console.log(`\n${created} issue(s) creee(s) pour ${targetDate}.`);

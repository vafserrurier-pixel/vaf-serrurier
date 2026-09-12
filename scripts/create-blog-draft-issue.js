// Usage : node scripts/create-blog-draft-issue.js --slug=xxx --description="..." --pr-url="..."
//
// Ouvre l'Issue de suivi pour un brouillon de blog (appele par le workflow
// blog-draft-weekly.yml apres creation de la branche et de la PR). N'ecrit
// aucun contenu de site, ne touche a aucun fichier de page : uniquement un
// appel `gh issue create`.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const match = arg.match(/^--([a-zA-Z-]+)=([\s\S]*)$/);
    if (match) out[match[1]] = match[2];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug || !args.description || !args["pr-url"]) {
  console.error('Usage : node scripts/create-blog-draft-issue.js --slug=xxx --description="..." --pr-url="..."');
  process.exit(1);
}

const CHECKLIST = `- [ ] Aucune statistique ou chiffre inventé sans source vérifiable
- [ ] Aucun conseil technique qui pourrait induire en erreur sur la sécurité (pas de détail de méthode de crochetage ou d'effraction)
- [ ] Ton et structure cohérents avec les articles déjà publiés
- [ ] Longueur raisonnable et information réellement utile, pas du remplissage
- [ ] Relecture complète avant de changer le statut en publié
- [ ] \`export const draft = true\` retiré, et \`noIndex\` retiré de \`buildMetadata\`
- [ ] \`blogPostingSchema\` et \`breadcrumbSchema\` ajoutés (voir un article existant comme modèle)
- [ ] Article ajouté à la liste \`posts\` de \`app/blog/page.tsx\`
- [ ] Article ajouté au sitemap (automatique une fois \`draft\` retiré, voir \`app/sitemap.ts\`)`;

const body = `## Sujet proposé

${args.description}

## Pull Request (brouillon, non mergeable en l'état)

${args["pr-url"]}

Cette Issue et la PR liée sont des **propositions**, rien n'est publié. La
branche \`blog-draft/${args.slug}\` ne contient qu'un squelette avec des
TODO, aucun paragraphe rédigé.

## Checklist avant de marquer la PR comme prête et de la fusionner

${CHECKLIST}
`;

const ROOT = path.join(__dirname, "..");
const bodyFile = path.join(ROOT, ".tmp-blog-issue-body.md");
fs.writeFileSync(bodyFile, body);
try {
  execSync(
    `gh issue create --title ${JSON.stringify(`Brouillon de blog — ${args.slug}`)} --body-file "${bodyFile}" --label "blog-draft"`,
    { cwd: ROOT, stdio: "inherit" },
  );
} finally {
  fs.rmSync(bodyFile, { force: true });
}

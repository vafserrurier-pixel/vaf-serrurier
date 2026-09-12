// Lit content/blog-topic-backlog.md, trouve le premier sujet de la section
// "À traiter" qui n'a pas encore de page publiee dans app/blog/ ni de
// branche blog-draft/<slug> deja existante (locale ou distante), et
// l'affiche en JSON sur stdout : {"slug": "...", "description": "..."}.
// N'ecrit rien, ne cree rien : simple lecture, utilisee par le workflow
// blog-draft-weekly.yml pour decider quel sujet scaffolder ensuite.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const BACKLOG_PATH = path.join(ROOT, "content/blog-topic-backlog.md");

const src = fs.readFileSync(BACKLOG_PATH, "utf8");
const section = src.split("## À traiter")[1]?.split("## Déjà publiés")[0] ?? "";

const entries = [];
const re = /\*\*slug:\s*`([a-z0-9-]+)`\*\*\s*\n\s*(.+?)(?=\n\n|\n\d+\.|$)/gs;
let match;
while ((match = re.exec(section))) {
  entries.push({ slug: match[1], description: match[2].trim().replace(/\s+/g, " ") });
}

if (entries.length === 0) {
  console.error("Aucun sujet trouve dans content/blog-topic-backlog.md (section 'À traiter' vide ou format inattendu).");
  process.exit(2);
}

function remoteBranchExists(branch) {
  try {
    const out = execSync(`git ls-remote --heads origin ${branch}`, { cwd: ROOT, encoding: "utf8" });
    return out.trim().length > 0;
  } catch {
    return false;
  }
}

for (const entry of entries) {
  const published = fs.existsSync(path.join(ROOT, "app/blog", entry.slug));
  const branchName = `blog-draft/${entry.slug}`;
  const hasDraftBranch = remoteBranchExists(branchName);
  if (!published && !hasDraftBranch) {
    console.log(JSON.stringify(entry));
    process.exit(0);
  }
}

console.error("Tous les sujets du backlog sont deja publies ou en cours de brouillon. Ajoutez de nouveaux sujets dans content/blog-topic-backlog.md.");
process.exit(1);

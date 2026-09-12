// Usage : node scripts/scaffold-blog-draft.js --slug=xxx --description="..."
//
// Cree app/blog/<slug>/page.tsx : un SQUELETTE, pas un article redige. Aucun
// paragraphe de contenu n'est invente automatiquement -- uniquement des
// TODO explicites, un titre/description de depart a affiner, et le
// balisage necessaire (metadata noIndex, schema desactive tant que
// draft=true). Un humain (Benoit ou une session Claude Code lancee
// explicitement) doit ecrire le vrai contenu avant toute publication.
const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const match = arg.match(/^--([a-zA-Z-]+)=(.*)$/);
    if (match) out[match[1]] = match[2];
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug || !args.description) {
  console.error('Usage : node scripts/scaffold-blog-draft.js --slug=xxx --description="..."');
  process.exit(1);
}

const ROOT = path.join(__dirname, "..");
const dir = path.join(ROOT, "app/blog", args.slug);
if (fs.existsSync(dir)) {
  console.error(`app/blog/${args.slug}/ existe deja. Rien fait.`);
  process.exit(1);
}
fs.mkdirSync(dir, { recursive: true });

const componentName = args.slug
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join("") + "DraftPage";

const content = `// BROUILLON — draft = true. Cette page n'apparait ni dans app/blog/page.tsx
// (index du blog) ni dans app/sitemap.ts tant qu'elle n'y est pas ajoutee a
// la main, et robots.noIndex empeche toute indexation. Ne JAMAIS retirer
// "draft = true" ni le noIndex sans avoir : (1) ecrit le vrai contenu de
// l'article a la place des TODO, (2) verifie la checklist de l'Issue GitHub
// associee, (3) ajoute ce post a la liste "posts" de app/blog/page.tsx et a
// app/sitemap.ts, (4) relu l'article en entier.
export const draft = true;

import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/metadata";

// TODO: affiner le titre (garder concis, pas de bourrage de mots-cles) et la
// description avant publication -- ce qui suit est un point de depart, pas
// un texte final.
export const metadata: Metadata = buildMetadata({
  path: "/blog/${args.slug}/",
  title: "TODO : titre de l'article | VAF",
  description: "TODO : meta description (1-2 phrases, ce que le lecteur va vraiment apprendre).",
  noIndex: true,
});

export default function ${componentName}() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "TODO : titre court", href: "/blog/${args.slug}/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-4">
        {/* TODO */}
        TODO : titre de l'article
      </h1>

      {/*
        Sujet propose (backlog) :
        ${args.description}

        TODO avant publication :
        - Rediger le corps de l'article (paragraphes reels, premiere
          personne, direct, sans jargon commercial -- meme ton que les
          articles deja publies dans app/blog/).
        - Aucun chiffre ou statistique sans source verifiable.
        - Aucun detail de methode de crochetage/effraction.
        - Longueur raisonnable, pas de remplissage.
        - Une fois pret : retirer "export const draft = true", retirer
          noIndex de buildMetadata, ajouter blogPostingSchema +
          breadcrumbSchema (voir un article existant comme
          app/blog/cles-hall-digicode-organigramme-copropriete/page.tsx pour
          le modele), ajouter l'entree dans app/blog/page.tsx et dans
          app/sitemap.ts.
      */}

      <div className="mt-8 text-slate leading-relaxed flex flex-col gap-4">
        <p>TODO : paragraphe d'introduction.</p>
        <p>TODO : developpement.</p>
        <p>TODO : conclusion / conseil pratique.</p>
      </div>

      <div className="mt-10">
        <CtaBlock />
      </div>
    </article>
  );
}
`;

fs.writeFileSync(path.join(dir, "page.tsx"), content);
console.log(`Cree : app/blog/${args.slug}/page.tsx (draft = true, noIndex)`);

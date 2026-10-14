import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { builtQuartiers, quartierHref } from "@/lib/quartiers";
import { builtCommunes, communeHref } from "@/lib/communes";
import { contentDates } from "@/lib/contentDates.generated";

/**
 * Date de derniere modification reelle du contenu d'une page (dernier commit Git de la page et de
 * ses fichiers de contenu, ou date de mise a jour d'un article de blog), calculee au build par
 * scripts/generate-content-dates.js. Si aucune date fiable n'existe pour la page : pas de
 * <lastmod> (undefined), jamais une date inventee comme l'heure du build.
 */
function lastModifiedFor(urlPath: string): Date | undefined {
  const iso = contentDates[urlPath];
  return iso ? new Date(iso) : undefined;
}

// Une entree du sitemap : l'URL, et son <lastmod> seulement s'il est fiable. Pas de
// <priority> ni de <changefreq> (Google les ignore).
function entry(urlPath: string): MetadataRoute.Sitemap[number] {
  const lastModified = lastModifiedFor(urlPath);
  return { url: `${business.domain}${urlPath}`, ...(lastModified ? { lastModified } : {}) };
}

const paths = [
  "",
  "a-propos",
  "ouverture-de-porte-nice",
  "urgence-serrurier-nice",
  "changement-serrure-nice",
  "serrure-carenee-nice",
  "poignee-blindee-nice",
  "blindage-porte-nice",
  "installation-porte-blindee-nice",
  "mise-en-securite-apres-effraction-nice",
  "agences-syndics-nice",
  "ouverture-de-coffre-fort-nice",
  "installation-coffre-fort-nice",
  "tarifs-serrurier-nice",
  "zones-intervention-nice",
  "serrurier-nice-centre",
  "serrurier-nice-est",
  "serrurier-nice-nord",
  "serrurier-nice-ouest",
  "contact",
  "blog",
  "mentions-legales",
  "conditions-generales-dutilisation",
  "conditions-generales-de-vente",
  "politique-de-confidentialite",
];

/**
 * Exclut les brouillons (`export const draft = true`, voir
 * scripts/scaffold-blog-draft.js) de la liste dynamique des articles de
 * blog : sans ce filtre, un brouillon non publié se retrouverait quand même
 * dans le sitemap simplement parce que son dossier existe sous app/blog/.
 */
function isDraft(slug: string): boolean {
  try {
    const src = readFileSync(join(process.cwd(), "app/blog", slug, "page.tsx"), "utf8");
    return /export const draft\s*=\s*true/.test(src);
  } catch {
    return false;
  }
}

function blogSlugs(): string[] {
  return readdirSync(join(process.cwd(), "app/blog"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !isDraft(entry.name))
    .map((entry) => `blog/${entry.name}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [...paths, ...blogSlugs()].map((path) =>
    entry(path ? `/${path}/` : "/"),
  );
  const quartierEntries: MetadataRoute.Sitemap = builtQuartiers.map((quartier) => entry(quartierHref(quartier)));
  const communeEntries: MetadataRoute.Sitemap = builtCommunes.map((commune) => entry(communeHref(commune)));

  return [...staticEntries, ...quartierEntries, ...communeEntries];
}

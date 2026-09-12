import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { builtQuartiers, quartierHref } from "@/lib/quartiers";
import { builtCommunes, communeHref } from "@/lib/communes";
import { contentDates } from "@/lib/contentDates.generated";

/**
 * Date de derniere modification reelle d'une page (dernier commit Git du
 * fichier page.tsx, calcule au build par scripts/generate-content-dates.js).
 * Retombe sur la date actuelle si la page n'est pas encore dans la table
 * (jamais le cas normalement, mais evite un sitemap casse si le fichier
 * genere n'a pas ete regenere).
 */
function lastModifiedFor(urlPath: string): Date {
  const iso = contentDates[urlPath];
  return iso ? new Date(iso) : new Date();
}

const paths = [
  "",
  "a-propos",
  "ouverture-de-porte-nice",
  "depannage-serrurier-nice",
  "changement-serrure-nice",
  "serrure-carenee-nice",
  "installation-porte-blindee-nice",
  "mis-en-securite-apres-effraction-nice",
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
  "remplacer-coffre-a-larder",
  "mentions-legales",
  "conditions-generales-dutilisation",
  "conditions-generales-de-vente",
  "politique-de-confidentialite",
];

function blogSlugs(): string[] {
  return readdirSync(join(process.cwd(), "app/blog"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `blog/${entry.name}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [...paths, ...blogSlugs()].map((path) => {
    const urlPath = path ? `/${path}/` : "/";
    return {
      url: `${business.domain}${urlPath}`,
      lastModified: lastModifiedFor(urlPath),
      changeFrequency: path === "" ? "daily" : "monthly",
      priority: path === "" ? 1 : 0.7,
    };
  });

  const quartierEntries: MetadataRoute.Sitemap = builtQuartiers.map((quartier) => {
    const urlPath = quartierHref(quartier);
    return {
      url: `${business.domain}${urlPath}`,
      lastModified: lastModifiedFor(urlPath),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  const communeEntries: MetadataRoute.Sitemap = builtCommunes.map((commune) => {
    const urlPath = communeHref(commune);
    return {
      url: `${business.domain}${urlPath}`,
      lastModified: lastModifiedFor(urlPath),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticEntries, ...quartierEntries, ...communeEntries];
}

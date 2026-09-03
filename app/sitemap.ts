import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { builtQuartiers, quartierHref } from "@/lib/quartiers";
import { builtCommunes, communeHref } from "@/lib/communes";

const paths = [
  "",
  "a-propos",
  "ouverture-de-porte-nice",
  "depannage-serrurier-nice",
  "changement-serrure-nice",
  "serrure-carenee-nice",
  "installation-porte-blindee-nice",
  "mis-en-securite-apres-effraction-nice",
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
  const staticEntries: MetadataRoute.Sitemap = [...paths, ...blogSlugs()].map((path) => ({
    url: `${business.domain}/${path}${path ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const quartierEntries: MetadataRoute.Sitemap = builtQuartiers.map((quartier) => ({
    url: `${business.domain}${quartierHref(quartier)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const communeEntries: MetadataRoute.Sitemap = builtCommunes.map((commune) => ({
    url: `${business.domain}${communeHref(commune)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...quartierEntries, ...communeEntries];
}

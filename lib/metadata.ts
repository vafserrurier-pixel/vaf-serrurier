import type { Metadata } from "next";
import { business } from "./business";

/**
 * Construit les metadata d'une page (title, description, canonical, Open
 * Graph, Twitter) à partir de son contenu propre. Sans ceci, openGraph/
 * twitter ne sont définis nulle part au niveau de la page : Next.js fait un
 * merge "shallow" (voir doc generate-metadata.md), donc chaque page hérite
 * tel quel de l'openGraph de la home défini dans app/layout.tsx (titre,
 * description et url de la home partout).
 */
export function buildMetadata(opts: {
  /** Chemin relatif de la page, ex. "/serrurier-nice-est/". */
  path: string;
  /** Titre de la page (balise <title>), réutilisé pour og:title/twitter:title. */
  title: string;
  /** Meta description, réutilisée pour og:description/twitter:description. */
  description: string;
  /** Empêche l'indexation (robots noindex,nofollow) : réservé aux brouillons non publiés. */
  noIndex?: boolean;
}): Metadata {
  const url = `${business.domain}${opts.path}`;
  return {
    alternates: { canonical: url },
    title: opts.title,
    description: opts.description,
    ...(opts.noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: business.legalName,
      title: opts.title,
      description: opts.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

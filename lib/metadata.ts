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
  /**
   * Image de partage (og:image, twitter:image), chemin relatif commençant par "/".
   * Par défaut, la carte de marque générée par app/opengraph-image.tsx.
   */
  image?: string;
  /**
   * Renseigne les champs twitter:label1/data1 (auteur) et
   * twitter:label2/data2 (temps de lecture) affichés sous une carte Twitter
   * d'article. Next.js n'a pas de champ type dédié pour ces balises : elles
   * passent par `other`, qui génère des <meta name="..." content="..."> bruts.
   */
  article?: {
    author: string;
    readingTime: string;
  };
}): Metadata {
  const url = `${business.domain}${opts.path}`;
  // Un openGraph défini au niveau de la page remplace celui du layout, y compris
  // l'image générée par le fichier opengraph-image : sans ces images explicites,
  // seule la home gardait son aperçu de partage.
  const shareImage = opts.image
    ? { url: `${business.domain}${opts.image}`, alt: opts.title }
    : { url: `${business.domain}/opengraph-image/`, width: 1200, height: 630, alt: opts.title };
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
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [shareImage.url],
    },
    ...(opts.article
      ? {
          other: {
            "twitter:label1": "Écrit par",
            "twitter:data1": opts.article.author,
            "twitter:label2": "Temps de lecture",
            "twitter:data2": opts.article.readingTime,
          },
        }
      : {}),
  };
}

// Source unique de verite pour la liste des articles de blog : utilisee par
// l'index (app/blog/page.tsx) et par la navigation en pied d'article
// (components/ArticleNav.tsx) pour le precedent/suivant et les articles lies.
// L'ordre du tableau fixe l'ordre de navigation precedent/suivant.
export type BlogPost = {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  accent: string;
  tagClass: string;
  datePublished: string;
  dateModified: string;
  /** Estime a la lecture du texte final (environ 200 mots/minute). */
  readingMinutes: number;
  /** Photo reelle utilisee en tete de l'article (voir public/images). */
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    href: "/blog/que-faire-apres-un-cambriolage/",
    title: "Que faire après un cambriolage : les bons réflexes",
    excerpt:
      "Ne rien toucher, faire opposition, porter plainte sous 48h, prévenir l'assurance : l'ordre des démarches recommandé après une effraction.",
    category: "Sécurité",
    accent: "border-t-urgent",
    tagClass: "bg-urgent/10 text-urgent",
    datePublished: "2026-08-09",
    dateModified: "2026-09-12",
    readingMinutes: 8,
    image: "/images/pool/benoit-serrurier-avant-intervention-nice.webp",
  },
  {
    href: "/blog/serrure-3-5-7-points-que-choisir/",
    title: "Serrure 3, 5 ou 7 points : laquelle choisir ?",
    excerpt:
      "Plus de points ne veut pas dire plus de sécurité à tous les coups. Comment choisir le bon niveau selon votre porte, sans suréquipement inutile.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-08-09",
    dateModified: "2026-09-12",
    readingMinutes: 7,
    image: "/images/serrurier-nice-porte-blindee-multipoints.webp",
  },
  {
    href: "/remplacer-coffre-a-larder/",
    title: "Comment remplacer un coffre à larder : guide simple et propre",
    excerpt:
      "Remplacer un coffre à larder demande de la précision : bonnes mesures, mécanisme adapté, fermeture qui joue bien. Voici comment je m'y prends.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-08-08",
    dateModified: "2026-09-12",
    readingMinutes: 7,
    image: "/images/pool/reparation-mecanisme-serrure-nice.webp",
  },
  {
    href: "/blog/certification-a2p-serrure/",
    title: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
    excerpt:
      "Une, deux ou trois étoiles : ce que signifie réellement cette certification, et comment vérifier qu'elle est authentique avant de payer.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
    datePublished: "2026-08-09",
    dateModified: "2026-09-12",
    readingMinutes: 8,
    image: "/images/pool/cylindre-fichet-demonte-serrurier-nice.webp",
  },
  {
    href: "/blog/serrurier-agree-assurances-vrai-faux/",
    title: "« Agréé toutes assurances » : ce que cette formule ne veut pas dire",
    excerpt:
      "Ce sigle qu'on voit sur beaucoup de camionnettes n'a pas d'autorité derrière lui. Voici ce qui compte vraiment pour votre dossier d'assurance.",
    category: "Éviter les arnaques",
    accent: "border-t-urgent",
    tagClass: "bg-urgent/10 text-urgent",
    datePublished: "2026-08-09",
    dateModified: "2026-09-12",
    readingMinutes: 6,
    image: "/images/pool/benoit-artisan-serrurier-nice.webp",
  },
  {
    href: "/blog/porte-qui-claque-avant-appeler-serrurier/",
    title: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
    excerpt:
      "Vérifications à faire avant d'appeler, ce qu'il ne faut surtout pas tenter seul, et comment reconnaître une annonce à prix d'appel trop bas.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-08-09",
    dateModified: "2026-09-12",
    readingMinutes: 7,
    image: "/images/serrurier-nice-ouverture-de-porte.webp",
  },
  {
    href: "/blog/qui-paie-changement-serrure-location/",
    title: "Location : qui paie le changement de serrure ?",
    excerpt:
      "Clés perdues, cambriolage, changement de locataire : la règle générale pour savoir qui du propriétaire ou du locataire prend en charge la facture.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
    datePublished: "2026-09-08",
    dateModified: "2026-09-12",
    readingMinutes: 9,
    image: "/images/serrurier-nice-changement-de-serrure.webp",
  },
  {
    href: "/blog/cles-hall-digicode-organigramme-copropriete/",
    title: "Clés de hall, digicode, organigramme : qui décide en copropriété ?",
    excerpt:
      "Serrure de hall, digicode, organigramme de clés : qui décide, qui paie, et ce qui détermine le prix d'une intervention en copropriété.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
    datePublished: "2026-09-03",
    dateModified: "2026-09-12",
    readingMinutes: 7,
    image: "/images/pool/porte-immeuble-interphone-securisee-nice.webp",
  },
];

export function blogPostByHref(href: string): BlogPost | undefined {
  return blogPosts.find((post) => post.href === href);
}

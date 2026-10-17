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
  /** Texte alternatif de cette image dans les vignettes (index du blog, articles lies). */
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    href: "/blog/serrure-bloquee-diagnostic-nice/",
    title: "Serrure bloquée à Nice : comment identifier la panne avant d'appeler un serrurier ?",
    excerpt:
      "Clé qui ne tourne plus, qui tourne dans le vide, pêne coincé : deux tests simples pour savoir si le problème vient de la clé, du cylindre, du mécanisme ou de la porte, et quand appeler.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    readingMinutes: 8,
    image: "/images/blog/serrure-bloquee-diagnostic-nice.webp",
    imageAlt: "Test d'une clé dans le cylindre d'une vieille porte d'entrée blanche, porte entrouverte",
  },
  {
    href: "/blog/cle-cassee-serrure-que-faire-nice/",
    title: "Clé cassée dans la serrure à Nice : que faire et quand appeler un serrurier",
    excerpt:
      "Ne forcez pas : ce que vous pouvez tenter selon la situation, ce qu'il vaut mieux éviter, et ce qui se passe quand j'interviens.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-10-06",
    dateModified: "2026-10-17",
    readingMinutes: 3,
    image: "/images/blog/cle-cassee-serrure-nice.webp",
    imageAlt: "Illustration d'une clé cassée à côté d'une serrure",
  },
  {
    href: "/blog/entretien-serrure/",
    title: "Entretien d'une serrure : le geste simple qui évite la panne",
    excerpt:
      "Démonter le cylindre, le nettoyer, le graisser au WD-40 : le geste que je recommande, et le produit à ne jamais utiliser, l'huile alimentaire.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    readingMinutes: 4,
    image: "/images/blog/entretien-serrure-cylindre-ancien-nice.webp",
    imageAlt: "Cylindre ancien d'une porte grise avec une clé engagée de travers, verrou en applique en dessous",
  },
  {
    href: "/blog/prix-serrurier-nice-guide/",
    title: "Combien coûte un serrurier à Nice ? Tarifs 2026",
    excerpt:
      "Déplacement, main d'œuvre, pièce, tarif de nuit : ce qui compose vraiment un prix de serrurier, et pourquoi le prix affiché le plus bas n'est pas toujours le bon calcul.",
    category: "Tarifs",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
    datePublished: "2026-09-25",
    dateModified: "2026-10-17",
    readingMinutes: 9,
    image: "/images/pool/benoit-artisan-serrurier-nice.webp",
    imageAlt: "Portrait de Benoît, artisan serrurier à Nice",
  },
  {
    href: "/blog/que-faire-apres-cambriolage-nice/",
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
    imageAlt: "Benoît, serrurier, devant une porte avec sa perceuse-visseuse",
  },
  {
    href: "/blog/serrure-multipoints-3-5-7-nice/",
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
    imageAlt: "Benoît montre la gâche d'une serrure multipoints sur le chambranle d'une porte en bois",
  },
  {
    href: "/blog/remplacer-coffre-a-larder-nice/",
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
    imageAlt: "Boîtier de serrure encastrée retiré de la porte, tenu à la main",
  },
  {
    href: "/blog/certification-a2p-serrure-nice/",
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
    imageAlt: "Serrure Fichet démontée avec son cylindre, tenue à la main gantée",
  },
  {
    href: "/blog/serrurier-agree-assurances-nice/",
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
    imageAlt: "Portrait de Benoît, artisan serrurier à Nice",
  },
  {
    href: "/blog/porte-qui-claque-serrurier-nice/",
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
    imageAlt: "Porte d'entrée blanche avec une serrure en applique à barres verticales et une clé dans le cylindre",
  },
  {
    href: "/blog/qui-paie-changement-serrure-location-nice/",
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
    imageAlt: "Pack de cylindres Heracles pour serrure carénée et plaque de poignée posés sur un parquet",
  },
  {
    href: "/blog/digicode-cles-hall-copropriete-nice/",
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
    imageAlt: "Porte d'immeuble blanche à deux vantaux avec cache de serrure et combiné d'interphone",
  },
  {
    href: "/blog/changer-serrure-separation-divorce/",
    title: "Séparation, divorce : qui a le droit de faire changer la serrure ?",
    excerpt:
      "Époux, pacsés, concubins : ce que dit vraiment la loi sur le changement de serrure pendant une séparation, et la procédure rapide en cas de violences conjugales.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
    datePublished: "2026-09-18",
    dateModified: "2026-09-18",
    readingMinutes: 7,
    image: "/images/pool/benoit-serrurier-serrure-posee-nice.webp",
    imageAlt: "Benoît devant une porte blanche équipée d'une serrure neuve, poignée et cylindre chromés",
  },
];

export function blogPostByHref(href: string): BlogPost | undefined {
  return blogPosts.find((post) => post.href === href);
}

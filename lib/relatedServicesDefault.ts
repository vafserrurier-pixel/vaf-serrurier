// Liste canonique et unique des 10 services affiches dans toute grille
// "Mes services" / "Autres interventions" du site (ServiceGrid,
// RelatedServicesGrid). Ordre et contenu confirmes par Benoit : ne pas
// ajouter, retirer ni reordonner sans validation explicite. Modifier ce
// fichier suffit a propager le changement partout, ces deux composants
// s'y referent par defaut.

import type { Locale } from "./locale";

export const mainServicesByLocale: Record<Locale, { href: string; label: string }[]> = {
  fr: [
    { href: "/urgence-serrurier-nice/", label: "Dépannage" },
    { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
    { href: "/changement-serrure-nice/", label: "Changement de serrure" },
    { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
    { href: "/poignee-blindee-nice/", label: "Poignée blindée" },
    { href: "/blindage-porte-nice/", label: "Blindage de porte" },
    { href: "/installation-porte-blindee-nice/", label: "Bloc-porte blindé" },
    { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
    { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
    { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
  ],
  en: [
    { href: "/urgence-serrurier-nice/", label: "Emergency callout" },
    { href: "/ouverture-de-porte-nice/", label: "Door opening" },
    { href: "/changement-serrure-nice/", label: "Lock change" },
    { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
    { href: "/poignee-blindee-nice/", label: "Armored handle" },
    { href: "/blindage-porte-nice/", label: "Door reinforcement" },
    { href: "/installation-porte-blindee-nice/", label: "Armored door block" },
    { href: "/mise-en-securite-apres-effraction-nice/", label: "After a break-in" },
    { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
    { href: "/installation-coffre-fort-nice/", label: "Safe installation" },
  ],
};

// Les 3 services mis en avant par defaut (page sans "sujet service" propre :
// accueil version pastilles exceptee, secteur, quartier, commune, et toute
// page service sans entree dans featuredOverridesByHref ci-dessous). Choix
// des 3 interventions les plus demandees, proposees a Benoit.
export const defaultFeaturedHrefs = [
  "/urgence-serrurier-nice/",
  "/ouverture-de-porte-nice/",
  "/changement-serrure-nice/",
];

// Mise en avant contextuelle : pour la page dont l'URL est la cle, ces 3
// hrefs (dans cet ordre) remplacent le defaut ci-dessus. Un href absent de
// cette liste retombe sur defaultFeaturedHrefs. La page elle-meme est de
// toute facon exclue via excludeHref (voir RelatedServicesGrid).
export const featuredOverridesByHref: Record<string, string[]> = {
  "/urgence-serrurier-nice/": [
    "/ouverture-de-porte-nice/",
    "/changement-serrure-nice/",
    "/mise-en-securite-apres-effraction-nice/",
  ],
  "/ouverture-de-porte-nice/": [
    "/urgence-serrurier-nice/",
    "/changement-serrure-nice/",
    "/mise-en-securite-apres-effraction-nice/",
  ],
  "/changement-serrure-nice/": [
    "/serrure-carenee-nice/",
    "/poignee-blindee-nice/",
    "/urgence-serrurier-nice/",
  ],
  "/serrure-carenee-nice/": [
    "/poignee-blindee-nice/",
    "/blindage-porte-nice/",
    "/installation-porte-blindee-nice/",
  ],
  "/poignee-blindee-nice/": [
    "/serrure-carenee-nice/",
    "/blindage-porte-nice/",
    "/installation-porte-blindee-nice/",
  ],
  "/blindage-porte-nice/": [
    "/installation-porte-blindee-nice/",
    "/serrure-carenee-nice/",
    "/poignee-blindee-nice/",
  ],
  "/installation-porte-blindee-nice/": [
    "/blindage-porte-nice/",
    "/serrure-carenee-nice/",
    "/poignee-blindee-nice/",
  ],
  "/mise-en-securite-apres-effraction-nice/": [
    "/poignee-blindee-nice/",
    "/blindage-porte-nice/",
    "/installation-porte-blindee-nice/",
  ],
  "/ouverture-de-coffre-fort-nice/": [
    "/installation-coffre-fort-nice/",
    "/urgence-serrurier-nice/",
    "/mise-en-securite-apres-effraction-nice/",
  ],
  "/installation-coffre-fort-nice/": [
    "/ouverture-de-coffre-fort-nice/",
    "/urgence-serrurier-nice/",
    "/mise-en-securite-apres-effraction-nice/",
  ],
};

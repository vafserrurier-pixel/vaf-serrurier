import type { Metadata } from "next";
import CommunePageTemplate from "@/components/CommunePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-laurent-du-var/" },
  title: "Serrurier à Saint-Laurent-du-Var – Vieux-Village & Cap 3000 | VAF",
  description:
    "Serrurier à Saint-Laurent-du-Var (06) : dépannage, ouverture de porte, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "J'interviens à Saint-Laurent-du-Var aussi bien dans le Vieux-Village, sur ses ruelles anciennes, que dans les quartiers résidentiels plus récents autour de Cap 3000, pour tout type de serrurerie : porte claquée, cylindre à changer, ou sécurisation d'un logement.",
  "La méthode reste la même partout : je diagnostique la situation au téléphone, j'annonce un prix avant de me déplacer, et je m'adapte au bâti réel une fois sur place, qu'il s'agisse d'une porte ancienne du Vieux-Village ou d'un appartement récent près du centre commercial.",
];

const blocks = [
  {
    heading: "Entre Vieux-Village médiéval et développement commercial",
    paragraphs: [
      "Saint-Laurent-du-Var, deuxième commune de la métropole niçoise avec environ 30 900 habitants, garde un Vieux-Village au passé bien plus ancien que son front de mer moderne le laisse penser. Le site est connu depuis l'époque romaine sous le nom de Statio Herculis, point de passage stratégique pour traverser le Var. Son église romane du XIe siècle et la maison Trastour, ancien four aux murs faits de galets roulés du fleuve, témoignent de cette histoire.",
      "Sur ce bâti ancien, je retrouve souvent des mécanismes qu'il faut savoir diagnostiquer avant d'intervenir, pour ne pas abîmer une porte qui a traversé les décennies. Dans les quartiers plus récents, ce sont plutôt des serrures multipoints ou des digicodes d'immeuble qu'il faut entretenir.",
    ],
  },
  {
    heading: "Cap 3000 et ses copropriétés récentes",
    paragraphs: [
      "Ouvert en 1969, Cap 3000 est aujourd'hui l'un des plus grands centres commerciaux des Alpes-Maritimes, avec près de 300 enseignes. Autour, la commune a vu se développer des résidences et copropriétés plus récentes que le Vieux-Village, avec leurs propres besoins : serrures de hall, digicodes, gâches électriques à entretenir sur la durée.",
      "J'interviens aussi bien pour un particulier que pour l'entretien courant d'une copropriété dans ce secteur, selon les mêmes règles que partout ailleurs : diagnostic avant intervention, prix annoncé avant de commencer.",
    ],
  },
  {
    heading: "Un accès rapide depuis Nice",
    paragraphs: [
      "Saint-Laurent-du-Var se trouve à environ 7 kilomètres du centre de Nice, de l'autre côté du fleuve Var, à environ 15 minutes de route selon la circulation. La commune est aussi à quelques minutes de l'aéroport Nice Côte d'Azur, ce qui explique la présence de nombreux logements occupés de façon intermittente. J'en tiens compte dans mon estimation de délai, annoncée avant le déplacement plutôt qu'un chiffre optimiste non tenu.",
    ],
  },
];

const safetyParagraph =
  "Je n'ai pas trouvé de statistique officielle de cambriolages spécifique à la commune de Saint-Laurent-du-Var. Elle fait partie du département des Alpes-Maritimes, où le taux moyen de cambriolages était de 0,43 % des logements en 2025 selon les chiffres du ministère de l'Intérieur — un repère régional plutôt qu'une donnée précise pour Saint-Laurent-du-Var. Les logements occupés de façon intermittente, plus nombreux ici en raison de la proximité de l'aéroport, restent statistiquement des cibles recherchées lors des périodes d'absence. Une serrure certifiée A2P et une porte en bon état réduisent nettement le risque, quelle que soit la commune.";

const faq = [
  {
    question: "Intervenez-vous aussi bien dans le Vieux-Village que près de Cap 3000 ?",
    answer:
      "Oui, je me déplace sur l'ensemble de la commune, que ce soit dans les ruelles du Vieux-Village ou dans les quartiers résidentiels plus récents.",
  },
  {
    question: "Pouvez-vous intervenir sur une porte ancienne du Vieux-Village ?",
    answer:
      "Oui, je diagnostique le mécanisme avant d'intervenir, pour préserver autant que possible une porte ancienne plutôt que de la remplacer systématiquement.",
  },
  {
    question: "Intervenez-vous sur les serrures de hall et digicodes des copropriétés récentes ?",
    answer:
      "Oui, aussi bien pour un dépannage ponctuel que pour l'entretien courant des accès d'une copropriété.",
  },
  {
    question: "Quel est votre délai d'intervention à Saint-Laurent-du-Var ?",
    answer:
      "Généralement 15 à 20 minutes depuis mon point de départ à Nice, selon la circulation. Je vous donne une estimation précise au téléphone.",
  },
  {
    question: "Donnez-vous un devis avant de vous déplacer jusqu'à Saint-Laurent-du-Var ?",
    answer:
      "Oui, toujours. Le prix est annoncé au téléphone avant le déplacement, quelle que soit la commune.",
  },
];

export default function SerrurierSaintLaurentDuVarPage() {
  return (
    <CommunePageTemplate
      commune="Saint-Laurent-du-Var"
      intro={intro}
      blocks={blocks}
      travelEstimate="15-20 min"
      safetyParagraph={safetyParagraph}
      faq={faq}
      path="/serrurier-saint-laurent-du-var/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

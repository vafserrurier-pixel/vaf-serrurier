import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-les-moulins-nice/" },
  title: "Serrurier Les Moulins Nice – Grands ensembles | VAF",
  description:
    "Serrurier aux Moulins, Nice : dépannage sur portes palières, sécurisation après effraction. Devis annoncé, intervention 24h/24.",
};

const intro = [
  "Serrure à changer, porte qui bloque aux Moulins : j'interviens 24h/24 dans ce quartier composé principalement de grands ensembles, où les portes palières et cylindres de hall subissent un usage intensif. Après une perte de clés ou une tentative d'effraction, je pose généralement un cylindre Vak ou Picard plus résistant, avec possibilité de blindage selon le cadre.",
  "Le quartier des Moulins, aussi appelé Moulins Point-du-Jour, a été construit entre 1965 et 1976 pour répondre à la demande croissante de logements sociaux, à la frontière entre Nice et Saint-Laurent-du-Var. Depuis 2009, il bénéficie d'un programme de renouvellement urbain porté par l'ANRU. Il est désormais desservi par le tramway depuis 2019, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens.",
];

const blocks = [
  {
    heading: "Un grand ensemble en rénovation urbaine",
    paragraphs: [
      "Le programme de renouvellement urbain engagé depuis 2009 transforme progressivement le bâti des Moulins, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens des années 1960-1970. Je m'adapte à ces deux réalités très différentes.",
    ],
  },
  {
    heading: "Un habitat collectif qui demande un suivi régulier",
    paragraphs: [
      "Dans les grands ensembles des Moulins, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement aux Moulins",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes, j'interviens sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.",
    ],
  },
  {
    heading: "Grand ensemble résidentiel des Moulins",
    paragraphs: [
      "Les Moulins, quartier résidentiel à l'ouest de Nice, se compose principalement de grands ensembles collectifs. Comme à l'Ariane, les portes de hall et les digicodes y subissent un usage intensif. J'interviens régulièrement pour ce type de panne, ainsi que pour la sécurisation des accès communs à la demande des syndics.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement aux Moulins en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 aux Moulins comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble aux Moulins ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes du renouvellement urbain des Moulins ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements depuis 2009, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Les tarifs sont-ils différents aux Moulins par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous après une effraction aux Moulins ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir aux Moulins ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLesMoulinsNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Les Moulins"
      crimeIntro="Les Moulins, grand ensemble résidentiel à l'ouest de Nice, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce type d'habitat collectif dense, la sécurisation des accès communs reste un enjeu partagé par l'ensemble des résidents."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-les-moulins-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

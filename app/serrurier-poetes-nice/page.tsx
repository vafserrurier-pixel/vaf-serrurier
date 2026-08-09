import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-poetes-nice/" },
  title: "Serrurier Quartier des Poètes Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier des Poètes, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier des Poètes trouve ses racines dans les années 1920, sur l'ancienne propriété des Dames de l'Assomption — le cadastre de 1873 y mentionne déjà un « établissement horticole » tenu par ces religieuses. Situé entre Cimiez à l'ouest et Saint-Maurice à l'est, le lotissement rend hommage à la littérature française : ses rues portent le nom de grands écrivains et poètes, Alfred de Musset, George Sand, Charles Baudelaire, André Chénier ou Edmond Rostand.",
  "Le parc Chambrun, ancien domaine du comte Aldebert de Chambrun, en constitue le centre historique. Aujourd'hui, le quartier des Poètes est un secteur résidentiel calme composé principalement d'immeubles collectifs, sur les hauteurs de Nice à proximité du Brancolar.",
];

const blocks = [
  {
    heading: "Un lotissement né du domaine des Dames de l'Assomption",
    paragraphs: [
      "Les immeubles construits sur cet ancien domaine horticole depuis les années 1920 ont chacun leurs particularités de bâti. Je diagnostique systématiquement l'état réel de la porte et du cylindre avant de proposer une réparation ou un remplacement.",
    ],
  },
  {
    heading: "Un habitat collectif sur les hauteurs nord",
    paragraphs: [
      "Dans les immeubles du quartier des Poètes, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement",
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
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier des Poètes en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier des Poètes comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble dans ce quartier ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous près du parc Chambrun ?",
    answer:
      "Oui, tout le quartier des Poètes autour du parc Chambrun fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents dans ce quartier par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous après une effraction dans ce quartier ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au quartier des Poètes ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierPoetesNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Poètes"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-poetes-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

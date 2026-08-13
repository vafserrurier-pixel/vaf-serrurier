import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-poetes-nice/" },
  title: "Serrurier Quartier des Poètes Nice – Halls d'immeuble | VAF",
  description:
    "Serrurier au quartier des Poètes, Nice : dépannage sur portes palières, sécurisation après effraction. Devis annoncé, 24h/24.",
};

const intro = [
  "Cylindre grippé, porte à sécuriser au quartier des Poètes : j'interviens 24h/24 sur ce secteur résidentiel calme, où les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je pose généralement un cylindre Heraclès ou Picard adapté au bâti de ce lotissement, qu'il s'agisse d'une réparation ou d'un remplacement après une tentative d'effraction.",
  "Le quartier trouve ses racines dans les années 1920, sur l'ancienne propriété horticole des Dames de l'Assomption. Situé entre Cimiez et Saint-Maurice, il rend hommage à la littérature française : ses rues portent le nom d'écrivains, Alfred de Musset, George Sand, Baudelaire, Edmond Rostand. Le parc Chambrun, ancien domaine du comte Aldebert de Chambrun, en constitue le centre historique, aujourd'hui entouré d'immeubles collectifs sur les hauteurs de Nice.",
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
  {
    heading: "Résidentiel calme dans le quartier des Poètes",
    paragraphs: [
      "Le quartier des Poètes, au nord de Nice, doit son nom aux rues qui portent des noms d'écrivains. Secteur résidentiel plutôt calme, il compte surtout des immeubles collectifs de taille moyenne. J'y interviens autant pour du dépannage classique — cylindre grippé, porte claquée — que pour des changements de serrure programmés à l'avance.",
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

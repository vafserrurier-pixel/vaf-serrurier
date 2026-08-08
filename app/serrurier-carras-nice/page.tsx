import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carras-nice/" },
  title: "Serrurier Carras Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Carras, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Carras est un quartier de l'ouest de Nice, entre Fabron et la mer, avec un bâti résidentiel mêlant immeubles collectifs et quelques zones commerciales de proximité. C'est un secteur bien desservi, à la fois résidentiel et pratique au quotidien.",
  "J'y interviens régulièrement pour du dépannage classique et des demandes de changement de serrure, aussi bien pour des appartements que pour des copropriétés.",
];

const blocks = [
  {
    heading: "Immeubles résidentiels de l'ouest niçois",
    paragraphs: [
      "Le bâti de Carras comprend des immeubles de tailles variées, avec des besoins de serrurerie classiques : cylindre qui accroche, porte qui ferme mal, clé cassée. Je diagnostique chaque situation avant d'intervenir.",
    ],
  },
  {
    heading: "Un quartier pratique au quotidien",
    paragraphs: [
      "La présence de commerces de proximité et la bonne desserte du quartier en font un secteur où j'interviens souvent rapidement, sans les contraintes d'accès que l'on peut trouver dans certaines zones plus denses du centre.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Carras en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Carras comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles résidentiels de Carras ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou serrure complète selon l'état constaté.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Carras par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Carras ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCarrasNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carras"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carras-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

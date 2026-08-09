import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-liberation-nice/" },
  title: "Serrurier Libération Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Libération, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier de la Libération s'est développé au XIXe siècle autour de l'avenue Malausséna, sur des terrains encore agricoles à l'époque. L'arrivée de la Gare du Sud en 1892 a donné une nouvelle énergie au secteur, entraînant l'urbanisation le long du boulevard Joseph-Garnier et de l'avenue Alfred-Borriglione. La place du Général-de-Gaulle porte la mémoire des résistants tombés lors des combats contre l'occupant allemand le 28 août 1944.",
  "Aujourd'hui, le quartier s'organise toujours autour de son marché couvert, l'un des plus animés de Nice, qui s'étend de la place du Général-de-Gaulle jusqu'à l'avenue Malausséna, la rue Clément-Roassal, la rue Joseph-Garnier et la rue Veillon. L'arrivée du tramway et la rénovation de la Gare du Sud ont dynamisé ce secteur populaire et vivant, au bâti dense d'immeubles du début et du milieu du XXe siècle.",
];

const blocks = [
  {
    heading: "Un bâti dense, des serrures à surveiller",
    paragraphs: [
      "Dans les immeubles de la Libération, les cylindres de porte d'entrée et les serrures de hall subissent un usage intensif lié à la vie de quartier. Un entretien ou un remplacement préventif évite souvent un blocage complet en pleine journée d'activité.",
    ],
  },
  {
    heading: "Autour du marché et de la Gare du Sud",
    paragraphs: [
      "Le secteur mêle logements et commerces de proximité, entre le marché couvert et la Gare du Sud rénovée. Pour la partie serrurerie de ces locaux — porte d'entrée, rideau métallique excepté —, j'applique la même méthode de diagnostic et de devis annoncé avant intervention.",
    ],
  },
  {
    heading: "Un quartier dynamisé par le tramway",
    paragraphs: [
      "La revitalisation récente du secteur, portée par l'arrivée du tramway et l'ouverture de nouveaux commerces, s'accompagne d'un renouvellement progressif du bâti. Je m'adapte aussi bien aux vieux immeubles qu'aux constructions plus récentes.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes du quartier, j'interviens sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Libération en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans le quartier Libération comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles proches du marché de la Libération ?",
    answer:
      "Oui, c'est un secteur où j'interviens régulièrement, notamment sur les cylindres de porte d'entrée et les serrures de hall soumis à un usage intensif.",
  },
  {
    question: "Intervenez-vous près de la Gare du Sud ?",
    answer:
      "Oui, tout le secteur autour de la Gare du Sud rénovée et de l'avenue Malausséna fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Libération par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous tôt le matin pendant les horaires du marché ?",
    answer:
      "Oui, je peux intervenir tôt le matin comme à tout autre moment de la journée, avec un devis annoncé avant le déplacement.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLiberationNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Libération"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-liberation-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

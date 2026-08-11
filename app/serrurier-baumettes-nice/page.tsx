import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-baumettes-nice/" },
  title: "Serrurier Baumettes Nice – Villas & immeubles anciens | VAF",
  description:
    "Serrurier aux Baumettes, Nice : sécurisation de villas, réparation de serrures anciennes près du musée Jules-Chéret. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure bloquée, porte qui ferme mal aux Baumettes : j'interviens 24h/24 sur ce secteur résidentiel de caractère, aussi bien pour une villa que pour un appartement en immeuble ancien. Beaucoup de propriétés ici datent du passé de lieu de villégiature du quartier, avec des serrures principales qu'il faut souvent adapter plutôt que remplacer d'office — je pose généralement un cylindre Heraclès ou Picard compatible avec le mécanisme existant.",
  "Le nom des Baumettes vient du niçois « bauma » (grotte). Ce quartier rural resté longtemps à l'écart de la vieille ville était surnommé le « petit Paris » par les Niçois. Son joyau reste le musée des Beaux-Arts Jules-Chéret, installé depuis 1878 dans le vaste domaine néoclassique de la princesse Elisabeth Kotschoubey. Ce passé de villégiature explique la présence de nombreuses villas et propriétés de caractère où mon expertise sur les serrures anciennes sert le plus souvent.",
];

const blocks = [
  {
    heading: "Sécurisation des villas et propriétés de caractère",
    paragraphs: [
      "Le secteur des Baumettes comprend des immeubles anciens et des villas héritées de son passé de lieu de villégiature, dont les portes et serrures méritent une attention particulière. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
    ],
  },
  {
    heading: "Dépannage près du musée Jules-Chéret",
    paragraphs: [
      "Le secteur proche du musée des Beaux-Arts conserve un cadre résidentiel calme et arboré, avec des propriétés parfois anciennes où je privilégie systématiquement une solution respectueuse du bâti d'origine.",
    ],
  },
  {
    heading: "Changement de serrure après perte de clés",
    paragraphs: [
      "Après une perte de clés ou pour anticiper une usure avancée, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement aux Baumettes en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 aux Baumettes comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des immeubles anciens de caractère ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'origine.",
  },
  {
    question: "Intervenez-vous près du musée des Beaux-Arts Jules-Chéret ?",
    answer:
      "Oui, tout ce secteur résidentiel autour du musée fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Travaillez-vous avec les copropriétés des Baumettes ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents aux Baumettes par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir aux Baumettes ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierBaumettesNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Baumettes"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-baumettes-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-philippe-nice/" },
  title: "Serrurier Saint-Philippe Nice – Villas & jardins | VAF",
  description:
    "Serrurier à Saint-Philippe, Nice : sécurisation de villas et propriétés avec jardin, dépannage près du parc Estienne-d'Orves. Devis annoncé, 24h/24.",
};

const intro = [
  "Cylindre grippé, porte à sécuriser à Saint-Philippe : j'interviens 24h/24 sur ce quartier vallonné qui compte de nombreuses villas et propriétés avec jardin. Pour une porte principale, un portillon ou un accès secondaire, je diagnostique chaque situation avant de proposer une réparation ou un remplacement, avec le plus souvent un cylindre Heraclès ou Fichet adapté au bâti déjà en place.",
  "Le quartier vallonné entre le Parc Impérial et La Madeleine tire son nom de la chapelle Saint-Philippe-Néri, achevée en 1612 et classée monument historique depuis 1964 — la plus vieille construction du secteur. Au XIXe siècle, la noblesse européenne appréciait ce climat méditerranéen idéal, comme le peintre Joseph Fricéro qui y reçut l'impératrice douairière de Russie. Le parc départemental Estienne-d'Orves, 15 hectares d'oliviers centenaires, occupe aujourd'hui la majeure partie de la colline autour de laquelle se sont bâties ces villas, entre l'avenue Estienne-d'Orves, la gare de Nice-Saint-Philippe et le boulevard du Tzarewitch.",
];

const blocks = [
  {
    heading: "Sécurisation de villas et propriétés avec jardin",
    paragraphs: [
      "Entre le parc Estienne-d'Orves et les rues en pente du quartier, Saint-Philippe compte de nombreuses villas et propriétés avec jardin, aux côtés d'immeubles plus récents. Je diagnostique chaque situation avant de proposer une solution adaptée, réparation ou remplacement, qu'il s'agisse d'une porte de villa ou d'un appartement.",
    ],
  },
  {
    heading: "Dépannage près de la chapelle Saint-Philippe-Néri",
    paragraphs: [
      "Le secteur historique proche de la chapelle classée monument historique conserve un bâti ancien, où je privilégie la réparation d'une serrure existante plutôt qu'un remplacement systématique quand le mécanisme le permet.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou pour anticiper une usure avancée, je propose des solutions adaptées à l'état réel de votre porte, sans suréquipement inutile.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Dépannage résidentiel calme à Saint-Philippe",
    paragraphs: [
      "Saint-Philippe, secteur résidentiel proche de Cimiez, mêle villas et petites résidences dans un cadre plutôt calme. Les demandes y concernent surtout l'entretien préventif : un cylindre qui commence à forcer, une porte qui ferme mal après plusieurs années. Intervenir avant la panne complète coûte toujours moins cher qu'un dépannage en urgence.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Philippe en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Philippe comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas et maisons individuelles du secteur ?",
    answer:
      "Oui, Saint-Philippe compte de nombreuses propriétés avec jardin. Je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement.",
  },
  {
    question: "Intervenez-vous près du parc Estienne-d'Orves ?",
    answer:
      "Oui, tout le secteur autour du parc et de la chapelle Saint-Philippe-Néri fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Philippe par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les villas du secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité adaptée à une maison individuelle.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Philippe ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintPhilippeNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Philippe"
      crimeIntro="Saint-Philippe, secteur résidentiel calme proche de Cimiez, suit la même évolution que le reste de la ville."
      crimeClosing="Un entretien préventif de la serrure reste le moyen le plus simple d'éviter une mauvaise surprise dans ce type de quartier."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-philippe-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

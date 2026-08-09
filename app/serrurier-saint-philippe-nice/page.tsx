import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-philippe-nice/" },
  title: "Serrurier Saint-Philippe Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier Saint-Philippe, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Saint-Philippe est un quartier vallonné qui s'étend d'est en ouest entre le Parc Impérial et La Madeleine, et du nord au sud entre la corniche de Magnan et la route Mathis. Son nom vient d'une ancienne chapelle du XVIIe siècle : la chapelle Saint-Philippe-Néri, plus vieille construction du quartier, achevée en 1612 pour le compte d'un riche Niçois, Ponce Ceva, et classée monument historique depuis 1964.",
  "Au XIXe siècle, la noblesse européenne appréciait particulièrement ce secteur pour son climat méditerranéen idéal. Le peintre Joseph Fricéro et son épouse y vécurent de 1852 à 1870, recevant notamment l'impératrice douairière Alexandra Feodorovna, veuve de Nicolas Ier de Russie, dans leur propriété. Aujourd'hui, le parc départemental Estienne-d'Orves, 15 hectares plantés d'eucalyptus, de chênes centenaires et d'oliviers dont un millénaire, occupe la majeure partie de la colline.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel vallonné et arboré",
    paragraphs: [
      "Entre le parc Estienne-d'Orves et les rues en pente du quartier, Saint-Philippe compte de nombreuses villas et propriétés avec jardin, aux côtés d'immeubles plus récents. Je diagnostique chaque situation avant de proposer une solution adaptée, réparation ou remplacement, qu'il s'agisse d'une porte de villa ou d'un appartement.",
    ],
  },
  {
    heading: "Autour de la chapelle Saint-Philippe-Néri",
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
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

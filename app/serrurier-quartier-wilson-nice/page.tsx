import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-wilson-nice/" },
  title: "Serrurier Quartier Wilson Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier Wilson, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier Wilson se situe au cœur de Nice, dans un secteur résidentiel dense typique du centre-ville, à quelques pas des grands axes commerçants. Le bâti y est majoritairement composé d'immeubles d'habitation du début et du milieu du XXe siècle.",
  "J'y interviens régulièrement pour du dépannage courant, des changements de serrure et des demandes de sécurisation pour des appartements comme pour de petites copropriétés.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel central",
    paragraphs: [
      "Les immeubles du quartier Wilson demandent souvent une attention particulière sur les cylindres de porte d'entrée, usés par un passage quotidien important. Je diagnostique systématiquement avant de proposer une réparation ou un remplacement.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou un simple constat d'usure, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
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
    question: "Intervenez-vous rapidement au quartier Wilson en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles anciens du secteur ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet de la serrure.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier Wilson ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Wilson par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierWilsonNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier Wilson"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-wilson-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

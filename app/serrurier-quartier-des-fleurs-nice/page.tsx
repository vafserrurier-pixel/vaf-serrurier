import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-fleurs-nice/" },
  title: "Serrurier Quartier des Fleurs Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier des Fleurs, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier des Fleurs, dont les rues portent des noms de fleurs, se situe dans le centre de Nice, à proximité du quartier des Musiciens. C'est un secteur résidentiel calme, avec un bâti d'immeubles de standing modeste à moyen.",
  "J'y interviens pour du dépannage courant, des changements de serrure et des demandes de sécurisation pour des appartements comme pour de petites copropriétés.",
];

const blocks = [
  {
    heading: "Un secteur résidentiel du centre",
    paragraphs: [
      "Les immeubles du quartier des Fleurs sont majoritairement résidentiels, avec des besoins classiques de serrurerie : cylindre grippé, porte qui ferme mal, ou volonté de renforcer une porte d'entrée vieillissante.",
    ],
  },
  {
    heading: "Réparation avant remplacement",
    paragraphs: [
      "Je privilégie systématiquement le diagnostic et la réparation quand c'est possible, avant d'envisager un remplacement complet de la serrure, pour limiter les coûts inutiles.",
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
    question: "Intervenez-vous rapidement au quartier des Fleurs en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles résidentiels du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou serrure complète.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier des Fleurs ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents dans ce quartier par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierDesFleursNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier des Fleurs"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-des-fleurs-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

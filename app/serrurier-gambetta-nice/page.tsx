import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-gambetta-nice/" },
  title: "Serrurier Gambetta Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Gambetta, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier Gambetta s'étend entre la gare de Nice-Ville et le secteur de la Libération, avec un bâti résidentiel dense typique du début du XXe siècle. C'est un quartier central, à la fois calme et bien desservi.",
  "J'y interviens régulièrement pour du dépannage classique, du changement de serrure et des demandes de sécurisation pour des appartements comme pour des petits immeubles.",
];

const blocks = [
  {
    heading: "Immeubles résidentiels du début du XXe siècle",
    paragraphs: [
      "Le bâti de Gambetta comprend beaucoup d'immeubles de standing modeste à moyen, avec des serrures qui ont parfois plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
    ],
  },
  {
    heading: "Un secteur résidentiel calme",
    paragraphs: [
      "Contrairement à des quartiers plus commerçants, Gambetta reste majoritairement résidentiel, ce qui n'empêche pas les mêmes besoins : porte claquée, cylindre grippé, ou volonté de renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin.",
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
    question: "Intervenez-vous rapidement au quartier Gambetta en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier Gambetta comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur des serrures anciennes typiques du quartier ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet de la serrure.",
  },
  {
    question: "Intervenez-vous pour les copropriétés de Gambetta ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Gambetta par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierGambettaNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Gambetta"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-gambetta-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

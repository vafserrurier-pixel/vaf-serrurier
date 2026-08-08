import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-gairaut-nice/" },
  title: "Serrurier Gairaut Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Gairaut, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Gairaut est un quartier résidentiel situé sur les hauteurs nord de Nice, connu pour sa cascade et son cadre plus rural que le centre-ville. Le bâti y est principalement composé de villas et de petites résidences.",
  "J'y interviens pour des propriétaires de maisons individuelles comme pour des petites copropriétés, avec la même méthode de diagnostic et de devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un secteur de villas et de maisons individuelles",
    paragraphs: [
      "À Gairaut, l'essentiel du bâti est constitué de maisons avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution adaptée, de la simple réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un cadre plus rural, un déplacement à anticiper",
    paragraphs: [
      "Gairaut étant plus éloigné du centre-ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès aux hauteurs de Nice.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les petites copropriétés du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Gairaut en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Gairaut comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les maisons individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Gairaut par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les petites copropriétés du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Gairaut ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierGairautNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Gairaut"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-gairaut-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

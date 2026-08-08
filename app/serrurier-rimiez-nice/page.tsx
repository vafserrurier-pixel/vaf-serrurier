import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-rimiez-nice/" },
  title: "Serrurier Rimiez Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Rimiez, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Rimiez est un quartier résidentiel des hauteurs nord de Nice, voisin de Cimiez, avec un cadre verdoyant et calme. Le bâti y mêle villas, petites résidences et quelques ensembles collectifs plus importants.",
  "J'y interviens pour des configurations variées, avec la même exigence de diagnostic avant toute intervention, que ce soit pour une villa ou un appartement en résidence.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel calme",
    paragraphs: [
      "Rimiez conserve un caractère plus vert et résidentiel que le centre-ville, avec des maisons individuelles et des petites copropriétés. Le diagnostic reste systématique pour identifier la meilleure solution selon votre porte.",
    ],
  },
  {
    heading: "Villas et accès individuels",
    paragraphs: [
      "Pour les villas du secteur, j'interviens sur la porte d'entrée principale, avec des solutions allant de la simple réparation au renforcement complet selon l'état constaté.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les résidences collectives du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Rimiez en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Rimiez comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du quartier ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte.",
  },
  {
    question: "Travaillez-vous avec les résidences collectives de Rimiez ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Rimiez par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Rimiez ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierRimiezNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Rimiez"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-rimiez-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

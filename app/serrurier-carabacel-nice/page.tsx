import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carabacel-nice/" },
  title: "Serrurier Carabacel Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Carabacel, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Carabacel est un quartier résidentiel sur les hauteurs proches du centre-ville, entre la gare et Cimiez. Il mêle immeubles anciens, villas et quelques résidences plus récentes, sur un terrain en pente qui lui donne un caractère plus calme.",
  "J'y interviens pour des configurations variées : appartements en immeuble ancien, villas individuelles, et parties communes de petites copropriétés.",
];

const blocks = [
  {
    heading: "Un bâti varié entre ancien et villas",
    paragraphs: [
      "Carabacel mélange immeubles anciens du centre-ville étendu et villas individuelles sur les hauteurs. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ancienne ou d'une porte de villa plus récente.",
    ],
  },
  {
    heading: "Un secteur calme, proche du centre",
    paragraphs: [
      "La position de Carabacel, à la fois proche du centre-ville et plus tranquille, en fait un secteur où j'interviens régulièrement pour du dépannage courant comme pour des projets de sécurisation programmés.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les petites copropriétés du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Carabacel en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Carabacel comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, comme pour tout type de porte.",
  },
  {
    question: "Travaillez-vous aussi sur des immeubles anciens à Carabacel ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
  },
  {
    question: "Les tarifs sont-ils différents à Carabacel par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCarabacelNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carabacel"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carabacel-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

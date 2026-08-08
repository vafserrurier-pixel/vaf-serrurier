import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-isidore-nice/" },
  title: "Serrurier Saint-Isidore Nice – 24h/24 | VAF",
  description:
    "Serrurier à Saint-Isidore, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Saint-Isidore est un secteur de l'extrême ouest de Nice, avec un habitat plus récent que le centre-ville, mêlant résidences neuves et quelques maisons individuelles. C'est un quartier en développement, plus suburbain que le reste de la ville.",
  "J'y interviens pour des logements récents comme pour des maisons individuelles, avec la même méthode de diagnostic et de devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un habitat plus récent",
    paragraphs: [
      "À Saint-Isidore, beaucoup de résidences sont plus récentes qu'ailleurs à Nice, avec des serrures multipoints standard. Le diagnostic reste néanmoins systématique avant toute intervention.",
    ],
  },
  {
    heading: "Un secteur excentré, un déplacement à anticiper",
    paragraphs: [
      "Saint-Isidore étant à l'extrême ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance réelle.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les résidences du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Isidore en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Isidore comme sur le reste de Nice, avec un délai habituel de 25 à 35 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des résidences récentes du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Isidore par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les résidences du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Isidore ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintIsidoreNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Isidore"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="25 à 35 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-isidore-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

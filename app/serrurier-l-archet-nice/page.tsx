import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-l-archet-nice/" },
  title: "Serrurier L'Archet Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à L'Archet, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "L'Archet est un secteur de l'ouest de Nice, connu pour son pôle hospitalier, entouré de zones résidentielles et de quelques résidences plus récentes. C'est un quartier pratique, proche des grands axes de circulation vers l'ouest du département.",
  "J'y interviens pour des particuliers en appartement comme pour des maisons individuelles, avec la même méthode de diagnostic partout à Nice.",
];

const blocks = [
  {
    heading: "Un secteur résidentiel et institutionnel",
    paragraphs: [
      "Autour du pôle hospitalier de L'Archet, le tissu résidentiel mêle immeubles collectifs et quelques maisons individuelles. Le diagnostic reste systématique avant toute intervention.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      "Pour les résidences du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "L'Archet étant à l'ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation sur les axes menant à ce secteur.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à L'Archet en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à L'Archet comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des logements proches du pôle hospitalier ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Travaillez-vous avec les copropriétés de L'Archet ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à L'Archet par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à L'Archet ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierArchetNicePage() {
  return (
    <QuartierPageTemplate
      quartier="L'Archet"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-l-archet-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

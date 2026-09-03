import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-l-archet-nice/" },
  title: "Serrurier L'Archet Nice – Près du CHU | VAF",
  description:
    "Serrurier à L'Archet, Nice : dépannage près du pôle hospitalier universitaire, changement de serrure. Devis annoncé, 24h/24.",
};

const intro = [
  "Besoin d'un serrurier à L'Archet : j'interviens 24h/24 sur ce secteur résidentiel et institutionnel autour du pôle hospitalier universitaire, en vous donnant un délai réaliste dès l'appel compte tenu de la distance à l'ouest de la ville. Je diagnostique chaque situation avant de proposer un cylindre Picard ou Fichet adapté au bâti, immeuble collectif ou maison individuelle.",
  "L'hôpital de L'Archet, qui donne son nom au quartier, est né d'un projet porté dans les années 1970, avec une première pierre posée en 1975 en présence de la ministre de la Santé Simone Veil. Il est inauguré en 1979. Les extensions Archet 2 (1996) et Archet 3 (2015) en ont fait un pôle hospitalier universitaire d'envergure, autour duquel s'est développé ce secteur résidentiel mêlant immeubles collectifs et résidences plus récentes.",
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
  {
    heading: "Résidences proches du CHU de l'Archet",
    paragraphs: [
      "Le secteur de l'Archet, au nord-ouest de Nice, s'est développé autour de l'hôpital du même nom. Les résidences collectives qui l'entourent accueillent notamment du personnel soignant aux horaires décalés. J'y interviens à toute heure, de jour comme de nuit, pour les urgences liées à une porte claquée ou une clé perdue.",
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
    question: "Intervenez-vous près des bâtiments Archet 1, 2 et 3 ?",
    answer:
      "Oui, tout le pôle hospitalier universitaire et son secteur résidentiel environnant font partie de ma zone d'intervention habituelle.",
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
      crimeIntro="Le secteur de l'Archet, développé autour de l'hôpital du même nom, reste concerné par cette tendance comme le reste de la ville."
      crimeClosing="Pour les résidents aux horaires décalés de ce secteur, une serrure fiable à toute heure compte particulièrement."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

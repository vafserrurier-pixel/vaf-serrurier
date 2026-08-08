import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-la-madeleine-nice/" },
  title: "Serrurier La Madeleine Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à La Madeleine, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "La Madeleine est un quartier résidentiel de Nice, avec un bâti mêlant immeubles collectifs et quelques maisons individuelles. C'est un secteur essentiellement résidentiel, où je réalise régulièrement des interventions classiques de serrurerie.",
  "J'y interviens pour des particuliers en appartement comme pour des maisons, avec la même méthode de diagnostic et de devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un bâti résidentiel mixte",
    paragraphs: [
      "Le quartier de La Madeleine comprend des immeubles collectifs et quelques maisons individuelles. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ou d'une porte de maison.",
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
    question: "Intervenez-vous rapidement à La Madeleine en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à La Madeleine comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les maisons individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à La Madeleine par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à La Madeleine ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLaMadeleineNicePage() {
  return (
    <QuartierPageTemplate
      quartier="La Madeleine"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-la-madeleine-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

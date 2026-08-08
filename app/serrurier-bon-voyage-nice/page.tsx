import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-bon-voyage-nice/" },
  title: "Serrurier Bon Voyage Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Bon Voyage, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Bon Voyage est un quartier résidentiel de l'est de Nice, sur les hauteurs proches du port, avec un bâti mêlant immeubles collectifs et quelques villas. C'est un secteur calme, principalement résidentiel.",
  "J'y interviens pour des appartements comme pour des maisons individuelles, avec la même méthode de diagnostic et de devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel sur les hauteurs de l'est",
    paragraphs: [
      "Le secteur de Bon Voyage comprend des immeubles collectifs et quelques villas individuelles. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ou d'une porte de maison.",
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
    question: "Intervenez-vous rapidement à Bon Voyage en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Bon Voyage comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Bon Voyage par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Bon Voyage ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierBonVoyageNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Bon Voyage"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-bon-voyage-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

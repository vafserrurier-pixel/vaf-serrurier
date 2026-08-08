import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-fabron-nice/" },
  title: "Serrurier Fabron Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Fabron, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Fabron est un quartier résidentiel des hauteurs ouest de Nice, entre le centre-ville et l'aéroport. Il mêle villas individuelles, résidences plus récentes et quelques ensembles collectifs, sur un terrain vallonné qui donne à ce secteur un caractère plus calme et aéré que le centre-ville.",
  "J'y interviens régulièrement, aussi bien pour des maisons individuelles que pour des appartements en résidence, avec la même exigence de diagnostic avant toute intervention.",
];

const blocks = [
  {
    heading: "Maisons individuelles et portails",
    paragraphs: [
      "À Fabron, une part importante du bâti est constituée de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, qu'il s'agisse d'une réparation, d'un remplacement de cylindre ou d'un renforcement complet de la porte.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      "Le secteur compte aussi des résidences plus récentes, avec des serrures multipoints standard. J'interviens sur les portes d'appartement comme sur les parties communes, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Un secteur plus étendu, un déplacement organisé",
    paragraphs: [
      "Fabron étant plus excentré que le centre-ville, je m'organise pour vous donner un délai d'intervention réaliste dès l'appel, plutôt qu'une estimation optimiste qui ne tiendrait pas compte de la distance réelle.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Fabron en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Fabron comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les portes de villas individuelles à Fabron ?",
    answer:
      "Oui, c'est une configuration fréquente dans le quartier. Je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement.",
  },
  {
    question: "Travaillez-vous aussi avec les syndics de résidence à Fabron ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Les tarifs sont-ils différents à Fabron par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Fabron ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierFabronNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Fabron"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-fabron-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

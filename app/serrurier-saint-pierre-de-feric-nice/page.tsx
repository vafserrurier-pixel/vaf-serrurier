import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-pierre-de-feric-nice/" },
  title: "Serrurier Saint-Pierre-de-Féric Nice – 24h/24 | VAF",
  description:
    "Serrurier à Saint-Pierre-de-Féric, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Saint-Pierre-de-Féric est un secteur résidentiel sur les hauteurs de Nice, au caractère plus villageois et verdoyant que le centre-ville. Le bâti y est principalement constitué de villas et de maisons individuelles.",
  "J'y interviens pour des propriétaires de maisons, avec la même méthode de diagnostic et de devis annoncé avant intervention que partout ailleurs à Nice.",
];

const blocks = [
  {
    heading: "Un secteur de villas et de maisons",
    paragraphs: [
      "À Saint-Pierre-de-Féric, l'essentiel du bâti est constitué de maisons individuelles avec porte d'entrée propre. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un secteur excentré, un déplacement à anticiper",
    paragraphs: [
      "Ce secteur étant plus éloigné du centre-ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès aux hauteurs de Nice.",
    ],
  },
  {
    heading: "Sécurisation des maisons individuelles",
    paragraphs: [
      "Pour les maisons du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Pierre-de-Féric en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Pierre-de-Féric comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les maisons individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Pierre-de-Féric par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les maisons du secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Pierre-de-Féric ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintPierreDeFericNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Pierre-de-Féric"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-pierre-de-feric-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

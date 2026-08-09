import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-corniche-des-oliviers-nice/" },
  title: "Serrurier Corniche des Oliviers Nice – Blindage villas | VAF",
  description:
    "Serrurier à la Corniche des Oliviers, Nice : blindage et renforcement de villas sur les hauteurs. Devis annoncé, intervention 24h/24.",
};

const intro = [
  "Cylindre grippé, porte à sécuriser à la Corniche des Oliviers : j'interviens sur ce secteur de villas entre Saint-Pierre-de-Féric et Saint-Pancrace, en vous donnant un délai réaliste dès l'appel compte tenu de la distance. Je diagnostique la serrure en place et propose généralement un cylindre Cisa ou Fichet adapté, avec possibilité de blindage si la porte le permet.",
  "La Corniche des Oliviers a été inaugurée en 1931, sur les hauteurs entre Fabron et Nice Nord. Comme beaucoup de secteurs agricoles des collines niçoises, ses cultures ont été remplacées par des exploitations horticoles dédiées à l'œillet, avant que l'urbanisation des années 1960-1970 ne transforme le quartier en secteur résidentiel offrant des vues remarquables sur la baie des Anges et le Mercantour.",
];

const blocks = [
  {
    heading: "Un secteur de villas dans un cadre verdoyant",
    paragraphs: [
      "Sur la Corniche des Oliviers, l'essentiel du bâti est constitué de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un secteur excentré, un déplacement à anticiper",
    paragraphs: [
      "Ce secteur étant sur les hauteurs de Nice, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès.",
    ],
  },
  {
    heading: "Sécurisation des propriétés",
    paragraphs: [
      "Pour les villas du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à la Corniche des Oliviers en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce secteur comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous sur tout le tracé de la Corniche des Oliviers, de Saint-Pierre-de-Féric à Saint-Pancrace ?",
    answer:
      "Oui, tout ce secteur fait partie de ma zone d'intervention habituelle sur les hauteurs nord de Nice.",
  },
  {
    question: "Les tarifs sont-ils différents dans ce secteur par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les villas de ce secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce secteur ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCornicheDesOliviersNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Corniche des Oliviers"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-corniche-des-oliviers-nice/"
      relatedServices={[
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

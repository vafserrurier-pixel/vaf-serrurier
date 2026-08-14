import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-californie-nice/" },
  title: "Serrurier Californie Nice – Villas familiales | VAF",
  description:
    "Serrurier au quartier Californie, Nice : sécurisation de villas familiales, dépannage près de l'aéroport. Devis annoncé, 24h/24.",
};

const intro = [
  "Dépannage serrurier au quartier Californie : j'interviens 24h/24 sur ce secteur familial du bas de Fabron, avec de nombreuses villas et résidences de standing à proximité de la mer. Je diagnostique chaque configuration avant de proposer généralement un cylindre Fichet ou Cisa, avec possibilité de blindage de la porte principale si le bâti le permet.",
  "Le quartier Californie doit son nom à l'aéroport de Nice, dont l'histoire commence ici en 1910 avec un premier meeting aérien devant 100 000 spectateurs, sur ce qui n'était alors qu'un champ caillouteux. Le nom garde aussi le souvenir de l'hippodrome de Californie, déplacé lors de l'agrandissement de la piste. Aujourd'hui desservi par la ligne 2 du tramway, ce quartier urbain décontracté reste particulièrement apprécié des familles pour son bâti mêlant villas et résidences.",
];

const blocks = [
  {
    heading: "Un quartier né de l'histoire aéronautique niçoise",
    paragraphs: [
      "L'héritage aéronautique du quartier Californie, berceau du premier meeting aérien niçois en 1910, se lit dans sa proximité immédiate avec l'aéroport actuel. Les résidences construites depuis ont des profils variés que je diagnostique au cas par cas.",
    ],
  },
  {
    heading: "Villas et résidences de standing",
    paragraphs: [
      "Le quartier Californie compte de nombreuses villas avec porte d'entrée individuelle, ainsi que des résidences plus récentes. Je diagnostique chaque configuration avant de proposer une solution de sécurisation cohérente.",
    ],
  },
  {
    heading: "Sécurisation des propriétés",
    paragraphs: [
      "Pour les villas du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les résidences collectives du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Bâti ancien et villas du quartier Californie",
    paragraphs: [
      "Le quartier Californie, à l'ouest de Nice, tire son nom de villas construites au tournant du XXe siècle, aujourd'hui entourées d'immeubles plus récents. Sur les propriétés les plus anciennes, je privilégie l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui changerait l'aspect d'une porte d'origine, comme sur d'autres quartiers historiques de la ville.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Californie en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou renforcement complet de la porte.",
  },
  {
    question: "Travaillez-vous avec les résidences de standing du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et équipements des parties communes.",
  },
  {
    question: "Intervenez-vous près de l'aéroport et de la ligne 2 du tramway ?",
    answer:
      "Oui, tout ce secteur bien desservi entre le bas Fabron et la mer fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Californie par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCalifornieNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Californie"
      crimeIntro="Le quartier Californie, avec ses villas du début du XXe siècle, reste concerné par cette réalité malgré son cadre résidentiel."
      crimeClosing="Sur ce bâti ancien, l'adaptation d'un cylindre compatible reste préférable à un remplacement qui dénaturerait la porte d'origine."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-californie-nice/"
      relatedServices={[
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

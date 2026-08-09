import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-californie-nice/" },
  title: "Serrurier Californie Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Californie, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier Californie doit son nom à l'aéroport de Nice, dont l'histoire commence ici en 1910 avec un premier meeting aérien organisé sur les champs du lieu-dit « la Californie », devant environ 100 000 spectateurs. Avant-guerre, l'aérodrome de la Californie n'était encore qu'un modeste champ caillouteux équipé de deux hangars, avant d'être officiellement reconnu comme aérodrome par le ministre de l'Air en 1929.",
  "Le nom du quartier garde aussi le souvenir de l'hippodrome de Californie, autrefois situé près de l'aérodrome, qui dut être déplacé lors de l'agrandissement de la piste. Aujourd'hui desservi par la ligne 2 du tramway qui relie le port de Nice à l'aéroport, ce quartier urbain populaire et décontracté, situé dans le bas de Fabron à proximité de la mer, est particulièrement apprécié des familles pour son bâti mêlant villas et résidences de standing.",
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

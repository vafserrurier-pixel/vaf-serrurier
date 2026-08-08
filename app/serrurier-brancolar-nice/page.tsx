import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-brancolar-nice/" },
  title: "Serrurier Brancolar Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au Brancolar, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le Brancolar est un quartier résidentiel des hauteurs de Nice, au nord de la ville, composé pour l'essentiel de grands ensembles d'habitat collectif construits dans la seconde moitié du XXe siècle. Une partie du quartier a été rénovée ces dernières années dans le cadre d'un programme de renouvellement urbain, ce qui cohabite avec des immeubles plus anciens dont les serrures et les portes palières datent parfois de plusieurs décennies.",
  "J'y interviens régulièrement, aussi bien pour des particuliers en appartement que pour des halls d'immeuble en copropriété. Le relief du secteur ne pose pas de difficulté particulière pour se déplacer rapidement depuis mon point de départ.",
];

const blocks = [
  {
    heading: "Le bâti du Brancolar, ce que ça change pour votre serrurerie",
    paragraphs: [
      "Dans les immeubles collectifs comme ceux du Brancolar, les pannes les plus fréquentes concernent les portes palières un peu voilées avec le temps, les cylindres de hall d'entrée très sollicités par le passage, et les gâches électriques des digicodes qui finissent par s'user. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement, en tenant compte du fait qu'une porte d'immeuble mal réglée use sa serrure plus vite que la normale.",
      "Pour les logements plus anciens du quartier, il arrive que le modèle de serrure en place ne soit plus fabriqué : je propose alors un remplacement de cylindre compatible plutôt qu'un changement de serrure complète, quand c'est possible.",
    ],
  },
  {
    heading: "Sécuriser un appartement au Brancolar",
    paragraphs: [
      "Que ce soit après une perte de clés, une tentative d'effraction ou simplement pour renforcer une porte d'entrée vieillissante, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes, je peux intervenir sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, ou reprise d'un digicode défectueux. Le devis est annoncé avant intervention, comme pour toute prestation.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Brancolar en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 sur le Brancolar comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Pouvez-vous intervenir sur la porte d'entrée d'un immeuble au Brancolar ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes, à la demande d'un résident ou d'un syndic.",
  },
  {
    question: "Les tarifs sont-ils différents au Brancolar par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Que faire si ma clé casse dans une serrure ancienne au Brancolar ?",
    answer:
      "J'extrais le morceau resté dans le cylindre et je vérifie s'il est encore compatible avec un remplacement simple, avant d'envisager un changement complet si le modèle est trop ancien.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au Brancolar ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierBrancolarNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Brancolar"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-brancolar-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-parc-imperial-nice/" },
  title: "Serrurier Parc Impérial Nice – 24h/24 | VAF",
  description:
    "Serrurier au Parc Impérial, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier du Parc Impérial doit son nom à l'Hôtel Impérial, construit en 1902 pour accueillir la communauté russe qui passait ses hivers sur la Côte d'Azur. L'édifice, bâti sur les terres de l'ancien domaine Bermond à la demande du propriétaire J.-B. Gay et confié à l'architecte polonais Adam Dettloff, impressionnait par ses dimensions : 109 mètres de long et 37 mètres de haut, avec une rotonde de 43 mètres dédiée à la famille impériale.",
  "Réquisitionné comme hôpital pendant la Première Guerre mondiale, l'hôtel périclite ensuite et cesse son activité en 1920. Racheté par la mairie de Nice en 1923, il devient le lycée Alexandre-Mari, inauguré en 1931 et renommé lycée du Parc-Impérial en 1948. Le quartier conserve aujourd'hui de nombreuses villas, des immeubles Belle Époque, le Nice Lawn Tennis Club et la cathédrale orthodoxe russe inaugurée en 1912, dans un cadre verdoyant hérité de ce passé aristocratique.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel entre centre et Cimiez",
    paragraphs: [
      "Le Parc Impérial partage certaines caractéristiques avec Cimiez tout proche : des immeubles de standing avec des serrures parfois anciennes, qui demandent un diagnostic soigné avant toute intervention.",
    ],
  },
  {
    heading: "Un héritage architectural russe",
    paragraphs: [
      "Entre la cathédrale orthodoxe et les villas construites pour la clientèle russe du début du XXe siècle, le quartier conserve un cachet particulier. Je privilégie une approche respectueuse de ce patrimoine pour toute intervention sur une porte ou une serrure d'origine.",
    ],
  },
  {
    heading: "Copropriétés bien entretenues",
    paragraphs: [
      "Les résidences du secteur sont généralement bien entretenues, avec des attentes précises sur la finition des interventions en parties communes : digicode, gâche électrique, porte de hall.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Pour les appartements du quartier, je propose des solutions adaptées à chaque situation : réparation, remplacement de cylindre, ou renforcement complet de la porte d'entrée.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Parc Impérial en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au Parc Impérial comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles de standing du secteur ?",
    answer:
      "Oui, je m'adapte aux exigences de ces copropriétés pour toute intervention sur les équipements des parties communes.",
  },
  {
    question: "Intervenez-vous près de la cathédrale orthodoxe russe ou du lycée du Parc-Impérial ?",
    answer:
      "Oui, tout ce secteur fait partie de ma zone d'intervention habituelle dans le centre de Nice.",
  },
  {
    question: "Les tarifs sont-ils différents au Parc Impérial par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les syndics du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au Parc Impérial ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierParcImperialNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Parc Impérial"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-parc-imperial-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

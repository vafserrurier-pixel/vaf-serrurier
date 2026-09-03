import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-parc-imperial-nice/" },
  title: "Serrurier Parc Impérial Nice – Copropriétés de standing | VAF",
  description:
    "Serrurier au Parc Impérial, Nice : dépannage et sécurisation sur immeubles Belle Époque et copropriétés de standing. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure à changer, porte qui bloque au Parc Impérial : j'interviens 24h/24 sur ce quartier résidentiel de standing, entre le centre-ville et Cimiez. Les immeubles de standing du secteur ont des serrures parfois anciennes qui demandent un diagnostic soigné : je pose le plus souvent un cylindre Fichet ou Picard compatible avec le mécanisme existant, en respectant les exigences esthétiques de ces copropriétés bien entretenues.",
  "Le quartier doit son nom à l'Hôtel Impérial, construit en 1902 pour la communauté russe hivernant sur la Côte d'Azur. Cet édifice de 109 mètres de long fut réquisitionné comme hôpital pendant la Première Guerre mondiale, avant de devenir le lycée du Parc-Impérial en 1948. Le quartier conserve aujourd'hui de nombreuses villas, des immeubles Belle Époque et la cathédrale orthodoxe russe de 1912, un patrimoine qui explique la présence de portes et serrures d'origine à traiter avec soin, entre le boulevard du Parc-Impérial et le boulevard du Tsarewitch.",
];

const blocks = [
  {
    heading: "Dépannage sur les immeubles de standing",
    paragraphs: [
      "Le Parc Impérial partage certaines caractéristiques avec Cimiez tout proche : des immeubles de standing avec des serrures parfois anciennes, qui demandent un diagnostic soigné avant toute intervention.",
    ],
  },
  {
    heading: "Réparation de serrures sur le patrimoine russe",
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
  {
    heading: "Résidences de standing au Parc Impérial",
    paragraphs: [
      "Le secteur du Parc Impérial, proche de Cimiez, doit son nom à l'ancien Grand Hôtel devenu résidence. Les immeubles de standing qui le composent ont souvent des systèmes de fermeture plus élaborés que la moyenne : interphones couplés à une gâche électrique, double cylindre. Je diagnostique l'ensemble du système avant d'intervenir, pas seulement la serrure.",
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
      crimeIntro="Le secteur du Parc Impérial, résidentiel et de standing, reste concerné par cette tendance générale à Nice."
      crimeClosing="Sur les résidences de ce type, un système de fermeture complet (interphone, gâche, cylindre) mérite une vérification régulière."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

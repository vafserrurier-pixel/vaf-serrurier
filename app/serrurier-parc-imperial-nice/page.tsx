import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-parc-imperial-nice/" },
  title: "Serrurier Parc Impérial Nice – 24h/24 | VAF",
  description:
    "Serrurier au Parc Impérial, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le Parc Impérial est un quartier résidentiel situé entre le centre-ville et Cimiez, connu pour son cadre verdoyant hérité d'un ancien parc d'hôtel de la Belle Époque. Le bâti y mêle immeubles de standing et résidences plus récentes.",
  "J'y interviens pour des appartements comme pour des copropriétés, avec la même exigence de diagnostic avant toute intervention.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel entre centre et Cimiez",
    paragraphs: [
      "Le Parc Impérial partage certaines caractéristiques avec Cimiez tout proche : des immeubles de standing avec des serrures parfois anciennes, qui demandent un diagnostic soigné avant toute intervention.",
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

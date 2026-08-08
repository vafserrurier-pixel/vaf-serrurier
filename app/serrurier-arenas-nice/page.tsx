import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-arenas-nice/" },
  title: "Serrurier Arénas Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à l'Arénas, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "L'Arénas est un secteur de l'ouest de Nice, proche de l'aéroport, connu pour ses zones de bureaux et d'activité, avec quelques ensembles résidentiels à proximité. C'est un quartier pratique, bien desservi par les grands axes.",
  "J'y interviens pour des logements résidentiels comme pour la partie serrurerie de locaux professionnels, avec la même méthode de diagnostic partout à Nice.",
];

const blocks = [
  {
    heading: "Un secteur mêlant activité et résidentiel",
    paragraphs: [
      "L'Arénas combine zones de bureaux et quelques résidences. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      "Pour les résidences du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "L'Arénas étant à l'ouest de la ville, proche de l'aéroport, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à l'Arénas en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à l'Arénas comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des locaux professionnels dans ce secteur ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé.",
  },
  {
    question: "Travaillez-vous avec les copropriétés de l'Arénas ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à l'Arénas par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à l'Arénas ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierArenasNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Arénas"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-arenas-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

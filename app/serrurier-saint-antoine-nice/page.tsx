import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-antoine-nice/" },
  title: "Serrurier Saint-Antoine Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Saint-Antoine, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Saint-Antoine est un quartier de l'ouest de Nice, à proximité de l'aéroport et des grands axes de circulation vers l'ouest du département. Le secteur mêle zones résidentielles, petites copropriétés et quelques zones d'activité.",
  "J'y interviens pour des particuliers en appartement comme pour des maisons individuelles, avec la même méthode de diagnostic partout à Nice.",
];

const blocks = [
  {
    heading: "Un secteur résidentiel et d'activité mêlés",
    paragraphs: [
      "Saint-Antoine combine logements résidentiels et proximité de zones d'activité liées à l'aéroport. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
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
      "Saint-Antoine étant à l'ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation sur les axes menant à ce secteur.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Antoine en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Antoine comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des logements proches de l'aéroport ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Travaillez-vous avec les copropriétés de Saint-Antoine ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Antoine par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Antoine ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintAntoineNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Antoine"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-antoine-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

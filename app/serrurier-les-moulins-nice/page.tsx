import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-les-moulins-nice/" },
  title: "Serrurier Les Moulins Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier aux Moulins, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Les Moulins est un quartier résidentiel de l'ouest de Nice, composé principalement de grands ensembles d'habitat collectif. Une partie du quartier a connu des programmes de rénovation urbaine ces dernières années.",
  "J'y interviens régulièrement pour des particuliers en appartement et pour des halls d'immeuble en copropriété, avec la même méthode de diagnostic partout à Nice.",
];

const blocks = [
  {
    heading: "Un habitat collectif qui demande un suivi régulier",
    paragraphs: [
      "Dans les grands ensembles des Moulins, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement aux Moulins",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes, j'interviens sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement aux Moulins en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 aux Moulins comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble aux Moulins ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Les tarifs sont-ils différents aux Moulins par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous après une effraction aux Moulins ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir aux Moulins ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLesMoulinsNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Les Moulins"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-les-moulins-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

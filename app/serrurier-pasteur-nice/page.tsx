import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-pasteur-nice/" },
  title: "Serrurier Pasteur Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Pasteur, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier Pasteur, à l'est de Nice, s'organise notamment autour du pôle hospitalier du même nom. C'est un secteur résidentiel dense, avec un bâti mêlant immeubles anciens et constructions plus récentes.",
  "J'y interviens régulièrement pour du dépannage courant, des changements de serrure et des demandes de sécurisation, aussi bien pour des particuliers que pour des petites copropriétés.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel dense",
    paragraphs: [
      "Les immeubles du quartier Pasteur demandent souvent un entretien régulier des serrures de hall et des cylindres d'appartement, soumis à un usage quotidien important.",
    ],
  },
  {
    heading: "Proximité du pôle hospitalier",
    paragraphs: [
      "La proximité de l'hôpital génère un passage plus important dans certaines rues, ce qui pousse parfois les résidents à vouloir renforcer leur porte d'entrée.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Pasteur en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier Pasteur comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles proches de l'hôpital Pasteur ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Pasteur par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au quartier Pasteur ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierPasteurNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Pasteur"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-pasteur-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

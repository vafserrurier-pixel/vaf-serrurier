import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-musiciens-nice/" },
  title: "Serrurier Quartier des Musiciens Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier des Musiciens, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier des Musiciens, dont les rues portent des noms de compositeurs, se situe dans le centre de Nice, dans un secteur résidentiel calme aux immeubles de standing modeste à moyen. C'est un quartier essentiellement résidentiel, proche des grands axes du centre-ville.",
  "J'y interviens pour du dépannage courant, des changements de serrure et des demandes de sécurisation, avec la même méthode de diagnostic qu'ailleurs à Nice.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel calme",
    paragraphs: [
      "Les immeubles du quartier des Musiciens sont majoritairement résidentiels, avec des serrures qui demandent un entretien régulier pour rester fiables dans la durée. Je diagnostique chaque situation avant de proposer une solution adaptée.",
    ],
  },
  {
    heading: "Remplacement et sécurisation",
    paragraphs: [
      "Qu'il s'agisse d'un cylindre grippé, d'une clé cassée ou d'une volonté de renforcer votre porte d'entrée, j'adapte la solution à l'état réel de votre serrure plutôt que de proposer systématiquement un remplacement complet.",
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
    question: "Intervenez-vous rapidement au quartier des Musiciens en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles résidentiels du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou serrure complète.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents dans ce quartier par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierDesMusiciensNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier des Musiciens"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-des-musiciens-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

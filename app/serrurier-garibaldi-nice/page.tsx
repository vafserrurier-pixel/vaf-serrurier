import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-garibaldi-nice/" },
  title: "Serrurier Garibaldi Nice – Ouverture de porte rapide | VAF",
  description:
    "Serrurier place Garibaldi, Nice : ouverture de porte, dépannage sur immeubles anciens entre Vieux-Nice et le port. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier place Garibaldi : j'interviens 24h/24 pour une porte claquée, un cylindre grippé ou une clé cassée, dans ce quartier de passage entre le Vieux-Nice et le port. Les immeubles anciens autour de la place ont souvent des portes et des serrures d'époque, sur lesquelles je pose généralement un cylindre Picard ou Cisa compatible plutôt qu'un remplacement qui dénaturerait ces façades historiques.",
  "La place Garibaldi, l'une des plus anciennes de Nice, a été construite entre 1782 et 1784 sous le nom de Piazza Vittorio, à l'époque du royaume de Sardaigne. Elle prend son nom actuel en 1870, en hommage à Giuseppe Garibaldi. Rendue aux piétons dans les années 2000 avec l'arrivée du tramway, elle est aujourd'hui animée par de nombreux musées, théâtres et terrasses de restaurant. Cela explique le passage important sur les commerces et halls d'immeuble alentour.",
];

const blocks = [
  {
    heading: "Réparation de serrures sur les immeubles anciens",
    paragraphs: [
      "Autour de la place Garibaldi, les immeubles anciens ont souvent des portes et des serrures d'époque. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait ces portes historiques.",
    ],
  },
  {
    heading: "Dépannage rapide entre Vieux-Nice et port",
    paragraphs: [
      "La position de Garibaldi, entre le Vieux-Nice et le port, en fait un quartier de passage où les besoins de sécurisation restent classiques : porte claquée, cylindre grippé, clé cassée.",
    ],
  },
  {
    heading: "Serrurerie de commerce entre musées et restaurants",
    paragraphs: [
      "Avec ses nombreux musées, théâtres et terrasses de restaurant, la place Garibaldi attire un passage important qui use aussi les serrures des commerces et des halls d'immeuble alentour. J'y interviens régulièrement pour ce type de sollicitation.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Bâti ancien autour de la place Garibaldi",
    paragraphs: [
      "La place Garibaldi et ses immeubles ocre du XVIIIe siècle marquent la porte d'entrée entre la Vieille-Ville et les quartiers de Riquier et Cimiez. Ce bâti ancien, souvent classé ou protégé, demande une attention particulière : je privilégie systématiquement la réparation ou l'adaptation d'un cylindre existant avant d'envisager un remplacement qui changerait l'aspect d'une porte d'époque.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Garibaldi en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Garibaldi comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Savez-vous intervenir sur les portes anciennes autour de la place Garibaldi ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'époque.",
  },
  {
    question: "Intervenez-vous aussi entre Garibaldi et le quartier du port ?",
    answer:
      "Oui, tout ce secteur de transition entre la place Garibaldi et le port fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Garibaldi par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous en soirée près des restaurants de la place Garibaldi ?",
    answer:
      "Oui, je reste disponible en soirée et la nuit, avec une majoration appliquée après 19h et le week-end, annoncée avant l'intervention.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Garibaldi ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierGaribaldiNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Garibaldi"
      crimeIntro="Autour de la place Garibaldi, le bâti ancien et parfois classé n'est pas à l'abri de cette évolution."
      crimeClosing="Une porte d'époque bien équipée reste tout aussi efficace qu'une porte récente, à condition d'un cylindre fiable."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-garibaldi-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

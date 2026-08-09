import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-fleurs-nice/" },
  title: "Serrurier Quartier des Fleurs Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier des Fleurs, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier des Fleurs s'étend entre le boulevard François Grosso à l'ouest et le boulevard Gambetta à l'est, et tire son nom de l'avenue des Fleurs, son artère principale longue d'environ 500 mètres. Le nom rappelle les propriétés d'antan et leurs jardins, progressivement remplacés par des immeubles dont certains portent encore des noms de fleurs — Mimosas, Lauriers Roses.",
  "Le quartier a vu le jour à la fin du XIXe siècle et au début du XXe, durant l'essor de Nice comme station balnéaire réputée, avec la construction d'hôtels prestigieux et de palais éclectiques. Les rues Rossini, Verdi, Berlioz ou Gounod, à cheval avec le quartier des Musiciens voisin, sont bordées de superbes immeubles bourgeois d'inspiration Art déco, et la rue des Orangers rappelle que le secteur était autrefois planté d'agrumes.",
];

const blocks = [
  {
    heading: "Un patrimoine de palais et d'immeubles bourgeois",
    paragraphs: [
      "Les façades éclectiques et Art déco du quartier des Fleurs abritent des portes et serrures parfois anciennes, que je répare ou adapte plutôt que de remplacer systématiquement, pour préserver la cohérence esthétique de ces immeubles de caractère.",
    ],
  },
  {
    heading: "Un secteur résidentiel du centre",
    paragraphs: [
      "Les immeubles du quartier des Fleurs sont majoritairement résidentiels, avec des besoins classiques de serrurerie : cylindre grippé, porte qui ferme mal, ou volonté de renforcer une porte d'entrée vieillissante.",
    ],
  },
  {
    heading: "Réparation avant remplacement",
    paragraphs: [
      "Je privilégie systématiquement le diagnostic et la réparation quand c'est possible, avant d'envisager un remplacement complet de la serrure, pour limiter les coûts inutiles.",
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
    question: "Intervenez-vous rapidement au quartier des Fleurs en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur les portes des immeubles bourgeois de l'avenue des Fleurs ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet qui dénaturerait ces façades de caractère.",
  },
  {
    question: "Intervenez-vous sur les immeubles résidentiels du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou serrure complète.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier des Fleurs ?",
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

export default function SerrurierQuartierDesFleursNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier des Fleurs"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-des-fleurs-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

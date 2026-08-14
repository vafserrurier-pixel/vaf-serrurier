import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-fleurs-nice/" },
  title: "Serrurier Quartier des Fleurs Nice – Immeubles de caractère | VAF",
  description:
    "Serrurier au quartier des Fleurs, Nice : dépannage et changement de serrure sur immeubles Art déco et anciens palais. Devis annoncé, 24h/24.",
};

const intro = [
  "Besoin d'un serrurier au quartier des Fleurs : j'interviens 24h/24 pour un cylindre grippé, une porte qui ferme mal ou une clé cassée, avec la même transparence sur le tarif que partout à Nice. Ce secteur résidentiel du centre, entre le boulevard François Grosso et le boulevard Gambetta, compte de nombreux immeubles bourgeois d'inspiration Art déco où je privilégie un cylindre Picard ou Vak compatible avec le mécanisme existant plutôt qu'un remplacement complet de la serrure.",
  "Le quartier tire son nom de l'avenue des Fleurs, qui rappelle les propriétés d'antan et leurs jardins, progressivement remplacés par des immeubles élégants construits durant l'essor de Nice comme station balnéaire, fin XIXe-début XXe siècle. La rue des Orangers, qui rappelle que le secteur était autrefois planté d'agrumes, borde aujourd'hui les mêmes immeubles de caractère dont beaucoup ont conservé leurs portes et serrures d'origine.",
];

const blocks = [
  {
    heading: "Réparation des serrures d'immeubles Art déco",
    paragraphs: [
      "Les façades éclectiques et Art déco du quartier des Fleurs abritent des portes et serrures parfois anciennes, que je répare ou adapte plutôt que de remplacer systématiquement, pour préserver la cohérence esthétique de ces immeubles de caractère.",
    ],
  },
  {
    heading: "Dépannage courant dans les immeubles résidentiels",
    paragraphs: [
      "Les immeubles du quartier des Fleurs sont majoritairement résidentiels, avec des besoins classiques de serrurerie : cylindre grippé, porte qui ferme mal, ou volonté de renforcer une porte d'entrée vieillissante.",
    ],
  },
  {
    heading: "Changement de serrure sans surcoût inutile",
    paragraphs: [
      "Je privilégie systématiquement le diagnostic et la réparation quand c'est possible, avant d'envisager un remplacement complet de la serrure, pour limiter les coûts inutiles.",
    ],
  },
  {
    heading: "Digicodes et parties communes en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Changement de serrure entre deux locations au quartier des Fleurs",
    paragraphs: [
      "Le quartier des Fleurs, proche de la gare, compte une forte proportion de logements locatifs dans des immeubles anciens. Entre deux locataires, changer le cylindre ou toute la serrure est la solution la plus fiable pour éviter qu'une ancienne clé reste en circulation. J'interviens régulièrement pour ce type de remplacement, à la demande de propriétaires ou d'agences.",
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
      crimeIntro="Le quartier des Fleurs, proche de la gare et à forte rotation locative, n'est pas épargné par cette tendance."
      crimeClosing="Changer la serrure entre deux locataires reste le geste le plus simple pour limiter ce risque dans ce type de logement."
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

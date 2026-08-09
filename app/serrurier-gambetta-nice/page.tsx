import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-gambetta-nice/" },
  title: "Serrurier Gambetta Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Gambetta, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le boulevard Gambetta, qui donne son nom au quartier, rend hommage à Léon Gambetta (1838-1882), figure politique emblématique de la Troisième République française. En 1950, il n'y avait pratiquement rien à l'ouest de ce boulevard : le secteur s'est urbanisé pour l'essentiel dans l'après-guerre, prenant la suite du quartier du Piol qui occupait auparavant ces terrains.",
  "Le quartier porte aussi la trace d'une forte présence italienne dans l'histoire de Nice : en 1926, les immigrants italiens représentaient environ 40 000 personnes, soit un quart de la population niçoise. On y trouve un patrimoine architectural varié, dont l'immeuble Art déco Le Palladium, avec son atrium décoré et sa statue d'Athéna à l'angle de l'avenue Tzarévitch et du boulevard Gambetta.",
];

const blocks = [
  {
    heading: "Immeubles résidentiels du début et du milieu du XXe siècle",
    paragraphs: [
      "Le bâti de Gambetta comprend beaucoup d'immeubles de standing modeste à moyen, avec des serrures qui ont parfois plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
    ],
  },
  {
    heading: "Un secteur résidentiel calme",
    paragraphs: [
      "Contrairement à des quartiers plus commerçants, Gambetta reste majoritairement résidentiel, ce qui n'empêche pas les mêmes besoins : porte claquée, cylindre grippé, ou volonté de renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin.",
    ],
  },
  {
    heading: "Autour de l'immeuble Le Palladium",
    paragraphs: [
      "Les immeubles Art déco du secteur, comme Le Palladium à l'angle de l'avenue Tzarévitch, méritent une attention particulière : je privilégie systématiquement une solution qui respecte l'esthétique de ces façades remarquables.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Gambetta en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier Gambetta comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur des serrures anciennes typiques du quartier ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet de la serrure.",
  },
  {
    question: "Intervenez-vous pour les copropriétés de Gambetta ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous sur les immeubles Art déco du boulevard Gambetta ?",
    answer:
      "Oui, je privilégie une solution qui respecte l'esthétique de ces façades remarquables plutôt qu'un remplacement standard.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Gambetta par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierGambettaNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Gambetta"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-gambetta-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

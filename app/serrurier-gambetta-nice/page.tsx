import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-gambetta-nice/" },
  title: "Serrurier Gambetta Nice – Immeubles Art déco | VAF",
  description:
    "Serrurier au quartier Gambetta, Nice : changement de serrure et dépannage sur immeubles du XXe siècle, sécurisation après cambriolage. Devis annoncé, 24h/24.",
};

const intro = [
  "Porte claquée, cylindre grippé à Gambetta : j'interviens 24h/24 dans ce quartier résidentiel calme, pour une porte claquée, un cylindre grippé, ou pour renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin. Le bâti de standing modeste à moyen, construit pour l'essentiel dans l'après-guerre, a souvent des serrures qui datent de plusieurs décennies : je pose généralement un cylindre Fichet ou Cisa compatible plutôt qu'un remplacement complet quand c'est possible.",
  "Le boulevard Gambetta rend hommage à Léon Gambetta, figure de la Troisième République. En 1950, il n'y avait pratiquement rien à l'ouest de ce boulevard. Le quartier s'est urbanisé après-guerre sur les terrains de l'ancien Piol, marqué aussi par la forte présence italienne de Nice au XXe siècle. L'immeuble Art déco Le Palladium, avec son atrium décoré et sa statue d'Athéna à l'angle de l'avenue Tzarévitch, en est le témoin architectural le plus marquant.",
];

const blocks = [
  {
    heading: "Réparation de serrures sur les immeubles du XXe siècle",
    paragraphs: [
      "Le bâti de Gambetta comprend beaucoup d'immeubles de standing modeste à moyen, avec des serrures qui ont parfois plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
    ],
  },
  {
    heading: "Dépannage et sécurisation après effraction",
    paragraphs: [
      "Contrairement à des quartiers plus commerçants, Gambetta reste majoritairement résidentiel, ce qui n'empêche pas les mêmes besoins : porte claquée, cylindre grippé, ou volonté de renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin.",
    ],
  },
  {
    heading: "Serrures d'époque sur l'immeuble Le Palladium et ses voisins",
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
  {
    heading: "Dépannage sur les immeubles collectifs du quartier Gambetta",
    paragraphs: [
      "Le quartier Gambetta, résidentiel et dense entre le centre et la Promenade des Anglais, compte majoritairement des immeubles collectifs. Les pannes les plus courantes concernent les cylindres de porte palière et les gâches de hall. Je diagnostique l'origine du blocage avant d'intervenir, pour ne réparer que ce qui doit l'être.",
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
      crimeIntro="Le quartier Gambetta, dense et résidentiel, suit la même tendance que le reste du centre-ville."
      crimeClosing="Sur les immeubles collectifs de ce type, la vigilance porte autant sur les portes de hall que sur celles des appartements."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-la-madeleine-nice/" },
  title: "Serrurier La Madeleine Nice – Ruelles & maisons de ville | VAF",
  description:
    "Serrurier à La Madeleine, Nice : dépannage sur maisons de ville et immeubles anciens du vallon, changement de serrure. Devis annoncé, 24h/24.",
};

const intro = [
  "Cylindre grippé, porte à sécuriser à La Madeleine : j'interviens 24h/24 dans ce quartier populaire accroché entre mer et collines, aussi bien pour un petit immeuble ancien que pour une maison de ville sur les ruelles en pente du vallon. Je diagnostique la serrure en place avant toute intervention, avec le plus souvent un cylindre Vak ou Fichet adapté au bâti, qu'il s'agisse d'un gond fatigué ou d'une porte qui a bougé avec le temps.",
  "La Madeleine s'étire depuis 1619 autour de l'église paroissiale Sainte-Marie-Madeleine, du carrefour Magnan jusqu'au chemin du Génie. Le quartier comptait mille habitants en 1900, dont un cinquième d'origine italienne, et trois mille en 1925 avec l'arrivée de nouveaux immigrants grecs, russes et arméniens. Cette histoire cosmopolite a forgé un bâti varié et un caractère populaire affirmé, avec des logements occupés par les mêmes familles depuis plusieurs générations.",
];

const blocks = [
  {
    heading: "Dépannage sur le bâti varié du vallon",
    paragraphs: [
      "L'identité forte de La Madeleine, façonnée par des vagues successives d'habitants venus d'Italie, de Grèce, de Russie ou d'Arménie, se retrouve dans un bâti varié où je m'adapte à chaque configuration : petit immeuble ancien, maison de ville ou copropriété plus récente.",
    ],
  },
  {
    heading: "Diagnostic sur immeubles collectifs et maisons individuelles",
    paragraphs: [
      "Le quartier de La Madeleine comprend des immeubles collectifs et quelques maisons individuelles, souvent situées sur des rues en pente typiques du vallon. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ou d'une porte de maison.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou un simple constat d'usure, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Grands ensembles résidentiels à La Madeleine",
    paragraphs: [
      "À l'extrême ouest de Nice, en bord de mer, La Madeleine se compose surtout de grands ensembles résidentiels construits dans les années 1970-1980. Sur ce type de copropriété, j'interviens souvent sur les portes de hall, les digicodes et les boîtes aux lettres collectives, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à La Madeleine en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à La Madeleine comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les maisons individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous aussi bien sur le boulevard de la Madeleine que dans les ruelles adjacentes ?",
    answer:
      "Oui, tout le vallon fait partie de ma zone d'intervention habituelle, du carrefour Magnan jusqu'au secteur de la Costière.",
  },
  {
    question: "Les tarifs sont-ils différents à La Madeleine par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Que faire si ma porte ferme mal dans un immeuble ancien de La Madeleine ?",
    answer:
      "Je diagnostique en premier lieu si le problème vient de la serrure, du gond ou du bâti qui a pu bouger avec le temps, avant de proposer la réparation la plus adaptée.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à La Madeleine ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLaMadeleineNicePage() {
  return (
    <QuartierPageTemplate
      quartier="La Madeleine"
      crimeIntro="La Madeleine, à l'extrême ouest de Nice, suit la même tendance que le reste de la ville malgré son caractère plus excentré."
      crimeClosing="Sur les grands ensembles de ce secteur, sécuriser les portes de hall reste aussi important que celle de chaque logement."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-la-madeleine-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

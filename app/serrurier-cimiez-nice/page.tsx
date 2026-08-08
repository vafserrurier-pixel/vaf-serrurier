import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-cimiez-nice/" },
  title: "Serrurier Cimiez Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Cimiez, Nice : ouverture de porte, dépannage, changement de serrure adapté aux immeubles anciens. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Cimiez est un quartier résidentiel des hauteurs de Nice, connu pour ses immeubles Belle Époque, ses villas et sa proximité avec le musée Matisse, le monastère et les arènes romaines. Le bâti y est particulièrement caractéristique : de grands immeubles bourgeois du début du XXe siècle, certains anciens palaces reconvertis en copropriétés, côtoient des villas individuelles.",
  "Ce patrimoine architectural implique des portes et des serrures souvent plus imposantes que la moyenne, avec des mécanismes qu'il faut savoir traiter avec soin plutôt que remplacer systématiquement.",
];

const blocks = [
  {
    heading: "Des immeubles au bâti ancien et soigné",
    paragraphs: [
      "Dans les grands immeubles Belle Époque de Cimiez, les portes sont souvent plus lourdes et les serrures d'origine parfois anciennes, avec des mécanismes qui demandent une expertise particulière. Je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'époque, sauf si l'état du mécanisme ne le permet plus.",
    ],
  },
  {
    heading: "Copropriétés de standing",
    paragraphs: [
      "Les copropriétés de Cimiez sont généralement bien entretenues, avec des règlements exigeants sur l'esthétique des parties communes. Pour un hall d'immeuble ou une porte palière, je propose des solutions de sécurité qui respectent ce niveau de finition plutôt qu'une pose standard sans considération pour le cadre existant.",
    ],
  },
  {
    heading: "Villas et maisons individuelles",
    paragraphs: [
      "Le secteur compte aussi des villas individuelles, avec des besoins différents : porte d'entrée principale à sécuriser, parfois un portillon ou un accès secondaire. Le diagnostic reste le même, adapté à chaque configuration.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Cimiez en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Cimiez comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Savez-vous intervenir sur des serrures anciennes de type Belle Époque ?",
    answer:
      "Oui, c'est une situation fréquente à Cimiez. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui changerait l'aspect d'une porte d'origine.",
  },
  {
    question: "Intervenez-vous pour les copropriétés à Cimiez ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Les tarifs sont-ils différents à Cimiez par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Cimiez ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCimiezNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Cimiez"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-cimiez-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

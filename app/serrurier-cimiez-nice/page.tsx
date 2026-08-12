import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-cimiez-nice/" },
  title: "Serrurier Cimiez Nice – Serrures anciennes, dépannage | VAF",
  description:
    "Serrurier à Cimiez, Nice : changement de serrure et dépannage sur portes anciennes, ouverture de porte pour villas et copropriétés. Devis annoncé, 24h/24.",
};

const intro = [
  "Besoin d'un serrurier à Cimiez : j'interviens 24h/24 pour une porte claquée, un cylindre grippé ou une clé cassée, avec le même délai que sur le reste de Nice. Ce quartier pose un défi particulier : les grands immeubles Belle Époque et les anciens palaces reconvertis en copropriétés ont souvent gardé leurs serrures et cylindres d'origine, parfois centenaires. Sur ce type de porte, je pose le plus souvent un cylindre récent (Picard ou Vak, entre autres) compatible avec le mécanisme existant, plutôt que de remplacer toute la serrure et dénaturer une porte d'époque.",
  "Cette densité de portes anciennes tient à l'histoire du quartier. Le boulevard de Cimiez, tracé à la Belle Époque par l'architecte Sébastien-Marcel Biasini sur le site de l'antique Cemenelum, a accueilli des hôtels-palais pour une clientèle européenne fortunée. La reine Victoria ou Édouard VII y ont d'ailleurs séjourné. C'est ce patrimoine qui fait de Cimiez l'un des quartiers où mon expertise sur les mécanismes anciens sert le plus souvent.",
];

const blocks = [
  {
    heading: "Changement de serrure sur les portes anciennes de Cimiez",
    paragraphs: [
      "Les palaces Belle Époque reconvertis en copropriétés et les grands immeubles du quartier ont souvent conservé leurs portes et cylindres d'origine. Sur ce type de porte, je privilégie l'adaptation d'un cylindre compatible plutôt qu'un remplacement complet : ça évite de dénaturer une porte d'époque tout en retrouvant un fonctionnement fiable. Un remplacement intégral n'intervient que si le mécanisme est trop endommagé pour être conservé.",
    ],
  },
  {
    heading: "Dépannage et ouverture de porte dans les immeubles de standing",
    paragraphs: [
      "Les portes de ces immeubles anciens sont souvent plus lourdes et plus épaisses que la moyenne, avec des mécanismes qui demandent une méthode d'ouverture adaptée pour ne pas les abîmer. Que ce soit pour un cylindre grippé, une clé cassée ou une porte claquée, je diagnostique l'origine réelle du blocage avant d'intervenir, plutôt que de forcer.",
    ],
  },
  {
    heading: "Sécurisation des halls de copropriété",
    paragraphs: [
      "Les copropriétés de Cimiez sont généralement bien entretenues, avec des règlements exigeants sur l'esthétique des parties communes. Pour un digicode, une gâche électrique ou une porte de hall, je propose des solutions qui respectent ce niveau de finition, sur demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Sécurisation des portes de villa et portails",
    paragraphs: [
      "Le secteur compte aussi des villas individuelles, avec des besoins différents : porte d'entrée principale à sécuriser, parfois un portillon ou un accès secondaire. J'interviens sur le remplacement de serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte principale selon l'état du bâti.",
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
    question: "Intervenez-vous près des arènes romaines et du monastère de Cimiez ?",
    answer:
      "Oui, tout ce secteur historique autour des arènes et du monastère franciscain fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Travaillez-vous sur les anciens palaces reconvertis en copropriétés ?",
    answer:
      "Oui, ces bâtiments remarquables demandent un vrai savoir-faire : je privilégie systématiquement une solution qui respecte l'architecture d'origine.",
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

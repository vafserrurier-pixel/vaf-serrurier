import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-pancrace-nice/" },
  title: "Serrurier Saint-Pancrace Nice – Villas rurales | VAF",
  description:
    "Serrurier à Saint-Pancrace, Nice : sécurisation de villas sur secteur rural préservé, dépannage. Devis annoncé, 24h/24.",
};

const intro = [
  "Clé cassée, porte claquée à Saint-Pancrace : j'interviens sur ce secteur résidentiel des hauteurs nord de Nice, où une part importante du bâti est constituée de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose généralement un cylindre Fichet ou Picard adapté, qu'il s'agisse d'une réparation ou d'un renforcement complet du bâti rural préservé.",
  "Saint-Pancrace était autrefois un territoire de la campagne niçoise, où vignes et cultures méditerranéennes se mêlaient sur cette colline entre Saint-Roman et Gairaut. La chapelle Saint-Pancrace du XVIIe siècle, cœur spirituel du quartier, témoigne de cette histoire rurale — une confrérie du même nom est attestée dès 1724. Les rues étroites et pittoresques du secteur, entre la Corniche des Oliviers et la route de la Sirole, continuent d'évoquer ce passé, aujourd'hui mêlé à un bâti résidentiel de villas et petites résidences.",
];

const blocks = [
  {
    heading: "Autour de la chapelle Saint-Pancrace",
    paragraphs: [
      "Le secteur historique autour de la chapelle du XVIIe siècle conserve un caractère rural préservé, avec des villas et des propriétés parfois anciennes. Je privilégie une approche respectueuse du bâti d'origine pour toute intervention.",
    ],
  },
  {
    heading: "Un secteur de villas et de petites résidences",
    paragraphs: [
      "À Saint-Pancrace, une part importante du bâti est constituée de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, qu'il s'agisse d'une réparation ou d'un renforcement complet.",
    ],
  },
  {
    heading: "Un secteur plus excentré",
    paragraphs: [
      "Saint-Pancrace étant sur les hauteurs de Nice, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      <>
            Pour les petites copropriétés du secteur, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Résidentiel pavillonnaire à Saint-Pancrace",
    paragraphs: [
      "Saint-Pancrace, secteur résidentiel au nord de Nice, mêle petites résidences collectives et habitat pavillonnaire. Les demandes y sont assez équilibrées entre urgences classiques (porte claquée, clé cassée) et projets programmés comme un changement de serrure avant l'été ou l'installation d'un cylindre plus résistant sur une porte d'entrée individuelle.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Pancrace en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Pancrace comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous près de la chapelle Saint-Pancrace ?",
    answer:
      "Oui, tout ce secteur historique entre le vallon de Magnan et Gairaut fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Pancrace par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les petites résidences du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Pancrace ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintPancraceNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Pancrace"
      crimeIntro="Saint-Pancrace, secteur résidentiel au nord de Nice, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce mélange de résidences collectives et d'habitat pavillonnaire, chaque type de porte demande un diagnostic adapté."
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-pancrace-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

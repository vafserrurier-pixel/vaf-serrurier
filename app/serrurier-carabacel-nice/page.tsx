import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carabacel-nice/" },
  title: "Serrurier Carabacel Nice – Villas & immeubles anciens | VAF",
  description:
    "Serrurier au quartier Carabacel, Nice : dépannage sur villas et immeubles anciens du boulevard planté, changement de serrure. Devis annoncé, 24h/24.",
};

const intro = [
  "Porte claquée, cylindre grippé à Carabacel : j'interviens 24h/24 sur ce secteur qui mêle immeubles anciens et villas sur les hauteurs proches du centre-ville. Le bâti du boulevard planté, construit dans la seconde moitié du XIXe siècle, a souvent conservé ses portes et cylindres d'origine : je pose le plus souvent un cylindre Fichet ou Heraclès compatible, plutôt qu'un remplacement complet qui dénaturerait ces façades.",
  "Carabacel, dont le nom viendrait du celte « car » (colline, mont, rocher), désigne le secteur situé juste au nord de la Vieille-Ville, au-delà du Paillon. Développé autour du pont Saint-Antoine devenu le « Pont Vieux », puis structuré par le plan régulateur du Consiglio d'Ornato dans les années 1850, le boulevard Carabacel est achevé fin 1865. Ce quartier entre la gare et Cimiez conserve aujourd'hui ce mélange d'immeubles anciens, de villas et de résidences plus récentes.",
];

const blocks = [
  {
    heading: "Dépannage sur villas et immeubles anciens",
    paragraphs: [
      "Carabacel mélange immeubles anciens du centre-ville étendu et villas individuelles sur les hauteurs. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ancienne ou d'une porte de villa plus récente.",
    ],
  },
  {
    heading: "Réparation de cylindre sur le boulevard planté",
    paragraphs: [
      "Les immeubles construits le long du boulevard Carabacel dans la seconde moitié du XIXe siècle ont souvent conservé des éléments d'origine. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui dénaturerait ces façades.",
    ],
  },
  {
    heading: "Changement de serrure et sécurisation programmée",
    paragraphs: [
      "La position de Carabacel, à la fois proche du centre-ville et plus tranquille, en fait un secteur où j'interviens régulièrement pour du dépannage courant comme pour des projets de sécurisation programmés.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les petites copropriétés du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Portes d'immeubles bourgeois sur le boulevard Carabacel",
    paragraphs: [
      "Au-delà de la réparation de cylindre déjà évoquée, les immeubles bourgeois du boulevard Carabacel posent parfois un autre défi : des portes d'entrée d'origine, plus lourdes et plus hautes que la moyenne, avec une serrure centrale qu'il faut savoir démonter sans abîmer le bois ancien. Je m'adapte à ce type de menuiserie plutôt que de forcer une solution standard.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Carabacel en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Carabacel comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, comme pour tout type de porte.",
  },
  {
    question: "Travaillez-vous aussi sur des immeubles anciens à Carabacel ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
  },
  {
    question: "Intervenez-vous près du boulevard Carabacel et du Pont Vieux ?",
    answer:
      "Oui, tout ce secteur entre la Vieille-Ville et les hauteurs de Carabacel fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Carabacel par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCarabacelNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carabacel"
      crimeIntro="Carabacel, avec ses immeubles du XIXe siècle et ses villas, reste concerné par cette tendance comme le reste du centre."
      crimeClosing="Sur le bâti ancien du boulevard, l'adaptation d'un cylindre récent reste souvent suffisante pour combler l'écart de sécurité."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carabacel-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

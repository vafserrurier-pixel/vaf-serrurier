import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-pessicart-nice/" },
  title: "Serrurier Pessicart Nice – Villas & résidences | VAF",
  description:
    "Serrurier à Pessicart, Nice : dépannage sur villas et résidences collectives des hauteurs. Devis annoncé, intervention 24h/24.",
};

const intro = [
  "Serrurier à Pessicart : j'interviens sur ce quartier résidentiel huppé des hauteurs nord, aussi bien pour une villa individuelle que pour une résidence collective. Le diagnostic reste systématique, avec le plus souvent un cylindre Picard ou Heraclès adapté au type de serrure déjà en place.",
  "Le nom de Pessicart apparaît pour la première fois dans le cadastre napoléonien de 1812, mais le quartier conserve des traces remontant à l'époque romaine. Cette colline, délimitée par la plaine alluviale de l'ancien ruisseau Mantega et le vallon des Sablières, offre aujourd'hui des vues remarquables sur la ville et la Méditerranée, dans un cadre verdoyant particulièrement apprécié des familles.",
];

const blocks = [
  {
    heading: "Un bâti mêlant villas et résidences",
    paragraphs: [
      "Pessicart combine maisons individuelles et résidences collectives plus récentes. Le diagnostic reste systématique, qu'il s'agisse d'une serrure de villa ou d'un appartement en résidence.",
    ],
  },
  {
    heading: "Un secteur en hauteur, un déplacement à anticiper",
    paragraphs: [
      "Pessicart étant sur les hauteurs de Nice, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès.",
    ],
  },
  {
    heading: "Un quartier de collines entre deux vallons",
    paragraphs: [
      "Entre le vallon de l'ancien ruisseau Mantega et le vallon des Sablières, Pessicart conserve un relief marqué qui influence l'implantation des propriétés. Je tiens compte de cette configuration pour organiser mon intervention.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les résidences collectives du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Résidences panoramiques des hauteurs de Pessicart",
    paragraphs: [
      "Pessicart, sur les hauteurs nord de Nice, offre un cadre résidentiel recherché pour sa vue panoramique, entre villas et résidences de standing. Comme sur les autres secteurs en altitude, j'anticipe le temps de trajet dans le délai annoncé au téléphone, et j'interviens aussi bien sur une porte d'entrée que sur un portail d'accès.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Pessicart en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Pessicart comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous sur toute la colline de Pessicart, jusqu'au vallon des Sablières ?",
    answer:
      "Oui, tout ce secteur des hauteurs nord fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Pessicart par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les résidences collectives de Pessicart ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Pessicart ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierPessicartNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Pessicart"
      crimeIntro="Pessicart, sur les hauteurs nord recherchées pour leur vue, n'est pas à l'abri de cette évolution malgré son cadre résidentiel."
      crimeClosing="Sur les résidences de standing de ce secteur, un système de fermeture complet mérite une vérification régulière."
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-pessicart-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

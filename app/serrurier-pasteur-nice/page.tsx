import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-pasteur-nice/" },
  title: "Serrurier Pasteur Nice – Près du CHU | VAF",
  description:
    "Serrurier au quartier Pasteur, Nice : dépannage près du pôle hospitalier, changement de serrure sur bâti mêlant ancien et récent. Devis annoncé, 24h/24.",
};

const intro = [
  "Clé cassée, porte claquée au quartier Pasteur : j'interviens 24h/24 dans ce secteur résidentiel dense, voisin du pôle hospitalier universitaire, où le passage important pousse parfois les résidents à renforcer leur porte d'entrée. Sur ce bâti varié entre immeubles anciens et constructions plus récentes, je pose le plus souvent un cylindre Picard ou Heraclès adapté au diagnostic effectué sur place.",
  "Le quartier est dominé par l'ancienne abbaye de Saint-Pons, détruite au XVIe siècle puis reconstruite en 1724 dans un style baroque en grande partie financé par Louis XIV, aujourd'hui intégrée à l'hôpital Pasteur. Le relogement de populations de la vieille ville en 1954 a entraîné une transformation urbaine rapide. Le projet Pasteur 2, un investissement de 550 millions d'euros, en a fait ensuite l'un des plus grands hôpitaux modernes construits en France.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel dense",
    paragraphs: [
      "Les immeubles du quartier Pasteur demandent souvent un entretien régulier des serrures de hall et des cylindres d'appartement, soumis à un usage quotidien important.",
    ],
  },
  {
    heading: "Autour de l'abbaye de Saint-Pons et du CHU",
    paragraphs: [
      "Le voisinage immédiat de l'ancienne abbaye baroque et du pôle hospitalier universitaire génère un passage important dans certaines rues, ce qui pousse parfois les résidents à vouloir renforcer leur porte d'entrée.",
    ],
  },
  {
    heading: "Un secteur transformé depuis les années 1950",
    paragraphs: [
      "La transformation urbaine rapide du quartier depuis 1954 a créé un bâti varié, entre constructions de l'après-guerre et immeubles plus récents. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
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
    question: "Intervenez-vous rapidement au quartier Pasteur en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier Pasteur comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles proches de l'hôpital Pasteur ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Intervenez-vous près de l'ancienne abbaye de Saint-Pons ?",
    answer:
      "Oui, tout ce secteur autour du monastère intégré à l'hôpital Pasteur fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Pasteur par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au quartier Pasteur ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierPasteurNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Pasteur"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-pasteur-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

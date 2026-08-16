import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-chambrun-nice/" },
  title: "Serrurier Chambrun Nice – Immeubles collectifs | VAF",
  description:
    "Serrurier à Chambrun, Nice : dépannage sur portes palières de grands ensembles, sécurisation après effraction. Devis annoncé, 24h/24.",
};

const intro = [
  "Clé cassée, porte claquée à Chambrun : j'interviens 24h/24 sur ce quartier résidentiel du nord de Nice, principalement composé de grands ensembles d'habitat collectif où les portes palières et cylindres de hall subissent un usage intensif. Je pose généralement un cylindre Fichet ou Vak plus résistant après une perte de clés ou une tentative d'effraction.",
  "Le parc Chambrun, qui donne son nom au quartier, était à l'origine une propriété du comte Caïs de Pierlas, dotée d'un château du début du XIXe siècle. Il devint plus tard celle du comte de Chambrun, installé à Nice en 1879. Ce domaine abritait la première patinoire de la ville et son kiosque à musique, le « temple de l'Amour », toujours apprécié des promeneurs. Le lotissement s'est organisé autour de quatre voies sinueuses en respectant les bouquets d'arbres du parc d'origine, aujourd'hui desservi par l'avenue de Chambrun.",
];

const blocks = [
  {
    heading: "Un lotissement né d'un parc de plaisance du XIXe siècle",
    paragraphs: [
      "Les immeubles construits autour du parc Chambrun depuis le XXe siècle ont des profils variés selon leur date de construction. Je diagnostique chaque situation avant de proposer réparation ou remplacement.",
    ],
  },
  {
    heading: "Un habitat collectif à entretenir régulièrement",
    paragraphs: [
      "Dans les immeubles de Chambrun, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement à Chambrun",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes, j'interviens sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.",
    ],
  },
  {
    heading: "Immeubles résidentiels du secteur Chambrun",
    paragraphs: [
      "Chambrun, quartier résidentiel au nord de Nice, se compose principalement d'immeubles collectifs de taille moyenne. Comme sur les secteurs voisins des hauteurs nord, les interventions les plus fréquentes concernent les portes palières et les systèmes de fermeture des halls d'entrée. Je diagnostique la panne avant d'intervenir, urgence ou non.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Chambrun en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Chambrun comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble à Chambrun ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous près du parc Chambrun et de son kiosque à musique ?",
    answer:
      "Oui, tout ce secteur résidentiel autour du parc fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Chambrun par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous après une effraction à Chambrun ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Chambrun ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierChambrunNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Chambrun"
      crimeIntro="Chambrun, quartier résidentiel au nord de Nice, reste concerné par cette tendance comme le reste de la ville."
      crimeClosing="Sur les immeubles collectifs de ce secteur, la vigilance porte autant sur les portes palières que sur les accès communs."
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-chambrun-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

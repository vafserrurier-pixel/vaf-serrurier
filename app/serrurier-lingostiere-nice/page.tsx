import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-lingostiere-nice/" },
  title: "Serrurier Lingostière Nice – Secteur excentré | VAF",
  description:
    "Serrurier à Lingostière, Nice : dépannage sur propriétés isolées, délai réaliste pour ce secteur éloigné. Devis annoncé, 24h/24.",
};

const intro = [
  "Dépannage serrurier à Lingostière : j'interviens sur ce secteur le plus excentré que je couvre depuis mon point de départ, en vous donnant un délai réaliste dès l'appel plutôt qu'une estimation optimiste. Je m'adapte à chaque configuration, résidence proche des axes routiers ou maison plus isolée sur les hauteurs, avec généralement un cylindre Vak ou Cisa adapté au diagnostic effectué sur place.",
  "Lingostière se situe à la lisière nord-ouest de Nice, dans la vallée du Var, un secteur au double visage : la plaine traversée par le Train des Pignes d'un côté, un territoire de collines agricoles de l'autre. Le quartier compte environ 1 300 habitants, avec des ménages plus grands que la moyenne niçoise et un habitat mêlant zones résidentielles, activités commerciales autour du centre commercial Nice Lingostière (Carrefour, Forum Lingostière, Leroy Merlin) et loisirs comme le tennis ou le golf.",
];

const blocks = [
  {
    heading: "Entre vallée du Var et collines agricoles",
    paragraphs: [
      "Le double visage de Lingostière, entre la plaine du Var et les collines rurales, se traduit par un bâti varié : résidences proches des axes routiers, maisons plus isolées sur les hauteurs. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
    ],
  },
  {
    heading: "Un secteur excentré aux confins de Nice",
    paragraphs: [
      "Lingostière se situe à l'extrémité ouest du territoire niçois. Pour toute intervention dans ce secteur, je vous donne un délai réaliste dès l'appel, plutôt qu'une estimation optimiste qui ne tiendrait pas compte de la distance.",
    ],
  },
  {
    heading: "Résidentiel et activité mêlés",
    paragraphs: [
      "Le secteur combine logements et quelques zones d'activité. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou pour anticiper une usure avancée, je propose des solutions adaptées à l'état réel de votre porte, sans suréquipement inutile.",
    ],
  },
  {
    heading: "Secteur excentré à Lingostière",
    paragraphs: [
      "Lingostière, à l'extrémité ouest de Nice, reste plus excentré et moins dense que les quartiers centraux. Le secteur mêle habitat résidentiel et proximité de zones d'activité. Compte tenu de la distance depuis mon point de départ, j'annonce systématiquement un délai réaliste au téléphone, ajusté selon la circulation sur cet axe.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Lingostière en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Lingostière comme sur le reste de Nice, avec un délai habituel de 30 à 40 minutes selon la circulation, ce secteur étant le plus excentré que je couvre.",
  },
  {
    question: "Intervenez-vous sur les propriétés isolées des collines de Lingostière ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, quelle que soit la configuration de la propriété.",
  },
  {
    question: "Les tarifs sont-ils différents à Lingostière par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs de base sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous sur des locaux professionnels à Lingostière ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux, selon le même principe de diagnostic et de devis annoncé avant intervention.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Lingostière ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
  {
    question: "Combien de temps pour un serrurier à Lingostière ?",
    answer:
      "Comptez généralement entre 30 et 40 minutes selon la circulation, ce secteur étant à l'extrémité ouest du territoire que je couvre.",
  },
];

export default function SerrurierLingostiereNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Lingostière"
      crimeIntro="Lingostière, à l'extrémité ouest de Nice, reste concernée par cette réalité malgré son caractère plus excentré."
      crimeClosing="Dans ce secteur plus isolé, un diagnostic préventif évite souvent un dépannage en urgence, plus long à organiser."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="30 à 40 minutes selon la circulation"
      faq={faq}
      path="/serrurier-lingostiere-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

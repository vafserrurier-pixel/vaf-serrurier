import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-lingostiere-nice/" },
  title: "Serrurier Lingostière Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Lingostière, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Lingostière est un secteur à l'extrême ouest du territoire de Nice, à la frontière avec les communes voisines, avec un habitat mêlant zones résidentielles et quelques zones d'activité. C'est le secteur le plus excentré que je couvre depuis mon point de départ.",
  "J'y interviens pour des logements résidentiels comme pour la partie serrurerie de locaux professionnels, avec la même exigence de diagnostic partout à Nice.",
];

const blocks = [
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
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Lingostière en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Lingostière comme sur le reste de Nice, avec un délai habituel de 30 à 40 minutes selon la circulation, ce secteur étant le plus excentré que je couvre.",
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
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

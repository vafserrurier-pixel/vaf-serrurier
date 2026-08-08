import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-secteur-bellet-nice/" },
  title: "Serrurier Secteur Bellet Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au secteur Bellet, Nice (Crémat, Saint-Roman-de-Bellet, Ventabren) : ouverture de porte, dépannage, changement de serrure. 24h/24.",
};

const intro = [
  "Le secteur Bellet regroupe les hameaux du nord-ouest de Nice — Crémat, Saint-Roman-de-Bellet et Ventabren — dans les collines viticoles de l'appellation Bellet. C'est le secteur le plus rural et le plus vallonné du territoire niçois, avec un habitat principalement composé de maisons individuelles et de domaines.",
  "J'y interviens pour des propriétaires de maisons, en tenant compte des spécificités d'accès de ce secteur collinaire, avec la même exigence de diagnostic et de devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un secteur rural et vallonné",
    paragraphs: [
      "Les hameaux du secteur Bellet sont composés presque exclusivement de maisons individuelles, parfois isolées, au milieu des vignes et des collines. Le diagnostic tient compte de cet environnement particulier, plus rural que le reste de Nice.",
    ],
  },
  {
    heading: "Un déplacement à anticiper largement",
    paragraphs: [
      "Ce secteur étant le plus éloigné et le plus escarpé que je couvre, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte des routes de collines et de la distance depuis mon point de départ.",
    ],
  },
  {
    heading: "Sécurisation des maisons isolées",
    paragraphs: [
      "Pour les maisons plus isolées du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous à Crémat, Saint-Roman-de-Bellet et Ventabren ?",
    answer:
      "Oui, je couvre l'ensemble du secteur Bellet, avec un délai d'intervention plus long que dans le centre-ville compte tenu de la distance et du relief.",
  },
  {
    question: "Intervenez-vous rapidement dans le secteur Bellet en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7, avec un délai habituel de 30 à 45 minutes selon la circulation et l'accès exact du hameau concerné.",
  },
  {
    question: "Les tarifs sont-ils différents dans le secteur Bellet par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs de base sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous sur des maisons isolées ou des domaines viticoles ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, quelle que soit la configuration de la propriété.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans le secteur Bellet ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSecteurBelletNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Secteur Bellet"
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="30 à 45 minutes selon la circulation et l'accès"
      faq={faq}
      path="/serrurier-secteur-bellet-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

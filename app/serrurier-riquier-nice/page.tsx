import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-riquier-nice/" },
  title: "Serrurier Riquier Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Riquier, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Riquier est un quartier de l'est de Nice, organisé autour de sa gare ferroviaire et de son marché, à mi-chemin entre le port et les hauteurs du secteur Est. C'est un quartier populaire et vivant, avec un bâti mêlant immeubles anciens du début du XXe siècle et constructions plus récentes.",
  "Le passage important autour de la gare et des commerces locaux en fait un secteur où j'interviens régulièrement, aussi bien pour du dépannage classique que pour des demandes de sécurisation après effraction.",
];

const blocks = [
  {
    heading: "Un bâti mêlant plusieurs époques",
    paragraphs: [
      "Les immeubles de Riquier datent souvent du début ou du milieu du XXe siècle, avec des serrures qui ont parfois vieilli sans entretien particulier. Un cylindre qui accroche ou une porte qui ferme mal sont des situations fréquentes que je traite en priorité par la réparation quand c'est possible.",
    ],
  },
  {
    heading: "Sécurité renforcée pour les commerces et logements proches de la gare",
    paragraphs: [
      "La proximité de la gare et du marché génère un passage plus important, ce qui pousse certains résidents à vouloir renforcer leur porte d'entrée : cylindre haute sécurité, serrure multipoints, ou blindage selon l'état de la porte existante.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles collectifs du quartier, j'interviens sur les portes de hall, les gâches électriques et les digicodes, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Riquier en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Riquier comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Pouvez-vous renforcer la sécurité d'un logement proche de la gare de Riquier ?",
    answer:
      "Oui, je propose des solutions adaptées selon l'état de votre porte : cylindre haute sécurité, serrure multipoints, ou blindage complet si nécessaire.",
  },
  {
    question: "Intervenez-vous sur les portes de hall d'immeuble à Riquier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Riquier par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Riquier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierRiquierNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Riquier"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-riquier-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-riquier-nice/" },
  title: "Serrurier Riquier Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Riquier, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le nom de Riquier viendrait d'une riche famille niçoise propriétaire terrienne, ou d'un ancien cours d'eau appelé Richier qui aurait traversé la zone. Autrefois territoire de jardins potagers et d'arbres fruitiers dès la fin du Moyen Âge, le secteur abritait des moulins exploitant les eaux de l'ancien lit du Paillon, où s'étaient installés forgerons, tonneliers et autres artisans.",
  "À partir du XVIIIe siècle, Riquier devient le cœur industriel de Nice : manufacture des tabacs (1861-1979), atelier de mécanique et de menuiserie, usine à gaz de 1854, laboratoires Ronchèse (1927-1974). Le boulevard de Riquier, inauguré en 1886, symbolise la transition vers un quartier plus urbain, dont la plupart des immeubles actuels datent des années 1920. Aujourd'hui organisé autour de sa gare ferroviaire et de son marché, c'est un quartier populaire et vivant, à mi-chemin entre le port et les hauteurs du secteur Est.",
];

const blocks = [
  {
    heading: "Un héritage industriel et artisanal",
    paragraphs: [
      "L'ancien tissu industriel de Riquier — manufacture des tabacs, usine à gaz, ateliers mécaniques — a laissé place à des immeubles résidentiels construits pour la plupart dans les années 1920. Je diagnostique systématiquement l'état réel des serrures de ce bâti avant de proposer une réparation ou un remplacement.",
    ],
  },
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
    question: "Intervenez-vous sur les immeubles des années 1920 typiques de Riquier ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet de la serrure.",
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

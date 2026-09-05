import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-riquier-nice/" },
  title: "Serrurier Riquier Nice – Sécurité renforcée | VAF",
  description:
    "Serrurier à Riquier, Nice : renforcement de porte près de la gare, dépannage sur immeubles des années 1920. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure à changer, porte qui bloque à Riquier : j'interviens 24h/24 dans ce quartier populaire organisé autour de sa gare et de son marché, où le passage important pousse souvent les résidents à renforcer leur porte d'entrée. Sur les immeubles des années 1920 qui composent l'essentiel du bâti, je pose le plus souvent un cylindre Vak ou Fichet haute sécurité, avec possibilité de serrure multipoints ou de blindage selon l'état de la porte.",
  "Le nom de Riquier viendrait d'une riche famille niçoise propriétaire terrienne, sur un secteur qui devient au XVIIIe siècle le cœur industriel de Nice : manufacture des tabacs, usine à gaz, ateliers mécaniques. Le boulevard de Riquier, inauguré en 1886, symbolise la transition vers le quartier urbain actuel, dont la plupart des immeubles datent des années 1920 — un héritage qui explique le profil de bâti que je rencontre le plus souvent ici, autour de la place Max-Barel, de la place Arson et de l'église Saint-Martin.",
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
      <>
            Pour les immeubles collectifs du quartier, j&apos;interviens sur les portes de hall, les gâches électriques et les digicodes, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Bâti mixte ancien et récent à Riquier",
    paragraphs: [
      "Riquier, porte d'entrée historique et populaire à l'est de Nice, mélange immeubles anciens du centre-bourg et constructions plus récentes. Ce bâti mixte demande une approche différente selon les cas : adaptation d'un cylindre sur une porte ancienne, ou remplacement standard sur un immeuble plus récent. Je diagnostique systématiquement avant de proposer une solution.",
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
      crimeIntro="Riquier, porte d'entrée historique et populaire à l'est de Nice, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce bâti mixte, ancien et récent, un diagnostic adapté à chaque type de porte reste la meilleure approche."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

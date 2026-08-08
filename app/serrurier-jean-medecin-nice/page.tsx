import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-jean-medecin-nice/" },
  title: "Serrurier Jean-Médecin Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier avenue Jean-Médecin, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier Jean-Médecin s'organise autour de la grande avenue commerçante du même nom, qui relie la gare de Nice-Ville au centre-ville et à la place Masséna. C'est l'un des secteurs les plus denses de Nice, mêlant immeubles résidentiels, commerces en rez-de-chaussée et bureaux.",
  "Cette densité et ce passage important en font un quartier où les besoins de sécurisation sont variés : appartements en étage, portes de hall très sollicitées, et parfois locaux professionnels à l'entrée d'immeuble.",
];

const blocks = [
  {
    heading: "Un quartier dense, des halls d'immeuble très sollicités",
    paragraphs: [
      "Le passage important autour de l'avenue Jean-Médecin use les serrures de hall plus vite qu'ailleurs. Digicodes, gâches électriques et cylindres de porte d'entrée collective font partie des interventions les plus fréquentes que je réalise dans ce secteur.",
    ],
  },
  {
    heading: "Appartements en immeuble ancien ou récent",
    paragraphs: [
      "Le bâti mélange immeubles anciens rénovés et constructions plus récentes proches de la gare. Le diagnostic reste systématique : je vérifie l'état de la porte et du cylindre avant de proposer la solution la plus adaptée.",
    ],
  },
  {
    heading: "Proximité et rapidité d'intervention",
    paragraphs: [
      "La position centrale de ce quartier, proche de la place Masséna et du Carré d'Or, en fait un secteur où je peux généralement intervenir rapidement depuis mon point de départ.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement avenue Jean-Médecin en cas d'urgence ?",
    answer:
      "Oui, le quartier est central : le délai d'intervention y est généralement court, de l'ordre de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les halls d'immeuble très fréquentés du secteur ?",
    answer:
      "Oui, digicodes, gâches électriques et cylindres de porte de hall font partie des interventions courantes dans ce quartier dense.",
  },
  {
    question: "Travaillez-vous aussi sur des locaux professionnels en rez-de-chaussée ?",
    answer:
      "Oui, pour la partie serrurerie (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé avant intervention.",
  },
  {
    question: "Les tarifs sont-ils différents avenue Jean-Médecin par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierJeanMedecinNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Jean-Médecin"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-jean-medecin-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

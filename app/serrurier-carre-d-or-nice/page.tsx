import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carre-d-or-nice/" },
  title: "Serrurier Carré d'Or Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au Carré d'Or, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le Carré d'Or est le quartier commerçant et résidentiel le plus chic du centre de Nice, entre la place Masséna et la Promenade des Anglais. Ses immeubles Belle Époque abritent boutiques de luxe en rez-de-chaussée et appartements de standing aux étages.",
  "C'est un secteur où l'exigence esthétique est forte : les interventions de serrurerie doivent être aussi soignées que discrètes, sans dénaturer des façades et des halls souvent classés ou très surveillés.",
];

const blocks = [
  {
    heading: "Immeubles Belle Époque et copropriétés exigeantes",
    paragraphs: [
      "Les halls d'immeuble du Carré d'Or sont souvent richement décorés, avec des règlements de copropriété stricts sur l'aspect des équipements. Je m'adapte à ces contraintes pour toute intervention sur une porte de hall, un digicode ou une gâche électrique.",
    ],
  },
  {
    heading: "Appartements et commerces",
    paragraphs: [
      "Au-dessus des boutiques, les appartements combinent souvent charme ancien et rénovation récente. Le diagnostic reste systématique avant de proposer réparation, remplacement de cylindre ou renforcement de la porte d'entrée.",
    ],
  },
  {
    heading: "Un secteur central, une intervention rapide",
    paragraphs: [
      "La position centrale du Carré d'Or permet généralement un déplacement rapide depuis mon point de départ, un atout appréciable en cas de porte claquée ou de clé perdue.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Carré d'Or en cas d'urgence ?",
    answer:
      "Oui, le secteur est central : le délai d'intervention y est généralement court, de l'ordre de 10 à 15 minutes selon la circulation.",
  },
  {
    question: "Savez-vous intervenir dans des immeubles Belle Époque avec des halls soignés ?",
    answer:
      "Oui, je m'adapte aux exigences esthétiques de ces copropriétés pour toute intervention sur les équipements des parties communes.",
  },
  {
    question: "Intervenez-vous aussi pour les commerces du Carré d'Or ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé.",
  },
  {
    question: "Les tarifs sont-ils différents au Carré d'Or par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCarreDorNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carré d'Or"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 15 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carre-d-or-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

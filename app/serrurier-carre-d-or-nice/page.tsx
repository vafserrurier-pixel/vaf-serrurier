import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carre-d-or-nice/" },
  title: "Serrurier Carré d'Or Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au Carré d'Or, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Historiquement appelé quartier de la Buffa, du nom de la rue qui le traverse d'est en ouest, ce secteur s'est imposé comme le « Carré d'Or » à mesure qu'il devenait l'adresse de référence du centre niçois, à partir de la Belle Époque, quand Nice attirait l'aristocratie européenne et les têtes couronnées. Il est aujourd'hui délimité par l'avenue Jean-Médecin, la Promenade des Anglais et le jardin Albert Ier, et regroupe des rues emblématiques comme la rue de France, la rue du Maréchal-Joffre, la rue Masséna ou la rue de la Liberté.",
  "Le quartier conserve le plus ancien monument de Nice, la Croix de Marbre du XVIe siècle, aux côtés d'immeubles et villas Belle Époque et Art déco datant de 1895 à 1920, aux façades élégantes et aux balcons en fer forgé. Plusieurs hôtels prestigieux, dont le célèbre Negresco, renforcent le rayonnement international de ce secteur devenu la zone piétonne et commerçante la plus recherchée du centre-ville.",
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
    heading: "Boutiques de luxe et sécurisation commerciale",
    paragraphs: [
      "Les commerces haut de gamme de la rue de France, de la rue du Maréchal-Joffre ou de la rue Masséna ont des exigences de sécurité élevées. J'interviens sur le renforcement de portes de boutique et de rideaux métalliques avec la même discrétion attendue dans ce quartier de standing.",
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
    question: "Intervenez-vous discrètement pour une boutique de luxe du quartier ?",
    answer:
      "Oui, je m'adapte à la discrétion attendue dans ce quartier, sans camion visible ni intervention bruyante si ce n'est pas nécessaire.",
  },
  {
    question: "Les tarifs sont-ils différents au Carré d'Or par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous près de la Promenade des Anglais et du Negresco ?",
    answer:
      "Oui, toute cette partie du Carré d'Or jusqu'à la Promenade des Anglais fait partie de ma zone d'intervention habituelle.",
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

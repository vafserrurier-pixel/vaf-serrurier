import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-promenade-des-anglais-nice/" },
  title: "Serrurier Promenade des Anglais Nice – 24h/24 | VAF",
  description:
    "Serrurier Promenade des Anglais, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "La Promenade des Anglais est le front de mer emblématique de Nice, bordée d'immeubles résidentiels de standing, de grands hôtels et de résidences avec vue mer. C'est un secteur où se côtoient des immeubles anciens de grand standing et des constructions plus récentes.",
  "J'y interviens pour des résidents à l'année comme pour des propriétaires de biens en location saisonnière, avec la même exigence de diagnostic avant toute intervention.",
];

const blocks = [
  {
    heading: "Immeubles de standing en bord de mer",
    paragraphs: [
      "Les résidences de la Promenade des Anglais disposent souvent d'un hall d'entrée sécurisé, avec digicode, interphone et parfois gardien. J'interviens sur ces équipements comme sur les serrures d'appartement, avec un soin particulier pour ne pas dégrader des finitions haut de gamme.",
    ],
  },
  {
    heading: "Locations saisonnières face à la mer",
    paragraphs: [
      "Le secteur compte de nombreux appartements loués à la semaine ou au mois. Pour les propriétaires ou gestionnaires, je peux intervenir rapidement en cas de porte claquée entre deux locations, sans retarder l'arrivée des voyageurs suivants.",
    ],
  },
  {
    heading: "Sécurisation et discrétion",
    paragraphs: [
      "Certains résidents souhaitent renforcer leur porte sans en changer l'aspect extérieur, notamment dans les immeubles au règlement de copropriété strict. Le blindage d'une porte existante répond souvent bien à cette contrainte.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement sur la Promenade des Anglais en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 sur ce secteur, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous pour des locations saisonnières en bord de mer ?",
    answer:
      "Oui, je peux intervenir rapidement en cas de porte claquée ou de problème de serrure entre deux locations, pour des propriétaires ou des gestionnaires de biens.",
  },
  {
    question: "Pouvez-vous renforcer une porte sans changer son aspect extérieur ?",
    answer:
      "Oui, le blindage d'une porte existante permet souvent de renforcer la sécurité tout en conservant l'aspect d'origine, ce qui convient bien aux règlements de copropriété stricts.",
  },
  {
    question: "Les tarifs sont-ils différents sur la Promenade des Anglais ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce secteur ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierPromenadeDesAnglaisNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Promenade des Anglais"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-promenade-des-anglais-nice/"
      relatedServices={[
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-promenade-des-anglais-nice/" },
  title: "Serrurier Promenade des Anglais – Locations saisonnières | VAF",
  description:
    "Serrurier Promenade des Anglais, Nice : porte claquée entre deux locations, sécurisation discrète en copropriété de standing. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier Promenade des Anglais : j'interviens 24h/24 sur ce front de mer emblématique, notamment pour les nombreux appartements loués à la semaine ou au mois, en cas de porte claquée entre deux locations. Sur ces résidences de standing, je pose généralement un cylindre Fichet ou Cisa haut de gamme, en prenant soin de ne pas dégrader des finitions de hall souvent haut de gamme.",
  "L'histoire de la promenade commence en 1822, quand le révérend anglican Lewis Way lance une souscription auprès de la communauté britannique hivernant à Nice pour financer une chaussée littorale, en pleine crise agricole niçoise. Inaugurée en 1824, elle est baptisée « el camin dei Inglès » par les habitants. Elle est aujourd'hui bordée d'immeubles résidentiels de standing et de grands hôtels historiques, où se côtoient bâti ancien de grand standing et constructions plus récentes.",
];

const blocks = [
  {
    heading: "Digicodes et halls sécurisés en bord de mer",
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
  {
    heading: "Sécurité renforcée sur le front de mer de la Promenade des Anglais",
    paragraphs: [
      "Sur la Promenade des Anglais, les résidences et hôtels de prestige font directement face à la mer. L'air chargé en sel y accélère la corrosion des mécanismes métalliques exposés, en particulier sur les portes donnant sur une terrasse ou un balcon. Je recommande souvent un cylindre en inox ou traité anticorrosion pour ce type d'exposition directe.",
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
    question: "Intervenez-vous dans les grands hôtels historiques du front de mer ?",
    answer:
      "Pour la partie serrurerie de leurs locaux et bureaux, oui, avec la discrétion et le professionnalisme attendus dans ce type d'établissement.",
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
      crimeIntro="Sur la Promenade des Anglais, entre résidences de prestige et immeubles de front de mer, la vigilance reste de mise malgré l'affluence touristique."
      crimeClosing="L'air marin use aussi les mécanismes plus vite ici, un facteur supplémentaire à surveiller en plus du risque d'effraction."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

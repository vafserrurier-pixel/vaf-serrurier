import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-magnan-nice/" },
  title: "Serrurier Magnan Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Magnan, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Magnan est un quartier résidentiel à l'ouest du centre-ville, à proximité de la partie occidentale de la Promenade des Anglais. Il mêle immeubles des années 1960-1970 et constructions plus récentes, dans un cadre plus calme que le centre historique.",
  "C'est un quartier familial où j'interviens souvent pour du dépannage courant et des demandes de sécurisation de logements.",
];

const blocks = [
  {
    heading: "Immeubles résidentiels des années 1960-1970",
    paragraphs: [
      "Beaucoup de résidences de Magnan datent de cette période, avec des serrures d'origine parfois vieillissantes. Un remplacement de cylindre suffit souvent à retrouver un fonctionnement fiable, sans devoir changer toute la serrure.",
    ],
  },
  {
    heading: "Un quartier familial, proche du bord de mer",
    paragraphs: [
      "La proximité de la Promenade des Anglais et des écoles du secteur en fait un quartier prisé des familles. Les demandes portent souvent sur le renforcement d'une porte d'entrée ou l'installation d'une serrure multipoints.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les résidences du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Magnan en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Magnan comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des résidences des années 1960-1970 ?",
    answer:
      "Oui, c'est un profil de bâti fréquent à Magnan. Un remplacement de cylindre suffit souvent à retrouver un fonctionnement fiable.",
  },
  {
    question: "Proposez-vous des serrures multipoints pour les familles du quartier ?",
    answer:
      "Oui, selon l'état de votre porte, je peux installer une serrure multipoints qui améliore la sécurité au quotidien.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Magnan par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierMagnanNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Magnan"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-magnan-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

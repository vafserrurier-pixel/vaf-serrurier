import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-magnan-nice/" },
  title: "Serrurier Magnan Nice – Familles & serrures multipoints | VAF",
  description:
    "Serrurier au quartier Magnan, Nice : remplacement de cylindre sur résidences des années 1960-1970, serrure multipoints pour familles. Devis annoncé, 24h/24.",
};

const intro = [
  "Magnan, une serrure à dépanner en urgence : j'interviens 24h/24 dans ce quartier familial à l'ouest du centre-ville, proche de la Promenade des Anglais. Beaucoup de résidences datent des années 1960-1970, avec des serrures d'origine parfois vieillissantes : un remplacement de cylindre Vak ou Picard suffit souvent à retrouver un fonctionnement fiable, sans devoir changer toute la serrure.",
  "Le quartier tire son nom du Magnan, un petit fleuve côtier qui prend sa source à Aspremont, lui-même nommé d'après la culture des vers à soie autrefois pratiquée dans le pays niçois (le « magnan », d'où magnanerie). Le torrent faisait tourner moulins et ateliers, avant que son cours inférieur ne soit couvert en 1960. Cela a laissé place à l'urbanisation résidentielle actuelle, entre La Madeleine supérieure et le bord de mer.",
];

const blocks = [
  {
    heading: "Remplacement de cylindre sur les résidences 1960-1970",
    paragraphs: [
      "Beaucoup de résidences de Magnan datent de cette période, construites après la couverture du torrent, avec des serrures d'origine parfois vieillissantes. Un remplacement de cylindre suffit souvent à retrouver un fonctionnement fiable, sans devoir changer toute la serrure.",
    ],
  },
  {
    heading: "Un ancien vallon agricole devenu résidentiel",
    paragraphs: [
      "L'histoire industrielle et agricole du vallon Magnan a laissé place à un urbanisme résidentiel dense depuis la fin du XIXe siècle. Ce passé se traduit aujourd'hui par un bâti varié, où je m'adapte à chaque configuration de porte et de serrure.",
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
  {
    heading: "Immeubles en bord de mer à Magnan",
    paragraphs: [
      "Le quartier de Magnan, résidentiel en bord de mer à l'ouest du centre, compte de nombreux immeubles des années 1960-1970 exposés à l'air marin. Comme sur toute la façade littorale de Nice, les cylindres extérieurs y vieillissent plus vite qu'ailleurs en ville : un entretien ou un remplacement anticipé évite le blocage complet un jour d'urgence.",
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
    question: "Intervenez-vous sur tout le vallon Magnan, jusqu'au pont du Génie ?",
    answer:
      "Oui, tout ce secteur entre La Madeleine supérieure et le bord de mer fait partie de ma zone d'intervention habituelle.",
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

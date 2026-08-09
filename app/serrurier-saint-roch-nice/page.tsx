import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-roch-nice/" },
  title: "Serrurier Saint-Roch Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Saint-Roch, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Anciennement appelé Roquebillière, le quartier Saint-Roch fut ravagé, comme toute la ville de Nice, par une terrible épidémie de peste en 1631 qui décima la moitié de la population. Avant la Première Guerre mondiale, le secteur était encore une étendue fertile vouée à l'agriculture, nourrie par des ruisseaux et des sources.",
  "À la fin du XIXe siècle, avec le renforcement du dispositif de défense de l'État-major français dans les Alpes-Maritimes, la caserne Auvare s'installe sur des terrains vendus par la marquise de Châteauneuf en 1884. Le 6e bataillon de chasseurs alpins s'y établit en 1889, remplacé en 1920 par le 22e, originaire d'Albertville, si apprécié des Niçois qu'il inspira le surnom des « Diables Bleus » à la rue voisine. Fermée en 1995, la caserne est depuis 2003 devenue un campus universitaire. Aujourd'hui, Saint-Roch est un quartier résidentiel dense entre Riquier et la vallée du Paillon, au tissu urbain populaire et vivant.",
];

const blocks = [
  {
    heading: "Autour de l'ancienne caserne Auvare",
    paragraphs: [
      "Le site de l'ancienne caserne, reconverti en campus universitaire depuis 2003, a transformé une partie du quartier. Les immeubles construits autour conservent des besoins classiques de serrurerie que je diagnostique au cas par cas.",
    ],
  },
  {
    heading: "Un quartier populaire, un bâti à entretenir",
    paragraphs: [
      "Les immeubles de Saint-Roch demandent souvent un entretien régulier des serrures de hall et des cylindres d'appartement, très sollicités par un usage quotidien intense. Une intervention préventive évite les blocages en pleine journée.",
    ],
  },
  {
    heading: "Sécurisation après incident",
    paragraphs: [
      "Comme dans les quartiers denses, je suis parfois appelé après une tentative d'effraction pour sécuriser rapidement une porte, puis proposer une solution durable une fois le premier diagnostic effectué.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Saint-Roch en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Roch comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous après une effraction à Saint-Roch ?",
    answer:
      "Oui, je peux sécuriser rapidement une porte après une tentative d'effraction, puis proposer une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Roch par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintRochNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Roch"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-roch-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

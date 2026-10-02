import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-corniche-fleurie-nice/",
  title: "Serrurier Corniche Fleurie Nice – Urgence 24h/24 | VAF",
  description: "Serrurier à la Corniche Fleurie, Nice : sécurisation de villas près du jardin botanique, blindage. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrurier à la Corniche Fleurie : j'interviens sur ce secteur résidentiel verdoyant, où l'essentiel du bâti est constitué de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose généralement un cylindre Fichet ou Heraclès adapté, avec possibilité de blindage de la porte principale selon l'état du bâti.",
  "L'arrivée de l'eau sur les collines de Nice en 1895 a transformé l'agriculture locale, permettant l'essor de la floriculture qui a donné son nom au secteur, autrefois parsemé de serres à fleurs. Le jardin botanique de Nice, ouvert en 1991 sur le site des anciennes pépinières municipales, en constitue aujourd'hui la pièce maîtresse, entouré de résidences arborées, de villas modernes et de copropriétés récentes offrant une vue dégagée sur la Méditerranée.",
];

const blocks = [
  {
    heading: "Un ancien terroir horticole devenu résidentiel",
    paragraphs: [
      "L'héritage floricole de la Corniche Fleurie, hérité de l'arrivée de l'eau en 1895, se retrouve encore dans le jardin botanique de Nice qui occupe le site des anciennes pépinières municipales. Les villas et résidences du secteur bénéficient de ce cadre verdoyant préservé.",
      "Le projet du jardin botanique, initié en 1979 par le botaniste Gabriel Alziar à la tête de la division botanique des Espaces Verts, a pris forme sur ce terrain pentu à partir de 1983 : il conserve aujourd'hui plus de 3 500 espèces de plantes, dont plusieurs collections labellisées à l'échelle nationale (sauges, agaves, Callitris).",
    ],
  },
  {
    heading: "Un secteur résidentiel verdoyant",
    paragraphs: [
      "Sur la Corniche Fleurie, l'essentiel du bâti est constitué de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "Ce secteur étant à l'ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation sur les axes menant à ce secteur.",
    ],
  },
  {
    heading: "Sécurisation des propriétés",
    paragraphs: [
      "Pour les villas du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
  {
    heading: "Villas le long de la Corniche Fleurie",
    paragraphs: [
      "La Corniche Fleurie, route résidentielle des hauteurs ouest, dessert principalement des villas individuelles avec jardin. Sur ce type de propriété, j'interviens sur la porte d'entrée comme sur les portails et portillons, plus exposés aux intempéries qu'une porte d'appartement. Un entretien anticipé évite souvent un blocage complet en pleine urgence.",
    ],
  },
  {
    heading: "Les portes intérieures aussi : serrure de chambre ou de salle de bain bloquée",
    paragraphs: [
      "On parle de la porte d'entrée, mais les portes intérieures se bloquent aussi : chambre, salle de bain, bureau. Une serrure de chambre qui se coince avec quelqu'un à l'intérieur, surtout un enfant, demande une réaction calme et rapide. Beaucoup de serrures de salle de bain disposent d'un dégagement d'urgence, un petit orifice qui permet de les ouvrir depuis l'extérieur : renseignez-vous sur celui de votre porte. Sinon, j'interviens pour ouvrir sans abîmer la porte, puis je répare ou remplace le mécanisme. Évitez de forcer sur la poignée en attendant : un mécanisme de chambre est fragile, et forcer risque de casser le carré qui relie la poignée au pêne. Dans une villa qui compte plusieurs pièces, c'est une panne qu'on oublie de prévoir, et qui se règle vite.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à la Corniche Fleurie en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce secteur comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous près du jardin botanique de Nice ?",
    answer:
      "Oui, tout ce secteur résidentiel autour du jardin botanique fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les villas de ce secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité.",
  },
];

export default function SerrurierCornicheFleurieNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Corniche Fleurie"
      crimeIntro="La Corniche Fleurie, route résidentielle des hauteurs ouest, reste concernée par cette tendance malgré son cadre préservé."
      crimeClosing="Sur les villas avec jardin de ce secteur, portails et portillons méritent autant d'attention que la porte d'entrée."
      brandsIntro="Sur ces villas au cadre verdoyant, je privilégie des marques capables d'équiper aussi bien le portail que la porte d'entrée principale."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-corniche-fleurie-nice/"
    />
  );
}

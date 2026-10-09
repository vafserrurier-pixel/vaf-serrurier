import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-lingostiere-nice/",
  title: "Serrurier Lingostière Nice – Dépannage rapide",
  description: "Serrurier à Lingostière, Nice : dépannage sur propriétés isolées, délai réaliste pour ce secteur éloigné. Devis annoncé, 24h/24.",
});

const intro = [
  "Dépannage serrurier à Lingostière : j'interviens sur ce secteur le plus excentré que je couvre depuis mon point de départ, en vous donnant un délai réaliste dès l'appel plutôt qu'une estimation optimiste. Je m'adapte à chaque configuration, résidence proche des axes routiers ou maison plus isolée sur les hauteurs, avec généralement un cylindre Vak ou Cisa adapté au diagnostic effectué sur place.",
  "Lingostière se situe à la lisière nord-ouest de Nice, dans la vallée du Var, un secteur au double visage : la plaine traversée par le Train des Pignes d'un côté, un territoire de collines agricoles de l'autre. Le quartier compte environ 1 300 habitants, avec des ménages plus grands que la moyenne niçoise et un habitat mêlant zones résidentielles, activités commerciales autour du centre commercial Nice Lingostière (Carrefour, Forum Lingostière, Leroy Merlin) et loisirs comme le tennis ou le golf.",
];

const blocks = [
  {
    heading: "Entre vallée du Var et collines agricoles",
    paragraphs: [
      "Le double visage de Lingostière, entre la plaine du Var et les collines rurales, se traduit par un bâti varié : résidences proches des axes routiers, maisons plus isolées sur les hauteurs. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
      "La ligne de chemin de fer qui dessert Lingostière depuis son inauguration le 3 juillet 1911 emprunte un tracé volontairement escarpé à travers les collines niçoises plutôt que la route côtière plus directe, un choix fait à l'époque pour éviter l'exposition à l'artillerie navale en cas de conflit. Un détour stratégique qui a longtemps façonné l'isolement relatif de ce secteur.",
    ],
  },
  {
    heading: "Un secteur excentré aux confins de Nice",
    paragraphs: [
      "Lingostière se situe à l'extrémité ouest du territoire niçois. Pour toute intervention dans ce secteur, je vous donne un délai réaliste dès l'appel, plutôt qu'une estimation optimiste qui ne tiendrait pas compte de la distance.",
    ],
  },
  {
    heading: "Résidentiel et activité mêlés",
    paragraphs: [
      "Le secteur combine logements et quelques zones d'activité. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou pour anticiper une usure avancée, je propose des solutions adaptées à l'état réel de votre porte, sans suréquipement inutile.",
    ],
  },
  {
    heading: "Secteur excentré à Lingostière",
    paragraphs: [
      "Lingostière, à l'extrémité ouest de Nice, reste plus excentré et moins dense que les quartiers centraux. Le secteur mêle habitat résidentiel et proximité de zones d'activité. Compte tenu de la distance depuis mon point de départ, j'annonce systématiquement un délai réaliste au téléphone, ajusté selon la circulation sur cet axe.",
    ],
  },
  {
    heading: "Réparer ou remplacer : comment je décide",
    paragraphs: [
      "Face à une serrure qui pose problème, je préfère réparer quand c'est raisonnable. Plusieurs critères me guident. L'état du mécanisme d'abord : si seul le cylindre est usé, on le change et le reste continue de servir. L'âge ensuite : une serrure très ancienne dont les pièces ne se trouvent plus devient difficile à entretenir. Le niveau de sécurité souhaité enfin : une serrure en bon état peut rester insuffisante pour une porte exposée. Quand le remplacement s'impose, je vous explique pourquoi, avec le prix annoncé avant de commencer. Dans un secteur plus isolé comme Lingostière, je préfère faire une seule intervention qui règle vraiment le problème. Quand je repars, vous savez précisément ce qui a été fait, pourquoi, et ce qu'il reste éventuellement à surveiller.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur les propriétés isolées des collines de Lingostière ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, quelle que soit la configuration de la propriété.",
  },
  {
    question: "Intervenez-vous sur des locaux professionnels à Lingostière ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux, selon le même principe de diagnostic et de devis annoncé avant intervention.",
  },
  {
    question: "Combien de temps pour un serrurier à Lingostière ?",
    answer:
      "Comptez généralement entre 30 et 40 minutes selon la circulation, ce secteur étant à l'extrémité ouest du territoire que je couvre.",
  },
];

export default function SerrurierLingostiereNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Lingostière"
      crimeIntro="Lingostière, à l'extrémité ouest de Nice, reste concernée par cette réalité malgré son caractère plus excentré."
      crimeClosing="Dans ce secteur plus isolé, un diagnostic préventif évite souvent un dépannage en urgence, plus long à organiser."
      brandsIntro="Sur ce secteur excentré entre plaine et collines, je privilégie des marques disponibles rapidement pour ne pas allonger le délai d'intervention."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="30 à 40 minutes selon la circulation"
      faq={faq}
      path="/serrurier-lingostiere-nice/"
    />
  );
}

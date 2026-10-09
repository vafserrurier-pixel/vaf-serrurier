import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-saint-antoine-nice/",
  title: "Serrurier Saint-Antoine Nice – Dépannage rapide",
  description: "Serrurier à Saint-Antoine-de-Ginestière, Nice : dépannage sur bâti villageois, sécurisation près de l'aéroport. Devis annoncé, 24h/24.",
});

const intro = [
  "Dépannage serrurier à Saint-Antoine : j'interviens 24h/24 sur ce quartier perché à l'ambiance villageoise préservée, entre maisons individuelles et petites résidences. Je diagnostique chaque situation avant de proposer un cylindre Vak ou Cisa adapté, avec la même méthode que pour les logements résidentiels proches des zones d'activité de l'aéroport.",
  "Saint-Antoine-de-Ginestière ressemble davantage à un village indépendant qu'à un secteur niçois, son histoire étant liée à celle de Jeanne, reine de Naples. L'église Saint-Antoine, cœur spirituel du quartier, a été construite en 1875. Le quartier compte aujourd'hui environ 3 000 habitants, avec un profil plutôt familial et une majorité de propriétaires, dans un cadre verdoyant à l'ambiance vivante, entre le chemin de Saint-Antoine, la route de Bellet et la Corniche Fleurie, non loin du parc Carol-de-Roumanie.",
];

const blocks = [
  {
    heading: "Un village niçois resté à part",
    paragraphs: [
      "L'ambiance villageoise de Saint-Antoine-de-Ginestière, préservée malgré l'expansion de Nice, se retrouve dans un bâti varié, entre maisons individuelles et petites résidences. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
      "Le cimetière du quartier, en contrebas de l'église sur un terrain en pente, illustre bien ce caractère de village à part : sa partie la plus ancienne s'organise autour d'une croix, prolongée par d'étroites terrasses à flanc de colline, un aménagement qu'on retrouve rarement ailleurs dans Nice.",
    ],
  },
  {
    heading: "Un secteur résidentiel et d'activité mêlés",
    paragraphs: [
      "Saint-Antoine combine logements résidentiels et proximité de zones d'activité liées à l'aéroport. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      <>
            Pour les résidences du secteur, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "Saint-Antoine étant à l'ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation sur les axes menant à ce secteur.",
    ],
  },
  {
    heading: "Dépannage résidentiel à Saint-Antoine",
    paragraphs: [
      "Saint-Antoine, secteur résidentiel à l'ouest de Nice proche du Var, compte un mélange d'immeubles collectifs et d'habitat individuel. Les interventions y couvrent tout le spectre habituel : porte claquée, changement de cylindre, sécurisation après une tentative d'effraction. Le prix annoncé reste identique à celui pratiqué sur le reste de la ville.",
    ],
  },
  {
    heading: "Fermer à double tour : ce que ça change vraiment",
    paragraphs: [
      "Tourner la clé n'est pas un détail. Quand on tire simplement la porte, seul le pêne demi-tour la retient, ce qui n'offre qu'une protection limitée. Un tour de clé engage le pêne dormant, qui sort de la serrure et verrouille réellement la porte. Un second tour, quand la serrure en a deux, enfonce ce pêne plus loin. Prendre l'habitude de fermer à clé, y compris pour sortir cinq minutes, change vraiment le niveau de protection. Et si vous vous retrouvez dehors après avoir simplement tiré la porte, c'est le cas le plus simple pour une ouverture, souvent sans aucun dégât. Sur une porte multipoints, pensez aussi à relever la poignée avant de tourner la clé : c'est ce geste qui engage tous les points de fermeture.",
    ],
  },
  {
    heading: "Presque un logement sur deux a moins de trente ans",
    paragraphs: [
      "Dans le secteur « Saint-Antoine Ginestière », 48 % des résidences principales ont été construites depuis 1991 et 44 % des logements sont des maisons, avec 90 % de foyers disposant d'une place de stationnement (INSEE, recensement 2021). Le parc étant récent, on y rencontre moins d'anciens mécanismes : plutôt des portes d'entrée de série et des cylindres standard. Les interventions portent donc plus souvent sur un réglage, une clé perdue ou un renforcement choisi que sur l'usure. Je vous dis ce qui est nécessaire et ce qui est facultatif, avant de commencer. Source : INSEE, recensement de la population 2021, secteur « Saint-Antoine Ginestière ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur des logements proches de l'aéroport ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Intervenez-vous près de l'église Saint-Antoine, cœur du quartier ?",
    answer:
      "Oui, tout ce secteur au caractère villageois préservé fait partie de ma zone d'intervention habituelle.",
  },
];

export default function SerrurierSaintAntoineNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Antoine"
      crimeIntro="Saint-Antoine, secteur résidentiel à l'ouest proche du Var, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce mélange d'immeubles collectifs et d'habitat individuel, chaque configuration demande un diagnostic adapté."
      brandsIntro="Sur ce village niçois resté à l'écart, je choisis la marque selon le type réel de bâti, maison individuelle ou petite résidence."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-antoine-nice/"
    />
  );
}

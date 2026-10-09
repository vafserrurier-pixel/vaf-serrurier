import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-californie-nice/",
  title: "Serrurier Californie Nice – Ouverture 24h/24",
  description: "Serrurier au quartier Californie, Nice : sécurisation de villas familiales, dépannage près de l'aéroport. Devis annoncé, 24h/24.",
});

const intro = [
  "Dépannage serrurier au quartier Californie : j'interviens 24h/24 sur ce secteur familial du bas de Fabron, avec de nombreuses villas et résidences de standing à proximité de la mer. Je diagnostique chaque configuration avant de proposer généralement un cylindre Fichet ou Cisa, avec possibilité de blindage de la porte principale si le bâti le permet.",
  "Le quartier Californie doit son nom à l'aéroport de Nice, dont l'histoire commence ici en 1910 avec un premier meeting aérien devant 100 000 spectateurs, sur ce qui n'était alors qu'un champ caillouteux. Le nom garde aussi le souvenir de l'hippodrome de Californie, déplacé lors de l'agrandissement de la piste. Aujourd'hui desservi par la ligne 2 du tramway le long de l'avenue de la Californie, ce quartier urbain décontracté reste particulièrement apprécié des familles pour son bâti mêlant villas et résidences.",
];

const blocks = [
  {
    heading: "Un quartier né de l'histoire aéronautique niçoise",
    paragraphs: [
      "L'héritage aéronautique du quartier Californie, berceau du premier meeting aérien niçois en 1910, se lit dans sa proximité immédiate avec l'aéroport actuel. Les résidences construites depuis ont des profils variés que je diagnostique au cas par cas.",
      "Ce premier terrain, un simple champ caillouteux avec un circuit de 1,5 kilomètre et un virage en épingle critiqué par certains pilotes de l'époque, n'est reconnu officiellement comme aérodrome par le ministère de l'Air qu'en 1929 : les dizaines de vols effectués sans incident lors du meeting de 1910 avaient pourtant déjà démontré la viabilité du site.",
    ],
  },
  {
    heading: "Villas et résidences de standing",
    paragraphs: [
      "Le quartier Californie compte de nombreuses villas avec porte d'entrée individuelle, ainsi que des résidences plus récentes. Je diagnostique chaque configuration avant de proposer une solution de sécurisation cohérente.",
    ],
  },
  {
    heading: "Sécurisation des propriétés",
    paragraphs: [
      "Pour les villas du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      <>
            Pour les résidences collectives du quartier, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Bâti ancien et villas du quartier Californie",
    paragraphs: [
      "Le quartier Californie, à l'ouest de Nice, tire son nom de villas construites au tournant du XXe siècle, aujourd'hui entourées d'immeubles plus récents. Sur les propriétés les plus anciennes, je privilégie l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui changerait l'aspect d'une porte d'origine, comme sur d'autres quartiers historiques de la ville.",
    ],
  },
  {
    heading: "Ouvrir sans casser : la méthode dépend de la serrure",
    paragraphs: [
      <>{"La plupart des portes claquées ou verrouillées peuvent s'ouvrir sans dommage, mais la méthode dépend de la serrure. Sur une porte simplement claquée, une technique douce suffit en général. Sur une porte verrouillée à clé, tout dépend du cylindre : un modèle standard se prête à une ouverture sans casse, alors qu'un cylindre haute sécurité ou une serrure renforcée demande plus de temps, et il arrive qu'une ouverture non destructive ne soit pas possible. Dans ce cas, je vous le dis clairement et j'annonce le coût avant de passer à une méthode destructive, le remplacement du cylindre étant alors à prévoir. Sur des portes de qualité, comme dans les résidences de standing, c'est la serrure qui décide de la méthode. Les cas courants sont décrits sur la page "}<Link href="/ouverture-de-porte-nice/" className="text-steel underline">ouverture de porte</Link>{"."}</>,
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou renforcement complet de la porte.",
  },
  {
    question: "Travaillez-vous avec les résidences de standing du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et équipements des parties communes.",
  },
  {
    question: "Intervenez-vous près de l'aéroport et de la ligne 2 du tramway ?",
    answer:
      "Oui, tout ce secteur bien desservi entre le bas Fabron et la mer fait partie de ma zone d'intervention habituelle.",
  },
];

export default function SerrurierCalifornieNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Californie"
      crimeIntro="Le quartier Californie, avec ses villas du début du XXe siècle, reste concerné par cette réalité malgré son cadre résidentiel."
      crimeClosing="Sur ce bâti ancien, l'adaptation d'un cylindre compatible reste préférable à un remplacement qui dénaturerait la porte d'origine."
      brandsIntro="Entre villas historiques et résidences plus récentes du quartier Californie, je choisis la marque selon l'âge réel de la porte."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-californie-nice/"
    />
  );
}

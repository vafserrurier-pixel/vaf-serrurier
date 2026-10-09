import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-carabacel-nice/",
  title: "Serrurier Carabacel Nice – Urgence 24h/24",
  description: "Serrurier au quartier Carabacel, Nice : dépannage sur villas et immeubles anciens du boulevard planté, changement de serrure. Devis annoncé, 24h/24.",
});

const intro = [
  "Porte claquée, cylindre grippé à Carabacel : j'interviens 24h/24 sur ce secteur qui mêle immeubles anciens et villas sur les hauteurs proches du centre-ville. Le bâti du boulevard planté, construit dans la seconde moitié du XIXe siècle, a souvent conservé ses portes et cylindres d'origine : je pose le plus souvent un cylindre Fichet ou Heraclès compatible, plutôt qu'un remplacement complet qui dénaturerait ces façades.",
  "Carabacel, dont le nom viendrait du celte « car » (colline, mont, rocher), désigne le secteur situé juste au nord de la Vieille-Ville, au-delà du Paillon. Développé autour du pont Saint-Antoine devenu le « Pont Vieux », puis structuré par le plan régulateur du Consiglio d'Ornato dans les années 1850, le boulevard Carabacel est achevé fin 1865. Ce quartier entre la gare et Cimiez conserve aujourd'hui ce mélange d'immeubles anciens, de villas et de résidences plus récentes, à proximité de la place Wilson et du MAMAC.",
];

const blocks = [
  {
    heading: "Dépannage sur villas et immeubles anciens",
    paragraphs: [
      "Carabacel mélange immeubles anciens du centre-ville étendu et villas individuelles sur les hauteurs. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ancienne ou d'une porte de villa plus récente.",
    ],
  },
  {
    heading: "Réparation de cylindre sur le boulevard planté",
    paragraphs: [
      "Les immeubles construits le long du boulevard Carabacel dans la seconde moitié du XIXe siècle ont souvent conservé des éléments d'origine. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui dénaturerait ces façades.",
      "Le Pont Vieux qui a donné son ancien nom au secteur, mentionné dès 1250 puis signalé en pierre en 1323, ne portait pourtant ce nom que depuis 1824, à l'ouverture du Pont-Neuf. Un second passage, le pont Barla, fut construit en 1899 entre la rue Barla et le boulevard Carabacel pour accompagner le développement des quartiers est de la ville.",
    ],
  },
  {
    heading: "Changement de serrure et sécurisation programmée",
    paragraphs: [
      "La position de Carabacel, à la fois proche du centre-ville et plus tranquille, en fait un secteur où j'interviens régulièrement pour du dépannage courant comme pour des projets de sécurisation programmés.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les petites copropriétés du quartier, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Portes d'immeubles bourgeois sur le boulevard Carabacel",
    paragraphs: [
      "Au-delà de la réparation de cylindre déjà évoquée, les immeubles bourgeois du boulevard Carabacel posent parfois un autre défi : des portes d'entrée d'origine, plus lourdes et plus hautes que la moyenne, avec une serrure centrale qu'il faut savoir démonter sans abîmer le bois ancien. Je m'adapte à ce type de menuiserie plutôt que de forcer une solution standard.",
    ],
  },
  {
    heading: "La gâche, le point faible discret d'une belle porte bourgeoise",
    paragraphs: [
      "Une serrure solide ne sert à rien si la pièce qui la reçoit cède. Côté cadre, la gâche est la petite plaque métallique dans laquelle s'engage le pêne : sur une vieille porte, elle est parfois fixée par de simples vis courtes dans un bois fatigué. Un choc suffit alors à arracher la fixation, même avec un cylindre neuf. Quand le cadre est sain, la solution consiste à poser une contre-plaque plus robuste et des vis plus longues, qui vont chercher la structure en profondeur. L'aspect côté palier ne change pas, et le gain est réel pour peu de matériel. Je regarde systématiquement l'état de la gâche lors d'un changement de cylindre, et je ne vous propose un renfort que s'il est justifié.",
    ],
  },
  {
    heading: "Des propriétaires dans des immeubles anciens : la serrure et l'assurance",
    paragraphs: [
      "60 % des résidences principales du secteur « Carabacel » sont occupées par leur propriétaire, et 51 % datent d'avant 1946 (INSEE, recensement 2021). Quand on possède un appartement dans un immeuble ancien, la question de la serrure se pose aussi du côté de l'assurance habitation : certains contrats fixent des exigences sur les fermetures de la porte d'entrée, et d'autres prévoient des conditions en cas de vol. Avant d'engager une dépense, relisez le vôtre. Une facture détaillée de l'intervention, qui indique la référence posée, vous servira dans les deux cas. Source : INSEE, recensement de la population 2021, secteur « Carabacel ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur les villas individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, comme pour tout type de porte.",
  },
  {
    question: "Travaillez-vous aussi sur des immeubles anciens à Carabacel ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
  },
  {
    question: "Intervenez-vous près du boulevard Carabacel et du Pont Vieux ?",
    answer:
      "Oui, tout ce secteur entre la Vieille-Ville et les hauteurs de Carabacel fait partie de ma zone d'intervention habituelle.",
  },
];

export default function SerrurierCarabacelNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carabacel"
      crimeIntro="Carabacel, avec ses immeubles du XIXe siècle et ses villas, reste concerné par cette tendance comme le reste du centre."
      crimeClosing="Sur le bâti ancien du boulevard, l'adaptation d'un cylindre récent reste souvent suffisante pour combler l'écart de sécurité."
      brandsIntro="Sur les immeubles bourgeois du boulevard planté comme sur les villas des hauteurs, je privilégie des marques capables de fournir un cylindre discret et compatible."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carabacel-nice/"
    />
  );
}

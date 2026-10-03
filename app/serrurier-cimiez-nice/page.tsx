import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-cimiez-nice/",
  title: "Serrurier Cimiez Nice – Urgence 24h/24 | VAF",
  description: "Serrurier à Cimiez, Nice : changement de serrure et dépannage sur portes anciennes, ouverture de porte pour villas et copropriétés. Devis annoncé, 24h/24.",
});

const intro = [
  "Besoin d'un serrurier à Cimiez : j'interviens 24h/24 pour une porte claquée, un cylindre grippé ou une clé cassée, avec le même délai que sur le reste de Nice. Ce quartier pose un défi particulier : les grands immeubles Belle Époque et les anciens palaces reconvertis en copropriétés ont souvent gardé leurs serrures et cylindres d'origine, parfois centenaires. Sur ce type de porte, je pose le plus souvent un cylindre récent (Picard ou Vak, entre autres) compatible avec le mécanisme existant, plutôt que de remplacer toute la serrure et dénaturer une porte d'époque.",
  "Cette densité de portes anciennes tient à l'histoire du quartier. Le boulevard de Cimiez, tracé à la Belle Époque par l'architecte Sébastien-Marcel Biasini sur le site de l'antique Cemenelum, a accueilli des hôtels-palais pour une clientèle européenne fortunée. La reine Victoria ou Édouard VII y ont d'ailleurs séjourné. C'est ce patrimoine qui fait de Cimiez l'un des quartiers où mon expertise sur les mécanismes anciens sert le plus souvent, aux abords du musée Matisse et du monastère de Cimiez.",
];

const blocks = [
  {
    heading: "Changement de serrure sur les portes anciennes de Cimiez",
    paragraphs: [
      "Les palaces Belle Époque reconvertis en copropriétés et les grands immeubles du quartier ont souvent conservé leurs portes et cylindres d'origine. Sur ce type de porte, je privilégie l'adaptation d'un cylindre compatible plutôt qu'un remplacement complet : ça évite de dénaturer une porte d'époque tout en retrouvant un fonctionnement fiable. Un remplacement intégral n'intervient que si le mécanisme est trop endommagé pour être conservé.",
      "L'Excelsior Régina Palace, construit par Biasini pour la venue de la reine Victoria, comptait 400 chambres à son inauguration en 1897 : la souveraine y séjourna du 12 mars au 28 avril, dans une aile ouest dotée d'une entrée privée. Racheté en 1920 puis transformé en copropriété en 1937, l'immeuble compte aujourd'hui 98 appartements, un cas d'école pour l'adaptation de serrures modernes sur un bâti classé.",
    ],
  },
  {
    heading: "Dépannage et ouverture de porte dans les immeubles de standing",
    paragraphs: [
      "Les portes de ces immeubles anciens sont souvent plus lourdes et plus épaisses que la moyenne, avec des mécanismes qui demandent une méthode d'ouverture adaptée pour ne pas les abîmer. Que ce soit pour un cylindre grippé, une clé cassée ou une porte claquée, je diagnostique l'origine réelle du blocage avant d'intervenir, plutôt que de forcer.",
    ],
  },
  {
    heading: "Sécurisation des halls de copropriété",
    paragraphs: [
      <>
            Les copropriétés de Cimiez sont généralement bien entretenues, avec des règlements exigeants sur l&apos;esthétique des parties communes. Pour un digicode, une gâche électrique ou une porte de hall, je propose des solutions qui respectent ce niveau de finition, sur demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Sécurisation des portes de villa et portails",
    paragraphs: [
      "Le secteur compte aussi des villas individuelles, avec des besoins différents : porte d'entrée principale à sécuriser, parfois un portillon ou un accès secondaire. J'interviens sur le remplacement de serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte principale selon l'état du bâti.",
    ],
  },
  {
    heading: "Portails et grilles des propriétés de Cimiez",
    paragraphs: [
      "Au-delà des immeubles anciens déjà évoqués, Cimiez compte aussi de nombreuses propriétés avec portail et grille d'enceinte, parfois d'origine. Ces équipements extérieurs, exposés aux intempéries, demandent un entretien différent d'une serrure de porte intérieure : je vérifie aussi bien la gâche que la fixation, avant de proposer un remplacement complet si nécessaire.",
    ],
  },
  {
    heading: "Quand le cylindre ne suffit plus : le coffre à larder d'une porte d'époque",
    paragraphs: [
      <>{"Sur une porte ancienne en bois, la serrure est souvent encastrée dans l'épaisseur du battant : c'est le coffre à larder, la boîte qui contient le mécanisme et les pênes. Le cylindre n'en est que la partie qui reçoit la clé. Le remplacer suffit tant que le coffre fonctionne, mais un coffre usé ou faussé par les années donne une porte qui accroche ou un pêne qui ne sort plus complètement. Dans ce cas, changer le cylindre seul ne règle rien. Remplacer le coffre demande de retrouver un modèle aux bonnes cotes, pour ne pas agrandir la mortaise ni abîmer le bois. Je vous le dis franchement après diagnostic : si le cylindre suffit, je ne touche à rien d'autre. Le choix entre cylindre et serrure complète est expliqué sur la page "}<Link href="/changement-serrure-nice/" className="text-steel underline">changement de serrure</Link>{"."}</>,
    ],
  },
  {
    heading: "Près de trois foyers sur quatre sont propriétaires : choisir le bon niveau de serrure",
    paragraphs: [
      <>{"73 % des résidences principales du secteur « Cimiez » sont occupées par leur propriétaire, contre 48 % à l'échelle de Nice, et 61 % des foyers disposent d'une place de stationnement réservée. Quand on est propriétaire, la question n'est plus seulement de réparer mais de choisir : cylindre standard, cylindre certifié A2P, serrure multipoints. Le bon niveau dépend de la porte, de l'assurance et de l'usage, et un cylindre de très haute sécurité posé sur une porte fragile n'apporte presque rien. Je regarde la porte et son cadre avant de recommander, et je vous explique ce que change la "}<Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">certification A2P</Link>{". Source : INSEE, recensement de la population 2021, secteur « Cimiez »."}</>,
    ],
  },
];

const faq = [
  {
    question: "Savez-vous intervenir sur des serrures anciennes de type Belle Époque ?",
    answer:
      "Oui, c'est une situation fréquente à Cimiez. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement qui changerait l'aspect d'une porte d'origine.",
  },
  {
    question: "Intervenez-vous pour les copropriétés à Cimiez ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous près des arènes romaines et du monastère de Cimiez ?",
    answer:
      "Oui, tout ce secteur historique autour des arènes et du monastère franciscain fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Travaillez-vous sur les anciens palaces reconvertis en copropriétés ?",
    answer:
      "Oui, ces bâtiments remarquables demandent un vrai savoir-faire : je privilégie systématiquement une solution qui respecte l'architecture d'origine.",
  },
];

export default function SerrurierCimiezNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Cimiez"
      crimeIntro="Cimiez, avec ses grands immeubles Belle Époque et ses villas, reste concerné par cette réalité malgré son cadre résidentiel recherché."
      crimeClosing="Sur ce type de patrimoine, une porte ancienne bien entretenue protège aussi bien qu'un modèle récent, à condition d'un cylindre à jour."
      brandsIntro="Sur les anciens palaces reconvertis en copropriétés comme sur les villas de Cimiez, je choisis une marque capable de fournir un cylindre discret, fidèle à l'esprit du bâti d'origine."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-cimiez-nice/"
    />
  );
}

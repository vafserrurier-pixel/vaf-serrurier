import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-les-moulins-nice/",
  title: "Serrurier Les Moulins Nice – Urgence 24h/24",
  description: "Serrurier aux Moulins, Nice : dépannage sur portes palières, sécurisation après effraction. Devis annoncé, intervention 24h/24.",
});

const intro = [
  "Serrure à changer, porte qui bloque aux Moulins : j'interviens 24h/24 dans ce quartier composé principalement de grands ensembles, où les portes palières et cylindres de hall subissent un usage intensif. Après une perte de clés ou une tentative d'effraction, je pose généralement un cylindre Vak ou Picard plus résistant, avec possibilité de blindage selon le cadre.",
  "Le quartier des Moulins, aussi appelé Moulins Point-du-Jour, a été construit entre 1965 et 1976 pour répondre à la demande croissante de logements sociaux, à la frontière entre Nice et Saint-Laurent-du-Var. Depuis 2009, il bénéficie d'un programme de renouvellement urbain porté par l'ANRU. Il est désormais desservi par le tramway depuis 2019, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens, entre le boulevard Paul-Montel et l'avenue Martin-Luther-King.",
];

const blocks = [
  {
    heading: "Un grand ensemble en rénovation urbaine",
    paragraphs: [
      "Le programme de renouvellement urbain engagé depuis 2009 transforme progressivement le bâti des Moulins, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens des années 1960-1970. Je m'adapte à ces deux réalités très différentes.",
      "Sur les 63 hectares que compte ce quartier de près de 7 000 habitants, la Métropole et ses partenaires ont déjà investi environ 220 millions d'euros dans le cadre de l'ANRU, et un nouveau programme prévoit encore 92 millions d'euros de travaux d'ici 2030 : le renouvellement du bâti va donc se poursuivre pendant plusieurs années.",
    ],
  },
  {
    heading: "Un habitat collectif qui demande un suivi régulier",
    paragraphs: [
      "Dans les grands ensembles des Moulins, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement aux Moulins",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les halls d&apos;immeuble et parties communes, j&apos;interviens sur demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.
          </>,
    ],
  },
  {
    heading: "Grand ensemble résidentiel des Moulins",
    paragraphs: [
      "Les Moulins, quartier résidentiel à l'ouest de Nice, se compose principalement de grands ensembles collectifs. Comme à l'Ariane, les portes de hall et les digicodes y subissent un usage intensif. J'interviens régulièrement pour ce type de panne, ainsi que pour la sécurisation des accès communs à la demande des syndics.",
    ],
  },
  {
    heading: "Quand une serrure d'origine n'est plus fabriquée",
    paragraphs: [
      "Dans les ensembles construits entre 1965 et 1976, certaines serrures d'origine ne sont plus fabriquées. Quand un mécanisme tombe en panne, la pièce de rechange n'existe parfois plus. Deux solutions : trouver un cylindre ou un coffre compatible aux mêmes cotes, ce qui suffit si le mécanisme est sain, ou remplacer la serrure entière par un modèle moderne qui se fixe aux mêmes emplacements. Je commence par identifier la marque et les cotes de votre serrure, souvent lisibles sur la tranche de la porte ou sur le coffre. Le but est de ne pas percer ni modifier la porte inutilement. Une photo de la serrure me permet souvent de savoir avant de venir si une pièce compatible existe.",
    ],
  },
  {
    heading: "98 % de locataires : qui prévenir avant une intervention",
    paragraphs: [
      "Dans le secteur « Les Moulins », 98 % des résidences principales sont louées et 94 % sont des logements sociaux loués vides (INSEE, recensement 2021). Avec une grande partie des logements gérés par des bailleurs sociaux, la règle simple est de prévenir le bailleur avant toute intervention qui change la serrure d'une porte palière, sauf urgence. Pour une perte de clé, une porte qui ne ferme plus ou une effraction, je sécurise la porte dans l'heure et je remets une facture détaillée, que vous pourrez présenter au bailleur. Le prix est annoncé avant mon déplacement, de jour comme de nuit. Source : INSEE, recensement de la population 2021, secteur « Les Moulins ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble aux Moulins ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes du renouvellement urbain des Moulins ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements depuis 2009, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Intervenez-vous après une effraction aux Moulins ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
];

export default function SerrurierLesMoulinsNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Les Moulins"
      crimeIntro="Les Moulins, grand ensemble résidentiel à l'ouest de Nice, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce type d'habitat collectif dense, la sécurisation des accès communs reste un enjeu partagé par l'ensemble des résidents."
      brandsIntro="Entre bâtiments rénovés dans le cadre de l'ANRU et ensembles plus anciens des années 1960-1970, je choisis la marque selon l'âge réel de la porte."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-les-moulins-nice/"
    />
  );
}

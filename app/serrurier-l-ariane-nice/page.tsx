import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-l-ariane-nice/" },
  title: "Serrurier l'Ariane Nice – Grands ensembles | VAF",
  description:
    "Serrurier à l'Ariane, Nice : dépannage sur portes palières de grands ensembles, sécurisation après effraction. Devis annoncé, 24h/24.",
};

const intro = [
  "Clé cassée, porte claquée à l'Ariane : j'interviens 24h/24 dans ce grand quartier d'habitat collectif, où les portes palières et les cylindres de hall subissent un usage intensif. Après une perte de clés ou une tentative d'effraction, je pose généralement un cylindre Vak ou Cisa plus résistant, avec possibilité de blindage de la porte si le cadre le permet.",
  "L'Ariane doit son nom à la plaine alluviale du Paillon : « arena » signifie le sable, en latin comme en niçois. Longtemps rural autour d'un petit hameau, le quartier connaît sa métamorphose la plus spectaculaire durant les Trente Glorieuses, avec la construction de grands ensembles dans les années 1950-1970. Il compte aujourd'hui près de 12 000 habitants. Depuis 2008, il bénéficie d'un programme de renouvellement urbain de 300 millions d'euros, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens, autour de la place des Mosaïques, de la rue Anatole-de-Monzie, du parc des Tripodes et du jardin Saramito.",
];

const blocks = [
  {
    heading: "Un grand ensemble en pleine rénovation urbaine",
    paragraphs: [
      "Le programme de renouvellement urbain engagé depuis 2008 transforme progressivement le bâti de l'Ariane, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des grands ensembles plus anciens des années 1960-1970. Je m'adapte à ces deux réalités très différentes.",
    ],
  },
  {
    heading: "Un habitat collectif qui demande un suivi régulier",
    paragraphs: [
      "Dans les grands ensembles de l'Ariane, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement à l'Ariane",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble et parties communes, j'interviens sur demande d'un syndic ou d'un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.",
    ],
  },
  {
    heading: "Portes de hall et gâches électriques à l'Ariane",
    paragraphs: [
      "L'Ariane, grand ensemble de logements dans la vallée à l'est de Nice, se compose principalement de tours et de barres d'immeubles collectifs. Sur ce type de bâti, les portes de hall et les gâches électriques subissent un usage intensif. J'interviens régulièrement pour ce type de panne, avec un diagnostic rapide pour limiter le temps d'immobilisation de l'accès collectif.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à l'Ariane en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à l'Ariane comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble à l'Ariane ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes du renouvellement urbain de l'Ariane ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Les tarifs sont-ils différents à l'Ariane par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous après une effraction à l'Ariane ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à l'Ariane ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierArianeNicePage() {
  return (
    <QuartierPageTemplate
      quartier="l'Ariane"
      crimeIntro="L'Ariane, grand ensemble de logements dans la vallée est, reste concerné par cette réalité comme le reste de la ville."
      crimeClosing="Sur ce type d'habitat collectif dense, sécuriser les portes de hall reste un enjeu partagé par l'ensemble des résidents."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-l-ariane-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

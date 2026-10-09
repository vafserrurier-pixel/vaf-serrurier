import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-mantega-nice/",
  title: "Serrurier Mantega Nice – Changement de cylindre",
  description: "Serrurier à Mantega, Nice : intervention sur immeubles et résidences de ce quartier-village en hauteur. Devis annoncé, intervention 24h/24.",
});

const intro = [
  "Serrurier à Mantega : j'interviens sur ce quartier-village résidentiel en hauteur, aussi bien sur les immeubles classiques que sur les résidences avec jardins. Un changement de cylindre y a été réalisé récemment, un cas assez représentatif des interventions courantes sur ce secteur.",
  "Mantega est un quartier calme et très verdoyant, au centre de Nice mais en hauteur, avec des vues dégagées sur la ville. Le bâti mêle immeubles classiques, notamment le long du Boulevard Auguste Raynaud, et résidences avec jardins privés. Le quartier compte deux repères notables, l'église Saint-Paul et l'Évêché de Nice (23 avenue de Sévigné), ainsi qu'un vestige patrimonial singulier : le tunnel ferroviaire du Piol Mantega, entré en service en 1892 sur la ligne du Train des Pignes.",
];

const blocks = [
  {
    heading: "Un quartier-village entre immeubles et résidences avec jardins",
    paragraphs: [
      "Mantega mêle des immeubles classiques, en particulier le long du Boulevard Auguste Raynaud, et des résidences plus récentes avec jardins privés. Le diagnostic reste systématique, qu'il s'agisse d'une porte d'immeuble ou d'une serrure de résidence individuelle.",
    ],
  },
  {
    heading: "Un secteur calme et verdoyant",
    paragraphs: [
      "Le quartier se distingue par son caractère résidentiel et très verdoyant, avec des espaces publics et privés arborés. C'est un cadre plutôt calme pour un quartier aussi central, ce qui n'empêche pas les mêmes besoins en serrurerie que partout ailleurs à Nice.",
    ],
  },
  {
    heading: "En hauteur au centre de Nice, un déplacement à anticiper",
    paragraphs: [
      "Mantega est situé en hauteur, entre les avenues de Pessicart, Bellevue et Castellane. Je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de l'altitude et des accès du secteur.",
    ],
  },
  {
    heading: "Le tunnel du Piol Mantega, un repère du quartier",
    paragraphs: [
      "Le quartier abrite un vestige patrimonial singulier : le tunnel ferroviaire du Piol Mantega, une galerie de 350 mètres entrée en service en 1892 sur la ligne du Train des Pignes. Un repère utile pour se situer sur ce secteur en hauteur, entre l'église Saint-Paul et l'Évêché de Nice.",
    ],
  },
  {
    heading: "Une intervention récente : changement de cylindre",
    paragraphs: [
      "J'interviens régulièrement à Mantega, notamment pour des changements de cylindre sur des serrures d'immeuble ou de résidence. Le diagnostic sur place détermine si un simple remplacement de cylindre suffit ou si la serrure complète doit être changée.",
    ],
  },
  {
    heading: "Après un changement de cylindre : ce qu'il faut vérifier avant que je reparte",
    paragraphs: [
      "Un cylindre neuf se contrôle avant la fin de l'intervention. Je vous invite à tester avec moi : verrouiller et déverrouiller plusieurs fois porte ouverte d'abord, puis porte fermée, de l'intérieur comme de l'extérieur, pour vérifier que la clé tourne sans forcer. Comptez ensuite les clés remises, et gardez la carte de propriété si le cylindre en est fourni : elle sert à en commander d'autres. Conservez enfin la facture, qui indique la référence posée. Cette vérification prend quelques minutes, et elle évite de découvrir un défaut le lendemain, une fois la porte fermée à clé. Si quelque chose ne va pas, c'est sur le moment que je le règle.",
    ],
  },
  {
    heading: "Trois types de logements dans un petit secteur",
    paragraphs: [
      "Dans le secteur « Mantega », 32 % des résidences principales sont des logements sociaux loués vides, 24 % des logements sont des maisons, et 45 % des résidences principales datent d'avant 1946 (INSEE, recensement 2021). Logement social, maisons et immeubles anciens se côtoient donc dans un même secteur, avec des portes et des serrures très différentes. C'est pourquoi je ne propose jamais de solution avant d'avoir vu la porte : un diagnostic sur place, ou au moins une photo envoyée par WhatsApp, permet de savoir si on a affaire à une porte ancienne, à une porte de maison ou à une porte d'ensemble collectif. Source : INSEE, recensement de la population 2021, secteur « Mantega ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur les immeubles du Boulevard Auguste Raynaud et les résidences avec jardins ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou remplacement complet, sur immeuble comme sur résidence.",
  },
  {
    question: "Proposez-vous un changement de cylindre à Mantega ?",
    answer:
      "Oui, c'est une intervention courante sur ce quartier. Le diagnostic sur place détermine si le cylindre seul suffit ou si la serrure complète doit être changée.",
  },
  {
    question: "Le quartier étant en hauteur, cela change-t-il le délai d'intervention ?",
    answer:
      "J'en tiens compte dès l'appel pour vous donner un délai réaliste, généralement 15 à 25 minutes selon la circulation.",
  },
];

export default function SerrurierMantegaNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Mantega"
      crimeIntro="Mantega, quartier calme et résidentiel en hauteur, n'est pas à l'abri de cette évolution."
      crimeClosing="Sur les immeubles comme sur les résidences avec jardins de ce secteur, un cylindre en bon état reste la première protection."
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-mantega-nice/"
      testimonial={{
        author: "Lionel S.",
        text: "Ben est sympathique. Rapide et professionnel. Merci à Ben 🙏🙏🙏 Je le recommande.",
      }}
    />
  );
}

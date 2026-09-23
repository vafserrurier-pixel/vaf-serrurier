import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-mantega-nice/",
  title: "Serrurier Mantega Nice – Changement de cylindre | VAF",
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
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Mantega en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Mantega comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
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
  {
    question: "Les tarifs sont-ils différents à Mantega par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Mantega ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
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

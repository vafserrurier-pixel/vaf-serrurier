import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-pierre-de-feric-nice/" },
  title: "Serrurier Saint-Pierre-de-Féric Nice – Grandes propriétés | VAF",
  description:
    "Serrurier à Saint-Pierre-de-Féric, Nice : sécurisation de villas avec portail et grand jardin, blindage de porte. Devis annoncé, 24h/24.",
};

const intro = [
  "Besoin d'un serrurier à Saint-Pierre-de-Féric : j'interviens 24h/24 sur ce secteur résidentiel haut de gamme des hauteurs de Nice, où les propriétés sont souvent plus grandes qu'ailleurs, avec portails et accès secondaires à diagnostiquer en plus de la porte d'entrée. Je pose généralement un cylindre Fichet ou Cisa haute sécurité, avec possibilité de blindage complet selon l'état du bâti.",
  "Le nom du quartier vient du niçois « San Peire dei Ferigoula », littéralement « Saint Pierre des Thyms », en référence aux plantations de thym qui couvraient autrefois ces hauteurs. Longtemps rural, le secteur est resté agricole jusqu'à la création d'un réseau de routes en 1922. Il s'est ensuite urbanisé fortement, tout en conservant son caractère calme et verdoyant, avec des villas entourées de jardins, parfois piscine ou court de tennis à l'appui.",
];

const blocks = [
  {
    heading: "Sécurisation des portails et grandes propriétés",
    paragraphs: [
      "L'héritage rural de Saint-Pierre-de-Féric se lit encore dans le tracé des routes ouvertes en 1922 et dans la végétation abondante du quartier. Les propriétés y sont souvent plus grandes qu'ailleurs à Nice, avec des portails et des accès qui demandent parfois un diagnostic spécifique en plus de la porte d'entrée elle-même.",
    ],
  },
  {
    heading: "Un secteur de villas et de maisons",
    paragraphs: [
      "À Saint-Pierre-de-Féric, l'essentiel du bâti est constitué de maisons individuelles avec porte d'entrée propre. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un secteur excentré, un déplacement à anticiper",
    paragraphs: [
      "Ce secteur étant plus éloigné du centre-ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès aux hauteurs de Nice.",
    ],
  },
  {
    heading: "Sécurisation des maisons individuelles",
    paragraphs: [
      "Pour les maisons du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
  {
    heading: "Propriétés isolées des hauteurs de Saint-Pierre-de-Féric",
    paragraphs: [
      "Saint-Pierre-de-Féric, hameau perché dans les collines au nord-ouest de Nice, reste plus excentré et moins dense que les quartiers du centre. Les propriétés y sont souvent isolées, avec portail d'entrée et long accès privé. Je m'organise en conséquence pour annoncer un délai réaliste, tenant compte de la distance et de l'accès.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Pierre-de-Féric en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Pierre-de-Féric comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les maisons individuelles du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous sur des propriétés avec portail et grand jardin ?",
    answer:
      "Oui, ce type de configuration est fréquent à Saint-Pierre-de-Féric. Je diagnostique la porte d'entrée principale ainsi que les accès secondaires si besoin.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Pierre-de-Féric par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les maisons du secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité.",
  },
  {
    question: "Comment estimez-vous le délai d'intervention sur ce secteur excentré ?",
    answer:
      "Je vous donne une estimation réaliste dès l'appel téléphonique, en tenant compte de votre adresse précise et des conditions de circulation du moment.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Pierre-de-Féric ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintPierreDeFericNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Pierre-de-Féric"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-pierre-de-feric-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

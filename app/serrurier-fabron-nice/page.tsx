import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-fabron-nice/" },
  title: "Serrurier Fabron Nice – Villas de caractère | VAF",
  description:
    "Serrurier à Fabron, Nice : sécurisation de villas héritées du patrimoine XIXe, dépannage sur résidences. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure bloquée, porte qui ferme mal à Fabron : j'interviens 24h/24 sur ce quartier résidentiel des hauteurs ouest, où une part importante du bâti est constituée de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose généralement un cylindre Fichet ou Heraclès adapté, avec le même soin pour une villa de caractère que pour une résidence plus récente à serrure multipoints standard.",
  "Le nom de Fabron viendrait de « fabrones » (forgerons). Au XIXe siècle, le bas Fabron devient le quartier privilégié des grandes familles niçoises fortunées, qui y firent construire villas et folies. L'une d'elles, celle du duc Ernest II de Saxe-Cobourg-Gotha, fut rasée en 1978 pour ouvrir le parc Carol-de-Roumanie au public. Ce patrimoine explique la densité de villas de caractère du quartier, entre le centre-ville et l'aéroport.",
];

const blocks = [
  {
    heading: "Autour du parc Carol-de-Roumanie",
    paragraphs: [
      "Les villas construites dans le sillage des grandes propriétés du XIXe siècle, autour de l'actuel parc Carol-de-Roumanie, conservent souvent un cachet architectural remarquable. Je privilégie une approche respectueuse de ce patrimoine pour toute intervention sur une porte ou une serrure d'origine.",
    ],
  },
  {
    heading: "Maisons individuelles et portails",
    paragraphs: [
      "À Fabron, une part importante du bâti est constituée de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, qu'il s'agisse d'une réparation, d'un remplacement de cylindre ou d'un renforcement complet de la porte.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      "Le secteur compte aussi des résidences plus récentes, avec des serrures multipoints standard. J'interviens sur les portes d'appartement comme sur les parties communes, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Un secteur plus étendu, un déplacement organisé",
    paragraphs: [
      "Fabron étant plus excentré que le centre-ville, je m'organise pour vous donner un délai d'intervention réaliste dès l'appel, plutôt qu'une estimation optimiste qui ne tiendrait pas compte de la distance réelle.",
    ],
  },
  {
    heading: "Villas et immeubles mixtes sur la colline de Fabron",
    paragraphs: [
      "Fabron, colline résidentielle à l'ouest de Nice, mêle villas individuelles et immeubles collectifs plus récents. Cette diversité de bâti demande une approche au cas par cas : cylindre à adapter sur une porte ancienne de villa, ou remplacement standard sur un immeuble récent. Je diagnostique toujours avant de proposer une solution.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Fabron en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Fabron comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les portes de villas individuelles à Fabron ?",
    answer:
      "Oui, c'est une configuration fréquente dans le quartier. Je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement.",
  },
  {
    question: "Travaillez-vous aussi avec les syndics de résidence à Fabron ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous près du parc Carol-de-Roumanie ?",
    answer:
      "Oui, tout ce secteur résidentiel autour de l'ancien domaine du château de Fabron fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Fabron par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Fabron ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierFabronNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Fabron"
      crimeIntro="Fabron, colline résidentielle à l'ouest de Nice, reste concernée par cette tendance malgré la diversité de son bâti."
      crimeClosing="Entre villas et immeubles plus récents, ce secteur bénéficie d'un diagnostic au cas par cas plutôt que d'une solution unique."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-fabron-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-desambrois-nice/" },
  title: "Serrurier Desambrois Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Desambrois, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Desambrois est un quartier central de Nice, aux abords de la colline du Château, où se côtoient des immeubles anciens typiques du centre-ville et des constructions plus récentes. C'est un secteur que je connais bien, à proximité immédiate de mon point de départ au 2 Rue Antoine Gautier.",
  "La proximité avec le Vieux-Nice et le centre-ville signifie aussi des bâtiments avec des portes et serrures d'époques très variées, du modèle ancien à remettre en état au cylindre moderne installé récemment.",
];

const blocks = [
  {
    heading: "Un quartier central, un bâti hétérogène",
    paragraphs: [
      "À Desambrois, je croise autant des immeubles de la fin du XIXe ou du début du XXe siècle, avec des portes en bois massif et des serrures encastrées d'origine, que des résidences plus récentes équipées de serrures multipoints standard. Le diagnostic est donc systématique : je ne propose jamais la même solution sans avoir vérifié l'état réel de votre porte et de son mécanisme.",
    ],
  },
  {
    heading: "Serrures anciennes : réparer avant de remplacer",
    paragraphs: [
      "Sur les bâtiments plus anciens du quartier, une serrure qui grippe ou une clé qui force ne signifie pas toujours qu'il faut tout changer. Quand c'est possible, je privilégie la réparation ou le remplacement du seul cylindre, en cohérence avec l'esprit de la porte d'origine, plutôt qu'un remplacement complet plus coûteux.",
    ],
  },
  {
    heading: "Proximité et rapidité d'intervention",
    paragraphs: [
      "Étant situé à proximité immédiate de Desambrois, c'est l'un des secteurs où je peux généralement intervenir le plus rapidement, ce qui compte particulièrement en cas de porte claquée ou d'urgence après une tentative d'effraction.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Desambrois en cas d'urgence ?",
    answer:
      "Oui, Desambrois est très proche de mon point de départ : le délai d'intervention y est généralement parmi les plus courts sur Nice, de l'ordre de 10 à 15 minutes.",
  },
  {
    question: "Travaillez-vous sur les serrures anciennes des immeubles de Desambrois ?",
    answer:
      "Oui, c'est une situation fréquente dans ce quartier. Je privilégie la réparation ou le remplacement de cylindre quand c'est possible, plutôt qu'un changement complet systématique.",
  },
  {
    question: "Les tarifs sont-ils différents à Desambrois par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous aussi sur des portes blindées à Desambrois ?",
    answer:
      "Oui, aussi bien pour l'ouverture d'une porte blindée verrouillée que pour l'installation ou le blindage d'une porte existante.",
  },
  {
    question: "Donnez-vous un devis avant d'intervenir à Desambrois ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierDesambroisNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Desambrois"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 15 minutes selon la circulation"
      faq={faq}
      path="/serrurier-desambrois-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

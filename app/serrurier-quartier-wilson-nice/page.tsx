import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-wilson-nice/" },
  title: "Serrurier Quartier Wilson Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier Wilson, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "La place Wilson, qui donne son nom au quartier, doit son nom actuel à un hommage rendu après la Première Guerre mondiale au président américain Thomas Woodrow Wilson. Avant cela, ce secteur abritait dès le Moyen Âge la Bourgade, un faubourg animé accessible par un unique pont de pierre franchissant le Paillon, puis un couvent d'Augustins sous l'Ancien Régime. L'église actuelle, achevée en 1850, a marqué le vrai point de départ de l'urbanisation du quartier.",
  "Aujourd'hui, la place Wilson est dominée par l'ancien Hôtel des Postes de 1888, de style néoclassique, et le quartier mêle immeubles bourgeois Belle Époque, façades restaurées et commerces de caractère. C'est l'un des secteurs les plus recherchés du centre de Nice, à la fois chic et convivial, à quelques minutes à pied de mon point de départ au 2 Rue Antoine Gautier.",
];

const blocks = [
  {
    heading: "Un patrimoine architectural à préserver",
    paragraphs: [
      "Les immeubles bourgeois qui entourent la place Wilson datent pour beaucoup de la fin du XIXe et du début du XXe siècle, avec des portes d'entrée et des serrures d'époque qui méritent d'être traitées avec soin. Je privilégie autant que possible la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard qui abîmerait l'esthétique d'une porte ancienne.",
    ],
  },
  {
    heading: "Un secteur résidentiel dense et actif",
    paragraphs: [
      "Entre les immeubles d'habitation, les galeries et les commerces de quartier, la place Wilson connaît un passage important toute la journée. Les cylindres de porte d'entrée s'usent plus vite que la moyenne, et je diagnostique systématiquement l'état réel de la serrure avant de proposer une réparation ou un remplacement complet.",
    ],
  },
  {
    heading: "Sécurisation des logements et commerces",
    paragraphs: [
      "Après une perte de clés, une usure constatée ou pour anticiper une mise aux normes, je propose des solutions adaptées aussi bien pour les appartements que pour les locaux commerciaux du secteur : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles bourgeois du quartier, souvent organisés en copropriété avec des halls d'entrée soignés, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté, avec la même attention portée à la cohérence esthétique du bâti ancien.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement place Wilson en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur les serrures anciennes des immeubles bourgeois de la place Wilson ?",
    answer:
      "Oui, c'est une configuration fréquente dans ce secteur. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet qui dénaturerait la porte.",
  },
  {
    question: "Intervenez-vous aussi sur les commerces du quartier Wilson ?",
    answer:
      "Oui, en plus des logements, j'interviens sur les rideaux métalliques, serrures de vitrine et portes de locaux commerciaux du secteur.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier Wilson ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Wilson par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous en soirée place Wilson, secteur animé de commerces et restaurants ?",
    answer:
      "Oui, je reste disponible en soirée et la nuit, avec une majoration appliquée après 19h et le week-end, annoncée avant l'intervention.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierWilsonNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier Wilson"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-wilson-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

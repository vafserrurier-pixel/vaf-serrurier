import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-bon-voyage-nice/" },
  title: "Serrurier Bon Voyage Nice – Changement entre locataires | VAF",
  description:
    "Serrurier au quartier Bon Voyage, Nice : changement de serrure entre deux locataires, dépannage sur immeubles collectifs. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier à Bon Voyage : j'interviens 24h/24 dans ce quartier résidentiel sur les hauteurs proches du port, où le turnover locatif plus élevé que la moyenne génère des demandes fréquentes de changement de serrure entre deux locataires. Je pose généralement un cylindre Vak ou Picard neuf après un état des lieux, avec la même transparence sur le tarif que la demande vienne d'un propriétaire ou d'un locataire.",
  "Développé pour l'essentiel au XXe siècle autour de sa cité de transition, Bon Voyage mêle aujourd'hui immeubles collectifs et quelques villas, avec environ 3 900 habitants au profil plutôt jeune (34 ans en moyenne) et majoritairement locataire. Ce profil démographique explique la fréquence des demandes liées aux changements de locataires, une configuration que je connais bien.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel sur les hauteurs de l'est",
    paragraphs: [
      "Le secteur de Bon Voyage comprend des immeubles collectifs et quelques villas individuelles. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ou d'une porte de maison.",
    ],
  },
  {
    heading: "Un quartier au profil locatif marqué",
    paragraphs: [
      "Avec une majorité de résidents locataires, les serrures et cylindres du quartier changent plus souvent de main : état des lieux, remise de clés, changement de serrure entre deux locataires. C'est une configuration que je connais bien, avec la même transparence sur le tarif.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou un simple constat d'usure, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Résidences collectives du quartier Bon Voyage",
    paragraphs: [
      "Bon Voyage, secteur résidentiel à l'est de Nice proche du port, compte plusieurs résidences collectives construites entre les années 1960 et 1980. J'y interviens couramment sur les portes de hall, les cylindres de porte palière et les boîtes aux lettres collectives, à la demande de résidents ou de syndics de copropriété.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Bon Voyage en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Bon Voyage comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous pour un changement de serrure entre deux locataires ?",
    answer:
      "Oui, c'est une demande fréquente à Bon Voyage où le turnover locatif est plus élevé que la moyenne. Je peux intervenir rapidement entre un état des lieux de sortie et d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Bon Voyage par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Bon Voyage ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierBonVoyageNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Bon Voyage"
      crimeIntro="Bon Voyage, secteur résidentiel proche du port, suit la même évolution que le reste de l'est niçois."
      crimeClosing="Sur les résidences collectives de ce secteur, la sécurisation des halls d'entrée reste un point de vigilance partagé."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-bon-voyage-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

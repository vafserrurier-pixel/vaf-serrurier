import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-rimiez-nice/" },
  title: "Serrurier Rimiez Nice – Serrures anciennes | VAF",
  description:
    "Serrurier à Rimiez, Nice : réparation de serrures anciennes, dépannage sur villas et résidences. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure bloquée, porte qui ferme mal à Rimiez : j'interviens 24h/24 sur ce quartier résidentiel calme, où l'âge moyen plus élevé que la moyenne niçoise (47 ans) va souvent de pair avec des serrures installées depuis longtemps. Je privilégie systématiquement la réparation quand elle est possible, avec un cylindre Heraclès ou Fichet compatible, plutôt qu'un remplacement complet.",
  "Rimiez s'est développé au XIXe siècle comme quartier résidentiel sur les hauteurs de Nice, dans la continuité de Cimiez tout proche, à l'époque où l'aristocratie européenne recherchait ces collines pour leur climat. Le quartier compte aujourd'hui plus de 6 300 habitants sur 2,1 km², avec un bâti qui mêle villas, petites résidences et quelques ensembles collectifs le long de l'avenue de Rimiez, dans un cadre verdoyant et calme.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel calme",
    paragraphs: [
      "Rimiez conserve un caractère plus vert et résidentiel que le centre-ville, avec des maisons individuelles et des petites copropriétés. Le diagnostic reste systématique pour identifier la meilleure solution selon votre porte.",
    ],
  },
  {
    heading: "Un quartier de résidents installés depuis longtemps",
    paragraphs: [
      "Avec un âge moyen plus élevé que la moyenne niçoise, Rimiez compte de nombreux propriétaires installés depuis longtemps, avec des serrures parfois anciennes. Je privilégie systématiquement la réparation quand elle est possible plutôt qu'un remplacement complet.",
    ],
  },
  {
    heading: "Villas et accès individuels",
    paragraphs: [
      "Pour les villas du secteur, j'interviens sur la porte d'entrée principale, avec des solutions allant de la simple réparation au renforcement complet selon l'état constaté.",
    ],
  },
  {
    heading: "Interventions en résidence",
    paragraphs: [
      "Pour les résidences collectives du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Villas et verdure sur les hauteurs de Rimiez",
    paragraphs: [
      "Rimiez, sur les hauteurs proches de Cimiez et de son monastère, conserve un cadre résidentiel arboré fait de villas et de petites résidences. Le secteur partage certains traits avec Cimiez voisin : un bâti parfois ancien, où je privilégie l'adaptation d'un cylindre compatible plutôt qu'un remplacement complet quand la porte le permet.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Rimiez en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Rimiez comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas individuelles du quartier ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte.",
  },
  {
    question: "Travaillez-vous avec les résidences collectives de Rimiez ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous sur des serrures anciennes chez des propriétaires installés depuis longtemps ?",
    answer:
      "Oui, c'est fréquent à Rimiez. Je privilégie systématiquement la réparation quand elle est possible plutôt qu'un remplacement complet.",
  },
  {
    question: "Les tarifs sont-ils différents à Rimiez par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Rimiez ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierRimiezNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Rimiez"
      crimeIntro="Rimiez, sur les hauteurs proches de Cimiez, reste concerné par cette réalité malgré son cadre résidentiel arboré."
      crimeClosing="Sur le bâti parfois ancien de ce secteur, l'adaptation d'un cylindre compatible reste souvent la meilleure option."
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-rimiez-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

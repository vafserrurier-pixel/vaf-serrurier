import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-garibaldi-nice/" },
  title: "Serrurier Garibaldi Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier Garibaldi, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier Garibaldi s'organise autour de sa célèbre place ocre, à la frontière du Vieux-Nice et du port. Le bâti y est ancien et homogène, avec des immeubles du XVIIIe et XIXe siècle typiques du centre historique niçois.",
  "J'y interviens avec la même attention que dans le Vieux-Nice tout proche : diagnostic soigné, respect du bâti ancien, et devis annoncé avant intervention.",
];

const blocks = [
  {
    heading: "Un bâti ancien et homogène",
    paragraphs: [
      "Autour de la place Garibaldi, les immeubles anciens ont souvent des portes et des serrures d'époque. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait ces portes historiques.",
    ],
  },
  {
    heading: "Un secteur entre Vieux-Nice et port",
    paragraphs: [
      "La position de Garibaldi, entre le Vieux-Nice et le port, en fait un quartier de passage où les besoins de sécurisation restent classiques : porte claquée, cylindre grippé, clé cassée.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Garibaldi en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Garibaldi comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Savez-vous intervenir sur les portes anciennes autour de la place Garibaldi ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'époque.",
  },
  {
    question: "Les tarifs sont-ils différents à Garibaldi par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Garibaldi ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierGaribaldiNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Garibaldi"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-garibaldi-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

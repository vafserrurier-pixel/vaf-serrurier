import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-musiciens-nice/" },
  title: "Serrurier Quartier des Musiciens Nice – 24h/24 | VAF",
  description:
    "Serrurier au quartier des Musiciens, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le quartier des Musiciens s'étend de la rue Paganini à l'est jusqu'à l'avenue Gambetta à l'ouest, entre le boulevard Victor Hugo au sud et l'avenue Thiers au nord, où se trouve la gare centrale de Nice. Il doit son nom aux rues qui le traversent, toutes baptisées en hommage à de grands compositeurs : place Mozart, rue Verdi, rue Berlioz, rue Rossini, rue Offenbach, rue Gounod, ou encore rue Beethoven et rue Saint-Saëns.",
  "Le quartier s'est développé à la fin du XIXe siècle, après l'arrivée du chemin de fer, quand la haute société recherchait des immeubles élégants à proximité de la gare et du centre-ville. On y trouve encore aujourd'hui une architecture riche et variée, mêlant Belle Époque, Art nouveau et Art déco — Simone Veil elle-même évoquait dans ses mémoires le bel immeuble bourgeois du quartier des Musiciens que ses parents avaient dû quitter à la fin des années 1920.",
];

const blocks = [
  {
    heading: "Un patrimoine Belle Époque et Art déco",
    paragraphs: [
      "Les immeubles bourgeois des rues Verdi, Rossini ou Gounod ont souvent conservé des portes et des serrures d'origine ou installées il y a plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard qui dénaturerait ces façades soignées, sauf quand le mécanisme est trop endommagé pour être restauré.",
    ],
  },
  {
    heading: "Un secteur central, proche de la gare",
    paragraphs: [
      "La proximité de la gare de Nice-Ville et du centre-ville donne à ce quartier un profil résidentiel dense, avec un usage intensif des serrures de hall et des portes d'entrée. Je diagnostique systématiquement l'origine réelle d'une panne avant de proposer une réparation ou un remplacement.",
    ],
  },
  {
    heading: "Remplacement et sécurisation",
    paragraphs: [
      "Qu'il s'agisse d'un cylindre grippé, d'une clé cassée ou d'une volonté de renforcer votre porte d'entrée, j'adapte la solution à l'état réel de votre serrure plutôt que de proposer systématiquement un remplacement complet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles bourgeois du secteur, souvent organisés en copropriété, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté, avec une attention particulière portée à la cohérence esthétique du bâti ancien.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier des Musiciens en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur les serrures anciennes des immeubles Belle Époque du quartier ?",
    answer:
      "Oui, c'est fréquent dans ce secteur. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
  },
  {
    question: "Intervenez-vous près de la gare de Nice-Ville ?",
    answer:
      "Oui, le quartier des Musiciens jouxte la gare centrale et fait partie de mon secteur d'intervention habituel dans le centre de Nice.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents dans ce quartier par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Que faire si ma clé casse dans une serrure ancienne du quartier des Musiciens ?",
    answer:
      "J'extrais le morceau resté dans le cylindre et je vérifie s'il est compatible avec un remplacement simple, avant d'envisager un changement complet si le modèle est trop ancien.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierDesMusiciensNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier des Musiciens"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-des-musiciens-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

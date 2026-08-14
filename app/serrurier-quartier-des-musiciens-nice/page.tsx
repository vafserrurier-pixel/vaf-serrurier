import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-des-musiciens-nice/" },
  title: "Serrurier Quartier des Musiciens Nice – Près de la gare | VAF",
  description:
    "Serrurier au quartier des Musiciens, Nice, près de la gare de Nice-Ville : dépannage, changement de serrure sur immeubles Belle Époque. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier au quartier des Musiciens : je diagnostique par téléphone et j'interviens 24h/24 dans ce secteur dense proche de la gare de Nice-Ville, où le passage quotidien use les cylindres de hall plus vite que la moyenne. Sur les portes d'immeubles bourgeois des rues Verdi, Rossini ou Gounod, je pose le plus souvent un cylindre Fichet ou Picard compatible avec le mécanisme d'origine, plutôt que de remplacer toute la serrure sur une porte de caractère.",
  "Le quartier tient son nom de ses rues, toutes baptisées en hommage à des compositeurs — Mozart, Verdi, Berlioz, Rossini, Gounod, Beethoven. Il s'est développé à la fin du XIXe siècle après l'arrivée du chemin de fer, quand la haute société recherchait des immeubles élégants près de la gare. Simone Veil elle-même évoquait dans ses mémoires l'immeuble bourgeois du quartier que ses parents avaient dû quitter à la fin des années 1920. Ce patrimoine explique la densité de portes et de serrures anciennes du secteur.",
];

const blocks = [
  {
    heading: "Dépannage rapide près de la gare de Nice-Ville",
    paragraphs: [
      "La proximité de la gare de Nice-Ville et du centre-ville donne à ce quartier un profil résidentiel dense, avec un usage intensif des serrures de hall et des portes d'entrée. Je diagnostique systématiquement l'origine réelle d'une panne avant de proposer une réparation ou un remplacement.",
    ],
  },
  {
    heading: "Réparation des serrures Belle Époque et Art déco",
    paragraphs: [
      "Les immeubles bourgeois des rues Verdi, Rossini ou Gounod ont souvent conservé des portes et des serrures d'origine ou installées il y a plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard qui dénaturerait ces façades soignées, sauf quand le mécanisme est trop endommagé pour être restauré.",
    ],
  },
  {
    heading: "Remplacement de cylindre et clé cassée",
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
  {
    heading: "Cylindres à adapter sur le bâti ancien du quartier des Musiciens",
    paragraphs: [
      "Proche de la gare, le quartier des Musiciens doit son nom aux rues portant des noms de compositeurs. Les immeubles de la fin du XIXe siècle qui le composent ont souvent gardé leurs portes et cylindres d'origine. Je privilégie l'adaptation d'un cylindre compatible plutôt qu'un remplacement complet, pour préserver l'aspect de ces façades anciennes.",
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
      crimeIntro="Le quartier des Musiciens, proche de la gare, compte de nombreux immeubles anciens dont les serrures d'origine méritent une attention particulière."
      crimeClosing="Un cylindre récent adapté à une porte ancienne suffit souvent à combler l'écart de sécurité, sans tout remplacer."
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

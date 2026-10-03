import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-quartier-des-musiciens-nice/",
  title: "Serrurier Quartier des Musiciens – Urgence 24h/24 | VAF",
  description: "Serrurier au quartier des Musiciens, Nice, près de la gare de Nice-Ville : dépannage, changement de serrure sur immeubles Belle Époque. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrurier au quartier des Musiciens : je diagnostique par téléphone et j'interviens 24h/24 dans ce secteur dense proche de la gare de Nice-Ville, où le passage quotidien use les cylindres de hall plus vite que la moyenne. Sur les portes d'immeubles bourgeois des rues Verdi, Rossini ou Gounod, je pose le plus souvent un cylindre Fichet ou Picard compatible avec le mécanisme d'origine, plutôt que de remplacer toute la serrure sur une porte de caractère.",
  "Le quartier tient son nom de ses rues, toutes baptisées en hommage à des compositeurs : Mozart, Verdi, Berlioz, Rossini, Gounod, Beethoven, Paganini. Il s'est développé à la fin du XIXe siècle après l'arrivée du chemin de fer, quand la haute société recherchait des immeubles élégants près de la gare. Simone Veil elle-même évoquait dans ses mémoires l'immeuble bourgeois du quartier que ses parents avaient dû quitter à la fin des années 1920. Ce patrimoine explique la densité de portes et de serrures anciennes du secteur, entre le boulevard Victor-Hugo et l'avenue Thiers.",
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
      "Simone Veil elle-même situait précisément ce souvenir au 50 avenue Clémenceau, dans un bel immeuble bourgeois que ses parents durent quitter à la suite de la crise économique de la fin des années 1920 : un exemple concret du type de porte ancienne, aujourd'hui centenaire, que je suis régulièrement amené à diagnostiquer dans ce quartier.",
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
      <>
            Pour les immeubles bourgeois du secteur, souvent organisés en copropriété, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté, avec une attention particulière portée à la cohérence esthétique du bâti ancien.
          </>,
    ],
  },
  {
    heading: "Cylindres à adapter sur le bâti ancien du quartier des Musiciens",
    paragraphs: [
      "Proche de la gare, le quartier des Musiciens doit son nom aux rues portant des noms de compositeurs. Les immeubles de la fin du XIXe siècle qui le composent ont souvent gardé leurs portes et cylindres d'origine. Je privilégie l'adaptation d'un cylindre compatible plutôt qu'un remplacement complet, pour préserver l'aspect de ces façades anciennes.",
    ],
  },
  {
    heading: "Une clé usée donne des doubles qui fonctionnent mal",
    paragraphs: [
      "Quand une clé a servi pendant des décennies, ses reliefs s'usent. Un double fait à partir d'une clé usée reproduit cette usure, et une copie de copie finit par mal fonctionner : elle accroche, elle force, et elle use à son tour le cylindre. Dans des immeubles de la fin du XIXe siècle, où des clés ont parfois traversé plusieurs générations d'occupants, mieux vaut partir de la clé d'origine si elle existe, ou d'une clé en bon état, avant d'en faire une nouvelle. Et si c'est le cylindre qui est usé, le remplacer coûte moins cher que de multiplier des doubles qui forcent. Je regarde votre clé et votre cylindre ensemble, car l'un abîme l'autre.",
    ],
  },
  {
    heading: "Plus de quatre logements sur cinq datent d'avant 1971",
    paragraphs: [
      "D'après l'INSEE, 53 % des résidences principales du secteur « Musiciens » ont été construites avant 1946 et 82 % avant 1971, contre 54 % pour l'ensemble de Nice. Seules 2 % datent d'après 1991. Les portes, les gâches et les cylindres de ces immeubles ont donc le plus souvent plusieurs décennies de service, et les pannes rencontrées sont d'abord des pannes d'usure : clé qui force, pêne qui accroche, cylindre qui tourne mal. Mieux vaut y répondre avant le blocage complet : c'est à ce moment que le remplacement d'un cylindre coûte le moins cher et se planifie à l'heure qui vous arrange. Source : INSEE, recensement de la population 2021, secteur « Musiciens ».",
    ],
  },
];

const faq = [
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
    question: "Que faire si ma clé casse dans une serrure ancienne du quartier des Musiciens ?",
    answer:
      "J'extrais le morceau resté dans le cylindre et je vérifie s'il est compatible avec un remplacement simple, avant d'envisager un changement complet si le modèle est trop ancien.",
  },
];

export default function SerrurierQuartierDesMusiciensNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier des Musiciens"
      crimeIntro="Le quartier des Musiciens, proche de la gare, compte de nombreux immeubles anciens dont les serrures d'origine méritent une attention particulière."
      crimeClosing="Un cylindre récent adapté à une porte ancienne suffit souvent à combler l'écart de sécurité, sans tout remplacer."
      brandsIntro="Sur ces immeubles bourgeois centenaires, je privilégie des marques capables de fournir un cylindre compatible sans dénaturer la porte d'origine."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-des-musiciens-nice/"
    />
  );
}

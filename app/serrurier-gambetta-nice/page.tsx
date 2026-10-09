import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-gambetta-nice/",
  title: "Serrurier Gambetta Nice – Dépannage rapide",
  description: "Serrurier au quartier Gambetta, Nice : changement de serrure et dépannage sur immeubles du XXe siècle, sécurisation après cambriolage. Devis annoncé, 24h/24.",
});

const intro = [
  "Porte claquée, cylindre grippé à Gambetta : j'interviens 24h/24 dans ce quartier résidentiel calme, pour une porte claquée, un cylindre grippé, ou pour renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin. Le bâti de standing modeste à moyen, construit pour l'essentiel dans l'après-guerre, a souvent des serrures qui datent de plusieurs décennies : je pose généralement un cylindre Fichet ou Cisa compatible plutôt qu'un remplacement complet quand c'est possible.",
  "Le boulevard Gambetta rend hommage à Léon Gambetta, figure de la Troisième République. En 1950, il n'y avait pratiquement rien à l'ouest de ce boulevard. Le quartier s'est urbanisé après-guerre sur les terrains de l'ancien Piol, marqué aussi par la forte présence italienne de Nice au XXe siècle. L'immeuble Art déco Le Palladium, avec son atrium décoré et sa statue d'Athéna à l'angle de l'avenue Tzarévitch, en est le témoin architectural le plus marquant. Le quartier s'étend jusqu'à la voie ferrée au nord, à deux pas de la Promenade des Anglais.",
];

const blocks = [
  {
    heading: "Réparation de serrures sur les immeubles du XXe siècle",
    paragraphs: [
      "Le bâti de Gambetta comprend beaucoup d'immeubles de standing modeste à moyen, avec des serrures qui ont parfois plusieurs décennies. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
    ],
  },
  {
    heading: "Dépannage et sécurisation après effraction",
    paragraphs: [
      "Contrairement à des quartiers plus commerçants, Gambetta reste majoritairement résidentiel, ce qui n'empêche pas les mêmes besoins : porte claquée, cylindre grippé, ou volonté de renforcer une porte d'entrée après un cambriolage dans l'immeuble voisin.",
    ],
  },
  {
    heading: "Serrures d'époque sur l'immeuble Le Palladium et ses voisins",
    paragraphs: [
      "Les immeubles Art déco du secteur, comme Le Palladium à l'angle de l'avenue Tzarévitch, méritent une attention particulière : je privilégie systématiquement une solution qui respecte l'esthétique de ces façades remarquables.",
      "L'avenue Tzarévitch tient son nom du jeune héritier russe Nicolas Alexandrovitch, mort à Nice en 1865, en mémoire duquel la famille impériale fit bâtir une chapelle commémorative en 1867 sur le boulevard resté ensuite une voie privée jusqu'en 1882. Un repère historique discret au milieu d'un bâti bien plus récent, issu de l'urbanisation de l'après-guerre.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les immeubles du quartier, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Dépannage sur les immeubles collectifs du quartier Gambetta",
    paragraphs: [
      "Le quartier Gambetta, résidentiel et dense entre le centre et la Promenade des Anglais, compte majoritairement des immeubles collectifs. Les pannes les plus courantes concernent les cylindres de porte palière et les gâches de hall. Je diagnostique l'origine du blocage avant d'intervenir, pour ne réparer que ce qui doit l'être.",
    ],
  },
  {
    heading: "Clé laissée dans la serrure côté intérieur : pourquoi la porte ne s'ouvre plus de l'extérieur",
    paragraphs: [
      <>{"Cela arrive facilement : vous rentrez, vous laissez la clé dans la serrure, et quelqu'un d'autre arrive avec la sienne sans pouvoir ouvrir. Sur beaucoup de cylindres, une clé engagée à l'intérieur bloque le mécanisme côté extérieur. Il existe pourtant des cylindres dits débrayables, qui permettent d'ouvrir de l'extérieur même si une clé est restée dans la serrure. C'est utile dans un appartement où plusieurs personnes rentrent à des heures différentes. Avant de remplacer un cylindre, je vous demande donc comment votre porte est utilisée au quotidien, pour vous proposer le bon modèle. Si vous êtes déjà dehors, la page "}<Link href="/ouverture-de-porte-nice/" className="text-steel underline">ouverture de porte</Link>{" détaille ce que je fais dans ce cas."}</>,
    ],
  },
];

const faq = [
  {
    question: "Travaillez-vous sur des serrures anciennes typiques du quartier ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet de la serrure.",
  },
  {
    question: "Intervenez-vous sur les immeubles Art déco du boulevard Gambetta ?",
    answer:
      "Oui, je privilégie une solution qui respecte l'esthétique de ces façades remarquables plutôt qu'un remplacement standard.",
  },
];

export default function SerrurierGambettaNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Gambetta"
      crimeIntro="Le quartier Gambetta, dense et résidentiel, suit la même tendance que le reste du centre-ville."
      crimeClosing="Sur les immeubles collectifs de ce type, la vigilance porte autant sur les portes de hall que sur celles des appartements."
      brandsIntro="Sur le bâti de l'après-guerre qui compose l'essentiel de Gambetta, je choisis la marque selon l'état réel du cylindre plutôt que selon l'ancienneté supposée de l'immeuble."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-gambetta-nice/"
    />
  );
}

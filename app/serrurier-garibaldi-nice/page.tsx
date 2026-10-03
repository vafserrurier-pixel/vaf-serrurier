import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-garibaldi-nice/",
  title: "Serrurier Garibaldi Nice – Ouverture de porte rapide | VAF",
  description: "Serrurier place Garibaldi, Nice : ouverture de porte, dépannage sur immeubles anciens entre Vieux-Nice et le port. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrurier place Garibaldi : j'interviens 24h/24 pour une porte claquée, un cylindre grippé ou une clé cassée, dans ce quartier de passage entre le Vieux-Nice et le port. Les immeubles anciens autour de la place ont souvent des portes et des serrures d'époque, sur lesquelles je pose généralement un cylindre Picard ou Cisa compatible plutôt qu'un remplacement qui dénaturerait ces façades historiques.",
  "La place Garibaldi, l'une des plus anciennes de Nice, a été construite entre 1782 et 1784 sous le nom de Piazza Vittorio, à l'époque du royaume de Sardaigne. Elle prend son nom actuel en 1870, en hommage à Giuseppe Garibaldi, dont la statue trône sur la place depuis 1891, à deux pas du Palais Avigdor. Rendue aux piétons dans les années 2000 avec l'arrivée du tramway, elle est aujourd'hui animée par de nombreux musées, théâtres et terrasses de restaurant. Cela explique le passage important sur les commerces et halls d'immeuble alentour.",
];

const blocks = [
  {
    heading: "Réparation de serrures sur les immeubles anciens",
    paragraphs: [
      "Autour de la place Garibaldi, les immeubles anciens ont souvent des portes et des serrures d'époque. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait ces portes historiques.",
      "La place elle-même fut dessinée en 1773 par l'architecte Antonio Spinelli, avec ses arcades doriques sur pilastres inspirées des grandes places royales baroques italiennes. Le Palais Avigdor, au numéro 10, illustre bien ce style avec sa façade ornée d'un blason du XVIIIe siècle : ce type de porte cochère ancienne demande une approche différente d'une porte d'appartement standard.",
    ],
  },
  {
    heading: "Dépannage rapide entre Vieux-Nice et port",
    paragraphs: [
      "La position de Garibaldi, entre le Vieux-Nice et le port, en fait un quartier de passage où les besoins de sécurisation restent classiques : porte claquée, cylindre grippé, clé cassée.",
    ],
  },
  {
    heading: "Serrurerie de commerce entre musées et restaurants",
    paragraphs: [
      "Avec ses nombreux musées, théâtres et terrasses de restaurant, la place Garibaldi attire un passage important qui use aussi les serrures des commerces et des halls d'immeuble alentour. J'y interviens régulièrement pour ce type de sollicitation.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les immeubles du secteur, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Bâti ancien autour de la place Garibaldi",
    paragraphs: [
      "La place Garibaldi et ses immeubles ocre du XVIIIe siècle marquent la porte d'entrée entre la Vieille-Ville et les quartiers de Riquier et Cimiez. Ce bâti ancien, souvent classé ou protégé, demande une attention particulière : je privilégie systématiquement la réparation ou l'adaptation d'un cylindre existant avant d'envisager un remplacement qui changerait l'aspect d'une porte d'époque.",
    ],
  },
  {
    heading: "Appel le soir ou le week-end : ce qui est majoré et ce qui ne l'est pas",
    paragraphs: [
      <>{"Autour d'une place animée, les appels tardifs ne sont pas rares : porte claquée au retour d'un restaurant, clé perdue le dimanche. Je suis disponible à toute heure, avec un tarif de nuit le soir, le week-end et les jours fériés (189 € pour une porte claquée, 209 € pour une porte verrouillée). Ce qu'il faut savoir : il ne s'applique jamais au prix d'une pièce. Un cylindre coûte exactement le même prix un dimanche à minuit qu'un mardi après-midi. Et vous connaissez le total avant que je me déplace, sans mauvaise surprise sur place. Si la situation peut attendre le lendemain, je vous le dis honnêtement au téléphone : parfois, sécuriser la porte pour la nuit suffit, et le remplacement peut se planifier en journée. Le détail figure sur la page des "}<Link href="/tarifs-serrurier-nice/" className="text-steel underline">tarifs</Link>{"."}</>,
    ],
  },
  {
    heading: "Moitié locataires, moitié propriétaires : qui décide de la serrure ?",
    paragraphs: [
      <>{"Dans le secteur « Garibaldi », 50 % des résidences principales sont occupées par des locataires et 47 % par leurs propriétaires. Les deux situations cohabitent souvent dans le même immeuble, et la question revient à chaque panne : qui décide, qui paie ? En règle générale, le remplacement d'une serrure usée relève du propriétaire, tandis que la perte ou la casse des clés est à la charge de l'occupant, sous réserve de ce que prévoit le bail. Mieux vaut en parler avant l'intervention. Je remets un devis détaillé, qui permet à chacun de s'y retrouver. Le sujet est traité dans l'article "}<Link href="/blog/qui-paie-changement-serrure-location-nice/" className="text-steel underline">qui paie le changement de serrure en location</Link>{". Source : INSEE, recensement de la population 2021, secteur « Garibaldi »."}</>,
    ],
  },
];

const faq = [
  {
    question: "Savez-vous intervenir sur les portes anciennes autour de la place Garibaldi ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'époque.",
  },
  {
    question: "Intervenez-vous aussi entre Garibaldi et le quartier du port ?",
    answer:
      "Oui, tout ce secteur de transition entre la place Garibaldi et le port fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Intervenez-vous en soirée près des restaurants de la place Garibaldi ?",
    answer:
      "Oui, je reste disponible en soirée et la nuit, avec une majoration appliquée après 19h et le week-end, annoncée avant l'intervention.",
  },
];

export default function SerrurierGaribaldiNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Garibaldi"
      crimeIntro="Autour de la place Garibaldi, le bâti ancien et parfois classé n'est pas à l'abri de cette évolution."
      crimeClosing="Une porte d'époque bien équipée reste tout aussi efficace qu'une porte récente, à condition d'un cylindre fiable."
      brandsIntro="Sur les immeubles ocre du XVIIIe siècle qui bordent la place, je privilégie des marques capables de fournir un cylindre discret, fidèle à l'esprit de ces façades classées."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-garibaldi-nice/"
    />
  );
}

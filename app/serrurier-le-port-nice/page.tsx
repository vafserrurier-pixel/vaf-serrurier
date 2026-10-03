import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-le-port-nice/",
  title: "Serrurier Le Port Nice – Ouvert tard le soir | VAF",
  description: "Serrurier au quartier du Port, Nice : dépannage tardif, sécurisation après effraction dans ce secteur animé jour et nuit. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrurier au quartier du Port : j'interviens 24h/24, y compris tard le soir dans ce secteur animé par ses bars et restaurants, pour un dépannage tardif ou une sécurisation après effraction. Sur les immeubles du XIXe siècle qui bordent le port Lympia, je pose le plus souvent un cylindre Picard ou Fichet compatible avec le mécanisme d'origine, plutôt qu'un remplacement standard qui dénaturerait ces façades anciennes.",
  "Le port Lympia tire son origine du XVIIIe siècle, quand le roi de Sardaigne Charles-Emmanuel III décide en 1749 d'y construire un grand port maritime. Les autorités font alors appel à des forçats pour creuser les bassins, ce qui donne naissance à un bâtiment-prison devenu ensuite annexe du bagne de Villefranche-sur-Mer. Aujourd'hui, les anciens entrepôts transformés en restaurants et galeries d'art côtoient des immeubles résidentiels du XIXe siècle, autour de la place Île-de-Beauté et de l'église Notre-Dame-du-Port (1853), à quelques pas de la place Garibaldi, dans un quartier à la fois historique et vivant jusque tard dans la nuit.",
];

const blocks = [
  {
    heading: "Autour du port Lympia et de ses anciens entrepôts",
    paragraphs: [
      "Les anciens entrepôts du port, aujourd'hui reconvertis en commerces et restaurants, côtoient des immeubles résidentiels du XIXe siècle. Je diagnostique chaque situation en tenant compte de la spécificité de ce bâti chargé d'histoire.",
      "L'ingénieur militaire Antonio De Vincenti a dessiné le plan du port artificiel, dont la construction a débuté en 1750 avec l'immersion du premier caisson de la jetée ; le port Lympia est mis en service le 22 novembre 1752. L'ensemble architectural de la place Île-de-Beauté qui le prolonge, avec son escalier monumental depuis le quai Cassini, est classé monument historique depuis 1991.",
    ],
  },
  {
    heading: "Un bâti ancien autour du port historique",
    paragraphs: [
      "Les immeubles du quartier du Port datent souvent du XIXe siècle, avec des portes et des serrures qui demandent une expertise particulière. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard.",
    ],
  },
  {
    heading: "Un secteur animé, jour et nuit",
    paragraphs: [
      "L'activité commerçante et festive du quartier du Port en fait un secteur où je peux être amené à intervenir à toute heure, notamment pour des sécurisations après effraction ou des dépannages tardifs.",
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
    heading: "Bâti ancien exposé à l'air marin au Port",
    paragraphs: [
      "Le quartier du Port, autour du bassin Lympia, cumule un bâti ancien et une exposition directe à l'air marin. Les deux facteurs se combinent : les cylindres d'origine, déjà plus fragiles, corrodent aussi plus vite à proximité immédiate de l'eau. Je surveille particulièrement ce point lors de mes diagnostics dans ce secteur.",
    ],
  },
  {
    heading: "Clés perdues : changer le cylindre ou simplement refaire un double ?",
    paragraphs: [
      "Perdre ses clés ne justifie pas toujours de changer la serrure. Tout dépend des circonstances. Si vous les avez égarées chez vous ou dans un lieu précis que vous pouvez fouiller, il suffit souvent de les retrouver ou de refaire un double. Si elles ont disparu dehors, avec une adresse que quelqu'un peut deviner (un porte-clés portant votre nom, des papiers dans un sac volé), mieux vaut changer le cylindre : c'est la seule façon d'être sûr que l'ancienne clé n'ouvre plus rien. Entre les deux, je vous pose les questions qui permettent de trancher, quitte à vous dire que ce n'est pas nécessaire. Un cylindre se remplace rapidement, et vous repartez avec de nouvelles clés.",
    ],
  },
  {
    heading: "Un logement sur quatre est une résidence secondaire",
    paragraphs: [
      "Dans le secteur « Port », 25 % des logements sont des résidences secondaires ou occasionnelles, contre 14 % à Nice, et 44 % des résidences principales sont louées. 80 % des résidences principales datent d'avant 1971. Dans ces logements souvent anciens et occupés par intermittence, deux situations reviennent : la porte qui se ferme sur quelqu'un qui n'a pas les clés, et la serrure peu utilisée qui résiste au retour. Un cylindre qui tourne sans forcer avant de partir est le meilleur moyen d'éviter un appel à l'arrivée. Je suis disponible à toute heure, avec un prix annoncé avant l'intervention. Source : INSEE, recensement de la population 2021, secteur « Port ».",
    ],
  },
];

const faq = [
  {
    question: "Savez-vous intervenir sur les immeubles anciens du Port ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'époque.",
  },
  {
    question: "Intervenez-vous aussi tard le soir dans ce quartier animé ?",
    answer:
      "Oui, je suis disponible 24h/24, y compris pour des dépannages tardifs ou des sécurisations après effraction.",
  },
  {
    question: "Intervenez-vous sur les anciens entrepôts reconvertis en commerces du port Lympia ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé.",
  },
];

export default function SerrurierLePortNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Le Port"
      crimeIntro="Le quartier du Port, entre bâti ancien et proximité immédiate de la mer, reste concerné par cette réalité."
      crimeClosing="L'air marin y accélère aussi la corrosion des cylindres anciens, un point à surveiller en plus du risque d'effraction."
      brandsIntro="Face à l'air marin et aux façades classées de ce secteur, je privilégie des cylindres résistants à la corrosion, sans dénaturer la porte d'origine."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-le-port-nice/"
    />
  );
}

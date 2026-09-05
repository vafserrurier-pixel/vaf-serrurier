import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-le-port-nice/" },
  title: "Serrurier Le Port Nice – Ouvert tard le soir | VAF",
  description:
    "Serrurier au quartier du Port, Nice : dépannage tardif, sécurisation après effraction dans ce secteur animé jour et nuit. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier au quartier du Port : j'interviens 24h/24, y compris tard le soir dans ce secteur animé par ses bars et restaurants, pour un dépannage tardif ou une sécurisation après effraction. Sur les immeubles du XIXe siècle qui bordent le port Lympia, je pose le plus souvent un cylindre Picard ou Fichet compatible avec le mécanisme d'origine, plutôt qu'un remplacement standard qui dénaturerait ces façades anciennes.",
  "Le port Lympia tire son origine du XVIIIe siècle, quand le roi de Sardaigne Charles-Emmanuel III décide en 1749 d'y construire un grand port maritime. Les autorités font alors appel à des forçats pour creuser les bassins, ce qui donne naissance à un bâtiment-prison devenu ensuite annexe du bagne de Villefranche-sur-Mer. Aujourd'hui, les anciens entrepôts transformés en restaurants et galeries d'art côtoient des immeubles résidentiels du XIXe siècle, autour de la place Île-de-Beauté et de l'église Notre-Dame-du-Port (1853), à quelques pas de la place Garibaldi, dans un quartier à la fois historique et vivant jusque tard dans la nuit.",
];

const blocks = [
  {
    heading: "Autour du port Lympia et de ses anciens entrepôts",
    paragraphs: [
      "Les anciens entrepôts du port, aujourd'hui reconvertis en commerces et restaurants, côtoient des immeubles résidentiels du XIXe siècle. Je diagnostique chaque situation en tenant compte de la spécificité de ce bâti chargé d'histoire.",
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
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier du Port en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au quartier du Port comme sur le reste de Nice, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
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
  {
    question: "Les tarifs sont-ils différents au quartier du Port par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville, avec la même majoration de nuit et de week-end partout. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au quartier du Port ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierLePortNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Le Port"
      crimeIntro="Le quartier du Port, entre bâti ancien et proximité immédiate de la mer, reste concerné par cette réalité."
      crimeClosing="L'air marin y accélère aussi la corrosion des cylindres anciens, un point à surveiller en plus du risque d'effraction."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-le-port-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

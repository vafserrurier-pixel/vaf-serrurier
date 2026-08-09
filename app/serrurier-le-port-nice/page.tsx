import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-le-port-nice/" },
  title: "Serrurier Le Port Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au quartier du Port, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le quartier du Port tire son origine du XVIIIe siècle, quand cette zone marécageuse était traversée par un petit cours d'eau appelé « Lympia ». En 1749, le roi de Sardaigne Charles-Emmanuel III décide d'y construire un grand port maritime pour développer le commerce méditerranéen. Pour aménager les quais et creuser les bassins, les autorités font appel à des forçats, ce qui conduit à la construction, entre 1750 et 1753, d'un bâtiment servant d'abord de prison et d'administration portuaire, avant de devenir une annexe du bagne de Villefranche-sur-Mer.",
  "Avec l'achèvement du port, Nice transforme son visage urbain et son rôle économique : le port Lympia devient rapidement un pôle d'échanges commerciaux et culturels avec le reste de la Méditerranée. Aujourd'hui, les anciens entrepôts ont été transformés en restaurants, boutiques et galeries d'art, donnant une nouvelle vie à ces espaces chargés d'histoire, dans un quartier au bâti ancien du XIXe siècle, à la fois résidentiel et animé par les bars et restaurants du secteur.",
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
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
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
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

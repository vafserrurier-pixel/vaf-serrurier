import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-roch-nice/" },
  title: "Serrurier Saint-Roch Nice – Après effraction | VAF",
  description:
    "Serrurier au quartier Saint-Roch, Nice : mise en sécurité après effraction, dépannage sur immeubles populaires. Devis annoncé, 24h/24.",
};

const intro = [
  "Porte claquée, cylindre grippé à Saint-Roch : j'interviens 24h/24 dans ce quartier populaire et dense, y compris pour sécuriser rapidement une porte après une tentative d'effraction avant de proposer une solution durable. Les immeubles très sollicités par un usage quotidien intense demandent souvent un entretien régulier des cylindres : je pose généralement un cylindre Cisa ou Vak fiable, avec intervention préventive pour éviter un blocage complet.",
  "Anciennement appelé Roquebillière, le quartier fut ravagé par l'épidémie de peste de 1631, avant de rester une étendue agricole jusqu'à la fin du XIXe siècle. La caserne Auvare s'y installe alors, occupée par le 6e puis le 22e bataillon de chasseurs alpins — les « Diables Bleus » qui ont donné leur surnom à la rue voisine. Elle ferme en 1995, avant de devenir un campus universitaire en 2003, transformant une partie du bâti du quartier autour de la place Saint-Roch, son église classée, et du marché voisin.",
];

const blocks = [
  {
    heading: "Autour de l'ancienne caserne Auvare",
    paragraphs: [
      "Le site de l'ancienne caserne, reconverti en campus universitaire depuis 2003, a transformé une partie du quartier. Les immeubles construits autour conservent des besoins classiques de serrurerie que je diagnostique au cas par cas.",
    ],
  },
  {
    heading: "Un quartier populaire, un bâti à entretenir",
    paragraphs: [
      "Les immeubles de Saint-Roch demandent souvent un entretien régulier des serrures de hall et des cylindres d'appartement, très sollicités par un usage quotidien intense. Une intervention préventive évite les blocages en pleine journée.",
    ],
  },
  {
    heading: "Sécurisation après incident",
    paragraphs: [
      "Comme dans les quartiers denses, je suis parfois appelé après une tentative d'effraction pour sécuriser rapidement une porte, puis proposer une solution durable une fois le premier diagnostic effectué.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du quartier, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Immeubles denses du quartier Saint-Roch",
    paragraphs: [
      "Saint-Roch, quartier populaire et dense de l'est-centre niçois, compte une forte concentration d'immeubles collectifs. Les pannes les plus fréquentes touchent les gâches électriques et les digicodes de hall, sollicités par un nombre important de résidents. Je privilégie la réparation quand elle est possible, pour limiter le coût et le délai d'intervention.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au quartier Saint-Roch en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Roch comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous après une effraction à Saint-Roch ?",
    answer:
      "Oui, je peux sécuriser rapidement une porte après une tentative d'effraction, puis proposer une solution durable une fois le diagnostic effectué.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Roch par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintRochNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Roch"
      crimeIntro="Saint-Roch, quartier dense de l'est-centre, suit la même évolution que le reste de la ville."
      crimeClosing="Sur les immeubles collectifs de ce secteur, la vigilance porte autant sur les accès communs que sur les logements eux-mêmes."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-roch-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

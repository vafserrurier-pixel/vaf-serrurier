import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-quartier-wilson-nice/" },
  title: "Serrurier Quartier Wilson – Commerces & serrures anciennes | VAF",
  description:
    "Serrurier place Wilson, Nice : dépannage de commerce, serrures d'immeubles bourgeois Belle Époque, sécurisation de vitrine. Devis annoncé, 24h/24.",
};

const intro = [
  "Besoin d'un serrurier place Wilson : je diagnostique par téléphone puis j'interviens 24h/24, aussi bien pour un appartement que pour l'un des nombreux commerces du secteur — rideau métallique bloqué, serrure de vitrine à sécuriser après une vitre cassée, porte de galerie qui ferme mal. Le passage important toute la journée use les cylindres plus vite que la moyenne, et je pose le plus souvent un cylindre Picard ou Cisa adapté au type de serrure déjà en place.",
  "La place Wilson doit son nom actuel à un hommage rendu au président américain Woodrow Wilson après la Première Guerre mondiale, sur le site de l'ancienne Bourgade médiévale. L'ancien Hôtel des Postes de 1888 domine toujours la place, entouré d'immeubles bourgeois Belle Époque dont beaucoup ont conservé leurs portes et cylindres d'origine — un point d'attention à chaque intervention pour ne pas dénaturer ces façades soignées.",
];

const blocks = [
  {
    heading: "Dépannage des commerces et galeries de la place Wilson",
    paragraphs: [
      "Entre les immeubles d'habitation, les galeries et les commerces de quartier, la place Wilson connaît un passage important toute la journée. Rideau métallique, serrure de vitrine, porte de local : je diagnostique systématiquement l'état réel de la serrure avant de proposer une réparation ou un remplacement complet.",
    ],
  },
  {
    heading: "Réparation des serrures d'immeubles bourgeois",
    paragraphs: [
      "Les immeubles bourgeois qui entourent la place Wilson datent pour beaucoup de la fin du XIXe et du début du XXe siècle, avec des portes d'entrée et des serrures d'époque qui méritent d'être traitées avec soin. Je privilégie autant que possible la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard qui abîmerait l'esthétique d'une porte ancienne.",
    ],
  },
  {
    heading: "Sécurisation après perte de clés ou usure",
    paragraphs: [
      "Après une perte de clés, une usure constatée ou pour anticiper une mise aux normes, je propose des solutions adaptées aussi bien pour les appartements que pour les locaux commerciaux du secteur : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Digicodes et halls d'entrée en copropriété",
    paragraphs: [
      "Pour les immeubles bourgeois du quartier, souvent organisés en copropriété avec des halls d'entrée soignés, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté, avec la même attention portée à la cohérence esthétique du bâti ancien.",
    ],
  },
  {
    heading: "Immeubles collectifs et digicodes au quartier Wilson",
    paragraphs: [
      "Le quartier Wilson, résidentiel et dense au cœur de Nice, compte de nombreux immeubles collectifs des années 1960-1970. Sur ce type de bâti, les pannes les plus fréquentes concernent les gâches électriques de hall et les digicodes, sollicités quotidiennement par un grand nombre de résidents. Je diagnostique le mécanisme avant de proposer réparation ou remplacement.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement place Wilson en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans ce quartier central, avec un délai habituel de 10 à 20 minutes selon la circulation.",
  },
  {
    question: "Travaillez-vous sur les serrures anciennes des immeubles bourgeois de la place Wilson ?",
    answer:
      "Oui, c'est une configuration fréquente dans ce secteur. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet qui dénaturerait la porte.",
  },
  {
    question: "Intervenez-vous aussi sur les commerces du quartier Wilson ?",
    answer:
      "Oui, en plus des logements, j'interviens sur les rideaux métalliques, serrures de vitrine et portes de locaux commerciaux du secteur.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier Wilson ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Les tarifs sont-ils différents au quartier Wilson par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous en soirée place Wilson, secteur animé de commerces et restaurants ?",
    answer:
      "Oui, je reste disponible en soirée et la nuit, avec une majoration appliquée après 19h et le week-end, annoncée avant l'intervention.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans ce quartier ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierQuartierWilsonNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Quartier Wilson"
      crimeIntro="Le quartier Wilson, dense et résidentiel, suit la même tendance que le reste du centre-ville de Nice."
      crimeClosing="Sur les immeubles collectifs comme celui-ci, la sécurisation des portes de hall compte autant que celle des appartements."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-quartier-wilson-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

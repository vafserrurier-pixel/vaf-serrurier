import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-carras-nice/" },
  title: "Serrurier Carras Nice – Bord de mer | VAF",
  description:
    "Serrurier à Carras, Nice : dépannage sur immeubles résidentiels en bord de mer, intervention rapide. Devis annoncé, 24h/24.",
};

const intro = [
  "Carras, une serrure à dépanner en urgence : j'interviens 24h/24 dans ce quartier résidentiel en bord de mer, bien desservi et sans les contraintes d'accès des zones plus denses du centre. Je diagnostique chaque situation avant de proposer un cylindre Cisa ou Vak adapté, pour un cylindre qui accroche, une porte qui ferme mal ou une clé cassée.",
  "Carras était, depuis le milieu du XVIIIe siècle, un modeste village de pêcheurs à l'écart à l'ouest de Nice, connu sous le nom de « Sieu en Caras ». Après la création de l'aéroport en 1966, un port-abri y fut aménagé. La construction de la Promenade des Anglais a ensuite favorisé l'essor touristique de cet ancien village. Il est devenu aujourd'hui un quartier résidentiel prisé pour son cadre de vie en bord de mer, où l'héritage de pêche se lit encore dans les quelques embarcations conservées le long du front de mer.",
];

const blocks = [
  {
    heading: "Un ancien village de pêcheurs devenu résidentiel",
    paragraphs: [
      "L'héritage du village de pêcheurs de Carras se lit encore dans le port-abri et les quelques embarcations conservées le long du front de mer. Les immeubles résidentiels construits depuis l'essor touristique du quartier ont des profils variés, que je diagnostique au cas par cas.",
    ],
  },
  {
    heading: "Immeubles résidentiels de l'ouest niçois",
    paragraphs: [
      "Le bâti de Carras comprend des immeubles de tailles variées, avec des besoins de serrurerie classiques : cylindre qui accroche, porte qui ferme mal, clé cassée. Je diagnostique chaque situation avant d'intervenir.",
    ],
  },
  {
    heading: "Un quartier pratique au quotidien",
    paragraphs: [
      "La présence de commerces de proximité et la bonne desserte du quartier en font un secteur où j'interviens souvent rapidement, sans les contraintes d'accès que l'on peut trouver dans certaines zones plus denses du centre.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      "Pour les immeubles du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Commerces et résidentiel dans le secteur de Carras",
    paragraphs: [
      "Carras, à l'ouest de Nice, combine zones commerciales et quartiers résidentiels. J'y interviens aussi bien sur des serrures de local commercial ou de rideau métallique que sur des portes d'appartement classiques. La proximité de zones d'activité signifie aussi des demandes régulières pour sécuriser des accès professionnels en dehors des heures d'ouverture.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Carras en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Carras comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles résidentiels de Carras ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou serrure complète selon l'état constaté.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous près du port-abri et du front de mer de Carras ?",
    answer:
      "Oui, tout ce secteur résidentiel en bord de mer fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Carras par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Carras ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierCarrasNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Carras"
      crimeIntro="Carras, entre zones commerciales et quartiers résidentiels, n'est pas à l'abri de cette évolution."
      crimeClosing="Les locaux professionnels de ce secteur gagnent à sécuriser leurs accès en dehors des heures d'ouverture, tout comme les logements."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-carras-nice/"
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

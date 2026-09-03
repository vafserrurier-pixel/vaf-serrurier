import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-arenas-nice/" },
  title: "Serrurier Arénas Nice – Bureaux & entreprises | VAF",
  description:
    "Serrurier à l'Arénas, Nice : sécurisation de bureaux et locaux professionnels, accès contrôlés. Devis annoncé, intervention 24h/24.",
};

const intro = [
  "Besoin d'un serrurier à l'Arénas : j'interviens 24h/24 sur ce premier quartier d'affaires de la Côte d'Azur, avec le même professionnalisme pour un bureau que pour un logement. Les immeubles de bureaux ont des exigences de sécurité spécifiques — accès contrôlés, cylindres professionnels Cisa ou Fichet — que je diagnostique avant toute intervention, en complément des résidences du secteur.",
  "Le nom de l'Arénas viendrait d'un ancien lieu de corridas — « arenas » signifiant arènes en espagnol. Le quartier a connu une transformation impressionnante, passant d'une zone industrielle à un pôle d'activités économiques après l'ouverture de l'aéroport Nice-Côte d'Azur dans les années 1960. Créé en 1989, il est devenu le premier centre d'affaires international des Alpes-Maritimes, avec environ 350 000 m² de bureaux, desservi par la ligne 2 du tramway et la gare multimodale de Saint-Augustin.",
];

const blocks = [
  {
    heading: "Le premier quartier d'affaires de la Côte d'Azur",
    paragraphs: [
      "Les immeubles de bureaux du centre d'affaires de l'Arénas, créé en 1989, ont des exigences de sécurité spécifiques : accès contrôlés, portes de bureaux, cylindres professionnels. J'interviens sur ces équipements avec le même professionnalisme que sur un logement.",
    ],
  },
  {
    heading: "Un secteur mêlant activité et résidentiel",
    paragraphs: [
      "L'Arénas combine zones de bureaux et quelques résidences. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      "Pour les résidences du secteur, j'interviens sur les portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "L'Arénas étant à l'ouest de la ville, proche de l'aéroport, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation.",
    ],
  },
  {
    heading: "Bureaux et contrôle d'accès à l'Arénas",
    paragraphs: [
      "L'Arénas, zone d'activité et de bureaux à l'ouest de Nice proche de l'aéroport, présente des besoins différents des secteurs résidentiels : portes de bureaux, systèmes de contrôle d'accès, serrures multipoints sur les locaux professionnels. J'interviens aussi bien pour une entreprise que pour un particulier résidant dans ce secteur mixte.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à l'Arénas en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à l'Arénas comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des locaux professionnels dans ce secteur ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé.",
  },
  {
    question: "Travaillez-vous avec les copropriétés de l'Arénas ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous près de la gare TGV de Saint-Augustin ?",
    answer:
      "Oui, tout ce secteur d'affaires entre l'aéroport et la gare multimodale fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à l'Arénas par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à l'Arénas ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierArenasNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Arénas"
      crimeIntro="L'Arénas, zone d'activité et de bureaux proche de l'aéroport, n'est pas à l'abri de cette évolution."
      crimeClosing="Les locaux professionnels de ce secteur ont tout intérêt à vérifier leurs systèmes de contrôle d'accès aussi régulièrement que les logements voisins."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-arenas-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
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

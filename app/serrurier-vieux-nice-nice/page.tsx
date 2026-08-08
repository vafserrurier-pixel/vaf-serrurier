import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-vieux-nice-nice/" },
  title: "Serrurier Vieux-Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier dans le Vieux-Nice : ouverture de porte, dépannage, changement de serrure adapté au bâti ancien. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "Le Vieux-Nice est le cœur historique de la ville : ruelles étroites et souvent piétonnes, immeubles anciens aux façades colorées, proximité du cours Saleya et de la colline du Château. C'est un secteur très dense, où le bâti remonte parfois aux XVIIe et XVIIIe siècles.",
  "Ce patrimoine ancien implique des contraintes particulières : portes et serrures d'époque, accès parfois compliqués pour un véhicule, et un diagnostic qui demande une vraie expertise plutôt qu'une solution standard.",
];

const blocks = [
  {
    heading: "Un bâti ancien qui demande une approche adaptée",
    paragraphs: [
      "Dans le Vieux-Nice, beaucoup de portes et de serrures sont anciennes, parfois artisanales, avec des dimensions non standards. Je privilégie systématiquement le diagnostic et la réparation quand c'est possible, pour respecter le cachet de ces portes plutôt que les remplacer par des modèles génériques.",
    ],
  },
  {
    heading: "Un accès parfois contraint",
    paragraphs: [
      "Les ruelles piétonnes du Vieux-Nice compliquent parfois l'accès en véhicule. J'en tiens compte dans l'organisation de mon intervention, pour que le délai annoncé reste réaliste malgré ces contraintes de circulation.",
    ],
  },
  {
    heading: "Logements de particuliers et locations saisonnières",
    paragraphs: [
      "Le quartier compte de nombreux logements loués en courte durée. Pour les propriétaires ou gestionnaires de ces biens, je peux intervenir rapidement en cas de porte claquée ou de problème de serrure entre deux locations.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement dans le Vieux-Nice en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 dans le Vieux-Nice, en tenant compte des contraintes d'accès des ruelles piétonnes pour organiser mon intervention.",
  },
  {
    question: "Travaillez-vous sur les portes anciennes typiques du Vieux-Nice ?",
    answer:
      "Oui, c'est une grande partie de mon activité dans ce quartier. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte ancienne.",
  },
  {
    question: "Intervenez-vous pour les locations saisonnières du Vieux-Nice ?",
    answer:
      "Oui, je peux intervenir rapidement en cas de porte claquée ou de souci de serrure entre deux locations, pour des propriétaires ou des gestionnaires de biens.",
  },
  {
    question: "Les tarifs sont-ils différents dans le Vieux-Nice par rapport au reste de la ville ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans le Vieux-Nice ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierVieuxNiceNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Vieux-Nice"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation et l'accès piéton"
      faq={faq}
      path="/serrurier-vieux-nice-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

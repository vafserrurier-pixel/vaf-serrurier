import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-vieux-nice-nice/" },
  title: "Serrurier Vieux-Nice – Portes anciennes & locations | VAF",
  description:
    "Serrurier dans le Vieux-Nice : réparation de portes anciennes non standards, dépannage pour locations saisonnières près du cours Saleya. Devis annoncé, 24h/24.",
};

const intro = [
  "Dépannage serrurier dans le Vieux-Nice : j'interviens 24h/24 en tenant compte des ruelles piétonnes pour organiser mon accès. Beaucoup de portes ici sont anciennes, parfois artisanales, avec des dimensions non standards : je privilégie systématiquement le diagnostic et la réparation avec un cylindre Picard ou Heraclès compatible, plutôt qu'un remplacement par un modèle générique qui dénaturerait le cachet de la porte.",
  "Le cours Saleya, artère la plus célèbre du Vieux-Nice, était connu dès le XVIIIe siècle sous le nom de « Palco » — la « scène » en italien. C'était déjà un lieu de promenade prisé de la haute société dès 1714. Le grand tournant survient en 1861 avec la création du marché aux fleurs, fruits et légumes, qui ancre sa vocation commerçante et populaire. Ce bâti remontant parfois aux XVIIe et XVIIIe siècles explique la densité de portes et serrures d'époque du quartier.",
];

const blocks = [
  {
    heading: "Autour du marché du cours Saleya",
    paragraphs: [
      "Les immeubles qui bordent le cours Saleya, marché quotidien depuis 1861, ont souvent des portes et des serrures anciennes soumises à un passage important de riverains et de commerçants. Je diagnostique systématiquement l'état réel du mécanisme avant de proposer une réparation ou un remplacement.",
    ],
  },
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
  {
    heading: "Ruelles étroites et bâti médiéval du Vieux-Nice",
    paragraphs: [
      "Le Vieux-Nice, cœur historique aux ruelles étroites et aux immeubles de pierre parfois centenaires, cumule deux défis : des serrures et cylindres d'origine sur les étages résidentiels, et des rideaux métalliques ou portes de commerce très sollicités au rez-de-chaussée. J'adapte ma méthode selon qu'il s'agit d'un appartement ancien ou d'une devanture commerciale.",
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
    question: "Intervenez-vous tôt le matin pendant les horaires du marché du cours Saleya ?",
    answer:
      "Oui, je peux intervenir tôt le matin comme à tout autre moment de la journée, en tenant compte de l'affluence du marché pour organiser mon accès.",
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
      crimeIntro="Le Vieux-Nice, avec ses ruelles étroites et son bâti ancien, reste concerné par cette tendance malgré l'animation permanente du quartier."
      crimeClosing="Sur les immeubles historiques comme sur les commerces du rez-de-chaussée, une serrure à jour reste la meilleure protection."
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
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

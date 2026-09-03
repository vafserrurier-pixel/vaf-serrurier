import type { Metadata } from "next";
import CommunePageTemplate from "@/components/CommunePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-villefranche-sur-mer/" },
  title: "Serrurier à Villefranche-sur-Mer – Vieille ville & rade | VAF",
  description:
    "Serrurier à Villefranche-sur-Mer (06) : dépannage, ouverture de porte, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "J'interviens à Villefranche-sur-Mer aussi bien dans la vieille ville, sur ses ruelles voûtées, que sur les hauteurs et le front de mer, pour tout type de serrurerie : porte claquée, cylindre à changer, ou sécurisation d'une résidence secondaire.",
  "Comme partout ailleurs, la méthode reste la même : je diagnostique la situation au téléphone, j'annonce un prix avant de me déplacer, et je m'adapte au bâti réel une fois sur place, qu'il s'agisse d'une porte ancienne dans la vieille ville ou d'une villa récente sur les hauteurs.",
];

const blocks = [
  {
    heading: "Une ville entre rade profonde et vieille ville médiévale",
    paragraphs: [
      "Villefranche-sur-Mer se distingue par sa rade, l'une des plus profondes de Méditerranée, et sa vieille ville aux ruelles étroites, dont la célèbre rue Obscure, un passage voûté du XIIIe siècle classé monument historique. La citadelle Saint-Elme, construite en 1557 sous l'impulsion du duc de Savoie Emmanuel-Philibert pour défendre la rade, abrite aujourd'hui plusieurs musées et la mairie.",
      "Dans la vieille ville, je retrouve souvent des portes anciennes aux mécanismes qu'il faut savoir diagnostiquer sans les abîmer. Sur les hauteurs et le front de mer, ce sont plutôt des constructions plus récentes, avec des serrures multipoints ou des portes blindées à entretenir.",
    ],
  },
  {
    heading: "Villas des hauteurs et copropriétés du front de mer",
    paragraphs: [
      "Comme dans beaucoup de communes du littoral, Villefranche-sur-Mer compte une part de résidences secondaires et de villas occupées de façon intermittente selon les saisons. Une serrure certifiée A2P, une porte en bon état et parfois un renforcement des points d'accès réduisent nettement le risque pendant les périodes d'absence prolongée.",
      "J'interviens aussi bien pour un dépannage ponctuel que pour un projet de sécurisation avant une longue période d'inoccupation, sur une villa des hauteurs comme sur un appartement du front de mer.",
    ],
  },
  {
    heading: "Un accès direct par la Corniche",
    paragraphs: [
      "Villefranche-sur-Mer est la commune la plus proche de Nice sur la Corniche, à environ 8 kilomètres par la Corniche André-de-Joly ou le boulevard de la Corne-d'Or. J'en tiens compte dans mon estimation de délai, annoncée avant le déplacement plutôt qu'un chiffre optimiste non tenu.",
    ],
  },
];

const safetyParagraph =
  "Je n'ai pas trouvé de statistique officielle de cambriolages spécifique à la commune de Villefranche-sur-Mer. Elle fait partie du département des Alpes-Maritimes, où le taux moyen de cambriolages était de 0,43 % des logements en 2025 selon les chiffres du ministère de l'Intérieur — un repère régional plutôt qu'une donnée précise pour Villefranche-sur-Mer. Les résidences secondaires et villas isolées, plus nombreuses ici que dans le centre de Nice, restent statistiquement des cibles recherchées lors des périodes d'absence prolongée. Une serrure certifiée A2P et une porte en bon état réduisent nettement le risque, quelle que soit la commune.";

const faq = [
  {
    question: "Intervenez-vous aussi bien dans la vieille ville que sur les hauteurs de Villefranche-sur-Mer ?",
    answer:
      "Oui, je me déplace sur l'ensemble de la commune, que ce soit dans les ruelles de la vieille ville ou sur les hauteurs et le front de mer.",
  },
  {
    question: "Pouvez-vous intervenir sur une porte ancienne dans la vieille ville ?",
    answer:
      "Oui, je diagnostique le mécanisme avant d'intervenir, pour préserver autant que possible une porte ancienne plutôt que de la remplacer systématiquement.",
  },
  {
    question: "Proposez-vous une sécurisation pour une résidence secondaire inoccupée une partie de l'année ?",
    answer:
      "Oui, je peux évaluer les points d'accès et proposer un renforcement adapté (serrure A2P, porte blindée) avant une période d'absence prolongée.",
  },
  {
    question: "Quel est votre délai d'intervention à Villefranche-sur-Mer ?",
    answer:
      "Généralement 15 à 20 minutes depuis mon point de départ à Nice par la Corniche, selon la circulation. Je vous donne une estimation précise au téléphone.",
  },
  {
    question: "Donnez-vous un devis avant de vous déplacer jusqu'à Villefranche-sur-Mer ?",
    answer:
      "Oui, toujours. Le prix est annoncé au téléphone avant le déplacement, quelle que soit la commune.",
  },
];

export default function SerrurierVillefrancheSurMerPage() {
  return (
    <CommunePageTemplate
      commune="Villefranche-sur-Mer"
      intro={intro}
      blocks={blocks}
      travelEstimate="15-20 min"
      safetyParagraph={safetyParagraph}
      faq={faq}
      path="/serrurier-villefranche-sur-mer/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

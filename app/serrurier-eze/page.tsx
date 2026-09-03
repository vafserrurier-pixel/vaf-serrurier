import type { Metadata } from "next";
import CommunePageTemplate from "@/components/CommunePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-eze/" },
  title: "Serrurier à Èze – Village perché & bord de mer | VAF",
  description:
    "Serrurier à Èze (06) : dépannage, ouverture de porte, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "J'interviens à Èze aussi bien dans le village perché que sur le littoral d'Èze-bord-de-mer, pour tout type de serrurerie : porte claquée, cylindre à changer, ou sécurisation d'une résidence secondaire.",
  "Comme partout ailleurs, la méthode reste la même : je diagnostique la situation au téléphone, j'annonce un prix avant de me déplacer, et je m'adapte au bâti réel une fois sur place, qu'il s'agisse d'une porte ancienne dans les ruelles du village ou d'une villa récente sur les hauteurs.",
];

const blocks = [
  {
    heading: "Un village entre hauteurs médiévales et bord de mer",
    paragraphs: [
      "Èze se distingue par sa double géographie : le village perché, à 429 mètres d'altitude, avec ses ruelles pavées étroites et ses bâtisses médiévales, et Èze-bord-de-mer, sur le littoral, plus résidentiel. Les deux secteurs n'ont pas les mêmes besoins en serrurerie.",
      "Dans le village historique, je retrouve souvent des portes anciennes, parfois classées ou protégées, avec des mécanismes qu'il faut savoir diagnostiquer sans les abîmer. Sur le bord de mer et les hauteurs environnantes, ce sont plutôt des constructions plus récentes, avec des serrures multipoints ou des portes blindées à entretenir.",
    ],
  },
  {
    heading: "Villas et résidences secondaires : une vigilance particulière",
    paragraphs: [
      "Èze compte une proportion importante de villas et de résidences secondaires, occupées de façon intermittente selon les saisons. Cette situation appelle une vigilance particulière : une serrure certifiée A2P, une porte en bon état et parfois un renforcement des points d'accès réduisent nettement le risque pendant les périodes d'absence prolongée.",
      "J'interviens aussi bien pour un dépannage ponctuel (porte claquée à l'arrivée après plusieurs semaines d'absence) que pour un projet plus large de sécurisation avant une longue période d'inoccupation.",
    ],
  },
  {
    heading: "Un accès qui demande de l'organisation",
    paragraphs: [
      "La route entre Nice et Èze passe par la Moyenne Corniche ou le bord de mer, avec des virages et une circulation qui peut ralentir aux heures de pointe estivales. J'en tiens compte dans mon estimation de délai, annoncée avant le déplacement plutôt qu'un chiffre optimiste non tenu.",
    ],
  },
];

const safetyParagraph =
  "Je n'ai pas trouvé de statistique officielle de cambriolages spécifique à la commune d'Èze. Elle fait partie du département des Alpes-Maritimes, où le taux moyen de cambriolages était de 0,43 % des logements en 2025 selon les chiffres du ministère de l'Intérieur — un repère régional plutôt qu'une donnée précise pour Èze. Les résidences secondaires et villas isolées, plus nombreuses ici que dans le centre de Nice, restent statistiquement des cibles recherchées lors des périodes d'absence prolongée. Une serrure certifiée A2P et une porte en bon état réduisent nettement le risque, quelle que soit la commune.";

const faq = [
  {
    question: "Intervenez-vous aussi bien dans le village perché qu'à Èze-bord-de-mer ?",
    answer:
      "Oui, je me déplace sur l'ensemble de la commune, que ce soit dans les ruelles du village historique ou sur le littoral d'Èze-bord-de-mer.",
  },
  {
    question: "Pouvez-vous intervenir sur une porte ancienne dans le village médiéval ?",
    answer:
      "Oui, je diagnostique le mécanisme avant d'intervenir, pour préserver autant que possible une porte ancienne plutôt que de la remplacer systématiquement.",
  },
  {
    question: "Proposez-vous une sécurisation pour une résidence secondaire inoccupée une partie de l'année ?",
    answer:
      "Oui, je peux évaluer les points d'accès et proposer un renforcement adapté (serrure A2P, porte blindée) avant une période d'absence prolongée.",
  },
  {
    question: "Quel est votre délai d'intervention à Èze ?",
    answer:
      "Généralement 20 à 30 minutes depuis mon point de départ à Nice, selon la circulation sur la Moyenne Corniche ou le bord de mer. Je vous donne une estimation précise au téléphone.",
  },
  {
    question: "Donnez-vous un devis avant de vous déplacer jusqu'à Èze ?",
    answer:
      "Oui, toujours. Le prix est annoncé au téléphone avant le déplacement, quelle que soit la commune.",
  },
];

export default function SerrurierEzePage() {
  return (
    <CommunePageTemplate
      commune="Èze"
      intro={intro}
      blocks={blocks}
      travelEstimate="20-30 min"
      safetyParagraph={safetyParagraph}
      faq={faq}
      path="/serrurier-eze/"
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

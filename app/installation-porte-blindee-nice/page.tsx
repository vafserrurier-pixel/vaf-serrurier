import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/installation-porte-blindee-nice/" },
  title: "Porte blindée Nice – Blindage & bloc-porte A2P | VAF",
  description:
    "Porte blindée ou blindage d'une porte existante à Nice : diagnostic, devis annoncé, pose soignée. Certification A2P BP expliquée simplement.",
};

const sections = [
  {
    heading: "Porte blindée ou blindage, que choisir",
    paragraphs: [
      "Deux solutions existent : le bloc-porte blindé complet, ou le blindage qui renforce une porte existante. Le choix dépend de l'état actuel de votre porte et de votre bâti — un bloc-porte convient mieux quand l'ensemble est fatigué, le blindage quand la porte reste saine et robuste.",
    ],
  },
  {
    heading: "En copropriété à Nice",
    paragraphs: [
      "Les règlements de copropriété imposent parfois une apparence extérieure identique sur le palier. Le blindage préserve souvent mieux l'esthétique existante, tandis qu'un bloc-porte doit respecter les finitions visibles imposées.",
    ],
  },
  {
    heading: "Ce qui fait vraiment la sécurité d'une porte",
    paragraphs: [
      "Une serrure solide ne suffit pas : le bâti, les points d'ancrage et les paumelles comptent tout autant. Une porte bien posée et bien réglée dure plus longtemps qu'une installation expédiée — je prends le temps nécessaire pour l'ajustement.",
      "Un cambrioleur met en moyenne 90 secondes pour forcer une serrure classique. Une porte blindée bien posée peut résister près de 50 minutes.",
    ],
  },
  {
    heading: "Comprendre la certification A2P BP",
    paragraphs: [
      "La certification A2P classe les blocs-portes selon des niveaux de résistance : BP1, BP2, BP3. Une porte A2P BP1 possède une serrure 3 points minimum et résiste aux tentatives d'effraction pendant au moins 5 minutes. C'est un repère utile pour comparer, mais une excellente porte mal posée perd tout son intérêt.",
    ],
  },
  {
    heading: "Déroulé d'une installation",
    paragraphs: [
      "Je prends le temps de comprendre le besoin et d'observer l'entrée et ses contraintes, je propose une solution cohérente avec un devis annoncé, je protège les zones de passage, je dépose l'ancienne porte proprement, je prépare le support, je pose et j'ajuste finement, je teste plusieurs fois la fermeture, puis j'explique l'entretien à prévoir.",
    ],
  },
  {
    heading: "Ce qui fait varier le prix d'une porte blindée",
    paragraphs: [
      "Le choix entre blindage et bloc-porte complet est le facteur le plus déterminant, suivi du niveau de serrure (multipoints, certification A2P), du cylindre, des finitions visibles côté palier, et de la configuration du chantier — un accès compliqué en étage élevé sans ascenseur rallonge la manutention. Un devis détaillé, annoncé avant tout engagement, tient compte de chacun de ces éléments.",
    ],
  },
  {
    heading: "Un impact réel sur votre assurance habitation",
    paragraphs: [
      "La certification A2P est reconnue par la quasi-totalité des assureurs français : elle conditionne souvent la couverture vol de votre contrat et peut donner droit à une réduction de prime habitation, notamment à partir du niveau BP2. Les montants exacts varient selon les compagnies et les contrats — à vérifier directement auprès de votre assureur. Je vous fournis une facture détaillée mentionnant le niveau de certification posé, le document généralement demandé pour faire valoir cette amélioration de sécurité auprès de votre assurance.",
    ],
  },
];

const faq = [
  {
    question: "Comment savoir si ma porte blindée est aux normes ?",
    answer:
      "Une serrure de porte blindée conforme comporte plusieurs points de fermeture (2, 3, 5 voire 7) associés à un cylindre et une serrure certifiés A2P.",
  },
  {
    question: "Qu'est-ce qu'une porte A2P BP1 ?",
    answer:
      "Une porte A2P BP1 possède une serrure 3 points minimum et résiste aux tentatives d'effraction pendant au moins 5 minutes, selon un test normalisé.",
  },
  {
    question: "Quels sont les avantages réels d'une porte blindée ?",
    answer:
      "Là où une serrure classique cède en environ 90 secondes, une porte blindée bien posée peut résister près de 50 minutes à une tentative d'effraction.",
  },
  {
    question: "Qui installe une porte blindée à Nice ?",
    answer:
      "J'interviens moi-même, du diagnostic à la pose finale, en tant qu'artisan serrurier spécialisé dans le blindage de porte.",
  },
  {
    question: "Quel est le poids d'une porte blindée ?",
    answer:
      "Pour des dimensions courantes (largeur 1,10 m, hauteur 2,20 m), comptez entre 130 et 180 kg, davantage si la porte offre en plus une résistance au feu.",
  },
  {
    question: "Puis-je installer une porte blindée en copropriété à Nice ?",
    answer:
      "Oui, dans la grande majorité des cas, mais le règlement de copropriété peut imposer une apparence extérieure identique sur le palier. Le blindage d'une porte existante est souvent la solution la plus simple à faire accepter, car il ne change pas l'aspect vu du couloir.",
  },
  {
    question: "Une porte blindée fait-elle vraiment baisser ma prime d'assurance ?",
    answer:
      "Dans la majorité des cas, oui, à partir du niveau A2P BP2. Le montant de la réduction dépend de votre assureur et de votre contrat : je vous conseille de vérifier ce point directement auprès de lui, muni de la facture détaillée que je vous remets.",
  },
];

export default function InstallationPorteBlindeeNicePage() {
  return (
    <ServicePageTemplate
      h1="Installation de porte blindée à Nice"
      lead="Bloc-porte blindé complet ou blindage d'une porte existante : je vous aide à choisir la solution adaptée à votre porte et à votre bâti, devis annoncé avant intervention."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Installation porte blindée"
      path="/installation-porte-blindee-nice/"
      image={{
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Serrure multipoints sur porte blindée, installation à Nice",
      }}
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

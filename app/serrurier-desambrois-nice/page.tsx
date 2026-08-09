import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-desambrois-nice/" },
  title: "Serrurier Desambrois Nice – Changement de serrure rapide | VAF",
  description:
    "Serrurier à Desambrois, Nice : changement de serrure entre deux locataires, dépannage sur portes Belle Époque, intervention en 10-15 min. Devis annoncé, 24h/24.",
};

const intro = [
  "Dépannage serrurier à Desambrois : c'est l'un des quartiers où j'interviens le plus vite depuis mon point de départ, généralement en 10 à 15 minutes. La demande la plus fréquente ici n'est pas la panne classique, mais le changement de serrure entre deux locataires — le quartier compte environ 2 300 habitants majoritairement locataires, avec un turnover plus élevé que la moyenne niçoise. J'installe le plus souvent un cylindre Picard ou Fichet neuf après un état des lieux, pour repartir sur une serrure fiable entre chaque bail.",
  "L'avenue Desambrois, bordée d'immeubles Belle Époque aux façades travaillées, tire son nom de Louis des Ambrois de Névache, intendant sarde du XIXe siècle, à l'époque où Nice appartenait encore au royaume de Sardaigne. Ce bâti ancien signifie aussi des cylindres et mécanismes d'origine, parfois conservés depuis plusieurs décennies, que je répare quand c'est possible plutôt que de les remplacer d'office.",
];

const blocks = [
  {
    heading: "Changement de serrure entre deux locataires",
    paragraphs: [
      "Avec une majorité de résidents locataires et un turnover plus élevé que la moyenne, les serrures et cylindres de ce quartier changent plus souvent de main : état des lieux d'entrée, remise de clés, changement de serrure entre deux locataires. C'est une configuration que je connais bien, avec un même souci de transparence sur le tarif, que la demande vienne d'un propriétaire ou d'un locataire.",
    ],
  },
  {
    heading: "Dépannage sur les serrures Belle Époque",
    paragraphs: [
      "Les immeubles Belle Époque de l'avenue Desambrois ont souvent conservé leurs portes et serrures d'origine, ou des modèles installés il y a plusieurs décennies. Je privilégie systématiquement la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement standard qui dénaturerait une porte ancienne, sauf quand le mécanisme est trop endommagé pour être restauré.",
    ],
  },
  {
    heading: "Le quartier le plus rapide à couvrir depuis mon point de départ",
    paragraphs: [
      "Étant situé à proximité immédiate de mon point de départ au 2 Rue Antoine Gautier, Desambrois est l'un des secteurs où je peux généralement intervenir le plus rapidement, ce qui compte particulièrement en cas de porte claquée ou d'urgence après une tentative d'effraction.",
    ],
  },
  {
    heading: "Digicodes et portes de hall en copropriété",
    paragraphs: [
      "Pour les halls d'immeuble de ces copropriétés souvent bien entretenues, j'interviens sur les digicodes, gâches électriques et portes de hall, à la demande d'un syndic ou d'un résident mandaté, avec la même attention portée à l'esthétique du bâti ancien.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Desambrois en cas d'urgence ?",
    answer:
      "Oui, Desambrois est très proche de mon point de départ : le délai d'intervention y est généralement parmi les plus courts sur Nice, de l'ordre de 10 à 15 minutes.",
  },
  {
    question: "Travaillez-vous sur les serrures anciennes des immeubles Belle Époque de Desambrois ?",
    answer:
      "Oui, c'est une situation fréquente dans ce quartier. Je privilégie la réparation ou le remplacement de cylindre quand c'est possible, plutôt qu'un changement complet systématique.",
  },
  {
    question: "Intervenez-vous pour un changement de serrure entre deux locataires ?",
    answer:
      "Oui, c'est une demande fréquente à Desambrois où le turnover locatif est plus élevé que la moyenne. Je peux intervenir rapidement entre un état des lieux de sortie et d'entrée.",
  },
  {
    question: "Les tarifs sont-ils différents à Desambrois par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous aussi sur des portes blindées à Desambrois ?",
    answer:
      "Oui, aussi bien pour l'ouverture d'une porte blindée verrouillée que pour l'installation ou le blindage d'une porte existante.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Donnez-vous un devis avant d'intervenir à Desambrois ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierDesambroisNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Desambrois"
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 15 minutes selon la circulation"
      faq={faq}
      path="/serrurier-desambrois-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

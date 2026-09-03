import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrure-carenee-nice/" },
  title: "Serrure carénée 5 points à Nice – En applique | VAF",
  description:
    "Installation d'une serrure carénée 5 points en applique à Nice : renfort intermédiaire entre cylindre standard et blindage complet. Devis annoncé, 24h/24.",
};

const sections = [
  {
    heading: "Qu'est-ce qu'une serrure carénée",
    paragraphs: [
      "Une serrure carénée est une serrure en applique — posée sur la face intérieure de la porte plutôt qu'encastrée dedans — dont le boîtier est protégé par un carénage métallique. Ce carénage empêche un cambrioleur de s'attaquer directement au mécanisme à la pince ou à la perceuse, une faiblesse classique des serrures en applique non protégées.",
      "Le modèle à 5 points répartit la résistance sur plusieurs points d'ancrage dans le dormant, ce qui limite le risque de faire céder la porte par arrachement plutôt que par la serrure elle-même.",
    ],
  },
  {
    heading: "Un renfort intermédiaire, pas un blindage complet",
    paragraphs: [
      "C'est une solution efficace quand votre porte reste saine mais que la serrure en place n'offre plus une résistance suffisante — sans passer par un blindage complet ou un bloc-porte neuf. Le coût reste nettement inférieur à une installation de porte blindée, pour un vrai gain de résistance sur l'accès.",
      "Si le bâti ou la porte elle-même sont fatigués, en revanche, une serrure carénée seule ne suffit pas : je vous oriente alors vers un blindage ou un bloc-porte, plutôt que de poser un renfort sur une base fragile.",
    ],
  },
  {
    heading: "Compatible avec la plupart des portes existantes",
    paragraphs: [
      "La pose en applique ne nécessite pas de modifier la structure de la porte, contrairement à une serrure encastrée. Elle convient aussi bien à une porte en bois qu'à une porte métallique, en résidence principale comme en copropriété où le règlement impose parfois de préserver l'aspect extérieur du palier.",
    ],
  },
];

const faq = [
  {
    question: "Quelle différence entre une serrure carénée et une serrure en applique classique ?",
    answer:
      "Le carénage protège le boîtier du mécanisme, exposé et vulnérable sur une serrure en applique classique. C'est ce carénage qui apporte l'essentiel du gain de résistance.",
  },
  {
    question: "Une serrure carénée remplace-t-elle un blindage de porte ?",
    answer:
      "Non, c'est un renfort intermédiaire. Si votre porte ou son bâti sont fragiles, un blindage complet reste plus adapté. Je vous conseille selon l'état réel de votre porte, pas systématiquement la solution la plus chère.",
  },
  {
    question: "Combien coûte une serrure 5 points en applique carénée à Nice ?",
    answer:
      "1 490 € TTC, pose et réglage inclus, pour une porte standard. Le prix exact est confirmé sur place avant intervention.",
  },
  {
    question: "Peut-on poser une serrure carénée en copropriété ?",
    answer:
      "Oui, dans la grande majorité des cas, puisqu'elle se pose côté intérieur et ne modifie pas l'aspect extérieur de la porte vu du couloir.",
  },
  {
    question: "Combien de temps dure la pose ?",
    answer:
      "Généralement une demi-journée, selon l'état de la porte et les ajustements nécessaires pour un réglage fin des points d'ancrage.",
  },
];

export default function SerrureCareneeNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrure carénée 5 points en applique à Nice"
      lead="Un renfort intermédiaire entre la serrure standard et le blindage complet : boîtier protégé, 5 points d'ancrage, sans modifier la structure de votre porte."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Serrure carénée 5 points"
      path="/serrure-carenee-nice/"
      image={{
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Serrure carénée 5 points en applique posée sur une porte à Nice",
      }}
      extra={
        <PriceReminder
          priceLabel="1 490 € TTC"
          note="Pose et réglage inclus, pour une porte standard — devis confirmé avant intervention"
          locale="fr"
        />
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez votre porte et votre serrure actuelle, je vous indique si une serrure carénée est adaptée à votre situation.",
        },
        {
          title: "Rendez-vous",
          text: "Je fixe un rendez-vous pour évaluer votre porte sur place, à l'heure qui vous convient.",
        },
        {
          title: "Évaluation de la porte",
          text: "J'examine l'état du bâti et de la porte pour confirmer qu'un renfort suffit, plutôt qu'un blindage complet.",
        },
        {
          title: "Règlement",
          text: "Le devis confirmé sur place est celui que vous payez, facture détaillée à l'appui.",
        },
      ]}
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

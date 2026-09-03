import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import BrandsSection from "@/components/BrandsSection";

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
      "Une serrure carénée est une serrure en applique, posée sur la face intérieure de la porte plutôt qu'encastrée dedans. Son boîtier est protégé par un carénage métallique qui empêche un cambrioleur de s'attaquer directement au mécanisme à la pince ou à la perceuse. C'est justement cette exposition du boîtier qui fait la faiblesse classique d'une serrure en applique non protégée.",
      "Le modèle à 5 points répartit la résistance sur plusieurs points d'ancrage dans le dormant. Cela limite le risque de faire céder la porte par arrachement plutôt que par la serrure elle-même, un mode d'effraction fréquent sur les portes équipées d'une simple serrure à un point.",
    ],
  },
  {
    heading: "Un renfort intermédiaire, pas un blindage complet",
    paragraphs: [
      "C'est une solution efficace quand votre porte reste saine mais que la serrure en place n'offre plus une résistance suffisante, sans passer par un blindage complet ou un bloc-porte neuf. Le coût reste nettement inférieur à une installation de porte blindée, pour un vrai gain de résistance sur l'accès.",
      "Si le bâti ou la porte elle-même sont fatigués, en revanche, une serrure carénée seule ne suffit pas. Je vous oriente alors vers un blindage ou un bloc-porte, plutôt que de poser un renfort sur une base fragile qui ne tiendrait pas dans la durée.",
    ],
  },
  {
    heading: "Compatible avec la plupart des portes existantes",
    paragraphs: [
      "La pose en applique ne nécessite pas de modifier la structure de la porte, contrairement à une serrure encastrée. Elle convient aussi bien à une porte en bois qu'à une porte métallique, en résidence principale comme en copropriété où le règlement impose parfois de préserver l'aspect extérieur du palier.",
    ],
  },
  {
    heading: "Les marques que je pose à Nice",
    paragraphs: [
      "Je travaille avec des marques reconnues pour leurs serrures carénées, en particulier Héraclès, référence française sur ce type de mécanisme et courante sur les portes d'entrée à Nice. Vachette et Bricard proposent également des modèles fiables selon la configuration de votre porte.",
      "Le choix de la marque compte moins que le diagnostic préalable : l'épaisseur du carénage, la qualité de l'acier et la précision du réglage des points d'ancrage font la vraie différence sur la résistance finale, bien plus qu'une référence commerciale à elle seule.",
    ],
  },
  {
    heading: "Cylindre standard, serrure carénée ou blindage : comment choisir",
    paragraphs: [
      "Un simple remplacement de cylindre suffit quand la porte et son bâti sont sains et que seul le mécanisme de verrouillage montre des signes de faiblesse. La serrure carénée intervient un cran au-dessus, quand vous voulez renforcer significativement la résistance à l'effraction sans reprendre toute la porte. Le blindage complet ou le bloc-porte neuf restent la solution quand la porte elle-même, ou le bâti autour, ne tiennent plus la route.",
      "Je vous conseille selon l'état réel constaté sur place, pas selon la solution la plus chère. Une bonne partie de mon travail consiste justement à éviter un suréquipement inutile sur une porte qui n'en a pas besoin.",
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
  {
    question: "Quelles marques de serrures carénées installez-vous ?",
    answer:
      "Principalement Héraclès, référence sur ce type de mécanisme, ainsi que Vachette et Bricard selon la configuration de votre porte. Je vous oriente vers le modèle adapté après diagnostic, pas vers une marque par défaut.",
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
        <>
          <PriceReminder
            priceLabel="1 490 € TTC"
            note="Pose et réglage inclus, pour une porte standard. Devis confirmé avant intervention."
            locale="fr"
          />
          <section className="mx-auto max-w-4xl px-4 py-10">
            <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
              Marques de serrures que je pose
            </h2>
            <BrandsSection locale="fr" />
          </section>
        </>
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

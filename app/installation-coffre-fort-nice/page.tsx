import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/installation-coffre-fort-nice/" },
  title: "Installation de coffre-fort Nice – Serrurier | VAF",
  description:
    "Installation et fixation de coffre-fort à Nice : conseil sur le modèle, pose sécurisée au sol ou au mur. Devis annoncé avant intervention.",
};

const sections = [
  {
    heading: "Choisir le bon coffre-fort avant de l'installer",
    paragraphs: [
      "Un coffre-fort mal choisi ou mal fixé ne protège pas grand-chose. Avant l'installation, je vous aide à évaluer ce dont vous avez réellement besoin : niveau de résistance à l'effraction, protection incendie si nécessaire, et taille adaptée à ce que vous voulez y ranger.",
    ],
  },
  {
    heading: "Une fixation qui fait toute la différence",
    paragraphs: [
      "Un coffre-fort non fixé peut simplement être emporté lors d'un cambriolage, quel que soit son niveau de sécurité. Je scelle le coffre au sol ou au mur selon la configuration du logement, avec une fixation dimensionnée pour résister à un arrachement.",
    ],
  },
  {
    heading: "Emplacement et discrétion",
    paragraphs: [
      "L'emplacement compte autant que le modèle : un coffre visible dès l'entrée est une cible facile. Je vous conseille sur un emplacement discret et accessible, en tenant compte des contraintes de votre logement (placard, dressing, sous un escalier).",
    ],
  },
  {
    heading: "Comprendre les certifications A2P et EN 1143-1",
    paragraphs: [
      "En France, la certification A2P est délivrée par le CNPP (Centre national de prévention et de protection). Elle classe les coffres selon 1, 2 ou 3 étoiles, correspondant à une durée moyenne de résistance à l'effraction de 5, 10 ou 15 minutes. La norme européenne EN 1143-1, utilisée pour les coffres à usage professionnel comme pour certains modèles résidentiels haut de gamme, définit 7 classes de résistance, de 0 à VI.",
      "Ces classifications ne sont pas qu'un argument commercial : elles conditionnent directement les plafonds de garantie reconnus par les compagnies d'assurance. Je vous oriente vers le niveau de certification cohérent avec ce que vous souhaitez protéger, sans vous vendre plus cher que nécessaire.",
    ],
  },
  {
    heading: "L'impact d'un coffre certifié sur votre assurance",
    paragraphs: [
      "Sans coffre-fort déclaré, la plupart des contrats multirisques habitation plafonnent la couverture des bijoux et espèces à une fraction du capital mobilier, avec un plafond unitaire souvent limité à quelques milliers d'euros. Un coffre certifié permet généralement de relever sensiblement ce plafond. Les montants exacts dépendent entièrement de votre contrat et doivent être vérifiés auprès de votre assureur, mais la différence est réelle. Déclarer le coffre et son niveau de certification à votre assurance conditionne directement l'indemnisation en cas de vol.",
    ],
  },
];

const faq = [
  {
    question: "Faut-il vraiment fixer un coffre-fort au sol ou au mur ?",
    answer:
      "Oui, systématiquement. Un coffre non fixé peut être emporté entier lors d'un cambriolage, ce qui annule tout l'intérêt de son niveau de sécurité.",
  },
  {
    question: "Quel type de coffre-fort choisir pour un appartement ?",
    answer:
      "Cela dépend de ce que vous voulez protéger : documents, bijoux, espèces. Je vous conseille selon vos besoins réels plutôt que de vous orienter vers le modèle le plus cher.",
  },
  {
    question: "Installez-vous des coffres-forts avec protection incendie ?",
    answer:
      "Oui, selon le modèle choisi. Je vous explique la différence entre un coffre anti-effraction et un coffre ignifuge, et je peux vous orienter vers un modèle combinant les deux si nécessaire.",
  },
  {
    question: "Combien coûte l'installation d'un coffre-fort à Nice ?",
    answer:
      "Le tarif dépend du modèle, du poids du coffre et du type de fixation nécessaire. Je vous annonce un prix avant intervention, une fois la situation décrite.",
  },
  {
    question: "Pouvez-vous installer un coffre-fort que j'ai déjà acheté ?",
    answer:
      "Oui, je peux intervenir uniquement pour la pose et la fixation d'un coffre-fort que vous avez déjà, sans que vous ayez besoin de l'acheter via moi.",
  },
  {
    question: "Que veut dire un coffre-fort A2P 3 étoiles ?",
    answer:
      "C'est le niveau de certification A2P le plus élevé délivré par le CNPP pour les coffres résidentiels, correspondant à une durée moyenne de résistance à l'effraction d'environ 15 minutes selon les tests normalisés.",
  },
  {
    question: "Un coffre certifié change-t-il vraiment ma couverture d'assurance ?",
    answer:
      "Dans la majorité des cas, oui, mais les montants exacts dépendent entièrement de votre contrat. Je vous conseille de vérifier les plafonds indiqués par votre assureur avant de choisir le niveau de certification de votre coffre.",
  },
];

export default function InstallationCoffreFortNicePage() {
  return (
    <ServicePageTemplate
      h1="Installation de coffre-fort à Nice"
      lead="Choix du modèle, fixation sécurisée au sol ou au mur, emplacement discret : je vous accompagne pour que votre coffre-fort protège vraiment ce qu'il contient."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Installation de coffre-fort"
      path="/installation-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Coffre-fort à installer, prêt pour la fixation, à Nice",
      }}
      extra={
        <PriceReminder
          priceLabel="À partir de 299 € TTC"
          note="Prix ajusté selon le modèle et la fixation nécessaire"
          locale="fr"
        />
      }
      relatedServices={[
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

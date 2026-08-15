import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/ouverture-de-coffre-fort-nice/" },
  title: "Ouverture de coffre-fort Nice – Serrurier | VAF",
  description:
    "Coffre-fort bloqué, code oublié, clé perdue à Nice ? J'ouvre le coffre sans le détruire quand c'est possible. Devis annoncé avant intervention.",
};

const sections = [
  {
    heading: "Code oublié, clé perdue, coffre hérité",
    paragraphs: [
      "Un code de coffre-fort oublié, une clé perdue, ou un coffre hérité dont personne ne connaît plus la combinaison : ce sont les situations les plus fréquentes. Je commence toujours par identifier le modèle et la marque du coffre avant de choisir la méthode d'ouverture la plus adaptée.",
    ],
  },
  {
    heading: "Ouvrir sans détruire, quand c'est possible",
    paragraphs: [
      "Selon le mécanisme — serrure à clé, à combinaison mécanique ou électronique — je privilégie toujours une méthode qui préserve le coffre et permet de le remettre en service ensuite. Le perçage ou la découpe restent une solution de dernier recours, quand le mécanisme est bloqué de façon irréversible.",
    ],
  },
  {
    heading: "Une pièce d'identité systématiquement demandée",
    paragraphs: [
      "Avant toute ouverture de coffre-fort, je demande une pièce d'identité et un justificatif de votre lien avec le logement ou le bien concerné. C'est la même règle que pour l'ouverture d'une porte d'entrée verrouillée. Ce n'est pas une formalité superflue : c'est une garantie, pour vous comme pour moi, que je n'interviens pas sur un coffre qui ne vous appartient pas.",
    ],
  },
  {
    heading: "Coffre-fort hérité, une situation fréquente",
    paragraphs: [
      "Ouvrir le coffre-fort d'un proche décédé, sans code ni clé retrouvés, est une demande que je reçois régulièrement. Un justificatif de qualité d'héritier (acte de notoriété, ou à défaut le contact du notaire en charge de la succession) permet de sécuriser l'intervention avant même mon déplacement.",
    ],
  },
  {
    heading: "Après l'ouverture",
    paragraphs: [
      "Une fois le coffre ouvert, je vous explique l'état du mécanisme et je vous conseille sur la suite : réparation de la serrure existante, remplacement, ou passage à un modèle plus fiable si le mécanisme est trop endommagé pour être restauré.",
    ],
  },
];

const faq = [
  {
    question: "Pouvez-vous ouvrir un coffre-fort sans la clé ni le code ?",
    answer:
      "Dans la majorité des cas, oui, selon le modèle et le mécanisme. Je diagnostique la serrure avant de proposer une méthode d'ouverture adaptée, en privilégiant toujours la solution la moins destructive.",
  },
  {
    question: "L'ouverture d'un coffre-fort abîme-t-elle toujours la serrure ?",
    answer:
      "Non, pas systématiquement. Pour beaucoup de mécanismes, une ouverture fine est possible sans destruction. Le perçage n'intervient qu'en dernier recours, sur les mécanismes bloqués de façon irréversible.",
  },
  {
    question: "Intervenez-vous sur tous types de coffres-forts ?",
    answer:
      "J'interviens sur la plupart des coffres résidentiels à clé, à combinaison mécanique ou électronique. Pour les modèles très spécifiques ou les coffres de très haute sécurité, je vous le confirme après diagnostic.",
  },
  {
    question: "Combien coûte l'ouverture d'un coffre-fort à Nice ?",
    answer:
      "Le tarif dépend du modèle, du mécanisme et de la méthode nécessaire. Je vous annonce un prix avant intervention, une fois la situation décrite au téléphone.",
  },
  {
    question: "Intervenez-vous en urgence pour un coffre-fort bloqué ?",
    answer:
      "Oui, je suis disponible 24h/24 et 7j/7 pour ce type d'intervention comme pour le reste de mes services de serrurerie.",
  },
  {
    question: "Quels documents dois-je préparer pour l'ouverture de mon coffre-fort ?",
    answer:
      "Une pièce d'identité et un justificatif de votre lien avec le logement (bail, titre de propriété, facture à votre nom). C'est une vérification systématique, quelle que soit la situation.",
  },
  {
    question: "Comment ouvrir le coffre-fort d'un proche décédé ?",
    answer:
      "Un acte de notoriété ou les coordonnées du notaire en charge de la succession permettent de sécuriser l'intervention. N'hésitez pas à m'en parler au téléphone avant le déplacement, je vous indiquerai précisément ce qu'il faut préparer.",
  },
];

export default function OuvertureDeCoffreFortNicePage() {
  return (
    <ServicePageTemplate
      h1="Ouverture de coffre-fort à Nice"
      lead="Code oublié, clé perdue, coffre bloqué ou hérité : je diagnostique le mécanisme et j'ouvre votre coffre-fort en privilégiant toujours la méthode la moins destructive."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Ouverture de coffre-fort"
      path="/ouverture-de-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Coffre-fort à serrure électronique diagnostiqué par un serrurier à Nice",
      }}
      extra={
        <PriceReminder
          priceLabel="À partir de 299 € TTC"
          note="Prix ajusté selon le modèle et la méthode nécessaire"
          locale="fr"
        />
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez le modèle de coffre-fort si vous le connaissez, et la raison du blocage — code oublié, clé perdue, coffre hérité.",
        },
        {
          title: "Délai d'arrivée",
          text: "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
        },
        {
          title: "Diagnostic du mécanisme",
          text: "J'identifie le modèle et le type de mécanisme — à clé, combinaison mécanique ou électronique — pour choisir la méthode la moins destructive.",
        },
        {
          title: "Règlement",
          text: "Le prix confirmé avant l'ouverture est celui que vous payez, quelle que soit la méthode finalement nécessaire.",
        },
      ]}
      relatedServices={[
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

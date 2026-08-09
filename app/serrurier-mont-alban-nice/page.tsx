import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-mont-alban-nice/" },
  title: "Serrurier Mont Alban Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au Mont Alban, Nice : ouverture de porte, dépannage, changement de serrure. Devis annoncé avant intervention, disponible 24h/24.",
};

const intro = [
  "Le fort du Mont-Alban, construit entre 1557 et 1560 après le siège de Nice de 1543 sous l'impulsion du duc de Savoie Emmanuel-Philibert, verrouillait les hauteurs entre Nice et Villefranche-sur-Mer, protégeait la route du col et surveillait les côtes face à la frontière française. Ce monument rectangulaire de 40 sur 46 mètres, situé à 220 mètres d'altitude, reste l'un des rares exemples d'architecture militaire du milieu du XVIe siècle en France dans un aussi bon état de conservation.",
  "Occupé par diverses garnisons aux XVIIIe et XIXe siècles, puis utilisé comme poste de transmission militaire pendant la Seconde Guerre mondiale, le fort a été désaffecté et transféré à la ville de Nice en 2007, ouvert au public depuis pour des visites estivales. Le quartier du Mont Alban qui l'entoure est un secteur résidentiel boisé sur les hauteurs de l'est de Nice, voisin du Mont Boron, avec un habitat principalement composé de villas et de propriétés individuelles dans un cadre naturel préservé.",
];

const blocks = [
  {
    heading: "Autour du fort du XVIe siècle",
    paragraphs: [
      "Le fort du Mont-Alban, ouvert au public depuis 2007, domine un secteur résidentiel au patrimoine militaire remarquable. Les villas alentour bénéficient d'un panorama exceptionnel, entre la baie des Anges et la Riviera italienne.",
    ],
  },
  {
    heading: "Un secteur de villas et de propriétés individuelles",
    paragraphs: [
      "Au Mont Alban, l'essentiel du bâti est constitué de villas avec porte d'entrée individuelle. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un cadre naturel, un déplacement à anticiper",
    paragraphs: [
      "Le Mont Alban étant plus éloigné et vallonné, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes d'accès.",
    ],
  },
  {
    heading: "Sécurisation des propriétés",
    paragraphs: [
      "Pour les villas du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Mont Alban en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au Mont Alban comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous près du fort du Mont-Alban ?",
    answer:
      "Oui, tout ce secteur boisé autour du fort du XVIe siècle fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents au Mont Alban par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous des solutions de blindage pour les villas du secteur ?",
    answer:
      "Oui, selon l'état de votre porte, je peux vous orienter vers un blindage ou une serrure haute sécurité.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au Mont Alban ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierMontAlbanNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Mont Alban"
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-mont-alban-nice/"
      relatedServices={[
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

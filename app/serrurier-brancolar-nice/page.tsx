import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-brancolar-nice/" },
  title: "Serrurier Brancolar Nice – Nouveaux programmes | VAF",
  description:
    "Serrurier au Brancolar, Nice : personnalisation de cylindre sur logements neufs, dépannage sur grands ensembles. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrure à changer, porte qui bloque au Brancolar : j'interviens 24h/24 sur ce quartier en pleine transformation, aussi bien sur les nouveaux programmes résidentiels que sur les grands ensembles plus anciens. Sur les logements neufs de l'ancien site Enedis, j'interviens souvent pour la personnalisation d'un accès : ajout d'un cylindre Cisa plus résistant ou ajustement après une pose un peu rapide en sortie de chantier.",
  "L'avenue de Brancolar, qui donne son nom au quartier, a été ouverte au XIXe siècle dans le prolongement de Cimiez. Depuis le départ d'Enedis de son ancien site en 2021, le foncier a été racheté par Covivio pour développer un programme résidentiel ouvert sur un parc urbain. Le quartier mêle donc aujourd'hui immeubles collectifs plus anciens et nouveaux programmes en construction — deux réalités très différentes pour la serrurerie que je traite au quotidien.",
];

const blocks = [
  {
    heading: "Un quartier en pleine transformation urbaine",
    paragraphs: [
      "La reconversion de l'ancien site Enedis par Covivio change progressivement le visage du Brancolar, avec l'arrivée de nouveaux programmes résidentiels aux normes de sécurité récentes. Pour ces logements neufs, les demandes portent surtout sur la personnalisation des accès : ajout d'un cylindre plus résistant, remplacement d'une serrure d'origine standard par un modèle mieux certifié, ou petits ajustements après une pose parfois un peu rapide en sortie de chantier.",
    ],
  },
  {
    heading: "Le bâti historique du Brancolar",
    paragraphs: [
      "À côté de cette transformation, le quartier conserve ses grands ensembles d'habitat collectif plus anciens, où les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif depuis des décennies. Je diagnostique systématiquement l'état réel de la serrure avant de proposer une réparation ou un remplacement — beaucoup de pannes viennent d'un mécanisme simplement usé plutôt que d'une pièce à changer entièrement.",
    ],
  },
  {
    heading: "Sécuriser un appartement au Brancolar",
    paragraphs: [
      "Que ce soit après une perte de clés, une tentative d'effraction ou pour anticiper l'usure d'une serrure ancienne, je peux intervenir sur le remplacement complet de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre et le bâti le permettent.",
    ],
  },
  {
    heading: "Interventions en copropriété et halls d'immeuble",
    paragraphs: [
      "Pour les parties communes — halls d'entrée, digicodes, gâches électriques — j'interviens sur demande d'un syndic ou d'un résident mandaté. C'est une configuration fréquente dans ce quartier de grands ensembles, où une porte de hall mal réglée use sa serrure bien plus vite qu'une porte d'appartement classique.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Brancolar en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au Brancolar comme sur le reste de Nice, avec un délai habituel de 15 à 20 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes résidentiels du quartier ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements sur l'ancien site Enedis, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Pouvez-vous intervenir sur la porte d'entrée d'un immeuble ancien au Brancolar ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes des grands ensembles du quartier.",
  },
  {
    question: "Les tarifs sont-ils différents au Brancolar par rapport au centre de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Que faire si ma clé casse dans une serrure ancienne au Brancolar ?",
    answer:
      "J'extrais le morceau resté dans le cylindre et je vérifie s'il est encore compatible avec un remplacement simple, avant d'envisager un changement complet si le modèle est trop ancien pour trouver une pièce correspondante.",
  },
  {
    question: "Intervenez-vous après une effraction au Brancolar ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée 24h/24, puis je propose une solution durable une fois le diagnostic complet effectué sur place.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au Brancolar ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux — urgence ou non.",
  },
];

export default function SerrurierBrancolarNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Brancolar"
      sector="nord"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-brancolar-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

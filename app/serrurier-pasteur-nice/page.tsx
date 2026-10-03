import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-pasteur-nice/",
  title: "Serrurier Pasteur Nice – Urgence 24h/24 | VAF",
  description: "Serrurier au quartier Pasteur, Nice : dépannage près du pôle hospitalier, changement de serrure sur bâti mêlant ancien et récent. Devis annoncé, 24h/24.",
});

const intro = [
  "Clé cassée, porte claquée au quartier Pasteur : j'interviens 24h/24 dans ce secteur résidentiel dense, voisin du pôle hospitalier universitaire, où le passage important pousse parfois les résidents à renforcer leur porte d'entrée. Sur ce bâti varié entre immeubles anciens et constructions plus récentes, je pose le plus souvent un cylindre Picard ou Heraclès adapté au diagnostic effectué sur place.",
  "Le quartier est dominé par l'ancienne abbaye de Saint-Pons, détruite au XVIe siècle puis reconstruite en 1724 dans un style baroque en grande partie financé par Louis XIV, aujourd'hui intégrée à l'hôpital Pasteur. Le relogement de populations de la vieille ville en 1954 a entraîné une transformation urbaine rapide. Le projet Pasteur 2, un investissement de 550 millions d'euros, en a fait ensuite l'un des plus grands hôpitaux modernes construits en France, desservi par l'arrêt de tramway Hôpital Pasteur sur la ligne 1.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel dense",
    paragraphs: [
      "Les immeubles du quartier Pasteur demandent souvent un entretien régulier des serrures de hall et des cylindres d'appartement, soumis à un usage quotidien important.",
    ],
  },
  {
    heading: "Autour de l'abbaye de Saint-Pons et du CHU",
    paragraphs: [
      "Le voisinage immédiat de l'ancienne abbaye baroque et du pôle hospitalier universitaire génère un passage important dans certaines rues, ce qui pousse parfois les résidents à vouloir renforcer leur porte d'entrée.",
      "La ligne 1 du tramway, mise en service en 2007, a été prolongée en 2013 depuis Pont-Michel pour desservir directement le CHU Pasteur : un signe de l'accélération du désenclavement du quartier, qui accompagne aussi le renouvellement progressif du bâti que je constate sur le terrain.",
    ],
  },
  {
    heading: "Un secteur transformé depuis les années 1950",
    paragraphs: [
      "La transformation urbaine rapide du quartier depuis 1954 a créé un bâti varié, entre constructions de l'après-guerre et immeubles plus récents. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les immeubles du secteur, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Résidences proches du CHU Pasteur",
    paragraphs: [
      "Le quartier Pasteur, à l'est de Nice, doit une partie de son identité à la proximité du CHU Pasteur. Le secteur compte de nombreuses résidences collectives, occupées notamment par du personnel hospitalier aux horaires décalés. J'y interviens à toute heure pour les urgences comme pour l'entretien courant des portes de hall et digicodes.",
    ],
  },
  {
    heading: "Après une effraction : sécuriser d'abord, conserver les traces, garder la facture",
    paragraphs: [
      <>{"Après une tentative d'effraction ou un cambriolage, deux préoccupations se croisent : sécuriser la porte tout de suite et préserver ce qui servira au dossier. Avant que j'intervienne, évitez de toucher aux traces visibles, prenez quelques photos de la porte, du cylindre et du cadre, et prévenez votre assureur dans les délais prévus par votre contrat. Je sécurise la porte pour la nuit en protégeant l'accès, puis je propose une solution durable. Vous recevez une facture détaillée, qui sert de justificatif auprès de l'assurance. Je vous indique aussi ce que je constate sur la porte, ce qui aide à décrire le sinistre. La démarche est expliquée sur la page "}<Link href="/mise-en-securite-apres-effraction-nice/" className="text-steel underline">mise en sécurité après effraction</Link>{"."}</>,
    ],
  },
  {
    heading: "42 % des logements ont été construits depuis 1991",
    paragraphs: [
      "Dans le secteur « Pasteur », 42 % des résidences principales datent d'après 1991, contre 15 % à l'échelle de Nice, et 58 % des foyers sont locataires (recensement 2021 de l'INSEE). Dans un logement récent, la porte palière est le plus souvent équipée d'une serrure multipoints d'origine. Quand elle ferme mal ou qu'il faut forcer pour tourner la clé, la serrure elle-même est rarement en cause : l'alignement de la porte et de la gâche est le premier suspect. Je commence par là, ce qui évite de payer une serrure neuve qui forcerait aussi. Source : INSEE, recensement de la population 2021, secteur « Pasteur ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur les immeubles proches de l'hôpital Pasteur ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Intervenez-vous près de l'ancienne abbaye de Saint-Pons ?",
    answer:
      "Oui, tout ce secteur autour du monastère intégré à l'hôpital Pasteur fait partie de ma zone d'intervention habituelle.",
  },
];

export default function SerrurierPasteurNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Pasteur"
      crimeIntro="Le quartier Pasteur, proche du CHU, reste concerné par cette tendance comme le reste de l'est niçois."
      crimeClosing="Pour les résidents aux horaires décalés de ce secteur, une serrure fiable jour et nuit compte double."
      brandsIntro="Pour des résidents qui rentrent souvent à des horaires atypiques, la fiabilité du mécanisme jour et nuit compte autant que le prix."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-pasteur-nice/"
    />
  );
}

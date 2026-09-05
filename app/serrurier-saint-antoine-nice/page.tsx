import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-saint-antoine-nice/" },
  title: "Serrurier Saint-Antoine Nice – Village niçois | VAF",
  description:
    "Serrurier à Saint-Antoine-de-Ginestière, Nice : dépannage sur bâti villageois, sécurisation près de l'aéroport. Devis annoncé, 24h/24.",
};

const intro = [
  "Dépannage serrurier à Saint-Antoine : j'interviens 24h/24 sur ce quartier perché à l'ambiance villageoise préservée, entre maisons individuelles et petites résidences. Je diagnostique chaque situation avant de proposer un cylindre Vak ou Cisa adapté, avec la même méthode que pour les logements résidentiels proches des zones d'activité de l'aéroport.",
  "Saint-Antoine-de-Ginestière ressemble davantage à un village indépendant qu'à un secteur niçois, son histoire étant liée à celle de Jeanne, reine de Naples. L'église Saint-Antoine, cœur spirituel du quartier, a été construite en 1875. Le quartier compte aujourd'hui environ 3 000 habitants, avec un profil plutôt familial et une majorité de propriétaires, dans un cadre verdoyant à l'ambiance vivante, entre le chemin de Saint-Antoine, la route de Bellet et la Corniche Fleurie, non loin du parc Carol-de-Roumanie.",
];

const blocks = [
  {
    heading: "Un village niçois resté à part",
    paragraphs: [
      "L'ambiance villageoise de Saint-Antoine-de-Ginestière, préservée malgré l'expansion de Nice, se retrouve dans un bâti varié, entre maisons individuelles et petites résidences. Je m'adapte à chaque configuration avec le même soin de diagnostic.",
    ],
  },
  {
    heading: "Un secteur résidentiel et d'activité mêlés",
    paragraphs: [
      "Saint-Antoine combine logements résidentiels et proximité de zones d'activité liées à l'aéroport. Pour la partie serrurerie de ces biens, j'applique le même principe de diagnostic avant toute intervention.",
    ],
  },
  {
    heading: "Résidences et copropriétés",
    paragraphs: [
      <>
            Pour les résidences du secteur, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Un déplacement organisé selon la distance",
    paragraphs: [
      "Saint-Antoine étant à l'ouest de la ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la circulation sur les axes menant à ce secteur.",
    ],
  },
  {
    heading: "Dépannage résidentiel à Saint-Antoine",
    paragraphs: [
      "Saint-Antoine, secteur résidentiel à l'ouest de Nice proche du Var, compte un mélange d'immeubles collectifs et d'habitat individuel. Les interventions y couvrent tout le spectre habituel : porte claquée, changement de cylindre, sécurisation après une tentative d'effraction. Le prix annoncé reste identique à celui pratiqué sur le reste de la ville.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Saint-Antoine en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Saint-Antoine comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur des logements proches de l'aéroport ?",
    answer:
      "Oui, je diagnostique chaque situation avant de proposer réparation, remplacement de cylindre ou renforcement de la porte.",
  },
  {
    question: "Travaillez-vous avec les copropriétés de Saint-Antoine ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
  {
    question: "Intervenez-vous près de l'église Saint-Antoine, cœur du quartier ?",
    answer:
      "Oui, tout ce secteur au caractère villageois préservé fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents à Saint-Antoine par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir à Saint-Antoine ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSaintAntoineNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Saint-Antoine"
      crimeIntro="Saint-Antoine, secteur résidentiel à l'ouest proche du Var, suit la même évolution que le reste de la ville."
      crimeClosing="Sur ce mélange d'immeubles collectifs et d'habitat individuel, chaque configuration demande un diagnostic adapté."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-saint-antoine-nice/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

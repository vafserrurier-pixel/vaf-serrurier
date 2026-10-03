import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-baumettes-nice/",
  title: "Serrurier Baumettes Nice – Dépannage 24h/24 | VAF",
  description: "Serrurier aux Baumettes, Nice : sécurisation de villas, réparation de serrures anciennes près du musée Jules-Chéret. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrure bloquée, porte qui ferme mal aux Baumettes : j'interviens 24h/24 sur ce secteur résidentiel de caractère, aussi bien pour une villa que pour un appartement en immeuble ancien. Beaucoup de propriétés ici datent du passé de lieu de villégiature du quartier, avec des serrures principales qu'il faut souvent adapter plutôt que remplacer d'office, je pose généralement un cylindre Heraclès ou Picard compatible avec le mécanisme existant.",
  "Le nom des Baumettes vient du niçois « bauma » (grotte). Ce quartier rural resté longtemps à l'écart de la vieille ville était surnommé le « petit Paris » par les Niçois. Son joyau reste le musée des Beaux-Arts Jules-Chéret, installé depuis 1878 dans le vaste domaine néoclassique de la princesse Elisabeth Kotschoubey. Ce passé de villégiature explique la présence de nombreuses villas et propriétés de caractère où mon expertise sur les serrures anciennes sert le plus souvent, entre le boulevard François-Grosso et la rue de France.",
];

const blocks = [
  {
    heading: "Sécurisation des villas et propriétés de caractère",
    paragraphs: [
      "Le secteur des Baumettes comprend des immeubles anciens et des villas héritées de son passé de lieu de villégiature, dont les portes et serrures méritent une attention particulière. Je privilégie la réparation ou l'adaptation d'un cylindre compatible avant d'envisager un remplacement complet.",
      "La ville de Nice a racheté la villa de la princesse Kotschoubey en 1926, sa finition ayant été confiée à l'architecte Constantin Scala : le musée y a ouvert ses portes en 1928, avec des collections allant de la peinture flamande du XVIIe siècle aux œuvres de Fragonard, Dufy ou Rodin. Ce type de bâtisse patrimoniale demande le même soin sur les accès que sur les collections qu'elle abrite.",
    ],
  },
  {
    heading: "Dépannage près du musée Jules-Chéret",
    paragraphs: [
      "Le secteur proche du musée des Beaux-Arts conserve un cadre résidentiel calme et arboré, avec des propriétés parfois anciennes où je privilégie systématiquement une solution respectueuse du bâti d'origine.",
    ],
  },
  {
    heading: "Changement de serrure après perte de clés",
    paragraphs: [
      "Après une perte de clés ou pour anticiper une usure avancée, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les immeubles du quartier, j&apos;interviens sur les portes de hall, digicodes et gâches électriques, à la demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté.
          </>,
    ],
  },
  {
    heading: "Dépannage calme dans le secteur résidentiel des Baumettes",
    paragraphs: [
      "Les Baumettes, à l'ouest du centre-ville près du musée des Beaux-Arts, restent un secteur résidentiel plutôt calme, mêlant villas et petits immeubles bourgeois. Les interventions y sont surtout programmées : changement de serrure vieillissante, renforcement d'une porte d'entrée, plutôt que des urgences à répétition. Le diagnostic reste le même quel que soit le contexte.",
    ],
  },
  {
    heading: "Partir plusieurs semaines : fermer à clé et ne rien laisser dehors",
    paragraphs: [
      "Avant un long départ, deux gestes comptent plus que tout. Le premier : fermer la porte à clé, et pas seulement la tirer. Une porte simplement claquée n'est tenue que par son pêne demi-tour, alors que le tour de clé engage le pêne dormant. Le second : ne laisser aucune clé de secours cachée sous un pot, un paillasson ou dans une boîte aux lettres, des endroits que tout le monde connaît. Si quelqu'un doit arroser les plantes ou relever le courrier, confiez-lui un double plutôt qu'une cachette. Profitez-en pour vérifier que la clé tourne sans forcer : une serrure qui résiste avant de partir risque de bloquer au retour. Un cylindre qui force se règle ou se change en avance, pas la veille du départ.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur des immeubles anciens de caractère ?",
    answer:
      "Oui, je privilégie la réparation ou l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte d'origine.",
  },
  {
    question: "Intervenez-vous près du musée des Beaux-Arts Jules-Chéret ?",
    answer:
      "Oui, tout ce secteur résidentiel autour du musée fait partie de ma zone d'intervention habituelle.",
  },
];

export default function SerrurierBaumettesNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Baumettes"
      crimeIntro="Les Baumettes, secteur résidentiel plus calme à l'ouest du centre, restent concernées par cette évolution à l'échelle de la ville."
      crimeClosing="Sur les villas comme sur les petits immeubles du secteur, un diagnostic préventif reste le meilleur réflexe."
      brandsIntro="Sur les villas et immeubles de caractère hérités du passé de villégiature des Baumettes, je privilégie une approche qui respecte la porte d'origine."
      sector="centre"
      intro={intro}
      blocks={blocks}
      travelEstimate="10 à 20 minutes selon la circulation"
      faq={faq}
      path="/serrurier-baumettes-nice/"
    />
  );
}

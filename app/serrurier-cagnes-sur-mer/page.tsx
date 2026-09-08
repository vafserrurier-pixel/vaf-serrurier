import type { Metadata } from "next";
import CommunePageTemplate from "@/components/CommunePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-cagnes-sur-mer/" },
  title: "Serrurier à Cagnes-sur-Mer – Urgence 24h/24 | VAF",
  description:
    "Serrurier à Cagnes-sur-Mer (06) : dépannage, ouverture de porte, changement de serrure. Devis annoncé avant intervention, 24h/24.",
};

const intro = [
  "J'interviens à Cagnes-sur-Mer aussi bien dans les ruelles du Haut-de-Cagnes que sur le front de mer du Cros-de-Cagnes ou dans le centre-ville, pour tout type de serrurerie : porte claquée, cylindre à changer, ou sécurisation d'un logement.",
  "La méthode reste la même partout : je diagnostique la situation au téléphone, j'annonce un prix avant de me déplacer, et je m'adapte au bâti réel une fois sur place, qu'il s'agisse d'une porte ancienne du village perché ou d'un appartement récent près du front de mer.",
];

const blocks = [
  {
    heading: "Le Haut-de-Cagnes, village médiéval perché",
    paragraphs: [
      "Cagnes-sur-Mer, deuxième commune la plus peuplée des Alpes-Maritimes après Nice avec environ 53 300 habitants, garde dans ses hauteurs un village fortifié construit autour du château Grimaldi, édifié au XIVe siècle par Rainier Grimaldi. Racheté par la commune en 1939, le château abrite aujourd'hui le musée de l'Olivier. Ses ruelles pavées en pente, ses passages voûtés et ses escaliers fleuris ont attiré de nombreux artistes au XXe siècle, dont Renoir, ce qui vaut au quartier le surnom de « Montmartre de la Côte d'Azur ».",
      "Sur ce bâti ancien, je diagnostique systématiquement le mécanisme avant d'intervenir, pour préserver autant que possible une porte qui a traversé les siècles plutôt que de la remplacer par réflexe.",
    ],
  },
  {
    heading: "Le Cros-de-Cagnes, entre pêcheurs et front de mer",
    paragraphs: [
      "Le Cros-de-Cagnes, ancien village de pêcheurs devenu quartier balnéaire, dispose de sa propre gare SNCF et concentre une part importante des résidences de vacances et locations saisonnières de la commune. J'y interviens régulièrement pour des portes claquées entre deux locations ou des serrures exposées à l'air marin, qui use les mécanismes plus vite qu'ailleurs.",
    ],
  },
  {
    heading: "Un centre-ville moderne autour de l'hippodrome",
    paragraphs: [
      "Le centre-ville et les quartiers autour de l'hippodrome de la Côte d'Azur, ouvert en 1960, concentrent l'essentiel des résidences plus récentes et des commerces de la commune. J'y interviens sur des serrures multipoints et des digicodes d'immeuble, selon les mêmes règles que partout ailleurs : diagnostic avant intervention, prix annoncé avant de commencer.",
    ],
  },
];

const safetyParagraph =
  "Je n'ai pas trouvé de statistique officielle de cambriolages spécifique à la commune de Cagnes-sur-Mer. Elle fait partie du département des Alpes-Maritimes, où le taux moyen de cambriolages était de 0,43 % des logements en 2025 selon les chiffres du ministère de l'Intérieur — un repère régional plutôt qu'une donnée précise pour Cagnes-sur-Mer. Les résidences secondaires et locations saisonnières du Cros-de-Cagnes, plus nombreuses ici que dans le centre de Nice, restent statistiquement des cibles recherchées lors des périodes d'absence. Une serrure certifiée A2P et une porte en bon état réduisent nettement le risque, quelle que soit la commune.";

const faq = [
  {
    question: "Intervenez-vous aussi bien dans le Haut-de-Cagnes qu'au Cros-de-Cagnes ?",
    answer:
      "Oui, je me déplace sur l'ensemble de la commune, que ce soit dans les ruelles du village perché, sur le front de mer ou dans le centre-ville.",
  },
  {
    question: "Pouvez-vous intervenir sur une porte ancienne du Haut-de-Cagnes ?",
    answer:
      "Oui, je diagnostique le mécanisme avant d'intervenir, pour préserver autant que possible une porte ancienne plutôt que de la remplacer systématiquement.",
  },
  {
    question: "Intervenez-vous pour des locations saisonnières au Cros-de-Cagnes ?",
    answer:
      "Oui, je peux intervenir rapidement en cas de porte claquée ou de problème de serrure entre deux locations, pour des propriétaires ou des gestionnaires de biens.",
  },
  {
    question: "Quel est votre délai d'intervention à Cagnes-sur-Mer ?",
    answer:
      "Généralement 15 à 20 minutes depuis mon point de départ à Nice, selon la circulation. Je vous donne une estimation précise au téléphone.",
  },
  {
    question: "Donnez-vous un devis avant de vous déplacer jusqu'à Cagnes-sur-Mer ?",
    answer:
      "Oui, toujours. Le prix est annoncé au téléphone avant le déplacement, quelle que soit la commune.",
  },
];

export default function SerrurierCagnesSurMerPage() {
  return (
    <CommunePageTemplate
      commune="Cagnes-sur-Mer"
      intro={intro}
      blocks={blocks}
      travelEstimate="15-20 min"
      safetyParagraph={safetyParagraph}
      faq={faq}
      path="/serrurier-cagnes-sur-mer/"
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

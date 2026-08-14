import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-secteur-bellet-nice/" },
  title: "Serrurier Secteur Bellet Nice – Domaines viticoles | VAF",
  description:
    "Serrurier au secteur Bellet, Nice (Crémat, Saint-Roman-de-Bellet, Ventabren) : sécurisation de maisons isolées et domaines viticoles. Devis annoncé, 24h/24.",
};

const intro = [
  "Serrurier au secteur Bellet : j'interviens sur ce territoire le plus rural et le plus vallonné de Nice, avec un délai réaliste annoncé dès l'appel compte tenu des routes de collines. Les hameaux sont composés presque exclusivement de maisons individuelles, parfois isolées au milieu des vignes : je pose généralement un cylindre Fichet ou Heraclès adapté, avec possibilité de blindage complet selon l'état du bâti.",
  "Le vignoble de Bellet, seule appellation d'origine contrôlée urbaine de France, remonte au IVe siècle avant J.-C., quand les Phocéens y implantèrent leurs premières vignes. En 1941, dix propriétaires obtinrent de l'INAO la création de l'AOC Bellet, l'une des toutes premières de France. Le secteur regroupe aujourd'hui les hameaux de Crémat, Saint-Roman-de-Bellet et Ventabren, sur des terrasses surplombant la rive gauche du Var entre 200 et 400 mètres d'altitude.",
];

const blocks = [
  {
    heading: "Le seul vignoble AOC urbain de France",
    paragraphs: [
      "Les domaines viticoles de l'appellation Bellet, dont l'histoire remonte à l'Antiquité, comptent des bâtisses et des accès parfois anciens. Je diagnostique chaque situation en tenant compte de ce patrimoine rural unique à l'échelle de Nice.",
    ],
  },
  {
    heading: "Un secteur rural et vallonné",
    paragraphs: [
      "Les hameaux du secteur Bellet sont composés presque exclusivement de maisons individuelles, parfois isolées, au milieu des vignes et des collines. Le diagnostic tient compte de cet environnement particulier, plus rural que le reste de Nice.",
    ],
  },
  {
    heading: "Un déplacement à anticiper largement",
    paragraphs: [
      "Ce secteur étant le plus éloigné et le plus escarpé que je couvre, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte des routes de collines et de la distance depuis mon point de départ.",
    ],
  },
  {
    heading: "Sécurisation des maisons isolées",
    paragraphs: [
      "Pour les maisons plus isolées du secteur, je peux intervenir sur le remplacement de la serrure principale, l'installation d'un cylindre plus résistant, ou un blindage si la porte le permet.",
    ],
  },
  {
    heading: "Propriétés viticoles isolées du secteur Bellet",
    paragraphs: [
      "Le secteur Bellet, sur les collines qui portent l'appellation viticole du même nom, reste rural et peu dense, avec des propriétés et domaines parfois isolés. J'y interviens sur des portails d'accès longs, des portes de dépendance ou d'habitation principale, en tenant compte d'un délai plus long que dans le centre-ville pour organiser le déplacement.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous à Crémat, Saint-Roman-de-Bellet et Ventabren ?",
    answer:
      "Oui, je couvre l'ensemble du secteur Bellet, avec un délai d'intervention plus long que dans le centre-ville compte tenu de la distance et du relief.",
  },
  {
    question: "Intervenez-vous rapidement dans le secteur Bellet en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7, avec un délai habituel de 30 à 45 minutes selon la circulation et l'accès exact du hameau concerné.",
  },
  {
    question: "Intervenez-vous sur les domaines viticoles de l'appellation Bellet ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, quelle que soit la configuration du domaine.",
  },
  {
    question: "Les tarifs sont-ils différents dans le secteur Bellet par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs de base sont identiques sur l'ensemble de Nice. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Intervenez-vous sur des maisons isolées ou des domaines viticoles ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement, quelle que soit la configuration de la propriété.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans le secteur Bellet ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierSecteurBelletNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Secteur Bellet"
      crimeIntro="Le secteur Bellet, sur les collines viticoles, n'est pas à l'abri de cette évolution malgré son caractère rural et isolé."
      crimeClosing="Les propriétés et domaines de ce secteur, parfois isolés, gagnent à sécuriser portails et dépendances autant que l'habitation principale."
      sector="ouest"
      intro={intro}
      blocks={blocks}
      travelEstimate="30 à 45 minutes selon la circulation et l'accès"
      faq={faq}
      path="/serrurier-secteur-bellet-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

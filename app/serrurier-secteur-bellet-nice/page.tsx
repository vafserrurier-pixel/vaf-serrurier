import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-secteur-bellet-nice/" },
  title: "Serrurier Secteur Bellet Nice – Dépannage 24h/24 | VAF",
  description:
    "Serrurier au secteur Bellet, Nice (Crémat, Saint-Roman-de-Bellet, Ventabren) : ouverture de porte, dépannage, changement de serrure. 24h/24.",
};

const intro = [
  "Le vignoble de Bellet, seule appellation d'origine contrôlée urbaine de France implantée entièrement sur une grande agglomération, remonte au IVe siècle avant J.-C., quand les Phocéens y implantèrent leurs premières vignes. Sous la Révolution, le hameau de Saint-Roman-de-Bellet, cœur de l'appellation, fut même rebaptisé « Bacchus » en hommage à cette vocation viticole ancestrale. Le phylloxéra puis les deux guerres mondiales entraînèrent une chute spectaculaire des surfaces plantées, les producteurs se tournant alors vers la culture de l'œillet de Nice, plus lucrative.",
  "En 1941, alors que le vignoble ne comptait plus que 60 hectares morcelés, dix propriétaires convaincus obtinrent de l'INAO la création de l'appellation d'origine contrôlée Bellet, l'une des toutes premières AOC viticoles de France. Depuis les années 1990, de nouvelles générations relancent les plantations, souvent en agriculture biologique, pour privilégier qualité et typicité. Le secteur Bellet regroupe aujourd'hui les hameaux de Crémat, Saint-Roman-de-Bellet et Ventabren, sur des terrasses surplombant la rive gauche du Var entre 200 et 400 mètres d'altitude — le secteur le plus rural et le plus vallonné du territoire niçois.",
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

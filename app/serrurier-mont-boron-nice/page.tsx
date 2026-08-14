import type { Metadata } from "next";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-mont-boron-nice/" },
  title: "Serrurier Mont Boron Nice – Villas vue mer | VAF",
  description:
    "Serrurier au Mont Boron, Nice : sécurisation de villas de standing, systèmes de sécurité avancés. Devis annoncé, intervention 24h/24.",
};

const intro = [
  "Serrurier au Mont Boron : j'interviens 24h/24 sur ce secteur résidentiel huppé, avec un soin particulier pour les villas souvent équipées de systèmes de sécurité plus avancés que la moyenne. Je pose généralement un cylindre Fichet ou Cisa haute sécurité, adapté aux portes principales comme aux portails et accès secondaires de ces propriétés avec vue mer.",
  "Cette colline culminant à 191 mètres abrite plusieurs vestiges militaires remarquables : une batterie du XIXe siècle au Cap de Nice, et le fort voisin du Mont Alban du XVIe siècle. Au pied de la colline se trouvent aussi la grotte préhistorique du Lazaret et le site archéologique de Terra Amata découvert en 1966. Ce cadre verdoyant classé au patrimoine explique la présence de nombreuses résidences de standing, dont le bâti demande une approche sur mesure.",
];

const blocks = [
  {
    heading: "Un secteur au patrimoine militaire et préhistorique",
    paragraphs: [
      "Entre les vestiges de batteries du XIXe siècle et la proximité du fort du Mont Alban, ce secteur conserve un patrimoine remarquable. Les propriétés qui l'entourent bénéficient souvent d'un cadre naturel préservé, ce qui n'empêche pas les mêmes besoins classiques de serrurerie.",
    ],
  },
  {
    heading: "Villas et propriétés individuelles",
    paragraphs: [
      "Sur le Mont Boron, une grande partie du bâti est constituée de villas avec porte d'entrée principale, parfois un portail et un accès secondaire. Je diagnostique chaque configuration avant de proposer une solution de sécurisation cohérente avec le bien.",
    ],
  },
  {
    heading: "Résidences de standing",
    paragraphs: [
      "Le quartier compte aussi des résidences avec parties communes sécurisées, digicode et parfois gardiennage. J'interviens sur ces équipements en complément des serrures d'appartement.",
    ],
  },
  {
    heading: "Un secteur excentré, un déplacement organisé",
    paragraphs: [
      "Le Mont Boron étant plus éloigné du centre-ville, je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et de la circulation.",
    ],
  },
  {
    heading: "Villas de prestige et portails du Mont Boron",
    paragraphs: [
      "Le Mont Boron, colline résidentielle surplombant la baie des Anges, concentre des villas de prestige avec portails, grilles d'enceinte et systèmes de fermeture souvent plus élaborés que la moyenne. J'interviens sur ces équipements extérieurs comme sur la porte d'entrée elle-même, en recommandant des solutions robustes adaptées à ce type de propriété individuelle.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement au Mont Boron en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 au Mont Boron comme sur le reste de Nice, avec un délai habituel de 20 à 30 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les portes de villas avec vue mer ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou renforcement complet de la porte.",
  },
  {
    question: "Travaillez-vous avec les résidences de standing du secteur ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et équipements des parties communes.",
  },
  {
    question: "Intervenez-vous près du fort du Mont Alban ou de la pointe du Cap de Nice ?",
    answer:
      "Oui, tout ce secteur résidentiel entre le fort et le Cap de Nice fait partie de ma zone d'intervention habituelle.",
  },
  {
    question: "Les tarifs sont-ils différents au Mont Boron par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir au Mont Boron ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierMontBoronNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Mont Boron"
      crimeIntro="Le Mont Boron, secteur résidentiel huppé aux villas isolées, n'est pas à l'abri de cette évolution malgré son cadre préservé."
      crimeClosing="Sur ce type de propriété individuelle, portails et grilles d'enceinte méritent la même attention que la porte d'entrée."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="20 à 30 minutes selon la circulation"
      faq={faq}
      path="/serrurier-mont-boron-nice/"
      relatedServices={[
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}

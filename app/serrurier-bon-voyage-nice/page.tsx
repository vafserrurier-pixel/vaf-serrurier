import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-bon-voyage-nice/",
  title: "Serrurier Bon Voyage Nice – Changement entre locataires | VAF",
  description: "Serrurier au quartier Bon Voyage, Nice : changement de serrure entre deux locataires, dépannage sur immeubles collectifs. Devis annoncé, 24h/24.",
});

const intro = [
  "Serrurier à Bon Voyage : j'interviens 24h/24 dans ce quartier résidentiel sur les hauteurs proches du port, où le turnover locatif plus élevé que la moyenne génère des demandes fréquentes de changement de serrure entre deux locataires. Je pose généralement un cylindre Vak ou Picard neuf après un état des lieux, avec la même transparence sur le tarif que la demande vienne d'un propriétaire ou d'un locataire.",
  "Développé pour l'essentiel au XXe siècle autour de sa cité de transition, Bon Voyage mêle aujourd'hui immeubles collectifs et quelques villas, avec environ 3 900 habitants au profil plutôt jeune (34 ans en moyenne) et majoritairement locataire. Ce profil démographique explique la fréquence des demandes liées aux changements de locataires, une configuration que je connais bien, entre la rue Fenoglio-de-Briga, la rue Général-Tordo et la route de Turin.",
];

const blocks = [
  {
    heading: "Un quartier résidentiel sur les hauteurs de l'est",
    paragraphs: [
      "Le secteur de Bon Voyage comprend des immeubles collectifs et quelques villas individuelles. Le diagnostic reste systématique, qu'il s'agisse d'une serrure d'appartement ou d'une porte de maison.",
    ],
  },
  {
    heading: "Un quartier au profil locatif marqué",
    paragraphs: [
      "Avec une majorité de résidents locataires, les serrures et cylindres du quartier changent plus souvent de main : état des lieux, remise de clés, changement de serrure entre deux locataires. C'est une configuration que je connais bien, avec la même transparence sur le tarif.",
    ],
  },
  {
    heading: "Sécurisation des logements",
    paragraphs: [
      "Après une perte de clés ou un simple constat d'usure, je propose des solutions adaptées : remplacement de cylindre, serrure multipoints, ou renforcement complet selon l'état de votre porte.",
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
    heading: "Résidences collectives du quartier Bon Voyage",
    paragraphs: [
      "Bon Voyage, secteur résidentiel à l'est de Nice proche du port, compte plusieurs résidences collectives construites entre les années 1960 et 1980. J'y interviens couramment sur les portes de hall, les cylindres de porte palière et les boîtes aux lettres collectives, à la demande de résidents ou de syndics de copropriété.",
    ],
  },
  {
    heading: "Des clés qu'on ne duplique pas n'importe où : le cylindre à clé protégée",
    paragraphs: [
      "Dans un logement loué, les doubles se multiplient : locataire, conjoint, famille, agence. Avec une clé ordinaire, n'importe quel magasin peut en faire une copie en quelques minutes. Les cylindres à clé protégée changent cela : les clés sont fournies avec une carte de propriété, et seul le titulaire de la carte peut en commander d'autres. Pour un propriétaire bailleur, c'est un moyen de savoir combien de clés existent ; pour un locataire, de ne pas voir le nombre de doubles lui échapper. Un tel cylindre est plus coûteux qu'un modèle standard, et tout le monde n'en a pas besoin. Je vous dis, selon la porte et l'usage, si ce niveau d'équipement a un intérêt dans votre cas.",
    ],
  },
  {
    heading: "Logement social : ce qui change quand le bailleur est propriétaire",
    paragraphs: [
      "Dans le secteur « Bon Voyage », 75 % des foyers sont locataires et 57 % des résidences principales sont des logements sociaux loués vides, contre 12 % à l'échelle de Nice (INSEE, recensement 2021). Quand le logement appartient à un bailleur, la question de la serrure se règle avec lui : il peut exiger d'être prévenu avant un changement, et le bail précise en général ce qui est à la charge de l'occupant. En cas d'urgence, une porte qui ne ferme plus ou une clé perdue, je sécurise d'abord. Vous gardez ensuite la facture détaillée pour la présenter à votre bailleur. Source : INSEE, recensement de la population 2021, secteur « Bon Voyage ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous rapidement à Bon Voyage en cas d'urgence ?",
    answer:
      "Oui, je me déplace 24h/24 et 7j/7 à Bon Voyage comme sur le reste de Nice, avec un délai habituel de 15 à 25 minutes selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas du secteur ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée.",
  },
  {
    question: "Intervenez-vous pour un changement de serrure entre deux locataires ?",
    answer:
      "Oui, c'est une demande fréquente à Bon Voyage où le turnover locatif est plus élevé que la moyenne. Je peux intervenir rapidement entre un état des lieux de sortie et d'entrée.",
  },
  {
    question: "Travaillez-vous avec les copropriétés du quartier ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques.",
  },
];

export default function SerrurierBonVoyageNicePage() {
  return (
    <QuartierPageTemplate
      quartier="Bon Voyage"
      crimeIntro="Bon Voyage, secteur résidentiel proche du port, suit la même évolution que le reste de l'est niçois."
      crimeClosing="Sur les résidences collectives de ce secteur, la sécurisation des halls d'entrée reste un point de vigilance partagé."
      brandsIntro="Entre un changement de serrure express pour un nouveau locataire et l'entretien d'un immeuble plus ancien, je m'adapte à chaque situation de ce quartier au turnover marqué."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-bon-voyage-nice/"
    />
  );
}

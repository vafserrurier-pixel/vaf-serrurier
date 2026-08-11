import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-ouest/" },
  title: "Serrurier Nice Ouest – Tous quartiers | VAF",
  description:
    "Serrurier dans l'ouest de Nice : Fabron, Saint-Isidore, l'Arénas, Carras et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const intro = [
  "Porte claquée, cylindre grippé dans l'ouest de Nice : j'interviens 24h/24 sur ce secteur le plus contrasté de la ville, avec généralement un cylindre Fichet ou Vak adapté selon la configuration. Fabron, prisé dès le XIXe siècle par les grandes familles niçoises fortunées, conserve le souvenir du château mauresque du duc de Saxe-Cobourg-Gotha dans son parc Carol-de-Roumanie. Juste en contrebas, Carras était encore au XVIIIe siècle un modeste village de pêcheurs. Californie, de son côté, doit son nom au tout premier meeting aérien de Nice, organisé en 1910.",
  "Plus loin, l'Arénas, ancien lieu de corridas devenu premier centre d'affaires international des Alpes-Maritimes en 1989, côtoie le pôle hospitalier de L'Archet, inauguré en 1979. Les Moulins, de leur côté, construits entre 1965 et 1976, bénéficient depuis 2009 d'un programme de renouvellement urbain d'ampleur. Aux confins de la ville, Saint-Isidore garde la mémoire d'un ancien relais de diligences. Lingostière s'étend dans la vallée du Var. Le secteur de Bellet, enfin, cultive depuis l'Antiquité la seule appellation viticole urbaine de France.",
  "Cette diversité se retrouve dans les besoins en serrurerie : portes de villas et de maisons individuelles, serrures multipoints de résidences plus récentes, mise en sécurité après effraction dans les zones plus isolées comme Lingostière ou Bellet. Je me déplace dans l'ensemble de ce secteur avec la même exigence de transparence que sur le reste de Nice. Diagnostic par téléphone, prix annoncé avant intervention, et disponibilité 24h/24 pour les urgences.",
];

const blocks = [
  {
    heading: "Sécurisation de villas, du château de Fabron au village de Carras",
    paragraphs: [
      "Les villas héritées des grandes propriétés du XIXe siècle à Fabron, les anciennes maisons de pêcheurs de Carras et le bâti né de l'essor aéronautique de Californie donnent à ce littoral ouest une grande variété de portes et de serrures à diagnostiquer. Je m'adapte à chaque configuration, de la villa de caractère à la résidence balnéaire plus récente.",
    ],
  },
  {
    heading: "Un pôle d'affaires et un pôle hospitalier",
    paragraphs: [
      "L'Arénas, premier quartier d'affaires de la Côte d'Azur depuis 1989, et le pôle hospitalier de L'Archet, ouvert en 1979, ont des besoins de serrurerie spécifiques : accès professionnels, portes de bureaux, résidences proches d'un établissement de santé. J'interviens avec le même professionnalisme sur ces locaux que sur un logement.",
    ],
  },
  {
    heading: "Des grands ensembles en renouvellement urbain",
    paragraphs: [
      "Le quartier des Moulins, construit dans les années 1960-1970, connaît depuis 2009 un programme de renouvellement urbain qui transforme progressivement son bâti. J'interviens aussi bien sur les immeubles plus anciens que sur les nouveaux programmes résidentiels.",
    ],
  },
  {
    heading: "Des secteurs plus ruraux, un déplacement à anticiper",
    paragraphs: [
      "Saint-Isidore, Lingostière et le secteur viticole de Bellet sont les zones les plus excentrées et les plus rurales que je couvre. Je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance réelle et de l'accès, plutôt qu'une estimation optimiste.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers de l'ouest de Nice couvrez-vous ?",
    answer:
      "L'ensemble du secteur : L'Archet, Saint-Antoine, Fabron, Carras, Californie, Les Moulins, Corniche Fleurie, l'Arénas, Saint-Isidore, Lingostière et le secteur Bellet. Le détail complet est listé sur cette page.",
  },
  {
    question: "Intervenez-vous rapidement dans l'ouest de Nice ?",
    answer:
      "Oui, avec un délai habituel de 20 à 30 minutes pour la plupart des quartiers, et jusqu'à 45 minutes pour les secteurs les plus excentrés comme Lingostière ou Bellet, selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les villas de Fabron ou de Californie ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement de cylindre ou renforcement complet de la porte, avec une attention particulière pour le bâti de caractère.",
  },
  {
    question: "Intervenez-vous sur des locaux professionnels à l'Arénas ?",
    answer:
      "Oui, pour la partie serrurerie de ces locaux (porte d'entrée, cylindre, renforcement), selon le même principe de diagnostic et de devis annoncé.",
  },
  {
    question: "Les tarifs sont-ils différents dans l'ouest par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs de base sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans l'ouest de Nice ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierNiceOuestPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Ouest"
      sectorKey="ouest"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.ouest}
      path="/serrurier-nice-ouest/"
    />
  );
}

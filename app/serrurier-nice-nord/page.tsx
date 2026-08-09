import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-nord/" },
  title: "Serrurier Nice Nord – Tous quartiers | VAF",
  description:
    "Serrurier dans le nord de Nice : Brancolar, Gairaut, Rimiez, Pessicart et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const intro = [
  "Serrurier dans le nord de Nice : j'interviens 24h/24 sur ce secteur qui grimpe sur les collines prolongeant Cimiez, avec généralement un cylindre Heraclès ou Fichet adapté aux villas comme aux grands ensembles. Rimiez a suivi le même essor Belle Époque que Cimiez, le quartier des Poètes s'est développé dans les années 1920 sur l'ancien domaine horticole des Dames de l'Assomption, et le parc Chambrun conserve le souvenir d'un domaine de plaisance du XIXe siècle. Plus au nord, la cascade de Gairaut, construite en 1883, domine un secteur longtemps agricole.",
  "Saint-Pancrace et sa chapelle du XVIIe siècle témoignent d'un passé rural de vignes et de cultures méditerranéennes, tandis que Pessicart, mentionné dès le cadastre napoléonien de 1812, est devenu un quartier résidentiel calme apprécié pour sa vue sur la ville. Le Brancolar, enfin, connaît depuis le départ d'Enedis de son ancien site en 2021 une transformation urbaine avec de nouveaux programmes résidentiels.",
  "C'est un secteur qui mêle grands ensembles d'habitat collectif, résidences familiales et villas sur les hauteurs, où le relief ne pose pas de difficulté particulière pour un déplacement rapide depuis mon point de départ. Comme partout à Nice, j'annonce un prix avant toute intervention, urgence de nuit ou projet programmé.",
];

const blocks = [
  {
    heading: "Réparation de serrures dans le prolongement résidentiel de Cimiez",
    paragraphs: [
      "Rimiez et le quartier des Poètes partagent avec Cimiez tout proche une partie de leur histoire Belle Époque, avec des immeubles de standing et des villas dont les serrures méritent parfois plus d'attention qu'un simple remplacement standard. Je privilégie systématiquement la réparation quand elle est possible.",
    ],
  },
  {
    heading: "Des grands ensembles en transformation",
    paragraphs: [
      "Le Brancolar connaît une transformation urbaine progressive depuis le départ d'Enedis en 2021, avec l'arrivée de nouveaux programmes résidentiels aux côtés des grands ensembles plus anciens. J'interviens sur ces deux réalités très différentes, du diagnostic d'une serrure vieillissante à la personnalisation d'un cylindre récent.",
    ],
  },
  {
    heading: "Un secteur de villas et de maisons individuelles",
    paragraphs: [
      "Gairaut, Saint-Pancrace, Pessicart et la Corniche des Oliviers comptent une part importante de villas et de propriétés individuelles, dans un cadre plus rural et verdoyant que le reste de Nice. Je diagnostique la serrure en place et propose une solution cohérente, de la réparation au renforcement complet.",
    ],
  },
  {
    heading: "Un relief à anticiper, un délai réaliste",
    paragraphs: [
      "Les hauteurs du nord niçois demandent généralement un peu plus de temps de trajet que le centre-ville. Je vous donne un délai d'intervention réaliste dès l'appel, en tenant compte de la distance et des routes de collines.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers du nord de Nice couvrez-vous ?",
    answer:
      "L'ensemble du secteur : Brancolar, Poètes, Chambrun, Gairaut, Rimiez, Saint-Pancrace, Corniche des Oliviers et Pessicart. Le détail complet est listé sur cette page.",
  },
  {
    question: "Intervenez-vous rapidement dans le nord de Nice ?",
    answer:
      "Oui, avec un délai habituel de 15 à 30 minutes selon le quartier et la circulation, 24h/24 et 7j/7.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes résidentiels du Brancolar ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements sur l'ancien site Enedis, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Intervenez-vous sur les villas des hauteurs comme Gairaut ou Saint-Pancrace ?",
    answer:
      "Oui, je diagnostique la serrure en place avant de proposer réparation, remplacement ou renforcement de la porte d'entrée, quelle que soit la configuration de la propriété.",
  },
  {
    question: "Les tarifs sont-ils différents dans le nord par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans le nord de Nice ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierNiceNordPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Nord"
      sectorKey="nord"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.nord}
      path="/serrurier-nice-nord/"
    />
  );
}

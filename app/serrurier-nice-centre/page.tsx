import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-centre/" },
  title: "Serrurier Nice Centre – Tous quartiers | VAF",
  description:
    "Serrurier dans tout le centre de Nice : Jean-Médecin, Libération, Cimiez, Vieux-Nice et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const intro = [
  "Besoin d'un serrurier dans le centre de Nice ? J'interviens 24h/24 sur l'ensemble de ce secteur dense, du Vieux-Nice à Cimiez en passant par le Carré d'Or. Sur les portes anciennes, je privilégie généralement un cylindre Fichet ou Picard compatible, plutôt qu'un remplacement qui dénaturerait ces façades soignées. Le centre concentre la plus grande variété de bâti ancien de la ville, de l'Antiquité romaine à la Belle Époque. À Cimiez, les arènes du Ier siècle témoignent de l'ancienne cité de Cemenelum. Dans le Vieux-Nice, le cours Saleya accueille son marché depuis 1861.",
  "Entre ces deux extrêmes, le centre s'est construit couche après couche. On y trouve la place Garibaldi, ancienne place royale sarde de 1782, l'avenue Jean-Médecin tracée en 1864, ou encore le Carré d'Or et son Hôtel des Postes de 1888, place Wilson. C'est un secteur dense, où se côtoient immeubles Belle Époque, grands ensembles plus récents comme le Brancolar voisin, et quartiers populaires au passé cosmopolite comme La Madeleine ou la Libération.",
  "J'interviens dans l'ensemble de ce secteur avec la même méthode qu'ailleurs à Nice : diagnostic par téléphone, puis prix annoncé avant intervention. Le déplacement reste généralement rapide, compte tenu de la position centrale de ces quartiers par rapport à mon point de départ au 2 Rue Antoine Gautier.",
];

const blocks = [
  {
    heading: "Réparation de serrures anciennes dans tout le centre",
    paragraphs: [
      "Du Vieux-Nice aux immeubles bourgeois du Carré d'Or et de Cimiez, le centre concentre la plus grande variété de bâti ancien de toute la ville. On y trouve des portes et serrures d'époque, des halls de copropriété classés ou très soignés, des façades qui imposent une approche respectueuse plutôt qu'un remplacement standard. Je privilégie systématiquement la réparation et l'adaptation d'un cylindre compatible quand c'est possible.",
    ],
  },
  {
    heading: "Dépannage nocturne dans un secteur qui ne dort jamais",
    paragraphs: [
      "Entre les bars du quartier du port voisin, l'animation de la place Garibaldi et du cours Saleya, et les grands axes commerçants de Jean-Médecin, le centre de Nice reste actif tard le soir. J'y interviens régulièrement pour des urgences nocturnes — porte claquée, clé perdue, sécurisation après effraction — avec la majoration de nuit annoncée avant intervention.",
    ],
  },
  {
    heading: "Des copropriétés de toutes tailles",
    paragraphs: [
      "Petits immeubles du Vieux-Nice, grandes copropriétés Belle Époque du Carré d'Or ou de Cimiez, résidences plus récentes de Magnan ou de la Promenade des Anglais : j'interviens sur toutes ces configurations. Portes de hall, digicodes et gâches électriques, à la demande d'un syndic ou d'un résident mandaté.",
    ],
  },
  {
    heading: "Une position centrale, un déplacement rapide",
    paragraphs: [
      "Mon point de départ au 2 Rue Antoine Gautier se trouve au cœur de ce secteur. Je peux donc généralement intervenir plus rapidement dans le centre que dans les zones plus excentrées de Nice, urgence ou projet programmé.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers du centre de Nice couvrez-vous ?",
    answer:
      "L'ensemble du centre : Jean-Médecin, Carré d'Or, Cimiez, Vieux-Nice, Garibaldi, Libération, Gambetta, Carabacel, Parc Impérial, Promenade des Anglais, Magnan et tous les quartiers environnants. Le détail complet est listé sur cette page.",
  },
  {
    question: "Intervenez-vous rapidement dans le centre de Nice ?",
    answer:
      "Oui, la position centrale de mon point de départ me permet généralement d'intervenir en 10 à 20 minutes dans la plupart des quartiers du centre, 24h/24 et 7j/7.",
  },
  {
    question: "Savez-vous intervenir sur les immeubles anciens du Vieux-Nice ou du Carré d'Or ?",
    answer:
      "Oui, c'est une grande partie de mon activité dans ce secteur. Je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte ancienne.",
  },
  {
    question: "Les tarifs sont-ils différents dans le centre par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville, avec la même majoration de nuit et de week-end partout. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Travaillez-vous avec les copropriétés et les syndics du centre-ville ?",
    answer:
      "Oui, sur demande d'un syndic ou d'un résident mandaté, pour les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans le centre de Nice ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierNiceCentrePage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Centre"
      sectorKey="centre"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.centre}
      path="/serrurier-nice-centre/"
    />
  );
}

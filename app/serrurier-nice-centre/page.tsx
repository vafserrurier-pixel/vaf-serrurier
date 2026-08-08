import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-centre/" },
  title: "Serrurier Nice Centre – Tous quartiers | VAF",
  description:
    "Serrurier dans tout le centre de Nice : Jean-Médecin, Libération, Cimiez, Vieux-Nice et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const paragraphs = [
  "Le centre de Nice regroupe la majorité des quartiers où j'interviens le plus souvent : du secteur de la gare à Jean-Médecin jusqu'aux ruelles du Vieux-Nice, en passant par Cimiez, Libération, Carabacel ou la Promenade des Anglais. C'est un secteur dense, avec des immeubles d'époques très différentes, de l'Art déco du Carré d'Or aux résidences plus récentes de Magnan.",
  "Les repères bien connus comme la place Masséna, l'hôtel Negresco ou la Promenade des Anglais se situent au cœur ou à proximité de ce secteur — je m'y déplace régulièrement, aussi bien pour des urgences en pleine nuit que pour des projets programmés comme un changement de serrure ou l'installation d'une porte blindée.",
  "Que vous soyez au Carré d'Or, à Cimiez, à Desambrois, à la Libération ou dans le Vieux-Nice, la méthode reste la même : un diagnostic par téléphone, un prix annoncé avant intervention, et un déplacement rapide compte tenu de la position centrale de ces quartiers par rapport à mon point de départ au 2 Rue Antoine Gautier.",
];

export default function SerrurierNiceCentrePage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Centre"
      paragraphs={paragraphs}
      quartiers={zones.centre}
      path="/serrurier-nice-centre/"
    />
  );
}

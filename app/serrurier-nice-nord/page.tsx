import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-nord/" },
  title: "Serrurier Nice Nord – Tous quartiers | VAF",
  description:
    "Serrurier dans le nord de Nice : Brancolar, Gairaut, Rimiez, Pessicart et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const paragraphs = [
  "Le nord de Nice regroupe des quartiers situés sur les hauteurs de la ville : Brancolar, Gairaut, Rimiez, Saint-Pancrace, Pessicart, Chambrun ou encore le secteur des Poètes. On y trouve un mélange de grands ensembles d'habitat collectif, de résidences familiales et de zones plus résidentielles à flanc de colline.",
  "Le relief du secteur ne pose pas de difficulté particulière pour un déplacement rapide depuis mon point de départ. Les besoins les plus fréquents concernent le dépannage de serrures d'immeuble, le remplacement de cylindres usés, et la sécurisation de portes d'entrée dans les résidences collectives.",
  "Comme partout à Nice, j'annonce un prix avant toute intervention, que ce soit pour une urgence de nuit ou un projet de changement de serrure programmé à l'avance.",
];

export default function SerrurierNiceNordPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Nord"
      paragraphs={paragraphs}
      quartiers={zones.nord}
      path="/serrurier-nice-nord/"
    />
  );
}

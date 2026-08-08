import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-est/" },
  title: "Serrurier Nice Est – Tous quartiers | VAF",
  description:
    "Serrurier dans l'est de Nice : Riquier, le Port, Mont Boron, l'Ariane et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const paragraphs = [
  "L'est de Nice couvre les quartiers du Port et de Riquier jusqu'aux hauteurs du Mont Boron et du Mont Alban, en passant par Pasteur, Saint-Roch, l'Ariane et Bon Voyage. C'est un secteur varié, entre immeubles du port historique, résidences plus récentes et quartiers résidentiels excentrés.",
  "Le quartier du Port, à proximité du palais des expositions Acropolis, connaît un bâti mêlant immeubles anciens et constructions plus modernes, avec des besoins en serrurerie tout aussi variés : portes d'entrée d'immeuble, digicodes de hall, serrures d'appartement ancien à réparer plutôt qu'à remplacer systématiquement.",
  "J'interviens dans l'ensemble de ce secteur avec la même méthode qu'ailleurs à Nice : diagnostic par téléphone, prix annoncé avant intervention, et déplacement organisé selon l'urgence de la situation.",
];

export default function SerrurierNiceEstPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Est"
      paragraphs={paragraphs}
      quartiers={zones.est}
      path="/serrurier-nice-est/"
    />
  );
}

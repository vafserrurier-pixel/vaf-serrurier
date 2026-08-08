import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-ouest/" },
  title: "Serrurier Nice Ouest – Tous quartiers | VAF",
  description:
    "Serrurier dans l'ouest de Nice : Fabron, Saint-Isidore, l'Arénas, Carras et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const paragraphs = [
  "L'ouest de Nice s'étend de Saint-Antoine et Fabron jusqu'aux secteurs plus excentrés de l'Arénas, Saint-Isidore, Lingostière et Bellet, en passant par Carras, Californie et les Moulins. C'est un secteur qui mêle résidences pavillonnaires, immeubles collectifs et zones plus rurales à l'approche de la campagne niçoise.",
  "Cette diversité se retrouve dans les besoins en serrurerie : portes de maisons individuelles, serrures multipoints de résidences plus récentes, ou encore mise en sécurité après effraction dans les zones plus isolées comme Lingostière ou le secteur de Bellet.",
  "Je me déplace dans l'ensemble de ce secteur avec la même exigence de transparence que sur le reste de Nice : diagnostic par téléphone, prix annoncé avant intervention, et disponibilité 24h/24 pour les urgences.",
];

export default function SerrurierNiceOuestPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Ouest"
      paragraphs={paragraphs}
      quartiers={zones.ouest}
      path="/serrurier-nice-ouest/"
    />
  );
}

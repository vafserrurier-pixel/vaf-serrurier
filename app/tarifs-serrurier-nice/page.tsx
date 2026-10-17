import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, offerSchema } from "@/lib/schema";
import { cardsByLocale } from "@/lib/pricingCards";
import TarifsBody from "./TarifsBody";
import { faqFr } from "./faqFr";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/tarifs-serrurier-nice/",
  title: "Prix serrurier Nice 2026 : tarifs fixes, déplacement compris",
  description: "Prix serrurier à Nice : porte claquée 149 € (189 € la nuit), cylindre posé dès 249 €. Prix fixes, déplacement compris, à Nice et alentour. Sur place en 30 min.",
});

export default function TarifsSerrurierNicePage() {
  const url = `${business.domain}/tarifs-serrurier-nice/`;
  const pricedCards = cardsByLocale.fr.filter(
    (card): card is typeof card & { priceValue: number; priceType: "fixed" | "startingFrom" } =>
      card.priceValue !== undefined && card.priceType !== undefined
  );

  return (
    <>
      <JsonLd data={faqSchema(faqFr)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Tarifs", url },
        ])}
      />
      {pricedCards.map((card) => (
        <JsonLd
          key={card.title}
          data={offerSchema({
            name: card.seoTitle ?? card.title,
            url,
            priceValue: card.priceValue,
            priceType: card.priceType,
          })}
        />
      ))}
      <TarifsBody />
    </>
  );
}

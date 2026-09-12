"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { CheckIcon } from "./Icons";
import { cardsByLocale } from "@/lib/pricingCards";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    mostRequested: "Le plus demandé",
    call: "Appeler pour ce tarif",
    nightSurcharge: "+50% après 19h, le week-end et les jours fériés",
    note: "Pièces remplacées facturées en supplément, toujours annoncées avant accord. Remplacement de serrure complète : sur devis, annoncé avant intervention. Prix indicatifs pour les situations standards.",
    tabFeatured: "Les plus demandés",
    tabAll: "Tous les tarifs",
  },
  en: {
    mostRequested: "Most requested",
    call: "Call for this rate",
    nightSurcharge: "+50% after 7pm, on weekends and public holidays",
    note: "Replaced parts billed separately, always quoted before you agree. Full lock replacement: quoted on assessment, announced before work starts. Indicative prices for standard situations.",
    tabFeatured: "Most requested",
    tabAll: "All prices",
  },
};

const travelNotes: Record<Locale, string> = {
  fr: "Déplacement inclus sur Nice",
  en: "Travel included within Nice",
};

export default function PricingTable({
  locale = "fr",
  travelLabel,
  useSeoTitles = false,
}: {
  locale?: Locale;
  /**
   * Remplace "sur Nice"/"within Nice" par un texte adapté (ex. "jusqu'à 30
   * minutes de route") sur les pages hors Nice : le déplacement reste inclus
   * dans les mêmes conditions (confirmé par Benoît, même seuil de 30 min),
   * seule la mention géographique change pour rester exacte.
   */
  travelLabel?: string;
  /** Utilise card.seoTitle (mot-clé enrichi) pour le H3 au lieu de card.title. Réservé à /tarifs-serrurier-nice/. */
  useSeoTitles?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const cards = travelLabel
    ? cardsByLocale[locale].map((card) => ({
        ...card,
        features: card.features.map((f) =>
          f === travelNotes[locale]
            ? (locale === "en" ? `Travel included ${travelLabel}` : `Déplacement inclus ${travelLabel}`)
            : f
        ),
      }))
    : cardsByLocale[locale];
  const t = strings[locale];
  return (
    <div>
      <div className="flex justify-center gap-2 mb-6">
        <button
          type="button"
          onClick={() => setShowAll(false)}
          className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
            !showAll
              ? "bg-navy text-cream border-navy"
              : "bg-white text-slate border-navy/10 hover:border-steel"
          }`}
        >
          {t.tabFeatured}
        </button>
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
            showAll
              ? "bg-navy text-cream border-navy"
              : "bg-white text-slate border-navy/10 hover:border-steel"
          }`}
        >
          {t.tabAll}
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl p-5 flex-col ${!showAll && !card.featured ? "hidden" : "flex"} ${
              card.highlight
                ? "bg-navy text-cream shadow-lg ring-2 ring-urgent"
                : "bg-white text-navy border border-navy/10"
            }`}
          >
            {card.highlight && (
              <span className="inline-block self-start bg-urgent text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                {t.mostRequested}
              </span>
            )}
            <h3 className="font-heading font-semibold mb-1">
              {useSeoTitles && card.seoTitle ? card.seoTitle : card.title}
            </h3>
            <p className="font-tabular-nums text-2xl font-bold mb-1">
              {card.price}
              {card.unit && (
                <span
                  className={`text-sm font-normal ml-1 ${
                    card.highlight ? "text-cream/70" : "text-slate"
                  }`}
                >
                  {card.unit}
                </span>
              )}
            </p>
            <p
              className={`text-xs mb-4 ${card.highlight ? "text-cream/70" : "text-slate"}`}
            >
              {t.nightSurcharge}
            </p>
            <ul className="flex flex-col gap-2 mb-5 flex-1">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckIcon
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      card.highlight ? "text-cream" : "text-steel"
                    }`}
                  />
                  <span className={card.highlight ? "text-cream/90" : "text-slate"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={business.phone.href}
              className={`text-center text-sm font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90 ${
                card.highlight ? "bg-urgent text-white" : "bg-cream text-navy border border-navy/10"
              }`}
            >
              {t.call}
            </a>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate p-4 mt-2">{t.note}</p>
    </div>
  );
}

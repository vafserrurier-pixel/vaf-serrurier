"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { CheckIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

type Card = {
  title: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: boolean;
  featured?: boolean;
};

const cardsByLocale: Record<Locale, Card[]> = {
  fr: [
    {
      title: "Porte claquée",
      price: "149 €",
      unit: "TTC",
      features: [
        "Ouverture sans casse quand c'est possible",
        "Contrôle de fermeture après intervention",
        "Déplacement inclus sur Nice",
      ],
      highlight: true,
      featured: true,
    },
    {
      title: "Porte verrouillée (cylindre européen)",
      price: "149 €",
      unit: "TTC",
      features: [
        "Configuration adaptée à votre serrure",
        "Tests finaux de fermeture",
        "Déplacement inclus sur Nice",
      ],
      featured: true,
    },
    {
      title: "Porte verrouillée (serrure Fichet)",
      price: "189 €",
      unit: "TTC",
      features: [
        "Méthode adaptée aux serrures renforcées",
        "Précautions pour limiter les dégâts",
        "Déplacement inclus sur Nice",
      ],
    },
    {
      title: "Changement de cylindre standard",
      price: "à partir de 249 €",
      unit: "TTC",
      features: [
        "Déplacement et main d'œuvre inclus",
        "Cylindre européen adapté à votre porte",
        "Clés neuves remises sur place",
      ],
      featured: true,
    },
    {
      title: "Changement de cylindre haute sécurité",
      price: "Sur devis",
      features: [
        "Marques premium (Fichet) : toujours sur devis",
        "Diagnostic de votre porte sur place",
        "Prix confirmé avant toute intervention",
      ],
    },
    {
      title: "Serrure 5 points en applique carénée",
      price: "1 490 €",
      unit: "TTC",
      features: [
        "Pose et réglage de la serrure inclus",
        "Compatible avec la plupart des portes existantes",
        "Devis confirmé avant intervention",
      ],
    },
    {
      title: "Installation porte blindée",
      price: "à partir de 2 689 €",
      unit: "TTC",
      features: [
        "Prix pour une porte de taille standard",
        "Bloc-porte ou blindage avec serrure 5 points en applique",
        "Devis sur place systématique avant tout engagement",
      ],
      featured: true,
    },
    {
      title: "Coffre-fort (ouverture et installation)",
      price: "à partir de 299 €",
      unit: "TTC",
      features: [
        "Ouverture sans destruction quand c'est possible",
        "Installation et fixation au sol ou au mur",
        "Prix ajusté selon le modèle sur place",
      ],
    },
    {
      title: "Installation de poignée blindée",
      price: "369 €",
      unit: "TTC",
      features: [
        "Déplacement et main d'œuvre inclus",
        "Compatible avec la plupart des portes blindées",
        "Tests de fermeture après la pose",
      ],
    },
  ],
  en: [
    {
      title: "Door slammed shut",
      price: "€149",
      unit: "incl. VAT",
      features: [
        "Opened without damage when possible",
        "Closing checked after the callout",
        "Travel included within Nice",
      ],
      highlight: true,
      featured: true,
    },
    {
      title: "Door locked (European cylinder)",
      price: "€149",
      unit: "incl. VAT",
      features: [
        "Method matched to your lock",
        "Final closing tests",
        "Travel included within Nice",
      ],
      featured: true,
    },
    {
      title: "Door locked (Fichet lock)",
      price: "€189",
      unit: "incl. VAT",
      features: [
        "Method suited to reinforced locks",
        "Precautions to limit damage",
        "Travel included within Nice",
      ],
    },
    {
      title: "Standard cylinder replacement",
      price: "from €249",
      unit: "incl. VAT",
      features: [
        "Travel and labor included",
        "European cylinder matched to your door",
        "New keys handed over on site",
      ],
      featured: true,
    },
    {
      title: "High-security cylinder replacement",
      price: "Quoted on assessment",
      features: [
        "Premium brands (Fichet): always quoted",
        "On-site diagnosis of your door",
        "Price confirmed before any work",
      ],
    },
    {
      title: "5-point rim lock (shrouded)",
      price: "€1,490",
      unit: "incl. VAT",
      features: [
        "Fitting and adjustment included",
        "Compatible with most existing doors",
        "Quote confirmed before work",
      ],
    },
    {
      title: "Security door installation",
      price: "from €2,689",
      unit: "incl. VAT",
      features: [
        "Price for a standard door size",
        "Door block or reinforcement with 5-point rim lock",
        "On-site quote always required before any commitment",
      ],
      featured: true,
    },
    {
      title: "Safe (opening and installation)",
      price: "from €299",
      unit: "incl. VAT",
      features: [
        "Non-destructive opening when possible",
        "Fitting and fixing to floor or wall",
        "Price adjusted to the model on site",
      ],
    },
    {
      title: "Armored handle installation",
      price: "€369",
      unit: "incl. VAT",
      features: [
        "Travel and labor included",
        "Compatible with most security doors",
        "Closing tests after fitting",
      ],
    },
  ],
};

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
}: {
  locale?: Locale;
  /**
   * Remplace "sur Nice"/"within Nice" par un texte adapté (ex. "jusqu'à 30
   * minutes de route") sur les pages hors Nice — le déplacement reste inclus
   * dans les mêmes conditions (confirmé par Benoît, même seuil de 30 min),
   * seule la mention géographique change pour rester exacte.
   */
  travelLabel?: string;
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
            <p className="font-heading font-semibold mb-1">{card.title}</p>
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

import { business } from "@/lib/business";
import { CheckIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

type Card = {
  title: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: boolean;
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
    },
    {
      title: "Porte verrouillée",
      price: "149 €",
      unit: "TTC",
      features: [
        "Configuration adaptée à votre serrure",
        "Tests finaux de fermeture",
        "Déplacement inclus sur Nice",
      ],
    },
    {
      title: "Porte blindée verrouillée",
      price: "189 €",
      unit: "TTC",
      features: [
        "Méthode adaptée aux serrures renforcées",
        "Précautions pour limiter les dégâts",
        "Déplacement inclus sur Nice",
      ],
    },
    {
      title: "Remplacement de cylindre",
      price: "249 €",
      unit: "TTC",
      features: [
        "Déplacement et main d'œuvre inclus",
        "Cylindre européen adapté à votre porte",
        "Clés neuves remises sur place",
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
    },
    {
      title: "Door locked",
      price: "€149",
      unit: "incl. VAT",
      features: [
        "Method matched to your lock",
        "Final closing tests",
        "Travel included within Nice",
      ],
    },
    {
      title: "Locked security door",
      price: "€189",
      unit: "incl. VAT",
      features: [
        "Method suited to reinforced locks",
        "Precautions to limit damage",
        "Travel included within Nice",
      ],
    },
    {
      title: "Cylinder replacement",
      price: "€249",
      unit: "incl. VAT",
      features: [
        "Travel and labor included",
        "European cylinder matched to your door",
        "New keys handed over on site",
      ],
    },
  ],
};

const strings = {
  fr: {
    mostRequested: "Le plus demandé",
    call: "Appeler pour ce tarif",
    nightSurcharge: "+50% après 19h, le week-end et les jours fériés",
    note: "Pièces remplacées facturées en supplément, toujours annoncées avant accord. Remplacement de serrure complète, installation ou blindage de porte : sur devis, annoncé avant intervention. Prix indicatifs pour les situations standards.",
  },
  en: {
    mostRequested: "Most requested",
    call: "Call for this rate",
    nightSurcharge: "+50% after 7pm, on weekends and public holidays",
    note: "Replaced parts billed separately, always quoted before you agree. Full lock replacement, door installation or reinforcement: quoted on assessment, announced before work starts. Indicative prices for standard situations.",
  },
};

export default function PricingTable({ locale = "fr" }: { locale?: Locale }) {
  const cards = cardsByLocale[locale];
  const t = strings[locale];
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl p-5 flex flex-col ${
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

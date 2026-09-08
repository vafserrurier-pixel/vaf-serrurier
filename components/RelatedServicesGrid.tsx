import Link from "next/link";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import type { Locale } from "@/lib/locale";

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

export default function RelatedServicesGrid({
  items,
  locale = "fr",
  lieu,
}: {
  items: { href: string; label: string }[];
  locale?: Locale;
  /** Nom du quartier/commune à injecter dans les descriptions ("à Cagnes-sur-Mer"). */
  lieu?: string;
}) {
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const card = cards[item.href];
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group block bg-white border border-navy/10 rounded-xl p-5 hover:border-steel hover:shadow-sm transition-all"
          >
            {card && (
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream text-steel mb-3">
                <card.Icon className="w-5 h-5" />
              </span>
            )}
            <p className="font-heading font-semibold text-navy mb-1.5">{item.label}</p>
            {card && <p className="text-sm text-slate leading-relaxed">{card.text(place)}</p>}
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-3 group-hover:gap-2 transition-all">
              {moreLabel[locale]}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

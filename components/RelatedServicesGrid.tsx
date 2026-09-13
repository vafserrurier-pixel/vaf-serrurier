import Link from "next/link";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import { mainServicesByLocale } from "@/lib/relatedServicesDefault";
import type { Locale } from "@/lib/locale";

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

const FEATURED_COUNT = 3;

export default function RelatedServicesGrid({
  items,
  locale = "fr",
  lieu,
  excludeHref,
}: {
  /** Liste de services à afficher. Par défaut (non fournie), affiche la liste canonique des 10 services (voir lib/relatedServicesDefault.ts) : ne passer une liste différente que pour un cas explicitement justifié. */
  items?: { href: string; label: string }[];
  locale?: Locale;
  /** Nom du quartier/commune à injecter dans les descriptions ("à Cagnes-sur-Mer"). */
  lieu?: string;
  /** Href de la page courante, à exclure de la liste (une page service ne doit jamais se lister elle-même comme "autre intervention"). */
  excludeHref?: string;
}) {
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";
  const list = (items ?? mainServicesByLocale[locale]).filter((item) => item.href !== excludeHref);
  const featured = list.slice(0, FEATURED_COUNT);
  const rest = list.slice(FEATURED_COUNT);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {featured.map((item) => {
          const card = cards[item.href];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-white border border-navy/10 rounded-2xl p-6 sm:p-8 hover:border-steel hover:shadow-sm transition-all"
            >
              {card && (
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream text-steel mb-4">
                  <card.Icon className="w-6 h-6" />
                </span>
              )}
              <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.label}</h3>
              {card && <p className="text-sm text-slate leading-relaxed">{card.text(place)}</p>}
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-4 group-hover:gap-2 transition-all">
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

      {rest.length > 0 && (
        <div className="mt-6 pt-6 border-t border-navy/10 flex flex-wrap gap-2.5">
          {rest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-steel bg-cream hover:bg-steel/10 border border-navy/10 rounded-full px-4 py-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import { mainServicesByLocale } from "@/lib/relatedServicesDefault";
import type { Locale } from "@/lib/locale";

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

export default function ServiceGrid({
  locale = "fr",
  lieu,
}: {
  locale?: Locale;
  /** Nom du lieu à injecter dans les descriptions ("à Nice Centre"). Par défaut "Nice". */
  lieu?: string;
}) {
  const services = mainServicesByLocale[locale];
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {services.map(({ href, label }) => {
        const card = cards[href];
        return (
          <Link
            key={href}
            href={href}
            className="group relative block bg-navy/40 rounded-xl border border-cream/15 p-5 pt-6 hover:border-cream/40 hover:bg-navy/60 transition-colors"
          >
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream/15 text-cream mb-3">
              <card.Icon className="w-5 h-5" />
            </span>
            <h3 className="font-heading font-semibold text-cream mb-1.5">{label}</h3>
            <p className="text-sm text-cream/70 leading-relaxed mb-3">{card.text(place)}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-cream group-hover:gap-2 transition-all">
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

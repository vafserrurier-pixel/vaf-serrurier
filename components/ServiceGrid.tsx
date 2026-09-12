import Link from "next/link";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import type { Locale } from "@/lib/locale";

const hrefsByLocale = {
  fr: [
    "/depannage-serrurier-nice/",
    "/ouverture-de-porte-nice/",
    "/changement-serrure-nice/",
    "/installation-porte-blindee-nice/",
    "/mise-en-securite-apres-effraction-nice/",
    "/ouverture-de-coffre-fort-nice/",
    "/installation-coffre-fort-nice/",
  ],
  en: [
    "/depannage-serrurier-nice/",
    "/ouverture-de-porte-nice/",
    "/changement-serrure-nice/",
    "/installation-porte-blindee-nice/",
    "/mise-en-securite-apres-effraction-nice/",
    "/ouverture-de-coffre-fort-nice/",
    "/installation-coffre-fort-nice/",
  ],
};

const titlesByLocale: Record<Locale, Record<string, string>> = {
  fr: {
    "/depannage-serrurier-nice/": "Dépannage serrurier",
    "/ouverture-de-porte-nice/": "Ouverture de porte",
    "/changement-serrure-nice/": "Changement de serrure",
    "/installation-porte-blindee-nice/": "Porte blindée",
    "/mise-en-securite-apres-effraction-nice/": "Après effraction",
    "/ouverture-de-coffre-fort-nice/": "Ouverture de coffre-fort",
    "/installation-coffre-fort-nice/": "Installation de coffre-fort",
  },
  en: {
    "/depannage-serrurier-nice/": "Emergency callout",
    "/ouverture-de-porte-nice/": "Door opening",
    "/changement-serrure-nice/": "Lock change",
    "/installation-porte-blindee-nice/": "Security door",
    "/mise-en-securite-apres-effraction-nice/": "After a break-in",
    "/ouverture-de-coffre-fort-nice/": "Safe opening",
    "/installation-coffre-fort-nice/": "Safe installation",
  },
};

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

export default function ServiceGrid({
  locale = "fr",
  lieu,
}: {
  locale?: Locale;
  /** Nom du lieu à injecter dans les descriptions ("à Nice Centre"). Par défaut "Nice". */
  lieu?: string;
}) {
  const hrefs = hrefsByLocale[locale];
  const titles = titlesByLocale[locale];
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {hrefs.map((href) => {
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
            <h3 className="font-heading font-semibold text-cream mb-1.5">{titles[href]}</h3>
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

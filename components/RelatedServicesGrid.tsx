import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import { mainServicesByLocale, defaultFeaturedHrefs, featuredOverridesByHref } from "@/lib/relatedServicesDefault";
import { CylinderMotif } from "./BrandMotif";
import type { Locale } from "@/lib/locale";

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

function ArrowLink({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold mt-1 group-hover:gap-2 transition-all">
      {children}
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
  );
}

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
  const featuredHrefs = (excludeHref && featuredOverridesByHref[excludeHref]) || defaultFeaturedHrefs;
  const featured = featuredHrefs
    .map((href) => list.find((item) => item.href === href))
    .filter((item): item is { href: string; label: string } => Boolean(item));
  const featuredSet = new Set(featured.map((item) => item.href));
  const rest = list.filter((item) => !featuredSet.has(item.href));

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-3">
        {featured.map((item) => {
          const card = cards[item.href];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block h-60 sm:h-64 overflow-hidden rounded-2xl border border-navy/10 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {card?.image ? (
                <>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="font-heading font-bold text-white text-xl leading-snug mb-1">{item.label}</h3>
                    <ArrowLink>
                      <span className="text-white">{moreLabel[locale]}</span>
                    </ArrowLink>
                  </div>
                </>
              ) : (
                <div className="relative h-full bg-navy p-6 flex flex-col">
                  <CylinderMotif
                    className="pointer-events-none absolute -right-8 -bottom-10 w-36 h-36 text-cream opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-200"
                  />
                  <div className="relative flex flex-col h-full">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/15 text-cream mb-4">
                      <card.Icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-heading font-bold text-cream text-xl leading-snug mb-2">{item.label}</h3>
                    <p className="text-sm text-cream/70 leading-relaxed">{card.text(place)}</p>
                    <div className="mt-auto text-cream">
                      <ArrowLink>{moreLabel[locale]}</ArrowLink>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {rest.length > 0 && (
        <div className="mt-8 pt-6 border-t border-navy/10 flex flex-wrap gap-2.5">
          {rest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/85 bg-cream hover:bg-white hover:text-steel border border-navy/10 hover:border-steel/40 hover:shadow-sm hover:-translate-y-0.5 rounded-full px-4 py-2 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

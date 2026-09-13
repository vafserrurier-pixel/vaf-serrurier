import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import { mainServicesByLocale, defaultFeaturedHrefs } from "@/lib/relatedServicesDefault";
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

export default function ServiceGrid({
  locale = "fr",
  lieu,
  featuredHrefs,
}: {
  locale?: Locale;
  /** Nom du lieu à injecter dans les descriptions ("à Nice Centre"). Par défaut "Nice". */
  lieu?: string;
  /**
   * Hrefs mis en avant en cartes photo (le reste en pastilles). Par défaut,
   * les 3 services les plus demandés (voir lib/relatedServicesDefault.ts).
   * La home passe une sélection propre de 4-5 services pour créer une vraie
   * hiérarchie sur la page la plus visitée du site.
   */
  featuredHrefs?: string[];
}) {
  const services = mainServicesByLocale[locale];
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";

  const featured = (featuredHrefs ?? defaultFeaturedHrefs)
    .map((href) => services.find((item) => item.href === href))
    .filter((item): item is { href: string; label: string } => Boolean(item));
  const featuredSet = new Set(featured.map((item) => item.href));
  const rest = services.filter((item) => !featuredSet.has(item.href));

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map(({ href, label }) => {
          const card = cards[href];
          return (
            <Link
              key={href}
              href={href}
              className="group relative block h-60 sm:h-64 overflow-hidden rounded-2xl border border-cream/15 hover:border-cream/40 hover:-translate-y-1 transition-all duration-200"
            >
              {card.image ? (
                <>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="font-heading font-bold text-white text-xl leading-snug mb-1">{label}</h3>
                    <ArrowLink>
                      <span className="text-white">{moreLabel[locale]}</span>
                    </ArrowLink>
                  </div>
                </>
              ) : (
                <div className="relative h-full bg-navy/40 p-6 flex flex-col">
                  <CylinderMotif
                    className="pointer-events-none absolute -right-8 -bottom-10 w-36 h-36 text-cream opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-200"
                  />
                  <div className="relative flex flex-col h-full">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/15 text-cream mb-4">
                      <card.Icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-heading font-bold text-cream text-xl leading-snug mb-2">{label}</h3>
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
        <div className="mt-8 pt-6 border-t border-cream/15 flex flex-wrap gap-2.5">
          {rest.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-cream bg-cream/10 hover:bg-cream/20 border border-cream/15 hover:border-cream/35 hover:-translate-y-0.5 rounded-full px-4 py-2 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

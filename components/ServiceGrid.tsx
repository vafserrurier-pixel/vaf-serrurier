import Link from "next/link";
import { serviceCardsByLocale } from "@/lib/serviceCards";
import { mainServicesByLocale, defaultFeaturedHrefs } from "@/lib/relatedServicesDefault";
import { CylinderMotif } from "./BrandMotif";
import type { Locale } from "@/lib/locale";

const moreLabel = { fr: "En savoir plus", en: "Learn more" };

export default function ServiceGrid({
  locale = "fr",
  lieu,
  variant = "featured",
}: {
  locale?: Locale;
  /** Nom du lieu à injecter dans les descriptions ("à Nice Centre"). Par défaut "Nice". */
  lieu?: string;
  /**
   * "featured" (par défaut, pages secteur) : 3 cartes mises en avant + le
   * reste en pastilles. "all-pills" (accueil) : les 10 services à égalité,
   * en pastilles uniquement, sans mise en avant contextuelle.
   */
  variant?: "featured" | "all-pills";
}) {
  const services = mainServicesByLocale[locale];
  const cards = serviceCardsByLocale[locale];
  const place = lieu ?? "Nice";

  if (variant === "all-pills") {
    return (
      <div className="flex flex-wrap gap-2.5">
        {services.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-cream bg-cream/10 hover:bg-cream/20 border border-cream/15 hover:border-cream/35 hover:-translate-y-0.5 rounded-full px-4 py-2 transition-all duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    );
  }

  const featured = defaultFeaturedHrefs
    .map((href) => services.find((item) => item.href === href))
    .filter((item): item is { href: string; label: string } => Boolean(item));
  const featuredSet = new Set(featured.map((item) => item.href));
  const rest = services.filter((item) => !featuredSet.has(item.href));

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-3">
        {featured.map(({ href, label }) => {
          const card = cards[href];
          return (
            <Link
              key={href}
              href={href}
              className="group relative block overflow-hidden bg-navy/40 rounded-2xl border border-cream/15 p-6 sm:p-7 hover:border-cream/40 hover:bg-navy/60 hover:-translate-y-1 transition-all duration-200"
            >
              <CylinderMotif
                className="pointer-events-none absolute -right-8 -bottom-10 w-36 h-36 text-cream opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-200"
              />
              <div className="relative">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/15 text-cream mb-4">
                  <card.Icon className="w-6 h-6" />
                </span>
                <h3 className="font-heading font-bold text-cream text-xl leading-snug mb-2">{label}</h3>
                <p className="text-sm text-cream/70 leading-relaxed">{card.text(place)}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-cream mt-4 group-hover:gap-2 transition-all">
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
              </div>
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

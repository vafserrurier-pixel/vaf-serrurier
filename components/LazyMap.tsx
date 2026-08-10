"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { StarIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    show: "Afficher la carte",
    title: "Zone d'intervention à Nice",
    reviews: (count: number) => `sur plus de ${count} avis Google`,
    link: "Voir la fiche Google Maps",
  },
  en: {
    show: "Show the map",
    title: "Service area in Nice",
    reviews: (count: number) => `from over ${count} Google reviews`,
    link: "View the Google Maps listing",
  },
};

export default function LazyMap({ locale = "fr" }: { locale?: Locale }) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=13&output=embed`;
  const t = strings[locale];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
        <div className="flex items-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-urgent" />
          ))}
        </div>
        <span className="text-sm text-slate">
          <span className="font-tabular-nums font-semibold text-navy">
            {business.reviews.rating.toFixed(1)}
          </span>{" "}
          {t.reviews(business.reviews.count)}
        </span>
        <span className="hidden sm:inline text-slate/40" aria-hidden="true">
          |
        </span>
        <span className="text-sm text-slate">{business.address.full}</span>
      </div>
      <a
        href={business.googleMaps.shareLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-steel underline underline-offset-2 mb-3"
      >
        {t.link}
      </a>
      {!loaded ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="w-full aspect-video rounded-lg border border-navy/10 bg-steel/10 flex flex-col items-center justify-center gap-2 text-navy"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span className="text-sm font-medium">{t.show}</span>
        </button>
      ) : (
        <iframe
          title={t.title}
          src={src}
          className="w-full aspect-video rounded-lg border border-navy/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

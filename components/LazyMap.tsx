"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { GoogleLogoIcon, StarIcon } from "./Icons";
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

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function LazyMap({ locale = "fr" }: { locale?: Locale }) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=13&output=embed`;
  const t = strings[locale];

  return (
    <div>
      <div className="bg-white border border-navy/10 rounded-xl p-5 mb-3">
        <div className="flex items-center gap-2">
          <GoogleLogoIcon className="w-6 h-6 shrink-0" />
          <span className="font-tabular-nums font-bold text-navy text-lg">
            {business.reviews.rating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-amber-400" />
            ))}
          </div>
          <span className="text-sm text-slate">{t.reviews(business.reviews.count)}</span>
        </div>
        <p className="flex items-start gap-2 text-sm text-slate mt-3">
          <PinIcon className="w-4 h-4 mt-0.5 shrink-0 text-steel" />
          {business.address.full}
        </p>
        <a
          href={business.googleMaps.shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-steel hover:underline mt-3"
        >
          {t.link}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      {!loaded ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="w-full aspect-video rounded-lg border border-navy/10 bg-steel/10 flex flex-col items-center justify-center gap-2 text-navy hover:bg-steel/15 transition-colors"
        >
          <PinIcon className="w-7 h-7" />
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

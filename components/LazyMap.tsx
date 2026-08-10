"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: { show: "Afficher la carte", title: "Zone d'intervention à Nice" },
  en: { show: "Show the map", title: "Service area in Nice" },
};

export default function LazyMap({ locale = "fr" }: { locale?: Locale }) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=13&output=embed`;
  const t = strings[locale];

  if (!loaded) {
    return (
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
    );
  }

  return (
    <iframe
      title={t.title}
      src={src}
      className="w-full aspect-video rounded-lg border border-navy/10"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

import { KeyIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const content = {
  fr: {
    mark: "«",
    quote:
      "Artisan serrurier, je ne me contente pas d'ouvrir une porte : je conseille, je dépanne, et je protège votre confiance autant que votre sécurité.",
    attribution: "Benoît, Votre Artisan Français",
  },
  en: {
    mark: "“",
    quote:
      "As a locksmith craftsman, I don't just open a door: I advise, I fix, and I protect your trust as much as your security.",
    attribution: "Benoît, Votre Artisan Français",
  },
};

export default function QuoteBlock({ locale = "fr" }: { locale?: Locale }) {
  const t = content[locale];
  return (
    <div className="relative bg-cream rounded-xl border border-navy/10 px-6 py-10 sm:px-14 sm:py-12 text-center overflow-hidden">
      <span
        className="block font-heading text-7xl text-steel/20 leading-none select-none"
        aria-hidden="true"
      >
        {t.mark}
      </span>
      <p className="font-heading italic font-medium text-xl sm:text-2xl text-navy leading-snug max-w-2xl mx-auto -mt-4">
        {t.quote}
      </p>
      <div className="flex items-center justify-center gap-2 mt-5">
        <KeyIcon className="w-3.5 h-3.5 text-steel" />
        <p className="text-sm text-slate">— {t.attribution}</p>
      </div>
    </div>
  );
}

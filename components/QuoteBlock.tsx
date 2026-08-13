import { KeyIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const content = {
  fr: {
    quote:
      "Artisan serrurier, je ne me contente pas d'ouvrir une porte : je conseille, je dépanne, et je protège votre confiance autant que votre sécurité.",
    attribution: "— Benoît, Votre Artisan Français",
  },
  en: {
    quote:
      "As a locksmith craftsman, I don't just open a door: I advise, I fix, and I protect your trust as much as your security.",
    attribution: "— Benoît, Votre Artisan Français",
  },
};

export default function QuoteBlock({ locale = "fr" }: { locale?: Locale }) {
  const t = content[locale];
  return (
    <div className="relative bg-cream rounded-xl border border-navy/10 px-6 py-10 sm:px-12 sm:py-12 text-center">
      <KeyIcon className="w-8 h-8 text-steel mx-auto mb-5" />
      <p className="font-heading text-xl sm:text-2xl font-semibold text-navy leading-snug max-w-2xl mx-auto">
        {t.quote}
      </p>
      <p className="mt-4 text-sm text-slate">{t.attribution}</p>
    </div>
  );
}

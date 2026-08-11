import { business } from "@/lib/business";
import ReviewsCarousel from "./ReviewsCarousel";
import { GoogleLogoIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

const strings = {
  fr: { ariaLabel: "Avis clients", suffix: (count: number) => `sur plus de ${count} avis Google` },
  en: { ariaLabel: "Customer reviews", suffix: (count: number) => `from over ${count} Google reviews` },
};

export default function ReviewsSection({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  return (
    <section aria-label={t.ariaLabel} className="max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <GoogleLogoIcon className="w-9 h-9 shrink-0" />
        <div className="w-px h-9 bg-navy/10" aria-hidden="true" />
        <span className="font-heading text-4xl font-bold text-navy font-tabular-nums">
          {business.reviews.rating.toFixed(1)}
        </span>
        <div>
          <Stars size={18} />
          <p className="text-sm text-slate mt-0.5">{t.suffix(business.reviews.count)}</p>
        </div>
      </div>
      <ReviewsCarousel locale={locale} />
    </section>
  );
}

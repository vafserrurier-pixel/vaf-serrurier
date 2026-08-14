import { business } from "@/lib/business";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    availability: "Disponible",
    availabilityUnit: "7j/7",
    delay: "Délai moyen",
    delayUnit: "à Nice",
    price: "Tarif de base",
    priceUnit: "TTC",
    rating: "Note Google",
    ratingUnit: (count: number) => `sur ${count}+ avis`,
    success: "Ouvertures",
    successUnit: "sans dégât",
  },
  en: {
    availability: "Available",
    availabilityUnit: "7 days a week",
    delay: "Average delay",
    delayUnit: "in Nice",
    price: "Base rate",
    priceUnit: "incl. VAT",
    rating: "Google rating",
    ratingUnit: (count: number) => `from ${count}+ reviews`,
    success: "Door openings",
    successUnit: "with no damage",
  },
};

export default function StatBar({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  const stats = [
    { value: "24h/24", label: t.availability, unit: t.availabilityUnit },
    { value: "15-30 min", label: t.delay, unit: t.delayUnit },
    { value: "149€", label: t.price, unit: t.priceUnit },
    {
      value: `${business.reviews.rating.toFixed(1)}/5`,
      label: t.rating,
      unit: t.ratingUnit(business.reviews.count),
    },
    { value: "99%", label: t.success, unit: t.successUnit },
  ];
  return (
    <div className="bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-3xl sm:text-4xl font-bold text-cream font-tabular-nums">
              {stat.value}
            </p>
            <p className="text-xs text-cream/70 mt-1.5 leading-snug">
              {stat.label}
              <br />
              {stat.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

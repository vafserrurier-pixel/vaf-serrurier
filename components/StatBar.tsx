import { business } from "@/lib/business";
import { ClockIcon, BoltIcon, GoogleLogoIcon, CheckIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    availability: "Disponible",
    availabilityUnit: "7j/7",
    delay: "Délai moyen",
    delayUnit: "à Nice",
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
    rating: "Google rating",
    ratingUnit: (count: number) => `from ${count}+ reviews`,
    success: "Door openings",
    successUnit: "with no damage",
  },
};

export default function StatBar({
  locale = "fr",
  delay = "15-30 min",
  delayUnit,
}: {
  locale?: Locale;
  delay?: string;
  delayUnit?: string;
}) {
  const t = strings[locale];
  const stats = [
    { value: "24h/24", label: t.availability, unit: t.availabilityUnit, icon: ClockIcon },
    { value: delay, label: t.delay, unit: delayUnit ?? t.delayUnit, icon: BoltIcon },
    {
      value: `${business.reviews.rating.toFixed(1)}/5`,
      label: t.rating,
      unit: t.ratingUnit(business.reviews.count),
      icon: GoogleLogoIcon,
    },
    { value: "99%", label: t.success, unit: t.successUnit, icon: CheckIcon },
  ];
  return (
    <div className="bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-cream/60 mb-1.5" />
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

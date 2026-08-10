import Link from "next/link";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    seeAll: "Voir le détail des tarifs →",
    defaultNote: "+50% après 19h, le week-end et les jours fériés",
  },
  en: {
    seeAll: "See full pricing →",
    defaultNote: "+50% after 7pm, on weekends and public holidays",
  },
};

export default function PriceReminder({
  priceLabel,
  note,
  locale = "fr",
}: {
  priceLabel: string;
  note?: string;
  locale?: Locale;
}) {
  const t = strings[locale];
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="bg-white border border-navy/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="font-heading font-bold text-navy text-lg">{priceLabel}</p>
          <p className="text-xs text-slate mt-0.5">{note ?? t.defaultNote}</p>
        </div>
        <Link
          href="/tarifs-serrurier-nice/"
          className="text-sm font-semibold text-steel hover:underline shrink-0"
        >
          {t.seeAll}
        </Link>
      </div>
    </div>
  );
}

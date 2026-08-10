import { ShieldIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    title: "Une intervention potentiellement remboursable",
    text: "Après une effraction ou certains sinistres, mon intervention peut être prise en charge par votre assurance habitation, ou par l'assistance de votre carte bancaire, sur présentation d'une facture détaillée. Je vous fournis systématiquement ce document. La prise en charge dépend des conditions de votre contrat — à vérifier auprès de votre assureur.",
  },
  en: {
    title: "A callout that may be reimbursed",
    text: "After a break-in or certain other incidents, my callout may be covered by your home insurance, or by your bank card's assistance cover, on presentation of a detailed invoice. I always provide this document. Coverage depends on your own contract's terms — check with your insurer.",
  },
};

export default function InsuranceBanner({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  return (
    <div className="bg-steel/10 border border-steel/20 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/15 text-steel shrink-0">
        <ShieldIcon className="w-5 h-5" />
      </span>
      <div>
        <p className="font-heading font-semibold text-navy mb-1">{t.title}</p>
        <p className="text-sm text-slate leading-relaxed">{t.text}</p>
      </div>
    </div>
  );
}

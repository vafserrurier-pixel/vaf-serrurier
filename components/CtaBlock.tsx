import { business } from "@/lib/business";
import { WhatsAppIcon } from "./Icons";

export default function CtaBlock({
  title = "Besoin d'un serrurier maintenant ?",
}: {
  title?: string;
}) {
  return (
    <div className="bg-navy text-cream rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="font-heading font-bold text-lg">{title}</p>
        <p className="text-cream/80 text-sm mt-1">
          {business.address.full} — disponible {business.hours}
        </p>
      </div>
      <div className="shrink-0 flex items-center gap-2">
        <a
          href={business.phone.href}
          className="bg-urgent text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 font-tabular-nums"
        >
          {business.phone.display}
        </a>
        <a
          href={business.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Écrire sur WhatsApp"
          className="bg-emerald-600 text-white p-3 rounded-full hover:opacity-90"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

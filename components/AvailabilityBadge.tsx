import { ClockIcon } from "./Icons";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: { label: "Disponible maintenant : devis gratuit par téléphone" },
  en: { label: "Available now: free quote by phone" },
};

/**
 * Badge de disponibilite affiche en tete de chaque page (avant le H1).
 * Point d'entree unique pour ce badge : remplace l'ancien marquage
 * dnw-emerald (pastille verte clignotante), etranger a la palette de marque
 * et trop proche du pattern "statut en ligne" des interfaces SaaS. Utilise
 * la couleur d'accent (urgent) UNIQUEMENT sur l'icone, conformement a la
 * charte qui reserve cette couleur a la disponibilite et aux CTA.
 */
export default function AvailabilityBadge({ locale = "fr" }: { locale?: Locale }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white border border-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-4">
      <ClockIcon className="w-3.5 h-3.5 text-urgent shrink-0" />
      {strings[locale].label}
    </span>
  );
}

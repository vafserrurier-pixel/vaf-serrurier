import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/lib/business";
import { WhatsAppIcon } from "./Icons";

/**
 * Boutons du hero des pages (service, secteur, commune, zones, à propos).
 *
 * Sous 640 px, même présentation que le hero de l'accueil : « Appeler » en pleine largeur, puis
 * « Écrire sur WhatsApp » en pleine largeur, puis « Voir les tarifs » en simple lien texte.
 * Dès 640 px, rien ne change : bouton rouge, pastille WhatsApp ronde, bouton « Voir les tarifs ».
 *
 * Les deux premiers boutons portent data-hero-cta : la barre d'appel du bas (StickyCallButton) reste
 * masquée tant qu'ils sont visibles à l'écran.
 */
export default function HeroCtas({
  callLabel,
  whatsappLabel,
  pricingLabel,
  showWhatsapp = true,
  showPricing = true,
  children,
}: {
  callLabel: string;
  whatsappLabel: string;
  pricingLabel: string;
  /** false : pas de bouton WhatsApp dans le hero (page À propos). */
  showWhatsapp?: boolean;
  /** false : pas de lien « Voir les tarifs » (page Zones d'intervention). */
  showPricing?: boolean;
  /** Lien supplémentaire après « Voir les tarifs » (ex. « Voir le guide »). */
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mt-6">
      <a
        href={business.phone.href}
        data-hero-cta
        className="inline-block bg-urgent text-white font-semibold px-6 py-3 rounded-full max-sm:text-center max-sm:whitespace-nowrap max-sm:px-5 max-sm:py-3.5 max-sm:shadow-lg max-sm:shadow-urgent/20 max-sm:hover:opacity-90"
      >
        {callLabel} <span className="font-phone font-bold">{business.phone.display}</span>
      </a>
      {showWhatsapp && (
        <a
          href={business.whatsapp.href}
          data-hero-cta
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappLabel}
          className="inline-flex items-center justify-center bg-emerald-600 text-white p-3 rounded-full hover:opacity-90 max-sm:gap-2 max-sm:font-semibold max-sm:px-5 max-sm:py-3.5"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="sm:hidden">{whatsappLabel}</span>
        </a>
      )}
      {showPricing && (
      <Link
        href="/tarifs-serrurier-nice/"
        prefetch={false}
        className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors max-sm:border-0 max-sm:px-0 max-sm:py-2 max-sm:rounded-none max-sm:text-center max-sm:text-steel max-sm:underline max-sm:underline-offset-4 max-sm:hover:bg-transparent"
      >
        {pricingLabel}
      </Link>
      )}
      {children}
    </div>
  );
}

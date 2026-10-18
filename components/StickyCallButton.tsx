"use client";

import { business } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { useLocale } from "@/lib/locale";

const strings = {
  fr: { call: "Appeler", whatsapp: "WhatsApp", callLabel: "Appeler maintenant", whatsappLabel: "Écrire sur WhatsApp" },
  en: { call: "Call", whatsapp: "WhatsApp", callLabel: "Call now", whatsappLabel: "Message on WhatsApp" },
};

// Barre fixe en bas de l'écran, sur toute la largeur, sous le palier lg uniquement.
// Appeler (2/3) à gauche, WhatsApp (1/3) à droite. Chaque moitié porte son propre fond et
// prolonge sa couleur sous la zone de sécurité de l'iPhone (env(safe-area-inset-bottom)).
// Hauteur : 3,5 rem (pt-4 + ligne de 24 px + pb-4) + zone de sécurité. layout.tsx réserve la même
// hauteur sous le pied de page pour que la barre ne cache jamais la fin du contenu.
export default function StickyCallButton() {
  const { locale } = useLocale();
  const t = strings[locale];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden flex shadow-[0_-4px_12px_rgba(11,36,71,0.18)]">
      <a
        href={business.phone.href}
        aria-label={t.callLabel}
        className="basis-2/3 flex items-center justify-center gap-2 bg-urgent text-white font-semibold text-base pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <PhoneIcon className="w-5 h-5" />
        {t.call}
      </a>
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappLabel}
        className="basis-1/3 flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold text-base pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <WhatsAppIcon className="w-5 h-5" />
        {t.whatsapp}
      </a>
    </div>
  );
}

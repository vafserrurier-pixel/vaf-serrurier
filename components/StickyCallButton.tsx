"use client";

import { business } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { useLocale } from "@/lib/locale";

const strings = {
  fr: { call: "Appeler maintenant", whatsapp: "Écrire sur WhatsApp" },
  en: { call: "Call now", whatsapp: "Message on WhatsApp" },
};

export default function StickyCallButton() {
  const { locale } = useLocale();
  const t = strings[locale];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2">
      <a
        href={business.phone.href}
        className="flex items-center gap-2 bg-urgent text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20"
      >
        <PhoneIcon className="w-5 h-5" />
        {t.call}
      </a>
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        className="flex items-center justify-center bg-emerald-600 text-white p-3 rounded-full shadow-lg shadow-black/20"
      >
        <WhatsAppIcon className="w-5 h-5" />
      </a>
    </div>
  );
}

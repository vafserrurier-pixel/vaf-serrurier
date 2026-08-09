import { business } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2">
      <a
        href={business.phone.href}
        className="flex items-center gap-2 bg-urgent text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20"
      >
        <PhoneIcon className="w-5 h-5" />
        Appeler maintenant
      </a>
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
        className="flex items-center justify-center bg-emerald-600 text-white p-3 rounded-full shadow-lg shadow-black/20"
      >
        <WhatsAppIcon className="w-5 h-5" />
      </a>
    </div>
  );
}

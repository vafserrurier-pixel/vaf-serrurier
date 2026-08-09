import { business } from "@/lib/business";
import { PhoneIcon } from "./Icons";

export default function StickyCallButton() {
  return (
    <a
      href={business.phone.href}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2 bg-urgent text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20"
    >
      <PhoneIcon className="w-5 h-5" />
      Appeler maintenant
    </a>
  );
}

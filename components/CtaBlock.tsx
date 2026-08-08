import { business } from "@/lib/business";

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
      <a
        href={business.phone.href}
        className="shrink-0 bg-urgent text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 font-tabular-nums"
      >
        {business.phone.display}
      </a>
    </div>
  );
}

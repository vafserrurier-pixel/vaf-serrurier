import Link from "next/link";
import { quartierHref } from "@/lib/quartiers";

/** Liens sobres vers des quartiers d'autres secteurs de Nice (liste calculée par otherSectorQuartiers). */
export default function PopularQuartiers({
  names,
  label = "Quartiers populaires à Nice :",
}: {
  names: string[];
  label?: string;
}) {
  if (names.length === 0) return null;
  return (
    <div className="mt-6">
      <p className="text-sm text-slate mb-2">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {names.map((name) => (
          <li key={name}>
            <Link
              href={quartierHref(name)}
              className="block bg-white border border-navy/10 rounded-full px-3 py-1 text-sm text-steel hover:border-steel"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

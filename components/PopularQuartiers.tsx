import Link from "next/link";

/** Liens sobres vers des pages locales de Nice (secteurs, Jean-Médecin). */
export default function PopularQuartiers({
  items,
  label = "Secteurs de Nice :",
}: {
  items: { href: string; label: string }[];
  label?: string;
}) {
  if (items.length === 0) return null;
  return (
    <div className="mt-6">
      <p className="text-sm text-slate mb-2">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block bg-white border border-navy/10 rounded-full px-3 py-1 text-sm text-steel hover:border-steel"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-xs text-slate mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-navy">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

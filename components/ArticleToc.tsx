export type ArticleTocItem = { id: string; label: string };

export default function ArticleToc({ items }: { items: ArticleTocItem[] }) {
  return (
    <nav aria-label="Sommaire de l'article" className="bg-white border border-navy/10 rounded-xl p-5">
      <p className="font-heading font-bold text-navy mb-3">Sommaire</p>
      <ol className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-baseline gap-2.5 text-sm text-slate hover:text-steel transition-colors"
            >
              <span className="font-tabular-nums font-semibold text-steel shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

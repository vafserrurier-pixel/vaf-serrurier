export default function ArticleTable({
  caption,
  headers,
  rows,
  zebra = "default",
  featuredRowIndex,
  featuredLabel = "Le plus fréquent",
}: {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
  /** "bold" alterne bg-white/bg-steel/5 (plus visible qu'un fond cream/40, utile sur une zone deja teintee). "default" preserve le rendu historique. */
  zebra?: "default" | "bold";
  /** Index (0-based) de la ligne a mettre en avant visuellement (ex. le cas le plus frequent). */
  featuredRowIndex?: number;
  /** Texte du badge affiche sur la ligne mise en avant. */
  featuredLabel?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-navy/10">
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="text-left text-xs text-slate p-3 bg-cream/60 caption-bottom">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-navy text-cream">
            {headers.map((header) => (
              <th key={header} scope="col" className="text-left font-heading font-semibold px-4 py-2.5 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const isFeatured = rowIndex === featuredRowIndex;
            const stripeClass =
              zebra === "bold"
                ? rowIndex % 2 === 0
                  ? "bg-white"
                  : "bg-steel/5"
                : rowIndex % 2 === 0
                  ? "bg-white"
                  : "bg-cream/40";
            return (
              <tr key={rowIndex} className={isFeatured ? "bg-urgent/5" : stripeClass}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2.5 text-slate align-top">
                    {cellIndex === 0 && isFeatured ? (
                      <span className="inline-flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-navy">{cell}</span>
                        <span className="bg-urgent text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {featuredLabel}
                        </span>
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

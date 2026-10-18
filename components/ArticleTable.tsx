import type { ReactNode } from "react";

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
  rows: ReactNode[][];
  /** "bold" alterne bg-white/bg-steel/5 (plus visible qu'un fond cream/40, utile sur une zone deja teintee). "default" preserve le rendu historique. */
  zebra?: "default" | "bold";
  /** Index (0-based) de la ligne a mettre en avant visuellement (ex. le cas le plus frequent). */
  featuredRowIndex?: number;
  /** Texte du badge affiche sur la ligne mise en avant. */
  featuredLabel?: string;
}) {
  // Trois colonnes ou plus : sous 640 px, chaque ligne devient une carte (règles `.table-stack` dans
  // globals.css), la première cellule en titre et les autres en « en-tête : valeur » grâce à data-label.
  // Le HTML reste un vrai <table> avec <thead> et <th>. Les rôles ARIA sont répétés car display:block
  // sur table/tr/td fait perdre aux lecteurs d'écran la sémantique de tableau. Deux colonnes : inchangé.
  const stack = headers.length >= 3;
  const aria = (role: string) => (stack ? { role } : {});
  return (
    <div className={`overflow-x-auto rounded-lg border border-navy/10${stack ? " table-stack" : ""}`}>
      <table className="w-full border-collapse text-sm" {...aria("table")}>
        {caption && (
          <caption className="text-left text-xs text-slate p-3 bg-cream/60 caption-bottom">
            {caption}
          </caption>
        )}
        <thead {...aria("rowgroup")}>
          <tr className="bg-navy text-cream" {...aria("row")}>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="text-left font-heading font-semibold px-4 py-2.5 whitespace-nowrap"
                {...aria("columnheader")}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody {...aria("rowgroup")}>
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
              <tr
                key={rowIndex}
                className={`${isFeatured ? "bg-steel/10" : stripeClass}${stack && isFeatured ? " table-stack-featured" : ""}`}
                {...aria("row")}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2.5 text-slate align-top"
                    {...(stack ? { role: "cell", ...(cellIndex > 0 && headers[cellIndex] ? { "data-label": headers[cellIndex] } : {}) } : {})}
                  >
                    {cellIndex === 0 && isFeatured ? (
                      <span className="inline-flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-navy">{cell}</span>
                        <span className="bg-navy text-cream text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
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

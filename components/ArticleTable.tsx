export default function ArticleTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-cream/40"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2.5 text-slate align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

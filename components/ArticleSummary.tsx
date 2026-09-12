export default function ArticleSummary({ points }: { points: string[] }) {
  return (
    <div className="bg-steel/5 border-l-4 border-steel rounded-r-lg p-5">
      <p className="font-heading font-bold text-navy mb-2">L&apos;essentiel en 30 secondes</p>
      <ul className="flex flex-col gap-1.5 text-sm text-slate leading-relaxed">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-steel font-bold mt-0.5" aria-hidden="true">
              &bull;
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

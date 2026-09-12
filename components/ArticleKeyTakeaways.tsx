import { CheckIcon } from "./Icons";

export default function ArticleKeyTakeaways({ points }: { points: string[] }) {
  return (
    <div className="bg-navy rounded-xl p-6">
      <p className="font-heading font-bold text-cream mb-3">Ce qu&apos;il faut retenir</p>
      <ul className="flex flex-col gap-2.5">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2.5 text-sm text-cream/90 leading-relaxed">
            <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-cream" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

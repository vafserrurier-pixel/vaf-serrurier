import Image from "next/image";
import { ClockIcon } from "./Icons";
import { business } from "@/lib/business";

/**
 * Ligne d'auteur compacte, visible directement sous le H1 (contrairement
 * a AuthorBox, plus etoffe, place en fin d'article). Reprend la meme
 * photo que la page /a-propos/.
 */
export default function ArticleByline({
  readingMinutes,
  updatedLabel,
}: {
  readingMinutes: number;
  updatedLabel: string;
}) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/serrurier-nice-a-propos.webp"
          alt={`${business.firstName}, artisan serrurier à Nice`}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>
      <p className="text-xs text-slate flex items-center flex-wrap gap-x-1.5">
        <span>
          Par <span className="font-semibold text-navy">{business.firstName}</span>
        </span>
        <span aria-hidden="true">&middot;</span>
        <span>{updatedLabel}</span>
        <span aria-hidden="true">&middot;</span>
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="w-3.5 h-3.5" />
          {readingMinutes} min de lecture
        </span>
      </p>
    </div>
  );
}

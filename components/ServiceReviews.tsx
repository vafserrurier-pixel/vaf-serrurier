import { business } from "@/lib/business";
import { cleanReviewText, truncateReview } from "@/lib/reviewFormat";
import type { PickedReview } from "@/lib/reviews";
import { GoogleLogoIcon } from "./Icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" role="img" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

const linkClass = "text-steel underline underline-offset-2";

/**
 * Bloc de trois avis sur une page de service. Quand les données viennent de Google (live), chaque
 * carte renvoie vers l'auteur (authorAttribution.uri) et vers l'avis, et le bloc porte la mention
 * « Avis Google » avec un lien vers la fiche, comme l'exigent les conditions d'affichage de Google.
 * Sinon (repli sur les avis de secours), aucune mention d'avis Google vérifié n'est affichée.
 */
export default function ServiceReviews({ reviews, live }: { reviews: PickedReview[]; live: boolean }) {
  if (reviews.length === 0) return null;
  return (
    <section aria-label="Avis clients" className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-center gap-2 mb-5">
        <GoogleLogoIcon className="w-5 h-5 shrink-0" />
        {live ? (
          <a
            href={business.googleMaps.shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold ${linkClass}`}
          >
            Avis Google
          </a>
        ) : (
          <span className="text-sm font-semibold text-navy">Avis clients</span>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {reviews.map((review, index) => {
          const text = cleanReviewText(review.text);
          const { text: shown, truncated } = live ? truncateReview(text, 300) : { text, truncated: false };
          const readMoreHref = review.reviewUri ?? review.authorUri ?? business.googleMaps.shareLink;
          return (
            <article
              key={`${review.author}-${index}`}
              className="bg-white rounded-xl border border-navy/10 shadow-sm p-5 flex flex-col"
            >
              <Stars rating={review.rating} />
              <p className="mt-3 text-navy text-sm leading-relaxed flex-1">
                &ldquo;{shown}&rdquo;
                {truncated && (
                  <>
                    {" "}
                    <a href={readMoreHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      Lire la suite
                    </a>
                  </>
                )}
              </p>
              <p className="mt-4 text-xs text-slate">
                {live && review.authorUri ? (
                  <a href={review.authorUri} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:underline">
                    {review.author}
                  </a>
                ) : (
                  <span className="font-semibold text-navy">{review.author}</span>
                )}
                {live && review.relativeTime ? ` · ${review.relativeTime}` : ""}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { GoogleLogoIcon } from "./Icons";
import type { Locale } from "@/lib/locale";
import { useReviewStats } from "./ReviewStatsProvider";

const strings = {
  fr: {
    googleReview: "avis Google",
    reviewLabel: (i: number) => `Avis ${i + 1}`,
    seeAll: "Voir tous les avis sur Google",
    seeListing: "Voir la fiche Google de l'entreprise",
  },
  en: {
    googleReview: "Google review, original in French",
    reviewLabel: (i: number) => `Review ${i + 1}`,
    seeAll: "See all reviews on Google",
    seeListing: "View the business's Google listing",
  },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  const { reviews, live } = useReviewStats();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reviews.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      {/* Sous lg : une carte, un seul avis visible à la fois (carrousel). Dès lg : les 3 premiers avis côte à côte,
          en cartes de même hauteur, sans points. Tous les avis sont dans le HTML initial. */}
      <div className="bg-white rounded-xl border border-navy/10 shadow-sm p-6 sm:p-8 min-h-[10rem] lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0 lg:min-h-0 lg:grid lg:grid-cols-3 lg:gap-5">
        {reviews.map((review, i) => (
          <figure
            key={review.author + i}
            className={`${i !== index ? "hidden" : ""} ${
              i < 3
                ? "lg:flex lg:flex-col lg:bg-white lg:rounded-xl lg:border lg:border-navy/10 lg:shadow-sm lg:p-6"
                : "lg:hidden"
            }`}
          >
            <Stars rating={review.rating} />
            <blockquote className="mt-3 text-navy leading-relaxed lg:text-sm">&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs text-slate lg:mt-auto lg:pt-4">
              {review.author}
              {live ? ` · ${t.googleReview}` : ""}
              {review.relativeTime ? ` · ${review.relativeTime}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
          {reviews.map((review, i) => (
            <button
              key={review.author + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={t.reviewLabel(i)}
              aria-current={i === index}
              className="w-6 h-6 flex items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-navy" : "bg-navy/20"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      <p className="text-center mt-3 lg:mt-6">
        <a
          href={business.googleMaps.shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-steel underline underline-offset-2"
        >
          <GoogleLogoIcon className="w-4 h-4 shrink-0" />
          {live ? t.seeAll : t.seeListing}
        </a>
      </p>
    </div>
  );
}

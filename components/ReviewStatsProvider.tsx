"use client";

import { createContext, useContext, type ReactNode } from "react";
import { business } from "@/lib/business";
import { fallbackReviews, type Review } from "@/lib/reviews";

export type ReviewStats = { rating: number; count: number; reviews: Review[]; live: boolean };

// Valeurs de repli (lib/business.ts et lib/reviews.ts) si aucun fournisseur n'entoure le composant.
const ReviewStatsContext = createContext<ReviewStats>({
  rating: business.reviews.rating,
  count: business.reviews.count,
  reviews: fallbackReviews,
  live: false,
});

/**
 * Reçoit la note, le nombre d'avis et les avis lus côté serveur (getGoogleReviews, dans le layout)
 * et les met à disposition des composants clients, qui ne peuvent pas appeler le serveur eux-mêmes.
 * Le HTML initial contient ainsi directement les vrais avis.
 */
export function ReviewStatsProvider({
  rating,
  count,
  reviews,
  live,
  children,
}: ReviewStats & { children: ReactNode }) {
  return (
    <ReviewStatsContext.Provider value={{ rating, count, reviews, live }}>
      {children}
    </ReviewStatsContext.Provider>
  );
}

export function useReviewStats(): ReviewStats {
  return useContext(ReviewStatsContext);
}

"use client";

import { createContext, useContext, type ReactNode } from "react";
import { business } from "@/lib/business";

export type ReviewStats = { rating: number; count: number };

// Valeurs de repli (lib/business.ts) si aucun fournisseur n'entoure le composant.
const ReviewStatsContext = createContext<ReviewStats>({
  rating: business.reviews.rating,
  count: business.reviews.count,
});

/**
 * Reçoit la note et le nombre d'avis lus côté serveur (getGoogleReviews, dans le layout) et les
 * met à disposition des composants clients, qui ne peuvent pas appeler le serveur eux-mêmes.
 */
export function ReviewStatsProvider({
  rating,
  count,
  children,
}: ReviewStats & { children: ReactNode }) {
  return <ReviewStatsContext.Provider value={{ rating, count }}>{children}</ReviewStatsContext.Provider>;
}

export function useReviewStats(): ReviewStats {
  return useContext(ReviewStatsContext);
}

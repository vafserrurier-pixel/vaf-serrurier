export type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

// Avis réels, récupérés sur le site en ligne actuel (jamais inventés).
// Utilisés tant que GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID ne sont pas
// configurés, ou si l'appel à l'API Google échoue.
export const fallbackReviews: Review[] = [
  {
    author: "Marine D.",
    rating: 5,
    text: "Intervention rapide pour une porte claquée. Devis annoncé avant, travail propre, et explications claires. Je recommande sans hésiter.",
  },
  {
    author: "Thomas G.",
    rating: 5,
    text: "Serrurier sérieux et efficace. Remplacement de cylindre propre, bons conseils, et aucune mauvaise surprise sur le tarif. Très pro.",
  },
  {
    author: "Nadia F.",
    rating: 5,
    text: "Mise en sécurité après effraction réalisée rapidement. Communication claire, devis transparent, et travail soigné. Merci pour la réactivité.",
  },
];

export async function fetchReviews(): Promise<{ reviews: Review[]; live: boolean }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: fallbackReviews, live: false };
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=fr`,
      { headers: { "X-Goog-Api-Key": apiKey }, next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    const data = await res.json();

    const reviews: Review[] = (data.reviews ?? [])
      .filter((r: { rating?: number }) => (r.rating ?? 0) >= 4)
      .slice(0, 6)
      .map((r: { authorAttribution?: { displayName?: string }; rating: number; text?: { text?: string }; relativePublishTimeDescription?: string }) => ({
        author: r.authorAttribution?.displayName ?? "Client Google",
        rating: r.rating,
        text: r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription,
      }))
      .filter((r: Review) => r.text.length > 0);

    if (reviews.length === 0) throw new Error("Aucun avis exploitable");

    return { reviews, live: true };
  } catch (err) {
    console.error("Échec récupération avis Google Places", err);
    return { reviews: fallbackReviews, live: false };
  }
}

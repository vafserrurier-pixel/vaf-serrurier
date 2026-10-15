import { business } from "./business";
import { offTradeReviewKeywords } from "./serviceReviewKeywords";

export type Review = {
  author: string;
  rating: number;
  text: string;
  /** Date relative fournie par Google, par exemple « il y a 2 mois ». */
  relativeTime?: string;
  /** Date de publication ISO fournie par Google (sert uniquement au tri par récence). */
  publishTime?: string;
  /** authorAttribution.uri : profil de l'auteur sur Google Maps. */
  authorUri?: string;
  /** googleMapsUri : lien vers l'avis lui-même sur Google Maps. */
  reviewUri?: string;
};

export type GoogleReviews = {
  rating: number;
  count: number;
  reviews: Review[];
  /** true si les données viennent de l'API Google Places, false si ce sont les valeurs de repli. */
  live: boolean;
};

// Avis réels, récupérés sur le site en ligne actuel (jamais inventés).
// Utilisés tant que GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID ne sont pas
// configurés, ou si l'appel à l'API Google échoue. Ce ne sont pas des données en direct.
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

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string };
};

// Un seul appel à l'API Google Places pour toute la note, le nombre d'avis et les avis.
// Résultat mis en cache une journée (revalidate 86400), partagé par le layout, les pages
// de service et la route /api/reviews. Repli sur lib/business.ts et fallbackReviews si la
// clé manque ou si l'appel échoue : le build ne plante jamais.
export async function getGoogleReviews(): Promise<GoogleReviews> {
  const fallback: GoogleReviews = {
    rating: business.reviews.rating,
    count: business.reviews.count,
    reviews: fallbackReviews,
    live: false,
  };

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return fallback;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=fr`,
      { headers: { "X-Goog-Api-Key": apiKey }, next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      reviews?: PlacesReview[];
    };

    const rating = data.rating;
    const count = data.userRatingCount;
    if (typeof rating !== "number" || rating <= 0 || rating > 5) throw new Error("Note Google absente");
    if (typeof count !== "number" || !Number.isInteger(count) || count <= 0) {
      throw new Error("Nombre d'avis Google absent");
    }

    const reviews: Review[] = (data.reviews ?? [])
      .filter((r) => (r.rating ?? 0) >= 4)
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Client Google",
        rating: r.rating as number,
        text: r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription,
        publishTime: r.publishTime,
        authorUri: r.authorAttribution?.uri,
        reviewUri: r.googleMapsUri,
      }))
      .filter((r) => r.text.length > 0);

    if (reviews.length === 0) throw new Error("Aucun avis exploitable");

    return { rating, count, reviews, live: true };
  } catch (err) {
    console.error("Échec récupération avis Google Places", err);
    return fallback;
  }
}

// Utilisé par la route /api/reviews : s'appuie sur getGoogleReviews, donc sur le même appel et le même cache.
export async function fetchReviews(): Promise<{ reviews: Review[]; live: boolean }> {
  const { reviews, live } = await getGoogleReviews();
  return { reviews: excludeOffTradeReviews(reviews).slice(0, 6), live };
}

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

/**
 * Écarte les avis dont le texte contient un mot d'un autre métier (offTradeReviewKeywords :
 * plomberie, etc.). Même comparaison que pickReviewsForService : sans casse, sans accents, par fragment de mot.
 */
export function excludeOffTradeReviews(
  allReviews: Review[],
  excludeKeywords: string[] = offTradeReviewKeywords
): Review[] {
  const excluded = excludeKeywords.map(normalize);
  return allReviews.filter((r) => {
    const text = normalize(r.text);
    return !excluded.some((word) => text.includes(word));
  });
}

export type PickedReview = Review & { matchedKeywords: string[] };

/**
 * Choisit les avis à montrer sur une page de service : d'abord ceux dont le texte contient
 * au moins un mot-clé du service (sans tenir compte des majuscules ni des accents, par
 * fragment de mot : « claqu » trouve « claquée »), classés par nombre de mots-clés trouvés
 * puis du plus récent au plus ancien ; ensuite les autres, du plus récent au plus ancien.
 * Les avis dont le texte contient un mot de excludeKeywords (autre métier) sont écartés avant
 * tout classement : s'il en reste moins de `limit`, on n'en affiche que ces quelques-uns.
 */
export function pickReviewsForService(
  allReviews: Review[],
  keywords: string[],
  limit = 3,
  excludeKeywords: string[] = []
): PickedReview[] {
  const reviews = excludeOffTradeReviews(allReviews, excludeKeywords);
  const keys = keywords.map((raw) => ({ raw, norm: normalize(raw) }));
  const byRecent = (a: Review, b: Review) => (b.publishTime ?? "").localeCompare(a.publishTime ?? "");

  const scored: PickedReview[] = reviews.map((review) => {
    const text = normalize(review.text);
    return { ...review, matchedKeywords: keys.filter((k) => text.includes(k.norm)).map((k) => k.raw) };
  });

  const matched = scored
    .filter((r) => r.matchedKeywords.length > 0)
    .sort((a, b) => b.matchedKeywords.length - a.matchedKeywords.length || byRecent(a, b));
  const others = scored.filter((r) => r.matchedKeywords.length === 0).sort(byRecent);

  return [...matched, ...others].slice(0, limit);
}

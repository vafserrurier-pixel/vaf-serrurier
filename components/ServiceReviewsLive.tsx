import { getGoogleReviews, pickReviewsForService } from "@/lib/reviews";
import { serviceReviewKeywords, type ServiceReviewPath } from "@/lib/serviceReviewKeywords";
import ServiceReviews from "./ServiceReviews";

/**
 * Composant serveur : lit les avis Google (appel mis en cache une journée), garde les trois
 * qui correspondent le mieux au service de la page (mots-clés de lib/serviceReviewKeywords.ts)
 * et les affiche. À placer dans la prop `extra` d'une page de service.
 */
export default async function ServiceReviewsLive({ path }: { path: ServiceReviewPath }) {
  const { reviews, live } = await getGoogleReviews();
  const picked = pickReviewsForService(reviews, [...serviceReviewKeywords[path]]);
  return <ServiceReviews reviews={picked} live={live} />;
}

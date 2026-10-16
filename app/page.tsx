import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqSchema, websiteSchema } from "@/lib/schema";
import HomeBody from "./HomeBody";
import { homeFaqFr } from "./homeFaq";
import { buildMetadata } from "@/lib/metadata";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";

export async function generateMetadata(): Promise<Metadata> {
  const { rating } = await getGoogleReviews();
  return buildMetadata({
    path: "/",
    title: "Serrurier Nice 24h/24 : artisan sur place en 30 min",
    description: `Serrurier à Nice 24h/24, 7j/7 : un artisan, pas une plateforme. Sur place en 30 min, prix affichés, noté ${formatRating(rating, "fr")}/5 sur Google. Tél. 04 22 13 85 44`,
  });
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(homeFaqFr)} />
      <HomeBody />
    </>
  );
}

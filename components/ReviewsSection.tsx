import { business } from "@/lib/business";
import ReviewsCarousel from "./ReviewsCarousel";

function Stars() {
  return (
    <div className="flex gap-0.5 text-urgent" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section aria-label="Avis clients" className="max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Stars />
        <p className="font-heading font-semibold text-navy">
          {business.reviews.ratingText}
        </p>
      </div>
      <ReviewsCarousel />
    </section>
  );
}

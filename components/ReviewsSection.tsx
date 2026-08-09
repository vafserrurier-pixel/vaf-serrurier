import { business } from "@/lib/business";
import ReviewsCarousel from "./ReviewsCarousel";

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 text-urgent" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section aria-label="Avis clients" className="max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="font-heading text-4xl font-bold text-navy font-tabular-nums">
          {business.reviews.rating.toFixed(1)}
        </span>
        <div>
          <Stars size={18} />
          <p className="text-sm text-slate mt-0.5">
            sur plus de {business.reviews.count} avis Google
          </p>
        </div>
      </div>
      <ReviewsCarousel />
    </section>
  );
}

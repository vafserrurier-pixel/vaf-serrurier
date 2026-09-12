import { business } from "./business";
import { fallbackReviews, type Review } from "./reviews";
import { builtCommunes } from "./communes";

type FaqItem = { question: string; answer: string };
type BreadcrumbItem = { name: string; url: string };

export function localBusinessSchema(opts?: { reviews?: Review[] }) {
  const reviews = opts?.reviews ?? fallbackReviews;
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: business.legalName,
    image: `${business.domain}/logo-full.png`,
    "@id": business.domain,
    url: business.domain,
    telephone: business.phone.href.replace("tel:", ""),
    email: business.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Nice" },
      ...builtCommunes.map((name) => ({ "@type": "City" as const, name })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.reviews.rating,
      reviewCount: business.reviews.count,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
    sameAs: [
      business.googleMaps.shareLink,
      business.social.facebook,
      business.social.instagram,
      business.social.youtube,
      business.social.tiktok,
      business.social.twitter,
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: { type: "City" | "Place"; name: string };
  /** Date ISO de derniere modification reelle du contenu (voir lib/contentDates.generated.ts). */
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    provider: {
      "@type": "Locksmith",
      name: business.legalName,
      telephone: business.phone.href.replace("tel:", ""),
    },
    areaServed: {
      "@type": opts.areaServed?.type ?? "City",
      name: opts.areaServed?.name ?? "Nice",
    },
  };
}

export function offerSchema(opts: {
  name: string;
  url: string;
  priceValue: number;
  priceType: "fixed" | "startingFrom";
  priceCurrency?: string;
}) {
  const priceCurrency = opts.priceCurrency ?? "EUR";
  const base = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: opts.name,
    url: opts.url,
    availability: "https://schema.org/InStock",
  };
  if (opts.priceType === "startingFrom") {
    return {
      ...base,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: opts.priceValue,
        priceCurrency,
      },
    };
  }
  return {
    ...base,
    price: opts.priceValue,
    priceCurrency,
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    image: `${business.domain}/logo-full.png`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      "@type": "Person",
      name: business.firstName,
      url: `${business.domain}/a-propos/`,
    },
    publisher: {
      "@type": "Organization",
      name: business.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${business.domain}/logo-full.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.firstName,
    jobTitle: "Artisan serrurier",
    url: `${business.domain}/a-propos/`,
    image: `${business.domain}/images/serrurier-nice-a-propos.webp`,
    worksFor: {
      "@type": "Locksmith",
      name: business.legalName,
      url: business.domain,
    },
    knowsAbout: [
      "Serrurerie",
      "Ouverture de porte",
      "Blindage de porte",
      "Coffre-fort",
    ],
    areaServed: {
      "@type": "City",
      name: "Nice",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

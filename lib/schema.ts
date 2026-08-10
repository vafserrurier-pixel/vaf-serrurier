import { business } from "./business";

type FaqItem = { question: string; answer: string };
type BreadcrumbItem = { name: string; url: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: business.legalName,
    image: `${business.domain}/logo.png`,
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
    areaServed: {
      "@type": "City",
      name: "Nice",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.reviews.rating,
      reviewCount: business.reviews.count,
    },
    sameAs: [
      business.googleMaps.shareLink,
      business.social.facebook,
      business.social.instagram,
      business.social.youtube,
      business.social.tiktok,
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: { type: "City" | "Place"; name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
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

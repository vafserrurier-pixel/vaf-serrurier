import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.legalName} — ${business.tagline}`,
    short_name: business.legalName,
    description: "Serrurier à Nice, disponible 24h/24. Devis annoncé avant chaque intervention.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f3",
    theme_color: "#0b2447",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

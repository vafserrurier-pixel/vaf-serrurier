import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";
import ContactBody from "./ContactBody";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact/",
  title: "Contact | Votre Artisan Français, serrurier à Nice",
  description: "Contactez-moi pour un devis ou une intervention de serrurerie à Nice, 24h/24 et 7j/7. Téléphone, formulaire ou email.",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Contact", url: `${business.domain}/contact/` },
        ])}
      />
      <ContactBody />
    </>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";
import ContactBody from "./ContactBody";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/contact/" },
  title: "Contact | Votre Artisan Français, serrurier à Nice",
  description:
    "Contactez-moi pour un devis ou une intervention de serrurerie à Nice, 24h/24 et 7j/7. Téléphone, formulaire ou email.",
};

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

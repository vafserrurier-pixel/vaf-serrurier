import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";
import ContactBody from "./ContactBody";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact/",
  title: `Contact serrurier Nice – ${business.phone.display} | VAF`,
  description: `Un devis ou une urgence à Nice ? Appelez le ${business.phone.display}, j'interviens 24h/24 et 7j/7. Réponse directe, pas de standard ni de sous-traitant.`,
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

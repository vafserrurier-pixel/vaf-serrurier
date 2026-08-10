"use client";

import ServicePageTemplate from "./ServicePageTemplate";
import { useLocale } from "@/lib/locale";
import type { ComponentProps } from "react";

type ServicePageProps = Omit<ComponentProps<typeof ServicePageTemplate>, "locale">;

export default function LocalizedServicePage({
  fr,
  en,
}: {
  fr: ServicePageProps;
  en: ServicePageProps;
}) {
  const { locale } = useLocale();
  const props = locale === "en" ? en : fr;
  return <ServicePageTemplate {...props} locale={locale} />;
}

import type { Metadata } from "next";
import { Archivo, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { localBusinessSchema } from "@/lib/schema";
import { fetchReviews } from "@/lib/reviews";
import { LocaleProvider } from "@/lib/locale";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const defaultTitle = "Serrurier Nice 24h/24 | Votre Artisan Français";
const defaultDescription =
  "Serrurier artisan à Nice, disponible 24h/24 et 7j/7. Prix annoncé avant intervention.";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: business.legalName,
    title: defaultTitle,
    description: defaultDescription,
    url: business.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { reviews } = await fetchReviews();

  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">
        <LocaleProvider>
          <JsonLd data={localBusinessSchema({ reviews })} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
          >
            Aller au contenu principal
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyCallButton />
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}

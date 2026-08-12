import type { NextConfig } from "next";

// En dev, Next.js utilise eval() pour le Fast Refresh / la reconstruction de
// call stacks — 'unsafe-eval' n'est ajouté qu'en développement, jamais en
// production (React ne l'utilise plus une fois buildé).
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "frame-src https://www.google.com",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Toutes les URLs du site (liens internes, sitemap) utilisent un slash final,
  // pour matcher la structure de l'ancien WordPress et éviter une redirection
  // 308 sur chaque page.
  trailingSlash: true,
  // Retire l'en-tête X-Powered-By: Next.js — évite de faciliter le
  // fingerprinting de la stack technique pour un attaquant.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/politique-de-cookies-ue/",
        destination: "/politique-de-confidentialite/",
        permanent: true,
      },
      {
        source: "/politique-de-cookies-ue",
        destination: "/politique-de-confidentialite/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vaf-serrurier.fr" }],
        destination: "https://vaf-serrurier.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

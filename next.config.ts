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
      // Faute d'accord corrigee (2026-09-12) : "mis" -> "mise en securite".
      {
        source: "/mis-en-securite-apres-effraction-nice/",
        destination: "/mise-en-securite-apres-effraction-nice/",
        permanent: true,
      },
      // Slug aligne sur le mot-cle cible "urgence serrurier Nice" (2026-09-13).
      {
        source: "/depannage-serrurier-nice/",
        destination: "/urgence-serrurier-nice/",
        permanent: true,
      },
      // Uniformisation de la structure des articles de blog (2026-09-12) :
      // remplacer-coffre-a-larder etait le seul a la racine, redirige
      // directement vers son URL finale pour eviter une double redirection.
      {
        source: "/remplacer-coffre-a-larder/",
        destination: "/blog/remplacer-coffre-a-larder-nice/",
        permanent: true,
      },
      // Slugs des 8 articles alignes sur des mots-cles service/local
      // (2026-09-12), pour la meme raison que ci-dessus.
      {
        source: "/blog/que-faire-apres-un-cambriolage/",
        destination: "/blog/que-faire-apres-cambriolage-nice/",
        permanent: true,
      },
      {
        source: "/blog/serrure-3-5-7-points-que-choisir/",
        destination: "/blog/serrure-multipoints-3-5-7-nice/",
        permanent: true,
      },
      {
        source: "/blog/remplacer-coffre-a-larder/",
        destination: "/blog/remplacer-coffre-a-larder-nice/",
        permanent: true,
      },
      {
        source: "/blog/certification-a2p-serrure/",
        destination: "/blog/certification-a2p-serrure-nice/",
        permanent: true,
      },
      {
        source: "/blog/serrurier-agree-assurances-vrai-faux/",
        destination: "/blog/serrurier-agree-assurances-nice/",
        permanent: true,
      },
      {
        source: "/blog/porte-qui-claque-avant-appeler-serrurier/",
        destination: "/blog/porte-qui-claque-serrurier-nice/",
        permanent: true,
      },
      {
        source: "/blog/qui-paie-changement-serrure-location/",
        destination: "/blog/qui-paie-changement-serrure-location-nice/",
        permanent: true,
      },
      {
        source: "/blog/cles-hall-digicode-organigramme-copropriete/",
        destination: "/blog/digicode-cles-hall-copropriete-nice/",
        permanent: true,
      },
      // Slug raccourci et aligne sur le mot-cle cible "prix serrurier Nice" (2026-09-25).
      {
        source: "/blog/combien-coute-serrurier-nice-tarifs-2026/",
        destination: "/blog/prix-serrurier-nice-guide/",
        permanent: true,
      },
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
      // Anciennes pages du site WordPress (indexees par Google avant la refonte d'aout 2026) :
      // redirection 301 vers la page la plus proche (Next.js ajoute d'abord le slash final aux URLs sans slash).
      { source: "/serrurier-de-nuit-nice/", destination: "/urgence-serrurier-nice/", permanent: true },
      { source: "/serrurier-residentiel-nice/", destination: "/", permanent: true },
      { source: "/serrurier-professionnel-nice/", destination: "/agences-syndics-nice/", permanent: true },
      { source: "/installation-serrure-a2p-nice/", destination: "/changement-serrure-nice/", permanent: true },
      { source: "/installation-verrou-nice/", destination: "/changement-serrure-nice/", permanent: true },
      { source: "/devis/", destination: "/contact/", permanent: true },
      { source: "/avis-clients/", destination: "/", permanent: true },
      { source: "/locksmith-nice/", destination: "/", permanent: true },
      { source: "/category/uncategorized/", destination: "/blog/", permanent: true },
      { source: "/feed/", destination: "/blog/", permanent: true },
      // www -> domaine principal en un seul saut. Les URLs HTML gardent leur slash final
      // (sinon : www -> sans slash -> avec slash, deux sauts).
      {
        source: "/:path([^.]*)",
        has: [{ type: "host", value: "www.vaf-serrurier.fr" }],
        destination: "https://vaf-serrurier.fr/:path",
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

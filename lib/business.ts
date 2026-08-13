// Source unique de vérité pour toutes les données NAP et coordonnées de l'entreprise.
// Ne jamais dupliquer ces valeurs en dur ailleurs dans le code.

export const business = {
  legalName: "Votre Artisan Français",
  // Le nom complet existe pour référence interne (facturation, KBis) mais n'est
  // affiché nulle part sur le site public, y compris sur les pages légales — choix
  // explicite de Benoît, malgré le risque de non-conformité LCEN art. 6-III qui
  // demande normalement d'identifier le président d'une SASU sur ces pages.
  ownerFullNameInternalOnly: "Benoît Jaoui",
  firstName: "Benoît",
  legalForm: "Société par actions simplifiée unipersonnelle (SASU) au capital de 1 000 €",
  rcs: "980 385 868 R.C.S. Nice",
  tagline: "Serrurier à Nice",
  siret: "980 385 868 00024",
  // Année de début d'activité de Benoît comme serrurier (chez son frère à
  // Paris, avant de s'installer seul à Nice) — sert à calculer l'ancienneté
  // réelle affichée sur le site, jamais un chiffre fixe à mettre à jour.
  professionSinceYear: 2011,
  address: {
    street: "2 Rue Antoine Gautier",
    postalCode: "06300",
    city: "Nice",
    country: "FR",
    full: "2 Rue Antoine Gautier, 06300 Nice",
  },
  geo: {
    latitude: 43.69866574948938,
    longitude: 7.279763975999522,
  },
  phone: {
    display: "04 22 13 85 44",
    href: "tel:+33422138544",
  },
  // Second numéro (mobile), affiché uniquement en secours si le premier est injoignable
  phoneSecondary: {
    display: "06 41 78 55 56",
    href: "tel:+33641785556",
  },
  // Utilise le numéro mobile ci-dessus (seul numéro susceptible d'être relié à
  // WhatsApp) — à confirmer par Benoît que ce numéro est bien actif sur WhatsApp
  // avant mise en production.
  whatsapp: {
    display: "06 41 78 55 56",
    href: "https://wa.me/33641785556?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20serrurier%20%C3%A0%20Nice",
  },
  email: "vafserrurier@gmail.com",
  hours: "24h/24, 7j/7",
  domain: "https://vaf-serrurier.fr",
  googleMaps: {
    shareLink: "https://maps.app.goo.gl/an35iFRpf1MZTaQj7",
    // Place ID non confirmé — à reconfirmer via l'API Google Places (Place Details)
    // avant toute intégration en dur dans un composant qui en dépendrait.
    placeIdConfirmed: false,
  },
  reviews: {
    rating: 5.0,
    count: 150,
    ratingText: "5,0/5 sur plus de 150 avis Google",
  },
  social: {
    youtube: "https://www.youtube.com/@v.a.f-Serrurier",
    instagram: "https://www.instagram.com/serrurier_nice_vaf/",
    tiktok: "https://www.tiktok.com/@vaf.serrurier.nice",
    facebook: "https://www.facebook.com/vafserruriernice/",
  },
  hostingProvider: "O2switch",
} as const;

// Liste de référence confirmée par Benoît (remplace une première liste générique) :
// 46 quartiers répartis en 4 secteurs. Place Masséna, Negresco et l'Acropolis ne sont
// pas des quartiers résidentiels — ils sont mentionnés comme repères géo dans le texte
// des pages voisines (Jean-Médecin/Carré d'Or/Promenade des Anglais, secteur Est/Le Port)
// plutôt que comme pages dédiées. "Méridas" a été définitivement écarté (2026-08-09) :
// aucune correspondance ne parle à Benoît sur le terrain — ne pas y revenir.
//
// Ordre de création prioritaire pour les pages de quartier (Phase 2/3) :
// 1. Brancolar, Desambrois (avis clients déjà en main)
// 2. Cimiez, Riquier, Fabron, Jean-Médecin, Libération, Vieux-Nice (fort volume de recherche)
// 3. Reste des quartiers ci-dessous
export const zones = {
  centre: [
    "Jean-Médecin",
    "Carré d'Or",
    "Quartier Wilson",
    "Quartier des Musiciens",
    "Quartier des Fleurs",
    "Baumettes",
    "Libération",
    "Gambetta",
    "Cimiez",
    "Desambrois",
    "Carabacel",
    "Garibaldi",
    "Parc Impérial",
    "Saint-Philippe",
    "Promenade des Anglais",
    "Magnan",
    "La Madeleine",
    "Saint-Pierre-de-Féric",
    "Vieux-Nice",
  ],
  est: [
    "Riquier",
    "Pasteur",
    "Saint-Roch",
    "l'Ariane",
    "Mont Boron",
    "Mont Alban",
    "Le Port",
    "Bon Voyage",
  ],
  nord: [
    "Brancolar",
    "Poètes",
    "Chambrun",
    "Gairaut",
    "Rimiez",
    "Saint-Pancrace",
    "Corniche des Oliviers",
    "Pessicart",
  ],
  ouest: [
    "L'Archet",
    "Saint-Antoine",
    "Fabron",
    "Carras",
    "Californie",
    "Les Moulins",
    "Corniche Fleurie",
    "Arénas",
    "Saint-Isidore",
    "Lingostière",
    "Secteur Bellet",
  ],
} as const;

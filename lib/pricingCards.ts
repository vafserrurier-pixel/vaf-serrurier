import type { Locale } from "./locale";

export type PricingCard = {
  title: string;
  /** Titre H3 enrichi mot-clé, utilisé uniquement quand useSeoTitles est actif (page /tarifs-serrurier-nice/). */
  seoTitle?: string;
  price: string;
  unit?: string;
  /** Montant numérique en euros, pour les schema.org Offer sur la page tarifs. Absent = "sur devis", pas d'Offer généré. */
  priceValue?: number;
  priceType?: "fixed" | "startingFrom";
  features: string[];
  highlight?: boolean;
  featured?: boolean;
};

export const cardsByLocale: Record<Locale, PricingCard[]> = {
  fr: [
    {
      title: "Porte claquée",
      seoTitle: "Prix ouverture de porte à Nice",
      price: "149 €",
      unit: "TTC",
      priceValue: 149,
      priceType: "fixed",
      features: [
        "Ouverture sans casse quand c'est possible",
        "Contrôle de fermeture après intervention",
        "Déplacement inclus sur Nice",
      ],
      highlight: true,
      featured: true,
    },
    {
      title: "Porte verrouillée (cylindre européen)",
      seoTitle: "Prix porte verrouillée à Nice",
      price: "149 €",
      unit: "TTC",
      priceValue: 149,
      priceType: "fixed",
      features: [
        "Configuration adaptée à votre serrure",
        "Tests finaux de fermeture",
        "Déplacement inclus sur Nice",
      ],
      featured: true,
    },
    {
      title: "Porte verrouillée (serrure Fichet)",
      seoTitle: "Prix porte verrouillée serrure Fichet à Nice",
      price: "Sur devis",
      features: [
        "Méthode adaptée aux serrures renforcées",
        "Précautions pour limiter les dégâts",
        "Prix confirmé avant toute intervention",
      ],
    },
    {
      title: "Changement de cylindre standard",
      seoTitle: "Prix changement de cylindre à Nice",
      price: "à partir de 249 €",
      unit: "TTC",
      priceValue: 249,
      priceType: "startingFrom",
      features: [
        "Déplacement et main d'œuvre inclus",
        "Cylindre européen adapté à votre porte",
        "Clés neuves remises sur place",
      ],
      featured: true,
    },
    {
      title: "Changement de cylindre haute sécurité",
      seoTitle: "Prix changement de cylindre haute sécurité à Nice",
      price: "Sur devis",
      features: [
        "Marques premium (Fichet) : toujours sur devis",
        "Diagnostic de votre porte sur place",
        "Prix confirmé avant toute intervention",
      ],
    },
    {
      title: "Serrure 5 points en applique carénée",
      seoTitle: "Prix serrure carénée 5 points à Nice",
      price: "1 249 €",
      unit: "TTC",
      priceValue: 1249,
      priceType: "fixed",
      features: [
        "Forfait unique, gamme Héraclès Sésame, fournie posée",
        "Combo blindage pivot + carénée : à partir de 1 890 € TTC",
        "Devis confirmé avant intervention",
      ],
    },
    {
      title: "Blindage de porte",
      seoTitle: "Prix blindage de porte à Nice",
      price: "à partir de 2 689 €",
      unit: "TTC",
      priceValue: 2689,
      priceType: "startingFrom",
      features: [
        "Modèle Citadin (certifié BP1), pose comprise",
        "Conserve votre porte existante, garantie fabricant 15 ans",
        "Parisien et Parisien Hermétic sur devis",
      ],
      featured: true,
    },
    {
      title: "Installation de porte blindée (bloc-porte neuf)",
      seoTitle: "Prix installation de porte blindée à Nice",
      price: "à partir de 3 490 €",
      unit: "TTC",
      priceValue: 3490,
      priceType: "startingFrom",
      features: [
        "Bloc-porte neuf certifié A2P : dès 3 490 € en BP1, niveaux supérieurs sur devis",
        "Pose incluse, délai d'environ 10 jours, garantie fabricant 15 ans",
        "Devis 100% personnalisé selon la ligne et les options",
      ],
    },
    {
      title: "Coffre-fort (ouverture et installation)",
      seoTitle: "Prix coffre-fort à Nice",
      price: "à partir de 299 €",
      unit: "TTC",
      priceValue: 299,
      priceType: "startingFrom",
      features: [
        "Ouverture sans destruction quand c'est possible",
        "Installation et fixation au sol ou au mur",
        "Prix ajusté selon le modèle sur place",
      ],
    },
    {
      title: "Installation de poignée blindée",
      seoTitle: "Prix installation poignée blindée à Nice",
      price: "349 €",
      unit: "TTC",
      priceValue: 349,
      priceType: "fixed",
      features: [
        "Pose et réglage inclus",
        "Compatible avec la plupart des portes existantes",
        "Garantie fabricant 10 ans (gamme Héraclès Salomé)",
      ],
    },
  ],
  en: [
    {
      title: "Door slammed shut",
      seoTitle: "Door opening price in Nice",
      price: "€149",
      unit: "incl. VAT",
      priceValue: 149,
      priceType: "fixed",
      features: [
        "Opened without damage when possible",
        "Closing checked after the callout",
        "Travel included within Nice",
      ],
      highlight: true,
      featured: true,
    },
    {
      title: "Door locked (European cylinder)",
      seoTitle: "Locked door price in Nice",
      price: "€149",
      unit: "incl. VAT",
      priceValue: 149,
      priceType: "fixed",
      features: [
        "Method matched to your lock",
        "Final closing tests",
        "Travel included within Nice",
      ],
      featured: true,
    },
    {
      title: "Door locked (Fichet lock)",
      seoTitle: "Locked door price (Fichet lock) in Nice",
      price: "Quoted individually",
      features: [
        "Method suited to reinforced locks",
        "Precautions to limit damage",
        "Price confirmed before any work",
      ],
    },
    {
      title: "Standard cylinder replacement",
      seoTitle: "Cylinder replacement price in Nice",
      price: "from €249",
      unit: "incl. VAT",
      priceValue: 249,
      priceType: "startingFrom",
      features: [
        "Travel and labor included",
        "European cylinder matched to your door",
        "New keys handed over on site",
      ],
      featured: true,
    },
    {
      title: "High-security cylinder replacement",
      seoTitle: "High-security cylinder replacement price in Nice",
      price: "Quoted on assessment",
      features: [
        "Premium brands (Fichet): always quoted",
        "On-site diagnosis of your door",
        "Price confirmed before any work",
      ],
    },
    {
      title: "5-point rim lock (shrouded)",
      seoTitle: "Shrouded 5-point lock price in Nice",
      price: "€1,249",
      unit: "incl. VAT",
      priceValue: 1249,
      priceType: "fixed",
      features: [
        "Flat rate, Héraclès Sésame range, supplied and fitted",
        "Hinge-side armoring + shrouded lock combo: from €1,890 incl. VAT",
        "Quote confirmed before work",
      ],
    },
    {
      title: "Door reinforcement",
      seoTitle: "Door reinforcement price in Nice",
      price: "from €2,689",
      unit: "incl. VAT",
      priceValue: 2689,
      priceType: "startingFrom",
      features: [
        "Citadin model (BP1-certified), fitted",
        "Keeps your existing door, 15-year manufacturer warranty",
        "Parisien and Parisien Hermétic quoted individually",
      ],
      featured: true,
    },
    {
      title: "Armored door installation (new door block)",
      seoTitle: "Armored door installation price in Nice",
      price: "from €3,490",
      unit: "incl. VAT",
      priceValue: 3490,
      priceType: "startingFrom",
      features: [
        "New A2P-certified door block: from €3,490 in BP1, higher levels quoted individually",
        "Fitting included, lead time of about 10 days, 15-year manufacturer warranty",
        "100% tailored quote based on the line and options chosen",
      ],
    },
    {
      title: "Safe (opening and installation)",
      seoTitle: "Safe price in Nice",
      price: "from €299",
      unit: "incl. VAT",
      priceValue: 299,
      priceType: "startingFrom",
      features: [
        "Non-destructive opening when possible",
        "Fitting and fixing to floor or wall",
        "Price adjusted to the model on site",
      ],
    },
    {
      title: "Armored handle installation",
      seoTitle: "Armored handle installation price in Nice",
      price: "€349",
      unit: "incl. VAT",
      priceValue: 349,
      priceType: "fixed",
      features: [
        "Fitting and adjustment included",
        "Compatible with most existing doors",
        "10-year manufacturer warranty (Héraclès Salomé range)",
      ],
    },
  ],
};

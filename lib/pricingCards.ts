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
      price: "189 €",
      unit: "TTC",
      priceValue: 189,
      priceType: "fixed",
      features: [
        "Méthode adaptée aux serrures renforcées",
        "Précautions pour limiter les dégâts",
        "Déplacement inclus sur Nice",
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
      price: "1 490 €",
      unit: "TTC",
      priceValue: 1490,
      priceType: "fixed",
      features: [
        "Pose et réglage de la serrure inclus",
        "Compatible avec la plupart des portes existantes",
        "Devis confirmé avant intervention",
      ],
    },
    {
      title: "Installation porte blindée",
      seoTitle: "Prix installation porte blindée à Nice",
      price: "à partir de 2 689 €",
      unit: "TTC",
      priceValue: 2689,
      priceType: "startingFrom",
      features: [
        "Prix pour une porte de taille standard",
        "Bloc-porte ou blindage avec serrure 5 points en applique",
        "Devis sur place systématique avant tout engagement",
      ],
      featured: true,
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
      price: "369 €",
      unit: "TTC",
      priceValue: 369,
      priceType: "fixed",
      features: [
        "Déplacement et main d'œuvre inclus",
        "Compatible avec la plupart des portes blindées",
        "Tests de fermeture après la pose",
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
      price: "€189",
      unit: "incl. VAT",
      priceValue: 189,
      priceType: "fixed",
      features: [
        "Method suited to reinforced locks",
        "Precautions to limit damage",
        "Travel included within Nice",
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
      price: "€1,490",
      unit: "incl. VAT",
      priceValue: 1490,
      priceType: "fixed",
      features: [
        "Fitting and adjustment included",
        "Compatible with most existing doors",
        "Quote confirmed before work",
      ],
    },
    {
      title: "Security door installation",
      seoTitle: "Security door installation price in Nice",
      price: "from €2,689",
      unit: "incl. VAT",
      priceValue: 2689,
      priceType: "startingFrom",
      features: [
        "Price for a standard door size",
        "Door block or reinforcement with 5-point rim lock",
        "On-site quote always required before any commitment",
      ],
      featured: true,
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
      price: "€369",
      unit: "incl. VAT",
      priceValue: 369,
      priceType: "fixed",
      features: [
        "Travel and labor included",
        "Compatible with most security doors",
        "Closing tests after fitting",
      ],
    },
  ],
};

import { business } from "@/lib/business";
import { CheckIcon } from "./Icons";

type Card = {
  title: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: boolean;
};

const cards: Card[] = [
  {
    title: "Porte claquée",
    price: "149 €",
    unit: "TTC",
    features: [
      "Ouverture sans casse quand c'est possible",
      "Contrôle de fermeture après intervention",
      "Déplacement inclus sur Nice",
    ],
    highlight: true,
  },
  {
    title: "Porte verrouillée",
    price: "149 €",
    unit: "TTC",
    features: [
      "Configuration adaptée à votre serrure",
      "Tests finaux de fermeture",
      "Déplacement inclus sur Nice",
    ],
  },
  {
    title: "Porte blindée verrouillée",
    price: "189 €",
    unit: "TTC",
    features: [
      "Méthode adaptée aux serrures renforcées",
      "Précautions pour limiter les dégâts",
      "Déplacement inclus sur Nice",
    ],
  },
  {
    title: "Remplacement de cylindre",
    price: "Dès 119 €",
    features: [
      "119 à 300 €+ selon le grade de sécurité",
      "Cylindre européen adapté à votre porte",
      "Clés neuves remises sur place",
    ],
  },
];

export default function PricingTable() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl p-5 flex flex-col ${
              card.highlight
                ? "bg-navy text-cream shadow-lg ring-2 ring-urgent"
                : "bg-white text-navy border border-navy/10"
            }`}
          >
            {card.highlight && (
              <span className="inline-block self-start bg-urgent text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                Le plus demandé
              </span>
            )}
            <p className="font-heading font-semibold mb-1">{card.title}</p>
            <p className="font-tabular-nums text-2xl font-bold mb-4">
              {card.price}
              {card.unit && (
                <span
                  className={`text-sm font-normal ml-1 ${
                    card.highlight ? "text-cream/70" : "text-slate"
                  }`}
                >
                  {card.unit}
                </span>
              )}
            </p>
            <ul className="flex flex-col gap-2 mb-5 flex-1">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckIcon
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      card.highlight ? "text-cream" : "text-steel"
                    }`}
                  />
                  <span className={card.highlight ? "text-cream/90" : "text-slate"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={business.phone.href}
              className={`text-center text-sm font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90 ${
                card.highlight ? "bg-urgent text-white" : "bg-cream text-navy border border-navy/10"
              }`}
            >
              Appeler pour ce tarif
            </a>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate p-4 mt-2">
        Majoration de 50% après 19h, le week-end et les jours fériés. Pièces remplacées
        facturées en supplément, toujours annoncées avant accord. Remplacement de
        serrure complète, installation ou blindage de porte : sur devis, annoncé avant
        intervention. Prix indicatifs pour les situations standards.
      </p>
    </div>
  );
}

import type { Locale } from "@/lib/locale";

const stepsByLocale = {
  fr: (place?: string) => [
    {
      title: "Appel",
      text: "Vous m'appelez, vous décrivez la situation en quelques mots, et j'identifie le problème le plus probable dès le téléphone.",
    },
    {
      title: "Délai d'arrivée",
      text: place
        ? `Je vous annonce un prix et un délai réaliste pour ${place} (généralement 15 à 30 minutes), et je vous préviens si la situation évolue en route.`
        : "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
    },
    {
      title: "Diagnostic sur place",
      text: "J'examine la porte, la serrure et le cadre pour confirmer la meilleure méthode, sans rien forcer avant d'être sûr de mon geste.",
    },
    {
      title: "Règlement",
      text: "Le prix confirmé sur place est celui que vous payez, facture détaillée à l'appui, sans supplément surprise une fois le travail fini.",
    },
  ],
  en: (place?: string) => [
    {
      title: "Call",
      text: "You call me, describe the situation in a few words, and I identify the most likely problem right there on the phone.",
    },
    {
      title: "Time to arrival",
      text: place
        ? `I quote a price and a realistic time frame for ${place} (usually 15 to 30 minutes), and let you know if anything changes on the way.`
        : "I quote a price and a realistic time frame based on your area and the time of day (usually 15 to 30 minutes in Nice), and let you know if anything changes on the way.",
    },
    {
      title: "On-site diagnosis",
      text: "I examine the door, the lock and the frame to confirm the best method, without forcing anything until I'm sure of my approach.",
    },
    {
      title: "Payment",
      text: "The price confirmed on site is what you pay, with a detailed invoice, no surprise extra charge once the work is done.",
    },
  ],
};

export default function ProcessSteps({
  locale = "fr",
  place,
}: {
  locale?: Locale;
  place?: string;
}) {
  const steps = stepsByLocale[locale](place);
  return (
    <div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="bg-white border border-navy/10 rounded-xl p-5 text-center flex flex-col items-center"
          >
            <span
              className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-cream font-heading font-bold shrink-0 shadow-sm mb-3"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="font-heading font-semibold text-navy mb-1.5">{step.title}</h3>
            <p className="text-sm text-slate leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

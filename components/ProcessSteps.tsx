import KeyBitDivider from "./KeyBitDivider";
import type { Locale } from "@/lib/locale";

const stepsByLocale = {
  fr: [
    {
      title: "Diagnostic",
      text: "Vous m'expliquez la situation au téléphone, j'identifie le problème et j'annonce un prix avant de me déplacer.",
    },
    {
      title: "Intervention",
      text: "J'utilise les outils adaptés à votre serrure, sans forcer inutilement, en limitant les dégâts au strict nécessaire.",
    },
    {
      title: "Vérification",
      text: "Je teste la fermeture, j'explique ce qui a été fait, et je m'assure que tout fonctionne avant de repartir.",
    },
  ],
  en: [
    {
      title: "Diagnosis",
      text: "You explain the situation over the phone, I identify the problem and quote a price before I travel to you.",
    },
    {
      title: "Intervention",
      text: "I use the tools suited to your lock, without forcing unnecessarily, keeping any damage to the strict minimum.",
    },
    {
      title: "Verification",
      text: "I test that everything closes properly, explain what was done, and make sure it all works before I leave.",
    },
  ],
};

export default function ProcessSteps({ locale = "fr" }: { locale?: Locale }) {
  const steps = stepsByLocale[locale];
  return (
    <div>
      <KeyBitDivider className="mb-8" opacity={0.4} />
      <ol className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full bg-navy text-cream font-heading font-bold text-sm shrink-0 shadow-sm"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="font-heading font-semibold text-navy">{step.title}</p>
            </div>
            <p className="text-sm text-slate leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

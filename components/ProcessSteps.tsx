import KeyBitDivider from "./KeyBitDivider";

const steps = [
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
];

export default function ProcessSteps() {
  return (
    <div>
      <KeyBitDivider className="mb-8 text-steel/40" />
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

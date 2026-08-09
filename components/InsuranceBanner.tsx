import { ShieldIcon } from "./Icons";

export default function InsuranceBanner() {
  return (
    <div className="bg-steel/10 border border-steel/20 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/15 text-steel shrink-0">
        <ShieldIcon className="w-5 h-5" />
      </span>
      <div>
        <p className="font-heading font-semibold text-navy mb-1">
          Une intervention potentiellement remboursable
        </p>
        <p className="text-sm text-slate leading-relaxed">
          Après une effraction ou certains sinistres, mon intervention peut être prise
          en charge par votre assurance habitation, ou par l&apos;assistance de votre
          carte bancaire, sur présentation d&apos;une facture détaillée. Je vous fournis
          systématiquement ce document. La prise en charge dépend des conditions de
          votre contrat — à vérifier auprès de votre assureur.
        </p>
      </div>
    </div>
  );
}

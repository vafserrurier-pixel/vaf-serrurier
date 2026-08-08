type Row = { service: string; price: string; details: string };

const rows: Row[] = [
  {
    service: "Ouverture porte claquée",
    price: "149 € TTC",
    details: "Accès retrouvé, intervention propre, contrôle de fermeture.",
  },
  {
    service: "Ouverture porte verrouillée (simple)",
    price: "149 € TTC",
    details: "Configuration adaptée à votre serrure, tests finaux.",
  },
  {
    service: "Ouverture porte blindée verrouillée",
    price: "189 € TTC",
    details: "Intervention adaptée, précautions pour limiter les dégâts.",
  },
  {
    service: "Remplacement de cylindre",
    price: "À partir de 119 €",
    details: "119 à 300 €+ selon le grade de sécurité choisi.",
  },
  {
    service: "Remplacement de serrure complète",
    price: "Sur devis",
    details: "Devis annoncé avant intervention, selon le modèle et la porte.",
  },
  {
    service: "Installation ou blindage de porte",
    price: "Sur devis",
    details: "Dépend du choix bloc-porte / blindage et des finitions.",
  },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-navy/10">
      <table className="w-full text-sm bg-white">
        <thead>
          <tr className="bg-navy text-cream text-left">
            <th className="px-4 py-3 font-heading font-semibold">Prestation</th>
            <th className="px-4 py-3 font-heading font-semibold">Tarif TTC</th>
            <th className="px-4 py-3 font-heading font-semibold hidden sm:table-cell">
              Détails
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.service} className="border-t border-navy/10">
              <td className="px-4 py-3 text-navy font-medium">{row.service}</td>
              <td className="px-4 py-3 font-tabular-nums text-navy whitespace-nowrap">
                {row.price}
              </td>
              <td className="px-4 py-3 text-slate hidden sm:table-cell">{row.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate p-4 border-t border-navy/10">
        Majoration de 50% après 19h, le week-end et les jours fériés. Pièces remplacées
        facturées en supplément, toujours annoncées avant accord. Prix indicatifs pour
        les situations standards — un devis précis est donné avant chaque intervention.
      </p>
    </div>
  );
}

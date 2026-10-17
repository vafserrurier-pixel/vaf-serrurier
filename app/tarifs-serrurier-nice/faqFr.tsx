import type { FaqItem } from "@/components/FaqAccordion";

// FAQ française de la page tarifs : source unique pour l affichage (TarifsBody) et pour le schema FAQPage (page.tsx).
export const faqFr: FaqItem[] = [
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "En journée, 149 € pour une ouverture. Après 19 h, le week-end et les jours fériés, 189 € pour une porte claquée et 209 € pour une porte fermée à clé : un prix fixe, pas un pourcentage. Le prix d'une pièce ne change jamais avec l'heure. J'arrive en 30 minutes et le montant est annoncé avant de partir.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description, et je le confirme sur place avant de commencer les travaux, c'est une obligation légale pour un serrurier. Pour les gros travaux (blindage de porte, installation de porte blindée), la visite sur place et le devis sont gratuits, et le devis vous est remis sous 24h.",
  },
  {
    question: "Les pièces remplacées sont-elles comprises dans le prix affiché ?",
    answer:
      "Le cylindre standard est compris dans le tarif « à partir de 249 € ». Les autres pièces remplacées (serrure complète, gâche, cylindre haute sécurité...) sont facturées en supplément et toujours annoncées avant votre accord.",
  },
  {
    question: "Pourquoi les prix varient-ils d'une intervention à l'autre ?",
    answer:
      "Le type de serrure, la marque, l'état de la porte et l'heure d'intervention font varier le tarif final. Les prix affichés couvrent les situations standards.",
  },
  {
    question: "Le tarif change-t-il selon le quartier ou la commune ?",
    answer:
      "Non. Mes prix sont les mêmes dans tous les quartiers de Nice et dans les communes voisines (Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer, Beaulieu-sur-Mer, Èze), déplacement compris. Ce qui fait varier le prix, c'est l'horaire, le type de serrure et la pièce à remplacer.",
  },
  {
    question: "Avez-vous un tarif pour les professionnels ?",
    answer:
      "Oui. Les dépannages sont aux mêmes prix que pour un particulier. L'audit, l'entretien et les travaux sur devis sont à 60 € HT de l'heure, déplacement compris.",
  },
  {
    question: "Quel taux de TVA appliquez-vous ?",
    answer:
      "10 % pour les particuliers (logement de plus de 2 ans) et 20 % pour les professionnels. Les prix affichés sur cette page sont des prix TTC au taux de 10 %.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Carte bancaire, espèces ou virement. La facture détaillée vous est envoyée par e-mail.",
  },
  {
    question: "Demandez-vous un acompte ?",
    answer:
      "Pour les gros travaux (blindage de porte, installation de porte blindée), un acompte de 30 % est demandé à la validation du devis.",
  },
  {
    question: "Intervenez-vous sur une porte de cave, de garage ou une boîte aux lettres ?",
    answer:
      "Oui. Le prix vous est annoncé par téléphone avant que je me déplace, comme pour toute autre intervention.",
  },
  {
    question: "Comment éviter une arnaque de serrurier ?",
    answer:
      "Méfiez-vous d'abord des prix d'appel affichés très bas (30 ou 40 € par exemple) : c'est presque toujours le signe que la facture va gonfler une fois le technicien sur place, avec des frais ajoutés sur le pas de la porte. Une intervention sérieuse, déplacement compris, descend rarement sous les 100 € tout compris. Exigez un prix ferme par téléphone avant tout déplacement, demandez toujours une facture détaillée, et vérifiez que l'entreprise a une adresse et un SIRET vérifiables, pas seulement un numéro de mobile. C'est exactement pour lutter contre ces pratiques que je me suis installé à mon compte : mes tarifs sont annoncés à l'avance et ne bougent pas une fois sur place, sauf pièce supplémentaire clairement identifiée et validée par vous.",
  },
  {
    question: "Puis-je me rétracter après avoir signé un devis à mon domicile ?",
    answer: (
      <>
        En principe oui : un contrat conclu à votre domicile (« hors
        établissement ») ouvre un droit de rétractation de 14 jours (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          article L.221-18 du Code de la consommation
        </a>
        , voir aussi la{" "}
        <a
          href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/vente-hors-etablissement-soyez-vigilant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          fiche pratique de la DGCCRF
        </a>
        ). Mais ce délai ne s&apos;applique pas quand vous demandez
        expressément une exécution immédiate de la prestation et renoncez
        explicitement à ce droit, le cas typique d&apos;un dépannage
        d&apos;urgence réalisé sur-le-champ (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563170"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          article L.221-28 du Code de la consommation
        </a>
        ).
      </>
    ),
  },
  {
    question: "Que faire en cas de litige avec un professionnel du dépannage ?",
    answer: (
      <>
        Vous pouvez signaler tout litige avec un professionnel sur{" "}
        <a
          href="https://signal.conso.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          SignalConso
        </a>
        , le service de signalement gratuit de la DGCCRF : le professionnel
        concerné est notifié et dispose d&apos;un délai pour vous répondre.
      </>
    ),
  },
];

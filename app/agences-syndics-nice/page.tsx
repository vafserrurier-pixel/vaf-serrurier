import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import TrustBadges from "@/components/TrustBadges";
import { CheckIcon, HandshakeIcon } from "@/components/Icons";
import type { ProcessStep } from "@/components/ProcessSteps";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/agences-syndics-nice/",
  title: "Serrurier partenaire agences & syndics à Nice | VAF",
  description: "Serrurier partenaire d'agences immobilières à Nice : changement de serrure entre locataires, dépannage, remise de clés. Ouvert aux syndics de copropriété.",
});

const sections = [
  {
    heading: "Déjà partenaire de plusieurs agences à Nice",
    paragraphs: [
      "Je travaille aujourd'hui avec deux agences immobilières à Nice, sur l'ensemble de leurs besoins en serrurerie : changement de serrure entre deux locataires, dépannage sur un logement vacant ou occupé, remise de clés au nouvel entrant, mise en sécurité après un départ compliqué ou une perte de clés. Le même artisan suit vos dossiers d'un bout à l'autre, sans sous-traitance.",
    ],
  },
  {
    heading: "Un tarif étudié selon votre volume",
    paragraphs: [
      "Le tarif d'un particulier ne s'applique pas nécessairement à une agence qui me sollicite régulièrement. J'applique un tarif préférentiel étudié au cas par cas, selon la fréquence et la nature de vos demandes : on en discute directement selon votre situation, plutôt qu'une grille figée qui ne correspondrait à personne.",
    ],
  },
  {
    heading: "Une facturation déjà conforme, prête pour la réforme 2026-2027",
    paragraphs: [
      "Chaque intervention donne lieu à une facture détaillée (nature des travaux, décompte des prestations et pièces, montants HT/TTC), un point souvent négligé chez les prestataires occasionnels mais indispensable pour la comptabilité d'une agence ou d'un syndic.",
      "La facturation électronique entre entreprises devient progressivement obligatoire en France : toutes les entreprises doivent déjà être en mesure de recevoir des factures électroniques depuis le 1er septembre 2026, et les PME et micro-entreprises comme la mienne devront à leur tour émettre leurs factures sous ce format à partir du 1er septembre 2027. Je me tiens prêt pour cette évolution réglementaire, comme je le suis déjà sur la conformité de mes devis et factures.",
    ],
    extra: (
      <p className="text-sm text-slate mt-2">
        Source :{" "}
        <a
          href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          economie.gouv.fr, calendrier de la réforme de facturation électronique
        </a>
        .
      </p>
    ),
  },
  {
    heading: "Pourquoi un artisan solo plutôt qu'un prestataire multi-comptes",
    paragraphs: [
      "Je ne gère pas des dizaines de comptes en simultané. C'est justement ce qui me permet de rester réactif et de connaître vos dossiers, plutôt que de vous renvoyer à un standard téléphonique à chaque appel. C'est le même serrurier qui vous répond, qui intervient, et qui reste joignable après.",
    ],
  },
];

const onboardingSteps: ProcessStep[] = [
  { title: "Premier contact", text: "Vous m'appelez pour me présenter votre structure et vos besoins habituels." },
  { title: "Échange sur votre volume", text: "On discute quelques minutes de la fréquence de vos demandes, pour définir un tarif adapté à votre situation." },
  { title: "Mise en place immédiate", text: "Pas de convention à signer : vous devenez client dès ce premier échange, à votre rythme." },
  { title: "Un contact direct dès que besoin", text: "Vous m'appelez pour chaque nouvelle demande, en solution principale ou en secours, sans standard ni sous-traitance." },
];

const syndicServices = [
  "Audit copropriété : passage complet de l'immeuble avec devis détaillé",
  "Entretien préventif des portes de hall, ferme-portes et gâches",
  "Sécurisation des accès communs, locaux techniques et parking",
  "Organigramme de clés avec passe général et passes partiels",
];

const agenceServices = [
  "Changement de serrure entre deux locataires",
  "Remise de clés neuves au nouvel entrant",
  "Dépannage sur un logement vacant ou occupé",
  "Mise en sécurité entre deux baux (impayé, départ compliqué, perte de clés)",
];

const faq = [
  { question: "Travaillez-vous déjà avec des agences immobilières à Nice ?", answer: "Oui, avec deux agences à ce jour, pour l'ensemble de leurs besoins en serrurerie sur leur parc locatif." },
  { question: "Proposez-vous un tarif spécifique pour les professionnels ?", answer: "Oui, un tarif préférentiel étudié au cas par cas selon le volume et la nature de vos demandes, à discuter directement." },
  { question: "Intervenez-vous pour les syndics de copropriété ?", answer: "Oui, via un audit copropriété et entretien préventif : passage complet de l'immeuble, devis détaillé poste par poste. Je n'ai pas encore de contrat récurrent avec un syndic, mais la prestation est disponible immédiatement, sur simple demande." },
  { question: "Combien coûte un audit de copropriété ?", answer: "Le prix dépend du nombre d'accès et du temps passé sur place : main-d'œuvre à 75 € de l'heure, déplacement et matériel remplacé le cas échéant, toujours communiqué avant intervention." },
  {
    question: "Qu'est-ce qu'un organigramme de clés, et le proposez-vous ?",
    answer: (
      <>
        Oui. Un organigramme de clés est un système hiérarchisé où le syndic ou le gestionnaire dispose d&apos;un passe
        général donnant accès à l&apos;ensemble des parties communes, tandis que chaque prestataire ou occupant ne
        reçoit qu&apos;un passe partiel limité à ce qui le concerne (son lot, son local, son accès). C&apos;est un
        livrable que je propose dans le cadre d&apos;un audit copropriété. Plus de détails dans{" "}
        <Link href="/blog/digicode-cles-hall-copropriete-nice/" className="text-steel underline">
          ce guide sur les clés de hall et l&apos;organigramme en copropriété
        </Link>
        .
      </>
    ),
  },
  { question: "Comment se passe un changement de serrure entre deux locataires ?", answer: "Je remplace le cylindre ou la serrure selon l'état constaté, avec remise de clés neuves. L'ancien locataire n'a alors plus accès au logement." },
  { question: "Intervenez-vous en urgence pour un logement vacant ou sinistré ?", answer: "Oui, avec le même délai que pour un particulier : je vous annonce un prix avant de me déplacer, quelle que soit l'urgence." },
  { question: "Faut-il signer un contrat ou une convention pour travailler avec vous ?", answer: "Non, pas de paperasse. On se met d'accord par téléphone sur le fonctionnement et le tarif, et je deviens votre contact dédié dès le premier appel." },
  { question: "Puis-je vous appeler seulement en solution de secours, sans changer de prestataire habituel ?", answer: "Oui, sans problème. Beaucoup de mises en relation démarrent comme ça : vous me contactez uniquement si votre interlocuteur habituel ne répond pas. C'est sans engagement." },
];

export default function AgencesSyndicsNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrurier partenaire des agences et syndics à Nice"
      lead="Déjà partenaire de deux agences immobilières à Nice pour leurs besoins en serrurerie, et ouvert à accompagner aussi les syndics de copropriété."
      preTitleBadge={
        <span className="inline-flex items-center gap-1.5 bg-steel/10 text-steel text-xs font-semibold px-3 py-1 rounded-full">
          <HandshakeIcon className="w-3.5 h-3.5" />
          Offre professionnelle : syndics & agences
        </span>
      }
      sections={sections}
      processSteps={onboardingSteps}
      faq={faq}
      breadcrumbLabel="Agences & syndics"
      path="/agences-syndics-nice/"
      image={{
        src: "/images/agences-syndics-remise-de-cles.webp",
        alt: "Remise d'un trousseau de clés entre deux personnes",
      }}
      extra={
        <>
          <section className="mx-auto max-w-4xl px-4 pt-6 pb-2">
            <TrustBadges locale="fr" />
          </section>

          <section className="mx-auto max-w-4xl px-4 py-10 grid gap-6 sm:grid-cols-2">
            <div className="bg-steel/5 border border-steel/20 rounded-2xl p-5">
              <h2 className="font-heading text-lg font-bold text-navy mb-1">Pour les syndics de copropriété</h2>
              <p className="text-sm text-slate mb-4">
                Je n&apos;ai pas encore de contrat d&apos;entretien récurrent avec un syndic à ce jour, mais l&apos;audit
                copropriété et l&apos;entretien préventif sont disponibles immédiatement, sur simple demande.
              </p>
              <ul className="grid gap-2">
                {syndicServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 bg-white border border-navy/10 rounded-lg px-4 py-2.5 text-sm text-navy">
                    <CheckIcon className="w-4 h-4 text-steel shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate mt-4">
                Pour la gestion des accès en copropriété (clés de hall, digicode, organigramme), j&apos;ai détaillé qui
                décide et qui paie dans{" "}
                <Link href="/blog/digicode-cles-hall-copropriete-nice/" className="text-steel underline">
                  ce guide
                </Link>
                .
              </p>
            </div>

            <div className="bg-navy/5 border border-navy/15 rounded-2xl p-5">
              <h2 className="font-heading text-lg font-bold text-navy mb-1">Pour les agences de gestion locative</h2>
              <p className="text-sm text-slate mb-4">
                Le même artisan suit vos dossiers d&apos;un bout à l&apos;autre sur l&apos;ensemble de votre parc
                locatif, sans sous-traitance.
              </p>
              <ul className="grid gap-2">
                {agenceServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 bg-white border border-navy/10 rounded-lg px-4 py-2.5 text-sm text-navy">
                    <CheckIcon className="w-4 h-4 text-steel shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      }
      relatedArticle={{
        href: "/blog/digicode-cles-hall-copropriete-nice/",
        label: "Clés de hall, digicode, organigramme : qui décide en copropriété ?",
      }}
    />
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceGrid from "@/components/ServiceGrid";
import ReviewsSection from "@/components/ReviewsSection";
import FaqAccordion from "@/components/FaqAccordion";
import LazyMap from "@/components/LazyMap";
import ContactForm from "@/components/ContactForm";
import KeyBitDivider from "@/components/KeyBitDivider";
import { PriceTagIcon, HandshakeIcon, StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/" },
  title: "Serrurier Nice 24h/24 – Devis avant intervention | VAF",
  description:
    "Serrurier artisan à Nice, joignable 24h/24 et 7j/7. Ouverture de porte, dépannage, changement de serrure, porte blindée. Prix annoncé avant intervention, sans surprise.",
};

const homeFaq = [
  {
    question: "Y a-t-il un serrurier ouvert maintenant près de moi à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice, y compris la nuit, le week-end et les jours fériés. Vous m'appelez, je vous dis dans combien de temps je peux être sur place.",
  },
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "À partir de 149 € TTC pour une ouverture de porte standard, avec une majoration de 50% après 19h, le week-end et les jours fériés. Le détail complet est sur ma page tarifs, et le prix exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Donnez-vous un devis avant l'intervention ?",
    answer:
      "Systématiquement, et ce n'est pas une option : la loi oblige tout serrurier à annoncer son prix avant de commencer les travaux. Je vous le confirme sur place avant d'intervenir.",
  },
  {
    question: "Dans quels quartiers de Nice intervenez-vous ?",
    answer:
      "Je couvre l'ensemble de Nice — centre, est, nord et ouest, du Vieux-Nice à Fabron en passant par Cimiez ou Riquier. Voir le détail sur la page zones d'intervention.",
  },
  {
    question: "Pourquoi choisir un artisan serrurier solo plutôt qu'une grande enseigne ?",
    answer:
      "Parce que c'est moi qui réponds au téléphone, moi qui viens, et moi qui reste joignable après l'intervention si besoin. Pas d'intermédiaire, pas de sous-traitance, un seul interlocuteur du premier appel à la fin du chantier.",
  },
  {
    question: "Travaillez-vous aussi bien sur les urgences que sur les projets programmés ?",
    answer:
      "Oui. Les urgences (porte claquée, effraction) passent en priorité, mais j'interviens tout autant sur des projets réfléchis à l'avance comme un changement de serrure ou l'installation d'une porte blindée.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />

      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-steel/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-urgent/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 grid gap-10 sm:grid-cols-2 items-center">
          <div className="text-center sm:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
              Serrurier à Nice, disponible 24h/24
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-xl mx-auto sm:mx-0">
              Porte claquée, serrure bloquée, effraction : vous m&apos;expliquez la
              situation, j&apos;annonce un prix avant de me déplacer. Ce qui compte,
              c&apos;est la transparence, pas les promesses.
            </p>
            <a
              href={business.phone.href}
              className="inline-block mt-6 bg-urgent text-white font-semibold px-8 py-3.5 rounded-full text-lg shadow-lg shadow-urgent/20 hover:opacity-90 transition-opacity"
            >
              Appeler <span className="font-tabular-nums">{business.phone.display}</span>
            </a>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/serrurier-nice-porte-cle.webp"
              alt="Porte d'entrée équipée d'une serrure moderne avec clés, serrurier à Nice"
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <KeyBitDivider className="relative text-steel/30" />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">
          Un serrurier artisan, pas une plateforme d&apos;intermédiaires
        </h2>
        <div className="text-slate leading-relaxed flex flex-col gap-3">
          <p>
            Je m&apos;appelle Benoît, artisan serrurier installé au 2 Rue Antoine
            Gautier à Nice. Ici, pas de standard qui redirige votre appel vers un
            sous-traitant inconnu : c&apos;est moi qui décroche, moi qui diagnostique au
            téléphone, et moi qui viens sur place.
          </p>
          <p>
            J&apos;interviens sur toute la ville, du Vieux-Nice à la Promenade des
            Anglais, en passant par Cimiez, Riquier ou Fabron, pour tout ce qui touche
            à la serrurerie : ouverture de porte, dépannage d&apos;une serrure bloquée,
            changement de cylindre, installation ou blindage de porte, et mise en
            sécurité après une effraction. Le prix est toujours annoncé avant que je
            commence, et les 150 avis 5 étoiles laissés sur ma fiche Google portent
            surtout sur un point : aucune mauvaise surprise sur la facture.
          </p>
          <p>
            Toutes les situations ne se ressemblent pas. Certaines demandent une
            réponse immédiate — une porte claquée avec les clés à l&apos;intérieur, un
            cambriolage à sécuriser dans l&apos;heure — et d&apos;autres se préparent
            calmement, comme le remplacement d&apos;une serrure vieillissante ou
            l&apos;installation d&apos;une porte blindée avant l&apos;été. Dans les deux
            cas, la méthode reste la même : je diagnostique d&apos;abord, j&apos;annonce
            un prix ensuite, et je n&apos;interviens qu&apos;une fois que vous avez dit
            oui.
          </p>
          <p>
            Cette approche vaut aussi bien pour un particulier dans son appartement du
            centre-ville que pour un syndic ou une agence immobilière gérant plusieurs
            biens sur Nice : mêmes explications claires, même devis annoncé avant
            travaux, et un seul interlocuteur à qui se référer d&apos;une intervention à
            l&apos;autre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <p className="text-center font-heading font-semibold text-navy mb-6">
          Comment se déroule mon intervention
        </p>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">
          Mes services de serrurerie à Nice
        </h2>
        <ServiceGrid />
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <PriceTagIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">
              Prix annoncé avant
            </p>
            <p className="text-sm text-slate leading-relaxed">
              Le devis vous est communiqué avant que je touche à quoi que ce soit — c&apos;est
              une obligation légale que je respecte systématiquement, urgence ou non.
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <HandshakeIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">
              Un artisan, pas un centre d&apos;appel
            </p>
            <p className="text-sm text-slate leading-relaxed">
              Vous parlez directement à la personne qui va intervenir chez vous, du
              premier appel jusqu&apos;à la fin du chantier.
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <StarIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">
              5,0/5 sur plus de 150 avis
            </p>
            <p className="text-sm text-slate leading-relaxed">
              Des avis Google vérifiés, pas des témoignages mis en scène. Vous pouvez les
              consulter avant de m&apos;appeler.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <ReviewsSection />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">
            Zone d&apos;intervention à Nice
          </h2>
          <p className="text-slate text-sm mb-4">
            J&apos;interviens dans tous les quartiers de Nice, centre, est, nord et
            ouest, depuis le {business.address.full}.{" "}
            <Link href="/zones-intervention-nice/" className="text-steel underline">
              Voir tous les secteurs couverts
            </Link>
            .
          </p>
          <LazyMap />
        </div>
        <div id="contact">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">
            Un devis ou une intervention ?
          </h2>
          <p className="text-slate text-sm mb-4">
            Décrivez votre situation, je vous réponds vite. Pour une urgence, l&apos;appel
            reste le moyen le plus rapide.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6">
          Questions fréquentes
        </h2>
        <FaqAccordion items={homeFaq} />
      </section>
    </>
  );
}

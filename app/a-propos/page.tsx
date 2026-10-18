import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import HeroCtas from "@/components/HeroCtas";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ArticleTable from "@/components/ArticleTable";
import CtaBlock from "@/components/CtaBlock";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/a-propos/",
  title: "Benoît, artisan serrurier à Nice depuis 2011",
  description:
    "Benoît, serrurier depuis 2011, CAP Serrurier Métallier, à son compte à Nice depuis 2023. Seul sur chaque intervention, sans sous-traitant, prix annoncé avant.",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const h2Class = "font-heading text-xl font-bold text-navy mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed";

const faq: FaqItem[] = [
  {
    question: "Êtes-vous un vrai artisan ou une plateforme ?",
    answer:
      "Un artisan. Je suis serrurier depuis 2011 et j'ai ma propre entreprise à Nice depuis 2023, avec une boutique au 2 rue Antoine Gautier. Votre appel n'est pas transmis à un réseau : c'est moi qui viens.",
  },
  {
    question: "Sous-traitez-vous certaines interventions ?",
    answer: "Non. Je fais moi-même chaque intervention, du dépannage à la pose d'une porte blindée.",
  },
  {
    question: "Êtes-vous assuré ?",
    answer:
      "Oui : responsabilité civile professionnelle et garantie décennale, chez APRIL. Mon SIRET, 980 385 868 00032, est vérifiable.",
  },
  {
    question: "Quelles marques de serrures connaissez-vous ?",
    answer:
      "Toutes les grandes marques, des cylindres courants aux serrures haut de gamme. Si votre serrure est d'une marque particulière, envoyez-moi une photo de la clé : je vous dis au téléphone ce que je peux faire et à quel prix.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "À propos", url: `${business.domain}/a-propos/` },
        ])}
      />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-10 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "À propos", href: "/a-propos/" }]} />
            <AvailabilityBadge />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Benoît, artisan serrurier à Nice depuis 2011
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-2xl">
              Je m&apos;appelle Benoît. Je suis serrurier depuis 2011, et depuis 2023 j&apos;ai ma propre entreprise à
              Nice, avec ma boutique au 2 rue Antoine Gautier, dans le 06300. Quand vous appelez, c&apos;est moi qui
              décroche. Quand quelqu&apos;un vient chez vous, c&apos;est moi. Pas de standard, pas de sous-traitant.
            </p>
            <HeroCtas callLabel="Appeler" whatsappLabel="Écrire sur WhatsApp" pricingLabel="Voir les tarifs" showWhatsapp={false} />
          </div>
          <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/serrurier-nice-a-propos.webp"
              alt="Benoît, serrurier à Nice"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
        <div>
          <h2 className={h2Class}>Mon parcours</h2>
          <div className="mb-4">
            <ArticleTable
              headers={["Année", "Étape"]}
              rows={[
                ["2011", "Mes débuts dans l'entreprise de mon frère, à Paris, l'une des plus grandes sociétés de serrurerie en France"],
                ["De 2011 à 2023", "Des années de chantiers et d'urgences, qui m'ont appris le métier sur le terrain"],
                ["2023", "Création de ma propre entreprise, Votre Artisan Français, à Nice"],
              ]}
            />
          </div>
          <p className={pClass}>
            J&apos;ai un CAP Serrurier Métallier. Mais c&apos;est sur le terrain qu&apos;on apprend vraiment ce métier :
            une porte claquée un dimanche soir, un cylindre arraché après une effraction, une vieille serrure qu&apos;il
            faut réparer sans abîmer la porte. Après toutes ces années à Paris, je connais les serrures de toutes les
            marques, des plus courantes aux plus haut de gamme.
          </p>
        </div>

        <div>
          <h2 className={h2Class}>Pourquoi je travaille seul</h2>
          <p className={pClass}>
            La serrurerie a mauvaise réputation : prix gonflés une fois la porte ouverte, frais cachés, interventions
            qu&apos;on ne peut pas justifier. J&apos;ai créé mon entreprise pour travailler autrement, à mon nom, et pour
            pouvoir répondre de chaque intervention.
          </p>
          <p className={`${pClass} mt-2`}>
            Travailler seul, c&apos;est aussi ce qui me permet de tenir mes engagements. Je sais qui intervient chez
            vous, puisque c&apos;est moi. Je connais mes prix, puisque c&apos;est moi qui les fixe. Et vous avez le
            même interlocuteur du premier appel jusqu&apos;à la facture.
          </p>
        </div>

        <div>
          <h2 className={h2Class}>Ce que je vous garantis</h2>
          <ul className={listClass}>
            <li>
              <strong className="text-navy">Le prix avant de partir.</strong> Je vous l&apos;annonce au téléphone, et
              je vous le confirme sur place avant de commencer. Pour un dépannage à domicile, c&apos;est d&apos;ailleurs
              une obligation légale.
            </li>
            <li>
              <strong className="text-navy">Sur place en 30 minutes en urgence</strong>, 24h/24 et 7j/7.
            </li>
            <li>
              <strong className="text-navy">Un seul interlocuteur</strong>, sans standard ni sous-traitance.
            </li>
            <li>
              <strong className="text-navy">Une facture détaillée</strong> pour chaque intervention, utile pour votre
              assurance ou votre bailleur.
            </li>
            <li>
              <strong className="text-navy">Ma pose garantie 2 ans</strong>, en plus de la garantie du fabricant sur le
              matériel.
            </li>
          </ul>
        </div>

        <div>
          <h2 className={h2Class}>Ce que je fais</h2>
          <p className={pClass}>
            Je m&apos;occupe de tout ce qui touche à vos portes et à vos serrures :{" "}
            <Link href="/ouverture-de-porte-nice/" className={linkClass}>
              ouverture de porte
            </Link>
            ,{" "}
            <Link href="/changement-serrure-nice/" className={linkClass}>
              changement de serrure
            </Link>{" "}
            ou de cylindre,{" "}
            <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
              mise en sécurité après effraction
            </Link>
            ,{" "}
            <Link href="/blindage-porte-nice/" className={linkClass}>
              blindage de porte
            </Link>
            , pose de{" "}
            <Link href="/installation-porte-blindee-nice/" className={linkClass}>
              porte blindée
            </Link>
            , ouverture et installation de{" "}
            <Link href="/installation-coffre-fort-nice/" className={linkClass}>
              coffre-fort
            </Link>
            . Je travaille aussi avec deux{" "}
            <Link href="/agences-syndics-nice/" className={linkClass}>
              agences immobilières
            </Link>{" "}
            à Nice, et je propose le même service aux syndics de copropriété et aux conciergeries. Tous mes prix sont
            affichés sur{" "}
            <Link href="/tarifs-serrurier-nice/" className={linkClass}>
              ma page tarifs
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className={h2Class}>Où j&apos;interviens</h2>
          <p className={pClass}>
            J&apos;interviens dans tout Nice, découpé en quatre secteurs :{" "}
            <Link href="/serrurier-nice-centre/" className={linkClass}>
              Centre
            </Link>
            ,{" "}
            <Link href="/serrurier-nice-est/" className={linkClass}>
              Est
            </Link>
            ,{" "}
            <Link href="/serrurier-nice-nord/" className={linkClass}>
              Nord
            </Link>{" "}
            et{" "}
            <Link href="/serrurier-nice-ouest/" className={linkClass}>
              Ouest
            </Link>
            . J&apos;interviens aussi dans les communes voisines :{" "}
            <Link href="/serrurier-cagnes-sur-mer/" className={linkClass}>
              Cagnes-sur-Mer
            </Link>
            ,{" "}
            <Link href="/serrurier-saint-laurent-du-var/" className={linkClass}>
              Saint-Laurent-du-Var
            </Link>
            ,{" "}
            <Link href="/serrurier-villefranche-sur-mer/" className={linkClass}>
              Villefranche-sur-Mer
            </Link>
            ,{" "}
            <Link href="/serrurier-beaulieu-sur-mer/" className={linkClass}>
              Beaulieu-sur-Mer
            </Link>{" "}
            et{" "}
            <Link href="/serrurier-eze/" className={linkClass}>
              Èze
            </Link>
            , avec les mêmes prix qu&apos;à Nice, déplacement compris.
          </p>
        </div>

        <div>
          <h2 className={h2Class}>Mon entreprise</h2>
          <div className="overflow-x-auto rounded-lg border border-navy/10 mb-4">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {[
                  ["Nom", "Votre Artisan Français"],
                  ["Forme", "SASU au capital de 1 000 €"],
                  ["Immatriculation", "RCS Nice 980 385 868, SIRET 980 385 868 00032"],
                  ["Assurances", "Responsabilité civile professionnelle et garantie décennale, chez APRIL"],
                  ["Boutique", "2 rue Antoine Gautier, 06300 Nice"],
                  ["Téléphone", "04 22 13 85 44, ou 06 41 78 55 56 par WhatsApp et SMS"],
                  ["E-mail", "vafserrurier@gmail.com"],
                ].map(([label, value], index) => (
                  <tr key={label} className={index % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <th
                      scope="row"
                      className="text-left font-heading font-semibold text-navy px-4 py-2.5 align-top whitespace-nowrap"
                    >
                      {label}
                    </th>
                    <td className="px-4 py-2.5 text-slate align-top">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            Toutes ces informations figurent aussi dans mes{" "}
            <Link href="/mentions-legales/" className={linkClass}>
              mentions légales
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-xl font-bold text-navy mb-6 text-center">Questions fréquentes</h2>
          <FaqAccordion items={faq} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <CtaBlock title="Une question avant de m'appeler ?" />
      </section>
    </>
  );
}

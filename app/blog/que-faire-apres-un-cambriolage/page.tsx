import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleToc from "@/components/ArticleToc";
import ArticleTable from "@/components/ArticleTable";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleOpinion from "@/components/ArticleOpinion";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { ClockIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const HREF = "/blog/que-faire-apres-un-cambriolage/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Que faire après un cambriolage : les bons réflexes | VAF",
  description: "Cambriolage à Nice : les démarches à suivre dans l'ordre, ce qu'il ne faut pas faire, et comment sécuriser votre porte avant de reconstituer votre dossier.",
});

const toc = [
  { id: "ne-rien-toucher", label: "D'abord, ne touchez à rien" },
  { id: "opposition", label: "Faites opposition sur vos moyens de paiement" },
  { id: "plainte", label: "Portez plainte dans les 48 heures" },
  { id: "photos", label: "Photographiez tout avant de ranger" },
  { id: "assurance", label: "Prévenez votre assurance : le délai légal" },
  { id: "securiser", label: "Sécurisez votre porte avant de reconstituer le reste" },
  { id: "syndic", label: "Si vous êtes en copropriété, prévenez le syndic" },
  { id: "pourquoi-porte", label: "Pourquoi la porte d'entrée reste prioritaire" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Dois-je porter plainte même si les cambrioleurs n'ont rien emporté ?",
    answer:
      "Oui. Une tentative d'effraction sans vol laisse quand même des dégâts (porte forcée, serrure abîmée) et le dépôt de plainte reste le document de référence pour votre assurance et pour les statistiques locales de sécurité.",
  },
  {
    question: "Combien de temps ai-je vraiment pour déclarer le sinistre à mon assurance ?",
    answer:
      "La loi (article L.113-2 du Code des assurances) impose un délai de 2 jours ouvrés pour un vol ou un cambriolage, contre 5 jours pour la plupart des autres sinistres. Certains contrats prévoient un délai plus favorable : vérifiez le vôtre, mais ne comptez jamais sur plus de 2 jours ouvrés par défaut.",
  },
  {
    question: "Puis-je nettoyer ou ranger avant le passage de la police ?",
    answer:
      "Évitez tant que possible : les enquêteurs peuvent relever des traces utiles (empreintes, outils utilisés). Attendez au moins d'avoir déposé plainte et pris vos photos avant de commencer à tout remettre en ordre.",
  },
  {
    question: "Qui peut sécuriser ma porte en urgence, y compris la nuit ou le week-end ?",
    answer:
      "J'interviens 24h/24 et 7j/7 sur Nice pour une mise en sécurité immédiate après une effraction : blocage temporaire ou remplacement selon l'ampleur des dégâts, avec une facture détaillée pour votre dossier.",
  },
  {
    question: "Mon assurance peut-elle refuser de m'indemniser ?",
    answer:
      "Cela dépend des conditions de votre contrat (traces d'effraction constatées, délai de déclaration respecté, éventuelles clauses de vétusté). Si le délai légal de 2 jours ouvrés n'est pas respecté et que l'assureur prouve un préjudice causé par ce retard, il peut réduire l'indemnisation. Le dépôt de plainte et une facture détaillée de la remise en sécurité restent les deux documents qui appuient le plus solidement un dossier.",
  },
  {
    question: "Dois-je changer toute la serrure ou seulement réparer ce qui a été forcé ?",
    answer:
      "Ça dépend du diagnostic : si le cylindre a été percé ou arraché, un simple remplacement de cylindre peut suffire. Si le bâti ou le coffre de serrure est endommagé, un changement plus complet est souvent nécessaire pour retrouver une sécurité fiable.",
  },
  {
    question: "Je suis locataire : qui prend en charge la réparation de la porte ?",
    answer:
      "En général, c'est l'assurance habitation du locataire occupant qui couvre les dégâts liés à une effraction, sous réserve du dépôt de plainte. Le sujet est détaillé dans mon article sur qui paie le changement de serrure en location.",
  },
];

export default function QueFaireApresUnCambriolagePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Que faire après un cambriolage : les bons réflexes",
          description:
            "Cambriolage à Nice : les démarches à suivre dans l'ordre, ce qu'il ne faut pas faire, et comment sécuriser votre porte avant de reconstituer votre dossier.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Que faire après un cambriolage", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Que faire après un cambriolage", href: HREF },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Que faire après un cambriolage : les bons réflexes
      </h1>
      <p className="flex items-center gap-1.5 text-xs text-slate mt-3">
        <ClockIcon className="w-3.5 h-3.5" />8 min de lecture &middot; Mis à jour le 12 septembre 2026
      </p>

      <div className="mt-6">
        <TrustBadges />
      </div>

      <div className="mt-8">
        <ArticleSummary
          points={[
            "Ne touchez à rien avant le passage de la police : les traces laissées sont des preuves utiles.",
            "Faites opposition sur vos moyens de paiement disparus, puis portez plainte sous 48h.",
            "La loi impose 2 jours ouvrés pour déclarer un cambriolage à votre assurance, pas plus.",
            "Une porte forcée doit être sécurisée sans attendre, avant de reconstituer le reste du dossier.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Découvrir sa porte forcée ou son logement fouillé est un choc, et la première
          réaction est rarement la bonne. Voici l&apos;ordre des démarches recommandé
          par les forces de l&apos;ordre, pour ne rien oublier et ne pas compromettre
          votre dossier d&apos;assurance.
        </p>

        <div>
          <ArticleSectionHeading number={1} id="ne-rien-toucher">
            D&apos;abord, ne touchez à rien
          </ArticleSectionHeading>
          <p>
            Avant même de constater les dégâts en détail, résistez à l&apos;envie de
            tout ranger. Chaque trace laissée par les cambrioleurs (empreintes, objets
            déplacés, marques d&apos;outils sur la porte) est une preuve utile pour
            l&apos;enquête. Si le logement semble encore occupé ou si vous avez un
            doute sur la présence des cambrioleurs, ne rentrez pas et appelez le 17
            depuis l&apos;extérieur.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/benoit-serrurier-avant-intervention-nice.webp"
            alt="Diagnostic d'une porte avant intervention par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <ArticleSectionHeading number={2} id="opposition">
            Faites opposition sur vos moyens de paiement
          </ArticleSectionHeading>
          <p>
            Avant même de porter plainte, vérifiez si des cartes bancaires, chéquiers
            ou papiers d&apos;identité ont disparu. Le cas échéant, faites opposition
            sans attendre : c&apos;est une course contre la montre, et ça peut se faire
            depuis votre téléphone pendant que vous patientez pour la suite.
          </p>
        </div>

        <div>
          <ArticleSectionHeading number={3} id="plainte">
            Portez plainte dans les 48 heures
          </ArticleSectionHeading>
          <p>
            Rendez-vous au commissariat ou à la brigade de gendarmerie la plus proche,
            muni d&apos;une pièce d&apos;identité et, si possible, d&apos;une liste des
            objets volés avec leur valeur estimée. Le dépôt de plainte est aussi
            possible en ligne sur le site du ministère de l&apos;Intérieur. Ce document
            sera indispensable pour votre déclaration à l&apos;assurance.
          </p>
        </div>

        <div>
          <ArticleSectionHeading number={4} id="photos">
            Photographiez tout avant de ranger
          </ArticleSectionHeading>
          <p>
            Une fois le dépôt de plainte fait, prenez le temps de photographier chaque
            pièce touchée avant de commencer à ranger : la porte forcée, les tiroirs
            ouverts, les emplacements vides. Ces photos datées appuient votre déclaration
            de sinistre et évitent les contestations sur l&apos;étendue des dégâts. Si
            vous avez des factures, des photos anciennes ou des garanties pour les objets
            volés, rassemblez-les aussi : l&apos;assurance les demande presque toujours
            pour chiffrer l&apos;indemnisation.
          </p>
        </div>

        <div>
          <ArticleSectionHeading number={5} id="assurance">
            Prévenez votre assurance : le délai légal
          </ArticleSectionHeading>
          <p>
            Contrairement à une idée reçue, le délai n&apos;est pas laissé à
            l&apos;appréciation de chaque assureur : l&apos;
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006791998/1986-01-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel underline"
            >
              article L.113-2 du Code des assurances
            </a>{" "}
            impose un délai de <strong>2 jours ouvrés</strong> pour déclarer un vol ou
            un cambriolage, contre 5 jours pour la plupart des autres sinistres. Un
            cambriolage découvert un vendredi doit donc être déclaré au plus tard le
            mardi suivant. Certains contrats prévoient un délai plus favorable, mais
            aucun ne peut être plus strict que ce minimum légal. Transmettez une copie
            du dépôt de plainte et une déclaration écrite décrivant les faits et les
            biens volés ou endommagés.
          </p>
        </div>

        <div>
          <ArticleSectionHeading number={6} id="securiser">
            Sécurisez votre porte avant de reconstituer le reste
          </ArticleSectionHeading>
          <p>
            Une porte forcée qui reste dans cet état est une invitation à une seconde
            visite, en particulier si le logement est visiblement vide le temps que vous
            organisiez la suite.
          </p>
          <div className="mt-4">
            <h3 className="font-heading font-semibold text-navy mb-1">
              Une solution temporaire, dans l&apos;heure
            </h3>
            <p>
              Je peux intervenir 24h/24 pour une{" "}
              <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
                mise en sécurité immédiate
              </Link>{" "}
              : blocage provisoire de l&apos;ouvrant ou remplacement du cylindre selon
              l&apos;ampleur des dégâts, simplement pour fermer le logement le temps que
              vous organisiez la suite.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-heading font-semibold text-navy mb-1">
              Une solution durable, après diagnostic
            </h3>
            <p>
              Je vous propose ensuite une solution durable, éventuellement une{" "}
              <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
                porte blindée
              </Link>
              , une fois le diagnostic complet effectué. Je vous fournis systématiquement
              une facture détaillée, le document généralement demandé pour votre
              déclaration de sinistre — voir mes{" "}
              <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                tarifs annoncés à l&apos;avance
              </Link>
              .
            </p>
          </div>
        </div>

        <ArticleTable
          caption="Ordre des démarches recommandé après une effraction constatée."
          headers={["Étape", "Délai conseillé", "Objectif"]}
          rows={[
            ["Ne rien toucher", "Immédiat", "Préserver les preuves pour l'enquête"],
            ["Opposition cartes/papiers", "Dès que possible", "Limiter un usage frauduleux"],
            ["Dépôt de plainte", "Sous 48h", "Document de référence pour l'assurance"],
            ["Photos des dégâts", "Après le dépôt de plainte", "Appuyer la déclaration de sinistre"],
            ["Déclaration à l'assurance", "2 jours ouvrés maximum (L.113-2)", "Enclencher la prise en charge"],
            ["Sécurisation de la porte", "24h/24, dès que possible", "Éviter une seconde intrusion"],
            ["Information du syndic", "Rapidement si copropriété", "Vérifier les autres logements visés"],
          ]}
        />

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/porte-blindee-pose-serrurier-nice.webp"
            alt="Pose d'une porte blindée par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <ArticleSectionHeading number={7} id="syndic">
            Si vous êtes en copropriété, prévenez le syndic
          </ArticleSectionHeading>
          <p>
            Une effraction sur une porte palière ou une tentative sur la porte de hall
            concerne aussi les autres occupants de l&apos;immeuble. Signalez l&apos;incident
            au{" "}
            <Link href="/agences-syndics-nice/" className="text-steel underline">
              syndic
            </Link>{" "}
            ou au gardien s&apos;il y en a un : ça permet de vérifier si
            d&apos;autres logements ont été visés, et parfois de déclencher un renforcement
            de la porte d&apos;entrée collective (digicode, gâche électrique, vidéosurveillance).
            Prévenir vos voisins directs reste aussi un bon réflexe, ne serait-ce que pour
            comparer les observations si plusieurs logements ont été touchés le même jour.
          </p>
        </div>

        <div>
          <ArticleSectionHeading number={8} id="pourquoi-porte">
            Pourquoi la porte d&apos;entrée reste le point à renforcer en priorité
          </ArticleSectionHeading>
          <p>
            Selon les{" "}
            <a
              href="https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel underline"
            >
              données statistiques du ministère de l&apos;Intérieur
            </a>
            , la porte d&apos;entrée principale concentre une grande part des cas d&apos;intrusion
            ou de tentative d&apos;intrusion dans les logements, loin devant les autres
            points d&apos;accès. Une porte correctement équipée reste le moyen le plus
            direct de limiter ce risque : la plupart des tentatives s&apos;arrêtent
            face à une serrure qui résiste plus de quelques minutes.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ArticleOpinion quote="Je sécurise toujours en premier, avant de parler papiers. Une porte qui reste ouverte une nuit de plus est un risque que je ne fais jamais prendre à un client, même en pleine reconstitution de dossier." />
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "Ne touchez à rien et ne rangez pas avant d'avoir déposé plainte.",
            "Faites opposition sur vos moyens de paiement disparus sans attendre.",
            "La déclaration à l'assurance a un délai légal de 2 jours ouvrés, pas plus.",
            "Sécurisez la porte dans la foulée : une facture détaillée appuie votre déclaration de sinistre.",
          ]}
        />
      </div>

      <div className="mt-10">
        <ArticleSectionHeading number={9} id="faq">
          Foire aux questions
        </ArticleSectionHeading>
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mt-10">
        <AuthorBox />
      </div>

      <div className="mt-10">
        <CtaBlock title="Besoin d'une sécurisation en urgence après une effraction ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}

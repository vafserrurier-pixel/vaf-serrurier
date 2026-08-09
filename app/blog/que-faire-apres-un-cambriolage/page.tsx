import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/blog/que-faire-apres-un-cambriolage/" },
  title: "Que faire après un cambriolage : les bons réflexes | VAF",
  description:
    "Cambriolage à Nice : les démarches à suivre dans l'ordre, ce qu'il ne faut surtout pas faire, et comment sécuriser votre porte avant de reconstituer votre dossier.",
};

export default function QueFaireApresUnCambriolagePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Que faire après un cambriolage",
            url: `${business.domain}/blog/que-faire-apres-un-cambriolage/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Que faire après un cambriolage", href: "/blog/que-faire-apres-un-cambriolage/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Que faire après un cambriolage : les bons réflexes
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Découvrir sa porte forcée ou son logement fouillé est un choc, et la première
          réaction est rarement la bonne. Voici l&apos;ordre des démarches recommandé
          par les forces de l&apos;ordre, pour ne rien oublier et ne pas compromettre
          votre dossier d&apos;assurance.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            D&apos;abord, ne touchez à rien
          </h2>
          <p>
            Avant même de constater les dégâts en détail, résistez à l&apos;envie de
            tout ranger. Chaque trace laissée par les cambrioleurs — empreintes, objets
            déplacés, marques d&apos;outils sur la porte — est une preuve utile pour
            l&apos;enquête. Si le logement semble encore occupé ou si vous avez un
            doute sur la présence des cambrioleurs, ne rentrez pas et appelez le 17
            depuis l&apos;extérieur.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Faites opposition sur vos moyens de paiement
          </h2>
          <p>
            Avant même de porter plainte, vérifiez si des cartes bancaires, chéquiers
            ou papiers d&apos;identité ont disparu. Le cas échéant, faites opposition
            sans attendre — c&apos;est une course contre la montre, et ça peut se faire
            depuis votre téléphone pendant que vous patientez pour la suite.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Portez plainte dans les 48 heures
          </h2>
          <p>
            Rendez-vous au commissariat ou à la brigade de gendarmerie la plus proche,
            muni d&apos;une pièce d&apos;identité et, si possible, d&apos;une liste des
            objets volés avec leur valeur estimée. Le dépôt de plainte est aussi
            possible en ligne sur le site du ministère de l&apos;Intérieur. Ce document
            sera indispensable pour votre déclaration à l&apos;assurance.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Prévenez votre assurance rapidement
          </h2>
          <p>
            La plupart des contrats multirisques habitation imposent un délai de
            déclaration après un cambriolage — vérifiez le vôtre, mais n&apos;attendez
            pas. Transmettez une copie du dépôt de plainte et une déclaration écrite
            décrivant les faits et les biens volés ou endommagés.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Sécurisez votre porte avant de reconstituer le reste
          </h2>
          <p>
            Une porte forcée qui reste dans cet état est une invitation à une seconde
            visite, en particulier si le logement est visiblement vide le temps que vous
            organisiez la suite. Je peux intervenir 24h/24 pour une mise en sécurité
            immédiate — blocage temporaire ou remplacement selon l&apos;ampleur des
            dégâts — puis vous proposer une solution durable une fois le diagnostic
            complet effectué. Je vous fournis systématiquement une facture détaillée,
            le document généralement demandé pour votre déclaration de sinistre.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Pourquoi la porte d&apos;entrée reste le point à renforcer en priorité
          </h2>
          <p>
            Selon les données statistiques du ministère de l&apos;Intérieur, la porte
            d&apos;entrée principale concentre une grande part des cas d&apos;intrusion
            ou de tentative d&apos;intrusion dans les logements, loin devant les autres
            points d&apos;accès. Une porte correctement équipée reste le moyen le plus
            direct de limiter ce risque : la plupart des tentatives s&apos;arrêtent
            face à une serrure qui résiste plus de quelques minutes.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Besoin d'une sécurisation en urgence après une effraction ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
          mise en sécurité après effraction
        </Link>{" "}
        et{" "}
        <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
          installation de porte blindée
        </Link>
        .
      </p>
    </article>
  );
}

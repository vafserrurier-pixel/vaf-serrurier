import { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function LegalPageLayout({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: title, href: path }]} />
      <h1 className="font-heading text-3xl font-bold text-navy mb-6">{title}</h1>
      <div className="flex flex-col gap-5 text-sm text-slate leading-relaxed [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-navy [&_h2]:text-base [&_h2]:mt-2">
        {children}
      </div>
    </section>
  );
}

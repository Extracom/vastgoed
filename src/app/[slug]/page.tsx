import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddressForm from "@/components/AddressForm";
import InkoperCard from "@/components/InkoperCard";
import { SITUATIES, vindSituatie } from "@/lib/situaties";
import { CONTAINER } from "@/lib/ui";

export function generateStaticParams() {
  return SITUATIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const situatie = vindSituatie(slug);
  if (!situatie) return {};
  return {
    title: { absolute: situatie.metaTitle },
    description: situatie.metaDescription,
    alternates: { canonical: `/${situatie.slug}` },
  };
}

export default async function SituatiePagina({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const situatie = vindSituatie(slug);
  if (!situatie) notFound();

  const overige = SITUATIES.filter((s) => s.slug !== situatie.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: situatie.faq.map((item) => ({
      "@type": "Question",
      name: item.v,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={`${CONTAINER} py-12 sm:py-16`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="max-w-3xl text-4xl leading-tight text-petrol">{situatie.titel}</h1>
      <div className="mt-3 h-px w-16 bg-brass" aria-hidden />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <article>
          <p className="text-lg text-muted">{situatie.intro}</p>

          {situatie.secties.map((sectie) => (
            <section key={sectie.kop} className="mt-10">
              <h2 className="text-2xl text-petrol">{sectie.kop}</h2>
              {sectie.alineas.map((alinea) => (
                <p key={alinea.slice(0, 40)} className="mt-3 text-muted">
                  {alinea}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-12 border-t border-line pt-8">
            <h2 className="text-2xl text-petrol">Veelgestelde vragen</h2>
            <dl className="mt-6 space-y-6">
              {situatie.faq.map((item) => (
                <div key={item.v}>
                  <dt className="font-medium">{item.v}</dt>
                  <dd className="mt-1 text-muted">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        <aside className="space-y-5 self-start lg:sticky lg:top-24">
          <div className="bg-petrol p-7 text-offwhite">
            <h2 className="font-serif text-xl">Begin met uw adres</h2>
            <p className="mt-2 text-sm text-offwhite/80">
              Vertrouwelijk, vrijblijvend, binnen 24 uur persoonlijk contact.
            </p>
            <div className="mt-5">
              <AddressForm compact donker kolom />
            </div>
          </div>
          <InkoperCard />
          <nav className="border border-line p-7" aria-label="Andere situaties">
            <p className="text-sm font-medium tracking-wide text-brass">OOK INTERESSANT</p>
            <ul className="mt-4 space-y-2 text-sm">
              {overige.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-graphite hover:text-petrol">
                    {s.titel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

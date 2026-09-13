import type { Metadata } from "next";
import { Suspense } from "react";
import IntakeFormulier from "./IntakeFormulier";

export const metadata: Metadata = {
  title: "Uw aanvraag",
  description:
    "Bespreek uw vastgoed rechtstreeks met onze inkoper. Vertrouwelijk, vrijblijvend en binnen 24 uur persoonlijk contact.",
};

export default function AanvraagPagina() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl text-petrol">Uw aanvraag</h1>
        <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
        <p className="mt-4 text-muted">
          Vertrouwelijk · Vrijblijvend · Binnen 24 uur persoonlijk contact
        </p>
        <div className="mt-10">
          <Suspense>
            <IntakeFormulier />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

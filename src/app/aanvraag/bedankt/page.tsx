import type { Metadata } from "next";
import { InkoperFoto } from "@/components/InkoperCard";
import { INKOPER } from "@/lib/bedrijf";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
};

export default function BedanktPagina() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
      <h1 className="text-3xl text-petrol">Uw aanvraag is ontvangen.</h1>
      <div className="mt-8 flex items-center gap-5 border border-line bg-paper p-6">
        <InkoperFoto maat={64} />
        <div>
          <p className="font-medium">{INKOPER.naam}</p>
          <p className="text-sm text-muted">{INKOPER.functie}</p>
          <p className="mt-1 text-sm text-muted">
            neemt binnen 24 uur persoonlijk contact met u op.
          </p>
        </div>
      </div>
      <p className="mt-8 text-muted">
        U ontvangt ook een bevestiging per e-mail. Liever direct iemand spreken? Bel{" "}
        <a href={`tel:${INKOPER.telefoon.replace(/\s/g, "")}`} className="text-petrol underline underline-offset-4">
          {INKOPER.telefoon}
        </a>
        .
      </p>
      </div>
    </div>
  );
}

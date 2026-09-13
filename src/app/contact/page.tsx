import type { Metadata } from "next";
import AddressForm from "@/components/AddressForm";
import { ADRES, EMAIL, INKOPER, KVK, TELEFOON } from "@/lib/bedrijf";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem rechtstreeks contact op met State Vastgoed.",
};

export default function ContactPagina() {
  return (
    <div className={`${CONTAINER} py-12 sm:py-16`}>
      <h1 className="text-4xl text-petrol">Contact</h1>
      <div className="mt-3 h-px w-16 bg-brass" aria-hidden />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="max-w-xl text-lg text-muted">
            Liever direct iemand spreken? Dat kan. U krijgt geen callcenter — u spreekt met{" "}
            {INKOPER.naam}, {INKOPER.functie.toLowerCase()}.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border border-line bg-paper p-6">
              <p className="text-sm font-medium tracking-wide text-brass">TELEFOON</p>
              <a
                href={`tel:${TELEFOON.replace(/\s/g, "")}`}
                className="mt-2 block text-lg text-petrol"
              >
                {TELEFOON}
              </a>
              <p className="mt-1 text-sm text-muted">Op werkdagen van 9.00 tot 17.30 uur</p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="text-sm font-medium tracking-wide text-brass">E-MAIL</p>
              <a href={`mailto:${EMAIL}`} className="mt-2 block text-lg text-petrol">
                {EMAIL}
              </a>
              <p className="mt-1 text-sm text-muted">Reactie binnen één werkdag</p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="text-sm font-medium tracking-wide text-brass">BEZOEKADRES</p>
              <p className="mt-2 text-lg">{ADRES}</p>
              <p className="mt-1 text-sm text-muted">Op afspraak</p>
            </div>
            <div className="border border-line bg-paper p-6">
              <p className="text-sm font-medium tracking-wide text-brass">REGISTRATIE</p>
              <p className="mt-2 text-lg">KvK {KVK}</p>
              <p className="mt-1 text-sm text-muted">Afspraken altijd schriftelijk bevestigd</p>
            </div>
          </div>
        </div>

        <aside className="self-start bg-petrol p-7 text-offwhite lg:sticky lg:top-24 lg:p-8">
          <h2 className="font-serif text-2xl">Of begin met uw adres</h2>
          <p className="mt-2 text-sm text-offwhite/80">
            Vertrouwelijk, vrijblijvend, binnen 24 uur persoonlijk contact.
          </p>
          <div className="mt-6">
            <AddressForm compact donker kolom />
          </div>
        </aside>
      </div>
    </div>
  );
}

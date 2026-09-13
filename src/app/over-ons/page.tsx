import type { Metadata } from "next";
import InkoperCard from "@/components/InkoperCard";
import { LogoMark } from "@/components/Logo";
import { ADRES, EMAIL, KVK, TELEFOON, WERKGEBIED } from "@/lib/bedrijf";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "State Vastgoed is een vastgoedonderneming die vastgoed rechtstreeks aankoopt in Noord-Nederland. Transparant over onszelf, terughoudend met uw informatie.",
};

export default function OverOnsPagina() {
  return (
    <div className={`${CONTAINER} py-12 sm:py-16`}>
      <h1 className="text-4xl text-petrol">Over State Vastgoed</h1>
      <div className="mt-3 h-px w-16 bg-brass" aria-hidden />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <p className="text-lg text-muted">
            State Vastgoed is een vastgoedonderneming die vastgoed voor eigen rekening
            aankoopt. Wij zijn geen makelaar en geen leadwebsite: achter deze site zit een
            echte koper. Ons werkgebied is {WERKGEBIED}.
          </p>
          <p className="mt-4 text-muted">
            Ons uitgangspunt is eenvoudig: wij zijn transparant over onszelf en terughoudend
            met uw informatie. U mag weten wie wij zijn, waar we zitten, wie u belt en hoe de
            prijs tot stand komt — terwijl uw verkoop binnen een beperkte kring blijft.
          </p>

          <h2 className="mt-10 text-2xl text-petrol">Waarom niet ieder object?</h2>
          <p className="mt-3 text-muted">
            Niet ieder pand past binnen ons aankoopprofiel, en dat zeggen we liever snel dan
            nooit. Juist die selectiviteit maakt dat een gesprek met ons ergens over gaat: als
            wij een voorstel doen, is dat serieus en onderbouwd.
          </p>

          <h2 className="mt-10 text-2xl text-petrol">Waar u ons aan mag houden</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {[
              "Binnen 24 uur persoonlijk contact na uw aanvraag",
              "Elk voorstel met uitleg van de opbouw van het bedrag",
              "Drie dagen bedenktijd na ondertekening — altijd",
              "Alle afspraken schriftelijk bevestigd",
              "Op verzoek bewijs van beschikbare middelen via de notaris",
            ].map((punt) => (
              <li key={punt} className="flex gap-3">
                <span className="text-brass" aria-hidden>—</span>
                <span>{punt}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-5">
          <InkoperCard label="WIE U SPREEKT" />
          <div className="border border-line bg-paper p-7">
            <p className="text-sm font-medium tracking-wide text-brass">BEDRIJFSGEGEVENS</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{ADRES}</li>
              <li>KvK {KVK}</li>
              <li>{TELEFOON}</li>
              <li>{EMAIL}</li>
            </ul>
          </div>
          <div className="border border-line p-7">
            <LogoMark className="h-9 w-9 text-petrol" />
            <p className="mt-3 text-sm text-muted">
              Transparant over onszelf. Terughoudend met uw informatie.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

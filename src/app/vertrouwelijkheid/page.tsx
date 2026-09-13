import type { Metadata } from "next";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Vertrouwelijkheid",
  description:
    "Wat discreet bij State Vastgoed concreet betekent: geen openbaarheid, een beperkte kring en heldere afspraken.",
};

const AFSPRAKEN = [
  {
    titel: "Geen openbaarheid",
    tekst:
      "Uw pand verschijnt nergens online. Geen Funda, geen advertentie, geen bord, geen open huis. Bij directe aankoop is dat simpelweg niet nodig.",
  },
  {
    titel: "Eén bezichtiging, op afspraak",
    tekst:
      "Wij bekijken het object eenmalig, op een moment dat u kiest. Geen onbekende kijkers, geen rondleidingen.",
  },
  {
    titel: "Beperkte kring",
    tekst:
      "Uw aanvraag wordt behandeld door één vaste inkoper. Alleen wie het dossier nodig heeft voor beoordeling of overdracht, krijgt er toegang toe.",
  },
  {
    titel: "Informatie alleen waar nodig",
    tekst:
      "Wat u ons vertelt, gebruiken we uitsluitend voor de beoordeling en — bij overeenstemming — de overdracht. Niets wordt gedeeld met derden buiten dat doel.",
  },
  {
    titel: "Geheimhoudingsverklaring waar gewenst",
    tekst:
      "Bij gevoelige situaties of zakelijk vastgoed tekenen wij desgewenst een geheimhoudingsverklaring vóórdat u stukken deelt.",
  },
  {
    titel: "Schriftelijke bevestiging",
    tekst:
      "Gemaakte afspraken worden schriftelijk bevestigd, zodat er nooit onduidelijkheid bestaat over wat is besproken.",
  },
];

export default function VertrouwelijkheidPagina() {
  return (
    <div className={`${CONTAINER} py-12 sm:py-16`}>
      <h1 className="text-4xl text-petrol">Vertrouwelijkheid</h1>
      <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Discreet is bij ons geen sfeer, maar een set afspraken. Dit kunt u van ons verwachten —
        en hierop kunt u ons aanspreken.
      </p>
      <ul className="mt-10 grid gap-x-14 gap-y-8 lg:grid-cols-2">
        {AFSPRAKEN.map((item) => (
          <li key={item.titel} className="border-l-2 border-brass pl-5">
            <p className="font-serif text-xl text-petrol">{item.titel}</p>
            <p className="mt-2 text-muted">{item.tekst}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

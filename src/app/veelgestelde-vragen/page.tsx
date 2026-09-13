import type { Metadata } from "next";
import AddressForm from "@/components/AddressForm";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meestgestelde vragen over rechtstreeks verkopen aan State Vastgoed.",
};

const FAQ = [
  {
    v: "Kopen jullie zelf, of bemiddelen jullie?",
    a: "Wij kopen zelf, voor eigen rekening. U spreekt met de partij die de aankoop beoordeelt en betaalt — niet met een tussenpersoon of makelaar.",
  },
  {
    v: "Komt mijn pand op Funda of ergens anders online?",
    a: "Nee. Bij directe aankoop is geen openbare advertentie nodig. Geen Funda, geen bord in de tuin, geen open huis.",
  },
  {
    v: "Wat kost een aanvraag?",
    a: "Niets. Een aanvraag is vrijblijvend, er zijn geen makelaarskosten en u zit nergens aan vast.",
  },
  {
    v: "Wanneer krijg ik contact?",
    a: "Binnen 24 uur neemt onze vastgoedinkoper persoonlijk contact met u op.",
  },
  {
    v: "Kopen jullie verhuurde panden?",
    a: "Ja, ook volledig of deels verhuurd. Koop breekt geen huur: de huurovereenkomst loopt gewoon door en uw huurder hoeft nergens heen.",
  },
  {
    v: "Hoe bepalen jullie de waarde?",
    a: "Op basis van het object, de staat, de ligging, eventuele verhuur en de actuele markt. Elk voorstel komt met een korte uitleg van de opbouw van het bedrag, zodat u precies weet waar het op gebaseerd is.",
  },
  {
    v: "Betalen jullie de hoogste prijs?",
    a: "Dat beloven we niet. Een directe verkoop kan financieel anders uitpakken dan een openbare verkoop met maximale concurrentie. Daar staat tegenover: geen kosten, geen maanden onzekerheid, volledige vertrouwelijkheid en zekerheid over de afwikkeling. U beslist pas als het voorstel er ligt.",
  },
  {
    v: "Hoe snel kan de overdracht?",
    a: "Zodra we het eens zijn en de notaris beschikbaar is — vaak binnen enkele weken. Het tempo bepaalt u: sneller kan, later ook.",
  },
  {
    v: "Kan ik mijn eigen notaris kiezen?",
    a: "Ja, vanzelfsprekend.",
  },
  {
    v: "Wat gebeurt er als ik niet akkoord ga?",
    a: "Dan stopt het daar, zonder kosten of verplichtingen. Uw gegevens worden conform onze privacyverklaring verwijderd.",
  },
  {
    v: "Heb ik bedenktijd na ondertekening?",
    a: "Ja, altijd drie dagen. De wet geeft een verkoper die aan een professionele koper verkoopt geen bedenktijd — wij geven die wel, omdat u alleen moet verkopen als u er zeker van bent.",
  },
  {
    v: "Wat gebeurt er met mijn gegevens?",
    a: "Uw aanvraag blijft binnen een beperkte kring en wordt alleen gebruikt om contact met u op te nemen en het object te beoordelen. Zie onze privacyverklaring en de pagina Vertrouwelijkheid.",
  },
];

export default function FaqPagina() {
  return (
    <>
      <div className={`${CONTAINER} py-12 sm:py-16`}>
        <h1 className="text-4xl text-petrol">Veelgestelde vragen</h1>
        <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
        <dl className="mt-10 grid gap-5 lg:grid-cols-2">
          {FAQ.map((item) => (
            <div key={item.v} className="border border-line bg-white p-6 sm:p-7">
              <dt className="text-lg font-medium">{item.v}</dt>
              <dd className="mt-2 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t border-line bg-paper">
        <div className={`${CONTAINER} grid gap-8 py-12 sm:py-14 lg:grid-cols-[1fr_1.4fr] lg:items-center`}>
          <div>
            <h2 className="text-2xl text-petrol">Uw vastgoed bespreken?</h2>
            <p className="mt-2 text-muted">Binnen 24 uur persoonlijk contact.</p>
          </div>
          <AddressForm compact />
        </div>
      </div>
    </>
  );
}

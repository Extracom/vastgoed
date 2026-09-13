import type { Metadata } from "next";
import AddressForm from "@/components/AddressForm";
import InkoperCard from "@/components/InkoperCard";
import { CONTAINER } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van adres naar duidelijkheid in vijf stappen. Zo werkt directe verkoop aan State Vastgoed.",
};

const STAPPEN = [
  {
    nr: "01",
    titel: "U laat uw adres achter",
    tekst:
      "Meer is niet nodig om te beginnen. U hoeft geen verhaal te vertellen en geen verkoopbeslissing uit te leggen — u wijst alleen het object aan. Een aanvraag is vrijblijvend en kost niets.",
  },
  {
    nr: "02",
    titel: "Persoonlijk contact binnen 24 uur",
    tekst:
      "Geen callcenter en geen standaardmail. Onze vastgoedinkoper belt of mailt u persoonlijk, op een moment dat u schikt. In dat eerste gesprek willen we vooral begrijpen: waarom overweegt u verkoop, wat is uw gewenste termijn, is het pand verhuurd en zijn er bijzonderheden?",
  },
  {
    nr: "03",
    titel: "Beoordeling",
    tekst:
      "Wij bekijken het object — één bezichtiging, op afspraak, zonder onbekende kijkers. Informatie die u deelt blijft binnen een beperkte kring en wordt alleen gebruikt voor de beoordeling. Waar gewenst tekenen wij vooraf een geheimhoudingsverklaring.",
  },
  {
    nr: "04",
    titel: "Voorstel",
    tekst:
      "Past het object binnen ons aankoopprofiel, dan ontvangt u een helder voorstel op één pagina: koopsom, beoogde overdrachtsdatum, voorwaarden, geldigheidsduur en eventuele voorbehouden — met een korte uitleg van de opbouw van het bedrag. Past het niet, dan hoort u dat ook snel en eerlijk.",
  },
  {
    nr: "05",
    titel: "Overdracht bij de notaris",
    tekst:
      "Bij overeenstemming worden prijs en voorwaarden schriftelijk vastgelegd en verzorgt de notaris de overdracht — desgewenst uw eigen notaris. Na ondertekening krijgt u bij ons altijd drie dagen bedenktijd, ook al schrijft de wet die niet voor.",
  },
];

export default function WerkwijzePagina() {
  return (
    <>
      <div className={`${CONTAINER} py-12 sm:py-16`}>
        <h1 className="text-4xl text-petrol">Van adres naar duidelijkheid.</h1>
        <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Rechtstreeks verkopen betekent niet dat u minder begeleiding krijgt. Het betekent dat
          de route korter is: u spreekt met de partij die de aankoop beoordeelt, er is één
          aanspreekpunt en de afspraken worden helder vastgelegd.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <ol className="space-y-5">
            {STAPPEN.map((stap) => (
              <li key={stap.nr} className="border border-line bg-white p-6 sm:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl text-brass">{stap.nr}</span>
                  <h2 className="text-xl text-petrol sm:text-2xl">{stap.titel}</h2>
                </div>
                <p className="mt-3 text-muted">{stap.tekst}</p>
              </li>
            ))}
          </ol>

          <aside className="space-y-5 self-start lg:sticky lg:top-24">
            <InkoperCard />
            <div className="bg-petrol p-7 text-offwhite">
              <h2 className="font-serif text-xl">Begin met uw adres</h2>
              <p className="mt-2 text-sm text-offwhite/80">
                Vertrouwelijk, vrijblijvend, binnen 24 uur contact.
              </p>
              <div className="mt-5">
                <AddressForm compact donker kolom />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

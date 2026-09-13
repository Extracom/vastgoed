import type { Metadata } from "next";
import { ADRES, BEDRIJFSNAAM, EMAIL, KVK } from "@/lib/bedrijf";

export const metadata: Metadata = {
  title: "Privacyverklaring",
};

/**
 * Privacyverklaring conform art. 13 AVG. Grondslag voor de kernverwerking is
 * art. 6 lid 1 sub b AVG (precontractuele maatregelen op verzoek van betrokkene).
 * Laten toetsen door een jurist vóór livegang.
 */
export default function PrivacyPagina() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="text-4xl text-petrol">Privacyverklaring</h1>
      <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
      <div className="mt-8 max-w-3xl space-y-8 text-muted">
        <section>
          <h2 className="text-xl text-graphite">Wie wij zijn</h2>
          <p className="mt-2">
            {BEDRIJFSNAAM}, gevestigd te {ADRES}, ingeschreven bij de Kamer van Koophandel onder
            nummer {KVK}, is verantwoordelijk voor de verwerking van persoonsgegevens zoals
            beschreven in deze verklaring. Vragen? Mail naar {EMAIL}.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-graphite">Welke gegevens en waarom</h2>
          <p className="mt-2">
            Wanneer u een aanvraag doet, verwerken wij het adres van het pand (postcode en
            huisnummer), uw naam, e-mailadres en — als u dat opgeeft — uw telefoonnummer, en
            wat u ons verder vertelt over het pand en uw situatie. Wij gebruiken deze gegevens
            uitsluitend om contact met u op te nemen over uw aanvraag, het object te beoordelen
            en — bij overeenstemming — de transactie af te wikkelen. De grondslag hiervoor is
            dat deze verwerking noodzakelijk is om op uw verzoek stappen te zetten vóór het
            eventueel sluiten van een overeenkomst (art. 6 lid 1 sub b AVG).
          </p>
        </section>
        <section>
          <h2 className="text-xl text-graphite">Geen tracking</h2>
          <p className="mt-2">
            Deze website gebruikt geen advertentie- of trackingcookies. Wij volgen u niet over
            het internet.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-graphite">Met wie wij gegevens delen</h2>
          <p className="mt-2">
            Uw gegevens blijven binnen een beperkte interne kring. Alleen bij een daadwerkelijke
            transactie delen wij noodzakelijke gegevens met de notaris. Met partijen die voor
            ons gegevens verwerken (zoals onze hostingpartij) sluiten wij
            verwerkersovereenkomsten. Wij verkopen uw gegevens nooit.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-graphite">Hoe lang wij gegevens bewaren</h2>
          <p className="mt-2">
            Leidt uw aanvraag niet tot een transactie, dan verwijderen wij uw gegevens uiterlijk
            twaalf maanden na het laatste contact. Bij een transactie bewaren wij de gegevens
            die daarvoor nodig zijn gedurende de wettelijke (fiscale) bewaartermijn van zeven
            jaar.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-graphite">Uw rechten</h2>
          <p className="mt-2">
            U heeft recht op inzage, rectificatie, verwijdering, beperking van de verwerking,
            overdraagbaarheid van uw gegevens en bezwaar. Mail daarvoor naar {EMAIL}. U kunt
            ook een klacht indienen bij de Autoriteit Persoonsgegevens.
          </p>
        </section>
      </div>
    </div>
  );
}

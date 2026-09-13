import Link from "next/link";
import AddressForm from "@/components/AddressForm";
import { InkoperFoto } from "@/components/InkoperCard";
import { LogoMark } from "@/components/Logo";
import { INKOPER, KVK, TELEFOON, WERKGEBIED } from "@/lib/bedrijf";
import { SITUATIES } from "@/lib/situaties";
import { CONTAINER } from "@/lib/ui";

const PROCES = [
  { nr: "01", titel: "Aanvraag", tekst: "U laat uw adres en contactgegevens achter." },
  { nr: "02", titel: "Contact", tekst: "Onze inkoper neemt binnen 24 uur persoonlijk contact op." },
  { nr: "03", titel: "Beoordeling", tekst: "We bespreken uw situatie, het pand en uw timing." },
  { nr: "04", titel: "Voorstel", tekst: "Past het object bij ons profiel, dan ontvangt u een voorstel — met uitleg van de opbouw." },
  { nr: "05", titel: "Overdracht", tekst: "Vastlegging bij de notaris. Desgewenst uw eigen notaris." },
];

const DISCREET = [
  "Geen advertentie, geen Funda, geen open huis",
  "Geen onbekende kijkers door uw woning",
  "Eén vaste contactpersoon, beperkte interne kring",
  "Informatie alleen gedeeld voor zover nodig",
  "Waar gewenst: geheimhoudingsverklaring vooraf",
];

const SEGMENTEN = [
  { titel: "Woningen", tekst: "Ook bij erfenis, scheiding of emigratie." },
  { titel: "Verhuurde woningen", tekst: "Koop breekt geen huur — uw huurder merkt er niets van." },
  { titel: "Beleggingspanden", tekst: "Eén object of een deel van uw portefeuille." },
  { titel: "Bedrijfspanden", tekst: "Discreet, zonder onrust bij huurders of personeel." },
  { titel: "Portefeuilles", tekst: "Meerdere panden in één zorgvuldige transactie." },
  { titel: "Ontwikkellocaties", tekst: "Geselecteerde grond- en herontwikkelingsposities." },
];

const FAQ_SELECTIE = [
  {
    v: "Kopen jullie zelf?",
    a: "Ja. Wij kopen voor eigen rekening. U spreekt met de partij die de aankoop beoordeelt — niet met een tussenpersoon.",
  },
  {
    v: "Komt mijn pand op Funda?",
    a: "Nee. Bij directe aankoop is geen openbare advertentie nodig. Uw pand verschijnt nergens online.",
  },
  {
    v: "Wat kost een aanvraag?",
    a: "Niets. Een aanvraag is vrijblijvend en verplicht u tot niets.",
  },
  {
    v: "Kopen jullie verhuurde panden?",
    a: "Ja, ook in verhuurde staat. Koop breekt geen huur: uw huurder merkt er niets van.",
  },
  {
    v: "Hoe bepalen jullie de prijs?",
    a: "Op basis van object, staat, ligging en markt. Elk voorstel komt met uitleg van de opbouw van het bedrag.",
  },
  {
    v: "Wat als ik niet akkoord ga?",
    a: "Dan stopt het daar, zonder kosten. En ook ná ondertekening krijgt u drie dagen bedenktijd.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: links de vraag + het adres, rechts de zekerheden */}
      <section className="border-b border-line">
        <div className={`${CONTAINER} grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16`}>
          <div>
            <h1 className="text-4xl leading-tight text-petrol sm:text-5xl">
              Uw vastgoed verkopen?
              <br />
              Wij kopen vastgoed rechtstreeks.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Niet ieder pand hoeft openbaar te worden aangeboden. Laat uw adres achter en
              bespreek uw vastgoed rechtstreeks met onze inkoper.
            </p>
            <div className="mt-8 max-w-2xl">
              <AddressForm />
            </div>
            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Verder op deze pagina">
              <span className="text-brass" aria-hidden>↓</span>
              <a href="#werkwijze" className="hover:text-petrol">Zo werkt het</a>
              <a href="#wat-wij-kopen" className="hover:text-petrol">Wat wij kopen</a>
              <a href="#prijs" className="hover:text-petrol">Over de prijs</a>
              <a href="#faq" className="hover:text-petrol">Veelgestelde vragen</a>
            </nav>
          </div>

          <aside className="border border-line bg-paper p-7 lg:p-8">
            <LogoMark className="h-10 w-10 text-petrol" />
            <ul className="mt-6 space-y-4 text-[0.95rem]">
              {[
                ["Binnen 24 uur", "persoonlijk contact met onze vastgoedinkoper"],
                ["Geen Funda", "geen bord, geen open huis, geen onbekende kijkers"],
                ["Drie dagen bedenktijd", "ook na ondertekening — altijd"],
                ["Eigen middelen", "op verzoek aangetoond via de notaris"],
              ].map(([kop, rest]) => (
                <li key={kop} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                  <span className="font-medium text-petrol">{kop}</span>{" "}
                  <span className="text-muted">— {rest}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <InkoperFoto maat={48} />
              <p className="text-sm text-muted">
                <span className="font-medium text-graphite">{INKOPER.naam}</span>
                <br />
                {INKOPER.functie} · {TELEFOON}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Het alternatief + discretie: twee kolommen */}
      <section className="border-b border-line">
        <div className={`${CONTAINER} grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <h2 className="text-3xl text-petrol">Niet alles hoeft op Funda.</h2>
            <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
            <p className="mt-5 text-muted">
              Een openbare verkoop is voor veel eigenaren een prima route. Maar niet voor
              iedereen. Soms wegen privacy, snelheid, een lopende verhuur of de situatie rond
              een pand zwaarder dan brede publiciteit.
            </p>
            <p className="mt-4 text-muted">
              Wij kopen vastgoed rechtstreeks — daardoor kan een verkoop buiten de openbare
              markt, wanneer dat bij uw situatie past. Rechtstreeks betekent niet minder
              begeleiding; het betekent dat de route korter is.
            </p>
          </div>
          <div className="bg-petrol p-7 text-offwhite lg:p-8">
            <h3 className="font-serif text-2xl">Discreet is bij ons geen sfeer. Het zijn afspraken.</h3>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {DISCREET.map((punt) => (
                <li key={punt} className="flex gap-3">
                  <span className="text-brass" aria-hidden>—</span>
                  <span>{punt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Werkwijze in vijf stappen */}
      <section id="werkwijze" className="scroll-mt-20 border-b border-line bg-paper">
        <div className={`${CONTAINER} py-12 sm:py-16`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl text-petrol">Van adres naar duidelijkheid.</h2>
              <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
            </div>
            <Link href="/werkwijze" className="text-sm text-petrol underline underline-offset-4">
              Lees de volledige werkwijze
            </Link>
          </div>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCES.map((stap) => (
              <li key={stap.nr} className="border-t-2 border-petrol pt-4">
                <p className="font-serif text-xl text-brass">{stap.nr}</p>
                <p className="mt-1 font-medium">{stap.titel}</p>
                <p className="mt-1 text-sm text-muted">{stap.tekst}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Wat kopen wij: zes segmenten */}
      <section id="wat-wij-kopen" className="scroll-mt-20 border-b border-line">
        <div className={`${CONTAINER} py-12 sm:py-16`}>
          <h2 className="text-3xl text-petrol">Wat kopen wij?</h2>
          <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SEGMENTEN.map((segment) => (
              <div key={segment.titel} className="border border-line bg-white p-6">
                <p className="font-serif text-lg text-petrol">{segment.titel}</p>
                <p className="mt-2 text-sm text-muted">{segment.tekst}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted">
            Niet ieder object past binnen ons aankoopprofiel. Ook dat hoort u snel.
          </p>
        </div>
      </section>

      {/* Situaties: interne links naar de SEO-pagina's */}
      <section className="border-b border-line">
        <div className={`${CONTAINER} py-12 sm:py-16`}>
          <h2 className="text-3xl text-petrol">Herkent u uw situatie?</h2>
          <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
          <p className="mt-4 max-w-2xl text-muted">
            Elke verkoop heeft een eigen aanleiding. Lees hoe een directe verkoop in uw
            situatie werkt.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SITUATIES.filter((s) => !s.slug.startsWith("vastgoed-verkopen-")).map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group border border-line bg-white p-5 hover:border-petrol"
              >
                <p className="font-serif text-lg text-petrol">{s.menuTitel}</p>
                <p className="mt-1 text-sm text-muted">{s.titel}</p>
                <p className="mt-3 text-sm text-brass group-hover:text-petrol">Lees meer →</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-muted">
            Actief in{" "}
            {SITUATIES.filter((s) => s.slug.startsWith("vastgoed-verkopen-")).map((s, i, lijst) => (
              <span key={s.slug}>
                <Link href={`/${s.slug}`} className="text-petrol underline underline-offset-4">
                  {s.menuTitel}
                </Link>
                {i < lijst.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Prijs + bedenktijd: twee kolommen */}
      <section id="prijs" className="scroll-mt-20 border-b border-line bg-paper">
        <div className={`${CONTAINER} grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <h2 className="text-3xl text-petrol">Wat u moet weten over de prijs.</h2>
            <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
            <p className="mt-5 text-muted">
              Een directe verkoop kan financieel anders uitpakken dan een openbare verkoop met
              maximale concurrentie. Daar staat tegenover: geen makelaarskosten, geen
              verkoopklaar maken, geen maanden onzekerheid, en volledige vertrouwelijkheid. U
              kiest een andere combinatie van prijs, snelheid, privacy en zekerheid — en u
              beslist pas als het voorstel er ligt.
            </p>
            <ul className="mt-5 space-y-2">
              <li className="flex gap-3">
                <span className="text-brass" aria-hidden>—</span>
                Elk voorstel komt met een korte uitleg van de opbouw van het bedrag.
              </li>
              <li className="flex gap-3">
                <span className="text-brass" aria-hidden>—</span>
                Op verzoek tonen wij via de notaris aan dat de middelen beschikbaar zijn.
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-brass bg-white p-7 lg:p-8">
            <h3 className="font-serif text-2xl text-petrol">U krijgt altijd drie dagen bedenktijd.</h3>
            <p className="mt-4 text-muted">
              De wet geeft een verkoper geen bedenktijd bij verkoop aan een professionele
              koper. Wij wel. Na ondertekening kunt u drie dagen kosteloos terug.
            </p>
            <p className="mt-3 text-muted">
              Niet omdat het moet — maar omdat u alleen moet verkopen als u er zeker van bent.
            </p>
          </div>
        </div>
      </section>

      {/* Bewijs */}
      <section className="border-b border-line">
        <div className={`${CONTAINER} py-12 sm:py-16`}>
          <h2 className="text-3xl text-petrol">Vastgoed kopen is ons werk.</h2>
          <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="border border-line p-6">
              <p className="font-serif text-lg text-petrol">Regionaal geworteld</p>
              <p className="mt-2 text-sm text-muted">Actief in {WERKGEBIED}. Geen landelijke belwinkel.</p>
            </div>
            <div className="border border-line p-6">
              <p className="font-serif text-lg text-petrol">Eén aanspreekpunt</p>
              <p className="mt-2 text-sm text-muted">
                U spreekt van begin tot eind met {INKOPER.naam}, {INKOPER.functie.toLowerCase()}.
              </p>
            </div>
            <div className="border border-line p-6">
              <p className="font-serif text-lg text-petrol">Verifieerbaar</p>
              <p className="mt-2 text-sm text-muted">KvK {KVK} · afspraken altijd schriftelijk bevestigd.</p>
            </div>
          </div>
          {/* TODO: zodra de eerste transacties gedaan zijn, hier echte aankopen tonen:
              "Groningen · appartementencomplex · 2026 · rechtstreeks aangekocht" */}
        </div>
      </section>

      {/* FAQ-selectie */}
      <section id="faq" className="scroll-mt-20 border-b border-line bg-paper">
        <div className={`${CONTAINER} py-12 sm:py-16`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl text-petrol">Veelgestelde vragen</h2>
              <div className="mt-3 h-px w-16 bg-brass" aria-hidden />
            </div>
            <Link href="/veelgestelde-vragen" className="text-sm text-petrol underline underline-offset-4">
              Alle veelgestelde vragen
            </Link>
          </div>
          <dl className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {FAQ_SELECTIE.map((item) => (
              <div key={item.v}>
                <dt className="font-medium">{item.v}</dt>
                <dd className="mt-1 text-sm text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Slot-CTA */}
      <section className="bg-petrol text-offwhite">
        <div className={`${CONTAINER} grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center`}>
          <div>
            <h2 className="text-3xl">Uw vastgoed bespreken?</h2>
            <p className="mt-2 text-offwhite/80">Wij nemen binnen 24 uur persoonlijk contact met u op.</p>
          </div>
          <AddressForm compact donker />
        </div>
      </section>
    </>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

/**
 * Drie stappen, van laag-frictie naar gevoelig. Het adres (stap 1) is meestal
 * al op de homepage ingevuld — de voortgangsbalk toont die als "gezet", zodat
 * de bezoeker met een voorsprong begint. Contactgegevens komen bewust laatst;
 * telefoonnummer is optioneel, met uitleg waarom we het vragen.
 */

const STAPPEN = ["Adres", "Uw pand", "Contact"];

const TYPES = [
  "Woning",
  "Verhuurde woning",
  "Beleggingspand",
  "Bedrijfspand",
  "Portefeuille",
  "Anders",
];

const TIMING = [
  "Zo snel mogelijk",
  "Binnen 3 maanden",
  "Binnen een jaar",
  "Ik verken de mogelijkheden",
];

const veldStijl =
  "w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-petrol";

export default function IntakeFormulier() {
  const zoekparams = useSearchParams();
  const router = useRouter();

  const [stap, setStap] = useState(() =>
    zoekparams.get("postcode") && zoekparams.get("huisnummer") ? 1 : 0
  );
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");
  const [data, setData] = useState({
    postcode: zoekparams.get("postcode") ?? "",
    huisnummer: zoekparams.get("huisnummer") ?? "",
    typeVastgoed: "",
    verhuurd: "",
    timing: "",
    naam: "",
    email: "",
    telefoon: "",
  });

  function zet(veld: string, waarde: string) {
    setData((d) => ({ ...d, [veld]: waarde }));
  }

  function volgende() {
    setFout("");
    if (stap === 0) {
      if (!/^\d{4}\s?[A-Z]{2}$/i.test(data.postcode.trim())) {
        setFout("Vul een geldige postcode in, bijvoorbeeld 9711 AB.");
        return;
      }
      if (!data.huisnummer.trim()) {
        setFout("Vul een huisnummer in.");
        return;
      }
    }
    setStap((s) => s + 1);
  }

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    setFout("");
    if (!data.naam.trim()) {
      setFout("Vul uw naam in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      setFout("Vul een geldig e-mailadres in.");
      return;
    }
    setBezig(true);
    try {
      const antwoord = await fetch("/api/aanvraag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!antwoord.ok) {
        const { fout } = await antwoord.json().catch(() => ({ fout: "" }));
        setFout(fout || "Er ging iets mis. Probeer het opnieuw of bel ons gerust.");
        setBezig(false);
        return;
      }
      router.push("/aanvraag/bedankt");
    } catch {
      setFout("Er ging iets mis. Probeer het opnieuw of bel ons gerust.");
      setBezig(false);
    }
  }

  return (
    <form onSubmit={verstuur} noValidate>
      {/* Voortgang */}
      <ol className="mb-10 flex gap-2" aria-label="Voortgang">
        {STAPPEN.map((naam, i) => (
          <li key={naam} className="flex-1">
            <div className={`h-1 ${i <= stap ? "bg-petrol" : "bg-line"}`} />
            <p className={`mt-2 text-xs ${i <= stap ? "text-petrol" : "text-muted"}`}>
              {i < stap ? `${naam} ✓` : naam}
            </p>
          </li>
        ))}
      </ol>

      {stap === 0 && (
        <fieldset>
          <legend className="text-xl">Waar gaat het om?</legend>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex">
            <input
              className={`${veldStijl} sm:w-40`}
              placeholder="Postcode"
              aria-label="Postcode"
              autoComplete="postal-code"
              value={data.postcode}
              onChange={(e) => zet("postcode", e.target.value)}
            />
            <input
              className={`${veldStijl} sm:w-36`}
              placeholder="Huisnummer"
              aria-label="Huisnummer"
              value={data.huisnummer}
              onChange={(e) => zet("huisnummer", e.target.value)}
            />
          </div>
        </fieldset>
      )}

      {stap === 1 && (
        <fieldset>
          <legend className="text-xl">Wat wilt u ons alvast vertellen?</legend>
          <p className="mt-2 text-sm text-muted">
            Alles hieronder is optioneel — het helpt onze inkoper zich voor te bereiden.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="type">Type vastgoed</label>
              <select
                id="type"
                className={veldStijl}
                value={data.typeVastgoed}
                onChange={(e) => zet("typeVastgoed", e.target.value)}
              >
                <option value="">Maak een keuze</option>
                {TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Is het pand verhuurd?</p>
              <div className="flex gap-3">
                {["Ja", "Nee", "Deels"].map((optie) => (
                  <button
                    key={optie}
                    type="button"
                    onClick={() => zet("verhuurd", optie)}
                    className={`flex-1 border px-5 py-3 sm:flex-none sm:py-2 ${
                      data.verhuurd === optie
                        ? "border-petrol bg-petrol text-offwhite"
                        : "border-line bg-white hover:border-petrol"
                    }`}
                  >
                    {optie}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="timing">Gewenste timing</label>
              <select
                id="timing"
                className={veldStijl}
                value={data.timing}
                onChange={(e) => zet("timing", e.target.value)}
              >
                <option value="">Maak een keuze</option>
                {TIMING.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
      )}

      {stap === 2 && (
        <fieldset>
          <legend className="text-xl">Hoe kunnen we u bereiken?</legend>
          <div className="mt-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="naam">Uw naam</label>
              <input
                id="naam"
                className={veldStijl}
                autoComplete="name"
                value={data.naam}
                onChange={(e) => zet("naam", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="email">E-mailadres</label>
              <input
                id="email"
                type="email"
                className={veldStijl}
                autoComplete="email"
                value={data.email}
                onChange={(e) => zet("email", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="telefoon">
                Telefoonnummer <span className="font-normal text-muted">(niet verplicht)</span>
              </label>
              <input
                id="telefoon"
                type="tel"
                className={veldStijl}
                autoComplete="tel"
                value={data.telefoon}
                onChange={(e) => zet("telefoon", e.target.value)}
              />
              <p className="mt-2 text-sm text-muted">
                Zodat onze inkoper u persoonlijk kan bellen. Wij bellen één keer — u zit nergens aan vast.
              </p>
            </div>
          </div>
        </fieldset>
      )}

      {fout && <p className="mt-4 text-sm text-brass">{fout}</p>}

      <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        {stap > 0 ? (
          <button
            type="button"
            onClick={() => setStap((s) => s - 1)}
            className="py-2 text-muted underline underline-offset-4 hover:text-petrol"
          >
            Terug
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {stap < 2 ? (
          <button
            type="button"
            onClick={volgende}
            className="w-full bg-petrol px-8 py-3.5 text-offwhite hover:bg-petrol-dark active:bg-petrol-dark sm:w-auto sm:py-3"
          >
            Volgende
          </button>
        ) : (
          <button
            type="submit"
            disabled={bezig}
            className="w-full bg-petrol px-8 py-3.5 text-offwhite hover:bg-petrol-dark active:bg-petrol-dark disabled:opacity-60 sm:w-auto sm:py-3"
          >
            {bezig ? "Versturen…" : "Verstuur mijn aanvraag"}
          </button>
        )}
      </div>

      <p className="mt-6 text-xs text-muted">
        Uw gegevens worden vertrouwelijk behandeld en alleen gebruikt om contact met u op te
        nemen over uw aanvraag. Zie onze <a href="/privacy" className="underline">privacyverklaring</a>.
      </p>
    </form>
  );
}

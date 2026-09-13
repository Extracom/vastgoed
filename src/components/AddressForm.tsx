"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Het adres is het psychologische startpunt van de site: de bezoeker hoeft
 * geen verhaal te vertellen, alleen het object aan te wijzen. Dit formulier
 * stuurt door naar de intake op /aanvraag.
 */
export default function AddressForm({
  compact = false,
  donker = false,
  kolom = false,
}: {
  compact?: boolean;
  /** Voor gebruik op petrolkleurige vlakken: lichte knop en foutmelding. */
  donker?: boolean;
  /** Voor smalle zijkolommen: velden naast elkaar, knop er vol onder — nooit één rij. */
  kolom?: boolean;
}) {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [fout, setFout] = useState("");

  function verstuur(e: React.FormEvent) {
    e.preventDefault();
    const pc = postcode.trim().toUpperCase().replace(/\s+/g, " ");
    if (!/^\d{4}\s?[A-Z]{2}$/.test(pc)) {
      setFout("Vul een geldige postcode in, bijvoorbeeld 9711 AB.");
      return;
    }
    if (!huisnummer.trim()) {
      setFout("Vul een huisnummer in.");
      return;
    }
    const params = new URLSearchParams({ postcode: pc, huisnummer: huisnummer.trim() });
    router.push(`/aanvraag?${params.toString()}`);
  }

  return (
    <form onSubmit={verstuur} noValidate>
      <div className={`grid grid-cols-2 gap-3 ${kolom ? "" : "sm:flex"}`}>
        <input
          type="text"
          autoComplete="postal-code"
          placeholder="Postcode"
          aria-label="Postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className={`w-full border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-petrol ${kolom ? "" : "sm:w-40 sm:py-3"}`}
        />
        <input
          type="text"
          placeholder="Huisnummer"
          aria-label="Huisnummer"
          value={huisnummer}
          onChange={(e) => setHuisnummer(e.target.value)}
          className={`w-full border border-line bg-white px-4 py-3.5 text-base outline-none focus:border-petrol ${kolom ? "" : "sm:w-36 sm:py-3"}`}
        />
        <button
          type="submit"
          className={`col-span-2 px-6 py-3.5 text-base ${kolom ? "" : "sm:col-auto sm:py-3"} ${
            donker
              ? "bg-offwhite text-petrol hover:bg-white active:bg-white"
              : "bg-petrol text-offwhite hover:bg-petrol-dark active:bg-petrol-dark"
          }`}
        >
          Bespreek mijn vastgoed
        </button>
      </div>
      {fout && <p className={`mt-2 text-sm ${donker ? "text-offwhite" : "text-brass"}`}>{fout}</p>}
      {!compact && (
        <p className="mt-3 text-sm text-muted">
          Duurt 1 minuut · Uw gegevens blijven vertrouwelijk · Verplicht u tot niets
        </p>
      )}
    </form>
  );
}

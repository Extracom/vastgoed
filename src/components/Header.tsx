"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { TELEFOON } from "@/lib/bedrijf";

const LINKS = [
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
  { href: "/vertrouwelijkheid", label: "Vertrouwelijkheid" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="State Vastgoed — home">
          <Logo compact />
        </Link>

        {/* Desktop-navigatie: alle pagina's + telefoon + CTA */}
        <nav className="hidden items-center gap-7 text-[0.92rem] lg:flex">
          {LINKS.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="text-graphite hover:text-petrol">
              {link.label}
            </Link>
          ))}
          <a href={`tel:${TELEFOON.replace(/\s/g, "")}`} className="font-medium text-petrol">
            {TELEFOON}
          </a>
          <Link
            href="/aanvraag"
            className="bg-petrol px-5 py-2.5 text-offwhite hover:bg-petrol-dark"
          >
            Bespreek uw vastgoed
          </Link>
        </nav>

        {/* Mobiel/tablet: bellen + menu, ruime tap-targets */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={`tel:${TELEFOON.replace(/\s/g, "")}`}
            aria-label={`Bel ons op ${TELEFOON}`}
            className="flex h-11 w-11 items-center justify-center text-petrol"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="flex h-11 w-11 items-center justify-center text-petrol"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none" aria-hidden>
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobiel uitklapmenu */}
      {open && (
        <nav className="border-t border-line bg-offwhite lg:hidden" aria-label="Hoofdmenu">
          <ul className="mx-auto max-w-6xl px-5 sm:px-8">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-graphite hover:text-petrol"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                href="/aanvraag"
                onClick={() => setOpen(false)}
                className="block bg-petrol px-5 py-3 text-center text-offwhite"
              >
                Bespreek uw vastgoed
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

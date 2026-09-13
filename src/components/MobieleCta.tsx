"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Vaste conversiebalk onderin op mobiel. Verborgen in de funnel zelf,
 * zodat de bezoeker daar niet wordt afgeleid van het invullen.
 */
export default function MobieleCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/aanvraag")) return null;

  return (
    <div className="sm:hidden">
      {/* Spacer zodat de balk geen content bedekt */}
      <div className="h-20" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-offwhite p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          href="/aanvraag"
          className="block bg-petrol py-3.5 text-center text-base text-offwhite active:bg-petrol-dark"
        >
          Bespreek mijn vastgoed
        </Link>
      </div>
    </div>
  );
}

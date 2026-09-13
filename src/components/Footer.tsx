import Link from "next/link";
import Logo from "@/components/Logo";
import { ADRES, EMAIL, KVK, TAGLINE, TELEFOON, WERKGEBIED } from "@/lib/bedrijf";
import { SITUATIES } from "@/lib/situaties";

export default function Footer() {
  return (
    <footer className="bg-petrol-dark text-offwhite">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo licht />
          <p className="mt-4 text-sm text-offwhite/70">{TAGLINE}</p>
          <p className="mt-1 text-sm text-offwhite/70">Actief in {WERKGEBIED}.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium tracking-wide text-brass">Situaties</p>
          <ul className="space-y-2 text-offwhite/80">
            {SITUATIES.filter((s) => !s.slug.startsWith("vastgoed-verkopen-")).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-offwhite">
                  {s.menuTitel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium tracking-wide text-brass">Regio &amp; pagina&apos;s</p>
          <ul className="space-y-2 text-offwhite/80">
            {SITUATIES.filter((s) => s.slug.startsWith("vastgoed-verkopen-")).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-offwhite">
                  Vastgoed verkopen {s.menuTitel}
                </Link>
              </li>
            ))}
            <li><Link href="/werkwijze" className="hover:text-offwhite">Werkwijze</Link></li>
            <li><Link href="/over-ons" className="hover:text-offwhite">Over ons</Link></li>
            <li><Link href="/veelgestelde-vragen" className="hover:text-offwhite">Veelgestelde vragen</Link></li>
            <li><Link href="/vertrouwelijkheid" className="hover:text-offwhite">Vertrouwelijkheid</Link></li>
            <li><Link href="/privacy" className="hover:text-offwhite">Privacyverklaring</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium tracking-wide text-brass">Contact</p>
          <ul className="space-y-2 text-offwhite/80">
            <li>{ADRES}</li>
            <li><a href={`tel:${TELEFOON.replace(/\s/g, "")}`} className="hover:text-offwhite">{TELEFOON}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-offwhite">{EMAIL}</a></li>
            <li>KvK {KVK}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-offwhite/10">
        <div className="mx-auto w-full max-w-6xl px-5 py-4 text-xs text-offwhite/50 sm:px-8">
          © {new Date().getFullYear()} State Vastgoed · Directe aankoop van vastgoed
        </div>
      </div>
    </footer>
  );
}

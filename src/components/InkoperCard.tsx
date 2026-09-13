import Image from "next/image";
import { INKOPER } from "@/lib/bedrijf";

export function InkoperFoto({ maat = 64 }: { maat?: number }) {
  return (
    <Image
      src={INKOPER.foto}
      alt={`${INKOPER.naam}, ${INKOPER.functie.toLowerCase()}`}
      width={maat}
      height={maat}
      className="shrink-0 rounded-full border border-line object-cover"
      style={{ width: maat, height: maat }}
    />
  );
}

/** Vast kaartje met de inkoper: wie belt mij straks? */
export default function InkoperCard({ label = "UW AANSPREEKPUNT" }: { label?: string }) {
  return (
    <div className="border border-line bg-paper p-7">
      <p className="text-sm font-medium tracking-wide text-brass">{label}</p>
      <div className="mt-4 flex items-center gap-4">
        <InkoperFoto maat={64} />
        <div>
          <p className="font-medium">{INKOPER.naam}</p>
          <p className="text-sm text-muted">{INKOPER.functie}</p>
          <a
            href={`tel:${INKOPER.telefoon.replace(/\s/g, "")}`}
            className="mt-1 block text-sm text-petrol"
          >
            {INKOPER.telefoon}
          </a>
        </div>
      </div>
    </div>
  );
}

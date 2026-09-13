/**
 * Het beeldmerk: een strak, met dunne lijn getekend gevelsilhouet — de "state"
 * (het statige huis) — met daarin een serif-S in messing. Rustig en zakelijk,
 * geen gouden krullen.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M9 43.5V19.5L24 6.5l15 13v24H9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="miter"
      />
      <text
        x="24"
        y="34.5"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="21"
        fontWeight="500"
        fill="#a98b5f"
      >
        S
      </text>
    </svg>
  );
}

export default function Logo({
  compact = false,
  licht = false,
}: {
  compact?: boolean;
  licht?: boolean;
}) {
  return (
    <span className={`flex items-center gap-3 ${licht ? "text-offwhite" : "text-petrol"}`}>
      <LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="leading-none">
        <span
          className={`block font-serif ${compact ? "text-lg" : "text-xl"} tracking-[0.22em]`}
        >
          STATE
        </span>
        <span
          className={`mt-1 block text-[0.6rem] tracking-[0.42em] ${
            licht ? "text-offwhite/70" : "text-muted"
          }`}
        >
          VASTGOED
        </span>
      </span>
    </span>
  );
}

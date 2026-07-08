export function PVLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pv-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.15 235)" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 250)" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#pv-ring)" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" fill="oklch(0.20 0.07 265)" />
      <text
        x="50"
        y="45"
        textAnchor="middle"
        fill="white"
        fontFamily="Space Grotesk Variable, sans-serif"
        fontSize="15"
        fontWeight="600"
        letterSpacing="1"
      >
        PV
      </text>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="white"
        fontFamily="Space Grotesk Variable, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="1.5"
      >
        LUMENS
      </text>
    </svg>
  );
}

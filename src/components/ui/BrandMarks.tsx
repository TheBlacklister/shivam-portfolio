/**
 * Hand-built vector marks for brands with no public icon set.
 * Each is drawn to match the supplied artwork and inherits `currentColor`
 * where the original is monochrome, so it works on the dark ground.
 */

type Props = { className?: string };

/**
 * Minicon — rounded-square face: winking chevron eye, dot eye, smile.
 * Monochrome line art, so it takes currentColor.
 */
export function MiniconMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      <rect
        x="9"
        y="9"
        width="82"
        height="82"
        rx="24"
        stroke="currentColor"
        strokeWidth="8.5"
      />
      {/* winking eye */}
      <path
        d="M31.5 34.5 L42.5 41.5 L31.5 48.5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* open eye */}
      <circle cx="64.5" cy="41" r="7.2" fill="currentColor" />
      {/* smile */}
      <path
        d="M33 61.5 C39.5 71.5, 60.5 71.5, 67 61.5"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Ramaiah — gradient shield with diagonal stripes and a six-point asterisk.
 * Full colour, so it ignores currentColor.
 */
export function RamaiahMark({ className }: Props) {
  const shield = "M8 16 C24 8, 56 8, 72 16 L72 50 C72 72, 52 86, 40 92 C28 86, 8 72, 8 50 Z";
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="ramaiah-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#a4195f" />
          <stop offset="45%" stopColor="#e03127" />
          <stop offset="100%" stopColor="#f47b20" />
        </linearGradient>
        <clipPath id="ramaiah-clip">
          <path d={shield} />
        </clipPath>
      </defs>

      <path d={shield} fill="url(#ramaiah-g)" />

      {/* diagonal cut-throughs, echoing the striped original */}
      <g clipPath="url(#ramaiah-clip)" stroke="#0b0908" strokeWidth="5.5" strokeLinecap="round">
        <path d="M-12 72 L64 -4" />
        <path d="M-12 92 L84 -4" />
        <path d="M4 104 L100 8" />
        <path d="M26 108 L100 34" />
      </g>

      {/* six-point asterisk, top right */}
      <g stroke="#f47b20" strokeWidth="7" strokeLinecap="round">
        <path d="M84 6 L84 30" />
        <path d="M73.6 12 L94.4 24" />
        <path d="M73.6 24 L94.4 12" />
      </g>
    </svg>
  );
}

/**
 * Billing Software — a receipt with a torn edge and a rupee glyph.
 * The prototype is GST invoicing for Indian retail, and its UI brand colour
 * is #3B82F6, so the mark carries that rather than the site palette.
 */
export function BillingMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      {/* receipt body, torn along the bottom */}
      <path
        d="M22 12 h56 a4 4 0 0 1 4 4 v70 l-10 -7 -10 7 -10 -7 -10 7 -10 -7 -10 7 v-70 a4 4 0 0 1 4 -4 z"
        stroke="#3b82f6"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* rupee */}
      <g stroke="#3b82f6" strokeWidth="5.5" strokeLinecap="round">
        <path d="M38 31 h24" />
        <path d="M38 42 h24" />
        <path d="M38 53 h10 c9 0 14 -5 14 -11" />
        <path d="M38 53 l18 18" />
      </g>
    </svg>
  );
}

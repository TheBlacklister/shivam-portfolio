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

/**
 * Naman Trading Co. — an ear of wheat: stalk, paired grains, a single awn.
 * The storefront sells stone-ground atta and its UI accent is ochre #C8902E,
 * so the mark carries that rather than the site palette.
 */
export function NamanMark({ className }: Props) {
  const grain = "M0 0 c-7 -3 -11 -10 -10 -18 c7 3 11 10 10 18 z";
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      {/* stalk */}
      <path d="M50 92 L50 22" stroke="#c8902e" strokeWidth="5" strokeLinecap="round" />
      {/* awn */}
      <path d="M50 22 L50 8" stroke="#c8902e" strokeWidth="3" strokeLinecap="round" />
      {/* grains, left and right of the stalk */}
      <g fill="#c8902e">
        {[34, 50, 66].map((y) => (
          <g key={y}>
            <path d={grain} transform={`translate(48 ${y})`} />
            <path d={grain} transform={`translate(52 ${y}) scale(-1 1)`} />
          </g>
        ))}
        <path d="M50 32 c-5 -5 -5 -12 0 -17 c5 5 5 12 0 17 z" />
      </g>
    </svg>
  );
}

/**
 * HCG & Son Tools Co. — an eight-tooth gear with a hex bore.
 * The storefront sells power-tool spares and its wordmark is commutator
 * copper #D9793F, so the mark carries that rather than the site palette.
 */
export function HcgMark({ className }: Props) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="none">
      <g fill="#d9793f">
        {teeth.map((a) => (
          <rect key={a} x="43" y="8" width="14" height="18" rx="3" transform={`rotate(${a} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="27" stroke="#d9793f" strokeWidth="11" />
      {/* hex bore */}
      <path d="M50 40 L58.7 45 L58.7 55 L50 60 L41.3 55 L41.3 45 Z" fill="#d9793f" />
    </svg>
  );
}

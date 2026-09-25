# Company logos

Drop a logo file here, then point its entry in `src/data/logos.ts` at it:

```ts
Leadzsite: {
  kind: "file",
  label: "Leadzsite",
  src: "/logos/leadzsite.png",
  width: 480,
  height: 282,
},
```

Rules of thumb:

- **Use a light / white-on-dark variant.** The site background is near-black
  (`#0b0908`), so a dark-on-white logo disappears. Most brands ship a "footer"
  or "inverse" version — that's the one you want.
- **Crop the transparent padding** and keep it under ~500px on the long edge.
  `leadzsite.png` went from 4500×4500 / 129KB to 480×282 / 15KB that way.
- `width` and `height` just need the correct *ratio* — the tile scales it down
  and `object-contain` keeps it from distorting.

Any company with no file (and no entry) falls back to a gradient monogram tile,
so the row never renders broken.

## Current status

| Company | Mark |
|---|---|
| Leadzsite | Real logo — `leadzsite.png`, pulled from leadz.site (inverse variant) |
| Samsung Research Institute | Vector wordmark (Simple Icons, `SAMSUNG_PATH` in `logos.ts`) |
| Samsung PRISM | Shares the same Samsung wordmark |
| Deloitte USI | Typographic wordmark + green dot |
| Pokus Technologies | Typographic wordmark + pink dot, set to match the supplied artwork |
| Ramaiah Institute of Technology | Hand-built SVG shield — gradient, stripes, asterisk (`BrandMarks.tsx`) |
| Minicon | Hand-built SVG face — wink, dot eye, smile (`BrandMarks.tsx`) |
| Internz Valley | Real logo — `internzvalley.png`, the IV emblem lifted from internzvalley.com |
| Billing Software | Hand-built SVG receipt with a rupee glyph (`BrandMarks.tsx`) |
| Independent / Freelance | Sparkle monogram (intentional — not a company) |

Pokus and Ramaiah were **redrawn as vectors** rather than imported as image files,
because the source artwork was pasted into chat rather than saved to disk. They scale
cleanly and need no asset. If you later want the exact official files instead, drop them
here and switch those entries to `kind: "file"`.

Note on Internz Valley: the supplied lockup is dark teal on white and the
wordmark is illegible at tile size, so the file here is the circular **IV
emblem only**, cropped from the full logo and brightened (`brightness(1.55)
saturate(1.25)`) to read against `#0b0908`. The full lockup is still on their
site if you ever need it at a larger size.

Note on Pokus: the official mark is a near-black wordmark with a pink dot, which would
vanish on this background — the version here uses white text and keeps the pink dot.

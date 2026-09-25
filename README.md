# Shivam Gupta — Portfolio

A premium dark portfolio positioning Shivam as an **AI Product Engineer** rather than a generic
developer. Built to the spec in `Prompt.docx`, with the factual content taken from the résumé.

**Stack:** Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion · lucide-react

---

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

---

## Where the content lives

**You never need to edit a component to change what the site says.** Everything is in `src/data/`:

| File | Controls |
|---|---|
| `site.ts` | Name, tagline, email, social links, résumé path, SEO copy, nav items |
| `logos.ts` | Company marks — real vector, typographic wordmark, or monogram tile |
| `projects.ts` | The four project cards — summary, challenge, result, stack, links, status |
| `experience.ts` | Job history (the accordion), education, leadership |
| `timeline.ts` | The vertical career timeline |
| `skills.ts` | Skill groups (pills) and the four hero metrics |
| `aiTools.ts` | The "AI in the development lifecycle" column, grouped by stage |
| `workflow.ts` | The 9-step build process |
| `testimonials.ts` | Google reviews for LeadzSite + the rating summary |

### Before this goes live — things marked TODO

1. **`site.ts` → `url`** — currently `https://shivamgupta.dev`. Set your real domain.
   It feeds canonical URLs, the sitemap, and Open Graph tags. This is the last TODO left.
3. **`projects.ts` → `repoUrl`** — still empty on every project, so no **Code** buttons
   render. `liveUrl` is set for all four (minicon.in, internzvalley.com, pokus.ai, and the
   bundled billing demo).
3. **`testimonials.ts`** — done: five real Google reviews. Two are marked `excerpt: true`
   because Google truncates longer reviews; the card renders a trailing "…" for those.
4. **Project screenshots** — cards currently use a gradient header keyed off `accent`.
   To use real images, drop them in `public/` and swap the gradient `<div>` in
   `src/components/Projects.tsx` for `next/image`.
5. **The résumé PDF** — see "Résumé + QR code" below. Don't edit
   `public/Shivam_Gupta-Resume.pdf` directly; replace `scripts/resume-source.pdf`
   and re-run the stamping script.

---

## What's built in

- **⌘K command palette** — jump to any section, open any link. Arrow keys + Enter + Esc.
- **Custom cursor** — only on precise-pointer devices, disabled under reduced motion.
- **Scroll progress bar**, sticky glass nav with an animated active-section pill, back-to-top.
- **Animated counters**, scroll-reveal throughout, project filtering with layout animation.
- **SEO**: generated OG image (`src/app/opengraph-image.tsx`), Twitter card, JSON-LD `Person`
  schema, `sitemap.xml`, `robots.txt`, canonical URL.
- **Accessibility**: skip link, focus-visible rings, ARIA on disclosure and dialog, semantic
  landmarks, and a body-text palette that passes WCAG AA (≥ 5:1) against the `#050505` background.
- **Reduced motion** is honoured everywhere — animations collapse to their final state rather
  than being skipped mid-way.

## Company logos

`src/data/logos.ts` maps a company name to a mark, and `CompanyLogo` renders whichever
kind it finds. Every variant sits in the same tile, so a row of them reads as one system.

| Kind | Used for | Notes |
|---|---|---|
| `file` | Leadzsite | Real logo image from `public/logos/`. See that folder's README. |
| `path` | Samsung (SRIB + PRISM) | Vector wordmark. The path comes from the Simple Icons set (CC0-1.0); the mark itself stays the trademark of its owner and is used only to identify a former employer. |
| `wordmark` | Deloitte, Pokus | No vector mark available, so set typographically — wordmark plus the signature coloured dot. |
| `custom` | Ramaiah, Minicon | Vector marks hand-drawn to match supplied artwork — see `components/ui/BrandMarks.tsx`. |
| `monogram` | Independent / Freelance | Gradient initial in a rounded tile, matching the "SG" nav mark. |

Logos appear in the **Experience** rows, the **Timeline** rail markers, and on
**project cards** — each via a `logoKey` pointing into `logos.ts`. An unknown company falls back to a plain initial tile,
so nothing ever renders broken.

**To swap in a real Pokus or Ramaiah logo:** drop the file in `public/logos/` and change
that entry to `{ kind: "file", label, src, width, height }`. No component changes.
`public/logos/README.md` has the details and the current status of each company.

## Design tokens — warm "sunset" palette

All colours and fonts are defined once in `src/app/globals.css` under `@theme`.

```
--color-bg        #0b0908   deep warm charcoal
--color-card      #16110f
--color-muted     #b5aaa4   8.75:1   body text
--color-muted-2   #9e938c   6.63:1   secondary
--color-muted-3   #8b8079   5.17:1   labels, meta
--color-accent    #fb923c   amber
--color-accent-2  #f472b6   pink
--color-accent-3  #facc15   gold
```

The muted ramp is contrast-checked against `--color-bg` — all three pass WCAG AA.
**If you darken any of them, re-check the ratio before shipping.**

Two gradient utilities do most of the colour work: `.text-gradient`
(white → peach → coral → gold, for big headings) and `.text-gradient-accent`
(amber → pink → gold, for the highlighted phrase in each section title).

---

## Résumé + QR code

The résumé is served from `public/Shivam_Gupta-Resume.pdf`, which is **generated**, not
edited by hand. `scripts/resume-source.pdf` is the unstamped master;
`scripts/stamp-resume.mjs` adds a QR code (bottom-right of page 1, with a "Scan for
portfolio" caption) that opens the portfolio, and makes the same area a clickable link
for anyone reading the PDF on screen.

```bash
node scripts/stamp-resume.mjs                    # uses site.url
node scripts/stamp-resume.mjs https://your.dev   # or pass one explicitly
```

Re-running reads the master every time, so it never double-stamps.

> **The QR currently points at `https://shivamgupta.dev`** — the placeholder in
> `site.ts`. Set the real domain there and re-run the script, or the QR resolves
> nowhere.

To update the résumé content: drop the new PDF at `scripts/resume-source.pdf`, run the
script, done.

### Reading it on the site

"Review résumé" in the hero (and in ⌘K, and the contact grid) opens an in-page preview
with the PDF embedded, plus Download and New-tab buttons. Escape or a backdrop click
closes it. Browsers that can't render PDFs inline — iOS Safari mainly — get a fallback
link instead of an empty frame.

## Client reviews

The reviews section carries the five text reviews from the **LeadzSite** Google Business
Profile (5.0 from 7 reviews), with the reviewer's name and Google profile context, and a
link back to the listing.

They are reviews of **the agency**, not personal references for Shivam — the section
heading, the lead paragraph and the footnote all say so explicitly, so nothing is
overstated to a reader skimming the page. Two of the seven reviews have no text (an emoji
and a blank), so they are not shown; the 5.0 / 7 summary still reflects the full listing.

## Bundled demo — `public/demos/billing-software.html`

The Billing Software card links to a self-contained interactive prototype served from
`public/`. It is the original `billing-prototype.html` with **one change**: the seeded
company and customer records carried what looked like real identifiers — a bank account
number, IFSC, UPI ID, GSTIN, PAN, and customer phone numbers and emails. Those are
replaced with obvious dummies (`0000 0000 0000`, `DEMO0000000`, `demo@upi`,
`*@demo.example`, `90000 000xx`), and the page carries `noindex, nofollow`.

Nothing else was touched — the UI, product catalogue, invoice flow and totals are
unchanged. If that data was already fictional, copying the original file over
`public/demos/billing-software.html` restores it exactly.

## Deploy

Push to GitHub and import the repo on Vercel — no configuration needed, the whole site
prerenders as static. Then set `site.url` to the production domain so OG tags and the
sitemap resolve correctly.

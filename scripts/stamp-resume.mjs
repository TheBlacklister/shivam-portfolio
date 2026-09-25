/**
 * Stamps a "scan me" QR code onto the résumé PDF.
 *
 *   node scripts/stamp-resume.mjs [url]
 *
 * Reads the UNSTAMPED master at scripts/resume-source.pdf and writes
 * public/Shivam_Gupta-Resume.pdf, so re-running never double-stamps.
 *
 * The URL defaults to `site.url` in src/data/site.ts. Re-run this after
 * pointing that at the real domain, or the QR will resolve to a placeholder.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import QRCode from "qrcode";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "scripts/resume-source.pdf");
const OUT = path.join(root, "public/Shivam_Gupta-Resume.pdf");

function urlFromSite() {
  const src = fs.readFileSync(path.join(root, "src/data/site.ts"), "utf8");
  return src.match(/url:\s*"([^"]+)"/)?.[1];
}

const url = process.argv[2] || process.env.PORTFOLIO_URL || urlFromSite();
if (!url) throw new Error("No portfolio URL found — pass one as an argument.");

const QR = 56;      // QR side, in points
const MARGIN = 40;  // page margin the stamp aligns to
const CAPTION = 6;  // caption font size

const pngDataUrl = await QRCode.toDataURL(url, {
  margin: 0,
  scale: 12,
  errorCorrectionLevel: "M",
  color: { dark: "#1F3864FF", light: "#FFFFFFFF" },
});

const pdf = await PDFDocument.load(fs.readFileSync(SRC));
const png = await pdf.embedPng(Buffer.from(pngDataUrl.split(",")[1], "base64"));
const font = await pdf.embedFont(StandardFonts.Helvetica);

const page = pdf.getPage(0);
const { width } = page.getSize();
const x = width - MARGIN - QR;

page.drawImage(png, { x, y: 24, width: QR, height: QR });

const caption = "Scan for portfolio";
const capW = font.widthOfTextAtSize(caption, CAPTION);
page.drawText(caption, {
  x: x + (QR - capW) / 2,
  y: 14,
  size: CAPTION,
  font,
  color: rgb(0.35, 0.37, 0.42),
});

// Make the QR area clickable in a PDF reader too, not just scannable.
page.node.set(
  pdf.context.obj("Annots"),
  pdf.context.obj([
    pdf.context.obj({
      Type: "Annot",
      Subtype: "Link",
      Rect: [x, 24, x + QR, 24 + QR],
      Border: [0, 0, 0],
      A: { Type: "Action", S: "URI", URI: pdf.context.obj(url) },
    }),
  ]),
);

fs.writeFileSync(OUT, await pdf.save());
console.log(`Stamped QR -> ${url}`);
console.log(`Wrote ${path.relative(root, OUT)} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);

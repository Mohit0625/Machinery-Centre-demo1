/**
 * One-off image optimizer: converts the in-use PNGs under public/assets/images
 * to right-sized WebP. Run with `npm run optimize:images` (or after adding new
 * art). Source PNGs are left in place; references in code point at the .webp.
 */
import sharp from "sharp";
import { readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIR = "public/assets/images";

// name (without extension) -> { ext, w: max width (no upscaling), q: webp quality }
const TARGETS = [
  { name: "hero", ext: "png", w: 1920, q: 80 },            // Trendi hero bg
  { name: "hero-machinery", ext: "png", w: 1920, q: 80 },  // Home hero (LCP)
  { name: "value-bg", ext: "png", w: 1600, q: 70 },        // blurred bg
  { name: "quote-bg", ext: "png", w: 1600, q: 70 },        // overlay bg
  { name: "about-main", ext: "png", w: 1100, q: 80 },
  { name: "service-milling", ext: "png", w: 1100, q: 78 },
  { name: "service-laser", ext: "png", w: 1100, q: 78 },
  { name: "service-turning", ext: "png", w: 1100, q: 78 },
  { name: "industry-cement", ext: "png", w: 900, q: 78 },
  { name: "industry-paint", ext: "png", w: 900, q: 78 },
  { name: "industry-packaging", ext: "png", w: 900, q: 78 },
  { name: "industry-textile", ext: "png", w: 900, q: 78 },
  { name: "industry-laundry", ext: "png", w: 900, q: 78 },
];

const kb = (n) => (n / 1024).toFixed(0);
let before = 0;
let after = 0;

for (const t of TARGETS) {
  const src = join(DIR, `${t.name}.${t.ext}`);
  const out = join(DIR, `${t.name}.webp`);
  if (!existsSync(src)) {
    console.warn(`  ! missing ${src} — skipped`);
    continue;
  }
  const srcSize = statSync(src).size;
  await sharp(readFileSync(src))
    .resize({ width: t.w, withoutEnlargement: true })
    .webp({ quality: t.q })
    .toFile(out);
  const outSize = statSync(out).size;
  before += srcSize;
  after += outSize;
  console.log(`  ${t.name}: ${kb(srcSize)} KB → ${kb(outSize)} KB (.webp)`);
}

console.log(
  `\nTotal: ${kb(before)} KB → ${kb(after)} KB  (saved ${kb(before - after)} KB, -${Math.round((1 - after / before) * 100)}%)`
);

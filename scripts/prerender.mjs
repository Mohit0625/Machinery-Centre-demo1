/**
 * Build-time prerender: bakes per-route <title>, meta description, canonical,
 * Open Graph/Twitter tags, JSON-LD AND the rendered page body into a static HTML
 * file per route. Crawlers + social unfurlers get correct metadata, and the
 * above-the-fold content (the hero / LCP element) paints from HTML before the JS
 * bundle executes — the client hydrates the same markup (see src/main.tsx).
 *
 * Runs after `vite build` (client) and `vite build --ssr ... --outDir .prerender-server`.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SERVER_ENTRY = pathToFileURL(join(process.cwd(), ".prerender-server", "entry-server.js")).href;

const ROUTES = [
  "/",
  "/about",
  "/products",
  "/products/compressors",
  "/products/pumps",
  "/products/air-treatment",
  "/products/spares",
  "/trendi",
  "/blog",
  "/blog/essential-maintenance-tips-for-air-compressors",
  "/blog/choosing-the-right-pump-for-your-industry",
  "/blog/importance-of-energy-efficient-equipment",
  "/quote",
  "/contact",
  "/careers",
  "/feedback",
  "/privacy-policy",
  "/terms-of-use",
];

// Per-route <head> preloads for the LCP image (home only — other routes don't use it).
// Scoped to mobile viewports: preloading the hero is a big win on slow mobile links,
// but on fast desktop connections it competes with render-critical CSS/JS and HURTS
// LCP (the image was never the bottleneck there). `media` keeps it mobile-only.
const PRELOAD = {
  "/": '<link rel="preload" as="image" href="/assets/images/hero-machinery.webp" media="(max-width: 820px)" fetchpriority="high">',
};

const { render, SITE_URL } = await import(SERVER_ENTRY);

const template = readFileSync(join(DIST, "index.html"), "utf8");
const SITE = String(SITE_URL || "https://www.machinerycentre.in").replace(/\/+$/, "");

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const abs = (p) => {
  const path = p || "/";
  if (/^https?:\/\//i.test(path)) return path;
  return SITE + (path.startsWith("/") ? path : "/" + path);
};

function pageHtml(route) {
  let head = null;
  let body = "";
  try {
    const r = render(route);
    head = r.head;
    body = r.html;
  } catch (e) {
    console.warn(`  ! render failed for ${route}: ${e.message} — writing template head`);
  }
  if (!head || !head.title) return template;

  const canonicalUrl = abs(head.canonical || route);
  let h = template;
  // Replace via function form so '$' in values is never treated as a backref.
  const set = (re, value) => {
    h = h.replace(re, (_m, a, b) => a + value + b);
  };

  h = h.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(head.title)}</title>`);
  set(/(<meta name="description" content=")[^"]*(")/, esc(head.description));
  set(/(<meta name="robots" content=")[^"]*(")/, head.noindex ? "noindex, follow" : "index, follow");
  set(/(<link rel="canonical" href=")[^"]*(")/, esc(canonicalUrl));
  set(/(<meta property="og:title" content=")[^"]*(")/, esc(head.title));
  set(/(<meta property="og:description" content=")[^"]*(")/, esc(head.description));
  set(/(<meta property="og:type" content=")[^"]*(")/, esc(head.ogType));
  set(/(<meta property="og:url" content=")[^"]*(")/, esc(canonicalUrl));
  set(/(<meta property="og:image" content=")[^"]*(")/, esc(head.ogImage));
  set(/(<meta name="twitter:title" content=")[^"]*(")/, esc(head.title));
  set(/(<meta name="twitter:description" content=")[^"]*(")/, esc(head.description));
  set(/(<meta name="twitter:image" content=")[^"]*(")/, esc(head.ogImage));

  const ld = (head.jsonLd || [])
    .map((o) => `<script type="application/ld+json" data-seo>${JSON.stringify(o)}</script>`)
    .join("\n    ");
  if (ld) h = h.replace("</head>", () => `    ${ld}\n  </head>`);

  if (PRELOAD[route]) h = h.replace("</head>", () => `    ${PRELOAD[route]}\n  </head>`);

  if (body) h = h.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);

  return h;
}

let count = 0;
for (const route of ROUTES) {
  const out = route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, pageHtml(route), "utf8");
  count++;
  console.log(`  ✓ ${route} -> ${out}`);
}

rmSync(".prerender-server", { recursive: true, force: true });
console.log(`Prerendered ${count} routes (head + JSON-LD baked into static HTML).`);

import { useEffect } from "react";

export const SITE_URL = "https://www.machinerycentre.in";

export const BUSINESS = {
  name: "Machinery Centre",
  legalName: "Machinery Centre",
  slogan: "One Stop Shop For Compressors and Pumps",
  foundingDate: "1987",
  logo: "https://res.cloudinary.com/dt3m8h52i/image/upload/v1780925600/Copy_of_MC_LOGO_RED-Photoroom_ur93js.png",
  email: "machinerycentre@yahoo.com",
  telephone: "+91-11-41440012",
  phones: ["+91-11-41440012", "+91-98100-54137", "+91-98911-55438"],
  whatsapp: "+919810054137",
  address: {
    streetAddress: "3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110006",
    addressCountry: "IN",
  },
  areaServed: ["Delhi", "Delhi NCR", "India"],
} as const;

type JsonLd = Record<string, unknown>;

/** Open Graph `article:*` metadata for blog posts / articles. */
export interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface SsrHead {
  title: string;
  description: string;
  canonical?: string;
  ogType: string;
  ogImage: string;
  noindex: boolean;
  jsonLd: JsonLd[];
  keywords?: string;
  article?: ArticleMeta;
}
export const ssrHead: SsrHead = {
  title: "",
  description: "",
  canonical: undefined,
  ogType: "website",
  ogImage: BUSINESS.logo,
  noindex: false,
  jsonLd: [],
  keywords: undefined,
  article: undefined,
};
export function resetSsrHead(): void {
  ssrHead.title = "";
  ssrHead.description = "";
  ssrHead.canonical = undefined;
  ssrHead.ogType = "website";
  ssrHead.ogImage = BUSINESS.logo;
  ssrHead.noindex = false;
  ssrHead.jsonLd = [];
  ssrHead.keywords = undefined;
  ssrHead.article = undefined;
}

function getOrigin(): string {
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    return window.location.origin;
  }
  return SITE_URL;
}

/** Build an absolute URL from a path (or pass a full URL through unchanged). */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = getOrigin().replace(/\/+$/, "");
  return base + (path.startsWith("/") ? path : "/" + path);
}

const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04", may: "05", june: "06",
  july: "07", august: "08", september: "09", october: "10", november: "11", december: "12",
};

/**
 * Convert a human display date like "May 12, 2026" to an ISO date "2026-05-12".
 * Returns "" if the string can't be parsed. Built from the string parts (not
 * `new Date()`) to avoid timezone shifts that can move the date by a day.
 */
export function toISODate(display: string): string {
  const m = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/.exec((display || "").trim());
  if (!m) return "";
  const mm = MONTHS[m[1].toLowerCase()];
  if (!mm) return "";
  return `${m[3]}-${mm}-${m[2].padStart(2, "0")}`;
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getOrigin()}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: getOrigin() + "/",
    logo: BUSINESS.logo,
    slogan: BUSINESS.slogan,
    foundingDate: BUSINESS.foundingDate,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    areaServed: BUSINESS.areaServed,
    contactPoint: BUSINESS.phones.map((tel) => ({
      "@type": "ContactPoint",
      telephone: tel,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    })),
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${getOrigin()}/#localbusiness`,
    name: BUSINESS.name,
    image: BUSINESS.logo,
    url: getOrigin() + "/",
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: "₹₹",
    foundingDate: BUSINESS.foundingDate,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    areaServed: BUSINESS.areaServed,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export interface ProductInput {
  name: string;
  description?: string;
  brand?: string;
  category?: string;
}

export function productSchema(p: ProductInput): JsonLd {
  const out: JsonLd = { "@type": "Product", name: p.name };
  if (p.description) out.description = p.description;
  if (p.brand) out.brand = { "@type": "Brand", name: p.brand };
  if (p.category) out.category = p.category;
  return out;
}

/** ItemList of Products for a category landing page (no fabricated prices/ratings). */
export function productListSchema(name: string, products: ProductInput[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: productSchema(p),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function blogPostingSchema(p: {
  title: string;
  description: string;
  image: string;
  author: string;
  authorType?: "Person" | "Organization";
  datePublished?: string;
  dateModified?: string;
  keywords?: string;
  articleSection?: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    image: p.image,
    author: { "@type": p.authorType ?? "Organization", name: p.author },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: BUSINESS.logo },
    },
    ...(p.datePublished ? { datePublished: p.datePublished } : {}),
    ...(p.dateModified ? { dateModified: p.dateModified } : {}),
    ...(p.keywords ? { keywords: p.keywords } : {}),
    ...(p.articleSection ? { articleSection: p.articleSection } : {}),
    mainEntityOfPage: absoluteUrl(p.path),
  };
}

/**
 * Inject one or more JSON-LD blocks into <head> for the lifetime of the calling
 * component. Re-runs only when the serialized content changes.
 *
 * NOTE: because this is a client-only SPA, schema injected here is reliably seen
 * by Googlebot (which renders JS) but NOT by crawlers that skip JS. Site-wide
 * Organization + LocalBusiness JSON-LD therefore also lives statically in
 * index.html. The durable fix is prerendering/SSG — see docs/Machinery-Centre-SEO-Strategy.md §02.
 */
export function useJsonLd(blocks: JsonLd | JsonLd[] | null | undefined): void {
  // Build-time prerender: record into the SSR head collector (no-op in browser).
  if (typeof window === "undefined" && blocks) {
    ssrHead.jsonLd.push(...(Array.isArray(blocks) ? blocks : [blocks]));
  }
  const json = blocks ? JSON.stringify(Array.isArray(blocks) ? blocks : [blocks]) : "";
  useEffect(() => {
    if (!json) return;
    const parsed = JSON.parse(json) as JsonLd[];
    const nodes = parsed.map((obj) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-seo", "");
      el.text = JSON.stringify(obj);
      document.head.appendChild(el);
      return el;
    });
    return () => nodes.forEach((n) => n.remove());
  }, [json]);
}

import { useEffect } from 'react';
import { BUSINESS, absoluteUrl, ssrHead } from './seo';

export interface SEOOptions {
  /** Canonical path (e.g. "/products/pumps") or absolute URL. Defaults to the current path. */
  canonical?: string;
  /** Open Graph type: "website" (default), "article", "product". */
  ogType?: string;
  /** Absolute image URL for social/link previews. Defaults to the company logo. */
  ogImage?: string;
  /** When true, emits robots "noindex, follow". */
  noindex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets the document title, meta description, canonical link, robots directive,
 * and Open Graph / Twitter Card tags for the current page.
 *
 * Backward compatible: useSEO(title, description) still works; pass an options
 * object as the third argument for canonical/OG/noindex control.
 */
export function useSEO(title: string, description: string, options: SEOOptions = {}) {
  const { canonical, ogType = 'website', ogImage = BUSINESS.logo, noindex = false } = options;

  // Build-time prerender: record into the SSR head collector (no-op in browser).
  if (typeof window === 'undefined') {
    ssrHead.title = title;
    ssrHead.description = description;
    ssrHead.canonical = canonical;
    ssrHead.ogType = ogType;
    ssrHead.ogImage = ogImage;
    ssrHead.noindex = noindex;
  }

  useEffect(() => {
    const path = canonical ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = absoluteUrl(path);

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:site_name', BUSINESS.name);
    upsertMeta('property', 'og:locale', 'en_IN');

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
  }, [title, description, canonical, ogType, ogImage, noindex]);
}

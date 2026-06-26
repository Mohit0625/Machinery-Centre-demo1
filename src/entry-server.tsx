/**
 * Build-time SSR entry used only by scripts/prerender.mjs.
 * renderToString produces the page body AND (via each page's useSEO()/useJsonLd()
 * calls populating the shared `ssrHead` collector) the per-route head. The
 * prerender bakes both into static HTML so the above-the-fold content (the hero,
 * the LCP element) paints from HTML before the JS bundle executes — the client
 * then hydrates the same markup (see main.tsx).
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";
import { ssrHead, resetSsrHead, SITE_URL } from "./utils/seo";

export { SITE_URL };

export function render(url: string) {
  resetSsrHead();
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
  return { html, head: { ...ssrHead, jsonLd: [...ssrHead.jsonLd] } };
}

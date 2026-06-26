/**
 * Build-time SSR entry used only by scripts/prerender.mjs.
 * renderToString runs every page's useSEO()/useJsonLd() calls, which (on the
 * server) populate the shared `ssrHead` collector. We return that head so the
 * prerender can bake per-route <title>/meta/canonical/OG + JSON-LD into static
 * HTML. The rendered body markup is intentionally discarded — we keep the
 * shipped pages as a client-rendered SPA so runtime performance is unchanged.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";
import { ssrHead, resetSsrHead, SITE_URL } from "./utils/seo";

export { SITE_URL };

export function collectHead(url: string) {
  resetSsrHead();
  // Render purely to trigger the per-page useSEO()/useJsonLd() head collection.
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
  return { ...ssrHead, jsonLd: [...ssrHead.jsonLd] };
}

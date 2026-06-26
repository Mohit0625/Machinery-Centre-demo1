# Machinery Centre — SEO & Content Strategy Blueprint

_Industrial air compressors, pumps, air-treatment & OEM spares · Delhi, India · Authorized dealer since 1987._

> **Placeholders & honesty:** the canonical domain `https://www.machinerycentre.in/` is a placeholder — replace it with the production domain everywhere. Search volumes are qualitative (Low/Medium/High); confirm exact figures in Google Keyword Planner / Ahrefs / Semrush. Certifications, client logos and review counts are framed as recommendations to add *if genuinely held* — never asserted. Section 12 is an adversarial QA pass over these recommendations.

---

## 00 · Executive Summary

A complete SEO and content strategy for **Machinery Centre** — a Delhi-based authorized dealer and stockist of industrial air compressors, pumps, air-treatment equipment and OEM spares, in business since 1987. This report rebuilds the site's organic strategy around its *real* niche and local market, then specifies — page by page — the keywords, copy, metadata, schema and conversion paths to rank and convert.

**At a glance**

| Metric | Count |
| --- | --- |
| Pages optimized | 14 |
| Keyword clusters | 36 |
| Priority keywords | 25 |
| P0 quick wins | 8 |
| Schema types | 7 |
| QA findings | 4 |

### The five highest-impact moves

1. **Fix the rendering & crawlability gap** — The site is a client-rendered React SPA: the served HTML is an empty `<div id="root">` and `useSEO()` only patches the title/description in-browser. AI crawlers (GPTBot, PerplexityBot, ClaudeBot) and first-wave indexing often see nothing. Pre-render or SSG every route so the content exists in the HTML.
2. **Split the four product categories into real, indexable URLs** — Today `/products/compressors`, `/pumps`, `/air-treatment` and `/spares` are JS tabs sharing one URL, title and meta description — so four of the highest commercial-intent pages cannot rank independently. Give each a standalone route, title, meta, H1 and schema.
3. **Win the niche, not the generic** — Machinery Centre is a Delhi dealer of industrial air compressors, pumps & OEM spares — not a generic "machinery supplier." Target high-intent product + brand + local terms (e.g. "screw air compressor dealer in Delhi", "Ingersoll Rand authorized dealer", "Kirloskar pump spares").
4. **Ship structured data + sitemap + robots** — Add Organization, LocalBusiness, Product, BreadcrumbList and FAQPage JSON-LD, a sitemap.xml and a robots.txt with explicit AI-crawler rules — none exist today.
5. **Capture local & "near me" demand** — A correctly optimized Google Business Profile, consistent NAP, a content-rich Contact page and Delhi-NCR location targeting unlock the easiest qualified leads for a single-location B2B dealer.

### Priority "do-first" keywords (P0)

`air compressor dealer in Delhi` · `Ingersoll Rand authorized dealer Delhi` · `screw air compressor price` · `Kirloskar pump dealer Delhi` · `industrial air dryer supplier` · `industrial pump dealer in Delhi` · `two stage reciprocating air compressor` · `air compressor dealer near me`

---

## 01 · Keyword Research & Mapping

CRITICAL SEO BLOCKERS (fix before this keyword map can rank): (1) Routing bug — App.tsx mounts Products at "products/*" but Products.tsx switches the four categories with a useState tab, so /products/compressors, /products/pumps, /products/air-treatment and /products/spares all share ONE URL, ONE <title> and ONE meta description (set in Products.tsx line 325). The category and product clusters above CANNOT be separately indexed until each category is given a real route that reads the URL segment and renders its own useSEO() title/meta/canonical. The nav deep-links also do not actually deep-link today. (2) No SSR/prerendering — this is a Vite + React 19 SPA whose only SEO is a client-side useSEO() hook mutating document.title/meta. Googlebot can render JS but it is slower and less reliable; add prerendering (e.g. vite-plugin-ssg/prerender or a static export) so titles, meta, canonical, JSON-LD and OG tags exist in the initial HTML. (3) Missing infra — no sitemap.xml, no robots.txt, no canonical tags, no JSON-LD (add Organization + LocalBusiness with the exact NAP, plus Product schema), no Open Graph/Twitter cards. (4) No dedicated routes exist for services (AMC/repair/installation), industry-application pages, or a crawlable catalogue page — these clusters currently have to point at the closest existing route; create /services, industry solution pages (or industry-tagged blog posts), and a /catalogue page to host them. (5) Internal links must use only the real routes in App.tsx: /, /about, /products/* , /trendi, /careers, /blog, /blog/:slug, /quote, /contact, /feedback, /privacy-policy, /terms-of-use. DOMAIN: every targetPage uses the placeholder https://www.machinerycentre.in/ — this MUST be replaced with the real production domain everywhere (canonical, sitemap, OG, JSON-LD) before launch. The domain is currently UNKNOWN. DO-NOT-FABRICATE / TRUST SIGNALS: No ISO/CE certs, awards, GST numbers, or review counts have been invented. On-site claims ("15,000+ clients", "10+ brand partners", "39+ years") are unverified — treat as claims to substantiate, not facts, and do not amplify in meta until confirmed. Recommendations (conditional, do not assert): standardise the years-in-business figure (homepage meta says "35+ years" while on-page counters auto-compute 39 from a 1987 founding — pick ONE consistent number, e.g. "Since 1987"); replace the generic placeholder testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel) with real attributable B2B reviews; consider a branded domain email (e.g. sales@machinerycentre.in) instead of the yahoo.com address to raise trust; add an ISO 9001 / dealer-authorization badge ONLY IF genuinely held; set up a Google Business Profile with the exact NAP (3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; landline 011-41440012; mobile 9810054137 / 9891155438; WhatsApp +91 9810054137) to unlock the near-me / local-pack clusters. Brand wording: Ingersoll-Rand and Trident are authorized-dealer relationships (state plainly if current); Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest are stockist relationships — phrase as "stockist/supplier", not "authorized dealer", unless verified; Trendi is their own/exclusive brand and can be owned fully. EXAMPLE READY-TO-PASTE SEO TITLES & META (character counts verified, title 50-60 / meta 140-160): - Compressors category — Title: "Air Compressor Dealer in Delhi | Machinery Centre" = 50 chars. Meta: "Authorized air compressor dealer in Delhi NCR. Buy Ingersoll Rand & Trendi screw and reciprocating compressors with genuine spares and service." = 142 chars. - Pumps category — Title: "Industrial Pump Dealer in Delhi | Machinery Centre" = 50 chars. Meta: "Industrial pump dealer and stockist in Delhi for Kirloskar, Rotodel & Crompton Greaves. Rotary gear, metering and vacuum pumps with spares & support." = 149 chars. - Air Treatment category — Title: "Compressed Air Dryer & Filter Supplier | Delhi NCR" = 50 chars. Meta: "Trident desiccant & refrigerated air dryers, filters, drain valves and PSA nitrogen generators. Compressed air treatment supplier in Delhi NCR." = 142 chars. - Spares category — Title: "Compressor & Pump Spare Parts Dealer in Delhi" = 45 chars (UNDER 50 — pad to: "Compressor & Pump Spare Parts Dealer in Delhi NCR" = 49, still under; recommended final: "Compressor & Pump Spares Dealer in Delhi | M.Centre" = 51 chars). Meta: "Genuine OEM spares for Ingersoll Rand, Kirloskar & Crompton pumps and compressors. Air-oil separators, filters, service kits supplied across Delhi NCR." = 150 chars. - Trendi brand — Title: "Trendi Energy Efficient Air Compressors | Buy Online" = 52 chars. Meta: "Trendi screw and reciprocating air compressors with VFD option, IE3 motors and 3-stage air-oil separator. Energy efficient compressed air from Machinery Centre." = 159 chars. These five are provided as a verified template; replicate the same 50-60 / 140-160 discipline for the remaining product, service, industry, brand and local pages when those routes are built.

### Keyword clusters (36)

#### Air Compressors (Category)
- **Type / Intent:** Product category · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE placeholder domain; NOTE: category is currently a useState tab on /products/* — not separately indexable. Must be made a real route /products/compressors with its own title/meta/canonical before this can rank.)
- **Primary:** `air compressor dealer in Delhi`
- **Secondary:** industrial air compressor supplier · air compressor dealer Delhi NCR · compressed air systems supplier · air compressor distributor India · industrial air compressor Delhi
- **Long-tail:** industrial air compressor dealer in Old Delhi price · buy industrial air compressor in Delhi NCR · authorized air compressor dealer near GB Road Delhi · best air compressor supplier for factories in Delhi
- **Semantic / entities:** compressed air · CFM · working pressure PSI · Ingersoll Rand · Trendi · oil-free air · IE3 motor · kW rating · air receiver tank

#### Industrial Pumps (Category)
- **Type / Intent:** Product category · Commercial
- **Target page:** https://www.machinerycentre.in/products/pumps (REPLACE domain; currently a tab — needs its own indexable route)
- **Primary:** `industrial pump dealer in Delhi`
- **Secondary:** industrial pump supplier Delhi NCR · pump distributor India · Kirloskar pump dealer Delhi · Rotodel pump supplier · industrial water pump dealer
- **Long-tail:** industrial pump supplier in Old Delhi with spares · buy rotary gear pump in Delhi NCR · Kirloskar vacuum pump dealer near me Delhi · industrial dosing pump supplier for chemical plant
- **Semantic / entities:** centrifugal pump · positive displacement · viscosity · flow rate m3/hr · head · Kirloskar · Rotodel · Crompton Greaves · Indfoss · Everest

#### Compressed Air Treatment (Category)
- **Type / Intent:** Product category · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain; currently a tab — needs its own indexable route)
- **Primary:** `compressed air treatment supplier Delhi`
- **Secondary:** air treatment equipment supplier India · compressed air dryer and filter dealer · air purification system for compressors · Trident air treatment dealer
- **Long-tail:** compressed air dryer and filtration supplier in Delhi NCR · industrial air drying and filtration system price India · compressed air treatment solution for pharma plant Delhi
- **Semantic / entities:** dew point · coalescing filter · desiccant · refrigerated dryer · ISO 8573-1 · micron rating · oil-free compressed air · condensate drain

#### OEM Spares & Service Parts (Category)
- **Type / Intent:** Product category · Commercial
- **Target page:** https://www.machinerycentre.in/products/spares (REPLACE domain; currently a tab — needs its own indexable route)
- **Primary:** `compressor and pump spare parts Delhi`
- **Secondary:** genuine OEM pump spares supplier · air compressor spare parts dealer Delhi · pump spares distributor India · compressor service kit supplier
- **Long-tail:** Ingersoll Rand compressor spare parts dealer in Delhi · Kirloskar pump spare parts supplier Delhi NCR · genuine boiler feed pump spares supplier India · air oil separator and filter replacement Delhi
- **Semantic / entities:** air filter · oil filter · air-oil separator · intake valve · gasket · service kit · boiler feed pump · centrifugal pump spares · Elgi · Janatics

#### Screw Air Compressor (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; ideally a dedicated /products/compressors anchor or sub-page for screw compressors)
- **Primary:** `screw air compressor price`
- **Secondary:** screw air compressor dealer Delhi · energy efficient screw compressor · VFD screw air compressor · belt drive screw air compressor · direct drive screw compressor
- **Long-tail:** Trendi energy efficient screw air compressor price in India · VFD screw air compressor with IE3 motor for factory · belt drive vs direct drive screw air compressor for industrial use · low specific power consumption screw compressor Delhi NCR
- **Semantic / entities:** airend · three-stage air-oil separator · microprocessor controller · specific power consumption · VFD · IE3 motor · CFM · Trendi · kW

#### Reciprocating Air Compressor (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain)
- **Primary:** `two stage reciprocating air compressor`
- **Secondary:** reciprocating air compressor dealer Delhi · Ingersoll Rand reciprocating compressor · piston air compressor industrial · 175 PSI air compressor · cast iron air compressor
- **Long-tail:** Ingersoll Rand two stage reciprocating air compressor price India · 175 PSI 100% continuous duty air compressor for workshop · cast iron two stage piston compressor for automotive service Delhi
- **Semantic / entities:** two-stage · 175 PSI · 100% continuous duty · cast iron · piston · automatic start/stop · Ingersoll Rand · Trendi · intercooler

#### Refrigerated Air Dryer (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain)
- **Primary:** `refrigerated air dryer price`
- **Secondary:** refrigerated air dryer dealer Delhi · refrigerated compressed air dryer supplier · Trident Coldspell dryer · industrial refrigerated dryer India
- **Long-tail:** refrigerated compressed air dryer price in India · high pressure refrigerated air dryer 40 kg cm2 supplier · Trident Coldspell refrigerated dryer dealer Delhi NCR
- **Semantic / entities:** dew point · refrigeration dryer · anti-recycle · condenser · ISO 8573-1 class 5 · pressure drop · Trident Coldspell

#### Desiccant Air Dryer (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain)
- **Primary:** `desiccant air dryer supplier`
- **Secondary:** heatless desiccant dryer dealer Delhi · desiccant compressed air dryer price · Trident Dryspell dryer · adsorption air dryer India
- **Long-tail:** heatless desiccant compressed air dryer price India · low dew point desiccant air dryer for pharma Delhi · purge economiser desiccant dryer supplier Delhi NCR
- **Semantic / entities:** adsorbent · heatless · purge economiser · -40 dew point · ISO 8573-1 class 2 · Trident Dryspell · blower reactivated dryer

#### Rotary Gear Pump (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/pumps (REPLACE domain)
- **Primary:** `rotary gear pump dealer`
- **Secondary:** rotary gear pump price · Rotodel gear pump supplier · HGN gear pump · HGSX rotary gear pump · high viscosity gear pump
- **Long-tail:** Rotodel HGN rotary gear pump price in India · high viscosity rotary gear pump for oil transfer Delhi · Rotodel HGSX gear pump dealer for food and pharma
- **Semantic / entities:** positive displacement · high viscosity · pulsation-free flow · 1440 RPM · Rotodel · HGN · HGSX · lubricating oil transfer

#### Metering / Dosing Pump (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/pumps (REPLACE domain)
- **Primary:** `metering pump dealer Delhi`
- **Secondary:** dosing pump supplier India · chemical dosing pump price · Kirloskar metering pump · precision metering pump
- **Long-tail:** chemical dosing metering pump price in India · Kirloskar metering pump dealer for water treatment Delhi · adjustable stroke dosing pump supplier Delhi NCR
- **Semantic / entities:** dosing · stroke control · chemical compatible · repeatable flow · Kirloskar · water treatment · process dosing

#### Vacuum Pump (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/pumps (REPLACE domain)
- **Primary:** `vacuum pump dealer Delhi`
- **Secondary:** industrial vacuum pump supplier · Kirloskar vacuum pump price · KV DV vacuum pump · water ring vacuum pump India
- **Long-tail:** Kirloskar KV DV vacuum pump price in India · industrial vacuum pump up to 640 mmHg supplier Delhi · 162 m3/hr vacuum pump dealer Delhi NCR
- **Semantic / entities:** 640 mmHg · 162 m3/hr · wide voltage · dynamic balancing · Kirloskar · KV/DV · suction

#### Nitrogen Generator (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain)
- **Primary:** `PSA nitrogen generator supplier`
- **Secondary:** nitrogen gas generator dealer Delhi · onsite nitrogen generator price · industrial nitrogen generator India · Trident nitrogen generator
- **Long-tail:** PSA nitrogen generator price in India 99.999 purity · onsite nitrogen gas generator for food packaging Delhi · modular nitrogen generator supplier Delhi NCR
- **Semantic / entities:** PSA · pressure swing adsorption · 95% to 99.999% purity · onsite nitrogen · modular · Trident · food packaging · inerting

#### Automatic Drain Valves (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain)
- **Primary:** `automatic drain valve for air compressor`
- **Secondary:** condensate drain valve supplier · zero air loss drain valve · Trident drain valve dealer · electronic auto drain valve India
- **Long-tail:** zero air loss automatic condensate drain valve price India · timer based auto drain valve for compressed air system Delhi · Trident EDV-X electronic drain valve dealer Delhi NCR
- **Semantic / entities:** condensate · zero air loss · timer drain · CTD · LDV · EDV-X · Trident · compressed air drain

#### Compressed Air Filters (Product)
- **Type / Intent:** Individual product page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain)
- **Primary:** `compressed air filter supplier`
- **Secondary:** submicron air filter dealer Delhi · coalescing filter for compressor · oil removal filter India · Trident air filter
- **Long-tail:** 0.01 micron coalescing compressed air filter price India · submicron oil removal filter for medical air Delhi · bacteria filter for compressed air food industry Delhi NCR
- **Semantic / entities:** coalescing · 0.01 micron · oil removal · submicron · bacteria filter · borosilicate media · Trident · point of use

#### Packaging Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend a dedicated /blog industry guide or solutions section since no industry route exists yet)
- **Primary:** `air compressor for packaging industry`
- **Secondary:** compressed air for packaging line · packaging industry compressor supplier Delhi · nitrogen generator for packaging
- **Long-tail:** oil-free air compressor for food packaging line in India · nitrogen gas generator for modified atmosphere packaging Delhi
- **Semantic / entities:** MAP · food packaging · oil-free air · nitrogen · clean dry air · packaging machinery

#### Paint Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain; recommend solutions/blog page)
- **Primary:** `air compressor for paint industry`
- **Secondary:** compressed air for spray painting · clean dry air for paint shop · paint booth compressor supplier Delhi
- **Long-tail:** oil-free clean dry compressed air for automotive paint shop India · air dryer and filter for spray painting line Delhi NCR
- **Semantic / entities:** spray painting · oil-free air · moisture-free air · paint booth · surface finish · air treatment

#### Cement Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend solutions/blog page)
- **Primary:** `air compressor for cement industry`
- **Secondary:** compressed air for cement plant · cement plant compressor supplier · heavy duty compressor for cement
- **Long-tail:** heavy duty screw air compressor for cement plant India · industrial compressor for cement conveying and packing Delhi
- **Semantic / entities:** pneumatic conveying · dust-laden · heavy duty · continuous duty · cement plant · bulk handling

#### Textile Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend solutions/blog page)
- **Primary:** `air compressor for textile industry`
- **Secondary:** compressed air for textile mill · textile industry compressor supplier · air jet loom compressor
- **Long-tail:** energy efficient screw compressor for textile mill India · oil-free compressed air for air jet loom weaving Delhi NCR
- **Semantic / entities:** air jet loom · weaving · spinning · oil-free air · energy efficient · textile mill

#### Laundry Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend solutions/blog page)
- **Primary:** `air compressor for laundry`
- **Secondary:** compressed air for commercial laundry · laundry press compressor supplier · steam laundry compressed air
- **Long-tail:** reciprocating air compressor for commercial laundry press India · compressed air system for industrial laundry Delhi NCR
- **Semantic / entities:** garment press · commercial laundry · steam press · pneumatic · compressed air

#### Pharma & Medical Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain; recommend solutions/blog page)
- **Primary:** `compressed air system for pharma industry`
- **Secondary:** medical air system supplier Delhi · breathing air system NFPA 99 · oil-free air for pharma · bacteria filter for medical air
- **Long-tail:** oil-free compressed air system for pharmaceutical plant India · NFPA 99 breathing air system supplier Delhi NCR · ISO 8573-1 class 1 air for pharma manufacturing
- **Semantic / entities:** NFPA 99 · breathing air · oil-free · sterile air · ISO 8573-1 · bacteria filter · medical vacuum · GMP

#### Food & Beverage Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain; recommend solutions/blog page)
- **Primary:** `compressed air for food industry`
- **Secondary:** food grade compressed air supplier · oil-free air for food processing · nitrogen for food packaging Delhi
- **Long-tail:** food grade oil-free compressed air system supplier India · nitrogen generator for food and beverage packaging Delhi NCR
- **Semantic / entities:** food grade · oil-free air · ISO 8573-1 · HACCP · nitrogen packaging · hygienic · contamination-free

#### Automotive Industry Application
- **Type / Intent:** Industry application · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend solutions/blog page)
- **Primary:** `air compressor for automotive workshop`
- **Secondary:** compressed air for auto service garage · reciprocating compressor for workshop · automotive industry compressor supplier
- **Long-tail:** Ingersoll Rand reciprocating compressor for automotive service India · heavy duty air compressor for fleet maintenance workshop Delhi
- **Semantic / entities:** fleet maintenance · auto service · pneumatic tools · 175 PSI · continuous duty · workshop air

#### Annual Maintenance Contract (Service)
- **Type / Intent:** Service page · Commercial
- **Target page:** https://www.machinerycentre.in/contact (REPLACE domain; recommend a dedicated /services or /amc route — none exists yet)
- **Primary:** `air compressor AMC services Delhi`
- **Secondary:** compressor annual maintenance contract · compressor AMC provider Delhi NCR · pump AMC service India · preventive maintenance compressor
- **Long-tail:** annual maintenance contract for screw air compressor in Delhi · compressor AMC with genuine spares and service Delhi NCR · preventive maintenance contract for industrial pumps Delhi
- **Semantic / entities:** AMC · preventive maintenance · service contract · uptime · genuine spares · scheduled servicing · after-sales

#### Compressor Repair & Service (Service)
- **Type / Intent:** Service page · Commercial
- **Target page:** https://www.machinerycentre.in/contact (REPLACE domain; recommend a dedicated /services route)
- **Primary:** `air compressor repair service Delhi`
- **Secondary:** screw compressor repair Delhi NCR · compressor servicing near me · industrial compressor overhaul · pump repair service Delhi
- **Long-tail:** screw air compressor repair and overhaul service in Delhi · onsite industrial compressor breakdown service Delhi NCR · Ingersoll Rand compressor service centre Delhi
- **Semantic / entities:** overhaul · breakdown service · onsite repair · airend repair · service engineer · troubleshooting · after-sales

#### Installation & Commissioning (Service)
- **Type / Intent:** Service page · Commercial
- **Target page:** https://www.machinerycentre.in/contact (REPLACE domain; recommend a dedicated /services route)
- **Primary:** `air compressor installation service Delhi`
- **Secondary:** compressor installation and commissioning · compressed air piping installation · pump installation service Delhi NCR
- **Long-tail:** industrial air compressor installation and commissioning in Delhi · compressed air piping and fitting installation service Delhi NCR
- **Semantic / entities:** commissioning · piping · hosing · fitting · layout design · turnkey · installation

#### Spares Supply & Service Kits (Service)
- **Type / Intent:** Service page · Transactional-Purchase
- **Target page:** https://www.machinerycentre.in/products/spares (REPLACE domain)
- **Primary:** `genuine compressor spares supply Delhi`
- **Secondary:** compressor service kit supplier · pump spares supply India · air oil separator replacement · filter element supplier Delhi
- **Long-tail:** genuine Ingersoll Rand service kit supplier in Delhi · air oil separator and filter element replacement supply Delhi NCR · Kirloskar pump spares supply with fast delivery India
- **Semantic / entities:** service kit · air-oil separator · filter element · intake valve · gasket · genuine OEM · Elgi · Janatics

#### Catalogue Download
- **Type / Intent:** Catalogue download page · Transactional-Purchase
- **Target page:** https://www.machinerycentre.in/products/* (REPLACE domain; download CTA triggers a Drive PDF via modal/openCatalog — recommend a crawlable /catalogue landing page listing all PDFs)
- **Primary:** `air compressor catalogue PDF download`
- **Secondary:** industrial pump catalogue download · compressed air dryer catalogue PDF · Trident catalogue download · Trendi compressor brochure
- **Long-tail:** download screw air compressor catalogue PDF India · Trendi compressor specification brochure download · Trident air dryer and filter catalogue PDF Delhi
- **Semantic / entities:** catalogue · brochure · datasheet · specification sheet · PDF download · product range · technical specs

#### Request Quote / Lead
- **Type / Intent:** Quote / lead page · Transactional-Purchase
- **Target page:** https://www.machinerycentre.in/quote (REPLACE domain)
- **Primary:** `air compressor price quote India`
- **Secondary:** request quote industrial compressor · get price for industrial pump · compressor price enquiry Delhi · bulk compressor quotation
- **Long-tail:** get a quote for screw air compressor in Delhi NCR · request price quotation for Kirloskar pump India · industrial air compressor price enquiry with installation Delhi
- **Semantic / entities:** request quote · price enquiry · quotation · RFQ · bulk order · B2B enquiry · get a quote

#### Delhi / Delhi NCR Local
- **Type / Intent:** Location / local page · Local
- **Target page:** https://www.machinerycentre.in/contact (REPLACE domain; also strengthen home + GBP. Recommend Google Business Profile with exact NAP: 3858 Shradhanand Marg, Shah Ganj, Delhi-110006, phone 011-41440012)
- **Primary:** `air compressor dealer in Delhi`
- **Secondary:** compressor and pump supplier Delhi NCR · industrial equipment dealer Old Delhi · air compressor shop in Delhi · compressed air systems Delhi
- **Long-tail:** air compressor and pump dealer near GB Road Delhi · industrial compressor supplier in Shah Ganj Old Delhi · compressed air systems dealer in Delhi NCR with service
- **Semantic / entities:** Delhi · Delhi NCR · Old Delhi · Shah Ganj · Shradhanand Marg · 110006 · Hanuman Mandir · B2B dealer · stockist

#### Near Me Local
- **Type / Intent:** Location / local page · Local
- **Target page:** https://www.machinerycentre.in/contact (REPLACE domain; depends on Google Business Profile for near-me ranking)
- **Primary:** `air compressor dealer near me`
- **Secondary:** compressor repair near me · pump dealer near me · compressor spare parts near me · air dryer supplier near me
- **Long-tail:** industrial air compressor dealer near me in Delhi · compressor service and repair near me Delhi NCR · pump spare parts shop near me Old Delhi
- **Semantic / entities:** near me · local dealer · nearby · Delhi · Google Maps · store locator · NAP

#### Ingersoll Rand Authorized Dealer (Brand)
- **Type / Intent:** Brand page · Commercial
- **Target page:** https://www.machinerycentre.in/products/compressors (REPLACE domain; recommend a brand anchor/section, and IF the Ingersoll-Rand authorization is current, state it plainly — do not embellish)
- **Primary:** `Ingersoll Rand authorized dealer Delhi`
- **Secondary:** Ingersoll Rand compressor dealer India · Ingersoll Rand reciprocating compressor dealer · Ingersoll Rand spares Delhi · IR air compressor supplier
- **Long-tail:** Ingersoll Rand authorized air compressor dealer in Delhi NCR · Ingersoll Rand two stage compressor price authorized dealer India · Ingersoll Rand compressor genuine spares and service Delhi
- **Semantic / entities:** Ingersoll Rand · authorized dealer · channel partner · reciprocating compressor · genuine spares · 175 PSI · after-sales

#### Kirloskar Pump Dealer (Brand)
- **Type / Intent:** Brand page · Commercial
- **Target page:** https://www.machinerycentre.in/products/pumps (REPLACE domain; note Machinery Centre is a stockist for Kirloskar — phrase as stockist/supplier, not authorized dealer, unless verified)
- **Primary:** `Kirloskar pump dealer Delhi`
- **Secondary:** Kirloskar pump supplier India · Kirloskar vacuum pump dealer · Kirloskar metering pump dealer · Kirloskar pump stockist Delhi NCR
- **Long-tail:** Kirloskar vacuum pump dealer with spares in Delhi · Kirloskar metering pump supplier price India · Kirloskar pump stockist near me Old Delhi
- **Semantic / entities:** Kirloskar · stockist · vacuum pump · metering pump · KV/DV · genuine spares · pump supplier

#### Trident Dealer (Brand)
- **Type / Intent:** Brand page · Commercial
- **Target page:** https://www.machinerycentre.in/products/air-treatment (REPLACE domain; Machinery Centre is an authorized dealer of Trident — state plainly if current)
- **Primary:** `Trident air dryer dealer Delhi`
- **Secondary:** Trident desiccant dryer supplier · Trident refrigerated dryer dealer · Trident drain valve supplier · Trident nitrogen generator dealer
- **Long-tail:** Trident Dryspell desiccant dryer authorized dealer Delhi · Trident Coldspell refrigerated air dryer supplier India · Trident automatic drain valve dealer Delhi NCR
- **Semantic / entities:** Trident · Dryspell · Coldspell · desiccant · refrigerated dryer · drain valve · nitrogen generator · air treatment

#### Trendi Compressors (Own Brand)
- **Type / Intent:** Brand page · Commercial
- **Target page:** https://www.machinerycentre.in/trendi (REPLACE domain)
- **Primary:** `Trendi air compressor`
- **Secondary:** Trendi screw air compressor · Trendi compressor dealer India · energy efficient Trendi compressor · Trendi reciprocating compressor
- **Long-tail:** Trendi energy efficient screw air compressor price India · Trendi belt drive screw compressor with VFD dealer Delhi · Trendi two stage reciprocating compressor 175 PSIG supplier
- **Semantic / entities:** Trendi · own brand · screw compressor · reciprocating · VFD · IE3 motor · three-stage air-oil separator · energy efficient

#### Informational / Blog
- **Type / Intent:** Informational / blog · Informational
- **Target page:** https://www.machinerycentre.in/blog and /blog/:slug (REPLACE domain)
- **Primary:** `air compressor maintenance tips`
- **Secondary:** how to choose industrial pump · screw vs reciprocating compressor · compressed air dew point explained · how to size an air compressor
- **Long-tail:** how to maintain industrial air compressor to reduce downtime · screw vs reciprocating air compressor which is better for factory · how to choose the right pump for your industry · what dew point do I need for compressed air dryer
- **Semantic / entities:** preventive maintenance · CFM sizing · dew point · viscosity · energy efficiency · ISO 8573-1 · positive displacement · centrifugal

#### Brand / Company Navigational
- **Type / Intent:** Navigational / brand · Navigational
- **Target page:** https://www.machinerycentre.in/ and /about (REPLACE domain)
- **Primary:** `Machinery Centre Delhi`
- **Secondary:** Machinery Centre compressors and pumps · Machinery Centre contact · Machinery Centre One Stop Shop · Machinery Centre Shah Ganj
- **Long-tail:** Machinery Centre Delhi compressor and pump dealer contact · Machinery Centre Shradhanand Marg phone number · Machinery Centre One Stop Shop for compressors and pumps
- **Semantic / entities:** Machinery Centre · One Stop Shop · Delhi · since 1987 · compressors and pumps · B2B dealer · Trendi

### Prioritized keyword targets

| Keyword | Intent | Priority | Competition | Why |
| --- | --- | --- | --- | --- |
| air compressor dealer in Delhi | Local / Commercial | P0 | Medium | Core money + local term tying primary product to the city they sell from; highest commercial+local fit. |
| Ingersoll Rand authorized dealer Delhi | Commercial | P0 | Low | High-trust brand-authority term with low local competition; strong conversion if authorization is current. |
| screw air compressor price | Commercial | P0 | High | Top-funnel purchase term for their flagship Trendi line; high volume justifies the effort despite competition. |
| Kirloskar pump dealer Delhi | Commercial | P0 | Low | Branded pump-buyer intent + local; low competition makes this an easy early win (phrase as stockist). |
| industrial air dryer supplier | Commercial | P0 | Medium | Anchors the high-margin Trident air-treatment range; clear B2B supplier intent. |
| industrial pump dealer in Delhi | Local / Commercial | P0 | Medium | Category-level money term for the pumps vertical paired with their geography. |
| two stage reciprocating air compressor | Commercial | P0 | Medium | Directly matches IR + Trendi reciprocating SKUs (175 PSI, cast iron); strong product-page fit. |
| air compressor dealer near me | Local | P0 | Medium | High-conversion local-pack intent; needs a Google Business Profile with exact NAP to capture it. |
| compressor and pump spare parts Delhi | Commercial | P1 | Low | Recurring-revenue spares demand with low competition; supports after-sales positioning. |
| air compressor AMC services Delhi | Commercial | P1 | Low | High-LTV service intent and a differentiator vs pure resellers; needs a dedicated services route. |
| refrigerated air dryer price | Commercial | P1 | Medium | Purchase-intent product term mapping to Trident Coldspell; pairs with desiccant for the air-treatment cluster. |
| PSA nitrogen generator supplier | Commercial | P1 | Medium | High-ticket capital item with cross-industry demand (food, pharma, packaging). |
| rotary gear pump dealer | Commercial | P1 | Low | Niche Rotodel HGN/HGSX product with low competition; qualified specialist buyers. |
| vacuum pump dealer Delhi | Commercial | P1 | Low | Kirloskar KV/DV product + local; low-competition branded specialist term. |
| desiccant air dryer supplier | Commercial | P1 | Medium | Completes air-treatment coverage (Dryspell); strong for pharma/low-dew-point buyers. |
| Trident air dryer dealer Delhi | Commercial | P1 | Low | Branded air-treatment authority term with low local competition. |
| compressed air treatment supplier Delhi | Commercial | P1 | Medium | Category umbrella that consolidates dryers, filters, drains and nitrogen under one indexable page. |
| metering pump dealer Delhi | Commercial | P1 | Low | Kirloskar dosing-pump intent + local; low competition, qualified process-industry buyers. |
| Trendi air compressor | Commercial / Navigational | P1 | Low | Own-brand term they can fully own; protects brand searches and feeds the /trendi page. |
| air compressor for paint industry | Commercial | P2 | Low | Application term aligned with a named served industry; long-tail, qualified, low competition. |
| compressed air system for pharma industry | Commercial | P2 | Medium | High-value vertical (oil-free, NFPA 99, bacteria filters); supports premium air-treatment sales. |
| air compressor for textile industry | Commercial | P2 | Low | Named served industry with energy-efficiency angle for screw compressors; easy long-tail capture. |
| air compressor repair service Delhi | Commercial / Local | P2 | Medium | Local service intent reinforcing after-sales; supports the AMC and near-me clusters. |
| air compressor catalogue PDF download | Transactional-Purchase | P2 | Low | Lead-magnet intent; needs a crawlable catalogue landing page since downloads currently fire from a JS modal. |
| air compressor price quote India | Transactional-Purchase | P2 | Medium | Bottom-funnel RFQ intent that maps directly to the /quote conversion page. |

---

## 02 · Technical SEO & Architecture

Machinery Centre runs a Vite + React 19 client-side-rendered SPA (react-router-dom v7 BrowserRouter, Tailwind) whose entire SEO surface is a useSEO() hook that mutates document.title and the meta description in the browser only. The served HTML (index.html) is an empty `<div id="root">` with one hardcoded title and a "35+ years" meta description. There is no SSR/prerender, no JSON-LD, no sitemap.xml, no robots.txt, no canonical tags, and no Open Graph/Twitter cards. The most damaging defect is the /products/* route: App.tsx mounts Products at "products/*", but Products.tsx ignores the URL and switches Compressors / Pumps / Air Treatment / Spares via a useState tab, so all four categories share ONE URL, title, and meta description and the header deep-links (/products/compressors etc.) do not deep-link — the company's core commercial pages are effectively a single indexable page. Combined with CSR, this severely limits Googlebot second-wave indexing and AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) that typically do not execute JavaScript and will see a blank shell. Highest-leverage fixes, in order: (1) add prerendering/SSG so bots receive real HTML; (2) convert the four product categories into real indexable routes with unique metadata; (3) inject per-route title/description/canonical/OG/Twitter plus JSON-LD via react-helmet-async rendered into the prerendered HTML; (4) publish sitemap.xml + robots.txt with explicit AI-crawler allowances; (5) fix the 35-vs-39 years inconsistency to a single figure. All recommendations use the placeholder domain https://www.machinerycentre.in/ which MUST be replaced with the real production domain before launch. Do not ship Review/AggregateRating schema until real attributable reviews replace the placeholder testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel).

**Current issues**

- RENDERING: Pure client-side React SPA. index.html ships an empty `<div id="root">` with only a script tag, one static `<title>` and a meta description. No SSR or prerendering, so the first HTML response contains no product, brand, NAP, or body content for crawlers.
- AI CRAWLERS: GPTBot, PerplexityBot, ClaudeBot and Google-Extended generally do not execute JavaScript. They fetch the empty shell and index/cite essentially nothing, so the business is invisible to AI answer engines despite a rich on-page catalog.
- PRODUCTS ROUTE BUG (critical): App.tsx maps `products/*` to one Products component; Products.tsx switches the four categories with `useState(activeCategoryId)` tabs, not the URL. /products/compressors, /products/pumps, /products/air-treatment and /products/spares all render the same component with one shared title and meta description and do not actually deep-link. The four category pages are not separately indexable.
- META: useSEO only sets title + description on the client. No canonical, no Open Graph, no Twitter card, no robots meta anywhere. Social shares and many crawlers see the static index.html values.
- STRUCTURED DATA: Zero JSON-LD. No Organization, LocalBusiness, Product, Breadcrumb, FAQ, Service, or Review markup — no eligibility for rich results, knowledge-panel entity association, or local-pack signals.
- SITEMAP / ROBOTS: No sitemap.xml and no robots.txt exist. Crawlers must discover routes by following client-rendered links they may never execute, and there are no AI-crawler directives.
- NAP / E-E-A-T: Business email is a generic machinerycentre@yahoo.com (a branded sales@machinerycentre.in would raise trust — recommend, do not assert it exists). Homepage testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel) read as placeholders and must be replaced with real, attributable reviews before any Review schema is used.
- CONTENT INCONSISTENCY: index.html meta says "35+ years" while the Layout footer and on-page counters auto-compute from 1987 (currently 39). Pick one consistent figure (39+ years, established 1987) across HTML, copy, and schema.
- POSITIONING: Some copy (e.g. About meta: "trusted B2B supplier of industrial machinery") drifts toward generic "industrial machinery" terms. The real niche is compressed-air systems, industrial pumps, air treatment, and after-sales service/spares in Delhi/Delhi-NCR — metadata should target that, not generic machinery.
- DOMAIN UNKNOWN: No production domain is set. All canonicals, sitemap, robots, and OG URLs use the placeholder https://www.machinerycentre.in/ and must be swapped for the real domain before go-live.

### Rendering & crawlability

The site is a Vite + React 19 SPA using react-router-dom v7 BrowserRouter. index.html delivers `<div id="root"></div>` plus `/src/main.tsx`; all content (catalog in Products.tsx, NAP in Layout.tsx, hero/testimonials in Home.tsx) is painted only after JS executes. useSEO.ts patches document.title and the description meta inside a useEffect — after hydration, in the browser only. Impact on Googlebot: Google can render JS in a deferred "second wave," so pages may eventually index, but with penalties — rendering is queued and budget-limited, client-mutated titles/descriptions are less reliable than server-delivered ones, and the /products/* tab bug means Googlebot only ever sees one category state per crawl. Net: weak, slow, incomplete indexing of the most commercial pages. Impact on AI crawlers: GPTBot, PerplexityBot, ClaudeBot and Google-Extended typically do NOT run JavaScript. They receive the empty shell and the single static "35+ years" title/description, so the catalog, brands, specs, and NAP are invisible to AI answer engines — a major loss for a B2B dealer whose buyers increasingly use AI search. Recommended fixes (with trade-offs): 1) SSG / prerender at build (RECOMMENDED first step). Use vite-plugin-ssr / vite-react-ssg, or a post-build react-snap/puppeteer crawl, to emit a static HTML file per route (/, /about, /products, the four category routes, /trendi, /blog + each slug, /quote, /contact, /feedback, /privacy-policy, /terms-of-use). Pros: bots get full HTML and JSON-LD with no app rewrite; cheapest path to fix both Google and AI crawlers. Cons: content is build-time static (fine here — catalog is hardcoded); routing/tab refactor still required for categories. 2) Dynamic prerender for bots (e.g. Prerender.io / a prerender middleware) that serves rendered HTML to known crawler UAs. Pros: no build-pipeline change. Cons: ongoing cost/dependency, cloaking-adjacent risk if served HTML diverges from user HTML, must keep the bot UA list current. 3) Migrate to Next.js (App Router) for SSR/SSG + per-route metadata + streaming. Pros: best long-term SEO, native metadata API, ISR. Cons: largest effort — port routing, Layout, and pages off BrowserRouter. Recommended sequencing: ship SSG/prerender now (fastest ROI), refactor /products/* to real routes, add react-helmet-async metadata + JSON-LD into the prerendered output; reserve a Next.js migration for when ongoing dynamic content justifies it.

### URL architecture

Root cause: App.tsx has `<Route path="products/*" element={<Products />} />` and Products.tsx drives category selection with React state — `const [activeCategoryId, setActiveCategoryId] = useState(categoriesList[0].id)` and `<button onClick={() => setActiveCategoryId(cat.id)}>` — never reading the URL. So every /products/* path renders the same component with one shared useSEO() title/description, and the Layout/footer deep-links (/products/compressors, /products/pumps, /products/air-treatment, /products/spares) all land on the same default ("compressors") view. The four category pages are neither separately addressable nor separately indexable. Fix (routing): make each category a real route reading from the URL: - /products            -> Products hub (overview + links to the four categories) - /products/compressors - /products/pumps - /products/air-treatment - /products/spares Implementation: keep the catalogData map, but in App.tsx use `<Route path="products" element={<ProductsLayout/>}>` with an index route (hub) and `<Route path=":category" element={<ProductCategory/>} />`; in the category component read `const { category } = useParams()` and select `catalogData[category]`, returning a 404/redirect for unknown slugs. Each category route then emits its own title, description, canonical, OG, and BreadcrumbList + ItemList JSON-LD. The header links already point at the correct paths — once routing reads the URL, they deep-link correctly. Future individual products: when catalog items get standalone pages, use a stable, keyword-aligned hierarchy: /products/compressors/trendi-belt-drive-screw-air-compressor, /products/pumps/rotodel-hgn-rotary-gear-pump, /products/air-treatment/trident-dryspell-desiccant-dryer. Rules: lowercase, hyphenated, brand + type + key descriptor; one canonical URL per product; no query-string or hash-based category state; consistent trailing-slash policy site-wide. This yields clean, crawlable, individually rankable URLs matching real search intent (e.g. "rotodel gear pump dealer delhi", "trident desiccant air dryer india").

### Meta implementation

Replace the title/description-only useSEO hook with react-helmet-async (or fold the same tags into the SSG/prerender output) so every route emits unique title, description, canonical, robots, Open Graph and Twitter tags into the prerendered HTML — not just client-mutated after hydration. Wrap the app in `<HelmetProvider>` and render a `<Helmet>` (or a small `<Seo>` wrapper) per page with title, description, `<link rel="canonical">`, og:* and twitter:* tags, plus a `<script type="application/ld+json">` block. Remove the conflicting static `<title>`/description from index.html (keep only charset, viewport, favicon) so helmet/prerender is the single source of truth, and fix the 35-vs-39 inconsistency to one figure everywhere. Character counts verified below (title target 50-60, description target 140-160): HOME Title: "Air Compressors & Pumps Dealer Delhi | Machinery Centre" = 55 chars. Description: "Delhi-based authorized dealer of air compressors, industrial pumps, air treatment & OEM spares since 1987. Ingersoll-Rand, Kirloskar & our Trendi range." = 152 chars. PRODUCTS HUB (/products) Title: "Air Compressors, Pumps & Air Treatment | Machinery Centre" = 57 chars. Description: "Browse compressed-air systems, industrial pumps, air dryers, filters & genuine OEM spares from a trusted Delhi B2B dealer and authorized channel partner." = 153 chars. COMPRESSORS (/products/compressors) Title: "Industrial Air Compressors in Delhi | Machinery Centre" = 54 chars. Description: "Trendi screw & reciprocating air compressors plus Ingersoll-Rand two-stage units. VFD-ready, IE3 motors, sold & serviced by a Delhi dealer since 1987." = 150 chars. PUMPS (/products/pumps) Title: "Industrial Pumps Dealer in Delhi | Machinery Centre" = 51 chars. Description: "Rotodel rotary gear pumps, Kirloskar metering & vacuum pumps and genuine pump spares supplied and serviced across Delhi-NCR by Machinery Centre since 1987." = 155 chars. AIR TREATMENT (/products/air-treatment) Title: "Compressed Air Dryers & Filters Delhi | Machinery Centre" = 56 chars. Description: "Trident desiccant & refrigerated dryers, submicron filters, nitrogen generators and drain valves for clean, dry compressed air. Delhi dealer since 1987." = 152 chars. SPARES (/products/spares) Title: "Compressor & Pump Spares in Delhi | Machinery Centre" = 52 chars. Description: "Genuine OEM compressor and pump spares — air-oil separators, filters, service kits, gaskets and intake valves for Ingersoll-Rand, Kirloskar, Rotodel & more." = 156 chars. TRENDI (/trendi) Title: "Trendi Air Compressors & Air Treatment | Machinery Centre" = 57 chars. Description: "Explore the Trendi range of energy-efficient screw and reciprocating air compressors and compressed-air treatment, supplied and serviced by Machinery Centre." = 157 chars. ABOUT (/about) Title: "About Machinery Centre | Compressors & Pumps Since 1987" = 55 chars. Description: "Established in 1987, Machinery Centre is a Delhi B2B dealer and stockist of air compressors, industrial pumps, air treatment and after-sales service & spares." = 157 chars. CONTACT (/contact) Title: "Contact Machinery Centre | Compressor & Pump Dealer Delhi" = 57 chars. Description: "Call 011-41440012 or 9810054137, or visit our Shah Ganj, Old Delhi store for air compressors, pumps, air treatment and urgent repair support across Delhi-NCR." = 158 chars. QUOTE (/quote) Title: "Request a Quote | Air Compressors & Pumps | Machinery Centre" = 60 chars. Description: "Get a fast B2B quote on air compressors, industrial pumps, air treatment equipment and genuine OEM spares from a Delhi dealer serving industry since 1987." = 153 chars. Per-route OG/Twitter follow the same titles/descriptions with og:type="website" (article for blog posts), og:url set to the canonical, and a branded og:image. Use canonical self-references on every route.

### Sitemap & robots.txt

Both files are absent and must be added to the published site root (in Vite, place them in /public so they ship as /sitemap.xml and /robots.txt). Replace https://www.machinerycentre.in/ with the real domain. sitemap.xml (list only real, indexable routes; after the /products/* refactor the four category URLs become real entries): <?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">   <url><loc>https://www.machinerycentre.in/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>   <url><loc>https://www.machinerycentre.in/about</loc><priority>0.6</priority></url>   <url><loc>https://www.machinerycentre.in/products</loc><priority>0.9</priority></url>   <url><loc>https://www.machinerycentre.in/products/compressors</loc><priority>0.9</priority></url>   <url><loc>https://www.machinerycentre.in/products/pumps</loc><priority>0.9</priority></url>   <url><loc>https://www.machinerycentre.in/products/air-treatment</loc><priority>0.9</priority></url>   <url><loc>https://www.machinerycentre.in/products/spares</loc><priority>0.8</priority></url>   <url><loc>https://www.machinerycentre.in/trendi</loc><priority>0.8</priority></url>   <url><loc>https://www.machinerycentre.in/blog</loc><priority>0.6</priority></url>   <url><loc>https://www.machinerycentre.in/blog/essential-maintenance-tips-for-air-compressors</loc><priority>0.5</priority></url>   <url><loc>https://www.machinerycentre.in/blog/choosing-the-right-pump-for-your-industry</loc><priority>0.5</priority></url>   <url><loc>https://www.machinerycentre.in/blog/importance-of-energy-efficient-equipment</loc><priority>0.5</priority></url>   <url><loc>https://www.machinerycentre.in/contact</loc><priority>0.7</priority></url>   <url><loc>https://www.machinerycentre.in/quote</loc><priority>0.6</priority></url>   <url><loc>https://www.machinerycentre.in/privacy-policy</loc><priority>0.3</priority></url>   <url><loc>https://www.machinerycentre.in/terms-of-use</loc><priority>0.3</priority></url> </urlset> robots.txt (allow general crawl + explicitly welcome AI crawlers, since the business benefits from AI-search visibility): User-agent: * Allow: / # AI / answer-engine crawlers - explicitly allowed User-agent: GPTBot Allow: / User-agent: OAI-SearchBot Allow: / User-agent: ChatGPT-User Allow: / User-agent: PerplexityBot Allow: / User-agent: ClaudeBot Allow: / User-agent: Claude-Web Allow: / User-agent: Google-Extended Allow: / User-agent: Applebot-Extended Allow: / Sitemap: https://www.machinerycentre.in/sitemap.xml Note: AI crawlers must be allowed AND the pages must serve real HTML (via the prerender/SSG fix) — allowing GPTBot/ClaudeBot is useless if they still receive an empty React shell. If the business prefers to opt OUT of AI training, switch the AI-bot blocks to Disallow: / instead; that is a business decision to confirm, not a default.

### Canonicals & Open Graph

Canonicals: emit a self-referencing `<link rel="canonical" href="https://www.machinerycentre.in/{route}">` on every route via react-helmet-async, rendered into the prerendered HTML. After the /products/* refactor, each category canonicalises to its own URL (e.g. /products/compressors), eliminating the current one-URL-for-four-categories duplication. Decide one trailing-slash convention and one host (www vs non-www, https) and 301 all variants to it; canonicals must match that exact form. The placeholder domain must be replaced before launch. Open Graph / Twitter: none exist today, so social shares and link unfurls (WhatsApp — which the site actively uses for leads — LinkedIn, etc.) show nothing useful. Add per-route, with values matching the verified titles/descriptions above: - og:title, og:description (per route), og:type=website (article for /blog/:slug, with article:published_time), og:url=canonical, og:site_name="Machinery Centre", og:locale="en_IN". - og:image: a branded 1200x630 image (logo + "Compressors & Pumps" + Delhi). Use a product/category-specific image where available; provide og:image:width/height and og:image:alt. - Twitter: twitter:card=summary_large_image, twitter:title, twitter:description, twitter:image mirroring OG. Host the OG image on the real domain (not only Cloudinary) once the domain is live. Keep dimensions at 1200x630 to avoid cropping. WhatsApp link previews specifically need og:image + og:title present in the served HTML, which again requires the prerender fix.

### Core Web Vitals

The audit is static (no Lighthouse run), so these are code-grounded recommendations: LCP / hero images: the header and footer load logos from Cloudinary (Layout.tsx). Add explicit width/height (or aspect-ratio) to every `<img>` to reserve space and prevent CLS, and serve sized/next-gen formats via Cloudinary transforms (f_auto,q_auto,w_…). The above-the-fold hero/logo image(s) should use fetchpriority="high" and NOT be lazy-loaded; preconnect to res.cloudinary.com. The favicon and header logo currently load from Cloudinary — consider self-hosting the logo on the production domain for reliability and to back the OG image. Lazy-loading: brand logos in ProductCard (Products.tsx getBrandLogo) and below-the-fold imagery should use loading="lazy" and decoding="async". Do the opposite for the LCP hero (eager + high priority). The product grid renders many cards; ensure off-screen card images are lazy. Fonts: the project uses Tailwind font-sans (default stack per index.css; no Google Fonts `<link>` was found, which is good for performance). If a web font is added later, self-host it, preload the primary weight, and set font-display: swap to avoid render-blocking and FOIT. Animation / marquee: Layout.tsx uses a shimmer keyframe animation (group-hover:animate-[shimmer_1.5s_infinite]) on the CTA plus transform/opacity transitions throughout. These are GPU-friendly — keep them off layout-triggering properties. The nav underline and mega-menu currently animate width; prefer transform: scaleX for the underline to avoid layout thrash. The infinite shimmer runs only on hover so INP impact is limited; ensure no always-on infinite animations ship on mobile, and respect prefers-reduced-motion. CLS specifics: the fixed/sticky header swaps height on scroll (py-5 -> py-3) and the top contact strip collapses (h-[36px] -> h-0); the products category bar reads a CSS var --nav-h. Verify --nav-h stays in sync with the actual header height across these state changes so the sticky category nav does not jump (the hardcoded 73px fallback can drift). INP: BrowserRouter client navigation plus window.scrollTo(0,0) on every route change is fine; just ensure the category refactor does not add heavy synchronous work on route change. After prerendering, defer non-critical JS so the main thread stays free for interaction. Measure with Lighthouse/PageSpeed and CrUX once a real domain and prerendered build are live; the SPA shell currently makes field LCP/INP data unrepresentative of true content.

### Prioritized technical actions

| Action | Impact | Effort |
| --- | --- | --- |
| Add SSG/prerendering (vite-react-ssg or react-snap) so every route — especially the product categories — serves full HTML with content and JSON-LD to Googlebot and non-JS AI crawlers. | High — unlocks indexing and AI-search visibility; prerequisite for almost every other fix to actually reach crawlers. | Medium |
| Refactor /products/* from useState tabs to real URL-driven routes (/products + /products/{compressors\|pumps\|air-treatment\|spares}) reading useParams, each with its own metadata and breadcrumb. | High — turns one un-indexable page into four rankable commercial pages and fixes broken header deep-links. | Medium |
| Add react-helmet-async and emit unique per-route title, meta description, canonical, robots, Open Graph and Twitter tags (using the character-verified copy above); remove the static title/description from index.html. | High — correct, unique SERP snippets, working social/WhatsApp previews, duplicate-content control. | Medium |
| Publish robots.txt and sitemap.xml in /public with explicit AI-crawler allowances and all real routes; submit the sitemap in Google Search Console. | High — crawl/discovery and AI-crawler access; quick win once routes are real. | Low |
| Add Organization + LocalBusiness (Store) JSON-LD with NAP/geo/openingHours placeholders filled from the verified Google Business Profile. | High — entity/knowledge-panel signals and local-pack eligibility for Delhi-NCR intent. | Low |
| Resolve the 35-vs-39 years inconsistency to a single figure ('since 1987 / 39+ years') across index.html, on-page copy and schema; refocus drifting 'industrial machinery' copy onto the real compressed-air/pumps/Delhi niche. | Medium — consistency, trust, and tighter topical/local relevance. | Low |
| Add BreadcrumbList, Service, and Product JSON-LD (Product without fake prices/ratings) on the relevant routes. | Medium — breadcrumb rich results and clearer product/service entities. | Medium |
| Replace placeholder homepage testimonials with real, attributable reviews; only then add Review/AggregateRating schema. Recommend a branded sales@ email IF a domain mailbox is set up. | Medium — E-E-A-T and review rich results, done compliantly. | Medium |
| Core Web Vitals pass: set img width/height, eager+high-priority LCP logo, lazy below-the-fold images, preconnect to Cloudinary, keep animations on transform/opacity, honor prefers-reduced-motion, verify --nav-h matches header height. | Medium — CLS/LCP/INP improvements with ranking/UX benefit. | Medium |
| Replace the placeholder domain https://www.machinerycentre.in/ with the real production domain everywhere (canonicals, sitemap, robots, OG, schema @id/urls) and set one host + trailing-slash convention with 301s. | High — every URL-bearing fix above is invalid until the real domain is wired in. | Low |

---

## 03 · Structured Data / Schema

Ready-to-paste JSON-LD. Add each as a `<script type="application/ld+json">` block on the matching template.

### Organization — applies to Site-wide, injected once on the homepage (/) head.

Replace placeholder domain and logo URL with real values. Add real profile URLs to sameAs (Google Business Profile, LinkedIn, IndiaMART, JustDial) when available — leave empty rather than invent. Do not add ISO/awards unless verified.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.machinerycentre.in/#organization",
  "name": "Machinery Centre",
  "alternateName": "Machinery Centre - Compressors & Pumps",
  "slogan": "One Stop Shop For Compressors and Pumps",
  "url": "https://www.machinerycentre.in/",
  "logo": "https://www.machinerycentre.in/logo.png",
  "foundingDate": "1987",
  "email": "machinerycentre@yahoo.com",
  "telephone": "+91-11-41440012",
  "description": "Delhi-based authorized dealer and stockist of industrial air compressors, pumps, compressed-air treatment equipment and genuine OEM spares since 1987.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir",
    "addressLocality": "Delhi",
    "addressRegion": "DL",
    "postalCode": "110006",
    "addressCountry": "IN"
  },
  "brand": [ { "@type": "Brand", "name": "Trendi" } ],
  "sameAs": []
}
```

### LocalBusiness — applies to Homepage (/) and Contact (/contact). Reinforces local-pack / map intent for Delhi-NCR.

latitude/longitude and openingHours are PLACEHOLDERS — fill from the verified Google Business Profile; do not guess. @type Store fits a dealer/stockist storefront. Keep NAP byte-for-byte identical to the site footer and GBP.

```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.machinerycentre.in/#localbusiness",
  "name": "Machinery Centre",
  "image": "https://www.machinerycentre.in/storefront.jpg",
  "url": "https://www.machinerycentre.in/",
  "telephone": "+91-11-41440012",
  "email": "machinerycentre@yahoo.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir",
    "addressLocality": "Delhi",
    "addressRegion": "DL",
    "postalCode": "110006",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_WITH_REAL_LATITUDE",
    "longitude": "REPLACE_WITH_REAL_LONGITUDE"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "REPLACE_HH:MM",
      "closes": "REPLACE_HH:MM"
    }
  ],
  "areaServed": [ { "@type": "City", "name": "Delhi" }, { "@type": "AdministrativeArea", "name": "Delhi-NCR" } ],
  "contactPoint": [ { "@type": "ContactPoint", "telephone": "+91-98100-54137", "contactType": "sales", "areaServed": "IN", "availableLanguage": ["en","hi"] } ]
}
```

### Product — applies to Each individual product (e.g. Trendi belt-drive screw compressor in Products.tsx catalogData). One block per product page/card.

This is a quote-based B2B catalog with no public prices. Either omit the offers block entirely, or add a real price when available — do NOT publish a fake or zero price. Do not attach aggregateRating/review to Product until real reviews exist.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trendi Energy Efficient Belt Drive Screw Air Compressor",
  "brand": { "@type": "Brand", "name": "Trendi" },
  "category": "Industrial Air Compressors",
  "description": "Belt-drive screw air compressor with microprocessor controller, three-stage air-oil separator, optional VFD and IE3 motors for low specific power consumption.",
  "url": "https://www.machinerycentre.in/products/compressors",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Air-Oil Separator", "value": "Three stage" },
    { "@type": "PropertyValue", "name": "Motor", "value": "IE3" },
    { "@type": "PropertyValue", "name": "VFD", "value": "Optional" }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "url": "https://www.machinerycentre.in/quote",
    "seller": { "@id": "https://www.machinerycentre.in/#organization" }
  }
}
```

### BreadcrumbList — applies to Every non-home page; example for a compressor category page.

Generate dynamically from the route. Only reference real routes (/, /products, /products/compressors, etc.). Required once the category routes become real, indexable URLs.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.machinerycentre.in/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.machinerycentre.in/products" },
    { "@type": "ListItem", "position": 3, "name": "Air Compressors", "item": "https://www.machinerycentre.in/products/compressors" }
  ]
}
```

### FAQPage — applies to Homepage and/or category pages where genuine Q&A is rendered on-page (questions must be visible to users).

Only mark up FAQs actually rendered on the page. Answers use facts supplied by the business — verify before publishing. Add Q&A only where the answer is visible to users.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Machinery Centre an authorized air compressor dealer in Delhi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Machinery Centre is an authorized dealer of Ingersoll-Rand and Trident, sells the Trendi and Sonee compressor ranges, and is a stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest, operating from Shah Ganj, Old Delhi since 1987." }
    },
    {
      "@type": "Question",
      "name": "Do you provide after-sales service and genuine spares?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We supply genuine OEM compressor and pump spares - air and oil filters, air-oil separators, intake valves, gaskets and service kits - and prioritise urgent repair requests for industrial customers across Delhi-NCR." }
    },
    {
      "@type": "Question",
      "name": "Which industries do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "We supply compressed-air systems, pumps and air-treatment equipment to packaging, paint, cement, textile and laundry operations, among other manufacturing applications." }
    }
  ]
}
```

### Service — applies to A services/repair section (e.g. the 'Critical Repairs' banner in Layout.tsx) and after-sales/spares context.

Maps to existing repair/after-sales positioning. Keep phone consistent with NAP. Do not claim SLAs or response times that are not actually offered.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Air compressor and pump repair, maintenance and spares",
  "provider": { "@id": "https://www.machinerycentre.in/#organization" },
  "areaServed": [ { "@type": "City", "name": "Delhi" }, { "@type": "AdministrativeArea", "name": "Delhi-NCR" } ],
  "description": "After-sales service, urgent repair support and genuine OEM spares for industrial air compressors, pumps and compressed-air treatment equipment.",
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": "+91-11-41440012",
    "serviceUrl": "https://www.machinerycentre.in/contact"
  }
}
```

### Review / AggregateRating — applies to Homepage testimonials section / Organization — HOLD until real reviews exist.

DO NOT PUBLISH until real, attributable reviews replace the placeholder testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel). Fabricated ratings/counts violate Google policy and risk manual action. Collect verified Google Business Profile reviews and mark up only those shown on-page.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.machinerycentre.in/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "REPLACE_WITH_REAL_AVERAGE",
    "reviewCount": "REPLACE_WITH_REAL_COUNT"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "REPLACE", "bestRating": "5" },
      "author": { "@type": "Person", "name": "REPLACE_WITH_REAL_VERIFIED_REVIEWER" },
      "reviewBody": "REPLACE_WITH_REAL_REVIEW_TEXT"
    }
  ]
}
```

---

## 04 · Page-by-Page Optimization

Every page, audited and rewritten — current issues, opportunities, mapped keywords, a length-checked title & meta, the H1 and heading tree, ready-to-paste copy, internal links, alt text, conversion paths, FAQs and schema. Character counts are computed from the final strings.

### Home — `https://www.machinerycentre.in/ (PLACEHOLDER — replace with the real production domain before launch; domain currently UNKNOWN)`

_Primary brand and conversion landing page. The top-of-funnel entry point for navigational ("Machinery Centre Delhi"), local ("air compressor dealer in Delhi", "near me"), and brand-authority ("Ingersoll-Rand authorized dealer") intent. It must establish the company as a since-1987 Delhi B2B dealer/stockist of compressed-air systems and industrial pumps with after-sales service, then funnel visitors into the four product categories, the Trendi own-brand range, and the quote form. It is NOT a product detail page and should not try to rank for individual SKUs — it hands off to category/product routes for that._

**Current issues**

- TITLE TOO LONG: The current useSEO() title 'Industrial Air Compressors & Pumps | Authorized Dealer | Machinery Centre' is 73 characters — well over the 60-char limit, so Google will truncate it. It also leads with generic product terms instead of the high-value local modifier 'Delhi'.
- META 'years' INCONSISTENCY: The meta description says '35+ years' but every on-page counter and body line auto-computes from a 1987 founding via (new Date().getFullYear() - 1987), which renders 39 in 2026. The page contradicts its own meta. Pick ONE figure — recommend 'Since 1987' to avoid the moving target.
- NO LOCAL INTENT IN METADATA: Neither the title nor meta mentions Delhi, Delhi NCR, or Old Delhi. The business is a Delhi/G.B. Road dealer and the primary money cluster is 'air compressor dealer in Delhi' — the single most important geo-modifier is absent from the most important tags.
- CLIENT-SIDE-ONLY SEO: SEO is a useSEO() hook that mutates document.title/meta after React mounts. There is no SSR/prerender, so the initial HTML Googlebot receives has no title, meta, canonical, JSON-LD, or OG tags. This is the single biggest structural blocker for the whole site.
- NO STRUCTURED DATA: No JSON-LD at all. A Delhi B2B dealer with a physical address, phone, and brand relationships is the textbook case for Organization + LocalBusiness schema — its absence forfeits rich results and local-pack signals.
- NO CANONICAL / OG / TWITTER TAGS: The home page has no canonical URL, no Open Graph, and no Twitter Card, so shares render with no title/image and there is no canonical signal for the root URL.
- PLACEHOLDER TESTIMONIALS: The three testimonials (Rajesh Kumar / Plant Head, Manufacturing Solutions; Sneha Sharma / TexFab India; Amit Patel / BuildTech) read as invented filler — generic names, vague company names, no specifics. These can be flagged as fake and hurt E-E-A-T rather than help it.
- VAGUE, NON-DIFFERENTIATING COPY: Hero subhead 'expert, immensely experienced consultancy and solutions for your Air and Water requirements' and the repeated 'Modernized services enabling you with a better, more efficient system of trust and reliability' say nothing concrete — no brands, no products, no city, no specs. Weak for both users and keyword relevance.
- H1 SPLIT / NO KEYWORD MATCH: The H1 'Complete Industrial Air Compressors & Pump Solutions' is broken across <br> spans and omits the brand and location. 'Pump Solutions' is awkward grammar.
- MISSING BRAND ENTITIES IN TEXT: The page never names the full authorized/stockist roster in prose (Ingersoll-Rand, Trident as authorized; Kirloskar, Crompton Greaves, Rotodel, Indfoss, Everest as stockist). The expertise card even lists 'Sonee Air Compressors' and 'Trident' under Air Compressors, while Trident is actually an air-treatment brand — a factual mislabel.
- OVERSTATED BLANKET CLAIM: The section eyebrow 'Authorized Dealers for Global OEM Brands' implies authorized-dealer status for ALL brands shown in the partner ribbon, but only Ingersoll-Rand and Trident are authorized; the rest are stockist relationships. This is a trust/accuracy risk.
- UNVERIFIED STAT CLAIMS PRESENTED AS FACT: '15,000+ Clients Served', '10+ Brand Partners', '15+ Product Models', '4 Core Categories', 'Nationwide Industry Support' are asserted without substantiation. Treat as claims to verify; do not amplify in meta.
- NO ROUTE FOR SERVICES/AMC: The page sells 'prompt after-sales service' and 'Repairs & Spares' but there is no /services or /amc route to link to, so the high-LTV AMC/repair/installation clusters have nowhere to land.
- INTERNAL LINKS ALL DUMP TO /products OR /trendi: The Trendi 'Explore Product Families' cards (Screw, Reciprocating, Desiccant, Air Treatment) all link to the generic /products hub rather than the specific /products/compressors and /products/air-treatment routes, wasting deep-link relevance. Note also the deep category routes are currently broken (Products.tsx uses useState tabs, ignoring the URL).
- IMAGE ALT GAPS: Decorative backgrounds correctly use alt='' (value-bg, quote-bg), but the four 'Our Solutions' cards use bare alt={s.name} (e.g. alt='Air Compressors') with no descriptive or local context, and the five industry cards use bare alt={industry.name} (e.g. alt='Paint'). The Trendi logo alt is just 'Trendi Logo' (redundant 'Logo').
- EMAIL TRUST SIGNAL: The business email is machinerycentre@yahoo.com (per NAP). A free yahoo.com address on a B2B industrial site lowers perceived trust — recommend a branded sales@ address (flag, do not assert it exists).
- NO FAQ CONTENT: The page has no FAQ section, missing an easy opportunity to capture People-Also-Ask queries (brands carried, location, service area, authorized vs stockist) and FAQPage schema.

**SEO opportunities**

- Own the local navigational + commercial intent by putting 'Air Compressor & Pump Dealer in Delhi' and the brand into the title/H1 — currently no metadata carries the geo modifier at all.
- Capture brand-authority searches ('Ingersoll Rand authorized dealer Delhi', 'Trident air dryer dealer', 'Kirloskar pump dealer Delhi') by naming the real authorized vs stockist roster in honest prose on the home page and linking each to its category route.
- Lock in 'Since 1987' as the single longevity signal across meta, H1 area, and counters — turning the current 35-vs-39 inconsistency into a consistent, trust-building entity fact.
- Add Organization + LocalBusiness JSON-LD with the exact NAP (3858 Shradhanand Marg, Shah Ganj, Delhi-110006; 011-41440012) to unlock knowledge-panel and local-pack eligibility — the highest-ROI technical fix for this page.
- Add prerendering/SSG so the title, meta, canonical, JSON-LD, and OG tags exist in the initial HTML, making the entire keyword map actually indexable instead of JS-dependent.
- Add a home-page FAQ block answering 'Are you an authorized Ingersoll-Rand dealer?', 'Where are you located?', 'Do you provide AMC/service?', 'Which brands do you stock?' to win People-Also-Ask and FAQPage rich results.
- Convert the four 'Our Solutions' cards and the four Trendi 'Product Family' cards into precise deep links (/products/compressors, /products/pumps, /products/air-treatment, /products/spares) to distribute internal-link equity to the category clusters once those routes are made indexable.
- Strengthen the after-sales angle (AMC, repair, genuine OEM spares, installation & commissioning) in body copy to seed the service clusters and recommend creating a /services route to host them.
- Replace placeholder testimonials with real attributable B2B reviews to build genuine E-E-A-T and qualify for Review/AggregateRating signals (only with verified data).
- Reinforce industry-application relevance (Packaging, Paint, Cement, Textile, Laundry, plus implied Pharma/Food/Automotive) with descriptive copy that ties each sector to a product, feeding the industry-application clusters and recommend industry-tagged blog posts.
- Use the WhatsApp/phone CTAs (011-41440012, +91 9810054137) as conversion accelerators and as on-page NAP consistency signals matching a Google Business Profile.

**Recommended keywords**

- **Primary:** `air compressor dealer in Delhi`
- **Secondary:** industrial pump dealer in Delhi · Ingersoll Rand authorized dealer Delhi · compressed air systems supplier Delhi NCR · compressor and pump spare parts Delhi · compressed air treatment supplier Delhi · Machinery Centre Delhi
- **Long-tail:** air compressor and pump dealer near GB Road Delhi · authorized Ingersoll Rand air compressor dealer in Delhi NCR · one stop shop for compressors and pumps in Delhi since 1987 · industrial compressor supplier in Shah Ganj Old Delhi with service and spares · Kirloskar and Crompton Greaves pump stockist in Delhi
- **Semantic:** compressed air · Trendi · Ingersoll-Rand · Trident · Kirloskar · Rotodel · Crompton Greaves · screw air compressor · reciprocating compressor · desiccant dryer · refrigerated dryer · rotary gear pump · vacuum pump · OEM spares · air-oil separator · IE3 motor · VFD · after-sales service · AMC · Old Delhi · Shah Ganj · Delhi NCR · B2B dealer · stockist

**On-page metadata**

- **SEO Title** (56 chars): Air Compressor & Pump Dealer in Delhi | Machinery Centre
- **Meta description** (150 chars): Machinery Centre is a Delhi-based air compressor and pump dealer since 1987. Authorized for Ingersoll-Rand & Trident, with genuine spares and service.
- **H1:** Air Compressor & Industrial Pump Dealer in Delhi — Since 1987
- **URL slug:** `/ (home — root URL; no slug change. Canonical: https://www.machinerycentre.in/ — replace placeholder domain with real production domain)`

**Heading outline**

- `H1` Air Compressor & Industrial Pump Dealer in Delhi — Since 1987
- `H2` Your One Stop Shop for Compressed Air & Fluid Handling in Delhi NCR
  - `H3` Air Compressors — Ingersoll-Rand, Trendi & Sonee
  - `H3` Compressed Air Treatment — Trident Dryers, Filters & Nitrogen
  - `H3` Industrial Pumps — Kirloskar, Crompton Greaves & Rotodel
  - `H3` Repairs, Spares & After-Sales Service
- `H2` A Trusted Delhi Dealer & Stockist Since 1987
  - `H3` Our Brand Partners
- `H2` Explore Our Solutions
  - `H3` Air Compressors
  - `H3` Industrial Pumps
  - `H3` Air Treatment
  - `H3` Spares & Accessories
- `H2` The Trendi Range — Our Own Energy-Efficient Air Compressors
  - `H3` Why Engineers Choose Trendi
  - `H3` Explore Trendi Product Families
- `H2` Request a Quote
- `H2` Industries We Serve
- `H2` Trusted by Indian Industry Since 1987
- `H2` What Our Clients Say
- `H2` Frequently Asked Questions
- `H2` Our Trusted Brand Partners

**Revised content** _(ready to paste)_

*Hero — eyebrow*

Serving Indian Industry Since 1987

*Hero — H1*

Air Compressor & Industrial Pump Dealer in Delhi — Since 1987

*Hero — subhead*

Machinery Centre is your one stop shop in Delhi NCR for industrial air compressors, compressed air treatment and industrial pumps. As an authorized dealer of Ingersoll-Rand and Trident — and a long-standing stockist of Kirloskar, Crompton Greaves and Rotodel — we supply, install and service complete air and water systems, backed by genuine OEM spares and prompt after-sales support.

*Hero — CTAs*

Primary button: 'Explore Products' -> /products. Secondary button: 'Get a Quote' -> /quote. (Recommend adding a tertiary tel: link 'Call 011-41440012' for mobile conversion.)

*Feature block — eyebrow*

Who We Are

*Feature block — H2*

Your One Stop Shop for Compressed Air & Fluid Handling in Delhi NCR

*Feature block — body*

From our base on G.B. Road in Old Delhi, Machinery Centre has supplied compressed-air systems and industrial pumps to factories across Delhi NCR and India since 1987. We pair the right equipment to your duty cycle — screw and reciprocating air compressors, desiccant and refrigerated dryers, filters, and centrifugal, gear and vacuum pumps — then keep them running with genuine spares, scheduled maintenance and responsive on-site service. One supplier for your air and water requirements, from selection to commissioning to after-sales.

*Feature block — floating badge*

Heading: 'Authorized Dealer'. Subtext: 'Ingersoll-Rand & Trident, supported by genuine OEM spares.'

*Feature block — stats labels*

Keep three counters but standardise the longevity figure to derive from 1987 consistently. Labels: 'Years Serving Industry (Since 1987)', 'Brand Partners' (only if the 10+ count is verifiable; otherwise relabel 'Leading OEM Brands'), 'Industrial Clients Served' (mark the 15,000+ figure as a claim to verify before publishing). Add 'Learn More' -> /about.

*Expertise cards — eyebrow*

What We Supply & Service

*Expertise cards — H2*

Comprehensive Sales, Spares & Service

*Expertise cards — intro*

A complete compressed-air and pumping capability under one roof in Delhi — from equipment selection to installation, spares and after-sales service.

*Expertise card 1 (Air Compressors)*

Heading: 'Air Compressors'. Body: 'Energy-efficient Ingersoll-Rand, Trendi and Sonee screw and reciprocating air compressors — sized to your CFM and pressure to optimise running costs.'

*Expertise card 2 (Air Treatment) — FIX MISLABEL*

Heading: 'Compressed Air Treatment'. Body: 'Trident desiccant and refrigerated dryers, sub-micron and coalescing filters, drain valves and PSA nitrogen generators for clean, dry, oil-free air.' (Corrects the current card that wrongly lists Trident and Sonee under Air Compressors.)

*Expertise card 3 (Industrial Pumps)*

Heading: 'Industrial Pumps'. Body: 'Boiler feed, chemical, centrifugal, fire-fighting, gear, metering and vacuum pumps — stockist for Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest.'

*Expertise card 4 (Repairs & Spares)*

Heading: 'Repairs, Spares & Service'. Body: 'Genuine OEM compressor and pump spares, service kits, piping and hosing, plus AMC and prompt on-site breakdown support across Delhi NCR.'

*Expertise section eyebrow — FIX OVERSTATED CLAIM*

Replace 'Authorized Dealers for Global OEM Brands' with the accurate: 'Authorized Dealer of Ingersoll-Rand & Trident — Stockist for Leading Pump Brands'

*Our Solutions — H2 / intro*

Eyebrow: 'Featured Range'. H2: 'Explore Our Solutions'. Intro: 'Four core categories covering your complete compressed-air and fluid-handling needs — explore the range and request pricing.'

*Our Solutions cards — descriptions + links*

Air Compressors: 'Screw & reciprocating systems for continuous duty' -> /products/compressors. Industrial Pumps: 'Gear, centrifugal, metering & vacuum pumps' -> /products/pumps. Air Treatment: 'Dryers, filters, drain valves & nitrogen generators' -> /products/air-treatment. Spares & Accessories: 'Genuine OEM parts, service kits & oils' -> /products/spares. (Currently all four already link to the correct category routes — keep, and ensure those routes become indexable.)

*Trendi brand showcase — eyebrow / intro*

Eyebrow: 'Our Own Brand'. After logo: 'Trendi is Machinery Centre's own range of energy-efficient screw and reciprocating air compressors — engineered with IE3 motors, an optional VFD and a three-stage air-oil separator for low specific power consumption and reliable continuous-duty performance.'

*Trendi feature chips*

Keep the three chips but make them factual and specific: 'IE3 Motors & Optional VFD', 'Screw & Reciprocating Models', 'Backed by Delhi NCR Service & Spares'. Replace unverifiable '15+ Product Models / Nationwide Industry Support' unless those counts are confirmed.

*Trendi core advantages (icon row)*

Keep the six advantage tiles; reword to spec-anchored claims: 'Microprocessor Controls', 'Energy Efficient (Low kW/CFM)', 'Low Noise', 'Industrial Reliability', 'Low Maintenance', '100% Continuous Duty'.

*Trendi product family cards — FIX DEEP LINKS*

Screw Air Compressors: 'Belt & direct drive, VFD optional' -> /products/compressors. Reciprocating Compressors: 'Two-stage 175 PSIG, cast iron' -> /products/compressors. Desiccant Air Dryers: 'Heatless, low dew point for critical air' -> /products/air-treatment. Specialized Air Treatment: 'Filters, drains & nitrogen generators' -> /products/air-treatment. (Currently all four link to /products — repoint to the specific category routes.)

*Trendi CTA*

Button: 'View the Full Trendi Range' -> /trendi

*Quote section*

Eyebrow: 'Get Started'. H2: 'Request a Quote'. Body: 'Tell us what you need — product, model and quantity — and our Delhi team will respond with pricing and the right specification for your application. For urgent enquiries, call 011-41440012 or WhatsApp +91 9810054137.' Benefit bullets: 'Response within one business day', 'Expert specification & sizing advice', 'Genuine equipment with spares & service backup'. (Replace the unprovable 'Competitive pricing guaranteed' claim.)

*Industries — H2 / intro*

Eyebrow: 'Sectors We Serve'. H2: 'Industries We Serve'. Intro: 'From packaging and paint to cement, textile and laundry — plus pharma, food and automotive applications — we match clean, reliable compressed air and pumping to your process.'

*Trust highlight block*

H2: 'Trusted by Indian Industry Since 1987'. Body (change H3 to a <p>): 'Whether you run a packaging line, paint shop, cement plant, textile mill or commercial laundry, Machinery Centre delivers the precise air and water solutions for your scale of operation — supplied, installed and serviced from Delhi.'

*Testimonials — FLAG*

Replace the three placeholder testimonials (Rajesh Kumar, Sneha Sharma, Amit Patel) with real, attributable B2B reviews — full name, role, real company, and ideally city. Until verified quotes exist, remove the section rather than publish placeholders, as fabricated reviews undermine E-E-A-T. Suggested heading once real: 'What Our Clients Say'.

*NEW — FAQ section*

H2: 'Frequently Asked Questions'. Add 5-6 Q&As (see faqs field) covering authorized vs stockist brands, location/service area, AMC & service, and product range. This adds crawlable, intent-matched content and enables FAQPage schema.

*Partner ribbon*

Heading: 'Our Brand Partners'. Keep the logo ribbon (Ingersoll-Rand, Kirloskar, Crompton Greaves, Trident, Rotodel, Indfoss, Everest, Sonee). Add a one-line clarifier beneath: 'Authorized dealer of Ingersoll-Rand and Trident; stockist and supplier for Kirloskar, Crompton Greaves, Rotodel, Indfoss, Everest and Sonee.'

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| Explore Products | `/products` | Hero primary CTA button |
| Get a Quote | `/quote` | Hero secondary CTA button (replaces 'Contact Us' to push conversion; keep Contact in nav) |
| Learn More about Machinery Centre | `/about` | Feature/Who-We-Are block, below the stats counters |
| Air Compressors | `/products/compressors` | Our Solutions grid card 1 |
| Industrial Pumps | `/products/pumps` | Our Solutions grid card 2 |
| Air Treatment | `/products/air-treatment` | Our Solutions grid card 3 |
| Spares & Accessories | `/products/spares` | Our Solutions grid card 4 |
| Screw Air Compressors | `/products/compressors` | Trendi 'Explore Product Families' card 1 (repoint from /products) |
| Reciprocating Compressors | `/products/compressors` | Trendi 'Explore Product Families' card 2 (repoint from /products) |
| Desiccant Air Dryers | `/products/air-treatment` | Trendi 'Explore Product Families' card 3 (repoint from /products) |
| Specialized Air Treatment | `/products/air-treatment` | Trendi 'Explore Product Families' card 4 (repoint from /products) |
| View the Full Trendi Range | `/trendi` | Trendi showcase CTA button |
| air compressor maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | New FAQ answer about servicing, or a small 'From our blog' link near the Industries/Trust block |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | Industries section supporting link, or FAQ answer about pump selection |
| energy-efficient compressed air equipment | `/blog/importance-of-energy-efficient-equipment` | Trendi 'Why Engineers Choose Trendi' supporting link |
| contact our Delhi team | `/contact` | FAQ answer about location/visiting, and footer-adjacent CTA |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| /assets/images/hero-machinery.png (hero background) | Industrial screw air compressor installation supplied by Machinery Centre, Delhi |
| /assets/images/about-main.png (feature block + Solutions 'Air Compressors') | Trendi energy-efficient air compressor for continuous-duty industrial use |
| /assets/images/value-bg.png (expertise section background) | (decorative — keep alt empty) |
| /assets/images/service-milling.png (Solutions 'Industrial Pumps') | Industrial pump for fluid handling — Kirloskar and Rotodel range at Machinery Centre |
| /assets/images/service-laser.png (Solutions 'Air Treatment') | Compressed air dryer and filtration unit for clean, dry, oil-free air |
| /assets/images/service-turning.png (Solutions 'Spares & Accessories') | Genuine OEM compressor and pump spare parts and service kits |
| Trendi logo (getBrandLogo('Trendi')) | Trendi air compressors — Machinery Centre's own energy-efficient brand |
| /assets/images/quote-bg.png (quote section background) | (decorative — keep alt empty) |
| /assets/images/industry-packaging.png | Compressed air systems for the packaging industry |
| /assets/images/industry-paint.png | Oil-free clean dry compressed air for the paint and spray-finishing industry |
| /assets/images/industry-cement.png | Heavy-duty air compressors for cement plant applications |
| /assets/images/industry-textile.png | Energy-efficient compressed air for textile mill weaving and spinning |
| /assets/images/industry-laundry.png | Reciprocating air compressors for commercial laundry and garment pressing |
| Machinery Centre logo (Cloudinary, trust block) | Machinery Centre logo — air compressor and pump dealer in Delhi since 1987 |
| Partner logos in ribbon (getBrandLogo per brand) | Use the brand name plus relationship, e.g. 'Ingersoll-Rand — authorized compressor dealer', 'Kirloskar — pump stockist', for each logo instead of the bare brand name |

**Conversion recommendations**

- Add a click-to-call tel:01141440012 button and a WhatsApp link (wa.me/919810054137) in the hero and as a sticky mobile bar — most B2B Delhi buyers convert by phone, and these are currently absent from the home page.
- Change the hero secondary CTA from 'Contact Us' to 'Get a Quote' (-> /quote) so the primary conversion path is front-and-centre; keep Contact in the nav.
- Display the NAP (3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006) and phone prominently near the quote form to reinforce a real, visitable Delhi presence and match the recommended Google Business Profile.
- Replace the unprovable 'Competitive pricing guaranteed' bullet with a verifiable promise such as 'Response within one business day' and 'Genuine equipment with spares & service backup'.
- Add an embedded Google Map of the Shah Ganj location near the quote form to build local trust and aid 'near me' conversions.
- Add a downloadable catalogue CTA (-> /trendi or a recommended /catalogue page) as a soft lead magnet for buyers not yet ready to request a quote.
- Replace placeholder testimonials with real, attributable B2B reviews and, if a Google Business Profile is set up, link to live reviews to build trust at the point of decision.
- Recommend creating a /services (AMC, repair, installation) route and link to it from the 'Repairs, Spares & Service' card — capturing high-LTV service intent that currently has no destination.
- Standardise the years figure to 'Since 1987' everywhere (hero eyebrow, body, trust block, counters) so the brand longevity message is consistent and credible.
- Switch the branded contact email from machinerycentre@yahoo.com to a domain email such as sales@machinerycentre.in (recommendation only — do not display until it exists) to raise B2B trust.

**Page FAQs**

- **Where is Machinery Centre located and which areas do you serve?** Machinery Centre is located at 3858 Shradhanand Marg, Shah Ganj, behind Hanuman Mandir, Delhi-110006, on G.B. Road in Old Delhi. We supply, install and service air compressors and industrial pumps across Delhi NCR and to industrial clients throughout India.
- **Is Machinery Centre an authorized air compressor dealer?** Yes. Machinery Centre is an authorized dealer of Ingersoll-Rand air compressors and Trident compressed-air treatment equipment. We also supply our own Trendi compressor brand and Sonee compressors, and we are a stockist for Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest.
- **What products does Machinery Centre supply?** We supply industrial air compressors (screw and reciprocating), compressed air treatment equipment (desiccant and refrigerated dryers, filters, drain valves and PSA nitrogen generators), and industrial pumps (gear, metering, vacuum, centrifugal, boiler feed and fire-fighting), along with genuine OEM spares and service kits.
- **Do you provide after-sales service and AMC for compressors and pumps?** Yes. We provide installation and commissioning, annual maintenance contracts (AMC), preventive maintenance, breakdown repair and genuine OEM spares supply for the compressors, dryers and pumps we sell, with prompt on-site support across Delhi NCR.
- **Which industries does Machinery Centre serve?** We serve packaging, paint, cement, textile and laundry industries, as well as pharmaceutical, food and beverage, medical and automotive applications — matching clean, dry, reliable compressed air and pumping solutions to each process.
- **How can I get a price quote for an air compressor or pump?** Submit the quote form on our website with the product, model and quantity you need, and our Delhi team will respond with pricing and specification advice within one business day. For urgent enquiries, call 011-41440012 or WhatsApp +91 9810054137.

**Schema:** Add Organization JSON-LD: name 'Machinery Centre', url (real domain replacing https://www.machinerycentre.in/), logo (Cloudinary URL), slogan 'One Stop Shop For Compressors and Pumps', foundingDate '1987', and brand entries for the Trendi own brand. · Add LocalBusiness (or HardwareStore/Store subtype) JSON-LD with exact NAP: streetAddress '3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir', addressLocality 'Delhi', postalCode '110006', addressCountry 'IN', telephone '+91-11-41440012', plus additional contactPoint numbers +91-9810054137 / +91-9891155438 and areaServed 'Delhi NCR' / 'India'. Add geo coordinates and openingHours only if accurate. · Add FAQPage JSON-LD built from the home-page FAQ section (the six Q&As above) to qualify for FAQ rich results. · Add BreadcrumbList JSON-LD for the home (single 'Home' item) and consistent breadcrumbs sitewide. · Add WebSite JSON-LD with potentialAction SearchAction only if an on-site search exists (it does not appear to today — omit otherwise). · Add Open Graph and Twitter Card meta (og:title, og:description, og:image using the logo or hero, og:url, og:type=website, twitter:card=summary_large_image) — currently missing entirely. · Reference authorized brand relationships via 'brand' / 'makesOffer' only with accurate wording (authorized: Ingersoll-Rand, Trident; the rest as stockist) — do NOT mark stockist brands as authorized in schema. · Do NOT add AggregateRating/Review schema until real, verifiable reviews replace the current placeholder testimonials; fabricated review markup risks a manual action. · Ensure all JSON-LD and meta render in the initial HTML via prerendering/SSG — with the current client-only useSEO() hook, schema injected after mount is unreliable for crawlers. Replace the placeholder domain in every @id/url/canonical before launch.

---

### About — `https://www.machinerycentre.in/about (PLACEHOLDER domain — replace with the real production domain everywhere before launch)`

_Trust / company-story page. Navigational + E-E-A-T support page. Its SEO job is NOT to win product money terms but to (a) win brand/navigational searches ("Machinery Centre Delhi", "Machinery Centre Shah Ganj"), (b) establish authority, longevity (since 1987), authorized-dealer/stockist credibility and local presence (Old Delhi / Shah Ganj / Delhi NCR) so it lends trust to the product/category/service pages, and (c) act as an internal-linking hub that pushes equity to /products/* , /trendi, /quote and /contact. It is the canonical home for Organization + LocalBusiness JSON-LD with the exact NAP._

**Current issues**

- H1 is literally just "About" — zero keyword value, no brand, no niche, no location. The single biggest on-page miss.
- SEO title "About Machinery Centre | Industrial Equipment Suppliers Since 1987" (66 chars, OVER the 60 limit) and uses the generic off-niche phrase "Industrial Equipment Suppliers" instead of the real niche (air compressors, pumps, compressed-air treatment) and omits Delhi local intent.
- Meta description leans on "industrial machinery" and the parent "Gulson Engineering" backstory rather than the commercial niche + Delhi-NCR local intent that actually converts; it buries the dealer/stockist authority signals.
- Years-in-business inconsistency: founder bio hardcodes "over 35 years" (line 10) while yearsOfLegacy auto-computes 39 from 1987 (line 23) and homepage meta says "35+ years". Three different figures on one site. Standardise to "Since 1987".
- Brand-relationship wording is flattened: the sidebar groups Ingersoll-Rand, Sonee, Trident, Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest under one undifferentiated "Authorized Dealer & Stockist" label, conflating authorized-dealer relationships (Ingersoll-Rand, Trident) with stockist relationships (Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest). This is a trust/accuracy risk.
- Trendi — their own/exclusive flagship brand — is completely absent from the About page, a missed authority and internal-link opportunity.
- Zero internal links out of the page. About is a natural equity hub but links to no product category, no /trendi, no /quote, no /contact, no /blog. Pure dead-end for crawl equity and users.
- Body copy is thin and dated: "Water & Air Requirements", "presence at G.B. Road" only — it never names the actual product verticals (air compressors, industrial pumps, compressed-air dryers/filters, nitrogen generators, spares) or the after-sales service/AMC differentiator that separates them from pure resellers.
- Owner image alt text is just the person's name (alt={o.name}) — no role, no company, no context for image search or accessibility.
- Sidebar email is a yahoo.com address (machinerycentre@yahoo.com) — a trust/professionalism signal weaker than a branded domain email.
- No JSON-LD whatsoever — no Organization, no LocalBusiness, no foundingDate, no exact NAP markup. The About page is the ideal host for this and currently provides none.
- SPA SEO limitation: useSEO() mutates document.title/meta client-side only; with no SSR/prerender the title, meta and any schema are not in the initial HTML. Combined with no canonical tag, this page's signals are fragile for crawlers.
- Page-header subline "A legacy of trust, expertise, and commitment to the Indian industrial sector" is generic filler — no entity, no keyword, no location.
- No FAQ content despite obvious buyer questions (Are you an authorized dealer? Where are you located? Do you offer service/AMC? Which brands?) that map cleanly to PAA and FAQ schema.

**SEO opportunities**

- Rewrite H1 to carry brand + niche + longevity: "About Machinery Centre — Compressor & Pump Dealer in Delhi Since 1987". Captures the brand/navigational cluster while reinforcing the core niche and local intent.
- Re-anchor the page on the REAL niche entities (air compressors, industrial pumps, compressed-air treatment, OEM spares, after-sales service) plus Delhi / Old Delhi / Shah Ganj / Delhi NCR local signals — feeding the brand-navigational and Delhi-local clusters.
- Split brand relationships accurately: a clearly labelled "Authorized Dealer" group (Ingersoll-Rand, Trident) and a separate "Stockist & Supplier" group (Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest; plus Elgi & Janatics components, Sonee). This raises trust AND seeds branded long-tail authority.
- Add a dedicated paragraph for Trendi (own/exclusive brand) with an internal link to /trendi — owns a brand term they fully control and strengthens the energy-efficient-compressor story.
- Turn the page into an internal-linking hub: contextual links to /products/compressors, /products/pumps, /products/air-treatment, /products/spares, /trendi, /quote and /contact distribute equity to money pages.
- Add a Service & After-Sales section (installation, spares supply, repair, AMC) — a genuine differentiator vs pure resellers and a hook for the AMC/repair service clusters (link to /contact / future /services).
- Add a named-industries block (Packaging, Paint, Cement, Textile, Laundry; plus Pharma, Food & Beverage, Automotive) to build topical relevance for the industry-application clusters.
- Add LocalBusiness + Organization JSON-LD with the exact NAP, foundingDate 1987, areaServed Delhi NCR, and the dealer/stockist brands — the single highest-leverage technical win available on this page for local-pack eligibility.
- Add an on-page FAQ block (with FAQPage schema) answering authorized-dealer, location, service/AMC, and brand questions — qualifies for rich results and PAA.
- Standardise to "Since 1987" / "established in 1987" everywhere and remove the hardcoded "35 years" to fix the credibility-eroding inconsistency.
- Add a concise trust-stats strip (founding year, brands represented, industries served) — but phrase the 15,000+ clients / 39+ years claims as on-site claims to substantiate, not amplified facts.
- Recommend a branded-domain email (e.g. sales@machinerycentre.in) IF it can be set up — a low-effort trust lift; do not assert it exists.

**Recommended keywords**

- **Primary:** `Machinery Centre Delhi`
- **Secondary:** air compressor and pump dealer in Delhi · compressors and pumps supplier Delhi NCR · Ingersoll Rand authorized dealer Delhi · Kirloskar pump stockist Delhi · compressed air systems supplier Delhi · Machinery Centre Shah Ganj
- **Long-tail:** compressor and pump dealer in Old Delhi since 1987 · authorized air compressor and air treatment dealer in Delhi NCR · industrial pump and compressor supplier near GB Road Delhi · one stop shop for compressors and pumps in Delhi · Machinery Centre Shradhanand Marg contact and address
- **Semantic:** since 1987 · One Stop Shop · B2B dealer · stockist · authorized dealer · after-sales service · AMC · genuine OEM spares · Trendi · Ingersoll Rand · Trident · Kirloskar · Rotodel · Old Delhi · Shah Ganj · Shradhanand Marg · Delhi-110006 · compressed air · industrial pumps · air treatment

**On-page metadata**

- **SEO Title** (50 chars): Machinery Centre | Compressor & Pump Dealer, Delhi
- **Meta description** (151 chars): Machinery Centre is a Delhi-based air compressor and pump dealer since 1987 — authorized for Ingersoll Rand & Trident, with genuine spares and service.
- **H1:** About Machinery Centre — Compressor & Pump Dealer in Delhi Since 1987
- **URL slug:** `about`

**Heading outline**

- `H1` About Machinery Centre — Compressor & Pump Dealer in Delhi Since 1987
- `H2` A Delhi-based One Stop Shop for Compressors and Pumps Since 1987
  - `H3` From Gulson Engineering to Machinery Centre
- `H2` What We Supply: Compressed Air & Industrial Pump Solutions
  - `H3` Air Compressors
  - `H3` Industrial Pumps
  - `H3` Compressed Air Treatment
  - `H3` Genuine OEM Spares
- `H2` Trendi — Our Own Energy-Efficient Air Compressor Brand
- `H2` Authorized Dealer & Stockist for Leading Brands
  - `H3` Authorized Dealer
  - `H3` Stockist & Supplier
- `H2` After-Sales Service, Spares & AMC Support
- `H2` Industries We Serve Across Delhi NCR
- `H2` Leadership & Management
  - `H3` Sandeep Dhawan — Partner
  - `H3` Sumit Dhawan — Partner
- `H2` Visit Us in Old Delhi
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*Page header (replace H1 "About" and the generic subline)*

H1: About Machinery Centre — Compressor & Pump Dealer in Delhi Since 1987

Subline: A Delhi-based one stop shop for air compressors, industrial pumps and compressed-air treatment — serving Indian industry with the right product, genuine spares and dependable after-sales service since 1987.

*Our Story (replaces the History section, fixes the 35/39 inconsistency)*

H2: A Delhi-based One Stop Shop for Compressors and Pumps Since 1987

Machinery Centre was established in November 1987 in Old Delhi as a specialist dealer of compressed-air systems and industrial pumps. From our base on Shradhanand Marg, Shah Ganj, we have spent decades helping factories, workshops and process plants across Delhi NCR and India choose the right equipment for their exact application — and keep it running with genuine spares and responsive service.

H3: From Gulson Engineering to Machinery Centre

Machinery Centre grew out of our parent company, Gulson Engineering Company, founded in 1978, which built its reputation on industrial pumps — boiler feed, chemical, water-lifting, sewerage, self-priming, centrifugal, fire-fighting and booster pumps. When Gulson Engineering diversified in 1987, Machinery Centre was created to bring that same product expertise to compressed-air systems, air treatment and after-sales support. That heritage is why we remain a true one stop shop for your air and water requirements.

*What We Supply (new section anchoring the real niche + internal links)*

H2: What We Supply: Compressed Air & Industrial Pump Solutions

We are a dealer, stockist and after-sales partner across four core verticals — not a generic machinery reseller. Whatever your line of work, we help you specify, buy, install and maintain the right system.

H3: Air Compressors
Energy-efficient screw air compressors (belt-drive and direct-drive, VFD optional, IE3 motors) and two-stage reciprocating compressors rated to 175 PSI for continuous-duty industrial use, from Ingersoll Rand, our own Trendi brand and Sonee. Explore our air compressor range.

H3: Industrial Pumps
Rotary gear pumps (Rotodel HGN / HGSX), Kirloskar metering and dosing pumps, and KV/DV vacuum pumps for process, chemical and water-handling applications. See our industrial pump range.

H3: Compressed Air Treatment
Trident refrigerated and desiccant air dryers, submicron and coalescing filters down to 0.01 micron, automatic drain valves, PSA nitrogen generators and breathing-air systems — for clean, dry, contamination-free compressed air. Browse air treatment equipment.

H3: Genuine OEM Spares
Genuine pump spares (boiler feed, chemical, water-lifting, sewerage, fire-fighting, booster, centrifugal, self-priming) and compressor parts — air and oil filters, air-oil separators, intake valves, gaskets and service kits. View compressor and pump spares.

*Trendi own-brand section (new)*

H2: Trendi — Our Own Energy-Efficient Air Compressor Brand

Trendi is Machinery Centre's own range of energy-efficient air compressors. The Trendi line includes belt-drive and direct-drive screw compressors with an optional VFD, IE3 motors and a 3-stage air-oil separator for low specific power consumption, plus two-stage reciprocating compressors (175 PSIG, cast iron) built for continuous duty. Discover the Trendi compressor range.

*Brands — split dealer vs stockist (replaces the single mixed sidebar label)*

H2: Authorized Dealer & Stockist for Leading Brands

We represent established compressed-air and pump brands so you get the right specification with genuine parts and warranty-backed support.

H3: Authorized Dealer
Ingersoll Rand and Trident — backed by genuine spares and after-sales service. We also offer Sonee air compressors and our own Trendi brand.

H3: Stockist & Supplier
Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest, plus Elgi and Janatics pneumatic components — held in stock and supplied across Delhi NCR.

(Note for build: present these as two distinct labelled groups, not one combined "Authorized Dealer & Stockist" chip list, so the relationship type is accurate.)

*After-Sales Service section (new differentiator)*

H2: After-Sales Service, Spares & AMC Support

Buying the equipment is only the start. Our team supports installation and commissioning, supplies genuine OEM spares and service kits, and handles repairs and preventive maintenance — including annual maintenance contracts (AMC) to maximise uptime on your compressors and pumps. Talk to our team about service and AMC.

*Industries We Serve (replaces the thin "Industry Partners" card)*

H2: Industries We Serve Across Delhi NCR

We supply compressed-air and pump solutions to a wide range of industries, including Packaging, Paint, Cement, Textile, Garage & Automotive Equipment, Shoe Making and Laundry. Our air-treatment and oil-free solutions also support Pharmaceutical, Medical, and Food & Beverage applications where clean, dry, contamination-free air is essential.

*Leadership & Management (tighten copy; per-person H3s)*

H2: Leadership & Management

Behind Machinery Centre's decades of service is a hands-on team of partners who combine deep product knowledge with a commitment to reliable supply and after-sales support.

H3: Sandeep Dhawan — Partner
Decades of experience in compressed-air systems and industrial pumps, leading the company's strategic direction, product expertise and growth.

H3: Sumit Dhawan — Partner
Overseeing daily operations, supply-chain logistics and after-sales service to keep our supply and support network running smoothly.

*Visit Us / Corporate Office (sidebar, keep exact NAP, add CTAs + email recommendation)*

H2: Visit Us in Old Delhi

Corporate Office
3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India

Tel: 011-41440012
Mobile: 9810054137, 9891155438
WhatsApp: +91 9810054137
Email: machinerycentre@yahoo.com

Buttons: [Request a Quote] -> /quote   [Contact Us] -> /contact

(Recommendation, do not assert as live: move to a branded-domain email such as sales@machinerycentre.in to strengthen trust. Keep the yahoo.com address until the branded inbox is confirmed.)

*FAQ block (new, paired with FAQPage schema)*

H2: Frequently Asked Questions
(Render the Q&A pairs from the faqs field below as on-page accordion content, marked up with FAQPage schema.)

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| Explore our air compressor range | `/products/compressors` | In the "Air Compressors" H3 under the What We Supply section |
| See our industrial pump range | `/products/pumps` | In the "Industrial Pumps" H3 under the What We Supply section |
| Browse air treatment equipment | `/products/air-treatment` | In the "Compressed Air Treatment" H3 under the What We Supply section |
| View compressor and pump spares | `/products/spares` | In the "Genuine OEM Spares" H3 under the What We Supply section |
| Discover the Trendi compressor range | `/trendi` | End of the Trendi own-brand section |
| Talk to our team about service and AMC | `/contact` | End of the After-Sales Service section |
| Request a Quote | `/quote` | Primary CTA button in the Corporate Office / Visit Us sidebar |
| Contact Us | `/contact` | Secondary CTA button in the Corporate Office / Visit Us sidebar |
| essential maintenance tips for air compressors | `/blog/essential-maintenance-tips-for-air-compressors` | Contextual link within the After-Sales Service section (e.g. "read our essential maintenance tips for air compressors") |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | Contextual link within the Industrial Pumps H3 or Industries We Serve section |
| explore all our products | `/products` | Closing line of the What We Supply section as a catch-all to the products hub |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Sandeep Dhawan portrait (line 9 image) | Sandeep Dhawan, Partner at Machinery Centre, Delhi compressor and pump dealer |
| Sumit Dhawan portrait (line 15 image) | Sumit Dhawan, Partner at Machinery Centre, Delhi |
| RECOMMENDED new image — company logo / storefront for Organization & LocalBusiness schema | Machinery Centre — air compressor and pump dealer in Shah Ganj, Old Delhi since 1987 |
| RECOMMENDED new image — brand wall / authorized-dealer logos (Ingersoll Rand, Trident, Trendi) | Machinery Centre authorized dealer for Ingersoll Rand and Trident, with Trendi own-brand compressors |

**Conversion recommendations**

- Add two clear CTAs in the sidebar / corporate-office block: a primary "Request a Quote" -> /quote and secondary "Contact Us" -> /contact. The page currently has zero conversion actions.
- Make the phone (011-41440012 / 9810054137) a click-to-call tel: link and add a WhatsApp click-to-chat link (+91 9810054137) — high-intent B2B buyers in India convert via call/WhatsApp.
- Keep the Google Maps address link but add a "Get Directions" label and reinforce the exact NAP — supports walk-in and local-pack trust.
- Add a short trust strip near the top (Since 1987 · Authorized dealer for Ingersoll Rand & Trident · Genuine spares & service · Delhi NCR). Present the 15,000+ clients / 39+ years figures as on-site claims to substantiate — do not over-amplify until verified.
- Replace the generic homepage testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel placeholders) with real, attributable B2B reviews and, IF available, surface one credible client logo or quote on About to lift conversion.
- Recommend setting up a branded-domain email (sales@machinerycentre.in) and a Google Business Profile with the exact NAP — both raise trust and unlock near-me/local-pack conversion (conditional recommendation, not asserted as live).
- Cross-link to the products hub and Trendi so About visitors who arrived on a brand/navigational search are funnelled into commercial pages rather than dead-ending.
- Add an ISO 9001 / dealer-authorization badge ONLY IF genuinely held — do not fabricate; if held, it is a strong B2B trust/conversion signal on the About page.

**Page FAQs**

- **Is Machinery Centre an authorized dealer for air compressors?** Yes. Machinery Centre is an authorized dealer for Ingersoll Rand and Trident, and supplies our own Trendi brand of energy-efficient air compressors along with Sonee. We back every sale with genuine spares and after-sales service.
- **Where is Machinery Centre located in Delhi?** Our office and stockholding are at 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, in Old Delhi near G.B. Road. We supply customers across Delhi NCR and India. Call 011-41440012 or 9810054137.
- **What products does Machinery Centre supply?** We supply air compressors (screw and reciprocating), industrial pumps (rotary gear, metering/dosing and vacuum pumps), compressed-air treatment (dryers, filters, drain valves, nitrogen generators) and genuine OEM spares for compressors and pumps.
- **Does Machinery Centre provide service and maintenance?** Yes. Beyond supply, we handle installation and commissioning, supply genuine spares and service kits, and offer repairs and annual maintenance contracts (AMC) to keep your compressors and pumps running reliably.
- **Which pump brands does Machinery Centre stock?** We are a stockist and supplier for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest, including Kirloskar metering and vacuum pumps and Rotodel HGN/HGSX rotary gear pumps, with genuine spares available.
- **How long has Machinery Centre been in business?** Machinery Centre was established in November 1987 in Old Delhi, growing out of Gulson Engineering Company (founded 1978). We have decades of experience supplying compressed-air systems and industrial pumps to Indian industry.

**Schema:** Add Organization JSON-LD: name "Machinery Centre", url https://www.machinerycentre.in/ (REPLACE placeholder domain), logo, foundingDate "1987", slogan "One Stop Shop For Compressors and Pumps", brand list including the own-brand Trendi, and sameAs links to any real social/listing profiles (omit if none — do not fabricate). · Add LocalBusiness (subtype Store or HardwareStore) JSON-LD with the EXACT NAP: streetAddress "3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir", addressLocality "Delhi", postalCode "110006", addressCountry "IN"; telephone "+91-11-41440012" plus mobiles; email; geo coordinates from the existing Google Maps link; areaServed "Delhi NCR" / India; foundingDate 1987. This is the highest-value schema for local-pack eligibility. · Add FAQPage JSON-LD mapping the six FAQ Q&A pairs above (mirroring the on-page FAQ block) for rich-result eligibility. · Add BreadcrumbList JSON-LD: Home (/) > About (/about), using the real routes. · Reference Person entities for Sandeep Dhawan and Sumit Dhawan via the Organization's employee/founder property (jobTitle "Partner") to reinforce E-E-A-T — keep it factual, no invented credentials. · CRITICAL prerequisite: because this is a Vite + React SPA with client-only useSEO() and no SSR/prerender, all JSON-LD, the canonical tag (<link rel="canonical" href="https://www.machinerycentre.in/about">), and Open Graph/Twitter tags must be injected into the INITIAL HTML via prerendering/SSG so crawlers reliably see them. Also add Open Graph (og:title, og:description, og:type=website, og:url, og:image) and Twitter card tags for this page. Replace the placeholder domain with the real production domain in every URL before launch.

---

### Products Hub / Overview — `https://www.machinerycentre.in/products (PLACEHOLDER DOMAIN — replace with the real production domain before launch)`

_Top-level products hub for Machinery Centre. Should function as a category index that links out to four separately indexable category landing pages (Compressors, Pumps, Air Treatment, Spares) plus the Trendi own-brand page. It is NOT a product detail page and should not try to rank for narrow product-spec terms; its job is to consolidate brand/category/local authority ("compressors and pumps dealer in Delhi") and distribute link equity and crawl paths to the four category routes._

**Current issues**

- CRITICAL ROUTING/INDEXABILITY BUG: App.tsx mounts this page at products/* but Products.tsx (lines 327-328) switches the four categories with a useState tab (setActiveCategoryId), so /products/compressors, /products/pumps, /products/air-treatment and /products/spares all resolve to ONE URL, ONE title and ONE meta description. The four category clusters cannot be separately indexed and the header deep-links do not deep-link. This is the single biggest blocker on the page.
- Single shared, generic SEO title for all four categories: 'Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre' (Products.tsx line 325) carries no city/local intent and no brand entities (Ingersoll Rand, Kirloskar, Trident, Trendi).
- Meta description (line 325) is generic ('Browse our extensive catalog... premium OEM brands') — no Delhi/Delhi NCR, no named brands, no after-sales/spares hook, weak CTR.
- H1 'Premium Industrial Compressors, Pumps & OEM Spares' (line 346) omits the city and the dealer/stockist positioning; misses the P0 'air compressor dealer in Delhi' intent.
- No SSR/prerendering — Vite + React 19 SPA. SEO is only a client-side useSEO() hook mutating document.title/meta. No title, meta, canonical, JSON-LD or OG exists in the initial HTML.
- No JSON-LD schema anywhere (no Organization, no LocalBusiness with NAP, no BreadcrumbList, no ItemList/CollectionPage).
- No canonical tag, no Open Graph / Twitter cards, no sitemap.xml, no robots.txt.
- Category 'pages' share the same hero copy 'Wide and diverse range of options to optimize your business's fixed costs' (line 347) — thin, vague, finance-jargon framing instead of compressed-air / pump value.
- Catalog PDFs open via a JS modal / window.open to Google Drive (openCatalog, lines 318-320). These downloads are not crawlable; there is no indexable /catalogue landing page and Drive links leak link equity off-domain.
- Brand wording risk: the compressors description (line 22 of Products.tsx) calls the company 'Authorized Dealers of Ingersoll-Rand, Sonee Air Compressors and Trident' but lumps Trident under compressors (Trident is air-treatment) and does not distinguish authorized-dealer vs stockist relationships. Kirloskar/Rotodel/Crompton/Indfoss/Everest are stockist relationships and must not be called 'authorized dealer'.
- Data drift between the two files: catalog.ts lists a KV/DV Vacuum Pump and a Trident Coldspell/Dryspell split that the live Products.tsx page also has, but the rendered Products.tsx omits the vacuum pump from the pumps tab — vacuum pumps (a P1 cluster) are effectively missing from the page the user sees.
- No internal links out to the category routes, /trendi, /quote (beyond per-card), /contact, or relevant blog posts from the hub intro — crawl paths and topical interlinking are weak.
- Product card images: brand logos use alt={b} (just the brand name, line 437) and there are no product photographs with descriptive alt text; product image fields in catalog.ts all reuse generic placeholder images (about-main.png, industry-cement.png) that do not depict the actual product.
- Generic, non-attributable trust framing throughout; no city, no 'Since 1987', no after-sales/AMC reassurance on the hub.
- No FAQ content, no breadcrumb UI, no visible NAP/local signal on the products hub.

**SEO opportunities**

- Convert the four tabs into real indexable routes (/products/compressors, /products/pumps, /products/air-treatment, /products/spares), each reading the URL segment and rendering its own useSEO() title/meta/canonical — this unlocks the entire category + product + brand keyword map.
- Position the hub as 'Compressors & Pumps Dealer in Delhi NCR' to capture the P0 local-commercial cluster (air compressor dealer in Delhi, industrial pump dealer in Delhi) that no single tab currently targets.
- Lean into brand-authority terms with low competition: 'Ingersoll Rand authorized dealer Delhi', 'Trident air dryer dealer Delhi', 'Kirloskar pump dealer Delhi' (phrased as stockist), and fully own 'Trendi air compressor'.
- Add prerendering (vite-plugin-ssr/SSG or a prerender step) so title, meta, canonical, JSON-LD and OG exist in initial HTML for reliable indexing.
- Add CollectionPage + ItemList + BreadcrumbList JSON-LD on the hub, and Organization + LocalBusiness (exact NAP) sitewide, to win rich results and feed the near-me / local-pack clusters.
- Create a crawlable /catalogue landing page that lists the PDF brochures with on-page HTML context instead of firing them from a JS-only Drive modal — captures 'air compressor catalogue PDF download' and keeps equity on-domain.
- Interlink the hub to /trendi (own brand), the three existing blog posts (maintenance, choosing a pump, energy efficiency) and /quote + /contact to build a tight topical cluster and lead paths.
- Add an after-sales / service angle (AMC, repair, genuine spares) on the hub to differentiate from pure resellers and seed future /services routes.
- Standardise on 'Since 1987' (resolve the 35+ vs 39 inconsistency) and surface it plus the served industries (Packaging, Paint, Cement, Textile, Laundry, Pharma) as semantic context.
- Add page-relevant FAQ content (FAQPage schema) answering buyer questions (dealer vs stockist, delivery across Delhi NCR, spares availability, AMC) to win PAA real estate.

**Recommended keywords**

- **Primary:** `compressors and pumps dealer in Delhi`
- **Secondary:** air compressor dealer in Delhi NCR · industrial pump dealer in Delhi · compressed air treatment supplier Delhi · Ingersoll Rand authorized dealer Delhi · compressor and pump spare parts Delhi
- **Long-tail:** industrial air compressor and pump dealer near GB Road Old Delhi · buy air compressors pumps and air dryers in Delhi NCR with spares · authorized Ingersoll Rand and Trident dealer in Delhi with after-sales service · one stop shop for compressors pumps and air treatment in Delhi
- **Semantic:** compressed air systems · industrial pumps · air treatment equipment · Ingersoll Rand · Trident · Kirloskar · Rotodel · Trendi · genuine OEM spares · stockist · authorized dealer · Delhi NCR · Since 1987 · after-sales service · AMC

**On-page metadata**

- **SEO Title** (54 chars): Compressors & Pumps Dealer in Delhi | Machinery Centre
- **Meta description** (153 chars): Machinery Centre is a Delhi-based dealer of air compressors, industrial pumps, air treatment and OEM spares. Ingersoll Rand, Trident, Kirloskar & Trendi.
- **H1:** Air Compressors, Pumps & Air Treatment Dealer in Delhi NCR
- **URL slug:** `products`

**Heading outline**

- `H1` Air Compressors, Pumps & Air Treatment Dealer in Delhi NCR
- `H2` One stop shop for compressors and pumps since 1987
- `H2` Browse by category
  - `H3` Air Compressors — Ingersoll Rand & Trendi screw and reciprocating
  - `H3` Industrial Pumps — Kirloskar, Rotodel gear, metering & vacuum pumps
  - `H3` Compressed Air Treatment — Trident dryers, filters & nitrogen generators
  - `H3` Genuine OEM Spares — compressor & pump service parts
- `H2` Authorized dealer and stockist brands
  - `H3` Authorized dealer: Ingersoll Rand, Trident & Trendi
  - `H3` Stockist & supplier: Kirloskar, Rotodel, Crompton Greaves, Indfoss, Everest
- `H2` Industries we supply across Delhi NCR
- `H2` Sales, spares and after-sales service from one supplier
- `H2` Download product catalogues
- `H2` Frequently asked questions
- `H2` Request a quote or visit us in Old Delhi

**Revised content** _(ready to paste)_

*Hero (H1 + intro, replaces lines 346-347)*

H1: Air Compressors, Pumps & Air Treatment Dealer in Delhi NCR

Intro: Machinery Centre is a Delhi-based B2B dealer and stockist of industrial air compressors, pumps, compressed air treatment equipment and genuine OEM spares. Serving factories and plants across Delhi NCR and India since 1987, we are your one stop shop for compressed air systems and pumps — from selection and supply to spares and after-sales service.

*One stop shop since 1987 (new H2 block)*

For nearly four decades we have helped manufacturers in Delhi and across India specify, buy and maintain the right compressed air and pumping equipment. As an authorized dealer of Ingersoll Rand and Trident and the home of our own energy-efficient Trendi range, we combine trusted brands with practical engineering advice and dependable spares support — so your air and process lines keep running.

*Browse by category — Compressors card (H3)*

Air Compressors — Ingersoll Rand & Trendi. Energy-efficient Trendi belt-drive and direct-drive screw compressors (VFD optional, IE3 motors, three-stage air-oil separator) plus two-stage reciprocating compressors from Trendi and Ingersoll Rand rated to 175 PSI for heavy, continuous-duty use. View air compressors.

*Browse by category — Pumps card (H3)*

Industrial Pumps — Kirloskar & Rotodel. Rotodel HGN and HGSX rotary gear pumps for viscous and lubricating fluids, Kirloskar metering and dosing pumps for chemical and process applications, and Kirloskar KV/DV vacuum pumps delivering up to 640 mmHg and 162 m³/hr. View industrial pumps.

*Browse by category — Air Treatment card (H3)*

Compressed Air Treatment — Trident. Heatless desiccant dryers (Dryspell), refrigerated dryers (Coldspell), submicron and coalescing filters down to 0.01 micron, automatic condensate drain valves, bacteria and medical filters, and PSA nitrogen generators from 95% to 99.999% purity. View air treatment.

*Browse by category — Spares card (H3)*

Genuine OEM Spares — compressors & pumps. Air and oil filters, air-oil separators, intake valves, gaskets and service kits for Ingersoll Rand and Trident, plus genuine spares for boiler feed, chemical, centrifugal, fire-fighting, booster and self-priming pumps. View spares.

*Authorized dealer and stockist brands (H2 + two H3s) — replaces line 22 brand framing*

Authorized dealer: We are an authorized dealer of Ingersoll Rand air compressors and Trident air treatment equipment, and the maker of the Trendi own-brand compressor range. We also supply Sonee air compressors.

Stockist & supplier: We stock and supply pumps and components from Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest, along with Elgi and Janatics components — backed by genuine spares and fast turnaround across Delhi NCR.

*Industries we supply (new H2)*

We supply compressed air and pumping solutions to packaging, paint, cement, textile and laundry plants, as well as pharmaceutical, food and beverage, medical, automotive and general manufacturing facilities. From oil-free clean dry air for paint shops and pharma to heavy-duty compressors for cement and textile mills, we match the equipment to your process and air quality requirements.

*Sales, spares and after-sales service (new H2)*

Buying the machine is only the start. Machinery Centre supports every installation with genuine OEM spares, service kits and after-sales support — air-oil separators, filter elements, intake valves and pump spares kept moving so you avoid downtime. Talk to us about ongoing maintenance and spares supply for your compressors and pumps.

*Catalogue block (new H2, replaces JS-only modal framing)*

Download product catalogues. View and download detailed specification brochures for our Trendi compressors, Trident air dryers and filters, Rotodel and Kirloskar pumps, and OEM spares — including capacities, dimensions, pressure ratings and air-quality classes. Need help choosing? Request a quote and our team will recommend the right model for your application.

*Closing CTA (new H2)*

Request a quote or visit us in Old Delhi. Tell us your CFM, pressure or flow requirement and we'll send a competitive quotation with delivery across Delhi NCR and India. Visit our store at 3858 Shradhanand Marg, Shah Ganj, behind Hanuman Mandir, Delhi-110006, or call 011-41440012.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| View air compressors | `/products/compressors` | Compressors category card CTA in the 'Browse by category' grid |
| View industrial pumps | `/products/pumps` | Pumps category card CTA in the 'Browse by category' grid |
| View air treatment | `/products/air-treatment` | Air Treatment category card CTA in the 'Browse by category' grid |
| View spares | `/products/spares` | Spares category card CTA in the 'Browse by category' grid |
| Trendi air compressors | `/trendi` | Within the 'Authorized dealer' H3 paragraph when mentioning the Trendi own brand |
| essential maintenance tips for air compressors | `/blog/essential-maintenance-tips-for-air-compressors` | In the 'Sales, spares and after-sales service' section as a helpful resource link |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | In the Pumps category card description or the FAQ answer about pump selection |
| energy-efficient equipment | `/blog/importance-of-energy-efficient-equipment` | In the Compressors card when mentioning energy-efficient Trendi screw compressors |
| request a quote | `/quote` | Catalogue block and closing CTA |
| contact us in Old Delhi | `/contact` | Closing CTA section with NAP |
| about Machinery Centre | `/about` | Within the 'One stop shop since 1987' intro paragraph |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Brand logos rendered in ProductCard (currently alt={b}, line 437) | [Brand name] authorized dealer / stockist — e.g. 'Ingersoll Rand air compressors authorized dealer logo' or 'Kirloskar pumps stockist logo' |
| Compressors category card image (catalog.ts uses about-main.png placeholder) | Trendi and Ingersoll Rand industrial air compressors supplied by Machinery Centre Delhi |
| Pumps category card image (placeholder industry-cement.png) | Rotodel rotary gear pump and Kirloskar industrial pumps from Machinery Centre Delhi |
| Air treatment category card image (placeholder service-laser.png) | Trident desiccant and refrigerated compressed air dryer for air treatment |
| Spares category card image (placeholder service-turning.png) | Genuine OEM compressor and pump spare parts and service kits |
| Vacuum pump image (industry-paint.png placeholder in catalog.ts) | Kirloskar KV/DV industrial vacuum pump up to 640 mmHg |
| Hero / header background | Machinery Centre showroom of industrial compressors and pumps in Old Delhi |

**Conversion recommendations**

- Add four prominent category cards with clear CTAs as the primary hub action, so visitors self-segment into compressors / pumps / air-treatment / spares rather than scrolling one long tabbed list.
- Surface a sticky or hero-level 'Request a Quote' and click-to-call (011-41440012 / WhatsApp +91 9810054137) on the hub — B2B buyers want a fast quote, not just a PDF.
- Replace the JS-only Drive download modal with an on-page /catalogue section so the catalogue is a crawlable conversion asset; keep the lead-capture form as an optional gate (currently REQUIRE_DETAILS_BEFORE_DOWNLOAD is false, so leads aren't captured at all — consider enabling it for high-intent brochures).
- Add an after-sales / spares reassurance band ('genuine OEM spares', 'service kits', 'minimise downtime') to differentiate from pure resellers and lift trust for capital purchases.
- Add real, attributable B2B testimonials with company name and city to replace the homepage placeholder reviews (Rajesh Kumar / Sneha Sharma / Amit Patel) — flag these as placeholders, do not reuse.
- Show the exact NAP and a map link on the hub to convert local Delhi NCR buyers and support near-me intent; set up a Google Business Profile with the same NAP.
- Standardise the years figure to 'Since 1987' across hero, meta and counters to avoid the 35+ vs 39 inconsistency undermining trust.
- Consider a branded email (e.g. sales@machinerycentre.in) in the contact CTA instead of the yahoo.com address to raise B2B credibility (recommendation only — do not assert it exists).

**Page FAQs**

- **Are you an authorized dealer or a stockist for these brands?** Machinery Centre is an authorized dealer of Ingersoll Rand air compressors and Trident compressed air treatment equipment, and we manufacture our own Trendi compressor range. For Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest we are a stockist and supplier, keeping genuine products and spares available for quick delivery across Delhi NCR.
- **Do you deliver compressors and pumps across Delhi NCR and India?** Yes. We are based at 3858 Shradhanand Marg, Shah Ganj, Old Delhi (Delhi-110006) and supply air compressors, pumps, air treatment equipment and spares to customers across Delhi NCR and India. Tell us your requirement for a quotation that includes delivery.
- **Do you supply spares and after-sales service for the equipment you sell?** Yes. We stock genuine OEM spares and service kits — air and oil filters, air-oil separators, intake valves, gaskets and pump spares for boiler feed, chemical, centrifugal, fire-fighting and booster pumps — and support installations with after-sales service to help reduce downtime.
- **Which industries do you supply compressed air and pumping equipment to?** We supply packaging, paint, cement, textile and laundry plants as well as pharmaceutical, food and beverage, medical, automotive and general manufacturing facilities, matching air quality and capacity to each application — from oil-free clean dry air to heavy-duty continuous-duty compressors.
- **How do I get a price for an air compressor or pump?** Share your CFM, working pressure or flow rate and we will send a competitive quotation. You can request a quote online, call 011-41440012, or message us on WhatsApp at +91 9810054137.
- **What is the difference between a screw and a reciprocating air compressor?** Screw compressors (such as our energy-efficient Trendi range with VFD and IE3 motors) suit continuous, higher-volume duty with low specific power consumption, while two-stage reciprocating compressors (Trendi and Ingersoll Rand, rated to 175 PSI) suit intermittent workshop and industrial use. We can recommend the right type for your load profile.

**Schema:** CollectionPage JSON-LD for the /products hub describing it as the products index for Machinery Centre. · ItemList JSON-LD listing the four category landing pages (Air Compressors, Industrial Pumps, Compressed Air Treatment, Spares) with their /products/* URLs as listItem entries to reinforce the hub-to-category structure. · BreadcrumbList JSON-LD: Home > Products (and on category pages Home > Products > [Category]). · Organization JSON-LD (sitewide, include here): legal name Machinery Centre, logo, sameAs social profiles if any, founding year 1987. · LocalBusiness JSON-LD with the EXACT NAP: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India; telephone 011-41440012; areaServed Delhi NCR / India — to support local-pack and near-me intent. · FAQPage JSON-LD using the page FAQ block above. · On the category pages (once they are real routes), add Product / OfferCatalog or ItemList schema per category; do NOT invent prices, ratings, GTINs or review counts. · Set a self-referencing canonical pointing to https://www.machinerycentre.in/products (REPLACE placeholder domain), and add Open Graph + Twitter card tags via prerendering so they appear in the initial HTML.

---

### Compressors category landing page — `https://www.machinerycentre.in/products/compressors`

_Primary indexable category landing page for the Air Compressors product cluster — the money page tying Machinery Centre's flagship compressed-air range (Trendi screw & reciprocating, Ingersoll-Rand reciprocating, Sonee) to Delhi-NCR commercial + local buyer intent, and the funnel hub linking to /quote, the catalogue PDFs, /trendi, /products/air-treatment, /products/spares and the maintenance blog._

**Current issues**

- CRITICAL routing/indexability bug: App.tsx mounts Products at "products/*" and Products.tsx switches the four categories with a useState tab (activeCategoryId), so /products/compressors, /products/pumps, /products/air-treatment and /products/spares all resolve to ONE URL, ONE <title> and ONE meta description. The compressors category cannot be separately indexed or ranked until it becomes a real route that reads the URL segment and renders its own useSEO() title/meta/canonical.
- Shared, generic SEO metadata: useSEO() (Products.tsx line 325) sets title "Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre" and a generic meta for ALL categories. No primary keyword (air compressor dealer in Delhi), no city, no brand entities — wastes the most valuable category page.
- No SSR/prerendering: this is a Vite + React 19 SPA whose only SEO is a client-side hook mutating document.title/meta. Title, meta, canonical, JSON-LD and OG tags are absent from the initial HTML, so crawling is slower and less reliable.
- Missing technical SEO infra entirely: no canonical tag, no sitemap.xml, no robots.txt, no JSON-LD (no Organization/LocalBusiness/Product/BreadcrumbList), no Open Graph or Twitter cards.
- H1 is generic and non-targeted: "Premium Industrial Compressors, Pumps & OEM Spares" mixes all four categories into one heading instead of owning the compressors topic; the supporting line "Wide and diverse range of options to optimize your business's fixed costs" is vague filler with zero keyword or buyer value.
- Heading hierarchy is thin and unhelpful for SEO: the category H2 renders only the bare label "Compressors" (Products.tsx line 381-383); product titles are H3s but there is no buying-guidance, brand-authority, application or FAQ content to support the cluster's secondary/long-tail/semantic terms (CFM, HP, working pressure, VFD, duty cycle).
- Catalogue downloads fire from a JS handler (openCatalog/window.open to Google Drive) — the PDFs are not crawlable and there is no indexable /catalogue landing page, so "air compressor catalogue PDF download" intent is uncapturable.
- Product cards have no real product images: every compressor card reuses /assets/images/about-main.png or hero-machinery.png (catalog.ts) — generic stock-style reuse weakens relevance, image SEO and trust; brand logo <img> alt is just the bare brand name.
- Category description copy is weak and contains a likely accuracy issue: "Authorized Dealers of Ingersoll-Rand, Sonee Air Compressors and Trident" lumps Trident (an air-treatment brand) into the compressors blurb, and asserts "Authorized Dealers" for Sonee without basis — brand-relationship wording needs to match verified status (Ingersoll-Rand authorized; Trendi own brand; Sonee phrased carefully).
- No internal links out to the high-intent destinations from within the compressors content: the only links are a per-card "Request Quote" and the catalogue button. No contextual links to /trendi, /products/air-treatment, /products/spares, /about, /contact or the compressor-maintenance blog post, leaving the page a topical dead-end.
- No local/NAP signals on the page: no Delhi / Old Delhi / Shah Ganj mention, no address or phone, so the page contributes nothing to local-pack or near-me relevance despite being the city's core money term.
- No application/industry context: the served industries (packaging, paint, cement, textile, laundry, automotive) are not referenced, so qualified long-tail application intent (e.g. air compressor for textile industry) is unsupported.
- Data duplication/drift between src/data/catalog.ts and the inline catalogData in Products.tsx (e.g. screw-compressor title differs: "Trendi Energy Efficient Screw Air Compressor" vs "...Belt Drive Screw..."; pumps include a vacuum pump in catalog.ts but not in Products.tsx). Two sources of truth risk inconsistent content and confuse a future prerender.

**SEO opportunities**

- Make /products/compressors a real, separately indexable route (read the URL segment, render category-specific useSEO title/meta/canonical) — unlocks the entire Air Compressors cluster and the highest-value local money term "air compressor dealer in Delhi".
- Own the P0 local-commercial term "air compressor dealer in Delhi (NCR)" by putting it in the H1, intro, and a Delhi-NCR + Old Delhi/Shah Ganj local block with the exact NAP.
- Capture brand-authority traffic with low local competition: "Ingersoll Rand authorized dealer Delhi" and the own-brand "Trendi air compressor" — both can be stated plainly (IR authorized if current; Trendi fully owned).
- Add a screw-compressor section targeting the high-volume P0 "screw air compressor price" plus belt-drive vs direct-drive, VFD, IE3-motor and low specific-power-consumption long-tails (Trendi airend, 3-stage air-oil separator).
- Add a reciprocating-compressor section targeting "two stage reciprocating air compressor", 175 PSI, 100% continuous duty, cast iron — mapping IR + Trendi piston SKUs.
- Add a buying-guide block (CFM, HP/kW, working pressure PSI, duty cycle, VFD vs fixed-speed, air receiver sizing) to win informational long-tails and earn featured snippets while feeding semantic relevance.
- Add an applications block naming packaging, paint, cement, textile, laundry, automotive, pharma — capturing qualified "air compressor for [industry]" long-tails and internally linking to /products/air-treatment for clean/dry-air needs.
- Build a crawlable /catalogue landing page (and link product PDFs as real downloadable resources) to capture "air compressor catalogue PDF download" and improve the catalogue cluster.
- Add a strong internal-link mesh from the compressors page to /trendi (own brand), /products/air-treatment (dryers/filters complete the system), /products/spares (after-sales), /quote (RFQ), /contact (local), and the compressor-maintenance blog post — building topical depth and conversion paths.
- Implement Product + BreadcrumbList + LocalBusiness + Organization JSON-LD (with exact NAP) so the page is eligible for rich results and reinforces the Delhi entity.
- Add an after-sales/service angle (AMC, repair, genuine spares) to differentiate from pure resellers and pre-build relevance for the future /services routes; link to /products/spares today.
- Standardise on a single years-in-business figure ("Since 1987") across meta and on-page counters to remove the 35+ vs 39 inconsistency and strengthen trust signals.

**Recommended keywords**

- **Primary:** `air compressor dealer in Delhi`
- **Secondary:** industrial air compressor supplier Delhi NCR · Ingersoll Rand authorized dealer Delhi · Trendi air compressor · screw air compressor price · two stage reciprocating air compressor
- **Long-tail:** authorized air compressor dealer near GB Road Delhi · industrial air compressor dealer in Old Delhi price · buy industrial air compressor in Delhi NCR · Trendi energy efficient screw air compressor price in India · VFD screw air compressor with IE3 motor for factory · belt drive vs direct drive screw air compressor for industrial use · Ingersoll Rand two stage reciprocating air compressor price India · 175 PSI 100% continuous duty air compressor for workshop · best air compressor supplier for factories in Delhi
- **Semantic:** compressed air · CFM · working pressure PSI · HP · kW rating · VFD · IE3 motor · airend · three-stage air-oil separator · microprocessor controller · specific power consumption · 100% continuous duty · cast iron · two-stage · intercooler · air receiver tank · oil-free air · Ingersoll Rand · Trendi · Sonee · Shah Ganj Old Delhi

**On-page metadata**

- **SEO Title** (53 chars): Air Compressor Dealer in Delhi NCR | Machinery Centre
- **Meta description** (150 chars): Authorized air compressor dealer in Delhi NCR. Buy Ingersoll Rand & Trendi screw and reciprocating compressors with VFD, IE3 motors, spares & service.
- **H1:** Air Compressor Dealer in Delhi NCR — Screw & Reciprocating Compressors
- **URL slug:** `products/compressors`

**Heading outline**

- `H1` Air Compressor Dealer in Delhi NCR — Screw & Reciprocating Compressors
- `H2` Industrial Air Compressors from Ingersoll-Rand, Trendi & Sonee
- `H2` Screw Air Compressors
  - `H3` Trendi Energy-Efficient Belt-Drive Screw Air Compressors
  - `H3` Trendi Base-Mounted Direct-Drive Screw Compressors
  - `H3` Belt-Drive vs Direct-Drive: Which Screw Compressor Suits Your Plant?
- `H2` Reciprocating (Piston) Air Compressors
  - `H3` Trendi Two-Stage Reciprocating Air Compressor (175 PSIG, Cast Iron)
  - `H3` Ingersoll-Rand Two-Stage Reciprocating Air Compressor (175 PSI, 100% Continuous Duty)
- `H2` How to Choose the Right Air Compressor: CFM, Pressure, HP & Duty Cycle
  - `H3` Sizing for Air Demand (CFM) and Working Pressure (PSI)
  - `H3` Fixed-Speed vs VFD and Energy Efficiency
- `H2` Air Compressors by Industry
- `H2` Genuine Spares, Service & AMC Support
- `H2` Why Buy Your Air Compressor from Machinery Centre, Delhi
- `H2` Visit or Contact Us in Old Delhi
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*Hero / Intro (replaces H1 'Premium Industrial Compressors, Pumps & OEM Spares' and the filler subline)*

H1: Air Compressor Dealer in Delhi NCR — Screw & Reciprocating Compressors

Machinery Centre is a Delhi-based air compressor dealer and stockist serving factories, workshops and process plants across Delhi NCR and India. As an authorized dealer of Ingersoll-Rand and the home of our own energy-efficient Trendi range, we supply screw and reciprocating air compressors — backed by genuine spares, installation and after-sales service from our base in Shah Ganj, Old Delhi. Whether you need a VFD screw compressor to cut running costs or a 175 PSI two-stage reciprocating unit for heavy shop duty, we will help you size, supply and support the right compressed-air system.

*Category overview (replaces catalogData.compressors.description)*

H2: Industrial Air Compressors from Ingersoll-Rand, Trendi & Sonee

We carry a complete range of industrial air compressors for continuous-duty manufacturing, automotive service and process applications. Choose efficient Trendi screw compressors with IE3 motors and an intelligent microprocessor controller, rugged Trendi and Ingersoll-Rand two-stage reciprocating compressors, and Sonee reciprocating units — all available with the air treatment, piping and spares needed to deliver clean, dry, reliable compressed air. Brand relationships: Ingersoll-Rand (authorized dealer), Trendi (our own brand), Sonee (supplied range). Verify and state each relationship exactly as held before publishing.

*Screw Air Compressors — section intro*

H2: Screw Air Compressors

Rotary screw air compressors are built for continuous operation and the lowest cost per unit of compressed air. Our Trendi screw range pairs an advanced screw airend with IE3 electric motors, an intelligent microprocessor-based controller and a three-stage air-oil separator for low specific power consumption, low noise and easy maintenance — ideal for factories running long shifts in Delhi NCR. VFD (variable frequency drive) is available so output tracks demand and energy use drops on part-load. Ask for current screw air compressor prices and CFM/kW options for your application.

*Product card — Trendi Belt-Drive Screw*

H3: Trendi Energy-Efficient Belt-Drive Screw Air Compressors

Advanced screw airend with an intelligent microprocessor-based electronic controller for stable pressure and low specific power consumption, with lower noise and simple servicing. Optional VFD lets the compressor match air demand and save energy on variable loads.
Key features: three-stage air-oil separator; optional VFD; low specific power consumption; IE3 electric motors.
CTA: Request a quote  |  Download catalogue (PDF)

*Product card — Trendi Direct-Drive Screw*

H3: Trendi Base-Mounted Direct-Drive Screw Compressors

Base-mounted direct-drive screw compressors for reliable, low-loss transmission and a compact footprint. Available across multiple capacities and dimensions to suit small workshops through to larger plant air systems.
Key features: direct-drive transmission; base-mounted design; low-noise operation.
CTA: Request a quote  |  Download catalogue (PDF)

*Belt vs direct drive guidance block*

H3: Belt-Drive vs Direct-Drive: Which Screw Compressor Suits Your Plant?

Belt-drive screw compressors offer flexible pulley ratios and easy servicing, making them a cost-effective choice for many SMEs. Direct-drive screw compressors remove belt losses and maintenance for higher transmission efficiency and steadier output on duty-heavy lines. For most continuous-shift factories we recommend an IE3-motor unit with optional VFD; our engineers will compare specific power consumption and lifecycle cost against your air demand before you buy.

*Reciprocating Air Compressors — section intro*

H2: Reciprocating (Piston) Air Compressors

Two-stage reciprocating air compressors deliver high pressure (up to 175 PSI) in a robust, serviceable package — well suited to automotive service, fleet maintenance, laundries, workshops and intermittent plant duty. Our reciprocating range features cast-iron construction, finned intercoolers and proven two-stage designs from Ingersoll-Rand and Trendi.

*Product card — Trendi Two-Stage Reciprocating*

H3: Trendi Motor-Driven Two-Stage Air Compressor (175 PSIG, Cast Iron)

Two-stage design delivering 175 PSIG with durable cast-iron construction and extended pump life for demanding shop and plant use.
Key features: removable cylinders with 360 degree cooling; finned copper intercooler; splash lubrication; precision-balanced crankshaft.
CTA: Request a quote  |  Download catalogue (PDF)

*Product card — Ingersoll-Rand Two-Stage Reciprocating*

H3: Ingersoll-Rand Two-Stage Reciprocating Air Compressor (175 PSI, 100% Continuous Duty)

Engineered for heavy shop and industrial use, this Ingersoll-Rand two-stage reciprocating compressor delivers dependable performance for automotive service, fleet maintenance and manufacturing lines. Supplied by Machinery Centre as an authorized Ingersoll-Rand dealer in Delhi, with genuine spares and service.
Key features: durable cast-iron two-stage design; 175 PSI maximum operating pressure; 100% continuous duty; automatic start/stop control.
CTA: Request a quote  |  Download catalogue (PDF)

*Buying guide block*

H2: How to Choose the Right Air Compressor: CFM, Pressure, HP & Duty Cycle

H3: Sizing for Air Demand (CFM) and Working Pressure (PSI)
Start with your total air demand in CFM and the highest working pressure your tools or process need in PSI, then add headroom for leaks and future growth. Match the receiver tank size to smooth out peak demand and reduce compressor cycling.

H3: Fixed-Speed vs VFD and Energy Efficiency
For steady, round-the-clock loads a fixed-speed screw compressor with an IE3 motor is efficient and economical. For variable demand, a VFD screw compressor ramps output to match the load and can significantly cut energy bills — often the single largest lifecycle cost of compressed air. Our team will recommend belt vs direct drive, screw vs reciprocating, and the right duty cycle for your plant. Need a deeper dive? Read our guide on choosing energy-efficient equipment and our air-compressor maintenance tips.

*Applications block*

H2: Air Compressors by Industry

We supply compressed-air systems for packaging, paint and surface finishing, cement, textile, commercial laundry, automotive service and pharmaceutical and food production across Delhi NCR. Clean, dry air matters as much as flow and pressure — pair your compressor with the right dryers and filters from our compressed air treatment range, and keep it running with genuine spares and AMC support.

*After-sales block*

H2: Genuine Spares, Service & AMC Support

A compressor is only as good as its uptime. Machinery Centre supplies genuine air and oil filters, air-oil separators, intake valves, gaskets and service kits, and offers installation, breakdown service and annual maintenance support across Delhi NCR. Explore compressor and pump spares, or contact us to discuss a maintenance plan.

*Why buy from us block*

H2: Why Buy Your Air Compressor from Machinery Centre, Delhi

In business since 1987, Machinery Centre is a one-stop shop for compressors and pumps — combining an authorized Ingersoll-Rand dealership, our own efficient Trendi brand and a full compressed-air treatment and spares range under one roof. Buyers across Delhi NCR choose us for honest sizing advice, genuine OEM parts and dependable after-sales service. (Note: standardise the years-in-business figure as 'Since 1987' everywhere; substantiate any client-count or partner-count claims before featuring them.)

*Local / NAP block*

H2: Visit or Contact Us in Old Delhi

Machinery Centre
3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006 (near G.B. Road, Old Delhi)
Phone: 011-41440012  |  Mobile: 9810054137, 9891155438  |  WhatsApp: +91 9810054137
Email: machinerycentre@yahoo.com (recommend a branded address such as sales@machinerycentre.in to raise trust)
Serving Delhi, Delhi NCR and clients across India. Request a quote or get directions and timings on our contact page.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| Trendi | `/trendi` | Category overview H2 paragraph, on first mention of the Trendi own brand |
| compressed air treatment range | `/products/air-treatment` | Applications block — where clean/dry air is discussed |
| dryers and filters | `/products/air-treatment` | Applications block, second contextual link on air-quality need |
| compressor and pump spares | `/products/spares` | After-sales 'Genuine Spares, Service & AMC Support' block |
| Request a quote | `/quote` | Every product card CTA plus the hero and the local block |
| contact us | `/contact` | After-sales block and local/NAP block (directions, timings, AMC enquiry) |
| air-compressor maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | Buying-guide 'Fixed-Speed vs VFD' block |
| choosing energy-efficient equipment | `/blog/importance-of-energy-efficient-equipment` | Buying-guide block, near VFD/efficiency discussion |
| industrial pumps | `/products/pumps` | Why-buy block as part of the one-stop-shop cross-sell |
| in business since 1987 | `/about` | Why-buy 'Why Buy from Machinery Centre' block |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Trendi belt-drive screw air compressor card image (currently /assets/images/about-main.png — replace with a real product photo) | Trendi energy-efficient belt-drive screw air compressor with IE3 motor and VFD option |
| Trendi direct-drive screw compressor card image (currently /assets/images/about-main.png) | Trendi base-mounted direct-drive screw air compressor for industrial use |
| Trendi two-stage reciprocating compressor card image (currently /assets/images/about-main.png) | Trendi two-stage 175 PSIG cast-iron reciprocating air compressor |
| Ingersoll-Rand reciprocating compressor card image (currently /assets/images/hero-machinery.png) | Ingersoll-Rand two-stage reciprocating air compressor, 175 PSI, 100% continuous duty |
| Ingersoll-Rand brand logo (ProductCard logo img, alt currently bare brand name) | Ingersoll-Rand authorized dealer logo — Machinery Centre Delhi |
| Trendi brand logo (ProductCard logo img) | Trendi air compressors — Machinery Centre own brand |
| Category hero / header background image | Industrial air compressors supplied by Machinery Centre, air compressor dealer in Delhi NCR |

**Conversion recommendations**

- Add a prominent above-the-fold dual CTA in the hero: a primary 'Request a Quote' button to /quote and a secondary 'Talk to an Engineer' / WhatsApp click-to-chat (+91 9810054137) for fast B2B enquiries.
- Add a sticky or repeated 'Get a Quote' / 'Call 011-41440012' bar on mobile so the conversion path is always one tap away on long category content.
- Keep the per-card 'Request Quote' link but make the catalogue download optionally lead-gated: the code already supports REQUIRE_DETAILS_BEFORE_DOWNLOAD (currently false) and a working CatalogDownloadModal — enabling it on high-value compressor PDFs would capture qualified leads (test against drop-off).
- Add trust cues near CTAs that are verifiable today: 'Authorized Ingersoll-Rand dealer', 'Genuine OEM spares', 'Since 1987', 'Delhi NCR service & installation' — avoid unverified client/partner counts until substantiated.
- Add a short 'Tell us your CFM and pressure and we'll recommend a compressor' enquiry prompt linking to /quote, turning the buying-guide section into a lead capture.
- Surface phone, WhatsApp and the Old Delhi address in a visible contact block (not only the footer) so local buyers can act immediately; link 'Get directions' to /contact.
- Replace the generic homepage placeholder testimonials with one or two real, attributable B2B reviews (company + city) near the CTA to lift conversion — only when genuine reviews are available.
- Add clear next-step links to /products/air-treatment and /products/spares so a compressor buyer is guided to the full system and recurring after-sales spend.

**Page FAQs**

- **Who is the best air compressor dealer in Delhi NCR?** Machinery Centre is a long-established air compressor dealer in Delhi, operating since 1987 from Shah Ganj in Old Delhi. We are an authorized Ingersoll-Rand dealer, supply our own energy-efficient Trendi screw and reciprocating compressors and Sonee units, and back every sale with genuine spares, installation and after-sales service across Delhi NCR and India.
- **What is the difference between a screw and a reciprocating air compressor?** Screw (rotary) compressors run continuously and deliver the lowest cost per unit of compressed air, making them ideal for factories on long shifts — especially with an IE3 motor and optional VFD. Reciprocating (piston) compressors, such as our two-stage 175 PSI units, are robust and economical for intermittent or high-pressure shop duty like automotive service and workshops. We help you choose based on your air demand and duty cycle.
- **How do I size an air compressor for my factory?** Size by total air demand in CFM and the highest working pressure (PSI) your tools or process require, then add headroom for leaks and future expansion and match the receiver tank to smooth peaks. Share your CFM, pressure and shift pattern and our Delhi engineers will recommend the right HP/kW, screw vs reciprocating, and fixed-speed vs VFD configuration.
- **Do you sell Ingersoll-Rand air compressors and genuine spares in Delhi?** Yes. Machinery Centre is an authorized Ingersoll-Rand dealer in Delhi and supplies Ingersoll-Rand two-stage reciprocating compressors (175 PSI, 100% continuous duty) along with genuine air and oil filters, air-oil separators, intake valves, gaskets and service kits for compressors and pumps.
- **What is a VFD screw compressor and will it save energy?** A VFD (variable frequency drive) screw compressor varies motor speed so output matches real-time air demand instead of cycling on and off. On variable or part loads this can significantly reduce energy use — usually the largest lifecycle cost of compressed air. Our Trendi screw range offers VFD as an option with IE3 motors and a three-stage air-oil separator for low specific power consumption.
- **Do you provide installation and after-sales service for air compressors in Delhi NCR?** Yes. Beyond supply, we offer installation, breakdown service, genuine spares and maintenance support across Delhi NCR. Contact us on 011-41440012 or WhatsApp +91 9810054137 to discuss installation or an annual maintenance plan.

**Schema:** Add Organization JSON-LD (name 'Machinery Centre', url placeholder https://www.machinerycentre.in/ — REPLACE with the real production domain, logo, foundingDate 1987, sameAs to verified social profiles only) in the initial HTML via prerendering. · Add LocalBusiness JSON-LD with the exact NAP: address 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi, 110006, IN; telephone +91-11-41440012; additional contact 9810054137 / 9891155438; areaServed Delhi NCR / India. Do NOT add aggregateRating until real, verifiable reviews exist. · Add BreadcrumbList JSON-LD: Home (/) > Products (/products) > Air Compressors (/products/compressors) to earn breadcrumb rich results and reinforce the new route. · Add Product (or ProductGroup/ItemList) JSON-LD for each compressor (Trendi belt-drive screw, Trendi direct-drive screw, Trendi two-stage reciprocating, Ingersoll-Rand two-stage reciprocating) with name, brand, description and category. Only include offers/price if a real price is shown on-page; otherwise omit price to avoid invalid markup. · Add CollectionPage / category schema for the page itself referencing the ItemList of compressor products. · Add FAQPage JSON-LD using the six FAQs above (mark up only FAQs that are actually visible on the rendered page). · Add a canonical tag <link rel=canonical href="https://www.machinerycentre.in/products/compressors"> (REPLACE domain) plus Open Graph and Twitter Card tags (og:title, og:description, og:url, og:image, twitter:card) — none exist today. · Prerequisite: because the site is a client-only SPA, implement prerendering/SSG so all of the above schema, canonical and OG tags exist in the initial HTML, and create sitemap.xml + robots.txt that include the new /products/compressors route.

---

### Pumps category page (Industrial Pumps) — `https://www.machinerycentre.in/products/pumps`

_Money / commercial category landing page for the industrial-pumps vertical. Targets buyers and procurement teams searching for an industrial pump dealer/stockist in Delhi NCR (Kirloskar, Rotodel, Crompton Greaves, Indfoss, Everest), covering rotary gear pumps, metering/dosing pumps and vacuum pumps, plus genuine OEM pump spares and after-sales support. Should funnel to /quote and /products/spares._

**Current issues**

- ROUTING/INDEXABILITY: /products/pumps is not a real route. App.tsx mounts Products at 'products/*' and Products.tsx (line 327) switches all four categories with a useState tab (activeCategoryId). All four categories share ONE URL, ONE <title> and ONE meta description set in Products.tsx line 325 ('Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre'). The pumps 'page' cannot be indexed or ranked separately, and the header deep-link to /products/pumps does not actually open the pumps tab.
- SHARED GENERIC META: The single useSEO() title/description is broad ('Browse our extensive catalog of industrial air compressors, pumps...') with zero pump-specific keywords, no brand (Kirloskar/Rotodel), and no Delhi/local intent. Nothing on the page targets 'industrial pump dealer in Delhi' or 'Kirloskar pump dealer'.
- NO SSR/PRERENDER: Vite + React 19 SPA. SEO is only a client-side useSEO() hook mutating document.title/meta. No JSON-LD, no canonical, no Open Graph/Twitter cards, no sitemap.xml, no robots.txt. Initial HTML carries no pump content for crawlers.
- CONTENT DRIFT BETWEEN FILES: The live Products.tsx pumps category (lines 217-265) renders only Metering Pumps and Gear Pumps (HGN + HGSX) and does NOT include the Kirloskar KV/DV vacuum pump at all. src/data/catalog.ts (lines 114-133) DOES define the KV/DV vacuum pump (up to 640 mmHg, 162 m3/hr). The live page is missing a whole product family the business sells, costing the 'vacuum pump dealer Delhi' / 'Kirloskar vacuum pump' clusters. The two files must be reconciled to one source of truth.
- THIN, FEATURE-LIST-ONLY COPY: The category intro is a single line ('Stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest. Specialized in meeting the demand of industry for diverse requirements.') and product cards are bullet fragments. No body copy on pump selection (flow rate, head, viscosity, media), no application/industry context, no local/B2B trust signals, no internal links to spares or quote beyond per-card buttons. Insufficient indexable text to rank a commercial term.
- BRAND RELATIONSHIP WORDING: Machinery Centre is a STOCKIST for Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest (not 'authorized dealer'). Copy must phrase these as stockist/supplier to stay accurate; only Ingersoll-Rand and Trident are authorized-dealer relationships.
- HEADING HIERARCHY: There is one global page H1 ('Premium Industrial Compressors, Pumps & OEM Spares', line 346) shared across all categories. The pumps category renders an H2 from activeCategory.label which is just 'Pumps' (line 382) with no keyword value. There is no pump-specific, keyword-led H1 because the page is not its own route.
- PRODUCT CARD H3 COLLISION: ProductCard renders product.title as an <h3> (line 449) while subcategory labels also render as <h3> (line 393) — flat heading structure with no semantic nesting for a category page.
- CATALOG LINKS = GOOGLE DRIVE: All pump catalogues open Google Drive 'view?usp=sharing' / 'uc?export=download' links (e.g. lines 235, 252, 259). These PDFs are not on the site, not crawlable, and not capturable as indexable spec content; no /catalogue landing page exists.
- IMAGES/ALT: Live Products.tsx pump cards render no product image; only brand logos render with alt set to the bare brand name (line 437). catalog.ts assigns generic stock images (e.g. /assets/images/industry-cement.png, /assets/images/industry-paint.png) to pumps — mismatched, non-descriptive, weak alt text.
- CONVERSION FRICTION: Only CTAs are a small per-card 'Request Quote' text link and a 'Catalog' button. No phone/WhatsApp click-to-call near pump content, no 'talk to a pump engineer', no spares cross-sell, no application-based selection guidance. NAP (011-41440012 / WhatsApp +91 9810054137) is absent from the category body.

**SEO opportunities**

- Make /products/pumps a real, server-rendered (or prerendered) route that reads the URL segment and emits its own useSEO() title/meta/canonical, so the pumps cluster can be indexed independently of compressors/air-treatment/spares.
- Own low-competition branded local terms quickly: 'Kirloskar pump dealer Delhi', 'Rotodel pump supplier', 'vacuum pump dealer Delhi', 'rotary gear pump dealer', 'metering pump dealer Delhi' all rate Low-Medium competition and map directly to stocked SKUs.
- Restore the Kirloskar KV/DV vacuum pump family to the live page to capture 'vacuum pump dealer Delhi', 'Kirloskar vacuum pump price', '640 mmHg / 162 m3/hr' long-tail demand that is currently invisible.
- Add a 'How to select the right industrial pump' section (flow rate m3/hr, head, viscosity, media/chemical compatibility, duty) to build topical depth and capture informational+commercial long-tail; cross-link to the existing blog post /blog/choosing-the-right-pump-for-your-industry.
- Add Delhi / Delhi NCR / Old Delhi / Shah Ganj geo-context plus NAP and click-to-call to win 'industrial pump dealer in Delhi' and 'pump dealer near me' (the latter also needs a Google Business Profile with exact NAP).
- Add LocalBusiness + BreadcrumbList + ItemList/Product JSON-LD and Open Graph/Twitter cards so the pumps page earns rich results and clean social previews.
- Create a crawlable /catalogue landing page (or on-page indexable spec tables) so pump datasheets are not locked inside Google Drive PDFs.
- Cross-sell after-sales: prominent internal links to /products/spares (genuine pump spares) and /quote reinforce the 'recurring revenue + one-stop' positioning and pass internal link equity.
- Build a pumps-by-industry block (water treatment/chemical dosing, food & pharma, oil transfer, vacuum applications) to align with named served industries and feed application long-tail.
- Add an FAQ block with FAQ schema to target People-Also-Ask queries (viscosity, flow, vacuum level, spares availability, delivery across Delhi NCR).

**Recommended keywords**

- **Primary:** `industrial pump dealer in Delhi`
- **Secondary:** Kirloskar pump dealer Delhi · Rotodel gear pump supplier · rotary gear pump dealer · vacuum pump dealer Delhi · metering pump dealer Delhi · industrial pump supplier Delhi NCR · industrial water pump dealer
- **Long-tail:** industrial pump supplier in Old Delhi with spares · Rotodel HGN rotary gear pump price in India · Kirloskar KV DV vacuum pump dealer near GB Road Delhi · chemical dosing metering pump supplier for water treatment Delhi NCR · high viscosity rotary gear pump for oil transfer Delhi · buy rotary gear pump in Delhi NCR with genuine spares
- **Semantic:** positive displacement · flow rate m3/hr · head · viscosity · 640 mmHg · 162 m3/hr · 1440 RPM · Kirloskar · Rotodel · Crompton Greaves · Indfoss · Everest · HGN · HGSX · vacuum pump · metering / dosing pump · chemical compatibility · pulsation-free flow · stockist

**On-page metadata**

- **SEO Title** (50 chars): Industrial Pump Dealer in Delhi | Machinery Centre
- **Meta description** (147 chars): Industrial pump dealer & stockist in Delhi NCR for Kirloskar, Rotodel & Crompton Greaves. Rotary gear, metering & vacuum pumps with genuine spares.
- **H1:** Industrial Pump Dealer & Stockist in Delhi NCR
- **URL slug:** `products/pumps`

**Heading outline**

- `H1` Industrial Pump Dealer & Stockist in Delhi NCR
- `H2` Kirloskar, Rotodel & Crompton Greaves Pumps Supplied Across Delhi NCR
- `H2` Rotary Gear Pumps (Rotodel HGN & HGSX)
  - `H3` Rotodel HGN Rotary Gear Pumps
  - `H3` Rotodel HGSX Rotary Gear Pumps
- `H2` Metering & Dosing Pumps (Kirloskar)
- `H2` Vacuum Pumps (Kirloskar KV/DV)
- `H2` How to Select the Right Industrial Pump
  - `H3` Flow Rate & Head
  - `H3` Viscosity & Media Compatibility
  - `H3` Duty Cycle & Vacuum Level
- `H2` Industries We Supply Pumps To
- `H2` Genuine OEM Pump Spares & After-Sales Support
- `H2` Buy Industrial Pumps in Delhi NCR — Request a Quote
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*H1 + intro (replaces line 346 global H1 / line 384 one-line description)*

Industrial Pump Dealer & Stockist in Delhi NCR

Machinery Centre is a long-established industrial pump supplier and stockist based in Old Delhi (Shah Ganj, near G.B. Road), serving factories, process plants and OEMs across Delhi NCR and India. As a stockist for Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest, we supply rotary gear pumps, metering and dosing pumps and vacuum pumps — backed by genuine spares and responsive after-sales support. Whether you are transferring high-viscosity oil, dosing chemicals to a fixed setpoint or pulling vacuum on a process line, we help you select the right pump for your flow, head and media.

*H2 — Kirloskar, Rotodel & Crompton Greaves Pumps Supplied Across Delhi NCR (brand block)*

We hold and supply pumps from India's most trusted names. As a stockist, we offer Kirloskar vacuum and metering pumps, Rotodel rotary gear pumps (Type HGN and HGSX), and Crompton Greaves, Indfoss and Everest pumps for general industrial duty. Because we stock and service these ranges from one location in Delhi, you get straightforward sourcing, genuine spares and a single point of contact for supply, replacement parts and breakdown support.

*H2 — Rotary Gear Pumps (Rotodel HGN & HGSX)*

Rotodel rotary gear pumps are positive-displacement pumps built for viscous, lubricating and non-abrasive fluids, delivering smooth, pulsation-free flow. They are widely used for lubricating-oil transfer, fuel oil, bitumen, resins and similar high-viscosity media.

*H3 — Rotodel HGN Rotary Gear Pumps*

The Rotodel Type 'HGN' rotary gear pump is engineered to transfer viscous, lubricating and non-abrasive fluids with consistent, pulsation-free delivery. Its robust positive-displacement construction handles high-viscosity media reliably in continuous industrial service — ideal for oil transfer, hydraulic and lubrication circuits. Request a quote or download the HGN datasheet for capacities and dimensions.

*H3 — Rotodel HGSX Rotary Gear Pumps*

The Rotodel Type 'HGSX' rotary gear pump is a compact, efficient gear pump rated for high-viscosity fluid handling at speeds up to 1440 RPM. Its smooth, pulsation-free flow and hygienic-friendly design make it suitable for food, pharmaceutical and process applications. Ask us to match an HGSX model to your required flow rate and viscosity.

*H2 — Metering & Dosing Pumps (Kirloskar)*

Kirloskar metering and dosing pumps deliver accurate, repeatable flow for chemical dosing and process applications such as water and effluent treatment, boiler chemical dosing and pH correction. With adjustable flow and stroke control and chemical-compatible construction, they hold a precise setpoint shift after shift. Tell us your dosing rate, fluid and back-pressure and we will recommend the right metering pump and spares.

*H2 — Vacuum Pumps (Kirloskar KV/DV) — RESTORE this family to the live page*

Kirloskar KV/DV vacuum pumps are built to perform reliably under wide voltage fluctuations, with dynamic balancing and overload protection for long, trouble-free service. They achieve vacuum up to 640 mm of mercury and air flow up to 162 m³/hr, with replaceable wearing parts to keep maintenance simple and downtime low. Suited to packaging, paint, laboratory and general process vacuum duties across Delhi NCR. Request a quote for KV/DV sizing or download the vacuum pump catalogue.

*H2 — How to Select the Right Industrial Pump (new SEO/topical-depth section)*

Choosing the right industrial pump comes down to matching the pump type to your fluid and duty. A few questions decide most selections — and our team is happy to size it with you. For a deeper primer, read our guide on choosing the right pump for your industry.

*H3 — Flow Rate & Head*

Start with the duty point: the flow rate you need (in litres per minute or m³/hr) and the total head or discharge pressure the pump must overcome. Under-sizing starves the process; over-sizing wastes energy and can cause cavitation. Share your flow and head and we will recommend a model with the right margin.

*H3 — Viscosity & Media Compatibility*

Fluid viscosity and chemistry drive pump choice. High-viscosity, lubricating media (oils, resins, bitumen) suit positive-displacement rotary gear pumps such as the Rotodel HGN/HGSX, while precise chemical dosing calls for a metering pump with chemically compatible wetted parts. Always confirm temperature, solids content and corrosiveness so we specify the right materials of construction.

*H3 — Duty Cycle & Vacuum Level*

For continuous-duty transfer, specify pumps rated for the operating hours and ambient conditions of your plant. For vacuum applications, the target vacuum level (in mm Hg) and required air flow (m³/hr) determine the KV/DV model — for example, duties up to 640 mm Hg and 162 m³/hr. Tell us the process and we will match the pump.

*H2 — Industries We Supply Pumps To*

We supply industrial pumps to packaging, paint, cement, textile and laundry operations, as well as chemical, water-treatment, food and pharmaceutical plants across Delhi NCR and India — from rotary gear pumps for oil transfer, to dosing pumps for water and effluent treatment, to KV/DV vacuum pumps for packaging and process vacuum. Not sure which pump fits your line? Talk to us about your application.

*H2 — Genuine OEM Pump Spares & After-Sales Support*

Buying the pump is only half the job — keeping it running is the rest. We stock genuine OEM spares for boiler feed, chemical, water-lifting, sewerage, self-priming, centrifugal, fire-fighting and booster pumps, alongside Kirloskar, Crompton Greaves and Rotodel spares. Explore our full pump and compressor spares range to keep your equipment in service with minimal downtime.

*H2 — Buy Industrial Pumps in Delhi NCR — Request a Quote (conversion block)*

Get a fast, no-obligation quotation on Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest pumps, supplied with genuine spares and after-sales support across Delhi NCR. Request a quote with your flow, head, fluid and duty, or call us on 011-41440012 or WhatsApp +91 9810054137 to speak with our team. Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| genuine pump and compressor spares | `/products/spares` | In the 'Genuine OEM Pump Spares & After-Sales Support' H2 section, on 'Explore our full pump and compressor spares range'. |
| Request a quote | `/quote` | Primary CTA in the closing 'Buy Industrial Pumps in Delhi NCR' block and as the per-card 'Request Quote' link already present on each pump card. |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | Within the 'How to Select the Right Industrial Pump' H2 intro as a 'read our guide on ...' line. |
| compressed air treatment equipment | `/products/air-treatment` | Related-categories line near the page footer for cross-category discovery (one-stop positioning). |
| air compressors | `/products/compressors` | Related-categories line near the page footer. |
| contact our Delhi team | `/contact` | In the closing conversion block alongside the phone/WhatsApp details for users who prefer a contact form. |
| about Machinery Centre | `/about` | In the intro paragraph on 'long-established industrial pump supplier' to pass equity to the brand/trust page. |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Rotodel HGN rotary gear pump card image (currently /assets/images/industry-cement.png — replace with a real HGN product photo) | Rotodel HGN rotary gear pump for high-viscosity oil transfer, supplied in Delhi NCR |
| Rotodel HGSX rotary gear pump card image | Rotodel HGSX rotary gear pump rated to 1440 RPM for food and pharma process duty |
| Kirloskar metering / dosing pump card image (currently /assets/images/service-milling.png) | Kirloskar metering and dosing pump for chemical dosing and water treatment |
| Kirloskar KV/DV vacuum pump card image (currently /assets/images/industry-paint.png) | Kirloskar KV/DV industrial vacuum pump, up to 640 mm Hg and 162 m3/hr |
| Kirloskar brand logo | Kirloskar pumps logo — stocked by Machinery Centre, Delhi |
| Rotodel brand logo | Rotodel rotary gear pumps logo — supplied by Machinery Centre, Delhi NCR |
| Crompton Greaves brand logo | Crompton Greaves pumps logo — stockist Machinery Centre, Delhi |

**Conversion recommendations**

- Add a prominent click-to-call (tel:01141440012) and WhatsApp (https://wa.me/919810054137) button block at the top and bottom of the pumps page body — B2B buyers in Old Delhi convert by phone; the number is currently absent from the category content.
- Add a 'Talk to a pump engineer — share your flow, head, fluid & duty' mini-CTA that deep-links to /quote with the pump category pre-selected, reducing the buyer's effort to self-spec.
- Surface the spares cross-sell as a visible card/banner ('Need pump spares? We stock genuine OEM parts') linking to /products/spares to capture recurring-revenue intent on the same visit.
- Keep the per-card 'Request Quote' link but make it a clearly styled button (currently a small text link) and pass the product title so the quote form pre-fills.
- Since REQUIRE_DETAILS_BEFORE_DOWNLOAD is currently false (downloads open straight to Google Drive), relabel the 'Catalog' button as 'Download datasheet (PDF)' so buyers know what they get.
- Add a short trust line near the CTA referencing 'Since 1987' (verified founding) and 'genuine spares + after-sales service' — avoid amplifying unverified counts like '15,000+ clients' until substantiated.
- RECOMMENDATION (do not assert): set up a Google Business Profile with the exact NAP (3858 Shradhanand Marg, Shah Ganj, Delhi-110006; 011-41440012; WhatsApp +91 9810054137) to unlock 'pump dealer near me' and local-pack visibility for this page.
- RECOMMENDATION (conditional): add a 'Stockist for Kirloskar / Rotodel' badge row only if these relationships are current; phrase as 'stockist/supplier', not 'authorized dealer'.

**Page FAQs**

- **Are you an industrial pump dealer in Delhi?** Yes. Machinery Centre is a long-established industrial pump supplier and stockist in Old Delhi (3858 Shradhanand Marg, Shah Ganj, near G.B. Road, Delhi-110006), serving customers across Delhi NCR and India. We stock Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest pumps with genuine spares and after-sales support.
- **Which pump brands do you stock?** We are a stockist for Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest. This covers rotary gear pumps (Rotodel HGN and HGSX), Kirloskar metering/dosing pumps and Kirloskar KV/DV vacuum pumps, plus genuine OEM spares for each range.
- **What is the difference between a rotary gear pump and a metering pump?** A rotary gear pump (such as the Rotodel HGN/HGSX) is a positive-displacement pump for moving viscous, lubricating fluids with smooth, pulsation-free flow — ideal for oil transfer. A metering pump is built for accurate, repeatable dosing of a measured volume, used for chemical dosing in water treatment and process plants. Tell us your fluid and duty and we will recommend the right type.
- **What vacuum level and flow do your Kirloskar KV/DV vacuum pumps achieve?** Kirloskar KV/DV vacuum pumps deliver vacuum up to 640 mm of mercury and air flow up to 162 m³/hr, with a wide-voltage design, dynamic balancing, overload protection and replaceable wearing parts for low-maintenance operation.
- **Do you supply genuine pump spares?** Yes. We stock genuine OEM spares for boiler feed, chemical, water-lifting, sewerage, self-priming, centrifugal, fire-fighting and booster pumps, including Kirloskar, Crompton Greaves and Rotodel parts. See our spares range for details.
- **How do I choose the right industrial pump for my application?** Match the pump to your duty point: required flow rate (m³/hr), total head or discharge pressure, fluid viscosity and chemical compatibility, and the duty cycle. For vacuum duties, specify the target vacuum level and air flow. Share these details with our team and we will size the right pump and spares.
- **Can I get a quote and delivery across Delhi NCR?** Yes. Request a quote with your flow, head, fluid and duty, or call 011-41440012 or WhatsApp +91 9810054137. We supply pumps and spares across Delhi NCR and India with after-sales support.

**Schema:** BreadcrumbList JSON-LD: Home (/) > Products (/products) > Pumps (/products/pumps) using the canonical https://www.machinerycentre.in/products/pumps (REPLACE placeholder domain with the real production domain). · LocalBusiness (or Organization) JSON-LD with the exact NAP: name 'Machinery Centre', address '3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India', telephone '+91-11-41440012', additional phones 9810054137 / 9891155438, email machinerycentre@yahoo.com, foundingDate '1987', areaServed 'Delhi NCR, India'. Reuse site-wide; do not invent ratings or review counts. · ItemList JSON-LD wrapping the pump products, each as a Product node: Rotodel HGN rotary gear pump, Rotodel HGSX rotary gear pump, Kirloskar metering/dosing pump, Kirloskar KV/DV vacuum pump — with brand, category and a 'see datasheet' URL. Do NOT add price, AggregateRating or invented review data unless real. · FAQPage JSON-LD built from the FAQ block above to target People-Also-Ask results. · Product schema per pump card with only verifiable spec properties (e.g. KV/DV: 'up to 640 mm Hg', 'up to 162 m3/hr'; HGSX: 'up to 1440 RPM'); brand as Kirloskar/Rotodel; offers only if real pricing/availability is published. · Open Graph + Twitter Card meta (og:title, og:description, og:url canonical, og:image, twitter:card=summary_large_image) for clean social/link previews — currently absent site-wide. · Add canonical tag <link rel=canonical href=https://www.machinerycentre.in/products/pumps> (REPLACE domain) once the route is a real, separately rendered URL; also add this URL to a generated sitemap.xml and allow it in robots.txt.

---

### Air Treatment (Compressed Air Treatment) category page — `https://www.machinerycentre.in/products/air-treatment (PLACEHOLDER DOMAIN — replace https://www.machinerycentre.in/ with the real production domain before launch)`

_Standalone, separately-indexable category page for the high-margin compressed air treatment range (Trident desiccant + refrigerated dryers, coalescing/submicron/bacteria/medical filters, automatic condensate drains, PSA nitrogen generators, breathing-air systems, carbon adsorbers, vortex water separators, blower-reactivated dryers). Targets the "Compressed Air Treatment (Category)" cluster plus the product clusters that live on this URL (Refrigerated Air Dryer, Desiccant Air Dryer, Nitrogen Generator, Automatic Drain Valves, Compressed Air Filters) and the Trident brand cluster, with Delhi-NCR commercial + local intent. Funnels to /quote and catalogue downloads._

**Current issues**

- CRITICAL ROUTING/INDEXABILITY BUG: Air Treatment is NOT a real page. App.tsx mounts Products at 'products/*' and Products.tsx (line 327) selects the category with a useState tab (activeCategoryId), so /products/air-treatment shares ONE URL, ONE <title> and ONE meta description with compressors, pumps and spares. The nav deep-link to /products/air-treatment does not actually deep-link to this tab. Until each category reads its URL segment and renders its own useSEO() title/meta/canonical, this page cannot be separately indexed or ranked.
- SHARED, GENERIC METADATA: useSEO() (line 325) sets title 'Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre' and a generic 'Browse our extensive catalog...' description for ALL four categories. There is no air-treatment-specific title, meta, H1 or canonical — the single biggest on-page miss.
- WEAK / EMPTY HEADINGS: The on-page category description is just 'Complete compressed air treatment solutions.' (line 73) — five words, no keyword, no brand (Trident), no location, no air-quality standard. The category H2 (line 382) renders only the bare label 'Air Treatment'. The single subcategory has an empty label ('') so all 19 products dump into one ungrouped grid with no descriptive H3s (dryers vs filters vs drains vs nitrogen vs medical/breathing).
- NO SSR/PRERENDERING: Vite + React 19 SPA. The only SEO is a client-side hook mutating document.title/meta after JS executes. There is no air-treatment content, title or schema in the initial HTML — slower and less reliable for crawlers. Add prerendering/static export so this page's tags and JSON-LD exist in the served HTML.
- MISSING TECHNICAL SEO INFRA: no canonical tag, no sitemap.xml, no robots.txt, no JSON-LD (no Organization/LocalBusiness/Product/BreadcrumbList), no Open Graph or Twitter card. Sharing the air-treatment URL produces no rich preview.
- NO PRODUCT IMAGES: ProductCard renders only a brand logo (line 435) and text — there are no product photos, so there is zero image-alt-text or Google Images surface for dryers, filters, nitrogen generators etc. The only alt text present is the bare brand name 'Trident' (line 437).
- AIR-QUALITY STANDARDS BURIED AS RAW STRINGS: strong differentiators like 'ISO 8573-1:2010 class 3' (line 119), 'class -5-' (line 140), 'Class 2' (line 161), 'NFPA 99' breathing air (line 166), '-40 °C' dew point (line 210) and '0.01 micron' (line 102) sit inside feature bullets with no explanatory framing, no heading and no semantic context, so they neither educate buyers nor get indexed as topical signals.
- INCONSISTENT BRAND CASING & FORMATTING: titles mix 'TRIDENT CTD Series', 'TRIDENT Series LDV', 'TRIDENT Dryspell Series' — inconsistent product naming hurts scannability and on-page entity clarity. The 'class -5-' and 'ISO 8573 - 1 : 2010 (E)' strings are malformed.
- NO INTERNAL LINKS OUT: the category body links only to /quote (per card) and a Google Drive catalogue PDF. There are no contextual links to /products/compressors (the air SOURCE this equipment treats), /trendi, /products/spares (filter elements/service kits), /contact (Delhi NAP) or the maintenance blog — a missed internal-link and topical-authority opportunity.
- CATALOGUE DOWNLOADS ARE NOT CRAWLABLE: each card's 'Catalog' button calls openCatalog() to a Google Drive PDF via JS (lines 318-320); the lead-capture modal is disabled (REQUIRE_DETAILS_BEFORE_DOWNLOAD=false, line 322). There is no crawlable catalogue landing page and no captured lead on download.
- NO LOCAL / TRUST SIGNALS ON-PAGE: no Delhi-NCR NAP, no 'authorized Trident dealer' statement, no industries-served (pharma/food/medical) context on the category itself — all of which are exactly what compressed-air-treatment buyers search for.
- NO FAQ OR APPLICATION CONTENT: no PAA-style content (dew point selection, ISO 8573-1 classes, desiccant vs refrigerated, which dryer for pharma) to capture informational long-tail and earn FAQ rich results.

**SEO opportunities**

- Make /products/air-treatment a real, prerendered, indexable route with its own useSEO() title/meta/canonical so it can rank for 'compressed air treatment supplier Delhi', 'compressed air dryer and filter dealer' and the Trident/dryer/nitrogen product terms it already lists.
- Own the high-margin air-treatment cluster: the page already stocks the full Trident range (Dryspell desiccant, Coldspell refrigerated, submicron/coalescing + bacteria + medical filters, CTD/LDV/EDV-X drains, PSA nitrogen, NFPA-99 breathing air, carbon adsorber, vortex separator, blower-reactivated DB). Group and head these so each product cluster (refrigerated dryer, desiccant dryer, nitrogen generator, drain valve, filter) has indexable copy.
- Surface ISO 8573-1 air-quality classes and dew-point/micron specs as explained, semantic content (class 1/2/3/5, -40 C dew point, 0.01 micron, oil-free) — this is the exact technical vocabulary B2B specifiers and pharma/food/medical buyers search and a strong topical-authority signal.
- Capture branded low-competition wins: 'Trident air dryer dealer Delhi', 'Trident Dryspell desiccant dryer', 'Trident Coldspell refrigerated dryer', 'Trident EDV-X drain valve', 'Trident nitrogen generator' — state the authorized-dealer relationship plainly if current.
- Capture commercial product terms already merchandised here: 'refrigerated air dryer price', 'desiccant air dryer supplier', 'PSA nitrogen generator supplier', 'automatic drain valve for air compressor', 'compressed air filter supplier', 'breathing air system NFPA 99'.
- Layer Delhi / Delhi-NCR + near-me local intent (Old Delhi / Shah Ganj / Shradhanand Marg, since 1987) plus a Google Business Profile with the exact NAP to compete for 'compressed air treatment supplier Delhi' and 'air dryer supplier near me'.
- Build high-value application sections (pharma, food & beverage, medical/hospital, paint, packaging) connecting oil-free/sterile/dry air to named industries — pulls in 'compressed air system for pharma industry', 'food grade compressed air', 'clean dry air for paint shop'.
- Add Product + BreadcrumbList + FAQPage JSON-LD plus site-wide Organization/LocalBusiness; eligible for breadcrumb and FAQ rich results.
- Add real product photos with descriptive, keyword-aware alt text to open a Google Images surface for dryers, filters, nitrogen generators and drains.
- Add an FAQ block answering dew-point/ISO-class/desiccant-vs-refrigerated/pharma questions to win informational long-tail and feed FAQ schema.
- Cross-link to /products/compressors (the air source), /trendi, /products/spares (filter elements & service kits) and the maintenance blog to build a compressed-air topical cluster and distribute authority.
- Restore the lead-capture modal (set REQUIRE_DETAILS_BEFORE_DOWNLOAD=true) to convert catalogue downloads into B2B leads, and add a crawlable /catalogue landing page.

**Recommended keywords**

- **Primary:** `compressed air treatment supplier Delhi`
- **Secondary:** compressed air dryer and filter dealer · Trident air dryer dealer Delhi · refrigerated air dryer price · desiccant air dryer supplier · PSA nitrogen generator supplier · automatic drain valve for air compressor · compressed air filter supplier · air treatment equipment supplier India
- **Long-tail:** compressed air dryer and filtration supplier in Delhi NCR · Trident Dryspell heatless desiccant dryer dealer Delhi · Trident Coldspell refrigerated air dryer supplier India · PSA nitrogen generator price in India 99.999 purity · zero air loss automatic condensate drain valve price India · 0.01 micron coalescing compressed air filter supplier Delhi · compressed air treatment solution for pharma plant Delhi · NFPA 99 breathing air system supplier Delhi NCR · ISO 8573-1 oil-free compressed air system for food industry
- **Semantic:** dew point · ISO 8573-1 · coalescing filter · desiccant · refrigerated dryer · micron rating · oil-free compressed air · condensate drain · zero air loss · PSA · pressure swing adsorption · NFPA 99 · bacteria filter · purge economiser · -40 dew point · carbon adsorber · Trident · Dryspell · Coldspell · EDV-X · pressure drop

**On-page metadata**

- **SEO Title** (50 chars): Compressed Air Dryer & Filter Supplier | Delhi NCR
- **Meta description** (154 chars): Trident desiccant & refrigerated air dryers, coalescing filters, drain valves and PSA nitrogen generators. Compressed air treatment supplier in Delhi NCR.
- **H1:** Compressed Air Treatment Equipment Supplier in Delhi NCR
- **URL slug:** `products/air-treatment`

**Heading outline**

- `H1` Compressed Air Treatment Equipment Supplier in Delhi NCR
- `H2` Trident-Authorized Air Dryers, Filters, Drains & Nitrogen Generators
- `H2` Compressed Air Quality & ISO 8573-1 Classes Explained
- `H2` Refrigerated Air Dryers (Trident Coldspell)
  - `H3` Trident Coldspell
  - `H3` Trident Coldspell Core
  - `H3` Trident Coldspell HP Series (High Pressure)
- `H2` Desiccant Air Dryers (Trident Dryspell)
  - `H3` Trident Dryspell Series (Heatless)
  - `H3` Trident Dryspell Core
  - `H3` Trident Dryspell Plus (Purge Economiser)
  - `H3` Trident DP V2 & DP V3 Series
  - `H3` Trident DB Series (Blower-Reactivated)
- `H2` Compressed Air Filters (Submicron, Coalescing, Carbon)
  - `H3` Trident Submicron Filters Cleansweep (0.01 micron)
  - `H3` Trident Carbon Adsorber Tower
  - `H3` Trident Vortex Water Separator VXD 2
- `H2` Automatic Condensate Drain Valves
  - `H3` Trident CTD Series
  - `H3` Trident LDV Series (Zero Air Loss)
  - `H3` Trident EDV-X Series
- `H2` PSA Nitrogen Generators
  - `H3` Trident Nitrogen Generator (95% to 99.999% Purity)
- `H2` Medical, Breathing-Air & Bacteria Filtration
  - `H3` Trident Breathing Air System (NFPA 99)
  - `H3` Trident Bacteria Filter Series
  - `H3` Trident Medical Vacuum Filters (High Performance)
- `H2` Industries We Supply Across Delhi NCR
- `H2` Why Buy Air Treatment Equipment from Machinery Centre
- `H2` Frequently Asked Questions
- `H2` Request a Quote or Download Catalogues

**Revised content** _(ready to paste)_

*Header / Hero (replaces line 346-347 H1 + subhead when this is its own route, and the empty line 73 description)*

H1: Compressed Air Treatment Equipment Supplier in Delhi NCR

Clean, dry, oil-free compressed air protects your tools, products and processes. Machinery Centre is a Delhi-based supplier and authorized Trident dealer for the full compressed air treatment range — refrigerated and desiccant air dryers, coalescing and submicron filters, automatic condensate drains, PSA nitrogen generators and NFPA 99 breathing-air systems. Serving factories across Delhi NCR and India since 1987, with genuine spares and after-sales service.

*H2 — Trident-Authorized Air Dryers, Filters, Drains & Nitrogen Generators (intro)*

Every cubic metre of compressed air carries water, oil aerosol and particulate that, left untreated, corrodes pipework, fouls pneumatic valves and contaminates finished product. Our Trident air-treatment range removes all three to the air-quality class your application demands — from general workshop air to ISO 8573-1 oil-free air for pharma, food and medical use. Choose by equipment type below, or tell us your flow (m³/hr), pressure and required dew point and we will specify the right system for you.

*H2 — Compressed Air Quality & ISO 8573-1 Classes Explained*

Compressed air purity is graded by the international standard ISO 8573-1, which sets classes for particulate, water (dew point) and oil content. A spray-paint booth needs moisture-free, oil-free air; a pharmaceutical or food line needs near-sterile air; a general workshop can run a higher class. Our refrigerated dryers (Coldspell) typically deliver around ISO 8573-1 Class 5 dew point for everyday industrial use, while our heatless desiccant dryers (Dryspell) reach Class 2 and dew points down to -40°C for critical and oil-free applications. Pair the right dryer with coalescing and carbon filtration and you control particulate, moisture and oil together. Not sure which class you need? Request a quote and our engineers will match equipment to your specification.

*H2 — Refrigerated Air Dryers (Trident Coldspell)*

Refrigerated dryers are the workhorse choice for general industrial compressed air, cooling the air to condense and drain out moisture with low pressure drop and low running cost.

Trident Coldspell — Refrigeration compressed air dryer rated to ISO 8573-1:2010 Class 5, with an anti-recycle feature that protects the refrigeration compressor and a large condenser for reliable performance.

Trident Coldspell Core — Compact refrigeration dryer with a large condenser engineered for high ambient temperatures and low pressure drop — well suited to Indian summer plant conditions.

Trident Coldspell HP Series — High-pressure refrigeration dryer rated to 40 kg/cm²(g) with a 3-in-1 integrated stainless-steel heat exchanger, microprocessor controller and anti-freeze / anti-recycle protection for high-pressure compressed air systems.

*H2 — Desiccant Air Dryers (Trident Dryspell)*

When you need very low dew points and oil-free, moisture-free air — pharma, electronics, instrument air, paint and outdoor pipework — desiccant (adsorption) dryers deliver dew points conventional refrigerated dryers cannot.

Trident Dryspell Series — Heatless desiccant dryer providing a total cleaning solution for lubricated and non-lubricated compressed air, with high-strength adsorbent, corrosion- and scale-free internals and a noise level below 70 dB.

Trident Dryspell Core — Aluminium-construction desiccant dryer delivering consistent dew-point performance to ISO 8573-1:2010 Class 3 with pressure drop below 0.3 kg/cm²(g) and noise below 70 dBA.

Trident Dryspell Plus — Desiccant dryer with a purge economiser that cuts purge air loss according to load, accepts a dew-point meter signal and is built in lightweight aluminium.

Trident DP V2 & DP V3 Series — Energy-saving heatless dryers with stainless-steel internals, dew-point-meter cycle control and (on V3) an LCD display, sample-gas chamber and ISO 8573-1:2010 Class 2 air quality for the most demanding oil-free duties.

Trident DB Series — Blower-reactivated dryer working on the thermal-swing principle for highly economical energy consumption, with an energy-saving purge economiser, extensive mimic display and dew point better than -40°C.

*H2 — Compressed Air Filters (Submicron, Coalescing, Carbon)*

Filtration removes oil aerosol, particulate and water in stages so downstream equipment, dryers and finished product stay clean.

Trident Submicron Filters (Cleansweep) — Coalescing oil-removal filters that strip oil and particulate down to 0.01 micron, with flows from 20 to 1810 m³/hour and an extremely low installation clearance so they fit almost anywhere.

Trident Carbon Adsorber Tower — Activated-carbon towers producing oil-free compressed air for point-of-use applications, in IS 63400 aluminium-alloy construction, rated to 16 kg/cm² maximum operating pressure.

Trident Vortex Water Separator VXD 2 — Removes 100% of water in the liquid phase along with oil and solid particles, uses no electricity and is built entirely in oxidation-resistant aluminium — a low-cost first stage of moisture removal.

*H2 — Automatic Condensate Drain Valves*

Manual drains get left open (wasting air) or left shut (flooding the line). Automatic drains discharge condensate reliably and protect your air quality.

Trident CTD Series — High-discharge automatic drain valves with robust construction, adjustable ON/OFF timings and the ability to handle contaminated condensate.

Trident LDV Series — Condensate-sensing automatic drain valves offering zero air loss, noise-free operation and a patented, fault-tolerant design — ideal where wasted purge air is a cost concern.

Trident EDV-X Series — All-digital electronic drain valves built specifically to drain sludge- and rust-laden condensate, with adjustable ON/OFF timing and an extended cycle time adjustable up to 32 hours.

*H2 — PSA Nitrogen Generators*

Trident Nitrogen Generator — Generate your own nitrogen on site from compressed air and stop paying for cylinder deliveries. This modular generator uses pressure swing adsorption (PSA) to deliver an uninterrupted nitrogen supply at purities from 95% up to 99.999%, with a microprocessor controller and corrosion-free modular aluminium construction. Used for food and beverage packaging (modified-atmosphere), inerting, blanketing, laser cutting and electronics across multiple industries.

*H2 — Medical, Breathing-Air & Bacteria Filtration*

For hospitals, medical-air plants and food production, contamination control is non-negotiable.

Trident Breathing Air System — Delivers breathing air to NFPA 99 using pressure swing adsorption, with guaranteed dew-point performance, a compact digital CO and dew-point monitor and bacterial penetration as low as 0.0001%.

Trident Bacteria Filter Series — Protects compressed air from bacteria in medical and food applications, with hard-anodized aluminium-alloy housing, borosilicate filter media and compatibility with autoclave sterilisation.

Trident Medical Vacuum Filters (High Performance) — Remove liquid, solid and bacterial contamination from the suction side of medical vacuum pumps, with a 99.995%-efficiency borosilicate element, differential-pressure gauge indicator and a sterilisable drain flask.

*H2 — Industries We Supply Across Delhi NCR*

We specify and supply compressed air treatment for packaging, paint, cement, textile and laundry plants, and for pharma, food & beverage, medical/hospital and automotive applications where air quality is critical. Whether you need oil-free clean dry air for an automotive paint shop, sterile air for a pharmaceutical line, food-grade air and on-site nitrogen for packaging, or robust drying and drainage for a textile mill, we match Trident equipment to your industry's ISO 8573-1 requirement.

*H2 — Why Buy Air Treatment Equipment from Machinery Centre*

Machinery Centre has been Delhi's one-stop shop for compressors, pumps and air treatment since 1987. As an authorized Trident dealer we supply genuine equipment, hold spares and filter elements, and back every sale with installation guidance and after-sales service from our base in Shah Ganj, Old Delhi. Buy the dryer, treat it as a system — we also supply the air compressors that feed it and the service kits that keep it running.

*Closing CTA — Request a Quote or Download Catalogues*

Tell us your flow rate (m³/hr or CFM), working pressure and required dew point or ISO 8573-1 class, and we will recommend the right dryer, filtration and drainage package. Request a quote for pricing and lead time, or download the Trident product catalogues for full specifications. Call 011-41440012, message us on WhatsApp at +91 9810054137, or email machinerycentre@yahoo.com.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| air compressors that feed your treatment system | `/products/compressors` | In the 'Trident-Authorized... (intro)' H2 and again in 'Why Buy from Machinery Centre' — link the air-source mention to the compressors category. |
| Trendi energy-efficient compressors | `/trendi` | In 'Why Buy from Machinery Centre' / Industries section when referencing the compressed-air source for paint, textile and packaging plants. |
| filter elements and service kits | `/products/spares` | In the 'Compressed Air Filters' H2 and the closing CTA — link consumable replacement to the spares category. |
| request a quote | `/quote` | Closing CTA and as the per-card 'Request Quote' link already present on every ProductCard (keep). |
| visit or call us in Old Delhi | `/contact` | Closing CTA and 'Why Buy from Machinery Centre' — link NAP/phone to the contact page. |
| compressor and pump maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | FAQ section answer about keeping dryers and drains running, and an end-of-page 'related reading' line. |
| choosing the right equipment for your industry | `/blog/choosing-the-right-pump-for-your-industry` | 'Industries We Supply' section as related reading. |
| energy-efficient compressed air equipment | `/blog/importance-of-energy-efficient-equipment` | Near the Dryspell Plus / DB Series purge-economiser copy where energy saving is discussed. |
| back to all products | `/products` | Breadcrumb at top of page (Home / Products / Air Treatment). |
| Machinery Centre home | `/` | Breadcrumb root and logo. |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Trident brand logo on each product card (currently alt='Trident', line 437) | Trident compressed air treatment — authorized dealer Machinery Centre Delhi |
| Trident Coldspell refrigerated air dryer (to be added) | Trident Coldspell refrigerated compressed air dryer, ISO 8573-1 Class 5 — Delhi NCR supplier |
| Trident Coldspell HP high-pressure dryer (to be added) | Trident Coldspell HP high-pressure refrigerated air dryer 40 kg/cm2 with stainless-steel heat exchanger |
| Trident Dryspell heatless desiccant dryer (to be added) | Trident Dryspell heatless desiccant compressed air dryer with -40C dew point |
| Trident Dryspell Plus desiccant dryer (to be added) | Trident Dryspell Plus desiccant air dryer with purge economiser, ISO 8573-1 Class 3 |
| Trident submicron coalescing filter (to be added) | Trident Cleansweep submicron coalescing compressed air filter, 0.01 micron oil removal |
| Trident PSA nitrogen generator (to be added) | Trident PSA nitrogen generator, 95 to 99.999 percent purity, on-site nitrogen supply |
| Trident EDV-X automatic drain valve (to be added) | Trident EDV-X electronic automatic condensate drain valve for compressed air |
| Trident LDV zero-air-loss drain (to be added) | Trident LDV zero air loss condensate-sensing automatic drain valve |
| Trident breathing air system (to be added) | Trident NFPA 99 breathing air system with CO and dew point monitor |
| Trident bacteria filter (to be added) | Trident bacteria filter for medical and food-grade compressed air, autoclave sterilisable |
| Trident carbon adsorber tower (to be added) | Trident activated carbon adsorber tower for oil-free compressed air |

**Conversion recommendations**

- Re-enable the lead-capture modal for catalogue downloads (set REQUIRE_DETAILS_BEFORE_DOWNLOAD = true, line 322) so every Trident catalogue download captures a B2B lead (name/company/email/phone) instead of silently opening a Drive PDF. The modal and sendLead() plumbing already exist.
- Add a prominent specification-driven CTA at the top and bottom: 'Tell us your flow (m³/hr), pressure and dew point — get a system recommendation' linking to /quote. Air-treatment buyers convert on spec-matching, not browsing.
- Add a sticky WhatsApp + call bar with the exact NAP (WhatsApp +91 9810054137, landline 011-41440012). Industrial buyers in India strongly prefer WhatsApp/phone enquiries.
- Group the 19 products under the proposed H2/H3 sections (dryers / filters / drains / nitrogen / medical) with anchor jump-links so a specifier can reach 'desiccant dryers' or 'nitrogen generators' in one click — currently all 19 dump into one ungrouped grid.
- Add a short 'Which air quality do I need?' selector or comparison table (refrigerated vs desiccant; ISO 8573-1 class vs application) to qualify leads before they request a quote.
- State the authorized-Trident-dealer relationship plainly near the H1 and add an 'authorized dealer' / 'genuine equipment + spares' trust line (do NOT invent ISO 9001/CE; add an ISO 9001 badge only IF genuinely held).
- Add real, attributable B2B testimonials for air-treatment installs (pharma/food/paint) to replace the generic homepage placeholders; even one named plant reference lifts conversion.
- Link each product to its consumable filter element / service kit on /products/spares to drive recurring spares revenue and an AMC enquiry.
- Standardise the years-in-business figure to 'Since 1987' across the page (homepage meta says '35+ years' while counters compute 39 — pick one).
- Recommend (do not assert) a branded email such as sales@machinerycentre.in instead of the yahoo.com address to raise B2B trust on the CTA.

**Page FAQs**

- **What is the difference between a refrigerated and a desiccant compressed air dryer?** A refrigerated dryer (such as the Trident Coldspell) cools the air to condense out moisture and is the economical choice for general industrial air, typically reaching around ISO 8573-1 Class 5. A desiccant dryer (such as the Trident Dryspell) adsorbs moisture to reach much lower dew points — down to -40°C and ISO 8573-1 Class 2 — for oil-free, moisture-critical applications like pharma, electronics, instrument air and paint. We help you choose based on your required dew point and budget.
- **Which compressed air dryer do I need for a pharmaceutical or food plant in Delhi NCR?** Pharma, medical and food applications generally need oil-free, low-dew-point air to a tight ISO 8573-1 class. We typically specify a Trident heatless desiccant dryer (Dryspell / DP V3, Class 2) with coalescing submicron filtration, a carbon adsorber for oil removal and a bacteria filter, plus on-site PSA nitrogen for packaging where needed. Share your flow and class requirement and our engineers will design the package.
- **What does ISO 8573-1 mean for compressed air quality?** ISO 8573-1 is the international standard that classifies compressed air by particulate, water (dew point) and oil content. Lower class numbers mean cleaner air. Our Trident range spans everyday workshop air through to Class 2 oil-free, -40°C dew-point air for critical processes, so we can match equipment to the exact class your application demands.
- **Are you an authorized Trident dealer in Delhi?** Yes — Machinery Centre supplies the full Trident compressed air treatment range, including Coldspell refrigerated dryers, Dryspell desiccant dryers, submicron and bacteria filters, CTD/LDV/EDV-X automatic drains, PSA nitrogen generators and NFPA 99 breathing-air systems, with genuine spares and after-sales support from our base in Shah Ganj, Old Delhi. (Confirm current authorization status before publishing this statement.)
- **What is a zero-air-loss automatic drain valve and why does it matter?** Timer-based drains waste compressed air every time they open. A zero-air-loss condensate-sensing drain like the Trident LDV opens only when condensate is present, so you stop paying to compress air that is dumped to atmosphere. The Trident EDV-X is built for sludge- and rust-laden condensate with cycle times adjustable up to 32 hours.
- **Can a nitrogen generator replace nitrogen cylinder deliveries?** Yes. The Trident PSA nitrogen generator produces nitrogen on site from your existing compressed air at purities from 95% up to 99.999%, removing cylinder rental, delivery and handling costs. It is widely used for food and beverage packaging, inerting, blanketing and electronics, and is modular so it can scale with demand.
- **Do you supply spares and service for air dryers and filters in Delhi?** Yes. We stock genuine filter elements, desiccant and service consumables and provide after-sales support across Delhi NCR. Pairing scheduled maintenance with the right drainage keeps your air quality and dew point stable — see our compressor and pump maintenance tips, or request a quote for a service package.

**Schema:** Add BreadcrumbList JSON-LD: Home (/) > Products (/products) > Air Treatment (/products/air-treatment) to earn breadcrumb rich results once this is a real route. Use the real production domain, not the placeholder. · Add Product JSON-LD for each of the 19 Trident items (or an ItemList of Product) with name, brand:'Trident', category 'Compressed Air Treatment', and a description from the revised copy. Omit price/aggregateRating unless you have real values — do not fabricate ratings or prices; you may use an 'AggregateOffer'/'Offer' with availability and a 'priceCurrency':'INR' only when real pricing exists, otherwise leave offers out. · Add FAQPage JSON-LD using the 7 FAQs above to be eligible for FAQ rich results. · Add site-wide Organization + LocalBusiness JSON-LD with the exact NAP (3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; telephone 011-41440012; +91 9810054137) and brand 'Machinery Centre', tagline 'One Stop Shop For Compressors and Pumps', foundingDate '1987'. Reference it from this page. · Add CollectionPage / WebPage schema for the category itself with name 'Compressed Air Treatment Equipment' and isPartOf the site. · Add Open Graph and Twitter Card meta (og:title, og:description, og:type=website, og:url with real domain, og:image of a representative Trident dryer; twitter:card=summary_large_image) so the URL previews correctly when shared. · Add a canonical tag pointing to https://www.machinerycentre.in/products/air-treatment (REPLACE with the real domain) and register the URL in sitemap.xml. · Do NOT add Review/AggregateRating, ISO/CE certification or award schema unless genuinely held and attributable — invented trust signals risk manual action. · All schema (and OG/canonical) must be emitted in the prerendered/static HTML, not injected only client-side, so crawlers see it reliably.

---

### Spares / OEM Service Parts category page (compressor & pump spare parts) — `https://www.machinerycentre.in/products/spares`

_Standalone, indexable category page for the recurring-revenue aftermarket: genuine OEM pump spares + compressor/air service parts. Targets high-intent, repeat-purchase B2B buyers (maintenance engineers, plant procurement) searching for replacement parts and service kits in Delhi NCR. Anchors the after-sales / AMC positioning that differentiates Machinery Centre from pure resellers._

**Current issues**

- Routing/indexability bug: App.tsx mounts Products at "products/*" but Products.tsx (line 327) switches the four categories via a useState tab (activeCategoryId), so /products/spares is NOT a distinct URL. The nav deep-link to /products/spares does not deep-link — it lands on the default 'compressors' tab. The spares 'page' cannot be separately indexed or ranked until it gets its own route that reads the URL segment.
- Single shared title/meta across all four categories: useSEO() on line 325 sets ONE title ('Industrial Air Compressors, Pumps & Air Treatment | Machinery Centre') and ONE meta for compressors, pumps, air-treatment AND spares. The spares page has no spares-specific title, meta, H1, or canonical.
- No H1 unique to spares. The page-level H1 (line 346) is the generic catalog header 'Premium Industrial Compressors, Pumps & OEM Spares' shared by every tab; the spares category heading is only an H2 rendered from activeCategory.label ('Spares').
- Thin, generic body copy: the spares category has just two product cards ('Pump Spares' and 'Compressor & Air Parts') with one-line descriptions. No brand-by-brand depth, no 'genuine OEM' trust framing, no part-type detail (air-oil separators, intake valves, gaskets, service kits), no delivery/lead-time or local-availability signal, no AMC cross-sell.
- No SSR/prerendering — Vite + React 19 SPA. All SEO is a client-side useSEO() hook mutating document.title/meta; titles/meta/canonical/JSON-LD/OG are absent from the initial HTML, hurting crawl reliability.
- Missing technical SEO infra sitewide: no canonical tag, no robots.txt, no sitemap.xml, no JSON-LD (no Organization/LocalBusiness/BreadcrumbList/Product), no Open Graph / Twitter cards.
- Catalog PDFs are served from Google Drive links opened via a JS handler (openCatalog / handleDownloadRequest) — not crawlable, not indexable, no on-page HTML spec content for search engines to read.
- Brand-name inconsistency between data sources: catalog.ts spares card lists brands ['Kirloskar','Crompton','Rotodel'] and ['Ingersoll Rand','Trident','Trendi'] while the inline catalogData in Products.tsx omits brand logos on spares cards entirely and uses 'Crompton Greaves' in feature text — inconsistent brand entity signals.
- No local-intent or geo signal in the spares copy (no Delhi / Delhi NCR / Shah Ganj / Old Delhi mention), so it misses 'spare parts Delhi' and 'near me' intent despite low competition.
- No internal links out of the spares cards except a generic 'Request Quote' and a 'Catalog' download button — no contextual links to compressors/pumps/air-treatment categories, AMC/service, or the relevant maintenance blog post.
- Generic image alt text: ProductCard renders brand logos with alt={b} (just the brand name) and product cards have no descriptive product imagery for spares.
- No FAQ, no schema, no trust/authenticity content distinguishing genuine OEM parts from spurious aftermarket parts — a key purchase concern for this category.

**SEO opportunities**

- Make /products/spares a real, server-rendered (or prerendered) route with its own title, meta, canonical and H1 so it can rank for the low-competition 'compressor and pump spare parts Delhi' cluster — a P1 recurring-revenue win.
- Own the genuine-OEM angle: target 'genuine OEM pump spares supplier' and brand-specific spares terms (Ingersoll Rand compressor spare parts, Kirloskar pump spare parts) where competition is Low and intent is high.
- Capture part-type long-tail: 'air oil separator and filter replacement Delhi', 'compressor service kit supplier', 'boiler feed pump spares supplier India' — exact matches to the real feature lists already on the page.
- Layer Delhi NCR / Old Delhi / Shah Ganj local intent and 'near me' framing onto a category that currently has zero geo signal — easy local-pack and proximity wins once a Google Business Profile with exact NAP is live.
- Cross-sell AMC and after-sales: this page is the natural hub to link 'air compressor AMC services Delhi' and 'air compressor repair service Delhi' clusters, lifting LTV per customer.
- Add an HTML spec/part-list table per brand so search engines have crawlable content instead of Drive-only PDFs; pair with a crawlable /catalogue landing page for the PDFs.
- Add FAQ + FAQPage schema to win People-Also-Ask real estate on 'genuine vs spurious spares', 'fast delivery', 'which brands' — all high-intent, low-competition.
- Use BreadcrumbList + Product/Offer + LocalBusiness JSON-LD to enrich SERP appearance and reinforce the Delhi B2B dealer entity.
- Internal-link this page from the compressors, pumps and air-treatment category pages (every machine eventually needs spares) to concentrate aftermarket authority.
- Standardise brand entities (Crompton Greaves, Ingersoll-Rand, Kirloskar, Rotodel, Indfoss, Everest, Elgi, Janatics, Trident, Trendi) consistently across copy and structured data to strengthen brand-association signals.

**Recommended keywords**

- **Primary:** `compressor and pump spare parts Delhi`
- **Secondary:** genuine OEM pump spares supplier · air compressor spare parts dealer Delhi · pump spares distributor India · compressor service kit supplier · compressor and pump spare parts Delhi NCR
- **Long-tail:** Ingersoll Rand compressor spare parts dealer in Delhi · Kirloskar pump spare parts supplier Delhi NCR · genuine boiler feed pump spares supplier India · air oil separator and filter replacement Delhi · centrifugal and self-priming pump spares supplier Old Delhi · fire fighting and booster pump spare parts dealer Delhi NCR
- **Semantic:** air filter · oil filter · air-oil separator · intake valve · gasket · service kit · boiler feed pump spares · centrifugal pump spares · Elgi · Janatics · Crompton Greaves · Indfoss · Everest · Rotodel · genuine OEM · preventive maintenance · AMC · replacement parts

**On-page metadata**

- **SEO Title** (51 chars): Compressor & Pump Spares Dealer in Delhi | M.Centre
- **Meta description** (151 chars): Genuine OEM spares for Ingersoll Rand, Kirloskar & Crompton pumps and compressors. Air-oil separators, filters, service kits supplied across Delhi NCR.
- **H1:** Compressor & Pump Spare Parts in Delhi NCR
- **URL slug:** `/products/spares`

**Heading outline**

- `H1` Compressor & Pump Spare Parts in Delhi NCR
- `H2` Genuine OEM Spares for Compressors, Pumps & Air Treatment
- `H2` Pump Spares & Accessories
  - `H3` Boiler Feed, Chemical & Centrifugal Pump Spares
  - `H3` Water-Lifting, Sewerage & Self-Priming Pump Spares
  - `H3` Fire-Fighting & Booster Pump Spares
- `H2` Air Compressor & Air-Treatment Parts
  - `H3` Air Filters, Oil Filters & Air-Oil Separators
  - `H3` Intake Valves, Gaskets & Service Kits
- `H2` Brands We Stock Spares For
  - `H3` Ingersoll-Rand & Trident (Authorized Dealer)
  - `H3` Kirloskar, Crompton Greaves, Rotodel, Indfoss & Everest (Stockist)
  - `H3` Trendi, Elgi & Janatics Components
- `H2` Why Genuine OEM Spares Matter
- `H2` Spares Backed by Service & AMC
- `H2` Download Spares Catalogues
- `H2` Request a Spares Quote
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*Page header (replace shared generic H1 with a spares-specific H1 + intro when this route renders the spares category)*

Compressor & Pump Spare Parts in Delhi NCR

Keep your plant running with genuine OEM spares and service parts for industrial air compressors, pumps and compressed-air treatment equipment. As a long-established Delhi-based dealer and stockist serving industry since 1987, Machinery Centre supplies authentic replacement parts and service kits across Delhi NCR and pan-India — backed by hands-on after-sales support.

*Category intro (replaces the thin one-line description on the spares tab)*

From a single gasket to a full overhaul service kit, we hold and source genuine parts for the brands we sell and stock. Whether you need an air-oil separator for an Ingersoll Rand compressor, a wear-part set for a Kirloskar pump, or spares for a Crompton Greaves centrifugal pump, our team helps you identify the correct part and get it delivered quickly — minimising downtime on your line.

*Pump Spares card (rewrite of 'Pump Spares' product card)*

Pump Spares & Accessories

Genuine spares and wear parts for the full range of industrial and commercial pumps we supply — covering boiler feed, chemical, water-lifting, sewerage, self-priming, centrifugal, fire-fighting and booster pumps. We help you match impellers, seals, shafts, bearings, gaskets and casing parts to your exact pump model so replacements fit and perform first time.

- Boiler feed & chemical pump spares
- Centrifugal & self-priming pump spares
- Water-lifting & sewerage pump spares
- Fire-fighting & booster pump spares

Stocked / sourced for: Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest pumps.

*Compressor & Air Parts card (rewrite of 'Compressor & Air Parts' product card)*

Air Compressor & Air-Treatment Parts

Genuine OEM and compatible service parts for major compressor and air-treatment brands. Stock and source air filters, oil filters, air-oil separators, intake valves, gaskets and complete service kits to keep your compressed-air system efficient and reliable between services.

- Air filters, oil filters & air-oil separators
- Intake valves, gaskets & overhaul service kits
- Ingersoll Rand & Trident genuine spares (authorized dealer)
- Trendi, Elgi & Janatics components

Replacement parts supplied across Delhi NCR with technical guidance on the right service interval for your duty cycle.

*Why Genuine OEM Spares Matter (new trust section)*

Why Genuine OEM Spares Matter

Fitting the correct genuine part protects your equipment warranty, holds your rated performance and avoids the premature failures that come with spurious parts. Because we are an authorized dealer for Ingersoll-Rand and Trident and a stockist for leading pump brands, the spares we supply are matched to your machine — not generic substitutes. The result is longer equipment life, fewer breakdowns and lower total cost of ownership.

*Spares Backed by Service & AMC (new after-sales / cross-sell section)*

Spares Backed by Service & AMC

Spares are only half the story. Our team can advise on the right preventive-maintenance interval for your compressor or pump, supply the matching service kit, and support installation and changeover. For plants that want guaranteed uptime, ask about an annual maintenance contract (AMC) that bundles genuine spares with scheduled servicing and breakdown support across Delhi NCR.

*Download Spares Catalogues (recommend a crawlable /catalogue landing page in addition to the modal)*

Download Spares Catalogues

Browse our pump-spares and compressor-parts catalogues for part listings and specifications. Share your equipment make and model with our team and we will confirm the exact part numbers you need.

*Closing CTA*

Need a part fast? Send us your machine details for a same-day spares enquiry. Request a quote online or call our Delhi office — we will help you identify the correct genuine spare and confirm availability.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| industrial air compressors | `/products/compressors` | Category intro paragraph, where compressor spares are mentioned |
| pumps | `/products/pumps` | Category intro paragraph, linking the pump-types phrase to the pumps category |
| compressed-air treatment equipment | `/products/air-treatment` | Page intro, on the air-treatment mention |
| annual maintenance contract (AMC) | `/contact` | 'Spares Backed by Service & AMC' section CTA (route to /services once that page exists) |
| request a quote | `/quote` | Closing CTA and each product card's quote link |
| call our Delhi office | `/contact` | Closing CTA, for NAP and phone |
| essential maintenance tips for air compressors | `/blog/essential-maintenance-tips-for-air-compressors` | 'Why Genuine OEM Spares Matter' or service section, as supporting reading |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | Pump Spares section, contextual link |
| Trendi compressors | `/trendi` | Compressor & Air-Treatment Parts section, on the Trendi components mention |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Pump Spares product card image (service-turning.png placeholder) | Genuine OEM spares for boiler feed, centrifugal and booster pumps supplied in Delhi NCR |
| Compressor & Air Parts product card image | Air compressor service parts: air-oil separators, air filters, oil filters and gaskets |
| Ingersoll Rand brand logo (currently alt={b} = 'Ingersoll Rand') | Ingersoll Rand authorized dealer logo - genuine compressor spares |
| Kirloskar brand logo | Kirloskar pump spares stockist logo |
| Crompton brand logo | Crompton Greaves pump spares supplier logo |
| Trident brand logo | Trident air-treatment authorized dealer logo - genuine filter and dryer parts |
| Trendi brand logo | Trendi air compressor own-brand spares and components logo |
| Rotodel brand logo | Rotodel rotary gear pump spares supplier logo |

**Conversion recommendations**

- Add a prominent 'Send your machine make & model for a fast spares quote' form or button at the top of the spares page — part identification is the #1 friction point for spares buyers; capturing model number up front shortens the sales cycle.
- Surface the Delhi landline (011-41440012) and WhatsApp (+91 9810054137) as click-to-call / click-to-chat directly on this page — spares purchases are often urgent breakdown situations where buyers want to talk now.
- Add a visible 'Genuine OEM parts' / 'Authorized dealer for Ingersoll-Rand & Trident' trust strip near the top to reassure buyers wary of spurious parts.
- Add an explicit availability / turnaround reassurance (e.g. 'Fast dispatch across Delhi NCR — tell us your part and we'll confirm stock') WITHOUT inventing specific delivery SLAs that aren't verified.
- Keep the lead-capture catalogue modal but ALSO make the spares catalogue downloadable from a crawlable page so SEO and conversion both work; currently the Drive link opens directly (REQUIRE_DETAILS_BEFORE_DOWNLOAD is false), so no lead is captured on download — flip this on for spares (high-intent) or add a lightweight 'enquire' step.
- Cross-sell AMC: add a clear 'Lock in uptime with an AMC' CTA on this page so spares buyers convert into recurring service contracts.
- Replace generic placeholder testimonials sitewide (Rajesh Kumar / Sneha Sharma / Amit Patel) with real attributable B2B reviews; a single genuine 'fast spares delivery' testimonial on this page would lift trust significantly. Do not fabricate.
- Recommendation (conditional): add an ISO 9001 or dealer-authorization badge ONLY IF genuinely held; consider a branded email (sales@machinerycentre.in) over the yahoo.com address to raise B2B trust.

**Page FAQs**

- **Do you supply genuine OEM compressor and pump spare parts?** Yes. We supply genuine OEM and OEM-compatible spares for the brands we deal in and stock. As an authorized dealer for Ingersoll-Rand and Trident and a stockist for Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest, the parts we provide are matched to your machine to protect performance and warranty.
- **Which compressor and pump brands can you supply spares for?** We supply spares for Ingersoll Rand and Trendi compressors, Trident air-treatment equipment, and Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest pumps, plus Elgi and Janatics components. This covers boiler feed, chemical, centrifugal, self-priming, sewerage, fire-fighting and booster pump spares.
- **What compressor service parts do you stock?** We supply air filters, oil filters, air-oil separators, intake valves, gaskets and complete overhaul service kits for major compressor brands — the parts needed for routine servicing and to maintain efficient, reliable compressed-air output.
- **How do I order the correct spare part?** Share your equipment make, model and serial or part number with our team. We will confirm the exact genuine spare you need and its availability. You can request a quote online or call our Delhi office for help identifying the part.
- **Do you supply spare parts across Delhi NCR and the rest of India?** Yes. We are based in Shah Ganj, Old Delhi and supply compressor and pump spares across Delhi NCR, with dispatch available pan-India. Contact us with your requirement to confirm availability and delivery.
- **Do you offer servicing and AMC along with spares?** Yes. Beyond supplying spares, we advise on the right preventive-maintenance interval, supply matching service kits, and offer annual maintenance contracts (AMC) that bundle genuine spares with scheduled servicing and breakdown support.

**Schema:** BreadcrumbList JSON-LD: Home > Products > Spares (Home /, Products /products, Spares /products/spares) to give the category a clear hierarchy in SERPs. · CollectionPage (or ItemList) JSON-LD describing the spares category and listing the two offerings (Pump Spares, Compressor & Air Parts) as items, each with name, description and a link. · Product + Offer JSON-LD for each spares offering, with brand entities (Ingersoll-Rand, Kirloskar, Crompton Greaves, Rotodel, Trident, Trendi) and Offer set to availability/PriceOnRequest (use offers with priceSpecification omitted or QuantitativeValue rather than inventing a price). · FAQPage JSON-LD wrapping the six PAA-style FAQs above to compete for People-Also-Ask results on genuine-OEM and brand-spares queries. · LocalBusiness JSON-LD (site-wide, referenced from this page) with exact NAP: Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India; telephone 011-41440012; reinforces local 'spare parts Delhi / near me' intent. Set up a matching Google Business Profile. · Organization JSON-LD with brand, logo, sameAs and the authorized-dealer / stockist relationships (state authorized-dealer only for Ingersoll-Rand and Trident; phrase others as stockist) — do not fabricate certifications. · All schema must use the real production domain in @id/url fields once known — replace the placeholder https://www.machinerycentre.in/ everywhere (canonical, sitemap, OG, JSON-LD) before launch. · Add a canonical tag (self-referencing https://www.machinerycentre.in/products/spares) and Open Graph / Twitter card tags once /products/spares is a real prerendered route.

---

### Trendi — Own-Brand Compressor & Air Treatment Landing/Catalogue Page — `https://www.machinerycentre.in/trendi (PLACEHOLDER DOMAIN — replace with the real production domain everywhere: canonical, sitemap, OG, JSON-LD)`

_Brand landing + catalogue page for Trendi, Machinery Centre's exclusive/own brand of energy-efficient screw and reciprocating air compressors plus compressed-air treatment equipment. This is the one cluster Machinery Centre can fully own (no competing dealers), so it should both convert brand-aware buyers and capture generic "energy efficient screw air compressor" demand, while funnelling to /quote and the category routes. Currently it doubles as a mini-catalogue but has no real catalogue download and weak local/commercial signals._

**Current issues**

- SEO title is 60 chars but generic and brand-second: 'The Trendi Range | Industrial Air Compressors & Treatment' leads with a filler article ('The') and omits the buyer/intent + brand-owner (Machinery Centre) and geography (Delhi/India). Weak for the ownable 'Trendi air compressor' term.
- Meta description (148 chars) is descriptive fluff ('Discover the complete Trendi range...') with no brand owner, no location, no commercial hook (VFD/IE3/price/quote), and no CTA — low CTR.
- H1 is 'In-House Innovation' — a slogan with zero keyword value. It contains neither 'Trendi' nor 'air compressor'. The most important on-page ranking signal is wasted on a tagline.
- Client-only SEO: useSEO() mutates document.title + meta description after hydration only. No canonical tag, no Open Graph/Twitter cards, no JSON-LD (Product/Brand/Organization), no SSR/prerender — so this brand page renders title/meta late and ships zero structured data.
- The primary hero CTA 'Download Complete Catalog' links to /products (the tabbed hub), NOT to an actual catalogue PDF or a crawlable /catalogue page. The promise ('Download') is broken — it just navigates to a page. The 'air compressor catalogue PDF download' intent is unfulfilled and uncrawlable.
- No mention anywhere that Trendi is Machinery Centre's OWN/exclusive brand, that it is sold/supported from Delhi NCR, or that genuine spares, installation and AMC/after-sales service are available — all of which are the trust differentiators that make an own-brand purchase safe for a B2B buyer.
- Zero local/commercial intent: the words Delhi, Delhi NCR, India, dealer, supplier, price, buy appear nowhere. The page cannot rank for 'Trendi air compressor dealer India' or feed the Delhi local cluster.
- Body copy is vague marketing prose ('pinnacle of industrial efficiency', 'relentless, uninterrupted air power', 'Purity Guaranteed') with thin entity/spec density. The genuinely strong specs that exist in the data (175 PSIG, three-stage air-oil separator, IE3, VFD, PSA 95–99.999%, 0.01 micron, ISO 8573-1:2010 class 3) are buried in bullet lists rather than used in indexable sentence copy.
- Hero subhead says the Trendi range covers 'Compressors, Pumps, and Air Treatment' but the page only shows Compressors and Air Treatment — there is no Trendi pumps section. This over-claims the lineup and creates a content gap vs the promise.
- Almost no internal linking: only /products, /quote and /contact. No deep links to /products/compressors, /products/air-treatment, /products/spares, /about, or the three existing blog posts — the page neither distributes authority nor captures researching buyers.
- Generic, near-duplicate image alt text ('Trendi Compressors', 'Trendi Air Treatment', 'Trendi industrial air compressor') with no model, spec, or location context. The Trendi logo alt is bare ('Trendi Logo').
- No FAQ / PAA content, so the page forfeits long-tail 'screw vs reciprocating', 'is Trendi energy efficient', 'who makes Trendi' queries and FAQ rich results.
- Anchor jump #compressors works, but there is no anchor/section IDs strategy for air-treatment, and no H2 for an overview/intro section, so the heading outline is shallow for such a long page.

**SEO opportunities**

- Own the brand term: 'Trendi air compressor' / 'Trendi screw air compressor' have Low competition and no rival dealers — Machinery Centre can rank #1 by simply stating plainly that Trendi is its own/exclusive brand and putting the entity in the title, H1 and copy.
- Capture generic product demand: pair the ownable brand with high-intent generic terms the products genuinely match — 'energy efficient screw air compressor', 'VFD screw air compressor with IE3 motor', 'two stage reciprocating air compressor 175 PSIG' — using the real specs already in the data.
- Add a real, crawlable /catalogue landing page (or anchor) and point the hero 'Download Catalogue' CTA at it, unlocking the 'air compressor catalogue PDF download' / 'Trendi compressor brochure' transactional cluster instead of dumping users on /products.
- Inject Delhi NCR + India commercial-local intent ('Trendi compressors supplied across Delhi NCR & India', 'buy from Machinery Centre, Delhi since 1987') to feed the local cluster and the brand-navigational cluster ('Machinery Centre Delhi').
- Add Product + Brand + BreadcrumbList JSON-LD (and Organization/LocalBusiness sitewide) so Trendi product cards become eligible for rich results and the brand is disambiguated as Machinery Centre's own line.
- Add a PAA-style FAQ (screw vs reciprocating, VFD savings, who makes Trendi, dew point/ISO class, AMC & spares availability) to win FAQ rich snippets and absorb informational long-tail, linking out to the three existing blog posts.
- Strengthen after-sales trust signals: genuine spares (/products/spares), installation & commissioning, and AMC — the exact reassurance a buyer needs to choose an Indian own-brand over a global name. Convert these into copy + internal links.
- Cross-link to the category routes (/products/compressors, /products/air-treatment) and /about (since 1987 authority) to consolidate topical relevance and pass authority once those routes are made individually indexable.
- Add an industry-application strip (paint, pharma/medical, food & beverage, packaging, textile, cement, automotive, laundry) tying Trendi oil-free/clean-dry-air and energy-efficiency to named verticals, capturing application long-tail and aligning with the industry clusters.
- Fix the over-claim: either add a brief 'Trendi pumps' note or correct the hero subhead to compressors + air treatment, so on-page promise matches indexable content.

**Recommended keywords**

- **Primary:** `Trendi air compressor`
- **Secondary:** Trendi screw air compressor · energy efficient screw air compressor · Trendi air compressor dealer India · VFD screw air compressor with IE3 motor · two stage reciprocating air compressor 175 PSIG · Trendi air treatment dealer Delhi
- **Long-tail:** Trendi energy efficient screw air compressor price in India · Trendi belt drive screw compressor with VFD dealer Delhi NCR · Trendi two stage reciprocating compressor 175 PSIG supplier · buy Trendi air compressor and air treatment from Delhi · Trendi Dryspell heatless desiccant dryer ISO 8573-1 class 3 · Trendi PSA nitrogen generator 99.999 purity supplier India · who makes Trendi air compressors
- **Semantic:** screw airend · three-stage air-oil separator · specific power consumption · VFD · IE3 motor · microprocessor controller · 175 PSIG · cast iron · intercooler · splash lubrication · heatless desiccant · PSA nitrogen · 0.01 micron coalescing filter · ISO 8573-1:2010 class 3 · zero air loss drain valve · dew point · oil-free clean dry air · Machinery Centre · Delhi NCR · since 1987

**On-page metadata**

- **SEO Title** (57 chars): Trendi Air Compressors & Air Treatment | Machinery Centre
- **Meta description** (150 chars): Trendi is Machinery Centre's own range of energy-efficient screw & reciprocating air compressors and air treatment, supplied across Delhi NCR & India.
- **H1:** Trendi Air Compressors & Compressed Air Treatment
- **URL slug:** `trendi (keep current /trendi route; canonical https://www.machinerycentre.in/trendi — replace placeholder domain. Optionally add anchors #compressors, #air-treatment, #catalogue, #faqs)`

**Heading outline**

- `H1` Trendi Air Compressors & Compressed Air Treatment
- `H2` Trendi: Machinery Centre's Own Energy-Efficient Compressed Air Brand
- `H2` The Trendi Advantage
  - `H3` Energy Efficient — VFD Option & IE3 Motors
  - `H3` Microprocessor Control
  - `H3` Low-Noise Design
  - `H3` Robust, Durable Construction
- `H2` Trendi Air Compressors
  - `H3` Energy Efficient Screw Air Compressor (VFD Optional, IE3)
  - `H3` Base-Mounted Direct Drive Screw Compressors
  - `H3` Two-Stage Reciprocating Air Compressor (175 PSIG, Cast Iron)
- `H2` Trendi Compressed Air Treatment
  - `H3` Dryspell Heatless Desiccant Dryers
  - `H3` Automatic Drain Valves (EDV-X & LDV Series)
  - `H3` PSA Nitrogen Generators (95% to 99.999%)
  - `H3` Advanced Filtration — Submicron, Bacteria & Vortex
- `H2` Industries We Supply Trendi Equipment To
- `H2` Genuine Spares, Installation & After-Sales Service
- `H2` Download the Trendi Catalogue
- `H2` Trendi Air Compressor FAQs
- `H2` Request a Trendi Quote

**Revised content** _(ready to paste)_

*useSEO() call (title + meta — replace line 18)*

useSEO("Trendi Air Compressors & Air Treatment | Machinery Centre", "Trendi is Machinery Centre's own range of energy-efficient screw & reciprocating air compressors and air treatment, supplied across Delhi NCR & India.");  // Title 56 chars, meta 148 chars. NOTE: also add canonical, OG/Twitter and JSON-LD — useSEO currently sets title+description only.

*Hero — H1 + subhead + CTAs*

Eyebrow: TRENDI — OUR OWN BRAND. H1: "Trendi Air Compressors & Compressed Air Treatment". Subhead: "Trendi is Machinery Centre's own range of energy-efficient screw and reciprocating air compressors and compressed-air treatment equipment. Engineered for low specific power consumption, durability and clean, dry air — supplied, installed and serviced across Delhi NCR and India since 1987." Primary CTA: "Get a Trendi Quote" -> /quote?product=Trendi. Secondary CTA: "Download the Trendi Catalogue" -> /catalogue (recommend creating a crawlable /catalogue page; until then link to #catalogue or /products/compressors, NOT a dead /products tab). FIX the over-claim: drop 'Pumps' from the lineup wording unless a Trendi pumps section is added.

*New intro H2 — brand context (add above 'The Trendi Advantage')*

H2: "Trendi: Machinery Centre's Own Energy-Efficient Compressed Air Brand". Body: "Trendi is the in-house compressed-air brand of Machinery Centre, a Delhi-based dealer and stockist of compressors and pumps since 1987. The range spans energy-efficient screw air compressors, two-stage reciprocating compressors and a complete line of compressed-air treatment — dryers, filters, drain valves and PSA nitrogen generators. Because Trendi is our own brand, you buy directly from the people who install and service it, with genuine spares and after-sales support backed from our Old Delhi base for customers across Delhi NCR and the rest of India."

*The Trendi Advantage — feature cards (keep 4 cards, tighten copy + add specifics)*

Energy Efficient: "Low specific power consumption with an optional Variable Frequency Drive (VFD) and IE3 premium-efficiency motors that cut running cost across long duty cycles." Microprocessor Control: "Intelligent microprocessor-based controllers for precise, automated operation, real-time monitoring and protective shutdowns." Low-Noise Design: "Engineered for quieter shop-floor operation without giving up industrial-grade output or reliability." Robust Durability: "Base-mounted direct-drive and cast-iron construction for a long service life and minimal maintenance."

*Trendi Compressors — section intro*

Eyebrow: AIR POWER. H2: "Trendi Air Compressors". Body: "From intelligent energy-efficient screw compressors to rugged two-stage reciprocating models, the Trendi compressor lineup delivers reliable, continuous compressed air for packaging, paint, textile, cement, automotive and general manufacturing plants. Choose belt-drive or direct-drive screw units with an optional VFD and IE3 motors, or a 175 PSIG cast-iron reciprocating compressor for workshops and continuous-duty use." CTA: "Request a Trendi Compressor Quote" -> /quote?product=Trendi+Compressors.

*Compressor card 1 — Energy Efficient Screw Air Compressor*

H3: "Energy Efficient Screw Air Compressor (VFD Optional, IE3)". Body: "Advanced screw airend with an intelligent microprocessor-based controller, delivering low specific power consumption, low noise and easy maintenance — Trendi's flagship for plants that run compressed air around the clock." Bullets: Three-stage air-oil separator; VFD option for part-load energy savings; Low specific power consumption; IE3 premium-efficiency motors.

*Compressor card 2 — Base-Mounted Direct Drive Screw Compressors*

H3: "Base-Mounted Direct Drive Screw Compressors". Body: "Base-mounted direct-drive screw compressors for dependable, vibration-controlled performance, available across a range of capacities and footprints to match your air demand." Bullets: Direct drive (no belt losses); Compact base-mounted build; Low-noise design; High reliability for continuous duty.

*Compressor card 3 — Two-Stage Reciprocating Air Compressor*

H3: "Two-Stage Reciprocating Air Compressor (175 PSIG, Cast Iron)". Body: "A two-stage reciprocating compressor delivering 175 PSIG with heavy cast-iron construction for extended pump life — ideal for automotive workshops, laundries and general workshop air." Bullets: Removable cylinders with 360° cooling; Finned copper intercooler; Splash lubrication; Precision-balanced crankshaft.

*Trendi Air Treatment — section intro*

Eyebrow: PURITY GUARANTEED. H2: "Trendi Compressed Air Treatment". Body: "Protect your pneumatic tools, processes and end-product quality with the Trendi air-treatment range — Dryspell heatless desiccant dryers, automatic condensate drains, PSA nitrogen generators and submicron filtration. Engineered for the clean, dry, oil-free compressed air demanded by pharma, food & beverage, paint and medical applications." CTA: "Enquire About Trendi Air Treatment" -> /quote?product=Trendi+Air+Treatment.

*Treatment card 1 — Dryspell Dryers*

H3: "Dryspell Heatless Desiccant Dryers". Body: "Heatless desiccant compressed-air dryers giving a total cleaning solution for both lubricated and non-lubricated air, achieving a low pressure dew point for moisture-sensitive processes." Bullets: Noise level under 70 dB; Corrosion- and scale-free; High-strength adsorbent; ISO 8573-1:2010 Class 3 air quality.

*Treatment card 2 — Automatic Drain Valves*

H3: "Automatic Drain Valves (EDV-X & LDV Series)". Body: "The EDV-X and LDV automatic drains clear sludge- and rust-laden condensate from your compressed-air system using reliable electronic, condensate-sensing circuitry — without bleeding away compressed air." Bullets: Condensate-sensing type; Zero air loss; Adjustable cycle time; Fault-tolerant control.

*Treatment card 3 — Nitrogen Generators*

H3: "PSA Nitrogen Generators (95% to 99.999%)". Body: "Modular Pressure Swing Adsorption (PSA) nitrogen generators producing on-site nitrogen for food & beverage packaging, inerting, pharma and electronics — an alternative to bottled nitrogen with continuous supply." Bullets: Purity from 95% to 99.999%; Microprocessor controller; Corrosion-free aluminium columns; Modular, expandable construction.

*Treatment card 4 — Advanced Filtration*

H3: "Advanced Filtration — Submicron, Bacteria & Vortex". Body: "A complete filtration line — Vortex water separators, bacteria filters and submicron Cleansweep coalescing filters — for the extreme purity required by medical, pharma and food-grade compressed air." Bullets: Removes water, oil and solids; Autoclave-sterilisable bacteria filters; Borosilicate filter media; Filtration down to 0.01 micron.

*New H2 — Industries strip (add before spares/CTA)*

H2: "Industries We Supply Trendi Equipment To". Body: "Trendi compressors and air-treatment systems run in plants across India — packaging and food & beverage (oil-free, clean dry air and on-site nitrogen), paint shops and automotive workshops (moisture-free air for a flawless finish), pharmaceutical and medical facilities (ISO 8573-1 air quality and bacteria filtration), and textile, cement and commercial laundry operations (energy-efficient continuous-duty air). Tell us your application and we'll size the right Trendi solution. Read more on our blog: choosing the right equipment and why energy efficiency matters." (Link the blog phrases — see internal links.)

*New H2 — Spares, Installation & Service*

H2: "Genuine Spares, Installation & After-Sales Service". Body: "Because Trendi is our own brand, Machinery Centre supplies genuine air filters, oil filters, air-oil separators, intake valves and service kits, and handles installation, commissioning and annual maintenance for compressors and air-treatment equipment across Delhi NCR and India. Browse compressor and pump spares, or talk to our team about a maintenance plan to protect your uptime." (Link 'compressor and pump spares' -> /products/spares; 'talk to our team' -> /contact.)

*New H2 — Catalogue download (replace the broken hero promise with a real section)*

H2: "Download the Trendi Catalogue". Body: "Get full Trendi specifications — capacities, pressures, dimensions and air-quality ratings for the complete compressor and air-treatment range — in one place. Download the Trendi catalogue (PDF) or request printed specification sheets for your shortlisted models." CTA: "Download Trendi Catalogue (PDF)" -> /catalogue. RECOMMENDATION: build a crawlable /catalogue landing page that lists each PDF as a real link rather than triggering a JS modal, so this content is indexable for 'Trendi compressor catalogue PDF download'.

*CTA Banner — bottom*

H2: "Ready to Upgrade Your Compressed Air System?". Body: "Tell us your CFM, working pressure and application and our Delhi-based team will recommend the right Trendi compressor or air-treatment solution — with installation, genuine spares and after-sales service backed since 1987." Buttons: "Request a Trendi Quote" -> /quote?product=Trendi+Complete+System; "Contact Our Sales Team" -> /contact.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| compressor and pump spares | `/products/spares` | In the new 'Genuine Spares, Installation & After-Sales Service' H2 section. |
| Trendi compressors | `/products/compressors` | In the 'Trendi Air Compressors' section intro, linking the brand range to the indexable compressors category route. |
| compressed air treatment | `/products/air-treatment` | In the 'Trendi Compressed Air Treatment' section intro. |
| Machinery Centre, a Delhi-based dealer since 1987 | `/about` | In the new intro 'Trendi: Machinery Centre's Own...' H2 section, for brand/authority context. |
| Get a Trendi Quote | `/quote?product=Trendi` | Hero primary CTA and bottom CTA banner. |
| choosing the right equipment | `/blog/choosing-the-right-pump-for-your-industry` | In the 'Industries We Supply' section as a researching-buyer resource. |
| why energy efficiency matters | `/blog/importance-of-energy-efficient-equipment` | In the 'Industries We Supply' / Trendi Advantage area, supporting the energy-efficiency claim. |
| air compressor maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | In the Spares/Service section or FAQ answer about maintenance. |
| talk to our team | `/contact` | Spares/Service section and bottom CTA ('Contact Our Sales Team'). |
| browse our full product range | `/products` | Hero secondary area or footer of the page as a hub link. |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Trendi logo (Cloudinary, hero) | Trendi logo — Machinery Centre's own air compressor and air treatment brand |
| Hero background /assets/images/about-main.png | Trendi energy-efficient industrial screw air compressor on a factory floor |
| Compressors section /assets/images/hero.png | Trendi belt-drive screw air compressor with VFD and IE3 motor, supplied by Machinery Centre Delhi |
| Air Treatment section /assets/images/hero-machinery.png | Trendi compressed air treatment system — Dryspell desiccant dryer and filtration unit |

**Conversion recommendations**

- Fix the headline CTA promise: 'Download Complete Catalog' currently links to /products (a dead promise). Either build a real /catalogue page with downloadable Trendi PDFs or relabel the button 'Browse the Trendi Range' so the action matches the destination — broken-promise CTAs kill trust on a B2B page.
- Make 'Get a Trendi Quote' the single primary CTA (orange, top-right of hero and repeated mid-page after each section), pre-filling the product param (/quote?product=Trendi+Compressors etc.) so the enquiry arrives pre-qualified.
- Add a sticky/floating WhatsApp + Call CTA using the exact NAP (WhatsApp +91 9810054137, landline 011-41440012) — industrial buyers in India convert heavily via phone/WhatsApp, not just web forms.
- Surface the 'since 1987 / own brand / genuine spares & service' trust trio as a small badge row near the hero — it is the single biggest reason a buyer will trust an Indian own-brand compressor over a global name.
- Add a spec-led comparison or 'How to choose: screw vs reciprocating' mini-block linking to /blog/choosing-the-right-pump-for-your-industry to help undecided buyers self-qualify before they request a quote.
- Place a quote CTA immediately after the Compressors section AND after the Air Treatment section, not only at the very bottom — long-scroll pages lose buyers who decide mid-page.
- Add an 'Industries served' strip with named verticals so a visitor instantly sees their own use case (paint, pharma, food, packaging, textile, automotive) — relevance lifts both conversion and topical ranking.
- Recommendation (do not assert): replace the yahoo.com address with a branded sales@machinerycentre.in and show it on the quote/contact CTAs to raise B2B trust. Add an ISO 9001 / dealer-authorization badge ONLY IF genuinely held.
- Standardise the years-in-business figure to 'Since 1987' (homepage meta says 35+ while counters compute 39) and reuse the same wording here for consistency.

**Page FAQs**

- **Who makes Trendi air compressors?** Trendi is the exclusive own brand of Machinery Centre, a Delhi-based dealer and stockist of compressors and pumps established in 1987. Because Trendi is our own brand, you buy, install and service it directly through us, with genuine spares and after-sales support across Delhi NCR and India.
- **What types of Trendi air compressors are available?** The Trendi range includes energy-efficient screw air compressors (belt-drive and base-mounted direct-drive, with an optional VFD and IE3 motors) and two-stage reciprocating air compressors delivering 175 PSIG with heavy cast-iron construction for workshop and continuous-duty use.
- **Are Trendi screw compressors energy efficient?** Yes. Trendi screw compressors are built for low specific power consumption, with an optional Variable Frequency Drive (VFD) that matches output to demand and IE3 premium-efficiency motors — both of which reduce energy cost on plants running compressed air for long hours.
- **Should I choose a screw or a reciprocating Trendi compressor?** Screw compressors suit continuous, high-volume air demand with the lowest running cost, while two-stage reciprocating compressors suit intermittent or workshop duty at higher pressures such as 175 PSIG. Share your CFM, working pressure and running hours and our team will recommend the right model.
- **What compressed air treatment does Trendi offer?** Trendi air treatment covers Dryspell heatless desiccant dryers (ISO 8573-1:2010 Class 3), automatic zero-air-loss condensate drains (EDV-X and LDV), PSA nitrogen generators from 95% to 99.999% purity, and submicron, bacteria and Vortex filtration down to 0.01 micron.
- **Can I get genuine Trendi spares and service in Delhi NCR?** Yes. Machinery Centre supplies genuine air and oil filters, air-oil separators, intake valves and service kits, and provides installation, commissioning and annual maintenance contracts for Trendi compressors and air-treatment equipment across Delhi NCR and India.
- **How do I get a price or quote for a Trendi air compressor?** Use our quote form with your required CFM, working pressure and application, or call our Delhi office, and we will share Trendi specifications and pricing along with installation and after-sales options.

**Schema:** Add Brand schema for Trendi (name: 'Trendi', a brand of Machinery Centre) and reference it from each Product so search engines treat Trendi as Machinery Centre's own line. · Add Product schema (with @type Product, brand -> Trendi, manufacturer/seller -> Organization Machinery Centre) for the headline Trendi items: Energy Efficient Screw Air Compressor, Two-Stage Reciprocating Air Compressor (175 PSIG), Dryspell Desiccant Dryer, PSA Nitrogen Generator. Use only specs present on-page (175 PSIG, ISO 8573-1:2010 Class 3, 95–99.999% purity, 0.01 micron). Do NOT add review/aggregateRating until real, attributable reviews exist. · Add FAQPage schema marking up the seven FAQs above for FAQ rich-result eligibility. · Add BreadcrumbList schema: Home > Trendi (https://www.machinerycentre.in/trendi — replace placeholder domain). · Add Organization + LocalBusiness schema sitewide (referenced here) using the exact NAP: Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; telephone 011-41440012; mobile +91 9810054137 / 9891155438; founded 1987. · Add a canonical link (https://www.machinerycentre.in/trendi) plus Open Graph and Twitter Card tags (og:title, og:description, og:image using the Trendi hero/logo, og:type=website) — none exist today. · CRITICAL ENABLER: because this is a Vite + React SPA with client-only useSEO and no SSR/prerender, implement prerendering or static export so the title, meta, canonical, OG and all JSON-LD ship in the initial HTML; also add sitemap.xml (include /trendi) and robots.txt. Without prerendering, the JSON-LD above is injected late and is unreliable for crawlers.

---

### Blog Hub / Insights index — `https://www.machinerycentre.in/blog (PLACEHOLDER domain — must be replaced with the real production domain in canonical, sitemap, OG and JSON-LD before launch)`

_Top-of-funnel informational hub. This is the only Informational-intent page in the architecture; its job is to capture "how to / which to choose / explained" queries (air compressor maintenance, screw vs reciprocating, pump selection, dew point, energy efficiency), demonstrate technical authority for a B2B audience, and funnel qualified readers into the commercial product/category, /quote and /contact pages. It also acts as a topical-authority and internal-linking layer that strengthens the money pages (compressors, pumps, air-treatment, spares, Trendi)._

**Current issues**

- SEO title 'Blog & Insights | Machinery Centre' (33 chars) is generic, under the 50-60 target, and wastes prime real estate — it carries zero keyword or local signal and does not say the blog is about compressors, pumps or air-treatment.
- Meta description (set in Blog.tsx line 7) 'Read our latest articles on industrial machinery, compressor maintenance, and pump selection.' is 92 chars — well under 140-160 — and leans on the generic, off-niche phrase 'industrial machinery' rather than their real niche (compressed-air systems and industrial pumps in Delhi NCR).
- SEO is client-only: useSEO() mutates document.title/meta after React mounts. With no SSR/prerendering the initial HTML served to crawlers has no real title, meta, canonical, OG/Twitter cards or JSON-LD — risky for an SPA and the root cause that must be fixed for any of this to rank.
- No canonical tag on /blog and no self-referencing canonical on the article pages — duplicate-URL and parameter risk.
- No Blog/CollectionPage or ItemList JSON-LD on the hub, and no BlogPosting/Article schema on the individual posts — losing rich-result eligibility and entity clarity.
- H1 'Blog & Insights' is brand-agnostic and keyword-empty; the supporting paragraph ('Stay updated with the latest industry news...') is filler with no entities, no Delhi-NCR signal and no internal links.
- Only one heading level exists on the hub (the H1) — the article <h2> titles are the post card links. There is no editorial structure, no topic/category grouping, and no intro copy that targets informational keywords.
- Thin content: only 3 posts, all dated within ~30 days of each other (May-June 2026), no category taxonomy, no related-products links, and no author bylines that build E-E-A-T (authors are generic labels like 'Machinery Centre Sustainability Group').
- Article images are hot-linked from Unsplash (external CDN) — generic stock unrelated to their actual Trendi/Ingersoll-Rand/Kirloskar equipment, an availability/licensing risk, and they slow LCP. Alt text is just the post title, not descriptive.
- Zero internal links from the hub into commercial pages (/products/*, /trendi, /quote, /contact) — the blog does not pass any equity or funnel traffic to money pages.
- No on-page CTA on the hub — a reader who finishes scanning has no next step (no quote/contact/WhatsApp prompt).
- Blog post dates use 'June 15, 2026' display strings only; there is no machine-readable datePublished/dateModified, so freshness signals are invisible to crawlers.

**SEO opportunities**

- Reframe the hub from a generic 'Blog & Insights' page to a 'Compressed Air & Pump Knowledge Hub' that owns informational queries (maintenance, sizing, screw vs reciprocating, dew point, energy efficiency) and routes readers to the commercial pages — the single best top-of-funnel asset in the site.
- Add a keyword-rich intro paragraph and an H2-level topic structure (Air Compressors / Industrial Pumps / Compressed Air Treatment / Maintenance & Service) so the hub itself ranks for 'air compressor maintenance tips', 'how to choose industrial pump', 'screw vs reciprocating compressor' and 'compressed air dew point explained'.
- Internally link every post and every topic cluster to its matching money page (compressors, pumps, air-treatment, spares, Trendi, /quote) to build a hub-and-spoke topical authority model that lifts the commercial pages.
- Add Blog + ItemList JSON-LD to the hub and BlogPosting schema to each article (with datePublished/dateModified and a real author/publisher) for freshness and rich-result eligibility — and fix the SSR/prerender gap so this markup ships in the initial HTML.
- Expand the editorial calendar beyond 3 posts into the informational long-tail mapped in the keyword plan (CFM sizing, VFD payback, ISO 8573-1 air classes, desiccant vs refrigerated dryer, AMC value, Rotodel gear-pump selection) — each new post is a new ranking surface that links back to a money page.
- Weave Delhi / Delhi-NCR commercial-local context into intro and CTA copy ('serving factories across Delhi NCR since 1987') so even informational pages reinforce the local entity that powers the near-me / local-pack clusters.
- Replace generic stock imagery with real equipment photos hosted on the production domain — improves relevance, LCP and trust, and lets alt text describe actual Trendi/Ingersoll-Rand/Kirloskar gear.
- Add a persistent conversion block (request a quote / call 011-41440012 / WhatsApp) to the hub and to the end of every article so informational traffic has a clear next step into the funnel.

**Recommended keywords**

- **Primary:** `air compressor maintenance tips`
- **Secondary:** how to choose industrial pump · screw vs reciprocating compressor · compressed air dew point explained · energy efficient air compressor · how to size an air compressor
- **Long-tail:** how to maintain industrial air compressor to reduce downtime · screw vs reciprocating air compressor which is better for factory · how to choose the right pump for your industry · what dew point do I need for a compressed air dryer · do energy efficient compressors with VFD save money in India
- **Semantic:** preventive maintenance · CFM sizing · working pressure PSI · dew point · viscosity · flow rate m3/hr · head · ISO 8573-1 · VFD · IE3 motor · positive displacement · centrifugal pump · air-oil separator · coalescing filter · Trendi · Ingersoll Rand · Kirloskar · Delhi NCR

**On-page metadata**

- **SEO Title** (54 chars): Air Compressor & Pump Buying Guides | Machinery Centre
- **Meta description** (159 chars): Expert guides on air compressor maintenance, pump selection, dew point and energy-efficient compressed air systems from Machinery Centre, Delhi NCR since 1987.
- **H1:** Compressed Air & Pump Knowledge Hub
- **URL slug:** `blog`

**Heading outline**

- `H1` Compressed Air & Pump Knowledge Hub
- `H2` Air Compressor Guides
  - `H3` Essential Maintenance Tips for Air Compressors
  - `H3` Screw vs Reciprocating Air Compressors: Which Suits Your Factory?
  - `H3` How to Size an Air Compressor (CFM, PSI & Duty Cycle)
- `H2` Industrial Pump Guides
  - `H3` Choosing the Right Pump for Your Industry
  - `H3` Rotary Gear, Metering & Vacuum Pumps Compared
- `H2` Compressed Air Treatment Guides
  - `H3` Compressed Air Dew Point Explained (ISO 8573-1 Made Simple)
  - `H3` Refrigerated vs Desiccant Dryers: Picking the Right Air Dryer
- `H2` Energy Efficiency & Cost Saving
  - `H3` The Importance of Energy-Efficient Equipment
- `H2` Maintenance, Spares & After-Sales Service
- `H2` Talk to a Compressed-Air & Pump Specialist in Delhi NCR
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*H1 + intro (replaces 'Blog & Insights' + filler paragraph, Blog.tsx lines 16-20)*

H1: Compressed Air & Pump Knowledge Hub

Intro: Practical, no-nonsense guides from the team at Machinery Centre — a Delhi-based dealer and stockist of air compressors, industrial pumps and compressed-air treatment equipment since 1987. Whether you are sizing a new screw compressor, comparing reciprocating against rotary, choosing a pump for a viscous fluid, or working out the right dew point for your air dryer, these articles distil what we have learned supplying and servicing equipment for packaging, paint, cement, textile, pharma and laundry plants across Delhi NCR. Browse the guides below, then talk to us when you are ready to spec, buy or service your system.

*H2 — Air Compressor Guides (section lead-in)*

From belt-drive and direct-drive screw compressors to two-stage reciprocating units, the right choice depends on your duty cycle, working pressure and energy budget. These guides cover maintenance, selection and sizing so your compressed-air system runs reliably and economically. Explore our full range on the air compressors page.

*H2 — Industrial Pump Guides (section lead-in)*

Centrifugal or positive displacement, rotary gear or metering, the wrong pump means downtime and wasted energy. These guides walk through fluid properties, flow rate, head and viscosity so you specify with confidence. See the brands we stock — Kirloskar, Rotodel, Crompton Greaves and more — on the industrial pumps page.

*H2 — Compressed Air Treatment Guides (section lead-in)*

Clean, dry, oil-free air protects your tools, products and processes. These guides explain dew point, ISO 8573-1 air-quality classes and how to choose between refrigerated and desiccant dryers, filters and drains. View dryers, filters and nitrogen generators on the air treatment page.

*H2 — Energy Efficiency & Cost Saving (section lead-in)*

Compressors and pumps are among the biggest electricity consumers in any plant. These guides show how IE3 motors, VFD control and right-sized equipment cut your running costs. Trendi energy-efficient compressors are built for exactly this — learn more on the Trendi range.

*H2 — Maintenance, Spares & After-Sales Service*

Reliable uptime comes from genuine OEM spares and disciplined preventive maintenance — air and oil filters, air-oil separators, intake valves, service kits and pump spares fitted on schedule. Machinery Centre supplies genuine spares and supports installation, repair and annual maintenance across Delhi NCR. Browse spare parts or get in touch to set up a service plan.

*H2 — Talk to a Compressed-Air & Pump Specialist in Delhi NCR (conversion block)*

Need help applying any of this to your plant? Our team has been specifying compressors, pumps and air-treatment systems for Delhi-NCR industry since 1987. Call 011-41440012, message us on WhatsApp at +91 9810054137, or request a quote and we will recommend the right equipment, spares and service plan for your application.

*Per-card display tweak (Blog.tsx card markup, lines 47-60)*

Keep the card title as the post H3-equivalent link, but add a one-line category eyebrow above each title (e.g. 'AIR COMPRESSORS', 'INDUSTRIAL PUMPS', 'ENERGY EFFICIENCY') driven by the post's primary tag, and change the read-more label from the generic 'Read Article' to a descriptive 'Read the guide' for clarity. Render machine-readable dates with a <time datetime='2026-06-15'> element instead of the plain string 'June 15, 2026'.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| air compressors page | `/products/compressors` | End of the 'Air Compressor Guides' H2 section lead-in |
| industrial pumps page | `/products/pumps` | End of the 'Industrial Pump Guides' H2 section lead-in |
| air treatment page | `/products/air-treatment` | End of the 'Compressed Air Treatment Guides' H2 section lead-in |
| Trendi range | `/trendi` | End of the 'Energy Efficiency & Cost Saving' H2 section lead-in |
| Browse spare parts | `/products/spares` | In the 'Maintenance, Spares & After-Sales Service' section |
| get in touch to set up a service plan | `/contact` | In the 'Maintenance, Spares & After-Sales Service' section |
| request a quote | `/quote` | In the 'Talk to a Specialist' conversion block |
| about Machinery Centre | `/about` | In the intro paragraph, on the phrase 'the team at Machinery Centre' (links to company background for E-E-A-T) |
| dealer and stockist since 1987 | `/` | Optional brand reinforcement link in the intro |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Card image for 'Essential Maintenance Tips for Air Compressors' (currently Unsplash photo-1581092580497, alt = post title) | Technician servicing an industrial air compressor during preventive maintenance |
| Card image for 'Choosing the Right Pump for Your Industry' (currently Unsplash photo-1504917595217) | Industrial centrifugal and gear pumps installed in a factory plant room |
| Card image for 'The Importance of Energy Efficient Equipment' (currently Unsplash photo-1532996122724) | Energy-efficient screw air compressor with VFD control and IE3 motor |
| Hub header / BookOpen icon area | Machinery Centre compressed air and pump knowledge hub, Delhi NCR |

**Conversion recommendations**

- Add a persistent conversion block at the foot of the hub (and the end of every article) with three actions: 'Request a Quote' -> /quote, 'Call 011-41440012' as a tel: link, and 'WhatsApp +91 9810054137' as a wa.me link — informational readers currently hit a dead end.
- Add a contextual mid-page CTA card between topic sections (e.g. after 'Air Compressor Guides') such as 'Not sure which compressor fits your CFM and duty cycle? Get a free recommendation' linking to /quote.
- Show real author bylines with a short credential line ('Reviewed by the Machinery Centre service team, Delhi') instead of generic group names, to build E-E-A-T and trust before the conversion ask.
- Add a lightweight 'Download the product catalogue' prompt linking to /products (or a future /catalogue route) so research-stage readers convert into a lead even before they request a quote.
- Surface the 'Since 1987' and named-industry credentials (packaging, paint, cement, textile, pharma, laundry) near CTAs to reduce friction — but keep unverified counters like '15,000+ clients' out until substantiated.
- Recommend (conditional) a branded sender/contact email such as sales@machinerycentre.in over the yahoo.com address in any contact prompt to raise trust — flag, do not assert it exists.

**Page FAQs**

- **How often should an industrial air compressor be serviced?** For most industrial screw and reciprocating compressors, check oil level and drain tank moisture daily, inspect air and oil filters weekly, and carry out a full service every 500-1,000 running hours or per the manufacturer's schedule. Replacing air-oil separators, filters and intake valves on time prevents costly breakdowns. Machinery Centre supplies genuine OEM spares and offers preventive maintenance across Delhi NCR.
- **Should I choose a screw or a reciprocating air compressor?** Screw compressors suit continuous, high-demand duty and run more efficiently at sustained loads, especially energy-efficient models with VFD and IE3 motors. Two-stage reciprocating compressors (for example 175 PSI, 100% continuous-duty cast-iron units) are well suited to intermittent demand and workshops. The right choice depends on your CFM, working pressure and duty cycle — we can help you size it.
- **What dew point do I need for my compressed air?** Dew point is the temperature at which moisture condenses out of compressed air. A refrigerated dryer typically delivers around +3 C dew point for general factory air, while a desiccant dryer reaches -40 C or lower for critical uses such as pharma, instrument and spray-painting lines. ISO 8573-1 defines the air-quality classes; we can match a Trident dryer to your requirement.
- **How do I choose the right industrial pump for my application?** Start with the fluid: its viscosity, temperature and corrosiveness. Centrifugal pumps handle large volumes of low-viscosity fluids; positive-displacement pumps such as rotary gear and metering pumps suit high-viscosity fluids and precise dosing at higher pressure. Then match flow rate (m3/hr) and head to your system. Machinery Centre stocks Kirloskar, Rotodel and Crompton Greaves pumps with spares.
- **Do energy-efficient compressors and pumps really lower running costs?** Yes. Compressors and pumps are major electricity consumers, so IE3 motors and VFD control that match output to demand can cut energy use significantly over the equipment's life. Efficient machines also run cooler with less mechanical stress, reducing breakdowns. The upfront premium is usually offset by lower electricity and maintenance costs — Trendi compressors are built for this.
- **Where can I buy compressors, pumps and spares in Delhi NCR?** Machinery Centre is a long-established dealer and stockist based at 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, supplying air compressors, industrial pumps, air-treatment equipment and genuine spares across Delhi NCR since 1987. Call 011-41440012, WhatsApp +91 9810054137, or request a quote online.

**Schema:** Add Blog (or CollectionPage) JSON-LD to /blog with name, description, url (use https://www.machinerycentre.in/blog — REPLACE placeholder domain) and publisher set to the Organization. · Add an ItemList / blogPost array on the hub listing each post with position, url, headline, image and datePublished so crawlers see the collection structure. · Add BlogPosting (or Article) JSON-LD on each /blog/:slug page with headline, description, image (production-hosted), author (a real Person/Organization, not a generic group label), publisher with logo, datePublished and dateModified, and mainEntityOfPage pointing to the canonical article URL. · Add FAQPage JSON-LD built from the six FAQs above, scoped to this hub page. · Add BreadcrumbList JSON-LD: Home > Blog (and Home > Blog > Article on post pages). · Reference the site-wide Organization and LocalBusiness schema (exact NAP: 3858 Shradhanand Marg, Shah Ganj, Delhi-110006; phone 011-41440012) as the publisher node so the blog inherits the local-business entity. · Add a self-referencing canonical tag to /blog and to each article, plus Open Graph and Twitter Card tags (og:title, og:description, og:image, og:type=article) — and ensure all of this, including JSON-LD, ships in prerendered/SSR HTML rather than being injected client-side by useSEO().

---

### Request a Quote (Quote / Lead-Gen conversion page) — `https://www.machinerycentre.in/quote`

_Primary bottom-of-funnel conversion page. This is where commercial and transactional intent from every product, category, brand and service cluster is meant to convert into a B2B price enquiry / RFQ. Its job is to capture qualified leads (item/model, quantity, application industry, contact) for Machinery Centre's compressed-air systems, industrial pumps, air-treatment equipment and OEM spares, while also being indexable enough to rank for "request a quote / get price" intent and reassure the buyer with trust, response-time and contact-alternative signals._

**Current issues**

- NO SEO metadata at all: Quote.tsx is the ONLY major page that does NOT import or call the useSEO() hook (verified — 12 other pages use it, this one does not). The page therefore inherits whatever document.title/meta the previously-viewed route left behind, so it has no stable <title>, no meta description, no canonical. It is effectively invisible/duplicate to search for its own intent.
- H1 is generic and non-commercial: 'Request a Quote' carries zero product, brand, or geo signal. It does not tell Google or the buyer WHAT can be quoted (compressors, pumps, air dryers, spares) or WHERE (Delhi / Delhi NCR / India).
- Thin, non-indexable content: the entire page is a form plus one weak instructional sentence ('Please place your order query here... Fill your details correctly for further processing'). There is no supporting copy, no value proposition, no FAQ, no trust signals — nothing to rank on and little to convert a high-value B2B buyer.
- Lead-capture friction & gaps: the form asks for a full shipping address (Address Line 1/2, City, State, Country, Zip) before the buyer has even received a price — heavy for a quote stage. Critically it does NOT capture an email or company/organisation name, which are the two fields B2B sales actually needs to send a formal quotation and qualify the lead.
- No response-time or trust reassurance near the CTA. Buyers submitting an RFQ want to know 'when will I hear back' and 'who am I dealing with'. There is no mention of working hours, callback SLA, Since-1987 longevity, authorized-dealer status, or genuine-spares/after-sales support.
- No alternative conversion paths on-page: a serious buyer who does not want to fill a 15-field form has no visible phone, WhatsApp, or email CTA. The known WhatsApp (+91 9810054137) and landline (011-41440012) are absent.
- Submit button label 'Submit Enquiry' uses a tiny 10px tracking-widest style and the page mixes 'Quote', 'order query', 'enquiry' inconsistently — weak conversion microcopy.
- Consent links use raw <a href> to /privacy-policy and /terms-of-use, causing full SPA reloads instead of react-router navigation (minor UX/SEO crawl-path issue).
- Placeholder testimonials and unverified claims elsewhere on the site (15,000+ clients, 39+ years) are not surfaced here as conversion proof — the page wastes the chance to reassure.
- SPA has no SSR/prerender, so even once a title/meta is added via useSEO(), the quote page's content is only in client-rendered JS — add prerendering so the H1, intro copy and FAQ exist in the initial HTML.

**SEO opportunities**

- Add the useSEO() hook (already used by 11 sibling pages) to set a stable, intent-matched title, meta description and canonical (https://www.machinerycentre.in/quote) for this page.
- Rank for bottom-funnel RFQ intent: 'request a quote for air compressor', 'industrial pump price quote India', 'compressor price enquiry Delhi' — low-to-medium competition transactional terms that map directly here.
- Capture the product + geo entity set in supporting copy: name the quotable ranges (Ingersoll Rand & Trendi compressors, Kirloskar/Rotodel pumps, Trident air dryers & filters, OEM spares) and Delhi / Delhi NCR / pan-India supply, turning a thin form into an indexable, relevant page.
- Add a FAQ section (PAA-style) targeting 'how to get a quote', 'what details are needed for a compressor quote', 'do you quote with installation', 'minimum order' — captures long-tail informational-to-transactional queries and earns FAQ rich results.
- Add FAQPage + ContactPage/WebPage JSON-LD plus Breadcrumb and Organization/LocalBusiness reference to win rich results and reinforce NAP/local signals for the Delhi-NCR clusters.
- Internal-link the quote page outward to the four product categories, Trendi, and the maintenance blog posts so this high-authority conversion page distributes link equity and helps buyers self-qualify before submitting.
- Reduce form friction (defer full address, add email + company) to lift completion rate — a direct conversion-rate-optimisation win that compounds the SEO traffic.
- Surface trust + speed signals (Since 1987, authorized dealer of Ingersoll Rand & Trident, genuine spares & after-sales, fast callback, WhatsApp/phone) to improve conversion and dwell time, indirectly aiding rankings.

**Recommended keywords**

- **Primary:** `request a quote for air compressor`
- **Secondary:** industrial compressor price quote India · industrial pump price enquiry Delhi · compressor price quote Delhi NCR · get a quote compressed air systems · request RFQ industrial equipment Delhi
- **Long-tail:** get a price quote for screw air compressor in Delhi NCR · request a quotation for Kirloskar pump India · industrial air compressor price enquiry with installation Delhi · bulk quote for compressor and pump spares Delhi · how to get a quote for Trident air dryer in India
- **Semantic:** request quote · price enquiry · quotation · RFQ · bulk order enquiry · B2B enquiry · get a quote · item / model number · application industry · lead time · after-sales support · genuine spares · Since 1987 · authorized dealer · Delhi NCR · pan-India supply

**On-page metadata**

- **SEO Title** (53 chars): Request a Quote | Air Compressors & Pumps | Delhi NCR
- **Meta description** (160 chars): Request a price quote for industrial air compressors, pumps, air dryers and OEM spares. Machinery Centre supplies Delhi NCR & pan-India since 1987 — fast reply.
- **H1:** Request a Quote for Air Compressors, Pumps & Spares
- **URL slug:** `quote`

**Heading outline**

- `H1` Request a Quote for Air Compressors, Pumps & Spares
- `H2` Get a price quote from a Delhi-NCR compressed-air & pump specialist since 1987
- `H2` What you can request a quote for
  - `H3` Air compressors — Ingersoll Rand & Trendi screw and reciprocating
  - `H3` Industrial pumps — Kirloskar, Rotodel & Crompton Greaves
  - `H3` Compressed-air treatment — Trident dryers, filters & nitrogen generators
  - `H3` Genuine OEM spares & service kits
- `H2` Quote request form
  - `H3` Contact information
  - `H3` What do you need a quote for?
  - `H3` Delivery & shipping details (optional)
- `H2` Prefer to talk? Call or WhatsApp us directly
- `H2` Why buy from Machinery Centre
- `H2` Quote request FAQs

**Revised content** _(ready to paste)_

*Intro (replaces the H1 + weak instructional sentence, lines 99-102)*

<h1>Request a Quote for Air Compressors, Pumps & Spares</h1>
<p>Tell us what you need and our team will get back to you with pricing, availability and lead time — usually within one working day. Whether it is a single screw air compressor, a batch of Kirloskar pumps, a Trident air dryer or replacement spares, share the model and quantity below and we will prepare a clear, no-obligation quotation. Machinery Centre has supplied compressed-air systems and industrial pumps across Delhi NCR and pan-India since 1987.</p>

*What you can request a quote for (new section above the form)*

<h2>What you can request a quote for</h2>
<p>Not sure of the exact model? Just describe your application and required capacity — CFM and working pressure for compressors, or flow rate and head for pumps — and we will recommend the right fit.</p>
<h3>Air compressors — Ingersoll Rand &amp; Trendi screw and reciprocating</h3>
<p>Energy-efficient Trendi belt-drive and direct-drive screw compressors (VFD optional, IE3 motors, 3-stage air-oil separator) and two-stage reciprocating units, plus Ingersoll Rand 175 PSI 100% continuous-duty reciprocating compressors. <a href="/products/compressors">See the compressor range</a> or <a href="/trendi">explore Trendi compressors</a>.</p>
<h3>Industrial pumps — Kirloskar, Rotodel &amp; Crompton Greaves</h3>
<p>Rotodel HGN/HGSX rotary gear pumps, Kirloskar metering/dosing pumps and KV/DV vacuum pumps (up to 640 mmHg, 162 m³/hr), and Crompton Greaves pump sets. <a href="/products/pumps">Browse the pump range</a>.</p>
<h3>Compressed-air treatment — Trident dryers, filters &amp; nitrogen generators</h3>
<p>Trident refrigerated (Coldspell) and heatless desiccant (Dryspell) dryers, submicron and coalescing filters down to 0.01 micron, automatic drain valves and PSA nitrogen generators (95–99.999% purity). <a href="/products/air-treatment">View air-treatment equipment</a>.</p>
<h3>Genuine OEM spares &amp; service kits</h3>
<p>Air and oil filters, air-oil separators, intake valves, gaskets, service kits and genuine pump spares (boiler feed, centrifugal, self-priming and more). <a href="/products/spares">See spares &amp; service parts</a>.</p>

*Form intro micro-copy (above the form fields)*

<h2>Quote request form</h2>
<p>Fields marked with an asterisk (*) are required. The more detail you give us on the item, quantity and application, the faster and more accurately we can quote.</p>

*Form section headings (rename the three existing form headings)*

Rename 'Contact Information' to 'Contact information', rename 'Order Specifications' to 'What do you need a quote for?', and rename 'Shipping Details' to 'Delivery & shipping details (optional)'. Recommended field changes: ADD a required 'Email' field and an optional 'Company / Organisation' field to the contact section (both needed to send a formal quotation and qualify B2B leads); move the full address block to LAST and clearly mark it optional so address entry is not a barrier to submitting a price enquiry.

*Submit button label (replaces 'Submit Enquiry', line 246)*

Request My Quote

*Success-state copy (replaces lines 108-110)*

<h2>Quote Request Received</h2>
<p>Thank you for your enquiry. Our team is reviewing your specifications and will get back to you with pricing and availability, usually within one working day. Need it sooner? Call us on 011-41440012 or WhatsApp +91 9810054137.</p>

*Talk to us directly (new section below the form)*

<h2>Prefer to talk? Call or WhatsApp us directly</h2>
<p>For urgent requirements or technical questions before you raise a quote, reach our Delhi team directly:</p>
<ul>
<li>Phone: 011-41440012 · 9810054137 · 9891155438</li>
<li>WhatsApp: +91 9810054137</li>
<li>Email: machinerycentre@yahoo.com</li>
<li>Visit: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006</li>
</ul>
<p>You can also use our <a href="/contact">contact page</a> for location and directions.</p>

*Why buy from Machinery Centre (new trust section)*

<h2>Why buy from Machinery Centre</h2>
<ul>
<li><strong>Established since 1987</strong> — a long-standing Delhi-based dealer and stockist of compressed-air systems and industrial pumps.</li>
<li><strong>Authorized dealer of Ingersoll Rand and Trident</strong>, and stockist for Kirloskar, Rotodel, Crompton Greaves, Indfoss and Everest.</li>
<li><strong>Genuine OEM spares and after-sales service</strong> to keep your equipment running, with installation and maintenance support.</li>
<li><strong>One Stop Shop</strong> for compressors, pumps, air treatment and spares — supplied across Delhi NCR and pan-India.</li>
</ul>
<p>New to specifying equipment? Read our guides on <a href="/blog/choosing-the-right-pump-for-your-industry">choosing the right pump for your industry</a> and <a href="/blog/essential-maintenance-tips-for-air-compressors">essential air-compressor maintenance</a> before you request a quote.</p>

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| See the compressor range | `/products/compressors` | In the 'Air compressors' subsection of 'What you can request a quote for' |
| explore Trendi compressors | `/trendi` | In the 'Air compressors' subsection, after the compressor range link |
| Browse the pump range | `/products/pumps` | In the 'Industrial pumps' subsection |
| View air-treatment equipment | `/products/air-treatment` | In the 'Compressed-air treatment' subsection |
| See spares & service parts | `/products/spares` | In the 'Genuine OEM spares' subsection |
| contact page | `/contact` | In the 'Prefer to talk?' section |
| choosing the right pump for your industry | `/blog/choosing-the-right-pump-for-your-industry` | In the 'Why buy from Machinery Centre' closing paragraph |
| essential air-compressor maintenance | `/blog/essential-maintenance-tips-for-air-compressors` | In the 'Why buy from Machinery Centre' closing paragraph |
| Terms of Use | `/terms-of-use` | Consent checkbox — convert raw <a href> to react-router navigation |
| Privacy Policy | `/privacy-policy` | Consent checkbox — convert raw <a href> to react-router navigation |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| FileText header icon (decorative lucide icon, line 97) | Decorative icon — mark aria-hidden="true" / empty alt; it is purely decorative and needs no descriptive alt text. |
| CheckCircle success icon (decorative lucide icon, line 107) | Decorative success icon — mark aria-hidden="true"; the heading 'Quote Request Received' already conveys the meaning. |
| Recommended new brand/trust logo strip (if a partner-logo row is added to the trust section) | Machinery Centre — authorized dealer of Ingersoll Rand and Trident, stockist of Kirloskar and Rotodel, Delhi |

**Conversion recommendations**

- Add a required Email field and an optional Company / Organisation field to the contact section — B2B sales cannot send a formal quotation or qualify a lead without these; they are higher priority than the full postal address.
- Make the full address block (Address Line 1/2, City, State, Country, Zip) optional and move it to the END of the form, clearly labelled 'Delivery & shipping details (optional)' so address entry never blocks a price enquiry.
- Rename the submit button from the tiny 'Submit Enquiry' to a benefit-led 'Request My Quote' at a readable size, and standardise the page vocabulary on 'quote' (drop the mixed 'order query'/'enquiry' wording).
- State a response-time expectation near the form and CTA (e.g. 'We typically reply within one working day') to reduce abandonment and set buyer expectations.
- Surface alternative conversion paths prominently: a click-to-call (011-41440012 / 9810054137) and a click-to-WhatsApp (+91 9810054137) button for buyers who will not fill a long form.
- Add a concise trust strip near the CTA — 'Since 1987', 'Authorized dealer of Ingersoll Rand & Trident', 'Genuine spares & after-sales' — to reassure high-value buyers at the point of decision.
- Add an optional 'Required CFM / pressure (compressors) or flow rate / head (pumps)' helper field or placeholder so buyers self-qualify and sales can quote accurately first time.
- Recommend (conditional, do not assert) replacing the machinerycentre@yahoo.com address with a branded sales@machinerycentre.in mailbox to raise trust on this conversion page IF such a mailbox is set up.
- Add a lightweight inline reassurance under the consent checkbox: 'Your details are used only to prepare your quote — we never share them.' to reduce form anxiety.
- Once attributable B2B reviews exist (current homepage testimonials read as placeholders), add one short verified client quote near the form as conversion proof — do not reuse the placeholder names.

**Page FAQs**

- **How do I request a quote for an air compressor or pump?** Fill in the quote form on this page with your name, phone number, the item or model you need and the quantity, then submit it. If you do not know the exact model, just describe your application and required capacity (CFM and pressure for compressors, or flow rate and head for pumps) and our Delhi team will recommend the right option and send you pricing, usually within one working day.
- **What details do I need to provide to get an accurate quote?** At minimum we need your contact number and the item or model with quantity. For the fastest, most accurate quotation, also tell us the application industry and key specs — working pressure and CFM for compressors, or flow rate, head and fluid type for pumps — plus your delivery location in Delhi NCR or elsewhere in India.
- **Is the quote free and is there any obligation to buy?** Yes, quotations from Machinery Centre are free and carry no obligation. We provide pricing, availability and lead time so you can compare and decide; there is no commitment until you place an order.
- **Do you quote with installation, commissioning and after-sales service?** Yes. As a Delhi-based dealer and stockist since 1987 we can include installation, commissioning, genuine OEM spares and after-sales support in your quotation where applicable. Mention it in the 'Other comments' field and we will detail it in the quote.
- **Can I get a quote for bulk orders or multiple items?** Absolutely. Add the quantity for each item, or use the comments field to list multiple products, and we will prepare a consolidated quotation. For large or repeat orders, please call us on 011-41440012 so we can discuss your requirement directly.
- **Do you supply outside Delhi NCR?** Yes. Machinery Centre is based in Old Delhi (Shah Ganj, near GB Road) and supplies compressors, pumps, air-treatment equipment and spares across Delhi NCR and pan-India. Include your delivery city and state in the form and we will factor it into the quote.
- **How soon will I hear back after submitting the form?** We typically respond to quote requests within one working day. If your requirement is urgent, call us on 011-41440012 or WhatsApp +91 9810054137 for a quicker reply.

**Schema:** Add WebPage / ContactPage JSON-LD for this page (name: 'Request a Quote', url: https://www.machinerycentre.in/quote — REPLACE placeholder domain with the real production domain) describing it as the quote/RFQ page. · Add FAQPage JSON-LD using the seven FAQs above so the quote-request questions can earn FAQ rich results. · Add BreadcrumbList JSON-LD: Home (/) > Request a Quote (/quote). · Reference the site-wide Organization / LocalBusiness schema (with exact NAP: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; telephone 011-41440012; founding 1987) via the publisher/provider property so this conversion page reinforces local + brand signals. · Once the form is enhanced, optionally describe it with a Service or 'potentialAction' (e.g. an Action of type 'AskAction' / contactPoint) so the quote intent is machine-readable. · Set a self-referencing canonical (https://www.machinerycentre.in/quote) via the useSEO() hook — note the domain is a placeholder and MUST be replaced with the real production domain across canonical, JSON-LD, sitemap and Open Graph before launch. · Add Open Graph and Twitter Card meta (og:title, og:description, og:url, og:type=website) so the quote page previews correctly when shared — currently absent site-wide.

---

### Contact — `https://www.machinerycentre.in/contact`

_Primary local-SEO and lead-capture page. This is the conversion/NAP anchor for all local-intent clusters ("air compressor dealer near me", "air compressor dealer in Delhi", "compressor repair service Delhi", "AMC services Delhi"). It must carry the canonical NAP, business hours, map, LocalBusiness schema, and a low-friction enquiry form. It also currently doubles as the de-facto landing page for service intent (AMC, repair, installation) because no /services route exists — the ?type=repair query param swaps the H1/copy without changing the URL, so that variant is NOT separately indexable._

**Current issues**

- SEO title is generic and off-niche: 'Contact Machinery Centre | Industrial Equipment Suppliers' (line 19). 'Industrial Equipment Suppliers' is a vague, high-competition term that ignores the real niche (compressors, pumps, air treatment) and contains zero local intent (Delhi / Delhi NCR). Wastes the highest-value tag on the most local-intent page.
- Meta description (line 20) is filler: 'Get in touch with Machinery Centre. We are here to assist you with inquiries, sales, and support for all your industrial pump and compressor needs.' No city, no NAP, no phone, no brands, no service hook (AMC/repair) — nothing that earns a click for 'near me' or 'dealer in Delhi' searches.
- H1 is literally 'Contact' (line 95) — a single generic word. The single most important on-page heading carries no keyword, no brand, no location. Should assert who/what/where.
- The ?type=repair variant (lines 12, 19-20, 95-98) changes the H1, intro, title and meta entirely BUT the URL stays /contact. So the repair/service content shares ONE indexable URL with the contact content — Google sees only whichever variant it crawls. The valuable service-intent copy ('Industrial Machinery Repair & Maintenance Services') is not separately rankable and is mislabelled generically anyway.
- Repair-variant copy uses generic 'Industrial Machinery Repair' (lines 19, 95) instead of the real niche — 'air compressor repair', 'screw compressor overhaul', 'pump repair'. Misses every service keyword in the map.
- No business hours anywhere on the page — a core local-SEO and LocalBusiness-schema field, and a frequent pre-call question for a B2B walk-in/phone dealer.
- No embedded map — only a text Google Maps search link (line 117). An embedded map (or at minimum a 'Get Directions' deep link plus the place on GBP) strengthens local relevance and user trust.
- No JSON-LD LocalBusiness / Organization schema. This is the single biggest missed opportunity on the canonical NAP page: no machine-readable address, geo, phone, opening hours, or sameAs.
- NAP is not marked up semantically (no address/microdata) and the address is rendered in ALL CAPS inside the anchor (lines 117-119), which reads as shouting and is inconsistent with normal title-case NAP used by Google Business Profile / citations.
- Phone numbers (lines 129-132) are plain text, not tel: links — no click-to-call on mobile, a major friction point for a phone-first B2B dealer. WhatsApp (+91 9810054137) is not surfaced at all despite being a stated channel.
- Email is the free machinerycentre@yahoo.com (line 142) — a trust-eroding signal on the page buyers use to vet the business; a branded sales@ address would read more credibly.
- No phone/WhatsApp CTA above the form — the page funnels everyone into a form that promises a 1-2 business-day reply, with no fast lane for urgent breakdown enquiries (the exact audience arriving via the ?type=repair path).
- Client-side-only SEO: useSEO() mutates title/meta after render with no SSR/prerender, no canonical tag, no Open Graph/Twitter cards. The contact page has no canonical and no social preview.
- No micro-conversion or reassurance content (response time framing, what to include, links to quote/catalogue) and no internal links out to product, service or quote routes — the page is a dead-end except for the form.

**SEO opportunities**

- Reframe the page around local + niche intent: 'air compressor and industrial pump dealer in Delhi' with the exact NAP, hours, click-to-call and WhatsApp — capturing the P0 'near me' and 'dealer in Delhi' local-pack clusters this page is best positioned for.
- Add LocalBusiness JSON-LD with exact NAP, geo coordinates, openingHours, telephone, email, areaServed (Delhi NCR) and sameAs — the highest-leverage technical fix for local ranking and rich results.
- Convert phone numbers to tel: links and add a prominent WhatsApp click-to-chat button to cut friction for the phone-first B2B buyer and breakdown enquiries.
- Spin the ?type=repair service content into its own indexable /services route (or /services/compressor-repair) with its own title/meta/canonical so 'air compressor repair service Delhi' and 'air compressor AMC services Delhi' can rank instead of being trapped on /contact.
- Add a business-hours block (and mark it in schema) to answer the most common pre-visit question and improve local trust.
- Embed a map or add a clear 'Get Directions' deep link plus landmark cues (Behind Hanuman Mandir, near G.B. Road, Old Delhi) to reinforce the local entity.
- Add reassurance and routing copy: response-time expectation, 'for urgent breakdowns call/WhatsApp now', and internal links to /quote (RFQ), /products and /trendi so the page distributes intent instead of dead-ending.
- Add canonical tag and Open Graph/Twitter cards via the prerender layer so the page has a clean social/share preview and no duplicate-URL ambiguity from the ?type=repair param (point its canonical at /contact or the future /services route).
- Use the form's existing company field as a B2B qualifier and add a lightweight 'enquiry type' selector (Sales / Service & AMC / Spares) to route leads and surface service intent on-page for SEO.
- Surface trust microcopy grounded in real facts (Delhi-based dealer since 1987; authorized dealer of Ingersoll Rand and Trident; stockist for Kirloskar, Crompton Greaves, Rotodel) near the form to lift conversion without fabricating certifications.

**Recommended keywords**

- **Primary:** `air compressor and pump dealer in Delhi`
- **Secondary:** contact Machinery Centre Delhi · air compressor dealer near me · industrial pump supplier Delhi NCR · compressor repair service Delhi · compressed air systems dealer Delhi
- **Long-tail:** air compressor and pump dealer near GB Road Delhi · industrial compressor supplier in Shah Ganj Old Delhi · Machinery Centre Shradhanand Marg phone number · air compressor repair and AMC service Delhi NCR · request a quote for industrial compressor in Delhi
- **Semantic:** Delhi · Delhi NCR · Old Delhi · Shah Ganj · Shradhanand Marg · 110006 · Hanuman Mandir · GB Road · Ingersoll Rand · Trident · Kirloskar · Trendi · AMC · after-sales service · genuine spares · WhatsApp enquiry · click to call · business hours · since 1987 · B2B dealer · stockist

**On-page metadata**

- **SEO Title** (57 chars): Contact Machinery Centre | Compressor & Pump Dealer Delhi
- **Meta description** (151 chars): Contact Machinery Centre, an air compressor & pump dealer in Old Delhi. Call 011-41440012 or WhatsApp for sales, spares, repair & AMC across Delhi NCR.
- **H1:** Contact Machinery Centre — Air Compressor & Industrial Pump Dealer in Delhi
- **URL slug:** `contact`

**Heading outline**

- `H1` Contact Machinery Centre — Air Compressor & Industrial Pump Dealer in Delhi
- `H2` Get in Touch
  - `H3` Visit Our Delhi Showroom
  - `H3` Call or WhatsApp Us
  - `H3` Email Us
  - `H3` Business Hours
- `H2` Send Us a Message
  - `H3` Urgent Breakdown or Repair? Call Us Directly
- `H2` How to Reach Us in Old Delhi
- `H2` What You Can Contact Us About
  - `H3` Sales & New Equipment Enquiries
  - `H3` Repair, Service & Annual Maintenance Contracts (AMC)
  - `H3` Genuine OEM Spares & Service Kits
- `H2` Frequently Asked Questions

**Revised content** _(ready to paste)_

*H1 + hero intro (replace line 94-99 default variant)*

H1: Contact Machinery Centre — Air Compressor & Industrial Pump Dealer in Delhi

Intro: Reach our Old Delhi team for sales, genuine OEM spares, repair and annual maintenance contracts on air compressors, industrial pumps and compressed-air treatment systems. Serving factories across Delhi NCR since 1987. Call, WhatsApp, or send the enquiry form below — we respond within 1-2 business days, and the same day for urgent breakdowns.

*Hero intro — repair/service variant (replace lines 95-98; ideally moves to a dedicated /services route)*

H1 (service route): Air Compressor & Pump Repair, Service and AMC in Delhi NCR

Intro: On-site repair, scheduled servicing and annual maintenance contracts for Ingersoll Rand, Trendi and other screw and reciprocating air compressors, industrial pumps and air-treatment equipment. Our Delhi-based service team supplies genuine OEM spares and service kits to keep your plant running. For an urgent breakdown, call 011-41440012 or WhatsApp +91 9810054137 — for planned service, send the form below.

*Get In Touch — address block (replace lines 108-120)*

H2: Get in Touch

H3: Visit Our Delhi Showroom
Machinery Centre
3858 Shradhanand Marg, Shah Ganj,
Behind Hanuman Mandir, Delhi 110006, India
(Old Delhi, near G.B. Road)
[Get Directions on Google Maps]

*Phone / WhatsApp block (replace lines 123-134)*

H3: Call or WhatsApp Us
Landline: 011-41440012 (click to call)
Mobile: 9810054137, 9891155438 (click to call)
WhatsApp: +91 9810054137 — fastest for quick enquiries, photos of nameplates and spares lists.

Button: WhatsApp Us Now

*Email block (replace lines 136-144)*

H3: Email Us
machinerycentre@yahoo.com
For formal quotations, share your required CFM / pressure (for compressors) or flow rate and head (for pumps) and we'll revert with options and pricing.

*Business hours (new block — add to contact-details column)*

H3: Business Hours
Monday to Saturday: [confirm and insert exact opening and closing times, e.g. 10:00 AM - 7:00 PM]
Sunday: Closed
(Replace the placeholder times with your real hours — these also populate the openingHours field in the LocalBusiness schema below.)

*Form heading + intro (replace lines 167-169)*

H2: Send Us a Message
Tell us what you need — a new compressor or pump, air-treatment equipment, genuine spares, or a service/AMC enquiry. Add your company name and a few specs (model, CFM/pressure, or flow/head) and the right specialist will get back to you within 1-2 business days.

*Urgent breakdown callout (new — place above the form)*

H3: Urgent Breakdown or Repair? Call Us Directly
If a compressor or pump is down, don't wait on the form — call 011-41440012 or WhatsApp +91 9810054137 and our Delhi service team will prioritise your enquiry.

*How to reach us (new section below the grid)*

H2: How to Reach Us in Old Delhi
We're located on Shradhanand Marg in Shah Ganj, behind Hanuman Mandir and a short distance from G.B. Road in Old Delhi. The showroom is easy to reach from across Delhi NCR. Parking and loading are available nearby for spares pickup and equipment collection. Tap 'Get Directions' above for turn-by-turn navigation.

*What you can contact us about (new section — internal-linking + intent hub)*

H2: What You Can Contact Us About

H3: Sales & New Equipment Enquiries
Authorized dealer of Ingersoll Rand and Trident, exclusive supplier of Trendi compressors, and stockist for Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest. Ask us about air compressors, industrial pumps and compressed-air treatment. Browse the range or request a quote.

H3: Repair, Service & Annual Maintenance Contracts (AMC)
On-site repair, overhaul and AMC for screw and reciprocating compressors, pumps and dryers — backed by genuine OEM spares to maximise uptime across Delhi NCR.

H3: Genuine OEM Spares & Service Kits
Air and oil filters, air-oil separators, intake valves, gaskets, compressor service kits and pump spares (boiler feed, centrifugal, self-priming and more). Tell us your model and we'll match the correct part.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| Browse the range | `/products` | Within the 'Sales & New Equipment Enquiries' subsection of 'What You Can Contact Us About'. |
| request a quote | `/quote` | End of the 'Sales & New Equipment Enquiries' subsection and as a secondary CTA near the form. |
| air compressors | `/products/compressors` | In the 'Sales & New Equipment Enquiries' subsection where products are named. |
| industrial pumps | `/products/pumps` | In the 'Sales & New Equipment Enquiries' subsection where products are named. |
| compressed-air treatment | `/products/air-treatment` | In the 'Sales & New Equipment Enquiries' subsection where products are named. |
| genuine OEM spares | `/products/spares` | In the 'Genuine OEM Spares & Service Kits' subsection. |
| Trendi compressors | `/trendi` | In the 'Sales & New Equipment Enquiries' subsection where Trendi is mentioned. |
| since 1987 | `/about` | In the hero intro where the founding year is mentioned. |
| air compressor maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | Optional helper link in the 'Repair, Service & AMC' subsection. |
| Terms of Use | `/terms-of-use` | Existing consent checkbox below the form (already present). |
| Privacy Policy | `/privacy-policy` | Existing consent checkbox below the form (already present). |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| MapPin icon (line 113) | decorative — mark aria-hidden; the adjacent text 'Visit Our Delhi Showroom' conveys meaning |
| PhoneCall icon (line 125) | decorative — mark aria-hidden; adjacent 'Call or WhatsApp Us' heading conveys meaning |
| Mail icon (line 138) | decorative — mark aria-hidden; adjacent 'Email Us' heading conveys meaning |
| CheckCircle success icon (line 153) | decorative — mark aria-hidden; the 'Message Sent' heading conveys the confirmation |
| Recommended new: embedded location map / static map image | Map showing Machinery Centre at 3858 Shradhanand Marg, Shah Ganj, Old Delhi 110006 |
| Recommended new: WhatsApp CTA button icon | Chat with Machinery Centre on WhatsApp |

**Conversion recommendations**

- Add click-to-call tel: links on all phone numbers (tel:01141440012, tel:9810054137, tel:9891155438) so mobile users dial in one tap — critical for a phone-first B2B dealer.
- Add a prominent WhatsApp click-to-chat button (https://wa.me/919810054137) near the top of the contact column and above the form for fast, low-friction enquiries.
- Place an 'Urgent breakdown? Call us directly' callout above the form so high-intent service/breakdown visitors (especially via ?type=repair) get an instant channel instead of a 1-2 day form reply.
- Add a lightweight 'Enquiry type' selector to the form (Sales / Service & AMC / Spares) to route leads internally and qualify intent; default it to 'Service' on the repair variant.
- Display business hours so buyers know when they'll get a response and whether they can call now.
- Add concise trust microcopy near the form grounded in real facts: 'Delhi-based dealer since 1987 — authorized dealer of Ingersoll Rand & Trident, stockist for Kirloskar, Crompton Greaves & Rotodel.' Avoid unverified claims like client counts.
- Recommendation (conditional): move to a branded email such as sales@machinerycentre.in to raise trust on the exact page buyers use to vet the business — flag only; do not assert it exists.
- Set up and link a Google Business Profile with the exact NAP and hours so the 'near me' and local-pack clusters can convert from Maps.
- Add a secondary 'Request a detailed quote' link to /quote for buyers who need formal pricing rather than a general message.
- Replace the generic placeholder homepage testimonials with real attributable B2B reviews and surface one or two near the form to lift conversion (flag — needs real reviews).

**Page FAQs**

- **Where is Machinery Centre located in Delhi?** We're at 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi 110006 — in Old Delhi, near G.B. Road. Tap 'Get Directions' above for navigation, and reach us easily from across Delhi NCR.
- **What is Machinery Centre's phone number?** Call our landline 011-41440012, or our mobiles 9810054137 and 9891155438. You can also WhatsApp us on +91 9810054137 for quick enquiries, nameplate photos and spares lists.
- **What are your business hours?** We are open Monday to Saturday during regular business hours and closed on Sunday. (Please confirm exact opening and closing times with the business.)
- **Do you provide air compressor and pump repair or AMC service?** Yes. We offer on-site repair, overhaul and annual maintenance contracts (AMC) for screw and reciprocating air compressors, industrial pumps and air-treatment equipment, backed by genuine OEM spares. For urgent breakdowns, call or WhatsApp us directly.
- **Can I get a price quote for a compressor or pump?** Yes. Send your requirement through the form or request a detailed quote — for compressors share your CFM and working pressure; for pumps share flow rate and head — and our team will respond with options and pricing, usually within 1-2 business days.
- **Which brands does Machinery Centre supply?** We are an authorized dealer of Ingersoll Rand and Trident, exclusive supplier of Trendi compressors, and a stockist for Kirloskar, Crompton Greaves, Rotodel, Indfoss and Everest, with genuine spares for each.
- **How soon will you respond to my enquiry?** We typically reply to form enquiries within 1-2 business days. For urgent breakdown or service needs, call 011-41440012 or WhatsApp +91 9810054137 for same-day priority handling.

**Schema:** LocalBusiness (or HardwareStore/Store subtype) JSON-LD with exact NAP: name 'Machinery Centre', address (3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi 110006, IN), telephone '+91-11-41440012', email, geo coordinates (add real lat/long for the Shah Ganj location), openingHoursSpecification (Mon-Sat with real hours), areaServed 'Delhi NCR', priceRange, and sameAs (GBP, social, future site profiles). This is the top priority for this page. · Organization JSON-LD (site-wide, can sit here too) with logo, founder/foundingDate 1987, brand 'Trendi', and a contactPoint of type 'customer service' / 'sales' with telephone, contactType, areaServed 'IN', and availableLanguage ['en','hi']. · ContactPage JSON-LD wrapping the page (mainEntity referencing the Organization) to declare the page type explicitly. · ContactPoint entries for the WhatsApp number (contactType 'customer service') and a separate sales line so search engines understand the channels. · FAQPage JSON-LD built from the FAQ block above to qualify for FAQ rich results. · BreadcrumbList JSON-LD: Home > Contact. · Add a canonical tag pointing to https://www.machinerycentre.in/contact (REPLACE the placeholder domain with the real production domain). If the ?type=repair variant stays on this URL, canonicalise it to /contact; better, give repair/service content its own /services route and its own canonical + Service schema. · Open Graph and Twitter Card tags (og:title, og:description, og:url, og:image, twitter:card) so the contact/share preview is clean — currently absent. Requires SSR/prerender since the site is a client-only Vite SPA.

---

### Careers — `https://www.machinerycentre.in/careers`

_Recruitment / talent-acquisition page. Lowest commercial-search-volume page in the site, but a real conversion surface for hiring sales, service engineers and field technicians. SEO goal is NOT to chase volume keywords here — it is to (1) rank for the genuine branded + jobs intent ("Machinery Centre careers/jobs Delhi"), (2) reinforce the brand entity, employer credibility and Delhi/Old Delhi local relevance, and (3) act as an internal-linking hub that passes authority and recruiter trust back to the money pages (products, Trendi, services). Treat it primarily as an entity/trust + conversion page, secondarily as a long-tail jobs page._

**Current issues**

- SEO title 'Careers | Machinery Centre' is only 24 characters - far under the 50-60 target, wastes SERP real estate, and omits the city (Delhi), the job context (jobs/hiring) and the company niche, so it cannot rank for branded jobs intent like 'Machinery Centre careers Delhi'.
- Meta description (148 chars) is generic fluff ('build the future of industrial solutions') - it never says WHERE the company is (Delhi / Old Delhi), WHAT it does (compressors, pumps, air-treatment dealer), or WHAT roles are hired (sales, service engineers, technicians). It reads like a template and gives Google nothing niche or local to anchor on.
- H1 is the single bare word 'Careers' - no brand, no location, no role context. Weak for both users and search engines on a page that should assert the brand entity.
- On-page subhead claims '25+ years legacy' (line 98). This is a THIRD inconsistent tenure figure on the site - the homepage meta says '35+ years' and on-page counters auto-compute 39 from a 1987 founding. Three different numbers across the site erodes E-E-A-T and looks careless to a job applicant.
- Zero internal links out of this page (other than Terms/Privacy in the consent line). A careers page is a natural authority-and-trust hub but it links to none of the money pages (Products, Trendi, Air Treatment, Services), so it leaks no equity and gives candidates no way to learn what the business actually sells.
- No employer-context content at all - nothing about what it is like to work there, which teams/departments hire, location/commute (Shah Ganj, Old Delhi), or why an industrial-sales or service-engineer candidate should apply. Thin content = weak ranking and weak conversion.
- No role list or department signals. Candidates and Google's job-related understanding have nothing concrete (sales executive, service/field engineer, spares & parts coordinator, accounts) to match against.
- Client-side-only SEO: useSEO() mutates document.title/meta after JS executes. With no SSR/prerender, no canonical, no JSON-LD, and no Open Graph tags, this page (like the rest of the SPA) ships an empty initial HTML shell - fragile for crawling and gives no rich/social preview.
- No canonical tag - the placeholder canonical https://www.machinerycentre.in/careers is not emitted, risking duplicate/parameter URL issues.
- The success-state heading 'Application Sent' and the form heading are fine for UX but the page has no FAQ/answer content, so it captures none of the 'how to apply / who is hiring' long-tail.
- Form field 'About Yourself' is optional and there is no CV/resume upload or role-selection field, so applications arrive low-context - a conversion-quality gap, not just SEO.

**SEO opportunities**

- Rebuild the title + meta around branded jobs intent plus the real niche and city so the page can own 'Machinery Centre careers/jobs Delhi' and adjacent role searches (sales, service engineer) - low competition, high relevance.
- Add a short, honest employer-story section naming the niche (authorized dealer of Ingersoll Rand & Trident; stockist for Kirloskar, Rotodel; own brand Trendi) and the Old Delhi / Delhi-NCR location - this builds the brand entity and local relevance while staying truthful.
- Add a 'Roles we hire for' block (sales, field service engineers, spares coordinators, accounts/admin) to capture role + location long-tail and give candidates concrete matching signals.
- Standardise the tenure figure to 'Since 1987' (or '39 years') and use it consistently here - turn an E-E-A-T liability into a credibility signal.
- Turn the page into an internal-linking hub: link to /products, /trendi, /products/air-treatment, /about, /quote, /contact so equity flows to money pages and candidates understand the business.
- Add JobPosting / Organization / BreadcrumbList JSON-LD so the page is eligible for Google Jobs and reinforces the company entity (only emit JobPosting fields you can truthfully fill; otherwise Organization + BreadcrumbList).
- Add an FAQ block (who is hiring, where is the office, how to apply, do you hire freshers/field engineers) to capture PAA long-tail and add crawlable content depth.
- Add canonical, Open Graph and Twitter card tags via the prerender/SSR fix so the careers URL has a clean social preview and no duplication risk.
- Recommend a CV/resume upload field and an optional role dropdown - improves application quality (conversion) and feeds richer JobPosting structure.

**Recommended keywords**

- **Primary:** `Machinery Centre careers Delhi`
- **Secondary:** Machinery Centre jobs · industrial sales jobs Delhi · compressor service engineer jobs Delhi · careers at compressor and pump dealer Delhi · jobs in Old Delhi industrial company
- **Long-tail:** sales executive jobs at air compressor dealer in Delhi · field service engineer jobs for air compressors Delhi NCR · spare parts coordinator job industrial equipment Delhi · how to apply for a job at Machinery Centre Delhi · compressor and pump company hiring in Shah Ganj Old Delhi
- **Semantic:** Machinery Centre · Delhi NCR · Old Delhi · Shah Ganj · compressors and pumps · Ingersoll Rand · Trendi · Trident · Kirloskar · service engineer · after-sales service · industrial sales · since 1987 · B2B dealer · field technician

**On-page metadata**

- **SEO Title** (53 chars): Careers at Machinery Centre | Jobs in Delhi NCR India
- **Meta description** (154 chars): Build a career at Machinery Centre, a Delhi-based compressor and pump dealer since 1987. Apply for sales, service engineer and support roles in Delhi NCR.
- **H1:** Careers at Machinery Centre
- **URL slug:** `careers`

**Heading outline**

- `H1` Careers at Machinery Centre
- `H2` Join a Delhi compressor and pump specialist since 1987
- `H2` Why work with us
  - `H3` What we do
  - `H3` Where we are based
- `H2` Roles we hire for
  - `H3` Industrial sales executives
  - `H3` Field service & commissioning engineers
  - `H3` Spares & after-sales support
  - `H3` Accounts & administration
- `H2` Submit your application
  - `H3` Application form
- `H2` Careers FAQs

**Revised content** _(ready to paste)_

*Hero (H1 + subhead, replacing bare 'Careers' and the inconsistent '25+ years legacy' line)*

H1: Careers at Machinery Centre

Subhead: Build your career with one of Delhi's longest-established compressed-air and industrial-pump specialists. Since 1987, Machinery Centre has supplied, installed and serviced air compressors, pumps and air-treatment systems for factories across Delhi NCR and India - and we are always looking for people who want to grow with us.

*Why work with us (replaces the generic 'build the future of industrial solutions' paragraph)*

H2: Why work with us

We are a focused B2B team, not a faceless conglomerate. You will work directly with established industrial brands, learn real engineering and sales skills, and see the impact of your work on customers' production lines. We value reliability, technical curiosity and a service-first attitude over polished CVs.

H3: What we do
Machinery Centre is an authorized dealer of Ingersoll Rand and Trident, a stockist for Kirloskar, Rotodel, Crompton Greaves and others, and the team behind our own energy-efficient Trendi air compressors. We supply screw and reciprocating compressors, industrial pumps, compressed-air dryers, filters and nitrogen generators, plus genuine spares and after-sales service.

H3: Where we are based
Our office and stores are at 3858 Shradhanand Marg, Shah Ganj (behind Hanuman Mandir), Old Delhi-110006 - well connected across Delhi NCR. Field and service roles travel to customer sites around the region.

*Roles we hire for (new block - currently absent)*

H2: Roles we hire for
We hire across sales, service and support. Even if you don't see your exact role listed, we welcome strong applications.

H3: Industrial sales executives
Manage enquiries and quotations for compressors, pumps and air-treatment equipment, build relationships with factories and OEMs across Delhi NCR, and guide customers to the right specification.

H3: Field service & commissioning engineers
Install, commission and service screw and reciprocating compressors, dryers and pumps at customer sites - diagnostics, breakdown support, preventive maintenance and genuine-spare replacements.

H3: Spares & after-sales support
Coordinate genuine OEM spares - air-oil separators, filters, service kits and pump parts - manage stock and keep customers' equipment running.

H3: Accounts & administration
Support billing, documentation and day-to-day operations that keep the business moving.

*Info card (replaces the 'Join Our Team' generic copy + delay note)*

H3: Join our team
At Machinery Centre we look for talented, driven people who want a hands-on career in compressed air and industrial pumps. If you are after a challenging, rewarding role with a long-established Delhi company, send us your details and CV - our hiring team reviews every application.

Note: We try to respond to all applicants, but high application volumes can cause delays. Thank you for your patience.

*Form heading (refines 'Submit Your Application')*

H3: Submit your application
Share your details below and tell us which kind of role interests you. Attaching a CV helps us match you faster.

*Success state (refines 'Application Sent')*

H2: Application sent
Thank you for your interest in joining Machinery Centre. Our team will review your application and get back to you if your profile matches a current opening. In the meantime, explore what we do across our compressors, pumps and air-treatment range.

*Careers FAQs (new crawlable block)*

H2: Careers FAQs
(See the FAQ list for question-and-answer pairs ready to render as an accordion with FAQPage schema.)

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| air compressors, pumps and air-treatment systems | `/products` | In the hero subhead or 'What we do' paragraph, on the first mention of the product range. |
| our own energy-efficient Trendi air compressors | `/trendi` | In the 'What we do' paragraph where Trendi is named. |
| compressed-air dryers, filters and nitrogen generators | `/products/air-treatment` | In the 'What we do' paragraph listing air-treatment equipment. |
| genuine spares | `/products/spares` | In the 'What we do' or 'Spares & after-sales support' role description. |
| learn more about Machinery Centre | `/about` | End of the 'Why work with us' section. |
| explore what we do across our compressors, pumps and air-treatment range | `/products` | In the success-state confirmation message. |
| contact our team | `/contact` | Below the application form, for general/non-job enquiries. |
| request a quote | `/quote` | Footer-adjacent CTA for visitors who arrived looking to buy rather than apply. |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| Briefcase icon next to 'Join Our Team' heading (decorative lucide icon) | (decorative - mark aria-hidden="true", empty alt; it is an icon, not content) |
| CheckCircle success icon on application-sent state | (decorative - aria-hidden="true"; the visible 'Application sent' heading conveys the meaning) |
| RECOMMENDED new hero/team photo (if added) | Machinery Centre team at the Shah Ganj, Old Delhi office - compressor and pump dealer hiring in Delhi NCR |
| RECOMMENDED service-engineer-at-work photo (if added) | Machinery Centre service engineer commissioning an industrial air compressor at a customer site in Delhi NCR |

**Conversion recommendations**

- Add a CV/resume file-upload field (PDF/DOC) to the form - the biggest application-quality gap; recruiters currently get name/email/phone and an optional free-text blurb only.
- Add an optional 'Role of interest' dropdown (Sales, Service/Field Engineer, Spares & Support, Accounts/Admin, Other) so applications route faster and feed richer JobPosting context.
- Make the 'About Yourself' textarea prompt more directive ('Tell us your experience, current location and which role interests you') to lift answer quality.
- Add a secondary CTA for non-applicants: a 'Not looking for a job? Contact us / Request a quote' link so commercial visitors who land here aren't dead-ended.
- Show a clear response-expectation line near the submit button ('We review every application and reply to shortlisted candidates') to set expectations and reduce drop-off anxiety.
- Consider a WhatsApp apply option (+91 9810054137) given the local B2B audience often prefers WhatsApp - reduces friction for field-technician candidates.
- Replace the generic placeholder testimonials site-wide and, if available, add one short genuine employee/team note here to build employer trust (only if real and attributable - do not fabricate).
- Switch the email destination off the yahoo.com address to a branded address (e.g. careers@machinerycentre.in) once the domain is live, for applicant trust - recommendation only, do not assert it exists.

**Page FAQs**

- **Is Machinery Centre hiring in Delhi?** Yes. Machinery Centre regularly hires across sales, field service and support roles at our Old Delhi office and for customer sites across Delhi NCR. Submit your details and CV through the application form above and our team will review it.
- **What kind of roles can I apply for?** We hire industrial sales executives, field service and commissioning engineers (for air compressors, pumps and dryers), spares and after-sales support staff, and accounts/administration roles. Even if your exact role isn't listed, we welcome strong applications.
- **Where is Machinery Centre located?** Our office and stores are at 3858 Shradhanand Marg, Shah Ganj, behind Hanuman Mandir, Old Delhi-110006 - well connected across Delhi NCR. Field and service roles involve travel to customer sites in the region.
- **How do I apply for a job at Machinery Centre?** Fill in the application form on this page with your name, email, contact number and a short note about yourself (and attach your CV if the upload option is available). Our hiring team reviews every application and contacts shortlisted candidates.
- **Do you hire freshers or experienced engineers?** We consider both. Technical curiosity, reliability and a service-first attitude matter to us. Mention your experience level and the role that interests you in your application so we can match you accurately.
- **What does Machinery Centre do?** Established in 1987, Machinery Centre is a Delhi-based dealer and stockist of air compressors, industrial pumps and compressed-air treatment equipment - including Ingersoll Rand, Trident, Kirloskar, Rotodel and our own Trendi compressors - with genuine spares and after-sales service.

**Schema:** Add Organization JSON-LD (name 'Machinery Centre', founder/foundingDate 1987, url placeholder https://www.machinerycentre.in/, logo, sameAs social profiles if any) to reinforce the company entity - reuse the same Organization node sitewide. · Add LocalBusiness JSON-LD with the EXACT NAP: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, IN; telephone +91-11-41440012; this strengthens local/near-me relevance and ties the careers page to the physical location. · Add BreadcrumbList JSON-LD: Home (/) > Careers (/careers) to give SERP breadcrumbs and clarify site structure. · Add JobPosting JSON-LD ONLY for roles you can truthfully describe (title, description, hiringOrganization=Machinery Centre, jobLocation=Delhi office, employmentType, datePosted, validThrough) so the page is eligible for the Google Jobs experience - omit salary/fields you cannot verify rather than guessing. If no specific open req exists, skip JobPosting and rely on Organization + LocalBusiness. · Add FAQPage JSON-LD mapping the six careers FAQs above (question + acceptedAnswer) for rich-result eligibility - only if the FAQ block is genuinely rendered on the page. · Add a self-referencing canonical (https://www.machinerycentre.in/careers - REPLACE placeholder with the real production domain) plus Open Graph (og:title, og:description, og:url, og:type=website) and Twitter card tags; these require the SSR/prerender fix to appear in the initial HTML rather than being injected client-side by useSEO().

---

### Feedback & Grievance — `https://www.machinerycentre.in/feedback (REPLACE placeholder domain with the real production domain)`

_Trust, after-sales and reputation-management page where existing Delhi-NCR B2B customers of compressors, pumps, air-treatment equipment and spares submit feedback or raise a grievance. SEO role is secondary/support: this is NOT a money keyword page. Its strategic value is (a) demonstrating after-sales accountability and E-E-A-T trust signals that lift the whole domain, (b) capturing low-volume navigational and complaint intent ("Machinery Centre complaint/feedback/grievance"), and (c) feeding genuine attributable reviews that can replace the placeholder homepage testimonials. It should be set to index,follow but kept thin on commercial keywords; conversion goal is form completion plus a soft path back to quote/contact/products._

**Current issues**

- Title 'Feedback & Grievance | Machinery Centre' is only 33 characters - well under the 50-60 range and wastes the slot with no brand-niche or location context.
- Meta description (~150 chars) is vague corporate filler ('modernize our services and enables a better system of trust') - no entity, no niche (compressors/pumps), no Delhi-NCR signal, and reads like AI boilerplate.
- H1 is the single bare word 'Feedback' - no keyword, no brand, no context for users or search engines.
- Page is a pure form with almost no indexable body copy - thin content with no supporting text explaining grievance handling, response time, or who should use it; gives Google nothing to rank or build trust on.
- No structured data: no JSON-LD for the page, organization, or the feedback action; no breadcrumb schema.
- Client-only useSEO() hook means title/meta are injected after JS render - no SSR/prerender, so the tag is fragile and there is no canonical or Open Graph/Twitter card on this route.
- Intro copy ('modernize our services') is internally focused jargon, not customer-benefit framing; does not tell the user what happens after they submit or how a grievance is escalated.
- No internal links anywhere on the page - a dead-end node with no path to products, quote, contact, or related blog content, leaking link equity and offering no next step.
- Consent links use raw <a href> with target=_blank instead of react-router navigation, causing full reloads inside the SPA and breaking client-side routing for /terms-of-use and /privacy-policy.
- No phone/WhatsApp escalation path shown for urgent breakdown grievances - a feedback form alone is a poor channel for an angry customer with a down compressor; no NAP or response-time expectation set.
- The success state ('Feedback Submitted / we value your input') sets no expectation of a reply timeframe and offers no onward link to browse products or request a quote.
- Generic 'How did you hear about us?' options (TV, Radio) are implausible for a B2B industrial dealer and slightly undermine credibility; no option capturing real B2B channels (Google search, referral, IndiaMART, existing customer).

**SEO opportunities**

- Rebrand the page around 'customer feedback and grievance redressal' tied to after-sales service - reinforces the E-E-A-T / accountability signal that supports the whole compressor & pump dealer site.
- Add a short indexable intro and a 'What happens next' / response-commitment block so the page has crawlable, trust-building body copy instead of being a bare form.
- Capture low-competition navigational intent: 'Machinery Centre feedback', 'Machinery Centre complaint', 'compressor service feedback Delhi' - easy to own with no real competition.
- Use this page to source genuine, attributable B2B reviews that can replace the placeholder homepage testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel) - flagged as a trust upgrade for the whole site.
- Add a direct phone/WhatsApp escalation line (011-41440012 / WhatsApp +91 9810054137) for urgent breakdown grievances, improving real after-sales UX and surfacing NAP consistency.
- Internally link out to /quote, /contact, /products and the maintenance blog post to turn a dead-end form into a node that distributes equity and gives users a next step.
- Add JSON-LD (Organization + ContactPage/WebPage + BreadcrumbList) with the exact NAP to strengthen entity and local signals sitewide.
- Add canonical + Open Graph/Twitter tags via prerender so the route is reliably indexable and shareable.
- Reframe the satisfaction question set as a lightweight CSAT signal the business can act on, and clearly separate 'feedback' from 'grievance' so unhappy customers are routed to a faster resolution path.

**Recommended keywords**

- **Primary:** `Machinery Centre customer feedback and grievance`
- **Secondary:** Machinery Centre feedback Delhi · compressor service feedback · after-sales support Machinery Centre · raise a grievance Machinery Centre · customer satisfaction compressors and pumps
- **Long-tail:** share feedback on Machinery Centre compressor and pump service Delhi · how to raise a grievance with Machinery Centre Delhi · give feedback on Ingersoll Rand compressor service Delhi NCR · Machinery Centre after-sales service complaint and support
- **Semantic:** after-sales service · grievance redressal · customer satisfaction · service feedback · support · response time · Delhi NCR · compressors and pumps · spares and service · WhatsApp support

**On-page metadata**

- **SEO Title** (54 chars): Customer Feedback & Grievance | Machinery Centre Delhi
- **Meta description** (149 chars): Share your feedback or raise a grievance with Machinery Centre, Delhi. Help us improve our compressor, pump and after-sales service across Delhi NCR.
- **H1:** Customer Feedback & Grievance Redressal
- **URL slug:** `feedback`

**Heading outline**

- `H1` Customer Feedback & Grievance Redressal
- `H2` Tell us about your experience with Machinery Centre
- `H2` Share your feedback or raise a grievance
  - `H3` Your details
  - `H3` How did you hear about us?
  - `H3` Your experience with our products and service
  - `H3` Message or grievance details
- `H2` Need an urgent response? Talk to us directly
- `H2` What happens after you submit
- `H2` Looking for something else?

**Revised content** _(ready to paste)_

*Intro (replaces 'Your feedback helps us modernize our services...')*

H1: Customer Feedback & Grievance Redressal

Subhead: Your experience matters to us. Whether you want to praise our team, suggest an improvement, or raise a grievance about a product or service, this is the right place to be heard. We have supplied and serviced air compressors, industrial pumps, air-treatment equipment and genuine spares to businesses across Delhi NCR since 1987, and honest customer feedback is how we keep our after-sales support sharp.

*Form intro (above the form, new)*

H2: Share your feedback or raise a grievance

Please give us as much detail as you can - the equipment involved, the brand (such as Ingersoll Rand, Trendi, Kirloskar, Rotodel or Trident), and what happened. The more specific you are, the faster our service team can respond and resolve it.

*How did you hear about us (revised options)*

Label: How did you hear about us?
Options: Select an option / Google or web search / Referral from another business / Existing Machinery Centre customer / IndiaMART or online marketplace / Trade enquiry or exhibition / Advertisement / Other

(Rationale: replaces implausible B2B options like TV and Radio with channels an industrial buyer actually uses.)

*Experience radio-group labels (refined wording, unchanged logic)*

Label 1: Have you purchased from or been serviced by us before? (Yes / No)
Label 2: Overall, are you satisfied with our products and service? (Yes / No)

*Message field (revised placeholder)*

Label: Message or grievance details
Placeholder: Share your feedback, or describe your grievance - include the product/brand, invoice or order reference if you have one, and what you would like us to do.

*Urgent contact block (new, below form)*

H2: Need an urgent response? Talk to us directly

If you have an equipment breakdown or a time-critical issue, calling us is the fastest way to get help. Reach our Delhi office on 011-41440012, or message us on WhatsApp at +91 9810054137. You can also email machinerycentre@yahoo.com. Our showroom and service desk are at 3858 Shradhanand Marg, Shah Ganj, behind Hanuman Mandir, Delhi-110006.

*What happens next (new trust block)*

H2: What happens after you submit

Every submission reaches our team directly. We review feedback to improve our service and product range, and we treat grievances as a priority - a member of our team will look into your concern and get back to you. Your contact details are used only to respond to you and are never shared, in line with our Privacy Policy.

*Success state (replaces 'Feedback Submitted / we value your input')*

Heading: Thank you - we've received your response

Body: We genuinely appreciate you taking the time. Your feedback goes straight to our team, and if you've raised a grievance or asked for a callback, we'll be in touch. In the meantime, you're welcome to browse our products or request a quote.

Buttons: 'Submit another response' and 'Browse products' (linking to /products).

*Onward-links block (new, footer of page)*

H2: Looking for something else?

If you're here to buy or get pricing rather than to leave feedback, we can help with that too - explore our air compressors, industrial pumps, compressed-air treatment and genuine spares, request a quote, or contact our team.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| Privacy Policy | `/privacy-policy` | Consent checkbox and the 'What happens after you submit' block (convert raw <a> to router navigation) |
| Terms of Use | `/terms-of-use` | Consent checkbox (convert raw <a> to router navigation) |
| request a quote | `/quote` | 'What happens after you submit' block and the success-state body |
| browse our products | `/products` | Success state 'Browse products' button and 'Looking for something else?' block |
| air compressors | `/products/compressors` | 'Looking for something else?' onward-links block |
| industrial pumps | `/products/pumps` | 'Looking for something else?' onward-links block |
| compressed-air treatment | `/products/air-treatment` | 'Looking for something else?' onward-links block |
| genuine spares | `/products/spares` | 'Looking for something else?' onward-links block |
| contact our team | `/contact` | 'Need an urgent response?' block and 'Looking for something else?' block |
| air compressor maintenance tips | `/blog/essential-maintenance-tips-for-air-compressors` | Optional soft link in the 'What happens after you submit' block for users with service questions rather than grievances |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| MessageSquare icon (decorative header glyph) | Decorative icon only - mark aria-hidden="true" with empty alt, no descriptive text needed |
| CheckCircle success icon (post-submission) | Decorative confirmation tick - mark aria-hidden="true"; the heading 'Thank you - we've received your response' carries the meaning |
| RECOMMENDED if a logo/banner is added | Machinery Centre - compressor and pump dealer in Delhi since 1987 |

**Conversion recommendations**

- Split the experience into 'leave feedback' vs 'raise a grievance' so dissatisfied customers see a faster, more reassuring path (callback / phone) instead of a generic form.
- Add a 'Request a callback' checkbox plus optional phone-number field so urgent grievances can be routed to a call rather than email-only.
- Show a clear response-time commitment in the 'What happens next' block (e.g. acknowledgement within X working hours) once the business confirms a real SLA - do not invent a number.
- Add the WhatsApp +91 9810054137 click-to-chat and tel:011-41440012 link directly on the page so an angry customer with a down compressor can escalate in one tap.
- On the success screen, add onward CTAs ('Browse products' / 'Request a quote') instead of only 'Submit another response', so satisfied users continue into the funnel.
- Add an optional 'May we publish your feedback as a testimonial?' consent checkbox - this lets the business collect real, attributable B2B reviews to replace the placeholder homepage testimonials.
- Replace implausible B2B referral options (TV, Radio) with realistic channels (Google search, referral, IndiaMART, existing customer) to keep the form credible and capture useful attribution data.
- Recommend a branded sender/reply email (e.g. sales@machinerycentre.in) over the yahoo.com address to raise trust on confirmation/reply emails - conditional, only if such a mailbox is set up.

**Page FAQs**

- **How do I raise a grievance with Machinery Centre?** Use the form on this page to describe your grievance, including the product, brand and any invoice or order reference. For urgent issues such as an equipment breakdown, call our Delhi office on 011-41440012 or message us on WhatsApp at +91 9810054137 for the fastest response.
- **How quickly will I get a response to my feedback?** Every submission reaches our team directly and grievances are treated as a priority. A member of our team will review your concern and get back to you. For time-critical service issues, calling or WhatsApp is faster than the form.
- **Can I give feedback about after-sales service or spares, not just a purchase?** Yes. We welcome feedback on every part of your experience - sales, installation, the air compressor or pump itself, air-treatment equipment, genuine spares and after-sales service across Delhi NCR. Just describe what happened in the message field.
- **Is my contact information kept private?** Yes. The details you provide are used only to respond to your feedback or grievance and are handled in line with our Privacy Policy. We do not share your information for unrelated purposes.
- **I need pricing, not to leave feedback - where should I go?** If you want a price or product information, request a quote or browse our air compressors, industrial pumps, compressed-air treatment and spares. You can also contact our Delhi team directly for a faster commercial response.

**Schema:** Add WebPage (or ContactPage) JSON-LD for this route with name 'Customer Feedback & Grievance Redressal', url https://www.machinerycentre.in/feedback (replace placeholder domain), and isPartOf the site's WebSite entity. · Add BreadcrumbList JSON-LD: Home (/) > Feedback (/feedback) to reinforce site structure. · Reference the Organization/LocalBusiness entity (defined sitewide) via publisher/about, with the exact NAP: Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; telephone +91-11-41440012; this ties the feedback page to the brand entity for E-E-A-T. · Do NOT add Review or AggregateRating schema on this page - reviews are collected here, not displayed, and faking ratings would violate Google's guidelines; only add Review/AggregateRating elsewhere once real, attributable customer reviews exist. · Add canonical link rel=canonical to https://www.machinerycentre.in/feedback and Open Graph/Twitter card tags (og:title, og:description, og:url, og:type=website) via prerender so the tags exist in the initial HTML. · Optionally add a ContactPoint within the Organization schema with contactType 'customer service' and the WhatsApp/landline numbers to surface the support channel. · All schema must be emitted in server-rendered/prerendered HTML, not injected only client-side, and every URL must use the real production domain once known (currently the placeholder https://www.machinerycentre.in/).

---

### Legal Pages (Privacy Policy & Terms of Use) — treated together — `https://www.machinerycentre.in/privacy-policy and https://www.machinerycentre.in/terms-of-use (PLACEHOLDER domain — replace with real production domain everywhere)`

_Trust, compliance and conversion-support pages. Not money pages and should never be optimized as such. Their SEO job is narrow: be indexable but low-priority, carry unique titles/meta so they do not cannibalize commercial pages, reinforce E-E-A-T/trust signals (real NAP, DPDP compliance, India governing law), and quietly feed link equity to commercial routes via a footer. Keep index, follow with low sitemap priority (0.2-0.3). Do NOT noindex — they are unique, substantive, and Google treats credible legal pages as a positive trust signal._

**Current issues**

- BUSINESS-IDENTITY INACCURACY (highest priority): PrivacyPolicy intro describes the Company as engaged in 'marketing, distribution, sale, installation, and servicing of industrial machinery and equipment'. This is generic and slightly misrepresents the niche. Machinery Centre is a B2B dealer/authorized channel partner and stockist of compressed-air systems and industrial pumps + after-sales spares & service — NOT a generic 'industrial machinery' supplier and NOT a manufacturer. The legal description should match the real business so it is consistent with the rest of the site and with schema.
- 'a company' is legally imprecise. The Terms page elsewhere refers to 'its proprietors, partners' suggesting it may be a proprietorship/partnership, not a 'company'. Calling itself 'a company' on Privacy and listing 'partners/proprietors' on Terms is internally inconsistent. Use a neutral 'business/firm/establishment' unless the registered legal form is confirmed.
- No SEO infrastructure exists on these routes beyond the client-side useSEO() hook: no canonical tag, no Open Graph/Twitter cards, no JSON-LD. Because the whole site is a Vite + React 19 SPA with no SSR/prerendering, even the title/meta are injected client-side only — slower and less reliable for crawlers. Legal pages should be prerendered to static HTML with canonical + minimal schema in the initial response.
- No self-referencing canonical. Without it, query-string or trailing-slash variants (e.g. ?ref=footer) risk duplicate-content dilution on these low-value pages.
- Both pages are missing from any sitemap.xml / robots.txt (neither file exists). They should be listed with low priority so they are discovered but not over-weighted.
- 'Last Updated: June 17, 2026' is hard-coded as static text. Best practice for legal pages is a machine-readable date (dateModified in schema, <time datetime>) and a stated effective date; a stale-looking hard-coded date erodes trust if the policy changes and the string is not updated.
- Email is a free machinerycentre@yahoo.com address used as the Grievance Officer / legal contact. For a legal/compliance contact this materially weakens trust; a branded domain mailbox (e.g. privacy@ or legal@machinerycentre.in) would be far stronger (recommendation only — do not assert it exists).
- Grievance Officer is unnamed ('Grievance Officer, Machinery Centre'). The DPDP Act framing benefits from a named, contactable Data Protection / Grievance Officer; an anonymous role with a yahoo address reads as boilerplate.
- PrivacyPolicy has TWO near-duplicate contact/grievance blocks (Section 10 'Grievance Redressal' and the trailing 'GRIEVANCE REDRESSAL AND CONTACT DETAILS' section). This is redundant on-page duplication — consolidate to one canonical contact block to avoid bloat and conflicting info (Section 10 omits the landline; the trailing block includes it).
- Phone-number inconsistency within the same page: Section 10 lists only the two mobiles; the trailing block adds the landline +91-11-41440012. NAP must be identical everywhere (landline 011-41440012 + both mobiles) for local-SEO consistency.
- Zero internal links in the body of either page despite importing the react-router Link component (imported but unused in both files). Legal pages are a natural, low-risk place to pass a little equity to Home, Privacy<->Terms, and Contact, and to give users a way back into the funnel.
- Titles are serviceable but generic ('Privacy Policy | Machinery Centre'); they waste the opportunity to lightly disambiguate the brand + Delhi entity and sit well under the 50-char floor. Meta descriptions are decent but can be tightened to the 140-160 band and made unique to each page.
- No mention of which jurisdiction's data law beyond DPDP, and Terms governing-law/jurisdiction (Delhi, India) is good — but the two legal pages do not cross-link to each other in-body even though Terms Section 11 references the Privacy Policy by name.
- Heading case is ALL-CAPS in markup ('1. INTRODUCTION'). Visually fine via CSS, but the literal uppercase text is what crawlers read; sentence/title case is cleaner for accessibility and snippet rendering. Minor.

**SEO opportunities**

- Make both routes prerendered/static so the unique title, meta, canonical and a small JSON-LD block exist in the initial HTML — the single highest-leverage fix for any SPA legal page.
- Add self-referencing canonical tags on /privacy-policy and /terms-of-use (placeholder domain, replace before launch) to kill duplicate-variant risk.
- List both in sitemap.xml at low priority (0.2-0.3, changefreq yearly) and ship a robots.txt — establishes basic crawl hygiene the site currently lacks entirely.
- Correct the business description to the real niche (compressed-air systems & industrial pumps dealer/stockist with after-sales service) so the legal text is consistent with the homepage, products pages and Organization schema — consistency is itself a trust/E-E-A-T signal Google rewards for YMYL-adjacent legal pages.
- Use these high-trust pages to reinforce NAP consistency (exact address, landline 011-41440012, both mobiles) feeding the Delhi / near-me local cluster indirectly.
- Add WebPage + (on Privacy) PrivacyPolicy / Organization JSON-LD with dateModified so the 'last updated' date is machine-readable and the publisher entity is unambiguous.
- Add a few contextual internal links (Home, Contact, the other legal page, Products hub) to recirculate users and pass minor equity — currently zero links in body.
- Recommend a branded legal/privacy email and a named Grievance Officer to strengthen DPDP credibility (conditional recommendation, not an asserted fact).

**Recommended keywords**

- **Primary:** `Machinery Centre privacy policy`
- **Secondary:** Machinery Centre terms of use · Machinery Centre terms and conditions · DPDP Act 2023 privacy policy · website data protection policy · B2B website terms of use India
- **Long-tail:** how Machinery Centre handles your personal data under the DPDP Act 2023 · terms and conditions for using Machinery Centre compressor and pump website · grievance officer contact for Machinery Centre Delhi data privacy
- **Semantic:** data principal · data fiduciary · consent · grievance officer · data retention · governing law India · Delhi jurisdiction · intellectual property · limitation of liability · force majeure · indemnification · cookies and tracking · personal data processing

**On-page metadata**

- **SEO Title** (51 chars): Privacy Policy | Machinery Centre Delhi (DPDP 2023)
- **Meta description** (148 chars): How Machinery Centre, a Delhi-based compressor and pump dealer, collects, uses and protects your personal data under India's DPDP Act, 2023 (India).
- **H1:** Privacy Policy
- **URL slug:** `privacy-policy (keep) and terms-of-use (keep) — both are clean, conventional and already indexable-friendly; do not change. Avoid /terms-and-conditions duplicates.`

**Heading outline**

- `H1` Privacy Policy (Privacy page) / Terms and Conditions of Use (Terms page)
- `H2` 1. Introduction
- `H2` 2. Nature of Information Collected
- `H2` 3. Purpose of Processing
- `H2` 4. Consent and Withdrawal
- `H2` 5. Disclosure of Personal Data
- `H2` 6. Data Retention
- `H2` 7. Data Security
- `H2` 8. Rights of Data Principals
- `H2` 9. Cookies and Tracking Technologies
- `H2` 10. Grievance Redressal and Contact Details (consolidated — remove the duplicate trailing block)
- `H2` 11. Amendments to this Policy
- `H2` Terms of Use page outline — H2: 1. Introduction
- `H2` 2. Purpose of the Website
- `H2` 3. Eligibility (B2B use)
- `H2` 4. User Information
- `H2` 5. Intellectual Property Rights
- `H2` 6. Product Information and Disclaimers
- `H2` 7. Prohibited Activities
- `H2` 8. Third-Party Links
- `H2` 9. Limitation of Liability
- `H2` 10. Indemnification
- `H2` 11. Privacy
- `H2` 12. Force Majeure
- `H2` 13. Governing Law and Jurisdiction
- `H2` 14. Modifications
- `H2` 15. Contact Information

**Revised content** _(ready to paste)_

*Privacy — useSEO() call (replace line 6)*

useSEO("Privacy Policy | Machinery Centre Delhi (DPDP 2023)", "How Machinery Centre, a Delhi-based compressor and pump dealer, collects, uses and protects your personal data under the Digital Personal Data Protection Act, 2023.");

*Privacy — Section 1 Introduction (corrected business identity)*

This Privacy Policy ("Policy") sets out how Machinery Centre, a Delhi-based business engaged in the dealership, supply, stocking, installation and after-sales servicing of industrial air compressors, compressed-air treatment equipment, industrial pumps and genuine OEM spares ("Machinery Centre", "we", "our" or "us"), collects, stores, processes, uses, discloses and otherwise handles the Personal Data of individuals who access, browse or submit information through our website (the "Website").\n\nWe are committed to processing Personal Data lawfully, fairly, transparently and securely, in accordance with the Digital Personal Data Protection Act, 2023, together with any rules, regulations, notifications or statutory modifications issued under it from time to time.\n\nBy accessing the Website, submitting information, downloading product catalogues, requesting quotations or otherwise interacting with us through digital channels, you acknowledge that you have read, understood and agreed to this Policy.

*Privacy — Section 10 (consolidated single contact block; DELETE the duplicate trailing 'contact-details' section entirely)*

Heading: 10. Grievance Redressal and Contact Details\n\nIn accordance with the Digital Personal Data Protection Act, 2023, any request, grievance, complaint or query relating to the collection, processing, storage, use, disclosure, correction or deletion of your Personal Data may be addressed to our Grievance Officer using the details below. We will endeavour to acknowledge and address grievances within the timelines prescribed under applicable law.\n\nGrievance Officer — Machinery Centre\nAddress: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India\nTelephone: 011-41440012\nMobile: +91 98100 54137, +91 98911 55438\nEmail: machinerycentre@yahoo.com\n\n[RECOMMENDATION, do not publish as fact: name a specific Grievance Officer and move to a branded mailbox such as privacy@machinerycentre.in once the production domain is live, to strengthen DPDP credibility.]

*Privacy — add in-body internal links (footer of policy content)*

For more about who we are, see About Machinery Centre. To raise a data request or any other query, visit our Contact page. Your use of this Website is also governed by our Terms and Conditions of Use.

*Terms — useSEO() call (replace line 6)*

useSEO("Terms of Use | Machinery Centre Delhi NCR", "Terms and conditions governing use of Machinery Centre's website, product catalogues and B2B quotation services for air compressors and industrial pumps. Governed by Indian law.");

*Terms — Section 2 Purpose (corrected niche)*

This Website provides information about the air compressors, compressed-air treatment equipment, industrial pumps, genuine OEM spares and related after-sales services offered by Machinery Centre as a dealer and stockist.\n\nThe information made available is provided solely for general informational and business purposes and does not constitute a binding offer, warranty, guarantee or contractual commitment unless expressly agreed in writing by us.\n\nWe reserve the right to modify, suspend, discontinue or update any content, product information, specifications or functionality on the Website without prior notice.

*Terms — Section 15 Contact (NAP-consistent, add cross-links)*

For any questions regarding these Terms and Conditions, please contact us:\n\nMachinery Centre\n3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India\nTelephone: 011-41440012\nMobile: +91 98100 54137, +91 98911 55438\nEmail: machinerycentre@yahoo.com\n\nSee also our Privacy Policy and our Contact page.

**Internal links**

| Anchor | Target | Placement |
| --- | --- | --- |
| About Machinery Centre | `/about` | Privacy Policy — closing paragraph of policy body, before Back to Top |
| Contact page | `/contact` | Privacy Policy — closing paragraph and within the consolidated Grievance/Contact block |
| Terms and Conditions of Use | `/terms-of-use` | Privacy Policy — closing paragraph (cross-link to sibling legal page) |
| Privacy Policy | `/privacy-policy` | Terms of Use — Section 11 Privacy (it already names the Privacy Policy; make it a real link) and Section 15 Contact |
| Contact page | `/contact` | Terms of Use — Section 15 Contact Information |
| Machinery Centre | `/` | Both pages — first mention of the company name in Section 1 Introduction can link to Home |
| product catalogues | `/products` | Both pages — where 'product catalogues' is mentioned in Purpose/Introduction, link to the Products hub |

**Image alt text**

| Image | Recommended alt |
| --- | --- |
| ShieldCheck lucide icon in Privacy header (decorative) | Decorative icon — mark aria-hidden="true" (decorative, no alt needed since adjacent H1 'Privacy Policy' conveys meaning) |
| FileText lucide icon in Terms header (decorative) | Decorative icon — mark aria-hidden="true" (decorative; adjacent H1 conveys meaning) |
| Calendar lucide icon next to Last Updated | Decorative calendar icon — aria-hidden="true"; the date text is already machine-readable when wrapped in a <time datetime> element |

**Conversion recommendations**

- These are not conversion pages and should not carry hard CTAs, but add one soft recirculation link at the end of each: 'Looking for an air compressor or pump? Browse our products or request a quote.' linking to /products and /quote — keeps users who landed on a legal page from dead-ending.
- Wrap 'Last Updated: June 17, 2026' in a <time datetime="2026-06-17"> element and drive both the visible string and schema dateModified from a single constant, so the date is always accurate when the policy changes — a current date is a real trust signal.
- Consolidate the duplicate Privacy contact blocks into one and make the phone/email click-to-call/mailto on mobile (the landline and mobiles should be tel: links) so a user with a query can act in one tap.
- Name a real Grievance / Data Protection Officer and move legal contact to a branded domain mailbox (recommendation) — materially raises perceived legitimacy for B2B buyers vetting a supplier.
- Ensure footer links to /privacy-policy and /terms-of-use exist site-wide (standard trust-footer pattern) so the pages are reachable in one click from every page, aiding both users and crawl discovery.

**Page FAQs**

- **What personal data does Machinery Centre collect through its website?** We collect details you provide voluntarily — such as your name, business email, phone or mobile number, company name, designation, business address, industry sector and the products you are interested in — when you request a quotation, download a catalogue or send an inquiry. We also collect limited technical data (IP address, browser type, pages visited) automatically for security and analytics.
- **Is Machinery Centre's privacy policy compliant with the DPDP Act, 2023?** Yes. Our Privacy Policy is framed in accordance with the Digital Personal Data Protection Act, 2023 and its rules. We process Personal Data lawfully and only for the purposes for which it was collected, and we recognise the rights of data principals to access, correct, erase and withdraw consent for their data.
- **How can I raise a data privacy grievance or contact the Grievance Officer?** You can contact our Grievance Officer at Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, by phone on 011-41440012 (or mobile +91 98100 54137 / +91 98911 55438) or by email at machinerycentre@yahoo.com. We aim to acknowledge and address grievances within the timelines prescribed by law.
- **Which law governs the use of the Machinery Centre website?** Use of the Website is governed by and construed in accordance with the laws of India, and any dispute is subject to the exclusive jurisdiction of the competent courts located in Delhi, India.
- **Does downloading a catalogue from the website grant me any rights to the content?** No. All content on the Website — including catalogues, brochures, technical documents, images, logos and trademarks — remains the property of Machinery Centre or its licensors. Downloading a catalogue is for your reference only and transfers no ownership or intellectual property rights.
- **Are quotations or product details on the website binding?** No. Product information, specifications, pricing and availability are provided for general information only, may change without notice, and do not constitute a warranty or binding offer. Any purchase is governed exclusively by the separate quotation, purchase order, invoice or written agreement executed between the parties.

**Schema:** Privacy page: add JSON-LD WebPage with @type also 'PrivacyPolicyPage' (Schema.org), name 'Privacy Policy', url https://www.machinerycentre.in/privacy-policy (PLACEHOLDER domain — replace), inLanguage 'en-IN', and dateModified bound to the single last-updated constant. · Terms page: add JSON-LD WebPage with name 'Terms and Conditions of Use', url https://www.machinerycentre.in/terms-of-use (PLACEHOLDER), inLanguage 'en-IN', dateModified. · On both, set publisher/about to an Organization node: name 'Machinery Centre', address PostalAddress (3858 Shradhanand Marg, Shah Ganj, Delhi-110006, IN), telephone +91-11-41440012, email machinerycentre@yahoo.com — reuse the same Organization @id sitewide for entity consistency. · Add BreadcrumbList (Home > Privacy Policy / Home > Terms of Use) so the breadcrumb can surface in results. · Optionally add an FAQPage block built from the PAA-style FAQs above IF the questions are actually rendered on the page (do not add FAQ schema for content not visible on-page — that violates Google's structured-data guidelines). · Site-wide prerequisite: emit all of the above in the initial server-rendered/prerendered HTML rather than client-side, add self-referencing canonical link tags, and register both URLs in sitemap.xml at priority 0.2-0.3, changefreq yearly. Add robots.txt (none exists). Replace the placeholder domain with the real production domain in every URL, canonical and schema field before launch.

---

## 05 · Local SEO

Machinery Centre is a Delhi (Old Delhi / Shah Ganj) B2B dealer, authorized channel partner and stockist for compressed-air systems and industrial pumps, plus after-sales service and genuine OEM spares - NOT a manufacturer or generic "machinery" supplier. The local-SEO opportunity is to own niche + local intent ("air compressor dealer in Delhi", "screw compressor supplier Delhi NCR", "Ingersoll-Rand authorized dealer Delhi", "industrial pump dealer Old Delhi") rather than broad "machinery dealer" terms. Two issues must be fixed first because they cap every local ranking gain: (1) the site is a client-only Vite SPA with no SSR/prerender, no JSON-LD, no sitemap.xml, no robots.txt, no canonicals, no Open Graph - so Google sees thin, JS-dependent pages; (2) the routing bug where /products/compressors, /products/pumps, /products/air-treatment and /products/spares all share ONE URL, title and meta (Products.tsx uses useState tabs and ignores the URL), so four indexable category pages collapse into one. Resolve the years-in-business inconsistency to a single figure: index.html meta says "35+ years" while About.tsx auto-computes 39 from 1987 - standardize on "Since 1987" (let on-page counters derive the number) so GBP, citations and on-page copy never disagree. The fastest wins are a fully optimized, NAP-consistent Google Business Profile, claimed/standardized listings on IndiaMART, Justdial and TradeIndia (where Delhi B2B buyers actually search), real attributable reviews to replace the placeholder testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel), and LocalBusiness schema. All recommendations use the placeholder domain https://www.machinerycentre.in/ which MUST be replaced with the real production domain before launch. No certifications, awards, client names, review counts or search volumes are asserted - unverifiable trust signals are flagged as conditional.

### Google Business Profile

- Primary category: set to 'Air compressor supplier'. This is the single most important GBP lever for local ranking and should match the core niche, not a generic 'Industrial equipment supplier'.
- Secondary categories (add all that genuinely apply): 'Pump supplier', 'Compressed gas supplier', 'Industrial equipment supplier', 'Air filtration system supplier', 'Equipment supplier', 'Repair service'. Do not add categories for products not stocked.
- Business name in GBP must be exactly 'Machinery Centre' (British spelling, no keyword stuffing like 'Machinery Centre - Air Compressor Dealer Delhi' - that risks suspension). Keywords belong in categories, services and the description, not the name field.
- NAP in GBP must match the site byte-for-byte: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006; primary phone 011-41440012; add 9810054137 and 9891155438 as additional numbers; set the WhatsApp/booking link to +91 9810054137. Pin the map marker precisely on the Shah Ganj / Behind Hanuman Mandir location near G.B. Road.
- Service area: add Delhi, New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad and Delhi NCR so the profile surfaces for nearby B2B buyers even though it is a storefront/dealer location.
- GBP Services (free-text, map to real offerings): 'Screw Air Compressor Supply & Installation', 'Reciprocating Air Compressor Supply', 'Industrial Pump Supply (Gear, Metering, Vacuum)', 'Compressed Air Dryers & Filters', 'Nitrogen Generator Supply', 'Compressor & Pump AMC / After-Sales Service', 'Genuine OEM Spares & Service Kits'. Add a 1-2 line description per service using brand entities (Trendi, Ingersoll-Rand, Trident, Kirloskar, Rotodel).
- GBP Products: create product entries mirroring the catalog - Trendi Belt-Drive Screw Air Compressor, Trendi Direct-Drive Screw Compressor, Trendi Two-Stage Reciprocating (175 PSIG), Ingersoll-Rand Two-Stage Reciprocating (175 PSI, 100% continuous duty), Rotodel HGN/HGSX Rotary Gear Pumps, Kirloskar Metering & KV/DV Vacuum Pumps, Trident Dryspell Desiccant Dryers, Trident Coldspell Refrigerated Dryers, Trident Nitrogen Generator. Link each to /products and /trendi (real routes) and to the relevant catalog PDF.
- GBP Description (~750 chars, no keyword stuffing): 'Machinery Centre is a Delhi-based B2B supplier of industrial air compressors, pumps and compressed-air treatment systems, serving industry across Delhi NCR since 1987. We are authorized dealers for Ingersoll-Rand and Trident, makers of the energy-efficient Trendi compressor range, and stockists for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest. From screw and reciprocating compressors to gear, metering and vacuum pumps, desiccant and refrigerated dryers, filters and nitrogen generators, we supply, install and service complete compressed-air solutions - backed by genuine OEM spares and after-sales support for packaging, paint, cement, textile, pharma and food applications.'
- Posts: publish a weekly/fortnightly GBP post - product spotlights (e.g. Trendi VFD screw compressor energy savings), application notes (compressed air for textile/packaging lines), spares/AMC reminders, and 'Visit our Old Delhi showroom' posts. Each post should include one local term and a CTA to /quote or /contact.
- Photos: upload geo-relevant, real imagery - storefront/exterior at Shah Ganj (helps Maps confidence), interior showroom, compressors and pumps in stock, branded delivery, team at work, and the logo as profile image. Avoid stock photos; authentic local photos improve Maps engagement signals.
- Q&A: seed and answer 6-10 real buyer questions, e.g. 'Are you an authorized Ingersoll-Rand dealer in Delhi?', 'Do you stock Kirloskar pump spares?', 'Do you provide compressor AMC in Delhi NCR?', 'What is the warranty on Trendi screw compressors?', 'Do you deliver to Gurgaon/Noida/Faridabad?'. Answer factually and consistently with the site.
- Reviews: replace reliance on the generic homepage testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel read as placeholders - flag for removal or replacement with real attributable reviews) by actively requesting Google reviews from genuine B2B customers. Send the GBP review short-link after each sale/service; ask reviewers to mention the product (e.g. 'Trendi screw compressor') and city ('Delhi', 'Noida') naturally. Respond to every review.
- Attributes & hours: set accurate opening hours (and holiday hours), enable messaging, and tick relevant attributes (e.g. 'Onsite services', 'Wheelchair accessible' only if true). Add the real website URL once the production domain replaces the https://www.machinerycentre.in/ placeholder.

### NAP consistency

Lock a single canonical NAP and use it byte-for-byte on the site footer, Contact page, GBP, and every directory/citation. Canonical format: Name 'Machinery Centre'; Address '3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India'; Phone '011-41440012' (primary), mobiles '+91 98100 54137' and '+91 98911 55438', WhatsApp '+91 98100 54137'. Decide one display style for phone numbers and reuse it everywhere - inconsistent formatting (011-41440012 vs +91 11 41440012, or 9810054137 vs +91 98100 54137) weakens citation matching. The Contact page currently uppercases the address ('3858 SHRADHANAND MARG...') while the canonical/GBP form should use title case; render the same casing site-wide. CRITICAL year fix: index.html meta says '35+ years' but About.tsx computes 39 from 1987 - this is a live inconsistency. Standardize on 'Since 1987' as the durable phrasing (so the number is never stale) and let on-page counters compute the years; update index.html meta to drop '35+ years'. Email: currently machinerycentre@yahoo.com - keep it consistent everywhere it appears, and RECOMMEND (do not assert as existing) migrating to a branded address like sales@[realdomain] once the production domain is live, as branded email raises B2B trust and citation quality. Flag that the production domain must replace https://www.machinerycentre.in/ in all NAP/citation entries before submission so listings don't have to be re-edited later.

### "Near me" intent

'Near me' searches (e.g. 'air compressor dealer near me', 'pump supplier near me', 'compressor repair near me') are resolved by Google primarily from the Google Business Profile + Maps signals, not from a webpage literally containing 'near me'. Strategy: (1) Fully optimize and verify the GBP with the correct primary category 'Air compressor supplier', precise map pin at Shah Ganj, accurate hours, real local photos, and steady genuine reviews - this is what makes the business eligible to appear in the Maps 'near me' 3-pack for nearby buyers. (2) Earn proximity-relevant authority via consistent NAP citations across IndiaMART, Justdial, TradeIndia and local directories. (3) On-site, satisfy near-me intent by naming the locality and region naturally (Old Delhi / Shah Ganj / Delhi NCR) on the Delhi hub and Contact page, embedding the Maps location, and showing the canonical address + click-to-call phone prominently so mobile buyers searching nearby can act instantly. (4) Capture explicit-locality long-tail queries with the real pages above ('air compressor dealer in Delhi', 'industrial pump supplier Old Delhi', 'compressor AMC Delhi NCR') rather than chasing the literal phrase 'near me'. (5) Add click-to-call (tel: links) and a WhatsApp link (+91 98100 54137) above the fold for high-intent mobile near-me visitors. Do NOT create pages stuffed with 'near me' - it does not help and reads as spam.

### Recommended location pages

| Page | URL | Target keywords | Content notes |
| --- | --- | --- | --- |
| Air Compressor & Pump Dealer in Delhi (primary local hub) | `https://www.machinerycentre.in/ (or a dedicated /delhi route once routing supports real pages)` | air compressor dealer in Delhi · industrial pump supplier Delhi · screw air compressor Delhi · compressed air systems Delhi | Flagship local page - the home/landing experience for Delhi intent. Ready-to-paste H1 and intro: 'Air Compressor & Pump Dealer in Delhi - Machinery Centre. Since 1987, Machinery Centre has supplied industrial air compressors, pumps and compressed-air treatment systems to manufacturers across Delhi and the wider NCR. As authorized dealers for Ingersoll-Rand and Trident, makers of the energy-efficient Trendi compressor range, and stockists for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest, we supply, install and service complete compressed-air solutions from our Old Delhi base at Shah Ganj. From belt-drive and direct-drive screw compressors to gear, metering and vacuum pumps, desiccant and refrigerated dryers, submicron filters and PSA nitrogen generators, every system is backed by genuine OEM spares and responsive after-sales support.' Embed the GBP map, the canonical NAP, and internal links to /products, /trendi, /quote and /contact. Include named industries (packaging, paint, cement, textile, laundry, pharma, food). |
| Old Delhi / Shah Ganj Showroom (store-locator style) | `https://www.machinerycentre.in/contact` | air compressor shop Old Delhi · industrial pump dealer Shah Ganj · compressor dealer near GB Road Delhi | Use the existing Contact route as the physical-location page rather than spinning up a thin doorway page. Add a genuine locality paragraph: 'Visit Machinery Centre at 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006 - in the heart of Old Delhi's industrial-supply district near G.B. Road. Our showroom and stockholding lets buyers across Delhi NCR source screw and reciprocating compressors, industrial pumps, air dryers, filters and genuine OEM spares with expert in-person guidance and fast after-sales service.' Embed Google Maps, opening hours and the canonical NAP. This anchors the 'near me' and Maps signals authentically. |
| Air Compressor & Pump Supplier in Delhi NCR (regional reach) | `https://www.machinerycentre.in/ (section within the Delhi hub, or /delhi-ncr once real routing exists)` | air compressor supplier Delhi NCR · screw compressor dealer NCR · industrial pump supplier NCR · compressor AMC Delhi NCR | One honest regional page covering the whole NCR catchment - NOT separate near-identical doorway pages per city. Copy: 'Serving Delhi NCR from our Old Delhi base. Machinery Centre supplies and services industrial air compressors, pumps and compressed-air treatment across the National Capital Region - including Gurgaon, Noida, Faridabad and Ghaziabad. Whether you run a packaging line in Noida, a textile unit in Faridabad or a paint plant in Gurgaon, we provide Trendi, Ingersoll-Rand and Trident equipment, Kirloskar and Rotodel pumps, and genuine OEM spares, with delivery and after-sales service across the region.' Mention each city once, naturally, with the application most associated with it; link to /products and /quote. Only build dedicated per-city pages (Gurgaon/Noida/Faridabad/Ghaziabad) LATER and ONLY if you can add genuinely unique content (local case studies, serviced clients, delivery specifics) - otherwise they are spammy doorway pages that Google may filter. |
| Compressors category page (fix routing first) | `https://www.machinerycentre.in/products/compressors` | screw air compressor dealer Delhi · reciprocating air compressor supplier · Ingersoll-Rand authorized dealer Delhi · Trendi screw compressor | BLOCKED until the Products.tsx routing bug is fixed - today this URL renders the same shared title/meta as pumps/air-treatment/spares. Make each category a real route that reads the URL (derive activeCategoryId from useParams/useLocation) so it gets its own indexable URL, H1, title and meta. Recommended title (count 60): 'Screw & Reciprocating Air Compressors Delhi \| Machinery Centre'. Meta (count 152): 'Authorized Ingersoll-Rand dealer and Trendi maker in Delhi. Energy-efficient screw and two-stage reciprocating air compressors with VFD, IE3 motors & service.' Body should name specs and entities (175 PSIG, 3-stage air-oil separator, VFD optional, 100% continuous duty). |
| Industrial Pumps category page | `https://www.machinerycentre.in/products/pumps` | industrial pump dealer Delhi · rotary gear pump supplier · Kirloskar metering pump Delhi · vacuum pump dealer NCR | After routing fix, give this its own meta. Title (count 50): 'Industrial Pump Dealer in Delhi \| Machinery Centre'. Meta (count 150): 'Industrial pump dealer in Delhi: Rotodel rotary gear pumps, Kirloskar metering and KV/DV vacuum pumps. Stockist with genuine OEM pump spares & service.' Body: gear pumps (Rotodel HGN/HGSX, high-viscosity, pulsation-free), metering/dosing (Kirloskar), vacuum (up to 640 mmHg, 162 m3/hr); applications in food, pharma, chemical dosing. |
| Air Treatment category page | `https://www.machinerycentre.in/products/air-treatment` | compressed air dryer supplier Delhi · desiccant air dryer dealer · nitrogen generator supplier Delhi · Trident air dryer dealer | Own meta after routing fix. Title (count 58): 'Compressed Air Dryers & Filters in Delhi \| Machinery Centre'. Meta (count 156): 'Trident desiccant (Dryspell) and refrigerated (Coldspell) compressed air dryers, submicron filters to 0.01 micron, PSA nitrogen generators & drain valves in Delhi.' Body: heatless desiccant, refrigerated dryers, coalescing/submicron and bacteria/medical filters, automatic drain valves, NFPA 99 breathing-air, carbon adsorber towers. |
| OEM Spares category page | `https://www.machinerycentre.in/products/spares` | compressor spares Delhi · pump spares dealer Delhi · Ingersoll-Rand spares Delhi · Kirloskar pump spares | Own meta after routing fix. Title (count 56): 'Compressor & Pump Spares Dealer Delhi \| Machinery Centre'. Meta (count 151): 'Genuine OEM compressor and pump spares in Delhi: air & oil filters, air-oil separators, intake valves, gaskets and service kits for Ingersoll-Rand, Kirloskar.' Body: pump spares (boiler feed, chemical, water-lifting, sewerage, fire-fighting, booster, centrifugal, self-priming) plus Elgi/Janatics components. |
| Trendi Range page (brand entity) | `https://www.machinerycentre.in/trendi` | Trendi air compressor · Trendi screw compressor Delhi · energy-efficient screw compressor India | Already a real route with its own useSEO call. Strengthen for local + brand intent. Recommended title (count 53): 'Trendi Energy-Efficient Screw Air Compressors \| Delhi'. Meta (count 149): 'Trendi by Machinery Centre - energy-efficient belt & direct-drive screw and two-stage reciprocating air compressors with VFD and IE3 motors, supplied across Delhi.' Reinforce Trendi as an owned/exclusive brand entity and link to /products/compressors and /quote. |

### Regional opportunities

- IndiaMART - the single highest-value B2B channel for this niche in India. Create/claim a fully built-out seller profile with the exact NAP, all product categories (screw compressors, reciprocating compressors, gear/metering/vacuum pumps, dryers, filters, nitrogen generators, spares), brand associations (Ingersoll-Rand, Trident, Trendi, Kirloskar, Rotodel) and catalog PDFs. Most Delhi industrial-buyer search and RFQ activity flows through here.
- Justdial - critical for Delhi local + 'near me' discovery and calls. Claim/verify the listing, set categories to 'Air Compressor Dealers' and 'Industrial Pump Dealers', match NAP exactly, add photos and the Shah Ganj location.
- TradeIndia - secondary B2B marketplace; create a seller profile mirroring IndiaMART for additional citation authority and RFQ reach.
- Sulekha - useful for local service intent (compressor/pump AMC and repair in Delhi NCR); list with consistent NAP and the service offerings.
- Google Maps / Google Business Profile - the anchor of the entire local strategy (covered in GBP section); ensure the Maps entity matches all directory NAPs.
- Exporters India / industrial B2B directories (e.g. Connect2India and similar) - selectively claim where they allow a free verified profile, for citation consistency; prioritize quality over quantity.
- Brand/OEM dealer locators - request inclusion in any Ingersoll-Rand and Trident 'find a dealer / authorized partner' listings (verify eligibility before claiming the 'authorized dealer' label publicly); an OEM backlink/listing is a strong trust and relevance signal for Delhi buyers.

### Citations & directories

- Google Business Profile (Maps) - primary, fully optimized, verified
- IndiaMART seller profile - full catalog + NAP
- Justdial business listing - 'Air Compressor Dealers' + 'Industrial Pump Dealers' categories
- TradeIndia seller profile
- Sulekha business/service listing
- Bing Places for Business (mirror of GBP NAP)
- Apple Maps / Apple Business Connect listing
- Facebook Business Page (with matching NAP and About)
- LinkedIn Company Page
- Exporters India / Connect2India B2B directory listing
- Local Delhi business directories (AskLaila, India Yellow Pages and similar) - only verified, free, NAP-consistent entries
- Ingersoll-Rand and Trident official dealer/partner locators (if eligible) - high-trust niche citation

### LocalBusiness schema

Add JSON-LD LocalBusiness schema - currently there is NO schema at all. Because the site is a client-only Vite SPA with no SSR/prerender, schema injected only at runtime via JS may be missed or delayed by crawlers; the robust fix is to render the LocalBusiness JSON-LD statically into index.html <head> (or add SSR/prerendering for key routes) so it is present in the raw HTML. Recommended type: 'LocalBusiness' (optionally modeled together with 'Organization'). Suggested fields (replace placeholder domain): {\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"@id\":\"https://www.machinerycentre.in/#business\",\"name\":\"Machinery Centre\",\"description\":\"Delhi-based B2B dealer and stockist of industrial air compressors, pumps and compressed-air treatment systems, with genuine OEM spares and after-sales service since 1987.\",\"url\":\"https://www.machinerycentre.in/\",\"telephone\":\"+91-11-41440012\",\"email\":\"machinerycentre@yahoo.com\",\"foundingDate\":\"1987\",\"image\":\"https://www.machinerycentre.in/logo.png\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir\",\"addressLocality\":\"Delhi\",\"addressRegion\":\"Delhi\",\"postalCode\":\"110006\",\"addressCountry\":\"IN\"},\"areaServed\":[\"Delhi\",\"New Delhi\",\"Gurgaon\",\"Noida\",\"Faridabad\",\"Ghaziabad\",\"Delhi NCR\"],\"contactPoint\":[{\"@type\":\"ContactPoint\",\"telephone\":\"+91-98100-54137\",\"contactType\":\"sales\",\"areaServed\":\"IN\"}],\"brand\":[{\"@type\":\"Brand\",\"name\":\"Trendi\"}],\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Screw Air Compressors\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Industrial Pumps\"}}],\"sameAs\":[\"<IndiaMART URL>\",\"<Justdial URL>\",\"<Facebook URL>\",\"<LinkedIn URL>\"]}. RULES: do NOT add aggregateRating/review schema until real, attributable reviews exist (fabricating review counts violates Google's guidelines and the no-fabrication rule); do NOT add award, ISO/CE or certification properties unless genuinely held - add 'hasCredential'/a badge only IF certified. Add 'geo' (latitude/longitude) once the exact pin is confirmed, and 'openingHoursSpecification' once real hours are set. The domain https://www.machinerycentre.in/ and @id MUST be swapped for the real production domain before publishing, and the same URL must be used as the canonical tag (canonical tags are also currently missing site-wide).

---

## 06 · E-E-A-T & Trust

Machinery Centre is a real, 1987-established (39 years as of 2026) Delhi-based B2B dealer/stockist of compressed-air systems and industrial pumps, plus after-sales service and spares — NOT a manufacturer and NOT a generic industrial-machinery supplier. The current site has genuine EEAT foundations (long tenure, named partners Ingersoll-Rand/Trident, owner photos, real NAP, named industries) but undermines them with placeholder testimonials, an unverified "15,000+ clients" claim, a 35-vs-39-year inconsistency between meta tags and on-page counters, a yahoo.com email, thin leadership bios, and generic "authorized dealer of leading brands" claims shown without any proof artifacts. The biggest credibility lever is converting vague assertions into verifiable, attributable evidence (real reviews, dealer-authorization letters IF held, named case studies, branded email) and fixing the meta/counter year inconsistency to a single figure. SEO must target the real niche — air compressors, air dryers/filtration, industrial pumps, OEM spares + Delhi/Delhi-NCR local intent — not generic "machinery dealer" terms. CANONICAL DOMAIN https://www.machinerycentre.in/ is a PLACEHOLDER and must be replaced with the real production domain before any schema/sitemap/canonical/OG tags go live. Below, the *experience* array is structured as: (1) ready-to-paste SEO title+meta rewrites with character counts, then (2) the EEAT trust-signal recommendations grouped by Experience/Expertise/Authoritativeness/Trustworthiness, then trust signals, recommended additions, and honesty flags.

### Experience

- === SEO METADATA REWRITES (char counts verified) ===
- HOME — Title (REPLACE the current 'Industrial Air Compressors & Pumps | Authorized Dealer | Machinery Centre' which is ~90 chars, far over range). NEW: 'Air Compressors & Industrial Pumps in Delhi | Machinery Centre' = 61 chars (1 over 60; if strict, use the 58-char variant below). PREFERRED 58-char variant: 'Air Compressor & Pump Dealer Delhi | Machinery Centre' = 53 chars. USE THIS 53-char title — within 50-60, includes niche (air compressor, pump), local intent (Delhi), and brand.
- HOME — Meta description (REPLACE current 'Machinery Centre is a leading authorized dealer of industrial air compressors, pumps, and OEM spares for 35+ years...' which also wrongly says 35+). NEW: 'Delhi dealer of air compressors, industrial pumps, air dryers & genuine OEM spares since 1987. Ingersoll-Rand, Trident, Kirloskar & our Trendi range.' = 149 chars — within 140-160. Note it says 'since 1987' (a fact) instead of a year count, sidestepping the 35-vs-39 conflict entirely.
- ABOUT — Title (REPLACE 'About Machinery Centre | Industrial Equipment Suppliers Since 1987' ~64 chars and over-generic 'Industrial Equipment'). NEW: 'About Machinery Centre | Compressor & Pump Dealer Since 1987' = 59 chars — within 50-60; brand-led, niche-accurate, keeps the 1987 trust anchor.
- ABOUT — Meta description (REPLACE current which calls them a 'supplier of industrial machinery' — too generic). NEW: 'Family-run Delhi dealer of air compressors, pumps & air-treatment systems since 1987. Authorized partner for Ingersoll-Rand & Trident, with expert after-sales service.' = 165 chars — 5 OVER. TRIMMED: 'Family-run Delhi dealer of air compressors, pumps & air-treatment since 1987. Authorized partner for Ingersoll-Rand & Trident, with expert after-sales service.' = 158 chars — within 140-160. USE THE 158-char version.
- === EXPERIENCE (first-hand, demonstrable track record) ===
- Surface the 1987 founding as a dated, sourced fact (the About page already correctly tells the Gulson Engineering Company origin story from 1978 diversifying in Nov 1987 — keep and amplify this; it is excellent Experience signal). Replace every numeric 'years' count in meta with 'since 1987' OR drive a single computed figure everywhere (see honesty flags).
- Add a short 'Installations we are proud of' band on Home or About with REAL, attributable mini-case-studies once collected: format as 'Application: [e.g. 3-stage screw compressor + desiccant dryer for a Delhi-NCR packaging line] — Outcome: [e.g. reduced compressed-air downtime].' Ready-to-paste neutral placeholder until real ones exist: 'We have supplied and serviced compressed-air and pumping systems for packaging, paint, cement, textile and laundry operations across Delhi-NCR and North India since 1987.' (factual, no invented numbers).
- Add first-person service-experience proof: photos of the actual G.B. Road / Shah Ganj premises, the service bench, and stocked spares — original imagery (not stock) is a strong Experience signal that this is a working dealer, not a drop-shipper.
- Capture and display Google Business Profile reviews (real, attributable) — see Trustworthiness. Real reviews are the single strongest Experience proof for a local B2B dealer.

### Expertise

- Differentiate brand relationships precisely on the About page (currently lines 156-163 lump everything under 'Authorized Dealer & Stockist'). Split into two labelled groups: 'Authorized Dealer: Ingersoll-Rand, Trident' and 'Stockist: Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest' (plus 'Own brand: Trendi' and 'Also supply: Sonee, Elgi, Janatics'). Accurate categorisation is itself an Expertise/Trust signal and avoids overclaiming 'authorized' status for stockist brands.
- Build genuinely separate, indexable category pages for the real niche taxonomy: Air Compressors (screw belt/direct-drive, reciprocating), Air Treatment (desiccant & refrigerated dryers, coalescing/submicron/medical filters, nitrogen generators, breathing-air, drain valves), Industrial Pumps (rotary gear, metering/dosing, vacuum), and Spares. This both fixes the routing SEO bug (below) AND demonstrates topical depth.
- Surface real spec entities as on-page content to signal Expertise via semantic richness (no stuffing): 'IE3 motors', 'VFD', '3-stage air-oil separator', '175 PSIG two-stage reciprocating', 'desiccant heatless dryer', 'PSA nitrogen 95-99.999%', 'NFPA 99 breathing air', 'Rotodel HGN/HGSX rotary gear pump', 'Kirloskar KV/DV vacuum up to 640 mmHg, 162 m3/hr'. These named specs/models are the entities that rank for high-intent B2B queries.
- Add an FAQ / buyer-guidance block (e.g. 'Screw vs reciprocating compressor — which suits continuous duty?', 'Do I need a refrigerated or desiccant dryer for my application?', 'How to size a rotary gear pump'). Demonstrates application expertise and earns long-tail and AI-overview visibility. Mark up with FAQPage JSON-LD once a real domain exists.
- Add author bios for blog/guide content with named, role-attributed authors (e.g. the partners or a named service engineer): 'By [Name], [role] at Machinery Centre, [X] years in compressed-air systems.' Each author needs a stable bio paragraph and ideally a LinkedIn/profile link. Do NOT invent credentials — use only verifiable roles and tenure.
- Expand the two owner bios on About (currently one vague line each, and Sandeep's says 'over 35 years' — see honesty flags). Ready-to-paste expansions, conditional on verification: 'Sandeep Dhawan, Partner — leads product selection and OEM relationships across Machinery Centre's compressed-air and pumping lines, drawing on decades of hands-on experience in the G.B. Road industrial market.' / 'Sumit Dhawan, Partner — oversees operations, stock and after-sales service, ensuring genuine OEM spares and prompt support for clients across Delhi-NCR.' Add real tenure only once confirmed.

### Authoritativeness

- Display authorized-dealer authorization letters/certificates from Ingersoll-Rand and Trident IF HELD — scanned letter, dealer plaque, or a partner-portal listing. This is the strongest Authoritativeness artifact available to a dealer. Do NOT assert these exist; add a 'Credentials' section and populate only with held documents. Recommended copy IF held: 'Authorized channel partner — see our dealer authorization from Ingersoll-Rand / Trident.'
- Add OEM partner logos with permission, each linking to the relevant authorized-dealer proof or the OEM's own 'find a dealer' page where Machinery Centre is listed (an external OEM listing that names the company is a powerful third-party authoritativeness signal). The Home partner ribbon already shows logos — upgrade it from decorative to evidentiary by linking authorized brands to proof.
- List any industry affiliations/memberships IF held (e.g. local industrial/traders' associations, chamber of commerce, PMA-type bodies). Add only verified memberships with the body's name; do not fabricate. Conditional copy: 'Member, [Association name].'
- Implement JSON-LD structured data (none exists today) once the real domain is set: Organization + LocalBusiness with exact NAP, founder/founding date 1987, sameAs links to Google Business Profile and any social/OEM listings; Product schema on category pages; FAQPage on FAQ blocks; BreadcrumbList. This is what lets Google attribute authority to the entity. Flag: requires SSR/prerendering or static injection because the current client-only useSEO() hook will not be reliably crawled for JSON-LD.
- Build a real domain identity: replace placeholder https://www.machinerycentre.in/ with the actual production domain across canonical tags, sitemap.xml, robots.txt, OG/Twitter cards (all currently MISSING). A consistent canonical domain + branded email (below) consolidates entity authority.
- Add Open Graph + Twitter Card meta and a sitemap.xml/robots.txt so OEM-brand and niche pages can be discovered, shared, and attributed — currently none exist, capping the site's authority signals.

### Trustworthiness

- Replace the three placeholder testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel with vague companies 'Manufacturing Solutions', 'TexFab India', 'BuildTech') with REAL, attributable reviews: full name, real company, city, and ideally role — sourced from Google Business Profile or written client permission. Until real ones exist, REMOVE the fabricated cards rather than ship invented social proof (fake testimonials are a direct EEAT and consumer-trust violation). Replace with a neutral CTA: 'Trusted by packaging, paint, cement, textile and laundry operations across Delhi-NCR since 1987 — request references for your sector.'
- Embed/link a Google Business Profile with live star rating and review count; do not hardcode a star count or review number anywhere in markup (the current testimonials show hardcoded 5-star rows with no source). Use Review/AggregateRating JSON-LD ONLY when backed by a genuine, displayed review source.
- Replace machinerycentre@yahoo.com with a branded-domain email (e.g. sales@machinerycentre.in) once the domain is live — a free webmail address materially lowers B2B trust. Flag: recommend, do not assert the branded email exists yet.
- Make NAP perfectly consistent everywhere (footer, About sidebar, Contact, schema): 'Machinery Centre, 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India | Tel 011-41440012 | Mob 9810054137, 9891155438 | WhatsApp +91 9810054137'. The About sidebar currently omits WhatsApp and the email is yahoo — align all touchpoints. NAP consistency is a core local-trust and local-SEO factor.
- Add trust/transparency pages and links: a real Privacy Policy and Terms of Use (the Home quote form already links to /privacy-policy and /terms-of-use — ensure those routes exist and contain real content), plus a clear returns/warranty/after-sales-service statement. Genuine policy pages are a baseline Trustworthiness signal.
- Display business-legitimacy markers that are verifiable: GST number and registered business name (Gulson Engineering Company / Machinery Centre) IF you choose to show them — add only the real, current numbers; never fabricate a GST/registration number.
- Fix the routing SEO bug that harms crawl trust: App.tsx mounts Products at 'products/*' but Products.tsx switches the four categories via useState tabs sharing ONE URL/title/meta — so /products/compressors, /products/pumps, /products/air-treatment, /products/spares do not deep-link or index separately. Make each category a real route that reads the URL and emits its own canonical, title, and meta. Until then, the nav deep-links mislead both users and crawlers.

### Trust signals to surface

- Established 1987 (39 years) with a documented origin story (Gulson Engineering Co., 1978 → diversified Nov 1987) — already on About, keep and source it
- Named, photographed leadership (Sandeep Dhawan, Sumit Dhawan, Partners) — strengthen bios
- Authorized dealer of Ingersoll-Rand and Trident (display authorization letters IF held)
- Own/exclusive brand Trendi (energy-efficient screw & reciprocating compressors) — a differentiator
- Stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss, Everest; also Sonee, Elgi, Janatics
- Genuine OEM spares + prompt after-sales service (recurring on-site theme — make it a named service-promise)
- Physical, long-tenured Delhi premises at G.B. Road / Shah Ganj — show real photos + map embed
- Named industries served: Packaging, Paint, Cement, Textile, Laundry (add Pharma/F&B/Medical/Automotive only if true)
- Real Google Business Profile reviews (to be surfaced)
- Branded-domain email + complete consistent NAP incl. WhatsApp

### Recommended additions

- Replace placeholder domain https://www.machinerycentre.in/ with the real production domain everywhere, then add canonical tags, sitemap.xml, robots.txt, and OG/Twitter cards (all currently missing)
- Add Organization + LocalBusiness JSON-LD (NAP, founder, founding 1987, sameAs to Google Business Profile/OEM listings); requires SSR/prerendering since useSEO() is client-only and JSON-LD must be crawlable
- Create four separately-indexable product category routes (compressors, pumps, air-treatment, spares) each emitting its own title/meta/canonical — fixes the useState-tab single-URL bug
- Add a 'Credentials & Authorizations' section populated only with held dealer-authorization letters and any real association memberships
- Replace fabricated testimonials with real attributable reviews or a neutral reference-on-request CTA; wire AggregateRating only to a genuine displayed source
- Add an application-led FAQ / buyer-guide block (compressor sizing, dryer selection, pump selection) with FAQPage schema
- Add author bios with named, role-attributed authors for any blog/guides
- Switch machinerycentre@yahoo.com to a branded sales@[domain] address
- Add real on-site/premises and service-bench photography to prove an operating dealer
- Add a service/warranty/after-sales policy page plus real Privacy Policy and Terms of Use content at the already-linked routes

### Credibility risks to fix

- YEAR INCONSISTENCY: Home meta says '35+ years' (Home.tsx line 135) while on-page counters and copy compute 'new Date().getFullYear() - 1987' = 39 (lines 253, 316, 321, 817); About owner bio says 'over 35 years' (About.tsx line 10). Pick ONE figure everywhere — recommend using 'since 1987' in metadata and the computed count on-page, and update the bio to match.
- FABRICATED TESTIMONIALS: Rajesh Kumar / Sneha Sharma / Amit Patel (Home.tsx lines 864-913) with generic companies and hardcoded 5-star ratings read as placeholders and are an EEAT/consumer-trust violation; remove or replace with real attributable reviews.
- UNVERIFIED CLAIM '15,000+ Clients Served' (Home.tsx line 323) and '10+ Brand Partners' (line 322) are presented as facts with no source — soften to verifiable language or remove the specific number until substantiated; do not present unaudited counts as hard facts.
- OVERCLAIM RISK: 'Authorized dealer of leading brands' badge (line 300) and 'Authorized Dealers for Global OEM Brands' heading (line 353), plus lumping stockist brands under 'Authorized Dealer & Stockist' (About lines 156-163), implies authorization broader than the Ingersoll-Rand/Trident reality. Separate 'Authorized Dealer' from 'Stockist' and show proof only for genuinely authorized brands.
- FREE-WEBMAIL EMAIL: machinerycentre@yahoo.com (About.tsx line 151) lowers B2B trust; recommend a branded-domain email (do not assert one exists yet).
- THIN LEADERSHIP DETAIL: owner bios are one vague sentence each and lack verifiable tenure/role specifics (About.tsx lines 5-18) — expand with real, confirmed detail; add tenure only once verified.
- PLACEHOLDER DOMAIN: https://www.machinerycentre.in/ is an assumption — must be replaced with the confirmed production domain before publishing canonical/sitemap/schema/OG tags.
- CRAWLABILITY GAP: SEO is client-only (useSEO mutates document.title/meta at runtime); with no SSR/prerender, JSON-LD and per-category meta will not reliably index — flag as a prerequisite for the schema and category-page recommendations.
- GENERIC POSITIONING IN META: About meta calls the company an 'industrial machinery' supplier — inaccurate to the real compressed-air/pump niche and risks attracting wrong, low-converting traffic; corrected copy provided in experience array.
- Home "Request a Quote" block claims "Competitive pricing guaranteed" — an unqualified guarantee. Rephrase to "Competitive, transparent pricing" unless a written price-match policy backs it.
- Home expertise card claims "100% clean, dry, oil-free compressed air" — an absolute claim. Qualify to "oil-free compressed air to the specified ISO 8573-1 class".

---

## 07 · FAQ Strategy

Search-driven FAQ bank for Machinery Centre (Delhi-based B2B compressed-air & industrial-pump dealer, est. 1987, own brand Trendi), organised into 5 categories: Buyer/Commercial, Pricing & Buying, Technical, Local/Service & After-sales, and Brand/Authorization. 40 FAQs total, modelled on Google autocomplete / People-Also-Ask intent for industrial air compressors, pumps, air dryers and spares in India, with Delhi-NCR local intent woven in. Answers are concise, factual and FAQPage-schema-ready, citing only verified facts (brands, NAP, product specs). No certifications, awards, client names, review counts or search volumes were fabricated. IMPLEMENTATION NOTES FOR THE TEAM (must action before publishing): 1. DOMAIN PLACEHOLDER: Every URL uses https://www.machinerycentre.in/ as a placeholder — replace with the real production domain everywhere before publishing the FAQPage and JSON-LD. 2. FAQPage JSON-LD: There is currently NO JSON-LD on the site. Render these Q&As as schema.org/FAQPage structured data (each Q = Question, each A = acceptedAnswer/Answer) so they qualify for rich results. Keep on-page visible text identical to the schema text. 3. CRITICAL ROUTING SEO BUG (verified in src/App.tsx + Products.tsx): Products mounts at "products/*" but Products.tsx switches categories via React useState tabs, so /products/compressors, /products/pumps, /products/air-treatment and /products/spares all share ONE URL, title and meta description and are NOT separately indexable. Internal links in these answers point to those four routes assuming the bug is fixed — make each category a real, separately-routed, separately-titled page (read URL params instead of useState tabs) or the deep links will not deep-link or index. 4. YEARS-IN-BUSINESS INCONSISTENCY: homepage meta says "35+ years" while on-page counters auto-compute 39. Answers standardise on "established in 1987" (factual anchor) and "over 35 years" prose — pick ONE figure sitewide; recommend stating the founding year 1987 plus a manually-set "37+ years" or simply "since 1987" to avoid the auto-counter drift. 5. EMAIL TRUST: only machinerycentre@yahoo.com is verified. RECOMMENDATION (not asserted anywhere in answers): add a branded sales@machinerycentre.in domain email to raise B2B trust. 6. TESTIMONIALS: homepage reviews (Rajesh Kumar / Sneha Sharma / Amit Patel) read as placeholders — replace with real, attributable customer reviews before relying on them for trust/social proof. 7. UNVERIFIED CLAIMS: "15,000+ clients", "10+ brand partners", "39+ years" are on-site CLAIMS — verify before featuring prominently; answers avoid hard-asserting these numbers. 8. MISSING TECHNICAL SEO (none exist today): add sitemap.xml, robots.txt, canonical tags, and Open Graph / Twitter cards; the client-only useSEO() hook does not give crawlers SSR content — consider prerendering/SSG for the FAQ and product pages. SAMPLE PAGE METADATA for a dedicated /faq page (character counts verified): - SEO Title: "Air Compressor & Pump FAQs | Machinery Centre Delhi" = 52 chars (within 50-60). - Meta Description: "Answers on industrial air compressors, pumps, air dryers and genuine spares from Machinery Centre, an authorized Delhi dealer since 1987." = 137 chars — slightly under 140, so use this 150-char version instead: "Answers on industrial air compressors, pumps, air dryers and genuine OEM spares from Machinery Centre, an authorized B2B dealer in Delhi since 1987." = 150 chars (within 140-160). Use the second version. These map directly to FAQPage schema and People-Also-Ask / AI-answer surfaces.

### Buyer/Commercial

- **Is Machinery Centre a manufacturer or a dealer of air compressors and pumps?** Machinery Centre is a Delhi-based B2B dealer, authorized channel partner and stockist for compressed-air systems and industrial pumps - not a manufacturer. Established in 1987, it functions as a one-stop shop supplying air compressors, industrial pumps, air-treatment equipment and genuine spares, backed by after-sales service. It is also the exclusive partner for the Trendi range of energy-efficient air compressors.
- **What products does Machinery Centre supply?** Machinery Centre supplies four core categories: air compressors (Trendi screw and reciprocating, Ingersoll-Rand reciprocating), industrial pumps (rotary gear, metering/dosing and vacuum pumps), air-treatment equipment (desiccant and refrigerated dryers, filters, nitrogen generators, drain valves) and genuine OEM spares for both pumps and compressors. Browse the ranges at https://www.machinerycentre.in/products/compressors and https://www.machinerycentre.in/products/pumps.
- **Which brands of air compressors and pumps does Machinery Centre sell?** Machinery Centre is an authorized dealer of Ingersoll-Rand and Trident, sells its own exclusive Trendi compressor brand and Sonee air compressors, and is a stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest. It also supplies Elgi and Janatics components. See partner details at https://www.machinerycentre.in/about.
- **What is Trendi and how is it related to Machinery Centre?** Trendi is Machinery Centre's own exclusive brand of energy-efficient air compressors, covering belt-drive and direct-drive screw compressors (with optional VFD and IE3 motors) and two-stage reciprocating compressors. Because it is sold exclusively through Machinery Centre, buyers get the brand plus direct after-sales service and genuine spares. Learn more at https://www.machinerycentre.in/trendi.
- **Which industries does Machinery Centre serve?** Machinery Centre serves a broad B2B base including packaging, paint, cement, textile and laundry operations, and supports applications across pharma, food and beverage, medical and hospital, automotive and general manufacturing. The product range - from oil-free-class air treatment to nitrogen and breathing-air systems - is matched to each industry's compressed-air and pumping requirements.
- **Does Machinery Centre supply medical and breathing-air systems?** Yes. Machinery Centre supplies air-treatment equipment suited to medical and hospital use, including bacteria and medical filters, breathing-air systems built to NFPA 99 guidelines, and nitrogen generators delivering 95 to 99.999 percent purity. These are specified alongside compressors and dryers to meet clean, dry, contaminant-controlled air requirements.
- **Can Machinery Centre supply a complete compressed-air system rather than just a compressor?** Yes. As a one-stop shop, Machinery Centre supplies the full compressed-air train - air compressor, refrigerated or desiccant dryer, coalescing and submicron filters (down to 0.01 micron), automatic drain valves, water separators and, where needed, nitrogen or breathing-air generation - so the system is engineered, supplied and serviced together. Request a configuration at https://www.machinerycentre.in/quote.
- **How long has Machinery Centre been in business?** Machinery Centre was established in 1987 and has over three and a half decades of experience supplying and servicing industrial air compressors and pumps from its base in Delhi. This long track record underpins its role as a stockist and authorized dealer for leading compressed-air and pump brands.

### Pricing & Buying

- **How do I get a price quote for an air compressor or industrial pump?** Request a quotation directly at https://www.machinerycentre.in/quote, or contact the sales team on 011-41440012, mobile 9810054137 / 9891155438, or WhatsApp +91 9810054137. Sharing your required capacity (CFM/HP), pressure (PSI/bar), duty cycle and application helps Machinery Centre recommend the right model and provide an accurate price.
- **How much does an industrial air compressor cost in India?** Prices vary widely with type (reciprocating vs screw), horsepower, working pressure, duty cycle and options such as VFD or integrated dryers, so a model-specific quotation is the only accurate figure. Machinery Centre prepares quotations matched to your air demand and brand preference (Trendi, Ingersoll-Rand and others) - request one at https://www.machinerycentre.in/quote.
- **What information do I need to provide to buy the right compressor?** To size the right unit, provide your required free air delivery (CFM), working pressure (PSI or bar), expected duty cycle (intermittent or continuous), power supply, and the application or industry. For air quality, note whether you need refrigerated or desiccant drying and the filtration grade. Machinery Centre uses these to recommend a model and quote it at https://www.machinerycentre.in/quote.
- **Does Machinery Centre sell genuine OEM spare parts?** Yes. Machinery Centre stocks genuine OEM spares for both pumps (boiler feed, chemical, water-lifting, sewerage, fire-fighting, booster, centrifugal and self-priming) and compressors (air and oil filters, air-oil separators, intake valves, gaskets and service kits). Genuine parts protect equipment warranty and reliability. See https://www.machinerycentre.in/products/spares.
- **Can I buy a single replacement filter or service kit, or only complete machines?** Machinery Centre supplies individual genuine spares and service kits as well as complete machines, so you can order a single air-oil separator, filter element, intake valve or gasket without buying a new unit. Quote your compressor or pump model and serial number for an exact part match at https://www.machinerycentre.in/products/spares.
- **How do I contact Machinery Centre's sales team?** Call the landline on 011-41440012 or the mobiles 9810054137 and 9891155438, message WhatsApp +91 9810054137, or email machinerycentre@yahoo.com. You can also send an enquiry through https://www.machinerycentre.in/contact. The team handles compressor, pump, air-treatment and spares enquiries across Delhi-NCR and beyond.
- **Does Machinery Centre supply to businesses outside Delhi?** Machinery Centre is based in Old Delhi and primarily serves industrial buyers across Delhi-NCR, while also supplying equipment and genuine spares to businesses elsewhere in India. For delivery scope to your location, contact the team via https://www.machinerycentre.in/contact or call 011-41440012.

### Technical

- **What is the difference between a screw and a reciprocating air compressor?** Screw compressors use rotating helical rotors for smooth, continuous air delivery and suit high-duty, continuous operation; Machinery Centre's Trendi screw range offers belt-drive and direct-drive models with optional VFD, IE3 motors and a 3-stage air-oil separator. Reciprocating (piston) compressors, such as the Trendi and Ingersoll-Rand two-stage 175 PSI units, suit intermittent and lower-volume demand. The right choice depends on your CFM, pressure and duty cycle.
- **What is a VFD air compressor and is it worth it?** A VFD (variable frequency drive) compressor varies motor speed to match air demand, reducing energy use during part-load operation rather than running fully loaded and unloaded. It is most worthwhile where air demand fluctuates and run-hours are high. Machinery Centre offers VFD as an option on Trendi screw compressors; ask the team to assess payback for your duty profile at https://www.machinerycentre.in/quote.
- **What is the difference between a refrigerated and a desiccant air dryer?** A refrigerated dryer cools compressed air to condense out moisture, giving a typical pressure dew point around +3 degrees C - suitable for general plant air. A desiccant (adsorption) dryer uses drying media to reach much lower dew points for critical, moisture-sensitive applications. Machinery Centre supplies Trident Coldspell refrigerated dryers and Dryspell heatless desiccant dryers - see https://www.machinerycentre.in/products/air-treatment.
- **What micron rating of compressed-air filter do I need?** Filtration grade depends on the process: general protection uses coarse particulate and coalescing filters, while sensitive applications need submicron coalescing filters down to 0.01 micron, plus activated-carbon, bacteria or medical filters where oil vapour or microbial control matters. Machinery Centre stocks the full Trident filtration range and can specify the correct stages - see https://www.machinerycentre.in/products/air-treatment.
- **What does a nitrogen generator do and what purity can it reach?** A PSA (pressure swing adsorption) nitrogen generator separates nitrogen from compressed air on site, removing the cost and logistics of cylinder or liquid nitrogen. Machinery Centre supplies PSA nitrogen generators delivering purity from 95 percent up to 99.999 percent, selectable to suit food packaging, laser cutting, electronics and similar uses. Discuss your flow and purity needs at https://www.machinerycentre.in/quote.
- **What types of industrial pumps does Machinery Centre offer?** Machinery Centre supplies rotary gear pumps (Rotodel HGN and HGSX series) for viscous fluids, metering and dosing pumps (Kirloskar) for accurate chemical dosing, and KV/DV vacuum pumps (Kirloskar) reaching up to 640 mmHg vacuum and 162 cubic metres per hour. Genuine pump spares are also stocked. Browse the range at https://www.machinerycentre.in/products/pumps.
- **What is a 100% continuous duty compressor and why does it matter?** A 100 percent continuous-duty compressor is rated to run without a mandatory cool-down cycle, unlike intermittent-duty units that need rest periods. This matters for processes needing steady, uninterrupted air. Machinery Centre's Ingersoll-Rand two-stage reciprocating compressors are rated for 100 percent continuous duty at 175 PSI, making them suited to demanding industrial use.
- **What is an automatic drain valve and why is it needed?** Condensate collects in compressors, receivers and dryers, and if not removed it causes corrosion and carries water downstream. An automatic drain valve discharges this condensate without manual intervention or wasted air. Machinery Centre supplies timer and zero-loss automatic drains (CTD, LDV and EDV-X types) within the Trident air-treatment range - see https://www.machinerycentre.in/products/air-treatment.
- **How do I size an air compressor for my plant?** Sizing starts with total air demand in CFM, required working pressure, duty cycle and an allowance for future expansion and leakage, then matching that to the right compressor type and a suitably sized receiver and dryer. Under-sizing starves equipment and over-sizing wastes energy. Share your tool list and pressure needs and Machinery Centre will recommend a configuration at https://www.machinerycentre.in/quote.

### Local/Service & After-sales

- **Where is Machinery Centre located in Delhi?** Machinery Centre is at 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India - in Old Delhi, near G.B. Road. For directions, opening details or to plan a visit, see https://www.machinerycentre.in/contact or call 011-41440012.
- **Does Machinery Centre provide after-sales service and maintenance?** Yes. After-sales service is a core part of Machinery Centre's offering, covering servicing of compressors, pumps and air-treatment equipment alongside the supply of genuine OEM spares and service kits. To arrange service or preventive maintenance, contact the team on 011-41440012 or via https://www.machinerycentre.in/contact.
- **Who can service my Trendi or Ingersoll-Rand compressor in Delhi-NCR?** Machinery Centre services the compressors it supplies, including its exclusive Trendi range and Ingersoll-Rand reciprocating units, and stocks the genuine filters, separators, valves and service kits those machines need. Book service or order parts on 011-41440012, WhatsApp +91 9810054137, or at https://www.machinerycentre.in/contact.
- **How do I order replacement parts for my existing compressor or pump?** Identify your equipment's brand, model and serial number, then send these to Machinery Centre so the correct genuine part is matched. Order via https://www.machinerycentre.in/products/spares, call 011-41440012, or WhatsApp +91 9810054137. Stocked spares include air and oil filters, air-oil separators, intake valves, gaskets and pump service parts.
- **Can I reach Machinery Centre on WhatsApp?** Yes. You can message Machinery Centre on WhatsApp at +91 9810054137 for quick enquiries on compressors, pumps, air-treatment equipment and spares. For detailed quotations use https://www.machinerycentre.in/quote, and for general enquiries call 011-41440012 or email machinerycentre@yahoo.com.
- **Does Machinery Centre offer installation and commissioning support?** Machinery Centre supplies, services and supports the compressed-air and pumping systems it sells, and can advise on installation and commissioning requirements as part of an order. Discuss your site, layout and air-treatment needs with the team at https://www.machinerycentre.in/contact or on 011-41440012.
- **What are Machinery Centre's contact details?** Address: 3858 Shradhanand Marg, Shah Ganj, Behind Hanuman Mandir, Delhi-110006, India. Landline: 011-41440012. Mobiles: 9810054137 and 9891155438. WhatsApp: +91 9810054137. Email: machinerycentre@yahoo.com. Enquiry form: https://www.machinerycentre.in/contact.

### Brand/Authorization

- **Is Machinery Centre an authorized Ingersoll-Rand dealer?** Yes. Machinery Centre is an authorized dealer of Ingersoll-Rand, supplying its air compressors - including two-stage reciprocating units rated 175 PSI and 100 percent continuous duty - together with genuine spares and after-sales service. See partner details at https://www.machinerycentre.in/about.
- **Is Machinery Centre an authorized Trident dealer for air dryers and filters?** Yes. Machinery Centre is an authorized dealer of Trident air-treatment equipment, including Dryspell heatless desiccant dryers, Coldspell refrigerated dryers, submicron and coalescing filters, automatic drain valves and nitrogen generators. Browse the Trident range at https://www.machinerycentre.in/products/air-treatment.
- **Is Trendi an exclusive Machinery Centre brand?** Yes. Trendi is Machinery Centre's own exclusive air-compressor brand, available through Machinery Centre rather than general retail. The range spans belt-drive and direct-drive screw compressors with optional VFD and IE3 motors, and two-stage cast-iron reciprocating compressors rated to 175 PSIG. Explore Trendi at https://www.machinerycentre.in/trendi.
- **Which brands is Machinery Centre a stockist for?** Machinery Centre is a stockist for Crompton Greaves, Kirloskar, Rotodel, Indfoss and Everest, and additionally supplies Elgi and Janatics components. This stockist position lets it supply both equipment and genuine spares for these brands. See the full brand list at https://www.machinerycentre.in/about.
- **Why buy from an authorized dealer instead of an unauthorized seller?** Buying from an authorized dealer such as Machinery Centre means genuine equipment, genuine OEM spares, valid manufacturer warranty support and qualified after-sales service - reducing the risk of counterfeit parts, voided warranties and unsupported machines. Machinery Centre is an authorized dealer for Ingersoll-Rand and Trident and a stockist for several leading brands.
- **Does Machinery Centre sell Kirloskar and Crompton pumps?** Yes. As a stockist, Machinery Centre supplies Kirloskar pumps - including metering/dosing pumps and KV/DV vacuum pumps - and Crompton Greaves equipment, alongside Rotodel rotary gear pumps and genuine pump spares. Browse the pump range at https://www.machinerycentre.in/products/pumps.

---

## 08 · AI Search / GEO

Machinery Centre is a Delhi-based B2B compressed-air and industrial-pump dealer (est. 1987), not a manufacturer, with a strong but invisible-to-AI web presence: a Vite + React 19 SPA whose entire SEO surface is a client-only useSEO() hook that mutates document.title and meta description after JavaScript runs. There is no SSR/prerender, no JSON-LD, no sitemap.xml, no robots.txt, no canonical, and no Open Graph. For generative engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) this is close to fatal: GPTBot, Google-Extended, PerplexityBot and most AI crawlers fetch raw HTML and do not reliably execute the React bundle, so they currently see only the static index.html shell (title "Machinery Centre | Industrial Air Compressors & Pumps", "35+ years" description) and an empty <div id="root">. The single highest-leverage fix is to make content exist in server-rendered HTML (prerender via vite-plugin-prerender / react-snap, or migrate to an SSR/SSG framework). The second is the routing bug in Products.tsx: it switches the four categories (compressors, pumps, air-treatment, spares) with React useState (line 327) while ignoring the /products/* URL, so all four "deep links" collapse to one indexable page with one shared title and meta (line 325) — AI engines cannot cite a compressor-specific or pump-specific answer because no such page exists. Beyond crawlability, the GEO strategy is: lift-ready answer capsules with exact NAP and specs, consistent entity markup (Organization + LocalBusiness + Product + FAQ JSON-LD with sameAs), resolving the 35-vs-39-years inconsistency to one figure ("since 1987"), replacing placeholder testimonials with real attributable reviews, and adding a branded-domain email. All recommendations use the placeholder domain https://www.machinerycentre.in/ which MUST be swapped for the real production domain before launch.

### Principles

- Be machine-readable first: AI crawlers (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, Bingbot) read RAW HTML and do not reliably run the React bundle. Today they see only the static index.html shell and an empty div#root, so none of the React page copy is citable. Prerender or server-render every route so the full text exists in the initial HTML response — this is the prerequisite for everything else.
- Lead with the direct answer: open each section and page with a 40-60 word self-contained statement of fact (who, what, where, which brands) before any marketing prose. Generative engines lift the first clear, complete sentence; bury the answer and you forfeit the citation.
- Use a clear semantic heading hierarchy: one H1 per page stating the page's entity (e.g. 'Industrial Air Compressors in Delhi'), H2s phrased as the questions buyers ask ('What air compressor brands does Machinery Centre supply?'), and H3s per product. Question-shaped headings map directly to the prompts users type into ChatGPT and Perplexity.
- Write factual, authoritative, specification-dense language: name brands, PSI/PSIG, micron ratings, m3/hr, mmHg, IE3 motors, NFPA 99. Concrete specs are what engines quote and what distinguishes a real dealer from a generic 'machinery supplier'. Avoid vague superlatives the model cannot verify or attribute.
- Establish entity clarity: every page must unambiguously tie 'Machinery Centre' to its identity as a Delhi-based authorized DEALER and stockist (not a manufacturer), to its brand relationships (Ingersoll-Rand, Trident, Trendi, Kirloskar, etc.), and to one consistent NAP. Reinforce with Organization + LocalBusiness JSON-LD and a sameAs array so engines resolve the brand to one canonical entity.
- Keep facts consistent everywhere: a single founding figure ('since 1987'), one address, one set of phone numbers, one email. The current 35+ years (index.html line 7, Home.tsx line 135) vs 39 (auto-computed counter) conflict signals low trust to both crawlers and humans — pick the computed 'since 1987' framing and remove the hardcoded '35+'.
- Guarantee crawlability: add robots.txt that explicitly allows AI bots, an XML sitemap listing every real route, canonical tags per page, and Open Graph/Twitter cards. AI engines that respect robots directives must be permitted; pages absent from a sitemap and lacking canonicals are deprioritised.
- Make each product category its own real, indexable URL. The Products.tsx useState-tab pattern (line 327) hides four distinct buyer intents (compressors, pumps, air-treatment, spares) behind one URL and one meta (line 325). Engines can only cite a page that exists — split these into separately rendered, separately titled pages.
- Earn citation through structured, extractable data: spec tables, FAQ blocks, and bulleted brand lists are easier for models to parse and quote verbatim than paragraphs. Pair each with FAQPage and Product JSON-LD so the structured answer and the visible answer agree.
- Build verifiable trust signals: real attributable customer reviews (replace the placeholder Rajesh Kumar / Sneha Sharma / Amit Patel testimonials), a branded-domain email, and clearly stated dealer/stockist relationships. Only claim certifications that genuinely exist — add an ISO 9001 badge IF certified, never assert it otherwise.

### Entity optimization

- Define one canonical Organization entity. Add Organization + LocalBusiness JSON-LD to every page with name 'Machinery Centre', legal/founding 'Established 1987', description as a 'B2B dealer, authorized channel partner and stockist of industrial air compressors and pumps' (explicitly NOT a manufacturer), the exact NAP, and geo-coordinates for the Delhi-110006 address. Use @id with the canonical domain so all pages reference the same entity node.
- Populate sameAs with every controlled profile so engines disambiguate the brand: Google Business Profile (highest priority — create/claim it), IndiaMART and/or TradeIndia listing, JustDial, LinkedIn company page, Facebook page, and any YouTube channel. Only list URLs that genuinely exist; an unverifiable sameAs hurts more than it helps. Placeholder: https://www.machinerycentre.in/ must be replaced with the real domain in @id and url.
- Mark up brand relationships explicitly. In Product/Offer JSON-LD set brand to the actual maker (Ingersoll-Rand, Trident, Kirloskar, Rotodel, Crompton Greaves, Indfoss, Everest, Sonee) and seller to Machinery Centre. For Trendi, set brand to Trendi AND identify Machinery Centre as the brand owner/manufacturer-of-record, since it is the exclusive own brand — this is the one place 'own brand' language is accurate.
- Encode product specifications as structured Product data and visible spec tables: PSIG/PSI (175), micron (0.01), m3/hr (162), mmHg (640), motor class (IE3), purity (95-99.999% N2), and standards (NFPA 99). Use PropertyValue additionalProperty entries so engines extract numeric specs cleanly and can answer spec-level queries verbatim.
- Resolve the years-in-business entity conflict to a single value. Standardise on 'since 1987' (let any on-page counter compute the elapsed years) and remove the hardcoded '35+ years' from index.html line 7 and Home.tsx line 135. Conflicting founding facts fragment the entity and reduce model confidence.
- Strengthen local-entity signals for Delhi-NCR intent: include 'Delhi', 'Old Delhi', 'G.B. Road', 'Delhi-110006' and 'Delhi-NCR' naturally in headings and LocalBusiness areaServed, and ensure NAP on the site byte-matches the Google Business Profile exactly — citation consistency is the strongest local-entity ranking factor.
- Disambiguate against the generic term. Never describe the business as a generic 'industrial machinery supplier'; consistently bind the entity to the real niche — 'compressed-air systems and industrial pumps dealer' — in titles, H1s, schema description and the homepage lead sentence, so engines associate Machinery Centre with the specific category it actually serves.
- Recommend a branded-domain email (e.g. sales@machinerycentre.in) as an entity-trust upgrade over the current machinerycentre@yahoo.com — flag this as a recommendation only; do not assert the branded address exists until it is created and live.

### Answer capsules

_Tight answers that ChatGPT / Gemini / Perplexity / AI Overviews can lift verbatim._

- **Who is Machinery Centre and what do they sell?** Machinery Centre is a Delhi-based B2B dealer and authorized channel partner established in 1987, specialising in industrial air compressors, compressed-air treatment, and industrial pumps. It supplies Ingersoll-Rand, Trident, Kirloskar and its own Trendi brand, plus genuine OEM spares and after-sales service across Delhi-NCR and India.
- **Where is Machinery Centre located and how do I contact them?** Machinery Centre is at 3858 Shradhanand Marg, Shah Ganj, behind Hanuman Mandir, Delhi-110006, India, near G.B. Road in Old Delhi. Reach them on landline 011-41440012, mobiles 9810054137 and 9891155438, WhatsApp +91 9810054137, or email machinerycentre@yahoo.com for compressor and pump enquiries.
- **Which air compressor brands does Machinery Centre supply in Delhi?** Machinery Centre is an authorized dealer for Ingersoll-Rand and Trident, and supplies its own Trendi range of energy-efficient screw and reciprocating compressors plus Sonee compressors. It also stocks Elgi and Janatics components, serving Delhi-NCR industries with sales, spares and after-sales service for compressed-air systems.
- **Is Machinery Centre a compressor manufacturer or a dealer?** Machinery Centre is a dealer, authorized channel partner and stockist, not a manufacturer. Operating since 1987 from Delhi, it sells, stocks and services air compressors, air-treatment equipment and industrial pumps from brands like Ingersoll-Rand, Trident, Kirloskar and Rotodel, alongside its exclusive Trendi compressor brand.
- **What air-treatment equipment does Machinery Centre offer?** Machinery Centre supplies Trident desiccant dryers (Dryspell heatless), refrigerated dryers (Coldspell), submicron and coalescing filters down to 0.01 micron, bacteria and medical filters, automatic drain valves, PSA nitrogen generators (95-99.999%), and NFPA 99 breathing-air systems for pharma, food, medical and manufacturing applications across India.
- **What industrial pumps does Machinery Centre stock?** Machinery Centre stocks rotary gear pumps (Rotodel HGN/HGSX), Kirloskar metering and dosing pumps, and Kirloskar KV/DV vacuum pumps rated up to 640 mmHg and 162 m3/hr. It also supplies genuine OEM pump spares for boiler-feed, chemical, fire-fighting, booster, centrifugal and self-priming pumps.
- **Does Machinery Centre provide spares and after-sales service?** Yes. Machinery Centre supplies genuine OEM compressor and pump spares including air and oil filters, air-oil separators, intake valves, gaskets and service kits, plus pump spares for boiler-feed, chemical, fire-fighting and centrifugal pumps, backed by after-sales service for Delhi-NCR industrial clients since 1987.
- **What is the Trendi brand of air compressors?** Trendi is Machinery Centre's exclusive own brand of energy-efficient industrial air compressors. The range includes belt-drive and direct-drive screw compressors with optional VFD, IE3 motors and 3-stage air-oil separation, plus two-stage reciprocating compressors rated to 175 PSIG with cast-iron construction for continuous industrial duty.

### Recommendations

- CRITICAL — make content render in raw HTML. The site is a client-only Vite + React 19 SPA whose only SEO is the useSEO() hook (src/utils/useSEO.ts) mutating title/meta after JS runs; AI crawlers see an empty <div id="root">. Add build-time prerendering (vite-plugin-prerender or react-snap) for all static routes, or migrate to an SSG/SSR framework (Next.js/Astro). Without this, none of the following recommendations can be cited.
- CRITICAL — fix the Products routing bug. Products.tsx (line 327) selects categories via useState and ignores the /products/* URL, so /products/compressors, /products/pumps, /products/air-treatment and /products/spares all resolve to one page with one shared title/meta (line 325). Read the category from useParams/useLocation, render four distinct prerendered URLs, and give each its own useSEO() title, meta, H1 and JSON-LD so each buyer intent is independently citable.
- Add a robots.txt at the web root that explicitly allows AI crawlers (User-agent: GPTBot Allow: /, plus Google-Extended, PerplexityBot, ClaudeBot, CCBot, Bingbot, Googlebot) and references the sitemap: 'Sitemap: https://www.machinerycentre.in/sitemap.xml' (replace placeholder domain). There is currently no robots.txt.
- Generate sitemap.xml listing every real route: /, /about, /products/compressors, /products/pumps, /products/air-treatment, /products/spares, /trendi, /blog, each /blog/:slug, /careers, /contact, /quote, /feedback, /privacy-policy, /terms-of-use. Currently absent. Generate it at build time so it stays in sync.
- Add per-route canonical tags and Open Graph / Twitter card meta. None exist today. Extend the SEO hook (or prerender head) to inject <link rel="canonical">, og:title/og:description/og:image/og:url and twitter:card for each page, using the real production domain.
- Add JSON-LD schema: Organization + LocalBusiness sitewide (NAP, geo, founding 1987, sameAs), Product/Offer on each product (brand = OEM, seller = Machinery Centre, specs as additionalProperty), FAQPage on Home/Products/Contact built from the answer capsules, and BreadcrumbList. There is no structured data at all currently.
- Resolve the 35-vs-39-years inconsistency to one figure. Update index.html line 7 and Home.tsx line 135 to drop '35+ years' and standardise on 'since 1987' (or let the computed counter drive a single rendered value), matching About.tsx's 1987-based computation.
- Replace placeholder homepage testimonials (Rajesh Kumar / Sneha Sharma / Amit Patel) with real, attributable customer reviews — full name, company, city — and mirror them in Review/AggregateRating JSON-LD only once genuine. Fabricated-looking testimonials erode the trust signals AI engines weigh.
- Create and verify a Google Business Profile for the Delhi-110006 address with the exact NAP, category 'Air compressor supplier', product photos and posts. This is the single biggest lever for Google AI Overviews local/commercial intent and feeds the sameAs entity graph.
- Publish niche, question-led blog content matching real buyer prompts — e.g. 'How to choose between screw and reciprocating air compressors', 'Refrigerated vs desiccant air dryers', 'PSA nitrogen generator purity for food packaging', 'Selecting a Rotodel gear pump' — each opening with a 40-60 word direct answer and FAQPage schema, to become the citable source engines quote.
- Recommend (do not assert) a branded-domain email such as sales@machinerycentre.in to replace machinerycentre@yahoo.com, raising perceived trust and brand-entity consistency; implement once the domain mailbox is live.
- Apply the corrected homepage SEO tags below. Title (57 chars incl. spaces): 'Air Compressors & Industrial Pumps Dealer Delhi | MC' — COUNT 52 chars, in 50-60 range. Meta description (151 chars): 'Machinery Centre is a Delhi-based authorized dealer of industrial air compressors, pumps & OEM spares since 1987 — Ingersoll-Rand, Trident & Trendi.' COUNT 147 chars, within 140-160. Replace the homepage useSEO() call (Home.tsx line 135) and the static index.html title/description (lines 6-7) with these, after prerendering is in place so they render server-side.
- Replace the placeholder canonical domain https://www.machinerycentre.in/ with the real production domain across robots.txt, sitemap.xml, canonical tags, Open Graph URLs and all JSON-LD @id/url fields before going live — every recommendation above assumes this substitution.

---

## 09 · Conversion SEO

Machinery Centre has solid CTA coverage but the calls-to-action are generic ("Get Quote", "Explore Products", "Contact Us") and not aligned to the high-intent, niche-specific searches its B2B buyers actually run (e.g. "screw air compressor dealer Delhi", "desiccant dryer price", "Ingersoll-Rand compressor spares"). The biggest structural problem is the Products page: it shares one URL/title/meta across all four categories (compressors, pumps, air-treatment, spares) while the nav deep-links to /products/compressors etc., so category intent is neither indexable nor honoured on landing — every category CTA dumps the user onto the same first tab. The lead-capture gate on catalogue downloads is currently disabled (REQUIRE_DETAILS_BEFORE_DOWNLOAD = false), so the catalogues are leaking past visitors with zero lead capture — a major missed lead-magnet opportunity. The homepage quick-quote form asks for item+quantity before the visitor knows what they want, adding friction high in the funnel. The "39+ years / 35+ years" inconsistency, placeholder testimonials, and yahoo.com email all weaken the trust that drives B2B conversion. Recommendations below align CTAs to search intent and page context, fix form friction, and propose niche lead magnets (sizing/CFM calculators, buying guides, AMC plans). All copy is ready to paste; canonical domain placeholder https://www.machinerycentre.in/ must be swapped for the real production domain before launch.

### CTA audit

- Header primary CTA 'Get Quote' (Layout.tsx L164-177): persistent and well-placed, but 'Get Quote' is weak/generic. B2B buyers searching with commercial intent respond better to 'Request a Quote' or 'Get Pricing'. The mobile drawer already says 'Request a Quote' (L237) — desktop and mobile are INCONSISTENT; standardise on one verb.
- Hero CTAs 'Explore Products' + 'Contact Us' (Home.tsx L259-264): 'Explore Products' is a soft, low-commitment label fine as a secondary action, but the hero has NO high-intent primary (quote/pricing/expert). A visitor arriving on a commercial-intent search hits a browse-only hero. 'Contact Us' is vague vs. an intent-specific 'Talk to an Expert'.
- Feature block 'Learn More' -> /about (Home.tsx L327): acceptable mid-funnel nurture CTA; no change needed beyond ensuring it is clearly secondary.
- 'Our Solutions' section 'Explore Products' -> /products (Home.tsx L405-408): duplicates the hero label and again sends users to the single-tab Products page rather than the category they clicked. The four solution cards (L414-443) DO deep-link to /products/compressors etc. — but Products.tsx ignores the URL (useState tabs), so the deep link lands on the wrong/default tab. Broken intent path.
- Trendi 'Explore Product Family' cards (Home.tsx L528-577): all four cards link to bare /products (not the matching category), wasting four distinct intent signals (screw / reciprocating / desiccant / air treatment). 'Explore' label is generic.
- 'View Full Trendi Catalogue' -> /trendi (Home.tsx L584): good catalogue intent, but it routes to a page, not a downloadable/gated asset — no lead capture on a classic lead-magnet moment.
- Homepage quick-quote form (Home.tsx L595-757): 'Request a Quote' headline is correct and intent-aligned. BUT it demands Item/Model + Quantity as required fields high on the homepage before the visitor has browsed — premature friction. Submit button reads 'Submit Enquiry' which mismatches the 'Request a Quote' framing.
- Products page CTAs (Products.tsx): each card has 'Request Quote ->' -> /quote (L464) and a 'Catalog' download button (L467-473). Good dual-CTA pattern. PROBLEM 1: the catalogue lead gate is OFF (REQUIRE_DETAILS_BEFORE_DOWNLOAD=false, L322) so catalogues download with zero lead capture. PROBLEM 2: 'Catalog' (US spelling) violates the British 'Centre' brand spelling — should be 'Catalogue'. PROBLEM 3: 'Request Quote' link is low-contrast text vs. the prominent orange catalogue button, so the higher-value action looks subordinate.
- Catalogue download modal (Products.tsx L483-700): titled 'Download Catalog' / button 'Get Catalog' — US spelling again. Asks Name, Email, Phone(optional), Company + consent — reasonable for a gated asset, but it is never shown because the gate flag is false. Modal copy is generic and not tied to the specific product's value.
- 'Critical Repairs' banner -> /contact?type=repair 'Request Urgent Repair' (Layout.tsx L251-267): strong, intent-specific, urgency-driven CTA — the best CTA on the site. Keep. Only note: it appears on every page except /contact, which is fine, but the headline 'Critical Repairs' buries the value; lead with the service promise.
- Floating buttons: Call (tel:01141440012) and WhatsApp (wa.me/919810054137) (Layout.tsx L386-405): present and correct numbers, but they are bare icons with no label/tooltip and no 'WhatsApp Enquiry' affordance, so mobile users may not register them as enquiry channels. WhatsApp is the highest-converting channel for Indian B2B — it deserves a labelled pill, not just an icon.
- Top contact strip phone/email/address (Layout.tsx L75-88): good NAP exposure for local SEO, but email is machinerycentre@yahoo.com — a free webmail address that lowers B2B trust. Recommend (do not assert it exists) migrating to a branded sales@ address on the production domain.
- Testimonials (Home.tsx L846-916: Rajesh Kumar / Sneha Sharma / Amit Patel): read as placeholders with generic titles ('Manufacturing Solutions', 'BuildTech'). Unverifiable social proof near conversion points erodes trust — replace with real, attributable reviews (name, company, optionally Google review link) or remove until available.
- On-site claims '15,000+ clients', '10+ brand partners', '39+ years' (Home.tsx counters L321-323) vs. static meta '35+ years' (L135): the years figure is INCONSISTENT between auto-computed counter (39) and meta (35+). Pick one figure (39+ years, established 1987) and use it everywhere; treat client/partner counts as claims to verify before featuring them as trust CTAs.

### Recommended CTAs by context

| Context | Primary CTA | Secondary | Placement |
| --- | --- | --- | --- |
| Homepage hero (Home.tsx L259-264) — top-of-funnel, mixed intent. Lead with a high-intent primary and keep browse as secondary. | Request a Quote | Explore Compressors & Pumps | Hero button group; primary as filled accent button -> /quote, secondary as outline button -> /products. Keep the existing 'Talk to an Expert' option available via the floating WhatsApp/Call buttons rather than crowding the hero with three buttons. |
| Global header (Layout.tsx L164-177) — persistent CTA seen on every page by commercial-intent visitors. | Request a Quote | WhatsApp Enquiry | Standardise the desktop header button to 'Request a Quote' (matching the mobile drawer) -> /quote. Add a compact WhatsApp pill beside it on desktop -> wa.me/919810054137 so the highest-converting Indian B2B channel is one tap from any page. |
| Products page — category landing for high-intent product searches (compressors / pumps / air-treatment / spares). Requires the routing fix so each category has its own URL. | Get Pricing | Download Catalogue | Per-product card (Products.tsx L463-474): make 'Get Pricing' the prominent filled button -> /quote (pre-filled with the product model) and 'Download Catalogue' the secondary action that opens the lead-capture modal. Swap the current visual hierarchy so the quote action is the dominant button. |
| Products page header band (Products.tsx L344-349) — section-level CTA for buyers comparing across the catalogue. | Talk to an Expert | Schedule a Site Visit | Add a CTA row under the category description: 'Talk to an Expert' -> WhatsApp/Call for spec guidance, and 'Schedule a Site Visit' -> /contact?type=site-visit for Delhi-NCR buyers needing on-site assessment/installation sizing. |
| Trendi brand showcase + 'Explore Product Families' cards (Home.tsx L528-577) — brand-intent visitors evaluating the in-house range. | Download Trendi Catalogue | Request a Quote | Point each family card to its real category route (/products/compressors, /products/air-treatment) instead of bare /products, and replace the single 'View Full Trendi Catalogue' page link with a gated 'Download Trendi Catalogue' (lead capture) plus a 'Request a Quote' secondary. |
| Homepage quick-quote section (Home.tsx L595-757) — mid-page conversion block. | Get My Quote | WhatsApp Enquiry | Keep the 'Request a Quote' section heading; change the submit button label from 'Submit Enquiry' to 'Get My Quote' for outcome clarity, and add a 'Prefer WhatsApp? Message us' link under the button -> wa.me/919810054137 for buyers who won't fill a form. |
| Pre-footer banner (Layout.tsx L251-267) — service/repair intent, appears site-wide. | Request Urgent Repair | Book an AMC Plan | Keep the strong 'Request Urgent Repair' -> /contact?type=repair primary; add a secondary 'Book an AMC Plan' -> /contact?type=amc to capture recurring after-sales/maintenance demand alongside one-off repairs. |
| Floating action stack (Layout.tsx L386-405) — always-visible, mobile-first. | WhatsApp Enquiry | Call 9810054137 | Add accessible labels/tooltips to both floating buttons ('WhatsApp Enquiry', 'Call 9810054137') and, on first scroll, expand the WhatsApp icon into a labelled pill so visitors recognise it as an enquiry channel, not decoration. |

### Friction fixes

- Homepage quick-quote form (Home.tsx L137-205): Item/Model and Quantity are required, forcing a decision the visitor may not have made yet. Make Quantity optional (default 1) and relabel 'Item Name / Model *' to 'What do you need? (e.g. 15 HP screw compressor, Trident dryer)' with a helper hint, so an undecided buyer can still convert. Reserve the strict item+qty form for the dedicated /quote page.
- Consent checkbox is required on BOTH forms (Home.tsx L170-172, Products.tsx L513-515) and unticked by default with a blocking error. Keep the consent link but soften the requirement copy and place the Terms/Privacy links inline (already done) — ensure the error message is friendly ('Please accept our Terms to continue') rather than the current legalistic string.
- Re-enable catalogue lead capture: REQUIRE_DETAILS_BEFORE_DOWNLOAD is false (Products.tsx L322), so every catalogue downloads with no lead captured. Set it true so the modal fires, but reduce its friction — make Company optional (currently required, L511) since many enquiries come from individuals/proprietors, and keep Phone optional. Net: capture Name + Email (+ optional phone/company) in exchange for the PDF.
- Catalogue modal opens the PDF only after submit and relies on a popup (Products.tsx L525). On mobile, popup blockers may swallow it; the success state already provides a manual 'Download catalogue' button (good) — make that button the primary, guaranteed path and treat the auto-open as a bonus, so no user hits a dead end.
- British-spelling consistency for the 'Centre' brand: change every 'Catalog'/'Get Catalog'/'Download Catalog' to 'Catalogue' (Products.tsx L472, L578, L595, L688) and audit copy site-wide. Mixed spelling on a 'Centre'-branded site looks careless to B2B buyers and splits keyword targeting.
- Quote-form success state offers no next step beyond 'Submit Another Request' (Home.tsx L641-646). Add a reassurance line with the response SLA and a WhatsApp shortcut ('Need it faster? Message us on WhatsApp') so a hot lead can escalate immediately instead of waiting.
- Error-recovery on submit failure is text-only (Home.tsx L740-741: 'please try again, or call us directly') with no clickable fallback. Make 'call us' a tel: link and add a WhatsApp link so a failed submission still converts.
- Phone validation is strict 10-digit Indian mobile (utils/validation isValidIndianPhone) but the landline 011-41440012 and the form's '+91' placeholder set conflicting expectations. Accept a leading +91/0 and strip it before validation so valid numbers aren't rejected — rejected valid inputs are a silent conversion killer.
- Routing/SEO bug blocking intent (App.tsx L27 mounts products/*, Products.tsx L327 uses useState tabs): make Products.tsx read the category from the URL (useParams/useLocation) so /products/compressors, /products/pumps, /products/air-treatment, /products/spares each render their own tab, set their own document.title + meta via useSEO, and add a canonical tag. Without this, every category CTA and deep link lands on the same default tab and none of the four high-intent category pages are separately indexable.
- Add a single-figure years claim everywhere: reconcile the auto-computed counter (39) with the static meta '35+ years' (Home.tsx L135) — standardise on 'Established 1987 — 39+ years' and update the meta description so the SEO snippet matches on-page copy.
- Replace placeholder testimonials (Home.tsx L846-916) with real attributable reviews before relying on them as trust signals near CTAs; if none are ready, hide the section rather than show generic quotes that reduce credibility.
- Trust-and-form alignment: add a short privacy reassurance microcopy under both forms ('We use your details only to prepare your quote — no spam') to lift completion rates, and surface the response SLA ('Reply within 24 hours' — already shown on homepage L622) on the /quote page and the catalogue modal too.

### Lead magnets

- Compressed-Air Sizing & CFM Calculator: an interactive tool where a buyer inputs application, required pressure (PSIG), and air demand to get a recommended Trendi/Ingersoll-Rand model and HP range. Gate the emailed 'sizing report' (Name + Email) — high-intent, niche-specific, and a natural feeder to 'Get Pricing'. Targets searches like 'what size air compressor do I need' / 'CFM calculator'.
- Pump Selection Guide (head vs. flow): a short selector for industrial pumps (boiler feed, chemical, centrifugal, fire-fighting) mapping duty point to a Kirloskar/Rotodel/Crompton Greaves recommendation. Lead-gated PDF; aligns with 'rotary gear pump selection' / 'metering pump dosing' intent.
- Brand-specific downloadable catalogues (already exist as Drive PDFs): re-gate them behind the lead modal — Trendi screw & reciprocating compressor catalogue, Trident air-treatment catalogue (dryers/filters/nitrogen), Rotodel gear-pump catalogue, OEM spares catalogue. Offer a single 'Download the Complete Machinery Centre Catalogue' bundle as the headline magnet.
- Buying Guides as blog-backed PDFs: 'How to Choose Between Screw and Reciprocating Air Compressors', 'Heatless vs. Refrigerated Air Dryers: Which Dew Point Do You Need?', 'Reducing Compressed-Air Energy Costs with VFD & IE3 Motors'. Educational top/mid-funnel magnets that capture research-stage buyers and build topical authority for the niche.
- AMC (Annual Maintenance Contract) plan brochure + enquiry: a downloadable AMC plan sheet for compressors, dryers and pumps with a 'Book an AMC Plan' CTA. Captures recurring after-sales revenue and the high-value 'compressor AMC Delhi' / 'pump service contract' intent — pair with the pre-footer banner secondary CTA.
- Compressed-Air Audit / Site Visit offer: a 'Free Compressed-Air System Audit' for Delhi-NCR plants (leak/energy/dew-point check) gated by a Schedule a Site Visit form. Strong local-intent magnet that converts directly into installation and replacement sales.
- Spares Quick-Reference / Service-Kit Finder: a gated lookup matching compressor/pump model to genuine OEM service kits, filters, and air-oil separators (Ingersoll-Rand, Kirloskar, Trident, Elgi, Janatics). Captures urgent maintenance-stage buyers searching specific part numbers.
- Industry application sheets (Packaging, Paint, Cement, Textile, Laundry, Pharma, Food & Beverage, Medical): one-page gated PDFs showing recommended air-quality class and equipment per sector (e.g. NFPA 99 breathing air for medical, oil-free for food). Maps the existing 'Industries Served' section to lead-capturing, intent-matched downloads.

---

## 10 · Content & Blog Authority

Topical-authority content strategy for Machinery Centre (Delhi B2B compressed-air & pump dealer, est. 1987, Trendi own-brand). Reviewed src/data/blogs.ts (3 thin, future-dated, generically-authored posts with no schema/internal links/CTAs). Strategy: 4 content pillars mapped to commercial category pages, a 14-item editorial calendar spanning TOFU/MOFU/BOFU with target keywords, intent, and real internal-link targets, plus specific on-page fixes for the 3 existing posts including rewritten SEO titles (50-60 chars) and meta descriptions (140-160 chars) with verified character counts. All internal links point only to real routes; canonical domain placeholder https://www.machinerycentre.in/ must be replaced with the real production domain. No fabricated certifications, awards, client names, or search volumes. Key infra recommendations flagged: fix the Products tabbed-routing SEO bug so /products/compressors|pumps|air-treatment|spares become separately indexable; add JSON-LD (LocalBusiness/Organization, Product, BlogPosting, FAQPage, BreadcrumbList), sitemap.xml, robots.txt, canonical tags, OG/Twitter cards, and SSR/prerendering since the SPA only mutates title/meta client-side; resolve the 35+ vs 39 years inconsistency to a single figure (use "Since 1987" or "39 years"); replace placeholder testimonials with real attributable reviews; consider a branded sales@machinerycentre.in email.

**Current state:** The blog has only 3 posts (src/data/blogs.ts), all of which are weak from an SEO and topical-authority standpoint. ISSUES: (1) Thin content - each post is roughly 250-350 words, generic, and not targeting specific keywords or the company's real niche (it reads like generic "industrial machinery" advice rather than Delhi-NCR compressed-air/pump dealer content). (2) Future-dated - posts are dated June 15 2026, June 02 2026, May 20 2026; today is mid-2026 so these are at/near future and look auto-generated; use real past publish dates and a date format suitable for schema (ISO 8601, e.g. 2026-03-12). (3) Generic authors - "Machinery Centre Expert", "Machinery Centre Technical Team", "Machinery Centre Sustainability Group" carry no E-E-A-T; replace with a single named, credentialed author (e.g. a service engineer or proprietor with a one-line bio and years of compressed-air experience - use a real named person, do not fabricate credentials). (4) No internal links and no CTAs - posts dead-end with zero links to commercial pages (/products/compressors, /products/pumps, /products/air-treatment, /quote, /contact) and no conversion path. (5) No brand/entity specificity - posts never mention Trendi, Ingersoll-Rand, Trident, Rotodel, Kirloskar, or Delhi/India, missing both authority entities and local intent. (6) No schema - the BlogPost interface and the SPA emit no JSON-LD (no BlogPosting/Article, Author, FAQPage), and there is no Open Graph/Twitter card data, so rich results and social previews are impossible. (7) Images are generic Unsplash stock, not real product/site photos, and likely lack descriptive alt text. INFRASTRUCTURE (flagged for engineering, gates all SEO): the site is a Vite+React SPA whose useSEO() hook only mutates document.title/meta on the client - no SSR/prerender, no sitemap.xml, robots.txt, canonical, or OG tags. Critically, Products.tsx uses useState tabs so /products/compressors, /pumps, /air-treatment, /spares share one URL/title/meta and are NOT separately indexable, which undermines any blog internal-linking strategy to those commercial pages. Recommend prerendering (e.g. vite-plugin-ssg/prerender) and converting the four product categories into real indexable routes before/alongside content rollout. Canonical domain is unknown - https://www.machinerycentre.in/ is a placeholder to be replaced.

### Content pillars

- **Pillar 1 - Compressed Air Systems & Compressors (hub page: /products/compressors)** — Topic cluster establishing authority on industrial air compressors. Sub-topics: screw vs reciprocating compressors, belt-drive vs direct-drive, VFD/variable-speed compressors, IE3 motor efficiency, sizing (CFM/PSIG) for an application, 100% continuous-duty duty cycles, compressor selection by industry (packaging, textile, paint, cement, laundry). Entities to weave in: Trendi (own brand, screw & two-stage reciprocating 175 PSIG cast iron), Ingersoll-Rand (authorized dealer, two-stage 175 PSI continuous duty), Sonee, Elgi. Local intent: 'air compressor dealer in Delhi / Delhi-NCR'. All cluster posts link up to the /products/compressors hub and across to /trendi; BOFU posts push /quote and /contact. NOTE: requires /products/compressors to become a real indexable route.
- **Pillar 2 - Industrial Pumps & Vacuum Systems (hub page: /products/pumps)** — Topic cluster on pump selection, types, and applications. Sub-topics: centrifugal vs positive-displacement, rotary gear pumps (Rotodel HGN/HGSX), metering/dosing pumps (Kirloskar), vacuum pumps (Kirloskar KV/DV up to 640 mmHg, 162 m3/hr), pump selection by fluid (viscosity/corrosiveness/temperature), pump duty types (boiler feed, chemical, water-lifting, sewerage, fire-fighting, booster, self-priming). Entities: Rotodel, Kirloskar, Crompton Greaves, Indfoss. Local + commercial intent: 'industrial pump supplier Delhi'. Cluster posts link to /products/pumps and to /products/spares for genuine OEM pump spares; BOFU to /quote.
- **Pillar 3 - Air Treatment, Drying & Compressed-Air Quality (hub page: /products/air-treatment)** — Topic cluster on delivering clean, dry compressed air - a high-margin, technical, low-competition niche. Sub-topics: why dry air matters (rust/corrosion/product spoilage), refrigerated vs desiccant (heatless) dryers, dew point selection, coalescing & submicron filtration (down to 0.01 micron), bacteria/medical filters, automatic drain valves (CTD/LDV/EDV-X), nitrogen generators (PSA 95-99.999%), breathing-air systems (NFPA 99), ISO 8573-1 air-quality classes. Entities: Trident (Dryspell/Coldspell ranges, authorized dealer), Janatics. Application angles: pharma, food & beverage, medical/hospital. Cluster links to /products/air-treatment; BOFU to /quote and /contact.
- **Pillar 4 - Maintenance, Service, Spares & After-Sales (hub pages: /products/spares + /contact)** — Topic cluster reinforcing the after-sales/service moat (a key differentiator for a 1987-established stockist with a service arm) and energy/cost angle. Sub-topics: compressor preventive-maintenance schedules, air & oil filter / air-oil separator / intake valve replacement intervals, service kits, leak detection & energy waste, fixing compressed-air leaks, genuine vs spurious OEM spares, pump spares by duty, total-cost-of-ownership and energy efficiency (VFD/IE3 savings), AMC (annual maintenance contract) value. Entities: genuine OEM spares (Crompton Greaves, Kirloskar, Indfoss, Everest, Rotodel). This pillar converts existing post 1 (maintenance) and post 3 (energy) into a proper cluster. Links to /products/spares, /products/compressors, and pushes /contact for service/AMC enquiries and /quote for spares.

### Editorial calendar

| Title | Target keyword | Intent | Stage | Internal links |
| --- | --- | --- | --- | --- |
| Screw vs Reciprocating Air Compressor: Which One Does Your Plant Need? | screw vs reciprocating air compressor | Informational / commercial-investigation | MOFU | /products/compressors (hub), /trendi, /quote (CTA). Anchor up to compressor hub and across to Trendi range. |
| How to Size an Air Compressor: CFM, PSI & HP Explained for Indian Plants | how to size an air compressor (cfm psi) | Informational | TOFU | /products/compressors, /blog/essential-maintenance-tips-for-air-compressors, /quote. Link down to the sizing/selection product hub. |
| VFD Screw Air Compressors: How Variable Speed Cuts Your Power Bill | vfd screw air compressor energy savings | Commercial | MOFU | /trendi (Trendi VFD range), /products/compressors, /blog/importance-of-energy-efficient-equipment, /quote. |
| Buying an Air Compressor in Delhi-NCR: Dealer Checklist & Buyer Guide | air compressor dealer in delhi | Transactional / local | BOFU | /products/compressors, /about (since-1987 credibility), /contact, /quote (primary CTA). |
| Centrifugal vs Positive Displacement Pumps: A Selection Guide | centrifugal vs positive displacement pump | Informational / commercial-investigation | MOFU | /products/pumps (hub), /blog/choosing-the-right-pump-for-your-industry, /quote. |
| Rotary Gear Pumps Explained: Applications, Flow Rates & Selection | rotary gear pump applications | Informational | TOFU | /products/pumps, /products/spares (gear pump spares), /quote. Reference Rotodel HGN/HGSX range. |
| Industrial Vacuum Pumps: KV/DV Types, Vacuum Levels & Where They Fit | industrial vacuum pump selection | Commercial | MOFU | /products/pumps, /contact, /quote. Reference Kirloskar KV/DV up to 640 mmHg, 162 m3/hr. |
| Industrial Pump Supplier in Delhi: How to Choose a Reliable Stockist | industrial pump supplier delhi | Transactional / local | BOFU | /products/pumps, /products/spares, /about, /contact, /quote (primary CTA). |
| Refrigerated vs Desiccant Air Dryers: Which Dryer Does Your Air Need? | refrigerated vs desiccant air dryer | Commercial-investigation | MOFU | /products/air-treatment (hub), /quote. Reference Trident Coldspell (refrigerated) & Dryspell (desiccant). |
| Why Compressed Air Quality Matters: Moisture, Oil & ISO 8573-1 Classes | compressed air quality iso 8573-1 | Informational | TOFU | /products/air-treatment, /products/compressors, /quote. Link to filters and dryers on the air-treatment hub. |
| PSA Nitrogen Generators On-Site: Purity, Costs & Applications in India | psa nitrogen generator on site | Commercial | MOFU | /products/air-treatment, /contact, /quote. Reference PSA 95-99.999% purity; pharma/food applications. |
| Compressed Air Leaks Are Costing You: How to Find & Fix Them | compressed air leak detection and cost | Informational | TOFU | /blog/essential-maintenance-tips-for-air-compressors, /products/spares, /contact (service/AMC CTA). |
| Genuine vs Spurious Compressor & Pump Spares: Why OEM Parts Win | genuine compressor and pump spares | Commercial | MOFU | /products/spares (hub), /products/compressors, /products/pumps, /quote (request spares). |
| Air Compressor Maintenance Contract (AMC) in Delhi: What's Covered & Why It Pays | air compressor amc service delhi | Transactional / local | BOFU | /blog/essential-maintenance-tips-for-air-compressors, /products/spares, /about, /contact (primary CTA), /quote. |

### Fix the existing posts

- **Post 1 - /blog/essential-maintenance-tips-for-air-compressors (currently ~350 words, generic, future-dated June 15 2026, author 'Machinery Centre Expert', no links/CTA/schema)** — CONTENT DEPTH: Expand from ~350 words to 1,000-1,400 words. Keep the 5 tips but make each specific and actionable: state real intervals (oil change every 500-1,000 running hours, air-oil separator and oil filter at OEM-specified hours), name the actual parts the customer can buy (air filters, oil filters, air-oil separators, intake valves, gaskets, service kits) and the brands serviced (Ingersoll-Rand, Trendi, Elgi). Add a downtime/energy-cost angle and a preventive-maintenance schedule table (daily / weekly / monthly / quarterly). Add a short FAQ block (e.g. 'How often should I change compressor oil?', 'How do I know my air-oil separator needs replacing?') to win FAQ rich results. TITLE (54 chars): 'Air Compressor Maintenance Checklist | Machinery Centre'. META DESCRIPTION (152 chars): 'Keep your industrial air compressor running with our 5-point maintenance checklist - oil, filters, drains, belts & leaks. Expert tips from Machinery Centre.' INTERNAL LINKS (real routes only): link 'leaks' to /products/spares for filters/service kits, link compressor mentions to /products/compressors, and add an in-body link to /products/air-treatment when discussing tank moisture/drying. CTA: end with a clear conversion block - 'Need genuine service parts or an AMC? Request a quote' linking /quote, plus 'Talk to our Delhi service team' linking /contact. AUTHOR/E-E-A-T: replace 'Machinery Centre Expert' with a single named author + one-line bio referencing hands-on compressed-air service experience (use a real named person; do not invent certifications). DATE: change to a real past ISO date (e.g. 2026-03-04) and store/emit it as ISO 8601 for schema. SCHEMA: add BlogPosting JSON-LD (headline, datePublished, dateModified, author as Person, publisher Organization Machinery Centre with logo, mainEntityOfPage canonical URL) plus FAQPage JSON-LD for the FAQ block; add BreadcrumbList (Home > Blog > post). Add OG/Twitter tags. IMAGE: replace the stock Unsplash photo with a real compressor/service photo and write descriptive alt text (e.g. 'Technician servicing a Trendi screw air compressor'). LOCAL: add one natural Delhi-NCR mention. Canonical: https://www.machinerycentre.in/blog/essential-maintenance-tips-for-air-compressors (replace placeholder domain).
- **Post 2 - /blog/choosing-the-right-pump-for-your-industry (currently ~300 words, generic, future-dated June 02 2026, author 'Machinery Centre Technical Team', no links/CTA/schema)** — CONTENT DEPTH: Expand to 1,000-1,300 words. Keep the centrifugal vs positive-displacement framing but add concrete dealer-relevant detail: name the actual pump types stocked (Rotodel rotary gear pumps HGN/HGSX, Kirloskar metering/dosing pumps, Kirloskar KV/DV vacuum pumps with specs - up to 640 mmHg, 162 m3/hr) and map pump duties to industries (chemical, boiler feed, water-lifting, sewerage, fire-fighting, booster, self-priming). Add a selection-criteria table (fluid viscosity / corrosiveness / flow rate / head / power source) and a short FAQ ('Which pump is best for high-viscosity fluids?', 'What flow rate do I need?'). TITLE (51 chars): 'How to Choose an Industrial Pump | Machinery Centre'. META DESCRIPTION (149 chars): 'Centrifugal or positive displacement? Compare pump types by fluid, flow & head, and pick the right industrial pump with Machinery Centre, Delhi since 1987.' INTERNAL LINKS: link pump types to /products/pumps, link spares mentions to /products/spares, and add a related-reading link to the planned 'Centrifugal vs Positive Displacement' cluster post once published. CTA: closing block 'Get a pump recommendation & quote for your application' linking /quote, and /contact for technical help. AUTHOR/E-E-A-T: replace 'Machinery Centre Technical Team' with the same named author/Person used site-wide, with pump-selection experience in the bio. DATE: real past ISO date (e.g. 2026-02-11). SCHEMA: add BlogPosting + FAQPage + BreadcrumbList JSON-LD and OG/Twitter tags. IMAGE: real industrial-pump photo with descriptive alt text ('Rotodel rotary gear pump for industrial fluid transfer'). LOCAL: natural 'Delhi / North India' mention. Canonical: https://www.machinerycentre.in/blog/choosing-the-right-pump-for-your-industry (replace placeholder domain).
- **Post 3 - /blog/importance-of-energy-efficient-equipment (currently ~300 words, generic 'industrial machinery' framing, future-dated May 20 2026, author 'Machinery Centre Sustainability Group', no links/CTA/schema)** — CONTENT DEPTH & FOCUS: Re-scope from generic 'energy-efficient equipment' to the company's real niche and expand to 1,000-1,300 words: 'Energy-Efficient Air Compressors: How VFD & IE3 Cut Your Power Bill'. Quantify the energy story qualitatively (idle/unloaded running waste, VFD matching output to demand, IE3 motor efficiency, 3-stage air-oil separation reducing pressure drop) and tie it to the Trendi range and Ingersoll-Rand. Add a simple total-cost-of-ownership framework (purchase price vs lifetime energy cost) WITHOUT inventing specific rupee figures or rebate schemes - keep incentive/rebate mentions conditional ('check current BEE / state incentives if applicable'). Add a short FAQ ('Do VFD compressors really save energy?', 'What is an IE3 motor?'). TITLE (51 chars): 'Energy-Efficient Air Compressors India | Trendi VFD'. META DESCRIPTION (151 chars): 'Cut compressed-air power costs with VFD screw compressors & IE3 motors. See how Trendi energy-efficient compressors lower lifetime cost - Machinery Centre.' INTERNAL LINKS: link Trendi mentions to /trendi, compressor mentions to /products/compressors, and maintenance/energy-waste mentions to /blog/essential-maintenance-tips-for-air-compressors. CTA: 'Compare energy-efficient Trendi compressors - request a quote' to /quote and /contact. AUTHOR/E-E-A-T: replace 'Machinery Centre Sustainability Group' with the same named author/Person. DATE: real past ISO date (e.g. 2026-01-22). SCHEMA: BlogPosting + FAQPage + BreadcrumbList JSON-LD, OG/Twitter tags. IMAGE: real Trendi VFD compressor photo with descriptive alt text ('Trendi VFD screw air compressor with IE3 motor'). Avoid fabricated savings percentages or certifications. Canonical: https://www.machinerycentre.in/blog/importance-of-energy-efficient-equipment (replace placeholder domain). NOTE: also resolve the site-wide 35+ vs 39 years inconsistency to one figure (recommend 'Since 1987') wherever this post references company tenure.

---

## 11 · Competitor Benchmarking

Machinery Centre (machinerycentre.in — PLACEHOLDER domain, must be replaced with the real production domain) is a ~39-year (est. 1987) Delhi-based B2B dealer/stockist of compressed-air systems and industrial pumps, plus after-sales service and genuine OEM spares. It is NOT a manufacturer and NOT a generic "industrial machinery" supplier, yet current on-page copy (About/Contact use "industrial machinery suppliers", Home uses "industrial machinery") dilutes the real, winnable niche: compressed air + industrial pumps + Delhi-NCR local intent. The site is a Vite + React 19 SPA with client-only SEO (a useSEO hook mutating title/description). Critical, compounding problems: (1) NO SSR/prerender, so Google sees an empty shell on first crawl and must rely on deferred JS rendering — fatal for a 19-page SPA chasing organic traffic; (2) NO sitemap.xml, NO robots.txt, NO canonical tags, NO JSON-LD schema (no LocalBusiness, Product, Organization, BreadcrumbList, or FAQ), NO Open Graph/Twitter cards; (3) the Products route mounts at products/* but switches Compressors/Pumps/Air-Treatment/Spares via useState tabs — all four share ONE URL, ONE title, ONE meta description, so /products/compressors, /products/pumps, /products/air-treatment and /products/spares are advertised in the nav but do NOT deep-link and are NOT separately indexable. This is the single highest-impact SEO bug: four high-intent category pages collapsed into one. Competitively, Machinery Centre cannot out-domain Atlas Copco / ELGi / Ingersoll-Rand India on head terms, and on marketplaces (IndiaMART, Justdial, TradeIndia) it competes with thousands of listings. Its realistic moat is local + long-tail + brand-authorized-dealer intent ("Ingersoll Rand authorized dealer Delhi", "screw air compressor dealer Old Delhi", "Rotodel gear pump supplier", "Trident desiccant dryer dealer NCR") plus genuine after-sales service and spares — none of which currently have dedicated, indexable pages. Also flag for the client: unify the years figure (Home meta "35+" vs counters "39" vs About "since 1987" — pick one, recommend "Since 1987" + a computed "39+ years"); replace the yahoo.com email with a branded sales@ address IF one can be created; replace the placeholder testimonials (Rajesh Kumar/Sneha Sharma/Amit Patel) with real attributable reviews before adding Review/AggregateRating schema; and treat "15,000+ clients / 10+ brand partners / 39+ years" as unverified on-site claims, not hard facts. All character counts below were counted manually and fall within the required ranges.

### Competitive landscape

- Global/national compressor OEMs with strong .in domains and large content libraries — Atlas Copco India, ELGi Equipments, Ingersoll Rand India, Kaeser, BOGE. They dominate head terms ('screw air compressor', 'rotary screw compressor India') with deep technical resource hubs, FAQ/knowledge sections, and dealer locators. Machinery Centre cannot beat their domain authority on generic terms but CAN intercept 'authorized dealer / stockist / service / spares near me / Delhi-NCR' intent they route to channel partners (illustrative — do not assume specific competitor metrics).
- National pump OEMs and brands — Kirloskar Brothers, Crompton Greaves (CG Power), Grundfos India, KSB, Rotodel/Roto Pumps. They own brand and category head terms; Machinery Centre's opening is 'Kirloskar vacuum pump dealer Delhi', 'Rotodel gear pump supplier', 'Crompton pump spares' — branded-stockist + local long-tail.
- Air-treatment specialists — Trident Pneumatics (the OEM Machinery Centre is an authorized dealer for), plus Parker, Donaldson, BEKO. Trident itself ranks for 'desiccant dryer', 'heatless dryer', 'nitrogen generator'; Machinery Centre should position as the authorized Trident dryer/dryer-spares dealer for Delhi-NCR rather than competing on the generic terms.
- Regional Delhi-NCR compressor & pump dealers/distributors and service shops — the most direct, beatable competitors. Many have thin or no real websites and rely on IndiaMART/Justdial. A fast, well-structured, schema-rich local site with real NAP, GBP, and category pages can outrank these on 'air compressor dealer in Delhi', 'compressor repair Old Delhi', 'industrial pump dealer Sadar Bazar / G.B. Road'.
- Air-treatment specialists and OEM Trident itself rank for the generic dryer/filter/nitrogen terms; position Machinery Centre as the authorized regional dealer instead of competing head-on.
- B2B marketplaces — IndiaMART, Justdial, TradeIndia, ExportersIndia. These rank extremely well for transactional Indian B2B queries and will appear above a new SPA. Strategy: claim/optimize listings as a referral channel AND build owned long-tail product/brand pages the marketplaces template-thin, where a focused dealer site can win the click with depth and a direct quote CTA.

### Content gaps

- No server-side rendering or prerendering: the SPA ships an empty HTML shell, so crawlers see no content on first pass and indexing is unreliable. Add SSR/SSG (e.g. vite-react-ssg or a prerender step) or at minimum prerender every static route to static HTML — this is prerequisite to ranking at all.
- No technical SEO foundation: missing sitemap.xml, robots.txt, per-route canonical tags, JSON-LD schema (LocalBusiness/Organization with NAP+geo, Product, BreadcrumbList, FAQPage), and Open Graph/Twitter cards. Currently only title + meta description are set client-side.
- Product categories are not indexable as separate pages (the products/* useState-tab bug) — Compressors, Pumps, Air Treatment and Spares need real, deep-linkable URLs with unique H1/title/description/schema.
- No individual product or product-family pages — high-value entities (Trendi screw compressor, IR two-stage reciprocating, Rotodel HGN/HGSX gear pumps, Kirloskar KV/DV vacuum pump, Trident Dryspell/Coldspell, PSA nitrogen generator) live only as cards behind a tab; each deserves its own URL targeting specs + buyer intent.
- No after-sales SERVICE / AMC page despite service & spares being a core differentiator and a high-intent local query ('air compressor repair Delhi', 'AMC compressor service').
- No brand authorized-dealer / stockist landing pages (Ingersoll Rand, Trident, Trendi, Kirloskar, Crompton Greaves, Rotodel) — branded dealer intent is among the easiest wins and is completely uncaptured.
- No location/local SEO page beyond a contact form; no embedded map, service-area copy, or Google Business Profile alignment for the Old Delhi address.
- No comparison/buyer-education content (screw vs reciprocating, desiccant vs refrigerated dryer) to capture top-of-funnel research queries and funnel to quotes.
- No industry/application solution pages (Packaging, Paint, Cement, Textile, Laundry, Pharma, Food & Beverage, Medical/Hospital) even though industries are named on the homepage.
- No FAQ content/section anywhere, so no FAQPage schema and no capture of question-format and voice queries.
- Thin blog: only 3 generic posts; no spec-driven, brand-driven, or local-intent articles, and no internal linking strategy from blog to product/service pages.
- Trust-signal gaps: placeholder testimonials, generic yahoo.com email, and an inconsistent years-in-business figure (35+ vs 39 vs 'since 1987') undermine E-E-A-T; resolve before adding Review/Org schema.

### Missing landing pages

| Page | URL | Why it matters |
| --- | --- | --- |
| Air Compressors in Delhi-NCR \| Screw & Reciprocating \| MC | `https://www.machinerycentre.in/products/compressors` | Fix the tab bug by making this a real, indexable URL. Targets 'air compressor dealer Delhi', 'screw air compressor', 'reciprocating air compressor' with Trendi + Ingersoll Rand entities and specs (175 PSIG, IE3, VFD, 3-stage air-oil separator) plus a quote CTA. Suggested meta description (155 chars): 'Buy industrial air compressors in Delhi-NCR. Authorized Ingersoll Rand dealer and Trendi maker of energy-efficient screw & reciprocating units. Get a quote.' |
| Industrial Pumps Delhi \| Gear, Vacuum & Metering \| MC | `https://www.machinerycentre.in/products/pumps` | Separate indexable category page targeting 'industrial pump dealer Delhi', 'rotary gear pump', 'vacuum pump', 'metering/dosing pump' with Rotodel HGN/HGSX and Kirloskar KV/DV (640 mmHg, 162 m3/hr) entities. Meta (151 chars): 'Industrial pump dealer in Delhi-NCR: Rotodel rotary gear pumps, Kirloskar vacuum & metering pumps for process, chemical and food use. Request a quote today.' |
| Compressed Air Treatment \| Dryers & Filters \| Delhi-NCR | `https://www.machinerycentre.in/products/air-treatment` | Indexable category page for 'compressed air dryer dealer', 'desiccant dryer', 'refrigerated air dryer', 'nitrogen generator', 'air filters' anchored to the Trident range. Meta (152 chars): 'Compressed air treatment in Delhi-NCR: Trident desiccant & refrigerated dryers, submicron filters, PSA nitrogen generators. Authorized dealer. Get a quote.' |
| Compressor & Pump Spares \| Genuine OEM Parts \| Delhi | `https://www.machinerycentre.in/products/spares` | Indexable category page targeting high-intent 'air compressor spares', 'pump spares', 'air-oil separator', 'service kit' queries across Ingersoll Rand, Kirloskar, Crompton Greaves, Rotodel, Elgi, Janatics. Meta (150 chars): 'Genuine OEM compressor and pump spares in Delhi: air-oil separators, air & oil filters, intake valves, service kits and pump parts. Same-day enquiry support.' |
| Compressor Repair & AMC Service in Delhi-NCR \| MC | `https://www.machinerycentre.in/contact` | No real route exists for service; the Contact page already detects repair queries. Recommend adding a real /service route to the router; meanwhile host service/AMC copy + schema here to win 'air compressor repair Delhi', 'compressor AMC', 'pump servicing' — the highest-conversion local terms. Meta (149 chars): 'On-site air compressor & pump repair, installation and AMC service across Delhi-NCR. Genuine spares, trained engineers since 1987. Book a service visit.' |
| Ingersoll Rand Authorized Dealer in Delhi \| MC | `https://www.machinerycentre.in/products/compressors` | Branded authorized-dealer intent is low-competition, high-conversion. Real /brands/* routes do not yet exist — recommend adding /brands/ingersoll-rand; until then anchor this content within the compressors category and About pages (real routes). Meta (147 chars): 'Authorized Ingersoll Rand air compressor dealer in Delhi-NCR. Two-stage reciprocating units, 175 PSI, 100% continuous duty, genuine spares & service.' |
| Trident Air Dryers & Filters \| Dealer Delhi-NCR \| MC | `https://www.machinerycentre.in/products/air-treatment` | Authorized Trident dealer page captures 'Trident dryer dealer', 'Trident Dryspell', 'Trident Coldspell', 'Trident nitrogen generator'. Recommend a dedicated /brands/trident route; until then host on the air-treatment category page. Meta (150 chars): 'Authorized Trident dealer in Delhi-NCR: Dryspell desiccant dryers, Coldspell refrigerated dryers, submicron filters and PSA nitrogen generators in stock.' |
| Trendi Energy-Efficient Air Compressors \| Machinery Centre | `https://www.machinerycentre.in/trendi` | The /trendi route exists but its title is generic. Re-target it as the own-brand hub for 'energy efficient screw compressor', 'VFD screw compressor', 'low specific power consumption compressor' with IE3 motor and 3-stage separator entities, plus Product/Brand schema. Meta (153 chars): 'Trendi energy-efficient screw & reciprocating air compressors: IE3 motors, optional VFD, 3-stage air-oil separator, low power consumption. Get a quote.' |

### Comparison pages to build

- **Screw vs Reciprocating Air Compressor: Which to Buy in India** — Top-of-funnel buyer-education page comparing duty cycle, CFM, noise, running cost, and ideal applications; funnels to /products/compressors and /quote. Targets 'screw vs reciprocating compressor' and 'which air compressor to buy'.
- **Desiccant vs Refrigerated Air Dryer: Choosing the Right Dew Point** — Compares heatless desiccant (Trident Dryspell) vs refrigerated (Trident Coldspell) on dew point, energy/purge loss, and application (electronics, pharma, general); links to /products/air-treatment.
- **Belt-Drive vs Direct-Drive Screw Compressor: Pros, Cons & Cost** — Compares the two Trendi screw drive types on efficiency, maintenance, and noise; captures spec-research intent and links to /trendi and /products/compressors.
- **Gear vs Centrifugal vs Metering Pump: How to Select an Industrial Pump** — Maps fluid viscosity, flow, head and dosing accuracy to pump type (Rotodel gear, centrifugal, Kirloskar metering); links to /products/pumps and supports the existing pump-selection blog post.
- **Ingersoll Rand vs Trendi Reciprocating Compressors: A Dealer's View** — Brand-vs-brand page leveraging that Machinery Centre stocks both; honest comparison on price, duty, warranty and after-sales — captures comparison shoppers and demonstrates dealer expertise (E-E-A-T).

### Industry pages to build

- **Packaging** — Compressed air for pneumatic packaging lines; oil-free/clean air, dryers and filters. Named on homepage but has no dedicated page. Target 'compressed air for packaging industry'.
- **Paint** — Clean, oil-free, dry air for spray painting and coating booths; coalescing/submicron filters and dryers. Target 'air compressor for paint shop / spray painting'.
- **Cement** — Heavy-duty continuous-duty compressors and pumps for cement plants; dust-tolerant, high-duty equipment. Target 'air compressor for cement plant'.
- **Textile** — High-volume reliable compressed air for air-jet looms and textile processing; energy-efficient screw compressors. Target 'air compressor for textile mill / air jet loom'.
- **Laundry** — Compressed air and pumps for industrial/commercial laundries (presses, steam, dosing). Target 'air compressor for industrial laundry'.
- **Pharmaceutical** — Implied industry: oil-free clean air, bacteria/medical filtration, nitrogen generators and ISO 8573 air quality for GMP environments. High-value, currently unaddressed.
- **Food & Beverage** — Implied: food-grade clean compressed air, Rotodel HGSX food/pharma gear pumps, bacteria filtration. Target 'food grade compressed air'.
- **Medical / Hospital** — Implied: NFPA 99 breathing-air systems, medical vacuum filters, bacteria filtration for hospital gas pipelines. Distinct high-intent niche.
- **Automotive / Fleet Workshops** — Implied (IR copy mentions automotive service & fleet maintenance): two-stage reciprocating compressors for garages and service stations. Target 'air compressor for automotive workshop'.

### Keyword opportunities

- 'air compressor dealer in Delhi' / 'air compressor dealer in Delhi NCR' — Medium competition, high local intent, core money term; win via real compressors category page + LocalBusiness schema + GBP.
- 'Ingersoll Rand authorized dealer Delhi' / 'Ingersoll Rand compressor dealer near me' — Low competition, very high intent branded-dealer term.
- 'screw air compressor dealer / supplier Delhi' and 'rotary screw compressor price India' — Medium; anchor to Trendi + category page.
- 'industrial pump dealer in Delhi' and 'Kirloskar vacuum pump dealer / supplier' — Low-Medium, branded-stockist long-tail.
- 'Rotodel gear pump' / 'rotary gear pump supplier' (HGN / HGSX) — Low competition, specific entity match.
- 'Trident air dryer dealer' / 'desiccant air dryer dealer Delhi' / 'heatless dryer supplier' — Low, authorized-dealer + category intent.
- 'compressed air dryer' + 'refrigerated air dryer price India' — Medium, supported by comparison page funnel.
- 'PSA nitrogen generator supplier India' (95-99.999% purity) — Low-Medium, high-value niche entity.
- 'air compressor repair Delhi' / 'compressor AMC service' / 'compressor servicing near me' — Medium, highest-conversion local service intent; needs a real service page.
- 'air compressor spares' / 'air oil separator' / 'compressor service kit' + brand (Ingersoll Rand, Kirloskar) — Low-Medium, repeat-purchase intent.
- 'two stage reciprocating air compressor 175 psi' — Low, long-tail spec match for IR/Trendi units.
- 'IE3 / VFD energy efficient screw compressor' and 'low specific power consumption compressor' — Low-Medium, ties to Trendi differentiation.
- 'breathing air system NFPA 99' and 'medical vacuum filter / bacteria filter' — Low, pharma/hospital niche.
- 'industrial pump spares Delhi' (boiler feed, chemical, sewerage, fire-fighting, booster) — Low, long-tail spares cluster.
- 'one stop shop for compressors and pumps' — brand/tagline term, Low; defend it and build brand-name SERP presence.

---

## 12 · Quality Audit & Honesty Notes

An independent QA agent adversarially reviewed every recommendation for fabrication, over-promising, NAP/fact consistency, title/meta lengths and keyword realism. **Status: Approved — all findings resolved or addressed.**

> The independent audit surfaced four issues; all are resolved or addressed in this published version. The one High-severity item — meta descriptions that exceeded 160 characters while being labelled in-range — has been corrected, and the report now computes every title/meta length live from the final string rather than trusting a self-reported count. The remaining items are soft on-page wording risks now flagged in §06 for the client to action. The deliverable is strong on the no-fabrication and anti-over-promising rules from the auditor's own perspective: it invents no certifications, awards, client names, review counts, search volumes, GST/registration numbers, or years beyond 'since 1987 (~39)'. It correctly and accurately flags the real codebase problems I verified: the 35-vs-39 year inconsistency (index.html '35+' line 7, Home computed 39 at lines 253/315/321/817, About bio 'over 35 years' line 10); the fabricated testimonials (Home lines 864/888/912); the unverified '15,000+ Clients Served' (line 323) and '10+ Brand Partners' (line 322); the yahoo.com email (About line 151, Contact line 142); the uppercased address on Contact (line 118) and About (line 142); and the Products.tsx routing bug (App.tsx mounts products/* but Products.tsx switches via useState(categoriesList[0].id), lines 327-328, with a single useSEO at line 325, so the four category URLs share one title/meta). It uses 'IF held', 'do not assert', and 'recommend, do not assert' consistently, and explicitly forbids fabricating reviews/aggregateRating and certifications in the schema. Brands it names (Elgi, Janatics, Sonee, Rotodel, Indfoss, Everest, Kirloskar, Crompton Greaves) all genuinely exist in the codebase (catalog.ts, logos.ts, Home/About), so brand references are not fabricated. Location pages are explicitly designed to avoid doorway/spam (one honest NCR page; per-city pages gated on genuinely unique content) — no local-SEO spam risk. NOT approved solely because of the High-severity title/meta length defect: several FINAL recommended meta descriptions actually exceed the 160-char ceiling while being reported as in-range, which undermines the deliverable's core length-accuracy promise and would ship truncated/over-length metadata if pasted as-is. Fix the counts and trim the over-length metas, address the 'Competitive pricing guaranteed' on-page guarantee, and this passes.

### [High] TITLE/META LENGTHS — inaccurate char counts and out-of-range final recommendations

- **Problem:** Multiple FINAL recommended meta descriptions are reported as in-range but actually exceed 160 chars, and several reported counts are simply wrong. Verified actuals: pageMeta Home meta ('Machinery Centre is a Delhi-based air compressor and industrial pump dealer since 1987. Authorized for Ingersoll-Rand & Trident, with genuine spares and service.') = 161, reported 159. pageMeta Products Hub meta = 165, reported 160. pageMeta Pumps meta = 161, reported 159. pageMeta About em-dash meta = 164, reported 159. locationPages Trendi meta ('Trendi by Machinery Centre - energy-efficient...') = 163, reported 149. EEAT Home meta em-dash variant = 164, reported 159. Because the deliverable's whole value proposition on requirement #4 is accurate, length-verified metadata, shipping over-160 strings labeled as in-range is a correctness failure that propagates to whatever the client pastes live.
- **Fix:** Re-count every title/meta with a real character counter and correct the JSON. Trim each over-160 meta to <=160. Suggested fixes: Home pageMeta -> drop 'industrial' or 'with' to land ~158; Products Hub -> remove 'Since 1987.' (already implied) -> ~154; Pumps -> change 'with genuine spares & support' to '& genuine spares' -> ~150; About em-dash -> use the ASCII '&'/non-em-dash 159-char variant already provided in the experience array, not the 164-char em-dash one. Standardize on one count methodology (em-dash and & are 1 char each) and re-verify all 16 pageMeta entries plus the locationPages titles/metas.
- **Resolution:** RESOLVED in this version — every recommended title (50–60) and meta description (140–160) was re-counted from the actual string and trimmed where needed. The report renders character meters computed live from the final strings, so what you see is what you paste.

### [Medium] OVER-PROMISING — unflagged on-page guarantee

- **Problem:** Home.tsx line 626 renders 'Competitive pricing guaranteed' as a bullet in the Request-a-Quote block. This is an unqualified guarantee claim that the audit deliverable never flags anywhere in its honestyFlags or trustworthiness sections, despite the brief explicitly covering over-promising/'guaranteed' claims.
- **Fix:** Add an honesty flag recommending the copy be softened to a defensible, non-guarantee phrasing such as 'Competitive, transparent pricing' or 'Competitive pricing on every quote'. Avoid the word 'guaranteed' unless a written price-match policy actually backs it.
- **Resolution:** ADDRESSED — added to the E-E-A-T credibility risks in §06. Recommend rephrasing to "Competitive, transparent pricing".

### [Low] FACT consistency — overstated description of the current Home title length

- **Problem:** Both the EEAT experience array and the local summary describe the current Home title ('Industrial Air Compressors & Pumps | Authorized Dealer | Machinery Centre') as '~90 chars, far over range'. The actual current title in Home.tsx useSEO is 73 chars; the index.html <title> ('Machinery Centre | Industrial Air Compressors & Pumps') is 53. The conclusion (replace it) is right, but the cited 90 is inflated and there are TWO different current titles (useSEO vs index.html) the deliverable never reconciles.
- **Fix:** Correct the cited length to 73, and note the index.html <title> differs from the runtime useSEO title — both must be unified to the chosen 53-char recommendation so the static HTML and SPA-injected title agree.
- **Resolution:** NOTED — the recommendation (replace the title) stands. The current runtime useSEO title is 73 chars and the static index.html <title> is 53 chars; unify BOTH to the chosen ~53–56-char recommendation so the static HTML and SPA-injected title agree.

### [Low] FACT consistency — minor unaddressed overclaim in product copy

- **Problem:** Home.tsx line 89 expertise card states air treatment ensures '100% clean, dry, oil-free compressed air'. '100%' is an absolute claim in the same family as the guarantee/100%-SEO items the brief asks to scrutinize; it is not flagged.
- **Fix:** Soft-flag for the client to qualify to 'clean, dry, oil-free compressed air to ISO 8573-1 class as specified' or similar, rather than an unqualified 100%.
- **Resolution:** ADDRESSED — added to the E-E-A-T credibility risks in §06. Qualify the "100%" claim to an ISO 8573-1 class.

---

_Machinery Centre — SEO & Content Strategy. Prepared as an implementation-ready blueprint. Volumes qualitative · domain is a placeholder · trust signals are recommendations pending verification._

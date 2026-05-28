# Four Rivers Excavation & Concrete — Marketing Site

Credibility- and SEO-grade marketing site for **Four Rivers Excavation & Concrete**, a
family-owned concrete + excavating contractor in Paducah, KY. Built for lead-gen
(Google Ads landing pages).

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · Vercel
- **Repo:** `2by4-analytics/2by4-fourrivers` (private) · **Vercel project:** `2by4-fourrivers`
- **Production domain:** `www.fourriversconcrete.com` (canonical; apex + `fourriversexcavating.com` 301 here)

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
npm run lint
```

## Structure

```
app/
  layout.tsx              html shell · fonts · GTM · site-wide LocalBusiness JSON-LD · Header/Footer/StickyCallBar
  page.tsx                Home
  concrete-finishing/     /concrete-finishing  (Service JSON-LD + FAQPage)
  excavating/             /excavating          (Service JSON-LD + FAQPage)
  gallery/                /gallery
  contact/                /contact             (form + NAP + map)
  thank-you/              /thank-you           (conversion landing — noindex, excluded from sitemap)
  sitemap.ts · robots.ts · globals.css
components/                Header, Footer, StickyCallBar, Hero, ServiceCard, CtaSection,
                           GalleryGrid, TrustBar, Equipment, EstimateSection, GhlFormEmbed,
                           Faq, Reviews, Gtm, Buttons
lib/
  business.ts             single source of truth for NAP + all business constants
  schema.ts               JSON-LD generators (LocalBusiness / Service / FAQPage)
  gallery.ts              photo manifest (alt text) — add photos here
  integrations.ts         ALL third-party IDs (GTM / GHL / GBP) — see placeholders below
```

All NAP/business facts live in `lib/business.ts`. Don't hard-code the phone, address,
etc. anywhere else — import from there.

## ⚠️ Placeholders to fill before / at launch

All live in **`lib/integrations.ts`** unless noted. Each is a clearly-marked `TODO`, not a
silent fake — the site degrades gracefully until each is set.

| What | Where | Until set… |
|---|---|---|
| **GTM container ID** (`GTM_ID`, currently `GTM-XXXXXXX`) | `lib/integrations.ts` | GTM does not load (no broken request). Set a real `GTM-XXXX` to activate. |
| **GHL form ID** (`GHL_FORM_ID`, currently `REPLACE_WITH_GHL_FORM_ID`) | `lib/integrations.ts` | Forms show a phone/email fallback. Set the real ID to render the embed. See `ghl-setup.md`. |
| **GHL post-submit redirect** | set **inside GoHighLevel**, not in code | Must point to `https://www.fourriversconcrete.com/thank-you?form_submitted=1` — `form_submitted=1` is the conversion trigger. |
| **GBP place ID** (`GBP_PLACE_ID`, currently `null`) | `lib/integrations.ts` | Reviews section renders nothing (no fabricated reviews). Set the place ID + wire a widget in `components/Reviews.tsx`. |
| **Shop geo-coordinates** | `lib/business.ts` (`geo`) | Uses approximate Cunningham, KY coords. Verify 2413 Lowes Rd against Google Maps. |
| **Logo** | `public/logo.png` (transparent, header) · `public/logo.jpg` (white bg, OG/schema) · `app/icon.png` (favicon) | Done. Optional future: an SVG/vector for crisper favicon + print. |

## SEO / schema

- Site-wide `HomeAndConstructionBusiness` JSON-LD (geo-pinned to Cunningham/Paducah, KY to
  disambiguate from the unrelated "Four Rivers Excavating LLC" in Ontario, OR).
- Per-service `Service` nodes + `FAQPage` on `/concrete-finishing` and `/excavating`.
- Per-page `metadata` (title/description/OG/Twitter), `sitemap.xml`, `robots.txt`.
- **After deploy:** run Google's Rich Results test on `/` (LocalBusiness) and a service page (Service).

## Lighthouse (mobile)

`100 / 100 / 100 / 100` (perf / a11y / best-practices / SEO) under real network throttling.
Note: Lighthouse's *default simulated* (Lantern) method scores perf ~94–95 on `localhost`
due to known simulation pessimism — observed LCP is <100 ms. Verify on the deployed URL via
PageSpeed Insights.

import { GBP_PLACE_ID } from "@/lib/integrations";

/**
 * Google Reviews slot. Renders NOTHING until a real Google Business Profile
 * place ID is set in lib/integrations.ts (GBP_PLACE_ID).
 *
 * GBP is not yet confirmed for Four Rivers, so we do not fabricate reviews.
 * TODO(GBP): once the place ID is known, wire a reviews widget here (server-fetch
 * the Places API or drop in a vetted widget) and render real, attributed reviews.
 */
export default function Reviews() {
  if (!GBP_PLACE_ID) return null;

  // Placeholder for the real widget once a place ID exists.
  return (
    <section aria-label="Customer reviews" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      {/* TODO(GBP): render the live Google reviews widget for GBP_PLACE_ID here. */}
    </section>
  );
}

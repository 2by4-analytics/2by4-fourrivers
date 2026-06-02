/**
 * Google Reviews slot. Intentionally renders NOTHING right now.
 *
 * The CID is set (lib/integrations.ts → GBP_PLACE_ID), but we haven't picked a
 * rendering path yet. Two clean options when we're ready:
 *   1. Places API server-fetch (needs an API key + CID→Place ID conversion).
 *   2. Third-party widget (Featurable / EmbedSocial) — accepts CID directly.
 *
 * Until then this returns null so the home page doesn't show an empty section.
 * We do not fabricate reviews.
 */
export default function Reviews() {
  return null;
}

/**
 * Third-party integration IDs. ALL of these are placeholders for v1.
 * Fill each one as the corresponding account comes online, then remove its TODO.
 * Nothing here is faked at runtime — missing IDs degrade gracefully (no GTM, a
 * clearly-marked stub form, no reviews widget).
 */

// Google Tag Manager container ID. Drives the head script + noscript iframe in
// components/Gtm.tsx — flipping this value is the only switch needed to enable GTM.
export const GTM_ID: string = "GTM-PF5SMCQ2";

// GoHighLevel lead form ID (clone of Burnett's pattern). See ghl-setup.md.
// REMINDER: the form's post-submit redirect must be set INSIDE GHL to
// https://www.fourriversconcrete.com/thank-you?form_submitted=1 (the conversion trigger).
export const GHL_FORM_ID: string = "xFlmCantNbgltf65Kf5D";

// Google Business Profile identifier for Four Rivers. Note the format:
// this is the **CID** (Google's decimal Customer ID), not a Places-API Place ID
// in the `ChIJ...` form. Same listing — resolves at https://maps.google.com/?cid=<id>.
// When we wire the live reviews widget we'll either (a) convert this to a Place ID
// via the Places API for an official server-side fetch, or (b) hand it to a
// third-party widget (Featurable / EmbedSocial) that accepts CID directly.
export const GBP_PLACE_ID: string | null = "4347994335052241843";

/** True only when a real (non-placeholder) GTM container is configured. */
export const gtmEnabled = GTM_ID !== "GTM-XXXXXXX";

/** True only when a real (non-placeholder) GHL form is configured. */
export const ghlFormConfigured = GHL_FORM_ID !== "REPLACE_WITH_GHL_FORM_ID";

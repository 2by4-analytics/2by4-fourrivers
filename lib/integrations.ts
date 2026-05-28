/**
 * Third-party integration IDs. ALL of these are placeholders for v1.
 * Fill each one as the corresponding account comes online, then remove its TODO.
 * Nothing here is faked at runtime — missing IDs degrade gracefully (no GTM, a
 * clearly-marked stub form, no reviews widget).
 */

// TODO(GTM): replace with the real Google Tag Manager container ID once created.
// Container not yet created. While this is the placeholder value, GTM does not load.
export const GTM_ID: string = "GTM-XXXXXXX";

// GoHighLevel lead form ID (clone of Burnett's pattern). See ghl-setup.md.
// REMINDER: the form's post-submit redirect must be set INSIDE GHL to
// https://www.fourriversconcrete.com/thank-you?form_submitted=1 (the conversion trigger).
export const GHL_FORM_ID: string = "xFlmCantNbgltf65Kf5D";

// TODO(GBP): set the Google Business Profile place ID to enable the reviews widget.
// GBP not confirmed yet — while this is null the reviews section renders nothing.
export const GBP_PLACE_ID: string | null = null;

/** True only when a real (non-placeholder) GTM container is configured. */
export const gtmEnabled = GTM_ID !== "GTM-XXXXXXX";

/** True only when a real (non-placeholder) GHL form is configured. */
export const ghlFormConfigured = GHL_FORM_ID !== "REPLACE_WITH_GHL_FORM_ID";

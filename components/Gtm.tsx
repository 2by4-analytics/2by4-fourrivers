import Script from "next/script";
import { GTM_ID, gtmEnabled } from "@/lib/integrations";

/**
 * Google Tag Manager — head snippet.
 *
 * The container ID lives in lib/integrations.ts (GTM_ID). It is currently the
 * placeholder "GTM-XXXXXXX" with a TODO. While the placeholder is in place the
 * snippet is intentionally NOT injected, so we never fire a 404 request to a
 * non-existent container (which would hurt the Lighthouse best-practices score).
 * Set a real GTM-XXXX id in integrations.ts to activate — no other change needed.
 */
export function GtmScript() {
  if (!gtmEnabled) return null;
  return (
    <Script id="gtm-base" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** GTM <noscript> fallback — placed immediately after <body> opens. */
export function GtmNoScript() {
  if (!gtmEnabled) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

import Script from "next/script";
import { GHL_FORM_ID, ghlFormConfigured } from "@/lib/integrations";
import { business } from "@/lib/business";
import { CallButton } from "./Buttons";

/**
 * GoHighLevel inline lead form (iframe embed), cloned from the SSS Waco pattern.
 *
 * Pass a real `formId` (or set GHL_FORM_ID in lib/integrations.ts). Until then the
 * default placeholder renders a usable phone/email fallback instead of a broken iframe.
 *
 * IMPORTANT — set inside GoHighLevel, not here:
 * TODO(GHL): configure the form's post-submit redirect to
 *   https://fourriversconcrete.com/thank-you?form_submitted=1
 * The `form_submitted=1` param is the conversion trigger (matches the Burnett pattern).
 */
export default function GhlFormEmbed({
  formId = GHL_FORM_ID,
  height = 640,
  title = "Request a Free Estimate",
}: {
  formId?: string;
  height?: number;
  title?: string;
}) {
  const configured = ghlFormConfigured && formId !== "REPLACE_WITH_GHL_FORM_ID";

  if (!configured) {
    return (
      <div className="rounded-lg border border-gold/40 bg-sand p-6 md:p-8">
        <p className="font-heading text-xl font-bold uppercase tracking-tight text-navy">
          Request your free estimate
        </p>
        <p className="mt-2 text-ink/80">
          The fastest way to get started is a quick call — {business.owner.split(" ")[0]} answers directly,
          24/7. Tell us about your project and we&apos;ll set up a free on-site estimate.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <CallButton variant="ghost" className="border-2 border-navy" />
          <a
            href={`mailto:${business.email}?subject=Free%20Estimate%20Request`}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 font-heading text-base font-semibold uppercase tracking-wide text-navy hover:bg-navy/5"
          >
            Email Us
          </a>
        </div>
        {/* TODO(GHL): replace this fallback automatically once GHL_FORM_ID is set in lib/integrations.ts */}
        <p className="mt-4 text-xs text-ink/70">Online estimate form coming soon.</p>
      </div>
    );
  }

  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: "100%", height, border: "none", borderRadius: "0.5rem" }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-form-name={title}
        data-height={height}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={title}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}

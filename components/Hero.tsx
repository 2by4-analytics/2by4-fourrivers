import Image from "next/image";
import { business } from "@/lib/business";
import { CallButton, EstimateButton } from "./Buttons";
import GhlFormEmbed from "./GhlFormEmbed";

/**
 * Reusable hero: a polished navy/gold gradient panel. Text-first so the LCP is
 * the headline (fast on mobile, where Google Ads traffic lands) — the real
 * project photography lives in the service cards and gallery just below.
 *
 * Pass `image` (a /public path) to add a desktop-only photo that fades into the
 * navy on the right half. It's decorative and deliberately NOT the LCP.
 *
 * Pass `formId` (a GHL form ID) to render an inline lead-capture card on the
 * right — used on the home page so cold ad traffic can convert above the fold
 * without a second click (mirrors the Timber Hollow hero). The hero switches to
 * a two-column layout and the call/estimate buttons stay as the no-form path.
 */
export default function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  formId,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  formId?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Depth: layered gradients + a soft gold glow (CSS only, no raster). */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#243152] via-navy to-[#10182b]" />
      <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-gold via-yellow to-gold" />

      {/* Desktop-only photo on the right half, masked to fade into the navy.
          Sits above the gradient divs (-z-10) but below the text column.
          Decorative + no priority, so the headline stays the LCP. */}
      {image && (
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 -z-[5] hidden w-1/2 lg:block"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 55%)",
          }}
        >
          <Image src={image} alt="" fill sizes="50vw" className="object-cover" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:py-28">
        <div className={formId ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-12" : ""}>
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-3 inline-block border-l-4 border-yellow pl-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                {eyebrow}
              </p>
            )}
            <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">{subtitle}</p>}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <EstimateButton href={formId ? "#estimate" : "/contact"}>Get a Free On-Site Estimate</EstimateButton>
              <CallButton variant="outline" />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Call {business.owner.split(" ")[0]} directly — phone answered 24/7.
            </p>
          </div>

          {formId && (
            <div id="estimate" className="scroll-mt-24 rounded-xl border border-gold/40 bg-white p-6 text-ink shadow-2xl ring-1 ring-black/5 md:p-7">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">
                Free Estimate
              </p>
              <h2 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-navy">
                Get your free quote
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                Tell us about your project — {business.owner.split(" ")[0]} follows up personally. No pressure.
              </p>
              <div className="mt-4">
                <GhlFormEmbed formId={formId} height={433} title="Four Rivers Short Form" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

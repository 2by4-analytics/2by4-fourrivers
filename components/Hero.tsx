import { business } from "@/lib/business";
import { CallButton, EstimateButton } from "./Buttons";

/**
 * Reusable hero: a polished navy/gold gradient panel. Text-first so the LCP is
 * the headline (fast on mobile, where Google Ads traffic lands) — the real
 * project photography lives in the service cards and gallery just below.
 */
export default function Hero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Depth: layered gradients + a soft gold glow (CSS only, no raster). */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#243152] via-navy to-[#10182b]" />
      <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 -z-10 h-1 bg-gradient-to-r from-gold via-yellow to-gold" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:py-32">
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
            <EstimateButton>Get a Free On-Site Estimate</EstimateButton>
            <CallButton variant="outline" />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Call {business.owner.split(" ")[0]} directly — phone answered 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}

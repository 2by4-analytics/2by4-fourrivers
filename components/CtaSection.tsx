import { business } from "@/lib/business";
import { CallButton, EstimateButton } from "./Buttons";

/**
 * Reusable "Get a Free On-Site Estimate" band. Drop at the bottom of any page.
 */
export default function CtaSection({
  heading = "Get a Free On-Site Estimate",
  body,
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          {body ??
            `Tell us about your project and we'll come take a look — no charge, no pressure. We do what we say and show up when we say we will. Serving ${business.serviceArea.primaryCity} and ${business.serviceArea.radiusMiles} miles around.`}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EstimateButton>Request My Free Estimate</EstimateButton>
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}

import GhlFormEmbed from "./GhlFormEmbed";
import { CallButton } from "./Buttons";
import { business } from "@/lib/business";

/**
 * "Get your free estimate" block: pitch + phone on the left, GHL form on the right.
 * Used at the bottom of both service pages.
 */
export default function EstimateSection({
  heading = "Get a Free On-Site Estimate",
  body,
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section id="estimate" className="bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            {body ??
              "Tell us about your project and we'll come take a look — no charge, no pressure. You'll get a straight answer and a competitive quote from the people who'll actually do the work."}
          </p>
          <ul className="mt-6 space-y-3 text-ink/85">
            {["Free on-site estimates", "Licensed & insured · workers' comp carried", "Owner answers the phone 24/7"].map(
              (point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ),
            )}
          </ul>
          <div className="mt-7">
            <CallButton variant="ghost" className="border-2 border-navy" label={`Call ${business.phone.display}`} />
          </div>
        </div>

        <div>
          <GhlFormEmbed />
        </div>
      </div>
    </section>
  );
}

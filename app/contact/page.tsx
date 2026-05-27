import type { Metadata } from "next";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import { CallButton } from "@/components/Buttons";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact — Free Estimate in Paducah, KY",
  description:
    "Contact Four Rivers Excavation & Concrete for a free on-site estimate in Paducah & Western Kentucky. Call (270) 709-0762, answered 24/7, or request a quote online.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Get In Touch
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Request a Free Estimate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Serving Paducah and Western Kentucky from our shop in {business.address.city}, KY. Call or send a
            few details and we&apos;ll set up a free, no-pressure on-site estimate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-navy">
              Tell us about your project
            </h2>
            <p className="mt-2 text-ink/80">
              Concrete, excavating, or both — let us know what you need and where, and we&apos;ll be in touch
              shortly.
            </p>
            <div className="mt-6">
              <GhlFormEmbed />
            </div>
          </div>

          {/* NAP + hours */}
          <div>
            <div className="rounded-lg border border-gold/30 bg-sand p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-navy">
                Four Rivers Excavation &amp; Concrete
              </h2>
              <dl className="mt-5 space-y-4 text-ink/85">
                <div>
                  <dt className="font-heading text-xs font-bold uppercase tracking-widest text-goldtext">Phone</dt>
                  <dd className="mt-1">
                    <a href={business.phone.href} data-call-cta className="text-lg font-semibold text-navy hover:text-yellow">
                      {business.phone.display}
                    </a>{" "}
                    <span className="text-sm text-ink/70">— answered 24/7</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-heading text-xs font-bold uppercase tracking-widest text-goldtext">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${business.email}`} className="hover:text-yellow">
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-heading text-xs font-bold uppercase tracking-widest text-goldtext">Shop</dt>
                  <dd className="mt-1">
                    <address className="not-italic">{fullAddress}</address>
                    <span className="text-sm text-ink/70">{business.address.county}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-heading text-xs font-bold uppercase tracking-widest text-goldtext">Hours</dt>
                  <dd className="mt-1">
                    Phone answered 24 hours a day. On-site estimates and work by appointment.
                  </dd>
                </div>
                <div>
                  <dt className="font-heading text-xs font-bold uppercase tracking-widest text-goldtext">Service Area</dt>
                  <dd className="mt-1">
                    {business.serviceArea.primaryCity} + {business.serviceArea.radiusMiles} miles — Western KY,
                    Southern IL, Southeast MO &amp; Northwest TN.
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <CallButton variant="ghost" className="w-full border-2 border-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-area map (keyless Google Maps embed centered on Paducah) */}
      <section aria-label="Service area map" className="border-t border-gold/30">
        <iframe
          title="Four Rivers service area — Paducah, KY"
          src="https://www.google.com/maps?q=Paducah,+KY&z=9&output=embed"
          className="h-[360px] w-full md:h-[440px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

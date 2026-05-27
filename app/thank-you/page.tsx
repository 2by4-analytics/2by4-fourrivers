import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/Buttons";
import { business } from "@/lib/business";

/**
 * Post-submit landing page. The GHL form redirects here with ?form_submitted=1,
 * which is the conversion trigger picked up by GTM/GA4 and Google Ads.
 * Kept out of the sitemap and noindexed (it should only be reached after a submit).
 */
export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out to Four Rivers Excavation & Concrete.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYou() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow text-navy">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <h1 className="mt-6 font-heading text-4xl font-bold uppercase tracking-tight text-navy md:text-5xl">
        Thanks — we&apos;ll be in touch
      </h1>
      <p className="mt-4 text-lg text-ink/80">
        We got your request and will reach out shortly to set up your free on-site estimate. For anything
        urgent, give us a call — {business.owner.split(" ")[0]} answers directly, 24/7.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CallButton variant="ghost" className="border-2 border-navy" />
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border-2 border-navy px-6 py-3 font-heading text-base font-semibold uppercase tracking-wide text-navy hover:bg-navy/5"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

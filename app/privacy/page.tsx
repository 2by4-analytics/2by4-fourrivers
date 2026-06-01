import type { Metadata } from "next";
import { business, fullAddress } from "@/lib/business";

const LAST_UPDATED = "June 1, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Four Rivers Excavation & Concrete collects, uses, and protects your information when you visit the site or request a free estimate.",
  alternates: { canonical: "/privacy" },
};

const h2 = "font-heading text-2xl font-bold uppercase tracking-tight text-navy md:text-3xl";
const h3 = "mt-5 font-heading text-lg font-bold uppercase tracking-tight text-navy";
const linkCls = "font-semibold text-navy underline hover:text-yellow";

export default function Privacy() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Legal
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/70">Effective {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 leading-relaxed text-ink/85 md:px-6 md:py-16">
        <div className="space-y-10">
          <p>
            {business.legalName} (&ldquo;Four Rivers,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This page explains what information we collect through{" "}
            {business.siteUrl.replace("https://", "")}, why we collect it, who we share it with,
            and the choices you have. If anything below is unclear, call{" "}
            <a href={business.phone.href} className={linkCls} data-call-cta>
              {business.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className={linkCls}>
              {business.email}
            </a>
            .
          </p>

          <div>
            <h2 className={h2}>What we collect</h2>
            <h3 className={h3}>Information you give us</h3>
            <p className="mt-2">
              When you fill out a contact or estimate form on this site, we collect what you
              provide — typically your name, phone number, email address, project location, and a
              brief description of the work. We use that information to call you back and prepare
              a free estimate. We don&apos;t sell or rent it.
            </p>
            <h3 className={h3}>Information collected automatically</h3>
            <p className="mt-2">
              When you browse the site, our hosting provider and our analytics tools (Google Tag
              Manager and Google Analytics) automatically log standard web data — pages viewed,
              time of visit, the referring URL, device type, approximate location (city/region
              derived from your IP address), and similar information. This helps us understand how
              the site is used and improve it. If you arrive from an online ad, we record the
              campaign, keyword, or ad that brought you here so we can measure how well our
              advertising is working.
            </p>
            <h3 className={h3}>What we don&apos;t collect</h3>
            <p className="mt-2">
              We don&apos;t collect Social Security numbers or payment-card information on this
              site. Payment for any work we do is handled separately, off this site.
            </p>
          </div>

          <div>
            <h2 className={h2}>How we use it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to your estimate request and discuss your project.</li>
              <li>Follow up on existing customers and past quotes.</li>
              <li>Understand how the site is used and improve our content.</li>
              <li>Measure how our advertising performs so we don&apos;t waste money on what isn&apos;t working.</li>
              <li>Send occasional project updates or appointment confirmations.</li>
            </ul>
          </div>

          <div>
            <h2 className={h2}>Who we share it with</h2>
            <p className="mt-2">
              We share information only with the service providers we use to run the business:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>GoHighLevel</strong> — stores your form submission in our CRM so we can
                follow up and keep track of your project.
              </li>
              <li>
                <strong>Google</strong> (Tag Manager, Analytics, and Ads measurement) — for
                site analytics and ad performance.
              </li>
              <li>
                <strong>Vercel</strong> — hosts the website and keeps standard server logs.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information. We may disclose information if required
              by law (for example, a subpoena or court order) or to protect the safety of our
              crew, customers, or property.
            </p>
          </div>

          <div>
            <h2 className={h2}>Cookies &amp; tracking</h2>
            <p className="mt-2">
              We use Google Tag Manager to load Google Analytics (anonymized site usage) and,
              when an ad campaign is active, Google Ads conversion measurement. These tools may
              set cookies in your browser. You can disable cookies in your browser settings, and
              you can opt out of Google Analytics specifically using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-Out Browser Add-On
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className={h2}>Your choices</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Stop calls or texts:</strong> reply STOP to any text from us, or tell us
                on the phone — we&apos;ll remove your number from our follow-up lists.
              </li>
              <li>
                <strong>Email opt-out:</strong> reply &ldquo;unsubscribe&rdquo; to any email, or
                tell us by phone.
              </li>
              <li>
                <strong>Delete my data:</strong> email{" "}
                <a href={`mailto:${business.email}`} className={linkCls}>
                  {business.email}
                </a>{" "}
                or call{" "}
                <a href={business.phone.href} className={linkCls} data-call-cta>
                  {business.phone.display}
                </a>{" "}
                and we&apos;ll remove your record from our CRM within 30 days, subject to any
                records we&apos;re required to keep for legal or accounting purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className={h2}>California residents</h2>
            <p className="mt-2">
              If you live in California, you have additional rights under the California Consumer
              Privacy Act (CCPA), including the right to know what personal information
              we&apos;ve collected about you and the right to ask us to delete it. Email{" "}
              <a href={`mailto:${business.email}`} className={linkCls}>
                {business.email}
              </a>{" "}
              to make a request. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className={h2}>Children</h2>
            <p className="mt-2">
              This site isn&apos;t directed at children under 13, and we don&apos;t knowingly
              collect personal information from them.
            </p>
          </div>

          <div>
            <h2 className={h2}>Security</h2>
            <p className="mt-2">
              We use standard security practices and rely on the security controls of our
              service providers (Google, Vercel, GoHighLevel). No system is 100% secure, so
              please don&apos;t send sensitive information like Social Security numbers or card
              numbers through the contact form.
            </p>
          </div>

          <div>
            <h2 className={h2}>Changes to this policy</h2>
            <p className="mt-2">
              We may update this policy from time to time as our tools or practices change. The
              &ldquo;effective&rdquo; date at the top tells you when it was last revised.
            </p>
          </div>

          <div>
            <h2 className={h2}>Contact us</h2>
            <address className="mt-3 not-italic">
              {business.legalName}
              <br />
              {fullAddress}
              <br />
              <a href={business.phone.href} className={linkCls} data-call-cta>
                {business.phone.display}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${business.email}`} className={linkCls}>
                {business.email}
              </a>
            </address>
          </div>

          <p className="border-t border-gold/30 pt-6 text-sm text-ink/60">
            This page describes our actual practices in plain English. It isn&apos;t legal
            advice; if you have legal questions about it, contact us.
          </p>
        </div>
      </section>
    </>
  );
}

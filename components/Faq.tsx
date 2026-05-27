import { faqSchema, jsonLd, type FaqItem } from "@/lib/schema";

/**
 * FAQ accordion using native <details>/<summary> (zero JS, fully accessible),
 * and emits FAQPage JSON-LD for rich results / AEO.
 */
export default function Faq({ items, heading = "Frequently Asked Questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-heading text-3xl font-bold uppercase tracking-tight text-navy">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-gold/30 border-y border-gold/30">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-navy marker:content-[''] [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-5 w-5 flex-shrink-0 text-gold transition group-open:rotate-45"
                aria-hidden
              >
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 text-ink/80">{item.answer}</p>
          </details>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(items))} />
    </section>
  );
}

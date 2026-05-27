import Link from "next/link";
import { business } from "@/lib/business";

/**
 * Mobile-only fixed bottom bar: tap-to-call + free estimate.
 * Hidden on md+ (desktop has the header CTAs). Pages add bottom padding so
 * content never hides behind it.
 */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t-2 border-gold bg-navy md:hidden">
      <a
        href={business.phone.href}
        data-call-cta
        className="flex items-center justify-center gap-2 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-yellow py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-navy"
      >
        Free Estimate
      </Link>
    </div>
  );
}

import Link from "next/link";
import { business, fullAddress, rivers } from "@/lib/business";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        {/* Brand + NAP */}
        <div className="md:col-span-2">
          <p className="font-heading text-2xl font-bold uppercase tracking-tight">{business.name}</p>
          <p className="mt-1 text-sm text-gold">Family-owned · Est. {business.foundingYear}</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-white/85">
            <p>{fullAddress}</p>
            <p>
              <a href={business.phone.href} data-call-cta className="font-semibold hover:text-yellow">
                {business.phone.display}
              </a>{" "}
              <span className="text-white/60">· available 24/7</span>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-yellow">
                {business.email}
              </a>
            </p>
          </address>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Named for the four rivers that meet at Paducah — the {rivers.slice(0, 3).join(", ")}, and{" "}
            {rivers[3]}.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-gold">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/concrete-finishing" className="hover:text-yellow">
                Concrete Finishing
              </Link>
            </li>
            <li>
              <Link href="/excavating" className="hover:text-yellow">
                Excavating & Site Work
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-yellow">
                Project Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow">
                Free Estimate
              </Link>
            </li>
          </ul>
        </div>

        {/* Service area */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-gold">Service Area</p>
          <p className="mt-4 text-sm text-white/85">
            Serving {business.serviceArea.primaryCity} and a {business.serviceArea.radiusMiles}-mile radius
            across Western Kentucky, Southern Illinois, Southeast Missouri, and Northwest Tennessee.
          </p>
          <p className="mt-3 text-sm text-white/70">Based in {business.address.city}, {business.address.state}.</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {year} {business.legalName}. Licensed &amp; insured · workers&apos; comp carried.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/privacy" className="hover:text-yellow">Privacy</Link>
            <span aria-hidden>·</span>
            <span>Concrete &amp; excavating contractor · {business.address.city}, Carlisle County, KY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

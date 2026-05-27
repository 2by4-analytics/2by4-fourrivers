"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";
import { EstimateButton } from "./Buttons";

const nav = [
  { href: "/concrete-finishing", label: "Concrete" },
  { href: "/excavating", label: "Excavating" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="rounded-md bg-white p-1 shadow-sm">
            <Image
              src="/logo.png"
              alt={`${business.name} — concrete & excavating in Paducah, KY`}
              width={120}
              height={120}
              className="h-10 w-auto md:h-12"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-heading text-lg font-bold uppercase tracking-tight md:text-xl">
              Four Rivers
            </span>
            <span className="text-xs font-medium text-gold">Paducah & Western KY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-heading text-sm font-medium uppercase tracking-wide transition hover:text-yellow ${
                isActive(item.href) ? "text-yellow" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={business.phone.href}
            data-call-cta
            className="font-heading text-base font-bold tracking-tight text-white hover:text-yellow"
          >
            {business.phone.display}
          </a>
          <EstimateButton className="px-4 py-2 text-sm" />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={business.phone.href}
            data-call-cta
            aria-label={`Call ${business.phone.display}`}
            className="rounded-md bg-yellow p-2 text-navy"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="rounded-md border border-white/30 p-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-white/10 bg-navy px-4 pb-6 pt-2 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/10 py-3 font-heading text-base uppercase tracking-wide ${
                isActive(item.href) ? "text-yellow" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <EstimateButton className="mt-4 w-full" href="/contact" />
        </nav>
      )}
    </header>
  );
}

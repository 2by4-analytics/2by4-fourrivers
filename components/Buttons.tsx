import Link from "next/link";
import { business } from "@/lib/business";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-base font-semibold uppercase tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow";

/** Primary action everywhere: yellow bg, navy text. The single dominant CTA color. */
export function EstimateButton({
  href = "/contact",
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} bg-yellow text-navy shadow-sm hover:brightness-95 ${className}`}>
      {children ?? "Get a Free Estimate"}
    </Link>
  );
}

type CallVariant = "solid" | "outline" | "ghost";

const callVariants: Record<CallVariant, string> = {
  solid: "bg-navy text-white hover:bg-navy/90",
  outline: "border-2 border-white text-white hover:bg-white/10",
  ghost: "text-navy hover:bg-navy/5",
};

/**
 * Phone CTA. Renders a real <a href="tel:…"> so GTM can listen for clicks.
 */
export function CallButton({
  variant = "solid",
  className = "",
  label,
}: {
  variant?: CallVariant;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={business.phone.href}
      data-call-cta
      className={`${base} ${callVariants[variant]} ${className}`}
    >
      <PhoneIcon className="h-4 w-4" aria-hidden />
      {label ?? `Call ${business.phone.display}`}
    </a>
  );
}

function PhoneIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

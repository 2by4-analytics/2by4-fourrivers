import Link from "next/link";
import Image from "next/image";

/**
 * Service teaser card used on the home page (Concrete first, Excavating second).
 */
export default function ServiceCard({
  title,
  href,
  image,
  imageAlt,
  blurb,
  bullets,
  badge,
}: {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  blurb: string;
  bullets: string[];
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-lg border border-gold/30 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={60}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded bg-yellow px-2.5 py-1 font-heading text-xs font-bold uppercase tracking-wide text-navy">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-navy">{title}</h3>
        <p className="mt-2 text-ink/80">{blurb}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink/75">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-navy group-hover:text-yellow">
          View {title}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

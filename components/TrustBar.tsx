import { business } from "@/lib/business";

const items = [
  { stat: `Est. ${business.foundingYear}`, label: "Family-owned" },
  { stat: `${business.projectsCompleted}`, label: "Projects completed" },
  { stat: "Licensed", label: "& fully insured" },
  { stat: "Free", label: "On-site estimates" },
];

/**
 * Trust signals band: est. 2019 · 1,200+ projects · licensed & insured · family-owned.
 */
export default function TrustBar() {
  return (
    <section aria-label="Why homeowners trust Four Rivers" className="border-y border-gold/30 bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold/30 px-4 md:grid-cols-4 md:px-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center px-3 py-6 text-center">
            <span className="font-heading text-2xl font-bold uppercase tracking-tight text-navy md:text-3xl">
              {item.stat}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/70 md:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

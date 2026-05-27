import { business } from "@/lib/business";

const machines = [
  { name: "Cat 259D3", detail: "Compact track loader for grading, hauling & site work" },
  { name: "John Deere 35G", detail: "Mini excavator for tight digs, trenching & footings" },
  { name: "Mini excavator", detail: "~7,500 lb machine for digging and material handling" },
  { name: "Skid steer", detail: "~10,000 lb loader for moving dirt and prepping pads" },
];

/**
 * Equipment + crew credibility block. Shared by both service pages
 * (shines on /excavating, supports /concrete-finishing).
 */
export default function Equipment({
  heading = "Our Equipment",
  intro = "We own and run our own machines — no waiting on rentals or subcontractors. That keeps your project on schedule and the price competitive.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Owned &amp; Operated
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-white/85">{intro}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {machines.map((m) => (
            <div key={m.name} className="rounded-lg border border-white/15 bg-white/5 p-5">
              <p className="font-heading text-xl font-bold uppercase tracking-tight text-yellow">{m.name}</p>
              <p className="mt-1 text-sm text-white/80">{m.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/70">
          Run by a {business.crewSize}-person crew, including owner {business.owner}.
        </p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Faq from "@/components/Faq";
import EstimateSection from "@/components/EstimateSection";
import { business } from "@/lib/business";
import { serviceSchema, jsonLd, type FaqItem } from "@/lib/schema";

const url = `${business.siteUrl}/excavating`;

export const metadata: Metadata = {
  title: "Excavating & Site Work in Paducah, KY",
  description:
    "Excavating, site prep, grading, trenching, land clearing, demolition & pond work in Paducah & Western Kentucky. Four Rivers runs its own equipment. Free on-site estimates.",
  alternates: { canonical: "/excavating" },
  openGraph: {
    title: "Excavating & Site Work in Paducah, KY | Four Rivers",
    description:
      "Site prep, grading, land clearing, demolition & ponds across Western Kentucky. Family-owned, licensed & insured.",
    url,
  },
};

const offerings = [
  { name: "Site preparation", body: "Clearing and prepping a lot or pad so it's ready to build, pour, or set on." },
  { name: "Grading", body: "Leveling, sloping, and shaping ground for drainage, driveways, and building pads." },
  { name: "Trenching", body: "Clean trenches for utilities, water lines, drainage, and footings." },
  { name: "Land clearing", body: "Removing brush, trees, and debris to open up usable ground." },
  { name: "Demolition", body: "Tearing down and hauling off old structures, slabs, and concrete." },
  { name: "Pond construction", body: "Digging and shaping farm and recreational ponds on your property." },
  { name: "Footings excavation", body: "Digging footings and foundations to spec, ready for the concrete crew — us." },
  { name: "Dirt work & hauling", body: "Moving, placing, and hauling dirt and material to get the site right." },
];

const steps = [
  { title: "Walk the site", body: "We come out, look at the ground, talk through access and drainage, and give you a free, competitive estimate." },
  { title: "Plan the dig", body: "We figure out the right approach and the right machine — track loader, skid steer, or mini excavator — for your site." },
  { title: "Do the work", body: "We clear, dig, grade, or haul with our own equipment, keeping the site clean and the job on schedule." },
  { title: "Finish & grade out", body: "We leave the site graded, cleaned up, and ready for the next step — including concrete, if that's next." },
];

const faqs: FaqItem[] = [
  {
    question: "What kind of excavating do you do?",
    answer:
      "All the standard work: site prep, grading, trenching, land clearing, demolition, pond construction, and footings excavation. If it involves moving dirt to get a site ready, we handle it.",
  },
  {
    question: "Can you do both the excavation and the concrete?",
    answer:
      "Yes — that's a big advantage of hiring Four Rivers. We can clear and grade the site, dig the footings, and pour the concrete, so you're not coordinating two separate contractors.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Cunningham, KY and work across Paducah and about 50 miles around — Western Kentucky, plus Southern Illinois, Southeast Missouri, and Northwest Tennessee.",
  },
  {
    question: "Do you build ponds?",
    answer:
      "We do. We dig and shape farm and recreational ponds, and handle the grading and dirt work around them.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Four Rivers Excavating, LLC is licensed and insured and carries workers' compensation, so you're covered while we're on your property.",
  },
];

export default function Excavating() {
  return (
    <>
      <Hero
        eyebrow="Serving Paducah & Western Kentucky"
        title="Excavating & Site Work in Paducah, KY"
        subtitle="Site prep, grading, trenching, land clearing, demolition, and ponds — done with our own equipment, on schedule, at a fair price."
        image="/gallery/excavate-3.jpg"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema({
        name: "Excavating & Site Work",
        description:
          "Excavating and site work in Paducah & Western Kentucky: site preparation, grading, trenching, land clearing, demolition, pond construction, and footings excavation.",
        url,
        serviceType: "Excavating contractor",
        offerings: offerings.map((o) => o.name),
      }))} />

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">Excavating Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
            Dirt work, done right
          </h2>
          <p className="mt-3 text-lg text-ink/80">
            We handle all the standard excavation and site work — and because we own the equipment, you&apos;re
            not waiting on rentals or paying a markup on a subcontractor.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <div key={o.name} className="rounded-lg border border-gold/30 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-navy">{o.name}</h3>
              <p className="mt-2 text-sm text-ink/75">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">How It Works</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Our process
            </h2>
            <p className="mt-3 text-lg text-ink/80">
              Excavation is about doing it right the first time so what comes next sits on solid, well-drained
              ground. Here&apos;s how we approach a job.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-gold/30 bg-white p-6 shadow-sm">
                <span className="font-heading text-4xl font-bold text-goldtext/80">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Equipment />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <Faq items={faqs} heading="Excavating FAQs" />
      </section>

      <EstimateSection
        heading="Need dirt work done?"
        body="Get a free on-site estimate for site prep, grading, clearing, demolition, a pond, or footings. We'll walk the site, give you a straight quote, and show up when we say we will."
      />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Faq from "@/components/Faq";
import { business } from "@/lib/business";
import { GHL_SHORT_FORM_ID } from "@/lib/integrations";
import { serviceSchema, jsonLd, type FaqItem } from "@/lib/schema";

const url = `${business.siteUrl}/concrete-finishing`;

export const metadata: Metadata = {
  title: "Concrete Contractor in Paducah, KY",
  description:
    "Concrete driveways, patios & shop slabs in Paducah & Western Kentucky. Four Rivers pours quality flatwork, stamped/decorative concrete, foundations & pool decks. Free on-site estimates.",
  alternates: { canonical: "/concrete-finishing" },
  openGraph: {
    title: "Concrete Contractor in Paducah, KY | Four Rivers",
    description:
      "Driveways, patios, shop slabs & decorative concrete across Western Kentucky. Family-owned, licensed & insured.",
    url,
  },
};

const offerings = [
  { name: "Driveways", body: "Durable, properly-based concrete driveways that handle Kentucky freeze-thaw and heavy vehicles." },
  { name: "Patios", body: "Backyard patios poured smooth or stamped — built for years of cookouts and gatherings." },
  { name: "Shop & garage slabs", body: "Level, reinforced slabs for shops, garages, and outbuildings, sized to your equipment." },
  { name: "Sidewalks & walkways", body: "Clean, safe walkways and approaches that tie your property together." },
  { name: "Foundations & slabs", body: "Footings and foundation slabs poured to spec for new builds and additions." },
  { name: "Decorative / stamped", body: "Stamped patterns and finishes that give plain concrete the look of stone or brick." },
  { name: "Pool decks", body: "Slip-aware pool decks finished to look good and hold up around water." },
  { name: "Farm & ag concrete", body: "Feed pads, equipment slabs, and ag flatwork built for rural Western Kentucky." },
];

const steps = [
  { title: "Free on-site estimate", body: "We come out, look at the site, talk through what you want, and give you a straight, competitive quote." },
  { title: "Site prep & forming", body: "We grade and prep the base, set forms, and add reinforcement so the pour lasts — not just looks good day one." },
  { title: "Pour & finish", body: "We place, screed, and finish the concrete to the look you chose — broom, smooth, or stamped." },
  { title: "Cure & clean up", body: "We finish edges, handle control joints, clean up the site, and tell you how to care for it while it cures." },
];

const faqs: FaqItem[] = [
  {
    question: "How much does a concrete driveway or patio cost in Paducah?",
    answer:
      "Every job is different, so we don't post flat prices. We'll give you a ballpark over the phone and a free, no-pressure on-site estimate once we see the site. You get an honest, competitive quote — never a vague 'starting at' number.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Cunningham, KY and serve Paducah and roughly 50 miles around — across Western Kentucky and into Southern Illinois, Southeast Missouri, and Northwest Tennessee.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Four Rivers Excavating, LLC is licensed and insured and carries workers' compensation, so you're covered when our crew is on your property.",
  },
  {
    question: "Do you do stamped or decorative concrete?",
    answer:
      "We do. Along with standard driveways, patios, and slabs, we pour stamped and decorative concrete and pool decks when you want a finish with more character.",
  },
  {
    question: "How long until I can use my new concrete?",
    answer:
      "You can usually walk on it within a day or so and drive on it after about a week, depending on weather and the mix. We'll give you exact guidance for your project before we leave.",
  },
];

export default function ConcreteFinishing() {
  return (
    <>
      <Hero
        eyebrow="Serving Paducah & Western Kentucky"
        title="Concrete Contractor in Paducah, KY"
        subtitle="Driveways, patios, and shop slabs are our bread and butter — plus decorative concrete, foundations, and pool decks. Quality flatwork that holds up, at a fair price."
        image="/gallery/concrete-patio.jpg"
        formId={GHL_SHORT_FORM_ID}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema({
        name: "Concrete Finishing & Flatwork",
        description:
          "Residential and light-commercial concrete in Paducah & Western Kentucky: driveways, patios, shop slabs, sidewalks, foundations, decorative/stamped concrete, and pool decks.",
        url,
        serviceType: "Concrete contractor",
        offerings: offerings.map((o) => o.name),
      }))} />

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">Concrete Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
            What we pour
          </h2>
          <p className="mt-3 text-lg text-ink/80">
            Concrete is the heart of what Four Rivers does. We lead with driveways, patios, and shop slabs —
            but we handle the full range of residential and light-commercial flatwork.
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

      {/* Process / what's included */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">How It Works</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Our process — and what&apos;s included
            </h2>
            <p className="mt-3 text-lg text-ink/80">
              Every concrete job includes proper base prep, forming, reinforcement, finishing, and clean-up.
              Here&apos;s how a typical project goes.
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

      <Equipment
        heading="The right equipment for the job"
        intro="We run our own track loader, skid steer, and mini excavators — so we can prep and grade the site ourselves before a single yard of concrete is poured."
      />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <Faq items={faqs} heading="Concrete FAQs" />
      </section>
    </>
  );
}

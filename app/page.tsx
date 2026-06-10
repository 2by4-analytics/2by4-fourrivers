import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import GalleryGrid from "@/components/GalleryGrid";
import CtaSection from "@/components/CtaSection";
import Reviews from "@/components/Reviews";
import { EstimateButton } from "@/components/Buttons";
import { business, rivers } from "@/lib/business";
import { homePreview } from "@/lib/gallery";
import { GHL_SHORT_FORM_ID } from "@/lib/integrations";

const whyPoints = [
  {
    title: "We show up",
    body: "When we say we'll be there, we're there. You get a contractor who keeps his word and a crew that respects your property and your time.",
  },
  {
    title: "Quality that lasts",
    body: "Properly prepped, properly poured, properly finished. We've completed 1,200+ projects and we build every one to hold up to Kentucky weather.",
  },
  {
    title: "Fair, honest pricing",
    body: "Straight answers and competitive quotes — a ballpark over the phone and a free on-site estimate when you're ready. No surprises, no pressure.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Family-Owned · Serving Paducah & Western Kentucky"
        title="Concrete & Excavating Done Right in Paducah, KY"
        subtitle="We do what we say and show up when we say we will — quality work at a competitive price. Family-owned in Cunningham, KY since 2019, with 1,200+ projects completed across Western Kentucky."
        image="/gallery/concrete-pool.jpg"
        formId={GHL_SHORT_FORM_ID}
      />

      <TrustBar />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">
            What We Do
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
            Two trades, one trusted crew
          </h2>
          <p className="mt-3 text-lg text-ink/80">
            Concrete is our bread and butter, and we run our own excavation equipment to handle the dirt
            work too — so your project moves start to finish without juggling contractors.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Concrete"
            href="/concrete-finishing"
            image="/gallery/concrete-patio.jpg"
            imageAlt="Smooth-finished concrete patio installed by Four Rivers near Paducah, KY"
            badge="Most Requested"
            blurb="Driveways, patios, and shop slabs are what we pour most — plus walkways, foundations, pool decks, decorative stamped concrete, and farm concrete."
            bullets={[
              "Driveways, patios & shop slabs",
              "Sidewalks, walkways & foundations",
              "Stamped / decorative & pool decks",
            ]}
          />
          <ServiceCard
            title="Excavating"
            href="/excavating"
            image="/gallery/excavate-1.jpg"
            imageAlt="Excavation and site preparation work near Paducah, Kentucky"
            blurb="From clearing a lot to grading a pad, we own the equipment to do all standard excavation and site work across the region."
            bullets={[
              "Site prep, grading & trenching",
              "Land clearing & demolition",
              "Ponds & footings excavation",
            ]}
          />
        </div>
      </section>

      {/* Why Four Rivers */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">
              Why Four Rivers
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              A contractor you&apos;d trust, not a marketer
            </h2>
            <p className="mt-3 text-lg text-ink/80">
              {business.owner} has been in the trade since age 14 and family-owned since 2019. Here&apos;s
              what that means for your project.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyPoints.map((point, i) => (
              <div key={point.title} className="rounded-lg border border-gold/30 bg-white p-6 shadow-sm">
                <span className="font-heading text-4xl font-bold text-goldtext/80">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-navy">
                  {point.title}
                </h3>
                <p className="mt-2 text-ink/80">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">
              Recent Work
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              See the work for yourself
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-heading text-sm font-semibold uppercase tracking-wide text-navy hover:text-yellow"
          >
            View full gallery →
          </Link>
        </div>
        <div className="mt-8">
          <GalleryGrid photos={homePreview} />
        </div>
      </section>

      {/* Service area */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-goldtext">
              Service Area
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Four rivers, one region we know cold
            </h2>
            <p className="mt-4 text-lg text-ink/80">
              We&apos;re named for the four rivers that meet at Paducah — the {rivers[0]}, {rivers[1]},{" "}
              {rivers[2]}, and {rivers[3]}. From our shop in {business.address.city}, {business.address.state},
              we serve {business.serviceArea.primaryCity} and roughly {business.serviceArea.radiusMiles} miles
              in every direction: across Western Kentucky and into Southern Illinois, Southeast Missouri, and
              Northwest Tennessee.
            </p>
            <div className="mt-6">
              <EstimateButton href="/contact">Get a Free Estimate</EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews slot — renders nothing until a GBP place ID is configured. */}
      <Reviews />

      <CtaSection />
    </>
  );
}

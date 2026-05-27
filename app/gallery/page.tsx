import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CtaSection from "@/components/CtaSection";
import { photos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Project Gallery — Concrete & Excavating in Paducah, KY",
  description:
    "See concrete driveways, patios, slabs, and excavation projects completed by Four Rivers across Paducah & Western Kentucky.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Our Work
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Project Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            A look at concrete and excavating projects we&apos;ve completed around Paducah and Western
            Kentucky. More high-resolution and before/after photos are on the way.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <GalleryGrid photos={photos} grouped />
      </section>

      <CtaSection />
    </>
  );
}

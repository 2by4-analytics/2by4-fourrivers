import Image from "next/image";
import type { Photo, Category } from "@/lib/gallery";

function Grid({ items }: { items: Photo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {items.map((photo) => (
        <figure
          key={photo.src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 bg-sand"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            quality={60}
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}

/**
 * Project gallery. `grouped` splits into Concrete / Excavating sections (gallery page);
 * otherwise renders a single flat grid (home preview).
 */
export default function GalleryGrid({ photos, grouped = false }: { photos: Photo[]; grouped?: boolean }) {
  if (!grouped) return <Grid items={photos} />;

  const categories: Category[] = ["Concrete", "Excavating"];
  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const items = photos.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <h2 className="mb-5 font-heading text-2xl font-bold uppercase tracking-tight text-navy">
              {cat === "Concrete" ? "Concrete Work" : "Excavating & Site Work"}
            </h2>
            <Grid items={items} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Gallery photo manifest. Starter set from Laramie (Facebook).
 * To add photos: drop the file in /public/gallery and add an entry here.
 * Keep alt text descriptive and honest — include the service + "Paducah"/"Western Kentucky" where true.
 *
 * Note: concrete-patio-3.jpg from the source set was a byte-identical dupe of
 * concrete-patio.jpg and was intentionally not copied in.
 * TODO: swap in high-res originals + before/after pairs when Laramie sends them.
 */

export type Category = "Concrete" | "Excavating";

export type Photo = {
  src: string;
  alt: string;
  category: Category;
};

export const photos: Photo[] = [
  {
    src: "/gallery/concrete-drive.jpg",
    alt: "Freshly poured concrete driveway with clean edges by Four Rivers near Paducah, KY",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-drive-2.jpg",
    alt: "Finished residential concrete driveway in Western Kentucky",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-patio.jpg",
    alt: "Smooth-finished backyard concrete patio installed in the Paducah, KY area",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-patio-2.jpg",
    alt: "Concrete patio slab poured by the Four Rivers crew in Western Kentucky",
    category: "Concrete",
  },
  {
    src: "/gallery/crane1.jpg",
    alt: "Four Rivers crew finishing a large concrete slab at dusk with a concrete pump truck near Paducah, KY",
    category: "Concrete",
  },
  {
    src: "/gallery/crane2.jpg",
    alt: "Concrete pump truck and crew placing a large slab on a prepared gravel base in Western Kentucky",
    category: "Concrete",
  },
  {
    src: "/gallery/walkway.jpg",
    alt: "Exposed-aggregate concrete walkway curving alongside a home in the Paducah, KY area",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-walkway.jpg",
    alt: "Concrete walkway and sidewalk poured near Paducah, KY",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-pool.jpg",
    alt: "Concrete pool deck installed by Four Rivers in Western Kentucky",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-farm.jpg",
    alt: "Agricultural farm concrete slab poured in rural Western Kentucky",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-in-progress.jpg",
    alt: "Concrete slab being placed and finished by the Four Rivers crew near Paducah, KY",
    category: "Concrete",
  },
  {
    src: "/gallery/concrete-in-progress-2.jpg",
    alt: "Wet concrete being screeded and floated during a Western Kentucky pour",
    category: "Concrete",
  },
  {
    src: "/gallery/excavate-1.jpg",
    alt: "Excavation and site preparation work with a compact track loader near Paducah, KY",
    category: "Excavating",
  },
  {
    src: "/gallery/excavate-2.jpg",
    alt: "Land grading and dirt work by Four Rivers in Western Kentucky",
    category: "Excavating",
  },
  {
    src: "/gallery/excavate-3.jpg",
    alt: "Compact track loader on a freshly graded site during excavation work near Paducah, KY",
    category: "Excavating",
  },
  {
    src: "/gallery/dirt.jpg",
    alt: "Graded dirt and site preparation for a new pad in Western Kentucky",
    category: "Excavating",
  },
];

/** First N photos for the homepage preview (concrete-led). */
export const homePreview = photos.filter((p) => p.category === "Concrete").slice(0, 4)
  .concat(photos.filter((p) => p.category === "Excavating").slice(0, 2));

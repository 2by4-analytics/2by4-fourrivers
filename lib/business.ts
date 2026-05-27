/**
 * Single source of truth for Four Rivers business facts (NAP + constants).
 * Import from here everywhere — never hard-code the phone, address, etc. twice.
 */

export const business = {
  /** Public-facing brand name (leads with both services, surfaces "Concrete"). */
  name: "Four Rivers Excavation & Concrete",
  /** Legal entity — footer / legal use only. Note: legal "Excavating" vs brand "Excavation". */
  legalName: "Four Rivers Excavating, LLC",
  foundingYear: "2019",
  owner: "Laramie Gaither",

  phone: {
    /** Human-readable, for display. */
    display: "(270) 709-0762",
    /** E.164, for tel: links. Rings 24/7. */
    href: "tel:+12707090762",
    e164: "+12707090762",
  },

  email: "Laramie1601@gmail.com",

  /** Shop / registered address (Carlisle County). */
  address: {
    street: "2413 Lowes Rd",
    city: "Cunningham",
    state: "KY",
    zip: "42035",
    county: "Carlisle County",
    country: "US",
  },

  /**
   * Approximate geo-coords for Cunningham, KY (shop location).
   * TODO: verify exact geocode of 2413 Lowes Rd against Google Maps before launch.
   */
  geo: {
    latitude: 36.9217,
    longitude: -88.952,
  },

  /** Primary market + radius. */
  serviceArea: {
    primaryCity: "Paducah, KY",
    radiusMiles: 50,
    blurb: "Paducah & Western Kentucky",
  },

  /** Trust anchors. */
  projectsCompleted: "1,200+",
  crewSize: 4,

  /** Quote-only. Never show "starting at $X" pricing. */
  priceRange: "$$",

  /** Social / sameAs for schema. */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100064041702758",
  },

  /** Production domain (being purchased; alias the Vercel project to it). */
  siteUrl: "https://fourriversconcrete.com",
} as const;

/** The four rivers converging at Paducah — regional brand hook. */
export const rivers = ["Ohio", "Tennessee", "Cumberland", "Mississippi"] as const;

/**
 * Counties within ~50 miles of Paducah, by state. Used for areaServed + copy.
 */
export const serviceCounties = {
  westernKentucky: [
    "McCracken",
    "Carlisle",
    "Ballard",
    "Graves",
    "Marshall",
    "Livingston",
    "Lyon",
    "Crittenden",
    "Fulton",
    "Hickman",
  ],
  southernIllinois: ["Massac", "Pulaski", "Alexander", "Pope", "Hardin", "Johnson", "Union"],
  southeastMissouri: ["Mississippi", "New Madrid", "Stoddard", "Scott"],
  northwestTennessee: ["Lake", "Obion", "Weakley", "Henry"],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

/**
 * JSON-LD generators. Emitted via <script type="application/ld+json"> in pages/layout.
 * Validate with Google Rich Results test after deploy.
 */
import { business, serviceCounties } from "./business";

const allCounties = [
  ...serviceCounties.westernKentucky.map((c) => `${c} County, KY`),
  ...serviceCounties.southernIllinois.map((c) => `${c} County, IL`),
  ...serviceCounties.southeastMissouri.map((c) => `${c} County, MO`),
  ...serviceCounties.northwestTennessee.map((c) => `${c} County, TN`),
];

const ORG_ID = `${business.siteUrl}/#business`;

/**
 * Site-wide LocalBusiness node (HomeAndConstructionBusiness subtype).
 * Geo-pinned hard to Cunningham/Paducah KY to disambiguate from the OR namesake.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    url: business.siteUrl,
    telephone: business.phone.e164,
    email: business.email,
    image: `${business.siteUrl}/logo.jpg`,
    logo: `${business.siteUrl}/logo.jpg`,
    foundingDate: business.foundingYear,
    priceRange: business.priceRange,
    description:
      "Family-owned concrete and excavating contractor serving Paducah and Western Kentucky since 2019. Driveways, patios, shop slabs, site prep, grading, and land clearing. Licensed and insured.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Paducah", containedInPlace: { "@type": "State", name: "Kentucky" } },
      ...allCounties.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        // Paducah, KY — the market center (radius extends 50 mi out).
        latitude: 37.0834,
        longitude: -88.6,
      },
      geoRadius: `${business.serviceArea.radiusMiles * 1609}`, // meters
    },
    sameAs: [business.social.facebook],
    knowsAbout: [
      "Concrete driveways",
      "Concrete patios",
      "Shop slabs",
      "Excavating",
      "Site preparation",
      "Land clearing",
    ],
  };
}

/**
 * Per-service-page Service node, tied back to the LocalBusiness provider.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  offerings: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Paducah", containedInPlace: { "@type": "State", name: "Kentucky" } },
      ...allCounties.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: opts.name,
      itemListElement: opts.offerings.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };
}

export type FaqItem = { question: string; answer: string };

/**
 * FAQPage node — AEO win on service pages.
 */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Helper to render any schema object as a JSON-LD script tag prop. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}

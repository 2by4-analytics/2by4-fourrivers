import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { GtmScript, GtmNoScript } from "@/components/Gtm";
import { business } from "@/lib/business";
import { localBusinessSchema, jsonLd } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Concrete & Excavating in Paducah, KY`,
    template: `%s | ${business.name}`,
  },
  description:
    "Family-owned concrete and excavating contractor serving Paducah & Western Kentucky since 2019. Driveways, patios, shop slabs, site prep, and grading. Licensed & insured — free on-site estimates.",
  applicationName: business.name,
  authors: [{ name: business.name }],
  keywords: [
    "concrete contractor Paducah KY",
    "concrete driveways Paducah",
    "excavating Paducah KY",
    "site prep Western Kentucky",
    "stamped concrete Paducah",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | Concrete & Excavating in Paducah, KY`,
    description:
      "Concrete & excavating done right in Paducah & Western Kentucky. Family-owned since 2019. Free on-site estimates.",
    images: [{ url: "/logo.jpg", width: 1254, height: 1254, alt: business.name }],
  },
  twitter: {
    card: "summary",
    title: `${business.name} | Paducah, KY`,
    description:
      "Concrete & excavating done right in Paducah & Western Kentucky. Family-owned since 2019.",
    images: ["/logo.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <GtmNoScript />
        <GtmScript />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-yellow focus:px-4 focus:py-2 focus:font-heading focus:text-navy"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
      </body>
    </html>
  );
}

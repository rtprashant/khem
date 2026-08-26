// Self-hosted fonts — no external font CDN, works on static hosting
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import { site } from "@/data/site";

const fontVars = "font-vars";
// Keep every canonical signal on the same public origin. Set NEXT_PUBLIC_SITE_URL
// when a custom domain is connected; the current Vercel URL is the safe fallback.
const siteUrl = (
  "https://khemtattoo.com" || "https://khem-s5sr.vercel.app"
).replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tattoo Studio in Gurgaon | Khem Tattoo & Piercing",
    template: `%s — Khem Tattoo & Piercing`,
  },
  description:
    "Custom tattoos, hyper-realism, fine-line tattoos and professional body piercing in Gurgaon. Visit Khem Tattoo at MGF Metropolis Mall, Sector 28, Gurgaon.",
  keywords: [
    "tattoo artist in Gurgaon",
    "tattoo studio in Gurgaon",
    "tattoo shop in Gurgaon",
    "tattoo artist Gurgaon",
    "piercing studio Gurgaon",
    "tattoo and piercing Gurgaon",
    "custom tattoo Gurgaon",
    "realism tattoo Gurgaon",
    "colour tattoo Gurgaon",
    "Khem tattoo",
    "Khem piercing",
    "MGF Metropolis Mall tattoo",
    "fine line tattoo Gurgaon",
    "black and grey tattoo Gurgaon",
    "hyper realism tattoo artist Gurgaon",
    "tattoo studio Sector 28 Gurgaon",
    "piercing studio Sector 28 Gurgaon",
    "custom tattoo near MGF Metropolis Mall",
  ],
  openGraph: {
    title: "Tattoo Studio in Gurgaon | Khem Tattoo & Piercing",
    description:
      "Custom tattoos, hyper-realism, fine-line tattoos and professional body piercing at MGF Metropolis Mall, Sector 28, Gurgaon.",
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-tattoo.webp",
        width: 1200,
        height: 630,
        alt: "Black and grey portrait tattoo created by Khem Tattoo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Studio in Gurgaon | Khem Tattoo & Piercing",
    description:
      "Custom tattoos and professional body piercing at MGF Metropolis Mall, Sector 28, Gurgaon.",
    images: ["/hero-tattoo.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/KHEM%20Tattoo%20%26%20Piercing%20Emblem.webp",
        type: "image/webp",
        sizes: "1280x1280",
      },
    ],
    apple: "/KHEM%20Tattoo%20%26%20Piercing%20Emblem.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness + TattooParlor structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TattooParlor"],
    name: site.name,
    description: site.description,
    telephone: "+916294458070",
    url: siteUrl,
    logo: `${siteUrl}/KHEM%20Tattoo%20%26%20Piercing%20Emblem.webp`,
    image: `${siteUrl}/hero-tattoo.webp`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. LG 41, Lower Ground Floor, Near Spar, MGF Metropolis Mall, Maruti Vihar, Sector 28",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    openingHours: ["Mo-Su 11:00-22:00"],
    sameAs: [site.instagram],
    hasMap: site.mapsUrl,
    areaServed: ["Gurgaon", "Gurgaon", "Delhi NCR"],
    knowsAbout: [
      "Custom tattoos",
      "Hyper-realism tattoos",
      "Fine-line tattoos",
      "Colour tattoos",
      "Body piercing",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4665",
      longitude: "77.0468",
    },
  };

  return (
    <html lang="en" className={fontVars}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-ivory focus:text-charcoal focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

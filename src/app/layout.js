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
const siteUrl = "https://www.khemtattoo.in"; // Update to real domain when deployed

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Khem Tattoo & Piercing — Custom Tattoo Studio in Gurugram`,
    template: `%s — Khem Tattoo & Piercing`,
  },
  description:
    "Khem Tattoo & Piercing is a premium tattoo and piercing studio in Gurugram, Haryana. 8+ years experience, 5.0★ on Google (373+ reviews). Custom tattoos, realism, colour tattoos, fine line & professional body piercing at MGF Metropolis Mall.",
  keywords: [
    "tattoo artist in Gurugram",
    "tattoo studio in Gurugram",
    "tattoo shop in Gurgaon",
    "tattoo artist Gurgaon",
    "piercing studio Gurugram",
    "tattoo and piercing Gurgaon",
    "custom tattoo Gurugram",
    "realism tattoo Gurgaon",
    "colour tattoo Gurgaon",
    "Khem tattoo",
    "Khem piercing",
    "MGF Metropolis Mall tattoo",
    "fine line tattoo Gurugram",
    "black and grey tattoo Gurugram",
  ],
  openGraph: {
    title: "Khem Tattoo & Piercing — Custom Tattoo Studio, Gurugram",
    description:
      "Premium tattoo & piercing studio in Gurugram. 8+ years experience. 5.0★ Google rating (373+ reviews). Custom realism, colour tattoos & professional body piercing.",
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khem Tattoo & Piercing — Custom Tattoo Studio, Gurugram",
    description:
      "Premium tattoo & piercing studio in Gurugram. 8+ years experience. 5.0★ Google rating.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/KHEM%20Tattoo%20%26%20Piercing%20Emblem.png",
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
    image: `${siteUrl}/tattoo/IMG_2090.webp`,
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "373",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. LG 41, Lower Ground Floor, Near Spar, MGF Metropolis Mall, Maruti Vihar, Sector 28",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    openingHours: ["Mo-Su 11:00-22:00"],
    sameAs: [site.instagram],
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

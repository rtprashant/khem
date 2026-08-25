import ServiceLandingPage from "@/components/ServiceLandingPage";
import JsonLd from "@/components/JsonLd";

const siteUrl = "https://khemtattoo.com";
const title = "Professional Piercing in Gurgaon | Khem Tattoo & Piercing";
const description = "Book professional ear, nose and body piercing with precise placement, sterile technique and personal styling at Khem Studio in Sector 28, Gurgaon.";

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ["piercing studio Gurgaon", "ear piercing Gurgaon", "nose piercing Gurgaon", "body piercing Gurgaon", "professional piercer Gurgaon", "ear curation Gurgaon"],
  alternates: { canonical: "/piercing" },
  openGraph: {
    title,
    description,
    url: "/piercing",
    siteName: "Khem Tattoo & Piercing",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/piercing/IMG_4991.webp", alt: "Professional ear piercing by Khem Studio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/piercing/IMG_4991.webp"] },
  robots: { index: true, follow: true },
};

export default function PiercingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Professional Piercing Services",
        serviceType: "Professional ear, nose and body piercing",
        url: `${siteUrl}/piercing`,
        provider: { "@type": "LocalBusiness", name: "Khem Tattoo & Piercing", url: siteUrl },
        areaServed: { "@type": "City", name: "Gurgaon" },
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Khem Tattoo & Piercing", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Professional Piercing", item: `${siteUrl}/piercing` },
        ],
      },
    ],
  };

  return <><JsonLd data={jsonLd} /><ServiceLandingPage service="piercing" /></>;
}

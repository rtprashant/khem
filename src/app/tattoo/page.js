import ServiceLandingPage from "@/components/ServiceLandingPage";
import JsonLd from "@/components/JsonLd";

const siteUrl = "https://khemtattoo.com";
const title = "Tattoo Studio in Gurgaon | Khem Tattoo & Piercing";
const description = "Get custom tattoos, realism, fine-line work and cover-ups from experienced tattoo artists at Khem Tattoo Studio in Sector 28, Gurgaon.";

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ["tattoo studio in Gurgaon", "tattoo artist in Gurgaon", "custom tattoo Gurgaon", "realism tattoo Gurgaon", "fine line tattoo Gurgaon", "cover up tattoo Gurgaon"],
  alternates: { canonical: "/tattoo" },
  openGraph: {
    title,
    description,
    url: "/tattoo",
    siteName: "Khem Tattoo & Piercing",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/hero-tattoo.webp", alt: "Custom black and grey tattoo by Khem Tattoo Studio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/hero-tattoo.webp"] },
  robots: { index: true, follow: true },
};

export default function TattooPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Custom Tattoo Services",
        serviceType: "Custom tattoo design and tattooing",
        url: `${siteUrl}/tattoo`,
        provider: { "@type": "TattooParlor", name: "Khem Tattoo & Piercing", url: siteUrl },
        areaServed: { "@type": "City", name: "Gurgaon" },
        description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Khem Tattoo & Piercing", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Tattoo Studio", item: `${siteUrl}/tattoo` },
        ],
      },
    ],
  };

  return <><JsonLd data={jsonLd} /><ServiceLandingPage service="tattoo" /></>;
}

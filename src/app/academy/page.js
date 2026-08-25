import Navbar from "@/components/Navbar";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const siteUrl = "https://khemtattoo.com";
const title = "Tattoo Training in Gurgaon | Khem Academy";
const description = "Learn tattoo fundamentals, hygiene, machine handling, linework, shading and professional studio practice through artist-led tattoo training in Gurgaon.";

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ["tattoo training Gurgaon", "tattoo course Gurgaon", "tattoo academy Gurgaon", "learn tattooing Gurgaon", "tattoo artist course Delhi NCR"],
  alternates: { canonical: "/academy" },
  openGraph: {
    title,
    description,
    url: "/academy",
    siteName: "Khem Tattoo & Piercing",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/academy-hero.webp", alt: "Tattoo training at Khem Academy in Gurgaon" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/academy-hero.webp"] },
  robots: { index: true, follow: true },
};

export default function AcademyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Khem Academy",
        url: `${siteUrl}/academy`,
        description,
        parentOrganization: { "@type": "Organization", name: "Khem Tattoo & Piercing", url: siteUrl },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No. LG 41, Lower Ground Floor, MGF Metropolis Mall, Sector 28",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          postalCode: "122002",
          addressCountry: "IN",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Khem Tattoo & Piercing", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Khem Academy", item: `${siteUrl}/academy` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
      <Navbar />
      <Academy />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Tattoo Training in Gurgaon | Khem Academy",
    description:
        "Artist-led tattoo education in Gurgaon. Build fundamentals, advanced technique, studio discipline, and a professional pathway at Khem Academy.",
    alternates: { canonical: "/academy" },
    openGraph: {
        title: "Tattoo Training in Gurgaon | Khem Academy",
        description:
            "Artist-led tattoo training in Gurgaon covering fundamentals, advanced technique and professional studio practice.",
        url: "/academy",
        images: ["/academy-hero.webp"],
    },
};

export default function AcademyPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Academy />
            <Footer />
        </div>
    );
}

import Navbar from "@/components/Navbar";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Khem Academy | Learn Tattooing in Gurugram",
    description:
        "Artist-led tattoo education in Gurugram. Build fundamentals, advanced technique, studio discipline, and a professional pathway at Khem Academy.",
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
"use client";

import Navbar from "@/components/Navbar";
import EntryExperience from "@/components/EntryExperience";
import WhyKhem from "@/components/WhyKhem";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import TheArtist from "@/components/TheArtist";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function ServiceLandingPage({ service }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div id="home-section" className="relative z-10 min-h-[100svh] w-full bg-ink">
        <EntryExperience service={service} />
      </div>
      <div id="main-content" className="relative z-20 overflow-hidden bg-ivory">
        <main>
          <WhyKhem service={service} />
          <Portfolio service={service} />
          <Reviews />
          <TheArtist />
          <Visit />
          <Contact />
          <Footer />
        </main>
      </div>
      <FloatingContact />
    </div>
  );
}

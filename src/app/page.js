"use client";

import Navbar from "@/components/Navbar";
import EntryExperience from "@/components/EntryExperience";
import WhyKhem from "@/components/WhyKhem";
import Portfolio from "@/components/Portfolio";
import TheArtist from "@/components/TheArtist";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Sticky navigation — adapts colors between dark/light sections */}
      <Navbar />

      {/* ── DARK ZONE ────────────────────────────────────────────────────────── */}
      {/* Hero: full-viewport dark immersive experience */}
      <div id="home-section" className="relative z-10 min-h-[100svh] w-full bg-ink">
        <EntryExperience />
      </div>

      {/* ── LIGHT ZONE ───────────────────────────────────────────────────────── */}
      {/* The main content surface lifts up over the hero with a dark shadow */}
      <div
        id="main-content"
        className="relative z-20 overflow-hidden bg-ivory shadow-[0_-30px_100px_rgba(0,0,0,0.98)] border-t border-bone/20"
      // className="relative z-20 overflow-hidden rounded-t-[40px] sm:rounded-t-[56px] bg-ivory shadow-[0_-30px_100px_rgba(0,0,0,0.98)] border-t border-bone/20"
      >
        <main>
          {/* Why Khem — studio story + stats */}
          <WhyKhem />

          {/* Reviews — 5.0★ · 373+ Google Reviews */}
          <Reviews />

          {/* Portfolio — Tattoo / Piercing toggle gallery */}
          <Portfolio />

          {/* The Artist — Khem profile */}
          <TheArtist />

          {/* Visit / Contact — dual section */}
          <Visit />
          <Contact />

          {/* Footer */}
          <Footer />
        </main>
      </div>

      {/* Floating mobile contact (WhatsApp + Call) */}
      <FloatingContact />
    </div>
  );
}

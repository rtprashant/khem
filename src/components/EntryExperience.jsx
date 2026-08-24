"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, MessageCircle, Phone, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

export default function EntryExperience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Content fades out as user scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-8%"]);

  const scrollToContent = () => {
    const main = document.getElementById("main-content");
    if (main) main.scrollIntoView();
    else window.scrollTo({ top: window.innerHeight });
  };

  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[100svh] w-full flex-col overflow-hidden bg-ink grain select-none"
    >
      {/* Full-bleed studio artwork gives the opening a tactile, crafted character. */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: imageY }}
      >
          <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
            <Image
              src="/ChatGPT%20Image%20Aug%2023%2C%202026%2C%2011_46_35%20PM.png"
              alt="Tattoo artwork background"
              fill
              priority
              sizes="100vw"
              className="scale-105 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-transparent to-ink/90" />
        </div>
      </motion.div>

      {/* Grain texture on top */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-between px-6 pb-8 pt-16 sm:py-16"
      >
        {/* Top — Location & Tagline */}
        {/* <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 border-b border-burgundy/60 pb-3 font-mono text-[11px] uppercase tracking-wide3 text-bone/85"
        >
          <span>{site.location}</span>
          <span className="inline-block h-1 w-1 rounded-full bg-burgundy" />
          <span>Custom Studio</span>
        </motion.div> */}

        {/* Center — Main Typography */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.05 }}
          >
            <h1 className="hero-title hero-khem-title font-display text-[22vw] text-bone sm:text-[16vw] md:text-[13vw] lg:text-[9.5rem] xl:text-[11rem]">
              KHEM
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-3 font-subheading text-[3.5vw] font-semibold tracking-[0.12em] uppercase text-bone/85 sm:text-base"
          >
            Tattoo &amp; Piercing Studio
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-2 font-mono text-[2.5vw] font-semibold tracking-wide text-bone/55 sm:text-xs"
          >
            Where your vision meets expert hands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease }}
            className="mt-8 sm:mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-wide2 text-ink shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-bone hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:min-w-[200px]"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-wide2 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 sm:min-w-[200px]"
            >
              Explore Work
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Social/Contact quick links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            aria-label="Direct Studio Contact"
            className="flex items-center gap-6 font-mono text-xs font-semibold uppercase tracking-wide2 text-bone/70"
          >
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-bone"
              aria-label="Call Khem Tattoo"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>Call</span>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-bone"
              aria-label="Khem Tattoo on Instagram"
            >
              <Instagram size={13} strokeWidth={1.5} />
              <span>Instagram</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-bone"
              aria-label="WhatsApp Khem Tattoo"
            >
              <MessageCircle size={13} strokeWidth={1.5} />
              <span>WhatsApp</span>
            </a>
          </motion.nav>

          {/* Scroll CTA */}
          <motion.button
            type="button"
            onClick={scrollToContent}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="group flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wide2 text-bone/70 hover:text-bone cursor-pointer"
            aria-label="Scroll to enter studio gallery"
          >
            <span>Scroll to Enter</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-bone group-hover:bg-bone/10"
            >
              <ArrowDown size={12} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
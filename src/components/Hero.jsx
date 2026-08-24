"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import PlaceholderArt from "./PlaceholderArt";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <PlaceholderArt tone={2} label="hero photograph" className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />

      <div className="container-khem relative z-10 pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 text-bone/70"
        >
          {site.location} — Custom Tattoo &amp; Piercing Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[13vw] leading-[0.92] tracking-tightest2 text-bone sm:text-7xl lg:text-8xl"
        >
          Your story,
          <br />
          <span className="italic">permanently.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
        >
          <a
            href="#contact"
            className="rounded-full bg-bone px-7 py-3.5 font-sans text-[13px] uppercase tracking-wide2 text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Book a Consultation
          </a>
          <a
            href="#work"
            className="group flex items-center gap-2 font-sans text-[13px] uppercase tracking-wide2 text-bone/85"
          >
            Explore Our Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              <ArrowDown size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

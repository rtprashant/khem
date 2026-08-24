"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-khem grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal lg:order-2 shadow-xl"
        >
          <img
            src="/tattoo/KHM01034.webp"
            alt="Khem Tattoo & Piercing Studio"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] uppercase tracking-wide3 text-bone/80 bg-ink/60 px-3 py-1 rounded backdrop-blur-sm">
            Khem Studio • Gurugram
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:order-1"
        >
          <p className="eyebrow mb-4">About Khem</p>
          <blockquote className="font-display text-3xl leading-[1.15] tracking-tightest2 sm:text-5xl text-charcoal">
            "Your tattoo and piercing should feel like they belonged to you before they were ever made."
          </blockquote>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Khem exists for people who want body art that means something specific to them — not a
            design lifted from somewhere else. Every piece starts as a conversation, not a
            transaction, and the studio is built to protect that: unhurried consultations,
            meticulous hygiene, and artists who care as much about the idea as the craft.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

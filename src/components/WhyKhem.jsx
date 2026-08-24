"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const revealVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const WHY_CARDS = [
  {
    title: "8+ Years Expertise",
    body: "Led by Khem, an experienced tattooist and professional piercer with over 8 years in the body art industry.",
  },
  {
    title: "Precision & Realism",
    body: "Known for precision, realism, colour tattoos, creativity, and a deep understanding of client needs.",
  },
  {
    title: "Safe & Welcoming",
    body: "Exceptional custom tattoos and safe, hygienic piercings in a welcoming studio environment.",
  },
];

export default function WhyKhem() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <section id="why-khem" className="bg-ivory py-24 sm:py-36 overflow-hidden">
      <div className="container-khem">
        <div className="mb-14 sm:mb-16">
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Khem
          </motion.p>
          <motion.h2
            className="font-display text-[11vw] leading-[0.9] tracking-tightest2 text-charcoal sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            More than ink.
            <br />
            <em className="not-italic text-gold">A piece of you.</em>
          </motion.h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4 border border-charcoal/10 bg-ivory-deep p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl tracking-tightest2 text-charcoal sm:text-3xl">
                {card.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-charcoal/75 sm:text-base">
                {card.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4"
          custom={3}
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {site.stats.map((stat, i) => (
            <div
              key={i}
              className="border border-charcoal/10 bg-charcoal p-5 text-center sm:p-6"
            >
              <p className="font-display text-2xl tracking-tightest2 text-bone sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-wide2 text-bone/55 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          custom={4}
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3.5 font-sans text-[12px] font-bold uppercase tracking-wide2 text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal/90"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}

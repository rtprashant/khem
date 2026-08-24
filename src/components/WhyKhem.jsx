"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";

const revealVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function WhyKhem() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <section id="why-khem" className="bg-ivory py-24 sm:py-36 overflow-hidden">
      <div className="container-khem">
        {/* Editorial heading */}
        <div className="mb-16 sm:mb-20">
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
            <em className="not-italic text-burgundy">A piece of you.</em>
          </motion.h2>
        </div>

        <div className="grid w-full gap-12 lg:grid-cols-[1fr,0.85fr] lg:items-stretch lg:gap-16">
          <div className="flex w-full flex-col gap-10">
            <motion.div
              custom={0}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="max-w-none font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
                Khem Tattoo &amp; Piercing is led by Khem, an experienced
                tattooist and professional piercer with over{" "}
                <strong className="text-charcoal font-semibold">
                  8 years of expertise
                </strong>{" "}
                in the body art industry.
              </p>
              <p className="mt-4 max-w-none font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
                Known for precision, realism, colour tattoos, creativity, and a
                deep understanding of client needs, Khem delivers exceptional
                custom tattoos and safe, hygienic piercings in a welcoming
                studio environment.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-4 gap-2 border-t border-charcoal/10 pt-8 sm:gap-6"
              custom={1}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {site.stats.map((stat, i) => (
                <div key={i} className="min-w-0">
                  <p className="font-display text-2xl tracking-tightest2 text-charcoal sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-[0.12em] text-charcoal/50 sm:text-[11px] sm:tracking-wide2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={2}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3.5 font-sans text-[12px] uppercase tracking-wide2 text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal/90"
              >
                Book a Session
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[420px] overflow-hidden rounded-none bg-charcoal shadow-xl sm:min-h-[560px] lg:min-h-0"
          >
            <Image
              src="/tattoo/IMG_2093.webp"
              alt="Khem creating custom tattoo art"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 z-10">
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/75">The work begins here</p>
              <p className="mt-1 font-display text-2xl text-bone">Made personal.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

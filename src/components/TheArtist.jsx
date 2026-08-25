"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { artists } from "@/data/artists";

const artist = artists[0];

export default function TheArtist() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const whatsappHref = `https://wa.me/916294458070?text=${encodeURIComponent(
    "Hi Khem Tattoo, I would like to enquire about a tattoo/piercing session."
  )}`;

  return (
    <section id="artist" className="texture-dark overflow-hidden py-14 text-white sm:py-20">
      <div className="container-khem">
        {/* Eyebrow + heading */}
        <motion.p
          className="eyebrow mb-4"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Artist
        </motion.p>
        <motion.h2
          className="font-display text-5xl leading-[0.92] tracking-tightest2 text-white sm:text-6xl lg:text-7xl mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Meet Our Team.
        </motion.h2>



        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {artists.map((teamArtist, index) => (
            <div key={teamArtist.id} className="border-t border-white/15 pt-8 sm:pt-10">
              <div className="grid gap-7">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src={teamArtist.image}
                    alt={`${teamArtist.name} — tattoo artist at Khem studio`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <p className="font-mono text-[10px] uppercase tracking-wide3 text-bone/60">0{index + 1} / Artist</p>
                    <p className="font-display text-2xl text-bone">{teamArtist.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wide2 text-bone/60">{teamArtist.role}</p>
                  </div>
                </div>
                <div>

                  <h3 className="font-display text-4xl leading-tight tracking-tightest2 text-white sm:text-5xl">
                    Meet {teamArtist.name}.
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wide2 text-[#ba9255]">
                    {teamArtist.role}
                  </p>
                  <a
                    href={teamArtist.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow ${teamArtist.name} on Instagram`}
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide2 text-white/70 transition-colors hover:text-[#ba9255]"
                  >
                    <Instagram size={16} aria-hidden="true" />
                    {teamArtist.instagramHandle}
                  </a>
                  <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/70 sm:text-base">
                    {teamArtist.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {teamArtist.specialties.map((specialty) => (
                      <span key={specialty} className="rounded-full border border-white/25 px-3.5 py-1.5 font-sans text-[11px] uppercase tracking-wide text-white/70">
                        {specialty}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { artists } from "@/data/artists";
import { portfolio } from "@/data/portfolio";

export default function Artists() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="artists" className="bg-ivory py-24 sm:py-32">
      <div className="container-khem">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">The Artists &amp; Specialists</p>
          <h2 className="font-display text-4xl leading-tight tracking-tightest2 sm:text-6xl text-charcoal">
            Every hand has a different accent.
          </h2>
          <p className="mt-4 font-sans text-sm text-charcoal/70 sm:text-base">
            Dedicated artists specializing in their distinct disciplines — ensuring your piece is executed by someone whose passion matches your vision.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {artists.map((artist, i) => {
            const isOpen = openId === artist.id;
            const selectedWork = portfolio.filter((p) => p.category === artist.specialty).slice(0, 3);
            return (
              <div key={artist.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : artist.id)}
                  aria-expanded={isOpen}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal shadow-md">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                    <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] uppercase tracking-wide3 text-bone/90 bg-ink/70 px-3 py-1 rounded backdrop-blur-sm">
                      {artist.specialty}
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-charcoal">{artist.name}</h3>
                      <p className="eyebrow mt-1 text-xs text-burgundy">{artist.specialty}</p>
                    </div>
                    <span className="mt-1 font-mono text-xs uppercase tracking-wide text-charcoal/60 underline underline-offset-4">
                      {isOpen ? "Hide works" : "View pieces"}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-md font-sans text-sm leading-relaxed text-charcoal/70">
                    {artist.bio}
                  </p>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        {selectedWork.length > 0 ? (
                          selectedWork.map((w) => (
                            <div
                              key={w.id}
                              className="relative aspect-square overflow-hidden rounded-md bg-charcoal"
                            >
                              <img
                                src={w.image}
                                alt={w.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))
                        ) : (
                          <div className="relative col-span-3 aspect-[16/9] overflow-hidden rounded-md bg-charcoal">
                            <img
                              src={artist.image}
                              alt={artist.name}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function Work() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openAt = useCallback((idx) => setLightboxIndex(idx), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % portfolio.length)),
    []
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + portfolio.length) % portfolio.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  const active_item = lightboxIndex !== null ? portfolio[lightboxIndex] : null;

  return (
    <section id="work" className="bg-ivory pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="container-khem">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Tattoo Gallery</p>
          <h2 className="font-display text-4xl leading-tight tracking-tightest2 text-charcoal sm:text-6xl">
            A gallery, not a catalogue.
          </h2>
          <p className="mt-4 font-sans text-sm text-charcoal/70 sm:text-base leading-relaxed">
            Explore custom tattoos executed at Khem studio — fine line, realism, dark black &amp; grey, and bespoke storytelling.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {portfolio.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openAt(idx)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-charcoal text-left border border-charcoal/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy cursor-pointer"
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                priority={idx < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="font-display text-sm font-medium text-bone line-clamp-1">
                  {item.title}
                </span>
                <span className="font-mono text-[10px] text-bone/60 uppercase tracking-wider">
                  View Full Artwork
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active_item && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={active_item.title}
          >
            <button
              onClick={close}
              aria-label="Close viewer"
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 cursor-pointer"
            >
              <X size={26} />
            </button>
            <button
              onClick={prev}
              aria-label="Previous piece"
              className="absolute left-3 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 sm:left-8 cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              key={active_item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-charcoal"
            >
              <div className="relative aspect-[3/4] max-h-[74vh] w-full bg-ink">
                <Image
                  src={active_item.image}
                  alt={active_item.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex items-center justify-between font-sans text-bone border-t border-bone/10 bg-charcoal">
                <div>
                  <h3 className="font-display text-lg text-bone">{active_item.title}</h3>
                </div>
                <Link
                  href="#contact"
                  onClick={close}
                  className="rounded-full bg-bone px-5 py-2 text-xs uppercase tracking-wider text-charcoal transition-all hover:bg-white font-medium"
                >
                  Inquire
                </Link>
              </div>
            </motion.div>

            <button
              onClick={next}
              aria-label="Next piece"
              className="absolute right-3 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 sm:right-8 cursor-pointer"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

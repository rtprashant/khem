"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, HeartPulse, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { piercingGallery, piercingProtocols } from "@/data/services";

export default function Piercing() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % piercingGallery.length));
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + piercingGallery.length) % piercingGallery.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const activeItem = lightboxIndex !== null ? piercingGallery[lightboxIndex] : null;

  return (
    <section id="piercing" className="relative bg-charcoal py-24 text-ivory sm:py-32">
      {/* Background subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-burgundy/20 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-sand/10 blur-3xl" />
      </div>

      <div className="container-khem relative z-10">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-burgundy-soft">Studio Piercing</p>
            <h2 className="font-display text-4xl leading-tight tracking-tightest2 text-bone sm:text-6xl">
              Precision. Sterile Artistry.
              <br />
              <span className="italic font-light text-bone/80">Implant-Grade Jewellery.</span>
            </h2>
            <p className="mt-4 font-sans text-bone/70 leading-relaxed text-sm sm:text-base">
              Every piercing at Khem is treated as a clinical art form. We use surgical, single-use cannula needles, biologically inert ASTM F-136 Titanium, and custom anatomical mapping for effortless healing.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-bone/30 bg-charcoal-soft/50 px-6 py-3 font-sans text-xs uppercase tracking-wide2 text-bone backdrop-blur-sm transition-colors hover:border-bone hover:bg-bone hover:text-charcoal w-fit"
          >
            <span>Book Piercing</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Safety & Protocol Highlights Grid */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {piercingProtocols.map((protocol, i) => (
            <div
              key={protocol.title}
              className="rounded-lg border border-bone/10 bg-charcoal-soft/30 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-bone/25"
            >
              <div className="mb-3.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-burgundy/30 text-burgundy-soft">
                {i === 0 && <ShieldCheck size={18} />}
                {i === 1 && <Sparkles size={18} />}
                {i === 2 && <HeartPulse size={18} />}
                {i === 3 && <CheckCircle2 size={18} />}
              </div>
              <h3 className="font-display text-base text-bone">{protocol.title}</h3>
              <p className="mt-1.5 text-xs font-sans leading-relaxed text-bone/60">
                {protocol.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Piercing Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {piercingGallery.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-ink text-left border border-bone/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy cursor-pointer"
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

              {/* Gradient vignette on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Info Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h4 className="font-display text-sm font-medium text-bone">
                  {item.title}
                </h4>
                <p className="line-clamp-1 mt-0.5 text-[11px] font-sans text-bone/60">
                  {item.jewellery}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-lg border border-bone/15 bg-charcoal-soft/40 px-6 py-6 sm:flex-row sm:px-8">
          <div>
            <h3 className="font-display text-lg text-bone">Have a specific piercing idea?</h3>
            <p className="mt-1 text-xs font-sans text-bone/60">
              Walk-ins welcome, appointments prioritized. We assist with initial styling and jewellery selection.
            </p>
          </div>
          <Link
            href="#contact"
            className="whitespace-nowrap rounded-full bg-bone px-6 py-2.5 font-sans text-xs uppercase tracking-wide2 text-charcoal transition-colors hover:bg-white font-medium"
          >
            Consult Piercer
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close piercing photo"
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 cursor-pointer"
            >
              <X size={26} />
            </button>

            <button
              onClick={prevLightbox}
              aria-label="Previous piercing photo"
              className="absolute left-3 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 sm:left-8 cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-charcoal"
            >
              <div className="relative aspect-[3/4] max-h-[70vh] w-full bg-ink">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-charcoal border-t border-bone/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-bone">{activeItem.title}</h3>
                  <span className="text-[11px] font-mono text-bone/50">
                    {activeItem.jewellery}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-sans leading-relaxed text-bone/70">
                  {activeItem.description}
                </p>
                <div className="mt-3 flex items-center justify-end border-t border-bone/10 pt-2.5">
                  <Link
                    href="#contact"
                    onClick={closeLightbox}
                    className="text-xs uppercase tracking-wider text-bone underline underline-offset-4 hover:text-burgundy-soft font-medium"
                  >
                    Inquire About This Piercing
                  </Link>
                </div>
              </div>
            </motion.div>

            <button
              onClick={nextLightbox}
              aria-label="Next piercing photo"
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

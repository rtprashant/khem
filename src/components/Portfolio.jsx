"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { tattooImages, piercingImages } from "@/data/portfolio";
import Link from "next/link";

// ─── Reusable lazy image with reveal animation ───────────────────────────────
function PortfolioImage({ src, alt, priority = false, onOpen, index }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`View ${alt}`}
      className="group relative w-full h-full overflow-hidden bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy cursor-pointer rounded-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min((index % 6) * 0.06, 0.3),
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const item = images[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/96 px-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item?.alt}
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close viewer"
        className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 cursor-pointer"
      >
        <X size={22} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-2 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 sm:left-6 cursor-pointer"
      >
        <ChevronLeft size={28} />
      </button>

      {item && (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl px-2 pb-6 pt-14 sm:px-0 sm:pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[3/4] w-full max-h-[min(78vh,calc(100svh-7rem))] bg-charcoal">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-contain"
            />
            <Link
              href="#contact"
              onClick={onClose}
              className="absolute bottom-4 right-4 z-10 rounded-full bg-bone px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors hover:bg-white"
            >
              Inquire
            </Link>
          </div>
        </motion.div>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-2 z-20 rounded-full bg-white/10 p-2.5 text-bone hover:bg-white/20 sm:right-6 cursor-pointer"
      >
        <ChevronRight size={28} />
      </button>
    </motion.div>
  );
}

// ─── Main Portfolio section ───────────────────────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("tattoo"); // "tattoo" | "piercing"
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const requestedView = new URLSearchParams(window.location.search).get("view");
    if (requestedView === "tattoo" || requestedView === "piercing") {
      setActiveTab(requestedView);
    }

    const handlePortfolioView = (event) => {
      const view = event.detail?.view;
      if (view === "tattoo" || view === "piercing") setActiveTab(view);
    };
    window.addEventListener("khem-portfolio-view", handlePortfolioView);
    return () => window.removeEventListener("khem-portfolio-view", handlePortfolioView);
  }, []);

  const images = activeTab === "tattoo" ? tattooImages : piercingImages;

  const openAt = useCallback((i) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
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

  return (
    <section id="portfolio" className="bg-ivory pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="container-khem">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <motion.p
              className="eyebrow mb-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.p>
            <motion.h2
              className="font-display text-4xl leading-tight tracking-tightest2 text-charcoal sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              The Work.
            </motion.h2>
          </div>

          {/* TATTOO | PIERCING Toggle */}
          <motion.div
            className="flex w-fit flex-none items-center gap-0 overflow-hidden rounded-full border border-charcoal/15 bg-charcoal/5 p-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {["tattoo", "piercing"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`relative px-5 py-2 font-sans text-[12px] uppercase tracking-wide2 transition-all duration-300 cursor-pointer sm:px-6 ${activeTab === tab
                  ? "bg-charcoal text-bone shadow-sm"
                  : "text-charcoal/60 hover:text-charcoal"
                  }`}
                aria-pressed={activeTab === tab}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 space-y-3 sm:space-y-4"
          >
            {images.map((img, idx) => (
              <div
                key={img.id}
                className={`break-inside-avoid ${img.size === "tall"
                  ? "aspect-[3/4]"
                  : img.size === "wide"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                  }`}
              >
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  priority={idx < 6}
                  onOpen={() => openAt(idx)}
                  index={idx}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Link to inquire */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="#contact"
            className="rounded-full border border-charcoal/20 px-8 py-3.5 font-sans text-[12px] uppercase tracking-wide2 text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-bone"
          >
            Start Your Design Conversation
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

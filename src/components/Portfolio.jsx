"use client";

import { useState, useCallback, useEffect } from "react";
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
      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-md border border-[#ba9255]/80 bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ba9255]"
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
export default function Portfolio({ service = "tattoo" }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = (service === "piercing" ? piercingImages : tattooImages).slice(0, 15);

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
    <section id="portfolio" className="texture-dark py-20 text-white sm:py-24">
      <div className="container-khem">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <motion.p
              className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#ba9255]"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              The work
            </motion.p>
            <motion.h2
              className="font-display text-5xl leading-tight sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {service === "piercing" ? "Portfolio" : "Portfolio"}
            </motion.h2>
          </div>

          <motion.div
            className="flex w-full flex-none items-center overflow-hidden rounded-full border border-white/35 bg-black sm:w-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Choose portfolio type"
          >
            {[
              { label: "Tattoo", value: "tattoo", href: "/tattoo#portfolio" },
              { label: "Piercing", value: "piercing", href: "/piercing#portfolio" },
            ].map((item) => {
              const active = service === item.value;
              return (
                <Link
                  key={item.value}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex-1 px-10 py-3 text-center font-sans text-[12px] uppercase tracking-wide2 transition-all duration-300 sm:flex-none ${active
                    ? "rounded-full border border-[#ba9255] bg-[#ba9255] font-bold text-white"
                    : "text-white/75 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
          >
            {images.map((img, idx) => (
              <div
                key={img.id}
                className={`aspect-[3/4] ${idx >= 10 ? "hidden lg:block" : ""}`}
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
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="#contact"
            className="max-w-full whitespace-nowrap rounded-full border border-[#ba9255] px-4 py-3.5 text-center font-sans text-[9px] uppercase tracking-[0.08em] text-[#ba9255] transition-all duration-300 hover:bg-[#ba9255] hover:text-white sm:px-8 sm:text-[12px] sm:tracking-wide2"
          >
            Start Your Design Conversation →
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

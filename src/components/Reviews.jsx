"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/services";
import { site } from "@/data/site";

function StarRow({ rating = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, s) => (
        <Star key={s} size={13} fill="currentColor" strokeWidth={0} className="text-gold" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef(null);

  return (
    <section id="reviews" className="bg-charcoal py-24 text-ivory sm:py-32 overflow-hidden">
      <div className="container-khem">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Client Words
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-4xl leading-tight tracking-tightest2 sm:text-6xl">
                Said better by them.
              </h2>
              {/* Rating aggregate */}
              <div className="mt-4 flex items-center gap-3">
                <StarRow rating={5} />
                <span className="font-display text-xl tracking-tightest2">{site.googleRating}</span>
                <span className="font-mono text-xs uppercase tracking-wide2 text-bone/50">
                  {site.googleReviewCount} Google Reviews
                </span>
              </div>
            </motion.div>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit shrink-0 border-b border-bone/40 pb-1 font-sans text-xs uppercase tracking-wide2 text-bone transition-colors hover:border-bone hover:text-bone"
          >
            View All Google Reviews ↗
          </motion.a>
        </div>
      </div>

      {/* Scrollable review track */}
      <div
        ref={trackRef}
        className="flex min-w-0 gap-5 overflow-x-scroll overscroll-x-contain px-6 pb-6 sm:px-8 lg:px-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x pan-y",
        }}
        role="region"
        aria-label="Customer reviews"
        data-native-scroll
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            data-review-card
            className="flex h-[300px] w-[88vw] shrink-0 select-none flex-col justify-between gap-5 overflow-hidden rounded-sm border border-bone/10 bg-bone/[0.04] p-6 sm:h-[285px] sm:w-[420px] sm:p-8"
          >
            <div>
              <StarRow rating={review.rating} />
              <p className="mt-4 line-clamp-6 font-sans text-sm leading-relaxed text-bone/80 sm:line-clamp-5 sm:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-bone/10 pt-5">
              <div>
                <span className="block font-display text-base italic text-bone">{review.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-bone/40">{review.source}</span>
              </div>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="shrink-0 border-b border-bone/30 pb-0.5 font-mono text-[10px] uppercase tracking-wide text-bone/60 transition-colors hover:border-bone hover:text-bone"
              >
                Read more ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

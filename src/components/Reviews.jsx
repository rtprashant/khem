"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/services";
import { site } from "@/data/site";
import GoogleIcon from "./GoogleIcon";

function Stars({ rating = 5 }) {
  return <div className="flex gap-1 text-[#ba9255]" aria-label={`${rating} out of 5 stars`}>{Array.from({ length: rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</div>;
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#f7f7f5] py-20 text-black sm:py-24">
      <div className="container-khem">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#ba9255]">Client stories</p><div className="mb-7 h-px w-9 bg-[#ba9255]" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl leading-none sm:text-7xl">What our clients say.</motion.h2>
        <p className="mt-4 text-sm leading-6 text-black/60">Real stories. Real people. Real ink.<br />We&apos;re proud to be a part of their journey.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.article key={review.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*.08 }} className="flex min-h-[290px] flex-col rounded-xl border border-black/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
              <div className="flex items-center gap-4 border-b border-black/10 pb-4"><GoogleIcon className="h-6 w-6 text-2xl" /><strong className="font-display text-2xl">{review.rating}.0</strong><Stars rating={review.rating} /></div>
              <div className="mt-5 flex gap-3"><Quote size={28} fill="currentColor" className="shrink-0 text-[#ba9255]/25" /><p className="line-clamp-6 text-sm font-medium leading-7 text-black/75">{review.text}</p></div>
              <div className="mt-auto pt-6"><strong className="text-sm">{review.name}</strong><span className="ml-3 text-[10px] uppercase tracking-wider text-black/40">Verified customer</span></div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 flex justify-center"><a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="max-w-full whitespace-nowrap rounded-full border border-[#ba9255] px-4 py-3.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#ba9255] transition hover:bg-[#ba9255] hover:text-white sm:px-9 sm:text-xs sm:tracking-wider">Read more Google reviews →</a></div>
      </div>
    </section>
  );
}

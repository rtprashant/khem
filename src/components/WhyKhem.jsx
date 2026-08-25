"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  ["01", "10+ Years of Experience", "A decade of dedication and passion, perfecting the art of tattoos and piercings with thousands of satisfied clients."],
  ["02", "Precision & Realism", "We focus on the finest details, ensuring every line, shade and texture is crafted with maximum precision and realism."],
  ["03", "Safe & Welcoming", "Your safety is our top priority. We maintain full hygiene, use sterilized equipment and provide a comfortable environment."],
];

export default function WhyKhem() {
  return (
    <section id="why-khem" className="bg-[#f7f7f5] py-20 text-black sm:py-24">
      <div className="container-khem">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#ba9255]">Why Khem?</p><div className="mb-8 h-px w-9 bg-[#ba9255]" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl leading-[.9] sm:text-7xl">Art that speaks.<br />Quality that lasts.</motion.h2>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-black/70">Every tattoo is more than just ink — it&apos;s a story, your story. We blend artistry, precision and safety to create work you&apos;ll be proud of, forever.</p>
        <div className="mt-10 grid gap-3 lg:grid-cols-[repeat(3,minmax(0,1fr))_2.8fr]">
          {cards.map(([number, title, body], i) => <motion.article key={number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="texture-dark rounded-xl p-6 text-white shadow-xl"><span className="font-display text-4xl text-[#ba9255]">{number}</span><div className="my-3 h-0.5 w-8 bg-[#ba9255]" /><h3 className="font-display text-2xl leading-tight">{title}</h3><p className="mt-5 text-xs font-medium leading-6 text-white/65">{body}</p></motion.article>)}
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .24 }} className="texture-dark grid min-h-[310px] overflow-hidden rounded-xl text-white shadow-xl sm:grid-cols-[1.2fr_1fr]">
            <div className="relative min-h-[280px] overflow-hidden bg-black/35"><Image src="/youtube-award.webp" alt="Khem Tattoo YouTube Silver Creator Award" fill sizes="(max-width: 640px) 100vw, 35vw" className="-rotate-90 scale-110 object-contain object-center" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" /></div>
            <div className="flex flex-col justify-center p-5 sm:p-6"><span className="text-[10px] font-bold uppercase tracking-wider text-[#ba9255]">100K+ Subscribers</span><h3 className="mt-2 font-display text-2xl leading-[1.05] sm:text-[1.7rem]">Trusted by 100,000+ YouTube subscribers</h3><div className="my-3 h-0.5 w-10 bg-[#ba9255]" /><p className="text-xs leading-5 text-white/75">Our work, tattoo education, and years of experience have helped us build a community of more than 100,000 subscribers.</p></div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

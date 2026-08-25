"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";
import GoogleIcon from "./GoogleIcon";

const ease = [0.16, 1, 0.3, 1];

export default function EntryExperience() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const stats = [["google", "5.0", "Star reviews"], ["youtube", "100K+", "YouTube subscribers"], ["◇", "100%", "Safe & hygienic"], ["☆", "10+", "Years of experience"]];

  return (
    <section id="home" className="texture-dark relative overflow-hidden px-5 pb-5 pt-28 text-white sm:px-8 sm:pb-8 lg:pt-32">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 72% 35%, #6a210b 0, transparent 27%), radial-gradient(circle at 20% 20%, #242424 0, transparent 34%)" }} />
      <div className="container-khem relative z-10 px-0">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, ease }} className="order-2 lg:order-1">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[.28em] text-[#ba9255]">Gurugram&apos;s premium body art studio</p>
            <h1 className="font-display text-[clamp(3.25rem,6.7vw,6.8rem)] leading-[.88] tracking-[.01em]">Tattoo And <br />Piercing Studio<br /><span className="text-[#ba9255]">in Gurugram</span></h1>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base">Custom Tattoos . Realism . Cover-Ups . Professional Piercing</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/80"><MapPin size={19} className="text-[#ba9255]" /> MGF Metropolis Mall, Sector 28, Gurgaon</div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-[#ba9255] px-3 py-4 text-[10px] font-bold uppercase tracking-wider transition hover:bg-[#c9a46c] sm:w-auto sm:px-6 sm:text-xs">Book a free consultation <ArrowRight size={14} /></a>
              <a href="#portfolio" className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded border border-white/35 px-4 py-4 text-[10px] font-bold uppercase tracking-wider transition hover:border-[#ba9255] hover:text-[#ba9255] sm:w-auto sm:px-6 sm:text-xs">See the work <ArrowRight size={14} /></a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/75">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-[#ba9255]"><span className="rounded border border-[#ba9255] p-2"><Phone size={15} /></span>{site.phone}</a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#ba9255]"><span className="rounded border border-[#ba9255] p-2"><Instagram size={15} /></span>{site.instagramHandle}</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, ease, delay: .1 }} className="relative order-1 mx-auto w-full max-w-[250px] sm:max-w-[350px] lg:order-2 lg:max-w-[420px] xl:max-w-[450px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#ba9255] bg-black">
              <Image src="/hero-tattoo.webp" alt="Black and grey portrait tattoo by Khem" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-2 top-[30%] grid origin-right scale-[.68] gap-2 sm:-right-10 sm:scale-100">
              <div className="rounded-xl border border-white/50 bg-black/90 p-4 shadow-2xl backdrop-blur sm:p-5"><div className="flex items-center gap-3"><GoogleIcon /><strong className="font-display text-3xl">5.0</strong></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider">Star reviews</p><div className="mt-2 flex text-[#ba9255]">{[0, 1, 2, 3, 4].map(i => <Star key={i} size={15} fill="currentColor" />)}</div></div>
              <div className="rounded-xl border border-white/50 bg-black/90 p-4 shadow-2xl backdrop-blur sm:p-5"><div className="flex items-center gap-3"><ShieldCheck className="text-[#ba9255]" /><strong className="font-display text-3xl">100%</strong></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider">Hygiene &amp; safety</p></div>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 grid overflow-hidden rounded-xl border border-white/25 bg-black/60 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([icon, value, label], i) => <div key={label} className={`flex items-center gap-4 px-6 py-5 ${i ? "border-t border-white/20 sm:border-l sm:border-t-0" : ""}`}><span className="flex h-9 w-9 shrink-0 items-center justify-center text-3xl font-bold leading-none text-[#ba9255]">{icon === "google" ? "G" : icon === "youtube" ? "▶" : icon}</span><div><strong className="block font-display text-3xl leading-none">{value}</strong><span className="text-[9px] font-bold uppercase tracking-wider text-white/65">{label}</span></div></div>)}
        </div>
      </div>
    </section>
  );
}

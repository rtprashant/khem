"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";
import { site } from "@/data/site";

export default function Visit() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <section id="visit" className="bg-charcoal py-24 text-ivory sm:py-36 overflow-hidden">
      <div className="container-khem">
        {/* Heading */}
        <div className="mb-14">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Visit
          </motion.p>
          <motion.h2
            className="font-display text-4xl leading-tight tracking-tightest2 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready for your
            <br />
            next piece?
          </motion.h2>
          <motion.p
            className="mt-4 font-sans text-base text-bone/60 max-w-md"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Tell us your idea. Let's turn it into something permanent.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <MapPin size={18} className="mt-0.5 shrink-0 text-burgundy-soft" aria-hidden="true" />
              <div className="font-sans text-sm text-bone/70 leading-relaxed">
                <p className="text-bone font-medium mb-1">Khem Tattoo &amp; Piercing</p>
                {site.addressLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={18} className="mt-0.5 shrink-0 text-burgundy-soft" aria-hidden="true" />
              <div className="font-sans text-sm text-bone/70">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-8 py-1">
                    <span className="text-bone/50">{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-4 items-center">
              <Instagram size={18} className="shrink-0 text-burgundy-soft" aria-hidden="true" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-bone/70 hover:text-bone transition-colors"
              >
                {site.instagramHandle}
              </a>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-bone px-7 py-4 font-sans text-[13px] uppercase tracking-wide2 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white font-medium"
                aria-label={`Call Khem Tattoo at ${site.phone}`}
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full border border-bone/30 px-7 py-4 font-sans text-[13px] uppercase tracking-wide2 text-bone transition-all duration-300 hover:border-bone hover:bg-bone/10"
                aria-label="WhatsApp Khem Tattoo"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            {/* <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit border-b border-bone/30 pb-0.5 font-sans text-xs uppercase tracking-wide2 text-bone/50 hover:text-bone hover:border-bone transition-colors"
            >
              Get Directions on Google Maps ↗
            </a> */}
          </motion.div>

          {/* Right — Google Map embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="min-h-[320px] overflow-hidden rounded-sm border border-bone/10 bg-charcoal/50"
          >
            <iframe
              title="Khem Tattoo & Piercing — MGF Metropolis Mall, Gurugram"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              className="h-full w-full min-h-[320px] grayscale-[0.4] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

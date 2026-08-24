"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/services";

export default function Trust() {
  return (
    <section className="bg-ivory py-28 sm:py-36">
      <div className="container-khem">
        <p className="eyebrow mb-4">Why Khem</p>
        <h2 className="mb-16 max-w-2xl font-display text-4xl leading-tight tracking-tightest2 sm:text-6xl">
          Trust is the first thing we tattoo.
        </h2>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="border-t border-charcoal/15 pt-6"
            >
              <h3 className="font-display text-xl italic">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/60">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

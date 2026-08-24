"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingContact() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <div
      className="fixed bottom-6 right-4 z-[90] flex flex-col gap-3 sm:bottom-8 sm:right-6"
      aria-label="Quick contact"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <MessageCircle size={22} strokeWidth={2} />
      </a>

      <a
        href={site.phoneHref}
        aria-label={`Call Khem Tattoo at ${site.phone}`}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-bone/20 bg-charcoal text-bone shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <Phone size={20} strokeWidth={2} />
      </a>
    </div>
  );
}

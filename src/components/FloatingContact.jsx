"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <div
      className={`fixed bottom-5 right-4 z-[90] flex flex-col gap-3 transition-all duration-500 lg:hidden ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Quick contact"
    >
      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle size={22} strokeWidth={1.8} />
      </a>

      {/* Call */}
      <a
        href={site.phoneHref}
        aria-label={`Call Khem Tattoo at ${site.phone}`}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-charcoal text-bone shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ width: 52, height: 52 }}
      >
        <Phone size={20} strokeWidth={1.8} />
      </a>
    </div>
  );
}

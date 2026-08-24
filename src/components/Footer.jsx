import { Instagram, Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Tattoo", href: "/?view=tattoo#portfolio" },
  { label: "Piercing", href: "/?view=piercing#portfolio" },
  { label: "Academy", href: "/academy" },
  { label: "Artist", href: "#artist" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <footer className="relative bg-ink grain py-16 text-bone" aria-label="Site footer">
      <div className="container-khem relative z-10">
        <div className="grid gap-12 sm:grid-cols-[1fr,auto,auto] sm:gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-bone/20 bg-ink">
              <Image
                src="/KHEM%20Tattoo%20%26%20Piercing%20Emblem.png"
                alt="Khem Tattoo & Piercing"
                fill
                sizes="64px"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wide2 text-bone/40">
              Tattoo &amp; Piercing Studio
            </p>
            <p className="mt-3 font-sans text-sm text-bone/50 leading-relaxed">
              Custom tattoo &amp; piercing studio, {site.location}.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Khem Tattoo on Instagram"
                className="text-bone/50 hover:text-bone transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={site.phoneHref}
                aria-label="Call the studio"
                className="text-bone/50 hover:text-bone transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp the studio"
                className="text-bone/50 hover:text-bone transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Navigate</p>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                className="font-sans text-sm text-bone/50 hover:text-bone transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact info */}
          <div className="font-sans text-sm text-bone/50">
            <p className="eyebrow mb-3">Contact</p>
            {site.addressLines.map((line, i) => (
              <p key={i} className="leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-bone/10 pt-6 font-mono text-[11px] uppercase tracking-wide text-bone/30 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Gurugram, Haryana, India</p>
        </div>
      </div>
    </footer>
  );
}

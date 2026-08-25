"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Tattoo", href: "/?view=tattoo#portfolio", view: "tattoo" },
  { label: "Piercing", href: "/?view=piercing#portfolio", view: "piercing" },
  { label: "Academy", href: "/academy" },
  { label: "Artist", href: "#artist" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState("tattoo");
  const [scrolled, setScrolled] = useState(false);
  // Whether we're in the dark hero zone
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // Hero is 100svh tall — transition nav colors once past ~70% of viewport height
      const sections = Array.from(document.querySelectorAll("section, footer"));
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 48 && rect.bottom > 48;
      });
      const darkSections = new Set(["home", "portfolio", "artist", "contact", "academy-home", "academy-contact"]);
      setIsDark(darkSections.has(current?.id));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const view = new URLSearchParams(window.location.search).get("view");
    setMobileSection(pathname.startsWith("/academy") ? "academy" : view === "piercing" ? "piercing" : "tattoo");
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("menu-open", open);
    document.dispatchEvent(new CustomEvent("khem-menu-state", { detail: { open } }));
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const selectPortfolioView = (view) => {
    if (view) window.dispatchEvent(new CustomEvent("khem-portfolio-view", { detail: { view } }));
  };
  const hrefFor = (href) => {
    if (!pathname.startsWith("/academy") || !href.startsWith("#")) return href;
    return href === "#home" ? "/" : `/${href}`;
  };

  // Color tokens based on dark/light section
  const logoColor = isDark || open ? "text-bone" : "text-charcoal";
  const linkColor = isDark || open ? "text-bone/80 hover:text-bone" : "text-charcoal/70 hover:text-charcoal";
  const ctaStyles = isDark
    ? "border-bone/40 text-bone hover:bg-bone hover:text-charcoal"
    : "border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-bone";
  const hamburgerColor = isDark || open ? "text-bone" : "text-charcoal";

  const bgStyles = scrolled
    ? isDark
      ? "bg-ink/90 backdrop-blur-md border-b border-bone/10 shadow-md py-3"
      : "bg-white/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm py-3"
    : "bg-transparent py-5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bgStyles}`}
    >
      <nav className="container-khem relative z-[60] flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href={hrefFor("#home")}
          className={`relative block h-11 w-11 overflow-hidden rounded-full border border-bone/20 bg-ink transition-transform duration-300 hover:scale-105 ${logoColor}`}
          aria-label="Khem Tattoo & Piercing — home"
        >
          <Image
            src="/KHEM%20Tattoo%20%26%20Piercing%20Emblem.webp"
            alt="Khem Tattoo & Piercing"
            fill
            priority
            sizes="44px"
            className="object-contain object-center"
          />
        </Link>

        {/* Mobile section shortcuts */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-full border border-bone/10 bg-ink/95 p-1 shadow-lg lg:hidden">
          {NAV_ITEMS.filter((item) => ["Tattoo", "Piercing", "Academy"].includes(item.label)).map((item) => {
            const section = item.label.toLowerCase();
            const active = mobileSection === section;
            return (
              <Link
                key={`${item.label}-shortcut`}
                href={hrefFor(item.href)}
                onClick={() => {
                  setMobileSection(section);
                  selectPortfolioView(item.view);
                }}
                className={`rounded-full px-2.5 py-2 font-mono text-[8px] font-bold uppercase tracking-[.12em] transition-colors min-[380px]:px-3 min-[380px]:text-[9px] sm:px-4 sm:text-[10px] ${active ? "bg-[#ba9255] text-white" : "text-bone/75 hover:text-bone"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 font-sans text-[12px] font-bold uppercase tracking-wide2 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={`${item.label}-${item.href}`}>
              <Link
                href={hrefFor(item.href)}
                onClick={() => selectPortfolioView(item.view)}
                className={`relative pb-1 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${linkColor}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={hrefFor("#visit")}
            className={`rounded-full border px-5 py-2 font-sans text-[11px] font-bold uppercase tracking-wide2 transition-all duration-300 ${ctaStyles}`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-[60] cursor-pointer transition-colors duration-300 lg:hidden ${hamburgerColor}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 top-0 z-40 flex h-[100svh] flex-col overflow-y-auto bg-ink px-6 pt-24 pb-10 lg:hidden"
          >
            <ul className="flex flex-col gap-2 font-display text-[11vw] text-bone sm:text-6xl">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={`${item.label}-mob`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={hrefFor(item.href)}
                    onClick={() => { selectPortfolioView(item.view); close(); }}
                    className="block py-1 leading-tight tracking-tightest2 hover:text-bone/70 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA buttons */}
            <motion.div
              className="mt-10 flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <a
                href={`https://wa.me/916294458070?text=${encodeURIComponent(
                  "Hi Khem Tattoo, I would like to enquire about a tattoo/piercing session."
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex items-center justify-center rounded-full bg-bone px-6 py-4 font-sans text-[12px] uppercase tracking-wide2 text-charcoal font-medium"
              >
                Book a Session
              </a>
              <a
                href="tel:+916294458070"
                onClick={close}
                className="flex items-center justify-center rounded-full border border-bone/30 px-6 py-4 font-sans text-[12px] uppercase tracking-wide2 text-bone"
              >
                Call Studio
              </a>
            </motion.div>

            <p className="mt-auto font-mono text-[10px] uppercase tracking-wide2 text-bone/30">
              {site.location} · {site.instagramHandle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

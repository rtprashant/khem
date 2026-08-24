"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

const SERVICES = ["Tattoo", "Piercing", "Cover-Up / Custom"];

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: SERVICES[0],
  message: "",
};

export default function Contact() {
  const [fields, setFields] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...fields,
          _subject: `New booking enquiry — ${site.shortName}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      setFeedback("Your enquiry has been sent. We'll be in touch shortly.");
      setFields(initialState);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please call or WhatsApp us directly.");
    }
  };

  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    fields.message
      ? `Hi Khem Tattoo, I'd like to book for ${fields.service}. ${fields.message}`
      : site.whatsappMessage
  )}`;

  return (
    <section id="contact" className="texture-dark py-24 text-white sm:py-32">
      <div className="container-khem grid gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Left — Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">Book a Consultation</p>
          <h2 className="max-w-md font-display text-4xl leading-tight tracking-tightest2 text-white sm:text-6xl">
            Tell us your idea.
          </h2>
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-white/65 sm:text-base">
            Share a few details about your vision — we'll follow up to discuss
            placement, size, and timing before anything is confirmed.
          </p>

          {/* Quick action links */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex max-w-full items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 px-4 py-3 font-sans text-[10px] uppercase tracking-wider text-white transition-all duration-300 hover:border-[#ba9255] hover:text-[#ba9255] sm:w-fit sm:px-6 sm:text-[12px] sm:tracking-wide2"
            >
              <Phone size={14} />
              {site.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-full items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 px-4 py-3 font-sans text-[10px] uppercase tracking-wider text-white transition-all duration-300 hover:border-[#ba9255] hover:text-[#ba9255] sm:w-fit sm:px-6 sm:text-[12px] sm:tracking-wide2"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" required>
              <input
                required
                type="text"
                value={fields.name}
                onChange={update("name")}
                placeholder="Your name"
                className="form-inp"
              />
            </Field>
            <Field label="Phone" required>
              <input
                required
                type="tel"
                value={fields.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
                className="form-inp"
              />
            </Field>
          </div>

          <Field label="Email">
            <input
              type="email"
              value={fields.email}
              onChange={update("email")}
              placeholder="your@email.com"
              className="form-inp"
            />
          </Field>

          <Field label="Service">
            <select value={fields.service} onChange={update("service")} className="form-inp">
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </Field>

          <Field label="Tattoo / Piercing Idea">
            <textarea
              rows={4}
              value={fields.message}
              onChange={update("message")}
              placeholder="Describe your idea, size, placement..."
              className="form-inp resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full cursor-pointer whitespace-nowrap rounded-full bg-[#ba9255] px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a46c] disabled:opacity-60 sm:px-7 sm:text-[12px] sm:tracking-wide2"
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-sm text-charcoal/70" role="status">{feedback}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-burgundy" role="alert">{feedback}</p>
          )}
        </motion.form>
      </div>

      <style jsx global>{`
        .form-inp {
          width: 100%;
          background: rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 2px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #ffffff;
          transition: border-color 0.2s;
          outline: none;
        }
        .form-inp::placeholder { color: rgba(255,255,255,0.42); }
        .form-inp:focus { border-color: #ba9255; }
        .form-inp option { color: #111; }
      `}</style>
    </section>
  );
}

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-xs uppercase tracking-wide text-white/60">
        {label} {required && <span className="text-[#ba9255]">*</span>}
      </span>
      {children}
    </label>
  );
}

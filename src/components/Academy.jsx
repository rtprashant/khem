"use client";

import { site } from "@/data/site";
import Link from "next/link";
import Image from "next/image";

export default function Academy() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hi Khem Tattoo, I would like to enquire about the Khem Academy courses."
  )}`;
  const courses = [
    {
      number: "01",
      title: "Foundation Tattoo Course",
      duration: "3 months · 12 weeks",
      text: "For aspiring artists ready to build the fundamentals: hygiene, machine handling, linework, shading, design, and the daily practice that makes a tattoo artist.",
      detail:
        "Best for serious artists with a foundation in sketching, drawing, or painting.",
    },
    {
      number: "02",
      title: "Advanced Tattoo Artist Course",
      duration: "6 months · 24 weeks",
      text: "The complete path from first line to working artist, with advanced techniques, colour, realism, cover-ups, live model practice, and professional studio habits.",
      detail:
        "Includes supervised live model sessions and a pathway to paid internship for top performers.",
    },
  ];

  return (
    <main className="bg-white text-charcoal">
      <section id="academy-home" className="texture-dark relative flex min-h-[70svh] items-center overflow-hidden py-24 text-white sm:min-h-[74svh] sm:py-28">
        <Image
          src="/academy-hero.webp"
          alt="Khem Tattoo Academy studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />
        <div className="container-khem relative z-10">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-wide3 text-[#ba9255] sm:text-[11px]">Khem Academy · Gurugram, Haryana</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-tightest2 sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
            Learn the craft.
            <br />
            <span className="text-[#ba9255]">Become the artist.</span>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-bone/65 sm:text-base">
            A structured, artist-led tattoo education built inside a working studio. Learn with real systems, disciplined practice, and feedback that prepares you for the profession.
          </p>
          <Link href="#courses" className="mt-8 inline-block max-w-full whitespace-nowrap rounded-full bg-[#ba9255] px-5 py-3.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-[#c9a46c] sm:px-7 sm:text-[12px] sm:tracking-wide2">
            Explore the courses
          </Link>
        </div>
      </section>

      <section className="border-b border-charcoal/10 bg-white py-12">
        <div className="container-khem grid gap-8 sm:grid-cols-3">
          {["Small batches of 4", "Studio-led training", "All practice supplies included"].map((item, index) => (
            <div key={item} className="border-l-2 border-[#ba9255] pl-4">
              <p className="font-mono text-[10px] uppercase tracking-wide3 text-charcoal/50">0{index + 1}</p>
              <p className="mt-2 font-display text-2xl tracking-tightest2">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="bg-white py-24 sm:py-32">
        <div className="container-khem">
          <p className="eyebrow mb-4">01 / The courses</p>
          <h2 className="max-w-2xl font-display text-5xl leading-tight tracking-tightest2 sm:text-7xl">Choose your path.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.number}
                className="texture-dark group relative overflow-hidden rounded-xl border border-white/15 p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:border-charcoal/30 hover:shadow-[0_16px_40px_rgba(34,30,27,0.12)] sm:p-10"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#ba9255]" />
                <p className="font-mono text-[11px] tracking-wide3 text-[#ba9255]">{course.number} / COURSE</p>
                <h3 className="mt-10 max-w-md font-display text-4xl leading-tight tracking-tightest2 sm:text-5xl">{course.title}</h3>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wide2 text-white/55">{course.duration} · By application</p>
                <p className="mt-7 max-w-md font-sans text-sm leading-relaxed text-white/75">{course.text}</p>
                <p className="mt-6 border-t border-white/15 pt-5 font-sans text-sm leading-relaxed text-white/55">{course.detail}</p>
                <a
                  href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hi Khem Tattoo, I want to enquire about the ${course.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex max-w-full whitespace-nowrap rounded-full bg-[#ba9255] px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a46c] sm:px-6 sm:text-[11px] sm:tracking-wide2"
                >
                  Enquire 
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="academy-values" className="texture-dark py-24 text-white sm:py-32">
        <div className="container-khem grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:gap-24">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-wide3 text-[#ba9255]">02 / Beyond the machine</p>
            <h2 className="font-display text-5xl leading-tight tracking-tightest2 sm:text-6xl">The profession is bigger than the tool.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {["Design, digital art, and visual presence", "Communication and the studio mindset", "Client conversations, service, and trust", "Hygiene, safety, and repeatable systems"].map((item, index) => (
              <div key={item} className="border-t border-white/20 pt-4">
                <p className="font-mono text-[10px] tracking-wide3 text-[#ba9255]">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight tracking-tightest2">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="academy-contact" className="bg-white py-24 sm:py-32">
        <div className="container-khem grid gap-10 lg:grid-cols-[1fr,0.8fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">03 / Start the conversation</p>
            <h2 className="max-w-2xl font-display text-5xl leading-tight tracking-tightest2 sm:text-7xl">Serious about the craft?</h2>
            <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-charcoal/65 sm:text-base">Tell us where you are in your journey, share a few samples of your work, and we will guide you toward the right course.</p>
          </div>
          <div className="lg:justify-self-end">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex max-w-full whitespace-nowrap rounded-full bg-[#ba9255] px-5 py-4 font-sans text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-[#c9a46c] sm:px-7 sm:text-[12px] sm:tracking-wide2">Enquire on WhatsApp</a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-wide2 text-charcoal/45">Applications reviewed personally · {site.location}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

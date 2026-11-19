"use client";

import { motion } from "framer-motion";
import { about, profile } from "@/data/content";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55 },
};

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <motion.p {...fade} className="section-eyebrow">
            About
          </motion.p>
          <motion.h2
            {...fade}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="section-title mt-3"
          >
            {about.headline}
          </motion.h2>
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                {...fade}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                className="max-w-xl text-[1.05rem] leading-relaxed text-white/65"
              >
                {p}
              </motion.p>
            ))}
          </div>
          <motion.ul
            {...fade}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {about.traits.map((trait) => (
              <li
                key={trait}
                className="border border-white/10 px-3 py-1.5 text-xs tracking-wide text-white/60"
              >
                {trait}
              </li>
            ))}
          </motion.ul>
          <motion.p
            {...fade}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 text-sm text-white/40"
          >
            Based in {profile.location}
          </motion.p>
        </div>

        <motion.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          <div className="relative overflow-hidden border border-white/10 bg-[#1a1012]">
            <video
              className="aspect-[4/3] h-auto w-full object-cover object-[45%_28%]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero.jpg"
              aria-label={`${profile.fullName} in the studio`}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1012] to-transparent p-5 pt-16">
              <p className="font-[family-name:var(--font-display)] text-2xl text-white">
                {profile.fullName}
              </p>
              <p className="mt-1 text-sm text-white/70">{profile.title}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--rose)]">
                  {item.label}
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-xl text-white md:text-2xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { process, vision } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            My process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mt-3"
          >
            From idea to impact.
          </motion.h2>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {process.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-[11px] tracking-[0.28em] text-[var(--rose)]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="self-center overflow-hidden border border-white/10 bg-gradient-to-b from-[var(--rose)]/10 to-transparent"
        >
          <div className="relative h-40 overflow-hidden">
            <video
              className="h-full w-full object-cover object-[45%_28%] opacity-80"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero.jpg"
              aria-hidden
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/40 to-transparent" />
          </div>
          <div className="p-8">
            <p className="section-eyebrow">Vision</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-snug text-white">
              Turn ideas into impact.
            </p>
            <ul className="mt-8 space-y-4">
              {vision.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--rose)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

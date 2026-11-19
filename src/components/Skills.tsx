"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

const groups = [
  { title: "Programming", items: skills.programming },
  { title: "Full-Stack", items: skills.fullstack },
  { title: "AI & Data", items: skills.ai },
  { title: "Tools", items: skills.tools },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[var(--rose)]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mt-3"
        >
          A toolkit for intelligent products.
        </motion.h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.25em] text-white/80">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-white/[0.04] px-3.5 py-2 text-sm text-white/70 transition hover:bg-[var(--rose)]/15 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { achievements, certifications, education, experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mt-3"
        >
          Learning by shipping.
        </motion.h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative border-l border-[var(--rose)]/40 pl-8"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--rose)]" />
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  {job.period}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-[var(--rose)]">{job.company}</p>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-white/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            <div>
              <h3 className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.25em] text-white/50">
                Education
              </h3>
              <ul className="mt-6 space-y-5">
                {education.map((ed) => (
                  <li key={ed.degree + ed.school} className="border-b border-white/10 pb-5">
                    <p className="font-[family-name:var(--font-display)] text-xl text-white">
                      {ed.degree}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{ed.school}</p>
                    <p className="mt-1 text-xs tracking-wide text-white/35">{ed.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm uppercase tracking-[0.25em] text-[var(--rose)]">
                Achievements
              </h3>
              <ul className="mt-5 space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-white/70">
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm uppercase tracking-[0.25em] text-[var(--rose)]">
                Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="text-sm leading-relaxed text-white/70">
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

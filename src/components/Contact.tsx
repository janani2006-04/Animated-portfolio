"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { profile } from "@/data/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(json.error || "Something went wrong.");
        return;
      }
      setStatus("sent");
      setFeedback("Message received. I'll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error. Please email me directly.");
    }
  }

  return (
    <section id="contact" className="section-shell pb-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mt-3 max-w-xl"
          >
            Let&apos;s build something intelligent together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 max-w-xl text-white/55"
          >
            Open to internships, collaborations, and AI-driven product work. Send a
            note through the form — it is stored live on the server.
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="btn-cta">
              Email me →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-[var(--rose)] hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-[var(--rose)] hover:text-white"
            >
              GitHub
            </a>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 text-sm text-white/45 sm:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block hover:text-[var(--rose)]">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">Phone</p>
              <p className="mt-2">{profile.phone}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">Location</p>
              <p className="mt-2">{profile.location}</p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">Name</span>
            <input
              required
              name="name"
              autoComplete="name"
              className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--rose)]"
            />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">Email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--rose)]"
            />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--rose)]"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-cta disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {feedback ? (
            <p className={`text-sm ${status === "error" ? "text-[var(--rose)]" : "text-white/60"}`}>
              {feedback}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 text-sm text-white/35 sm:flex-row sm:items-center">
        <p className="font-[family-name:var(--font-display)] text-base text-white/70">
          {profile.firstName} <span className="text-[var(--rose)]">{profile.lastInitial}</span>
        </p>
        <p>© {new Date().getFullYear()} · Dynamic portfolio on Next.js</p>
      </div>
    </footer>
  );
}

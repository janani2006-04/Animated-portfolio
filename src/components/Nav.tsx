"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/content";

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:right-8 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-4">
        {navLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="group flex items-center justify-end gap-3 text-sm tracking-wide"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "font-medium text-[var(--rose)]"
                      : "text-white/55 group-hover:text-white/90"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-[var(--rose)] shadow-[0_0_12px_var(--rose)]"
                      : "bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 top-4 z-50 lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md"
      >
        <span className="sr-only">Menu</span>
        <div className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-px w-full bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-full bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f]/95 p-3 shadow-2xl backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-[var(--rose)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

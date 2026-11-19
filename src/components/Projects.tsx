"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError("");
      try {
        const query = active === "All" ? "" : `?category=${encodeURIComponent(active)}`;
        const res = await fetch(`/api/portfolio${query}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Could not load projects");
        const data = await res.json();
        setProjects(data.projects ?? []);
        if (Array.isArray(data.categories)) setCategories(data.categories);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Projects are taking a moment. Please refresh.");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, [active]);

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Selected work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mt-3 max-w-2xl"
        >
          Projects that mix intelligence with craft.
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-xs tracking-wide transition ${
                active === category
                  ? "bg-[var(--rose)] text-[#1a1012]"
                  : "border border-white/15 text-white/60 hover:border-[var(--rose)]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {error ? <p className="mt-8 text-sm text-[var(--rose)]">{error}</p> : null}

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-56 animate-pulse border border-white/10 bg-white/[0.03]"
                />
              ))
            : projects.map((project, i) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative flex flex-col border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition duration-500 hover:border-[var(--rose)]/40 hover:from-[var(--rose)]/[0.07]"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--rose)]">
                    {project.category}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 text-[11px] tracking-wide text-white/50"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
        </div>
      </div>
    </section>
  );
}

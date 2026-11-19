"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";

type Zone = "idle" | "left" | "right" | "center";

const HOLD_MS = 2500;

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const zoneRef = useRef<Zone>("idle");
  const holdUntil = useRef(0);
  const look = useRef(0);
  const greet = useRef(0);
  const targetLook = useRef(0);
  const targetGreet = useRef(0);
  const coarsePointer = useRef(false);

  const [zone, setZone] = useState<Zone>("idle");
  const [centerLine, setCenterLine] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (max-width: 767px)");
    const sync = () => {
      coarsePointer.current = mq.matches;
      if (mq.matches) applyZone("center");
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const playIfAllowed = () => {
      if (reduce.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };

    playIfAllowed();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !reduce.matches) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(root);

    const onReduce = () => {
      if (reduce.matches) video.pause();
      else void video.play().catch(() => {});
    };
    reduce.addEventListener("change", onReduce);

    return () => {
      observer.disconnect();
      reduce.removeEventListener("change", onReduce);
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (
        (zoneRef.current === "left" || zoneRef.current === "right") &&
        holdUntil.current &&
        now > holdUntil.current
      ) {
        zoneRef.current = "idle";
        targetLook.current = 0;
        targetGreet.current = 0;
        holdUntil.current = 0;
        setZone("idle");
      }

      look.current += (targetLook.current - look.current) * 0.08;
      greet.current += (targetGreet.current - greet.current) * 0.07;

      if (frameRef.current) {
        const x = look.current * 28;
        const rot = look.current * -5;
        const scale = 1.02 + greet.current * 0.035;
        frameRef.current.style.transform = `translate3d(${x}px, 0, 0) rotateY(${rot}deg) scale(${scale})`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (zone !== "center") {
      setCenterLine(0);
      return;
    }
    const id = window.setInterval(() => {
      setCenterLine((n) => (n + 1) % 3);
    }, 1300);
    return () => window.clearInterval(id);
  }, [zone]);

  function applyZone(next: Zone) {
    if (next === zoneRef.current) return;
    zoneRef.current = next;
    setZone(next);

    if (next === "left") {
      targetLook.current = -1;
      targetGreet.current = 0;
      holdUntil.current = performance.now() + HOLD_MS;
    } else if (next === "right") {
      targetLook.current = 1;
      targetGreet.current = 0;
      holdUntil.current = performance.now() + HOLD_MS;
    } else if (next === "center") {
      targetLook.current = 0;
      targetGreet.current = 1;
      holdUntil.current = 0;
    } else {
      targetLook.current = 0;
      targetGreet.current = 0;
      holdUntil.current = 0;
    }
  }

  function onMove(event: React.PointerEvent<HTMLElement>) {
    if (coarsePointer.current) return;
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    if (x < 0.33) applyZone("left");
    else if (x > 0.67) applyZone("right");
    else applyZone("center");
  }

  function onLeave() {
    if (coarsePointer.current) return;
    applyZone("idle");
  }

  const reaction =
    zone === "left"
      ? "Anyone here on the left?"
      : zone === "right"
        ? "Anyone here on the right?"
        : zone === "center"
          ? ["Hey, it's you!", "Hiiii!", "Check out the portfolio"][centerLine]
          : "";

  return (
    <section
      id="home"
      ref={rootRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative min-h-[100svh] overflow-hidden bg-[#f7f1f2]"
    >
      <div className="pointer-events-none absolute inset-0 hero-rose-wash" />

      <div
        ref={frameRef}
        className="absolute inset-0 origin-center will-change-transform"
        style={{ transform: "scale(1.02)" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[42%_28%] md:object-[45%_32%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero.jpg"
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#2a181c]/40 via-transparent to-[#9a4a56]/22" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012]/60 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 hero-edge-glow" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-16">
        <header className="flex items-center justify-between pt-2">
          <p className="font-[family-name:var(--font-display)] text-xl text-white md:text-2xl">
            {profile.firstName}{" "}
            <span className="text-[var(--rose)]">{profile.lastInitial}</span>
          </p>
          <p className="hidden text-[11px] uppercase tracking-[0.28em] text-white/80 sm:block">
            Move cursor to call me
            <span className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--rose)]" />
          </p>
        </header>

        <h1 className="sr-only">
          {profile.fullName} — {profile.title}
        </h1>

        <div className="flex flex-1 flex-col justify-center md:hidden">
          <p className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.28em] text-white/90">
            {profile.title}
          </p>
          <p className="mt-3 max-w-sm text-white/80">{profile.tagline}</p>
          <a href="#projects" className="btn-cta mt-6 w-fit">
            Let&apos;s Build →
          </a>
        </div>

        <div className="hidden items-end justify-between gap-8 pb-6 md:flex">
          <a href="#projects" className="btn-cta group shadow-lg">
            Let&apos;s Build
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <p className="max-w-xs text-right font-[family-name:var(--font-display)] text-3xl text-white drop-shadow">
            {reaction || "Move cursor to call me !"}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <a
              href="#about"
              className="text-[11px] uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
            >
              Explore the portfolio
            </a>
          </div>
          <p className="max-w-[14rem] text-right text-sm text-white/80 md:hidden">
            {reaction || "Scroll to explore."}
          </p>
        </div>
      </div>
    </section>
  );
}

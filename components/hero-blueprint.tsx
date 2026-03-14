"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { businessDetails, extensionTypes, trustHighlights } from "@/content/site-content";

const blueprintPaths = [
  [
    [0.14, 0.62],
    [0.28, 0.49],
    [0.43, 0.49],
    [0.58, 0.34],
    [0.77, 0.49],
    [0.77, 0.72],
    [0.14, 0.72],
    [0.14, 0.62]
  ],
  [
    [0.23, 0.56],
    [0.23, 0.72],
    [0.37, 0.72],
    [0.37, 0.56],
    [0.23, 0.56]
  ],
  [
    [0.48, 0.52],
    [0.48, 0.72],
    [0.62, 0.72],
    [0.62, 0.52],
    [0.48, 0.52]
  ],
  [[0.43, 0.49], [0.43, 0.72]],
  [[0.58, 0.34], [0.58, 0.72]],
  [[0.67, 0.41], [0.67, 0.72]],
  [[0.11, 0.78], [0.29, 0.72], [0.78, 0.72], [0.9, 0.78]],
  [[0.19, 0.41], [0.34, 0.29], [0.5, 0.29], [0.64, 0.18], [0.83, 0.36]]
] as const;

const featuredWorks = [
  {
    title: "Single & Double Storey",
    subtitle: "Expanded family living",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Rear & Loft Extensions",
    subtitle: "Space with added value",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Kitchen Transformations",
    subtitle: "Premium everyday function",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80"
  }
] as const;

export function HeroBlueprint() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  const revealImage = useMemo(() => progress > 0.9, [progress]);

  useEffect(() => {
    let frame = 0;
    const duration = 3200;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = Math.min(time - start, duration);
      setProgress(elapsed / duration);
      if (elapsed < duration) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const render = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);
      context.clearRect(0, 0, width, height);

      context.strokeStyle = "rgba(212,175,55,0.08)";
      context.lineWidth = 1;
      for (let x = 0; x < width; x += 80) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += 80) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      const totalSegments = blueprintPaths.reduce((sum, path) => sum + path.length - 1, 0);
      let visibleSegments = progress * totalSegments;

      context.strokeStyle = "rgba(244,232,196,0.92)";
      context.lineWidth = 1.4;
      context.shadowColor = "rgba(212,175,55,0.35)";
      context.shadowBlur = 12;

      for (const path of blueprintPaths) {
        context.beginPath();
        for (let i = 0; i < path.length - 1; i += 1) {
          const [sx, sy] = path[i];
          const [ex, ey] = path[i + 1];
          const fromX = sx * width;
          const fromY = sy * height;
          const toX = ex * width;
          const toY = ey * height;

          if (i === 0) context.moveTo(fromX, fromY);

          if (visibleSegments >= 1) {
            context.lineTo(toX, toY);
            visibleSegments -= 1;
            continue;
          }

          if (visibleSegments > 0) {
            const partX = fromX + (toX - fromX) * visibleSegments;
            const partY = fromY + (toY - fromY) * visibleSegments;
            context.lineTo(partX, partY);
            visibleSegments = 0;
          }

          break;
        }
        context.stroke();
      }
    };

    render();
    window.addEventListener("resize", render);

    return () => {
      window.removeEventListener("resize", render);
    };
  }, [progress]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-background pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_35%),linear-gradient(180deg,_rgba(5,5,5,0.12)_0%,_rgba(5,5,5,0.6)_65%,_#050505_100%)]" />
      <div className="panel-lines absolute inset-0 opacity-60" />
      <div className="noise-overlay absolute inset-0 opacity-40" />

      <motion.div
        initial={{ opacity: 0.72, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury contemporary architectural residence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(5,5,5,0.86)_0%,_rgba(5,5,5,0.72)_38%,_rgba(5,5,5,0.38)_65%,_rgba(5,5,5,0.74)_100%)]" />
      </motion.div>

      <motion.canvas
        ref={canvasRef}
        className="blueprint-grid absolute inset-0 mix-blend-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: revealImage ? 0.28 : 0.95 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className="luxury-container relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-between pb-8">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.7fr)]">
          <div className="max-w-3xl pt-16 md:pt-24">
            <Reveal>
              <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-gold/90">
                <span>North London Specialists</span>
                <span className="h-px w-20 bg-gold/40" />
                <span>Premium House Extensions</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-4xl text-[3rem] leading-[0.92] text-[#f2ead8] sm:text-[4.5rem] md:text-[5.8rem] xl:text-[6.8rem]">
                House extensions and refined building works across London.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/72 md:text-lg">
                {businessDetails.intro}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap gap-3">
                {trustHighlights.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/72">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110"
                >
                  Explore Services
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#efe5c7] transition hover:text-gold"
                >
                  Get Fast Prices
                  <span className="h-px w-10 bg-gold/40" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={businessDetails.phoneHref} className="inline-flex items-center gap-3 rounded-sm border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75 transition hover:border-gold/40 hover:text-gold">
                  <Phone size={16} className="text-gold" />
                  {businessDetails.phoneDisplay}
                </a>
                <a href={`mailto:${businessDetails.email}`} className="inline-flex items-center gap-3 rounded-sm border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75 transition hover:border-gold/40 hover:text-gold">
                  <Mail size={16} className="text-gold" />
                  {businessDetails.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hidden self-end justify-self-end lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto w-full max-w-[520px] rounded-sm border border-white/12 bg-black/38 p-5 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#eadfbf]">
                <span>Popular Formats</span>
                <span className="text-white/45">01 — 03</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {featuredWorks.map((work) => (
                  <article key={work.title} className="group">
                    <div className="relative aspect-[0.96] overflow-hidden rounded-sm border border-white/10">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    </div>
                    <p className="mt-3 text-sm text-[#f2ead8]">{work.title}</p>
                    <p className="mt-1 text-xs text-white/48">{work.subtitle}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto_auto] md:items-end">
          <Reveal delay={0.28}>
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">Extension Focus</p>
              <p className="mt-3 font-[family-name:var(--font-playfair)] text-3xl leading-none text-[#f2ead8] md:text-5xl">
                {extensionTypes.slice(0, 3).join(" · ")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="text-sm text-white/55">
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/38">Location</p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                Hanwell office serving North, East, South & West London
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.38}>
            <div className="flex items-center gap-8 text-[13px] text-white/52">
              <a href="#services" className="transition hover:text-gold">Services</a>
              <a href="#areas" className="transition hover:text-gold">Areas</a>
              <a href="#contact" className="transition hover:text-gold">Contact</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

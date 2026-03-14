"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

import { businessDetails, stats } from "@/content/site-content";

type Stat = (typeof stats)[number];

function CountUp({ value, suffix }: Pick<Stat, "value" | "suffix">) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1200;
        const from = 0;
        const to = value;
        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const current = Math.floor(from + (to - from) * progress);
          setCount(current);
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="section-space border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
    >
      <div className="luxury-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <Reveal>
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Measured Excellence</p>
            <h2 className="mt-4 text-4xl leading-tight text-[#f2ead8] md:text-5xl">
              Substance, structure, and London-wide reach.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/62">{businessDetails.yearsExperience} with availability across all four corners of London.</p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.07}
              className="rounded-sm border border-white/10 bg-white/[0.02] p-8"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gold">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Compass, DraftingCompass, Hammer, KeyRound } from "lucide-react";
import { Reveal } from "@/components/reveal";

import { processSteps } from "@/content/site-content";

const stepIcons = [Compass, DraftingCompass, Hammer, KeyRound] as const;

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="section-space border-t border-white/10 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
    >
      <div className="luxury-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Method</p>
            <h2 className="mt-4 text-4xl text-[#f2ead8] md:text-6xl">A process built around planning, compliance, and craft.</h2>
            <p className="mt-6 text-base leading-7 text-white/58">
              From the first brief through planning support, structural delivery, and final completion, every stage is managed with calm precision.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-10 pl-8 md:pl-16">
          <div className="gold-line absolute left-3 top-0 h-full w-px md:left-6" />
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative rounded-sm border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <div className="absolute -left-[2.05rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-gold/70 bg-black text-gold shadow-glow md:-left-[3.1rem]">
                    <Icon size={16} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold/90">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-white/75">{step.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

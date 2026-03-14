"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    title: "Single-Storey Extension",
    subtitle: "Clean lateral space for kitchens, dining, and family life.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
  },
  {
    title: "Double-Storey Extension",
    subtitle: "Expanded accommodation with structural coherence across floors.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Rear & Loft Combination",
    subtitle: "A smart route to unlock both living space and upper-floor value.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Wrap-Around Extension",
    subtitle: "High-impact ground-floor transformation with generous light and flow.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80"
  }
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="section-space">
      <div className="luxury-container">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Popular Home Extensions</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="mt-4 max-w-3xl text-4xl text-[#f2ead8] md:text-6xl">
              Extension types tailored to period homes, modern houses, and evolving family needs.
            </h2>
            <p className="max-w-md text-sm leading-7 text-white/55">
              The live business offer spans side returns, kitchen extensions, loft combinations, wrap-arounds, and multi-storey additions across London.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-12 md:auto-rows-[260px]">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.08 * index}
              className={index === 0 ? "md:col-span-7 md:row-span-2" : index === 3 ? "md:col-span-7" : "md:col-span-5"}
            >
              <motion.article
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.02]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.58))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold/85">Extension Format</p>
                  <p className="mt-3 text-2xl text-[#f6efdc]">{project.title}</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">{project.subtitle}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

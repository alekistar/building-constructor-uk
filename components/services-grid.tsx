import { DraftingCompass, Hammer, Home, LampDesk, LayoutGrid, PaintBucket, PanelsTopLeft, ShieldCheck, Sparkles, Warehouse } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { extensionTypes, services, trustHighlights, valuePoints } from "@/content/site-content";

const icons = [
  Home,
  DraftingCompass,
  Warehouse,
  PaintBucket,
  PanelsTopLeft,
  Hammer,
  Sparkles,
  LayoutGrid,
  ShieldCheck,
  LampDesk
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="section-space border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
      <div className="luxury-container space-y-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Service Portfolio</p>
              <h2 className="mt-4 text-4xl text-[#f2ead8] md:text-6xl">A complete construction offer, framed with a premium feel.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 md:grid-cols-3">
              {valuePoints.map((point) => (
                <article key={point.title} className="rounded-sm border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-gold/80">{point.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/68">{point.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group h-full rounded-sm border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-gold/45 hover:bg-white/[0.03]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/35 bg-gold/10 text-gold">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-2xl text-[#f6efdc]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-gold/90">Popular Extension Types</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {extensionTypes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-sm border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-gold/90">Why Clients Call</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {trustHighlights.map((item) => (
                  <div key={item} className="rounded-sm border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/72">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Building2, Mail, MapPinned, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { areaGroups, businessDetails } from "@/content/site-content";

export function CoverageSection() {
  return (
    <section id="areas" className="section-space border-t border-white/10">
      <div className="luxury-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">London Coverage</p>
            <h2 className="mt-4 text-4xl text-[#f2ead8] md:text-6xl">North London specialists with reach across the capital.</h2>
            <p className="mt-6 text-base leading-7 text-white/65">
              From side return and kitchen extensions to loft, wrap-around, and multi-storey builds, the studio supports residential and commercial projects throughout Greater and Inner London.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {areaGroups.regions.map((region) => (
                <span key={region} className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f1e4b6]">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal delay={0.08}>
            <article className="rounded-sm border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-gold/90">Featured Areas</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {areaGroups.featuredAreas.map((area) => (
                  <span key={area} className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/72">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-white/58">
                Coverage also extends across major London boroughs including {areaGroups.boroughs.slice(0, 8).join(", ")}, and more.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-gold/90">Office & Contact</p>
              <div className="mt-5 space-y-4 text-sm text-white/70">
                <p className="flex items-start gap-3"><Building2 size={16} className="mt-1 text-gold" /> <span>{businessDetails.name}</span></p>
                <p className="flex items-start gap-3"><MapPinned size={16} className="mt-1 text-gold" /> <span>{businessDetails.office}</span></p>
                <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> <a href={businessDetails.phoneHref} className="transition hover:text-gold">{businessDetails.phoneDisplay}</a></p>
                <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> <a href={`mailto:${businessDetails.email}`} className="transition hover:text-gold">{businessDetails.email}</a></p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110"
              >
                Arrange a Consultation
                <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

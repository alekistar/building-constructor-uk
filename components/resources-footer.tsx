import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { blogPosts, businessDetails, regulationLinks, socialLinks } from "@/content/site-content";

export function ResourcesFooter() {
  return (
    <footer id="resources" className="border-t border-white/10 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.02))] py-14 md:py-20">
      <div className="luxury-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr_0.8fr]">
        <Reveal>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">The Building Constructor</p>
            <h2 className="mt-4 text-3xl text-[#f2ead8] md:text-5xl">Premium extension expertise with practical guidance behind it.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">{businessDetails.intro}</p>
            <div className="mt-6 space-y-2 text-sm text-white/68">
              <p>{businessDetails.office}</p>
              <p><a href={businessDetails.phoneHref} className="transition hover:text-gold">{businessDetails.phoneDisplay}</a> · <a href={`mailto:${businessDetails.email}`} className="transition hover:text-gold">{businessDetails.email}</a></p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/90">Recent Topics</p>
              <ul className="mt-5 space-y-3 text-sm text-white/68">
                {blogPosts.map((post) => (
                  <li key={post} className="flex items-start gap-2">
                    <ArrowUpRight size={14} className="mt-1 shrink-0 text-gold" />
                    <span>{post}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/90">Compliance & References</p>
              <ul className="mt-5 space-y-3 text-sm text-white/68">
                {regulationLinks.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowUpRight size={14} className="mt-1 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold/90">Social Channels</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/72 transition hover:border-gold/40 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/38">Copyright © BuildingConstructor.co.uk</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

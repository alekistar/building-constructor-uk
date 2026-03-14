"use client";

import { ArrowRight, Mail, MapPinned, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { businessDetails, extensionTypes } from "@/content/site-content";

export function ContactForm() {
  return (
    <section id="contact" className="section-space border-t border-white/10">
      <div className="luxury-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Private Enquiry</p>
          <h2 className="mt-4 max-w-2xl text-4xl text-[#f2ead8] md:text-6xl">Talk to the North London office about your next extension.</h2>
          <p className="mt-6 max-w-xl text-white/70">Share your property details, preferred extension type, and timeline. The team can guide everything from early feasibility through to delivery.</p>
          <div className="mt-8 space-y-4 rounded-sm border border-white/10 bg-white/[0.02] p-6">
            <p className="flex items-center gap-3 text-sm text-white/74"><Phone size={16} className="text-gold" /> <a href={businessDetails.phoneHref} className="transition hover:text-gold">{businessDetails.phoneDisplay}</a></p>
            <p className="flex items-center gap-3 text-sm text-white/74"><Mail size={16} className="text-gold" /> <a href={`mailto:${businessDetails.email}`} className="transition hover:text-gold">{businessDetails.email}</a></p>
            <p className="flex items-start gap-3 text-sm text-white/74"><MapPinned size={16} className="mt-0.5 text-gold" /> <span>{businessDetails.office}</span></p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="space-y-5 rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 md:p-8">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">Full Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-sm border border-gold/45 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">Email</span>
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full rounded-sm border border-gold/45 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">Extension Type</span>
              <select className="w-full rounded-sm border border-gold/45 bg-black/25 px-4 py-3 text-sm text-white outline-none transition focus:border-gold">
                <option value="">Select a project type</option>
                {extensionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">Project Brief</span>
              <textarea
                rows={4}
                placeholder="Describe your property, location, and the space you want to create"
                className="w-full resize-none rounded-sm border border-gold/45 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:brightness-110"
            >
              Submit Enquiry
              <ArrowRight size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

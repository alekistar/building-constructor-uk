"use client";

import { ArrowUpRight, Building2, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#stats", label: "Expertise" },
  { href: "#projects", label: "Extensions" },
  { href: "#areas", label: "Areas" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact Us" }
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-black/28 backdrop-blur-xl">
      <nav className="luxury-container flex h-24 items-center justify-between gap-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/50 bg-gold/10 text-gold">
            <Building2 size={20} strokeWidth={1.6} />
          </span>

          <span>
            <span className="block font-[family-name:var(--font-playfair)] text-lg tracking-[0.06em] text-white">
              Building Constructor
            </span>
            <span className="block text-[10px] uppercase tracking-[0.26em] text-white/55">
              North London Extensions
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/78 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-sm border border-gold/70 bg-gold px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition hover:brightness-110 sm:inline-flex"
          >
            Request a Consultation
            <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/12 bg-white/[0.04] text-white transition hover:border-gold/40 hover:text-gold lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-black/90 lg:hidden">
          <div className="luxury-container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-2 py-3 text-sm text-white/78 transition hover:bg-white/[0.04] hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-sm border border-gold/70 bg-gold px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition hover:brightness-110"
            >
              Request a Consultation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

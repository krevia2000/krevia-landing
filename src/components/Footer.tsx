"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS } from "../constants/tokens";
import { InstagramLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#07070A] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal distance={12}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
            {/* Official Logo in Footer */}
            <div className="space-y-3">
              <Link
                href="/"
                className="inline-block transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                <Logo size="lg" />
              </Link>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Software y webs a medida para negocios que quieren crecer de forma
                ordenada y previsible.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-400">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="text-krevia-cyan hover:text-white transition-colors duration-150 font-medium"
              >
                Contacto
              </a>
            </nav>
          </div>
        </ScrollReveal>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin size={14} className="text-krevia-cyan" />
              <span>{BRAND.city}</span>
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-pink-400 transition-colors duration-150 group"
            >
              <InstagramLogo size={14} className="transform group-hover:scale-110 transition-transform duration-150" />
              <span>{BRAND.instagram}</span>
            </a>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-150 group"
            >
              <EnvelopeSimple size={14} className="transform group-hover:scale-110 transition-transform duration-150" />
              <span>{BRAND.email}</span>
            </a>
          </div>

          <p className="font-mono text-[11px] text-zinc-500">
            © {currentYear} {BRAND.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS } from "../constants/tokens";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo oficial */}
          <Link
            href="/"
            className="group flex items-center transition-all duration-200 hover:opacity-95 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-krevia-violet rounded-lg"
            aria-label="Krevia inicio"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-zinc-300 hover:text-white transition-colors duration-200 font-medium group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-krevia-violet/80 rounded-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              className="btn-tactile btn-tactile-lift group inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-krevia-violet hover:bg-krevia-violet-light rounded-lg shadow-sm hover:shadow-glow-violet active:scale-[0.97]"
            >
              <span>{BRAND.primaryCta}</span>
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white active:scale-95 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-krevia-violet rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#121216]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors font-medium active:scale-[0.99]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-white/[0.08]">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-tactile flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-krevia-violet hover:bg-krevia-violet-light rounded-lg shadow-sm active:scale-[0.97]"
              >
                <span>{BRAND.primaryCta}</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

"use client";

import React from "react";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { DashboardMockup } from "./DashboardMockup";
import { BRAND } from "../constants/tokens";
import { ScrollReveal } from "./ScrollReveal";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Background ambient lighting - slow organic breathing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-krevia-violet/15 via-krevia-cyan/5 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Element 1: Eyebrow / Location badge */}
        <ScrollReveal delay={100} distance={12}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300 mb-6 badge-shimmer shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-krevia-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>Rosario, Argentina · Software de producción</span>
          </div>
        </ScrollReveal>

        {/* Element 2: Headline (max 2 lines desktop) */}
        <ScrollReveal delay={200} distance={16}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
            Software a medida para negocios que quieren crecer sin improvisar.
          </h1>
        </ScrollReveal>

        {/* Element 3: Subtext (<= 20 words, <= 4 lines) */}
        <ScrollReveal delay={300} distance={16}>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Webs y sistemas que ordenan pedidos, clientes y operaciones, pensados
            para cómo trabaja tu negocio.
          </p>
        </ScrollReveal>

        {/* Element 4: CTAs */}
        <ScrollReveal delay={400} distance={14}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
            <a
              href="#contacto"
              className="btn-tactile btn-tactile-lift group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-krevia-violet hover:bg-krevia-violet-light rounded-xl shadow-lg shadow-krevia-violet/25 hover:shadow-glow-violet active:scale-[0.97]"
            >
              <span>{BRAND.primaryCta}</span>
              <ArrowUpRight
                size={18}
                weight="bold"
                className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out"
              />
            </a>
            <a
              href="#metodologia"
              className="btn-tactile btn-tactile-lift group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.16] rounded-xl transition-colors duration-200 active:scale-[0.97]"
            >
              <span>{BRAND.secondaryCta}</span>
              <CaretDown
                size={16}
                className="transform group-hover:translate-y-0.5 transition-transform duration-200 ease-out"
              />
            </a>
          </div>
        </ScrollReveal>

        {/* Mockup / UI abstracta de dashboard */}
        <ScrollReveal delay={480} distance={20}>
          <div className="relative mt-2">
            {/* Subtle glow behind mockup with gentle breathe */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-krevia-violet/10 to-krevia-cyan/5 blur-2xl -z-10 rounded-2xl animate-pulse-subtle" />
            <DashboardMockup />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

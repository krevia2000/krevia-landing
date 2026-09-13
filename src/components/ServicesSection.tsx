"use client";

import React from "react";
import {
  GearSix,
  Globe,
  Lightning,
  Check,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Lo que construimos para vos
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              No vendemos paquetes enlatados donde tu negocio se tiene que adaptar
              a lo que programó un tercero. Diseñamos la solución exacta para tu
              flujo de trabajo real.
            </p>
          </div>
        </ScrollReveal>

        {/* Varied Layout: 1 Hero feature card + 2 complementary cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Main Flagship - Sistemas de gestión (Col-span 12) */}
          <div className="lg:col-span-12">
            <ScrollReveal delay={100} distance={20}>
              <div className="card-luxury p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#121218] via-[#0F0F14] to-[#0A0A0F] border border-white/[0.08] hover:border-krevia-violet/40 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-krevia-violet/10 border border-krevia-violet/20 text-xs font-mono text-krevia-violet-light">
                      <GearSix size={14} weight="fill" className="transform group-hover:rotate-45 transition-transform duration-300 ease-out" />
                      <span>Solución principal</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Sistemas de gestión a medida
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      Creamos el panel operativo con el que tu equipo va a manejar
                      el negocio todos los días. Control de pedidos, seguimiento de
                      clientes, gestión de stock y estados de entrega en una sola
                      pantalla ágil y sin complicaciones.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 group/item">
                        <Check size={16} className="text-krevia-cyan flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-150" weight="bold" />
                        <span>Control de stock con alertas críticas</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 group/item">
                        <Check size={16} className="text-krevia-cyan flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-150" weight="bold" />
                        <span>Seguimiento de pedidos en tiempo real</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 group/item">
                        <Check size={16} className="text-krevia-cyan flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-150" weight="bold" />
                        <span>Cuentas corrientes y saldos claros</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 group/item">
                        <Check size={16} className="text-krevia-cyan flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-150" weight="bold" />
                        <span>Roles y permisos por usuario</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual preview block on the right */}
                  <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-white/[0.08] space-y-3 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                      <span>Módulo Operativo Activo</span>
                      <span className="text-krevia-cyan flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-krevia-cyan animate-pulse" />
                        v2.4 en línea
                      </span>
                    </div>
                    <div className="space-y-2 text-zinc-300">
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-150">
                        <span>Pedidos en cola:</span>
                        <span className="text-white font-bold font-mono">18 órdenes</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-150">
                        <span>Tiempo medio de despacho:</span>
                        <span className="text-emerald-400 font-bold font-mono">-45 minutos</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-150">
                        <span>Faltantes en depósito:</span>
                        <span className="text-krevia-cyan font-bold font-mono">0 detectados</span>
                      </div>
                    </div>
                    <div className="pt-2 text-[11px] text-zinc-500 text-center">
                      Diseñado específicamente para tu rubro
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2: Webs a medida (Col-span 6) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={180} distance={20} className="h-full">
              <div className="card-luxury p-8 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-krevia-violet/40 flex flex-col justify-between h-full group">
                <div className="space-y-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-krevia-violet/10 border border-krevia-violet/20 flex items-center justify-center text-krevia-violet-light transform group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Globe size={22} weight="bold" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Webs institucionales y catálogos
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Páginas web profesionales que cargan al instante, posicionan
                    bien en Google y explican claramente qué vendés. Sin plantillas
                    lentas ni diseños genéricos.
                  </p>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-violet flex-shrink-0" weight="bold" />
                      <span>Velocidad de carga de primer nivel (Next.js)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-violet flex-shrink-0" weight="bold" />
                      <span>Catálogo autoadministrable de productos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-violet flex-shrink-0" weight="bold" />
                      <span>Botón de pedido directo a WhatsApp integrado</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span>Tecnología: Next.js + Tailwind</span>
                  <span className="text-krevia-violet-light font-mono">100% responsive</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 3: Digitalización y automatización (Col-span 6) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={260} distance={20} className="h-full">
              <div className="card-luxury p-8 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-krevia-cyan/40 flex flex-col justify-between h-full group">
                <div className="space-y-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-krevia-cyan/10 border border-krevia-cyan/20 flex items-center justify-center text-krevia-cyan transform group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Lightning size={22} weight="bold" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Digitalización y automatización
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Conectamos tus sistemas existentes. Conectá WhatsApp con tu
                    depósito, enviá confirmaciones automáticas y eliminá el trabajo
                    manual de copiar y pegar datos entre pantallas.
                  </p>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-cyan flex-shrink-0" weight="bold" />
                      <span>Bots de WhatsApp para recepción de pedidos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-cyan flex-shrink-0" weight="bold" />
                      <span>Alertas automáticas de pagos y despachos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-krevia-cyan flex-shrink-0" weight="bold" />
                      <span>Reportes diarios directos a tu celular</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span>Integraciones: APIs, WhatsApp, ERPs</span>
                  <span className="text-krevia-cyan font-mono">Cero carga duplicada</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import {
  FileX,
  ChatCircleDots,
  ClockAfternoon,
  WarningCircle,
  CheckCircle,
  Database,
  DeviceMobileCamera,
  ShieldCheck,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: <FileX size={20} className="text-red-400" />,
      title: "Planillas desactualizadas",
      description:
        "Cuatro versiones del mismo Excel abiertas al mismo tiempo. Alguien cambia un precio y nadie se entera hasta que ya cobraste mal.",
    },
    {
      icon: <ChatCircleDots size={20} className="text-amber-400" />,
      title: "Pedidos dispersos en WhatsApp",
      description:
        "Mensajes de audio, fotos de remitos, clientes preguntando si salió el despacho. Tu equipo pasa horas rastreando qué falta entregar.",
    },
    {
      icon: <ClockAfternoon size={20} className="text-amber-400" />,
      title: "Carga manual repetitiva",
      description:
        "Copiar del chat a la planilla, de la planilla a la factura y de la factura al depósito. Horas de personas valiosas usadas en tareas mecánicas.",
    },
    {
      icon: <WarningCircle size={20} className="text-red-400" />,
      title: "Cero visibilidad en tiempo real",
      description:
        "Para saber cuánto se vendió hoy o qué productos están en falta tenés que pedir informes que tardan días en armarse.",
    },
  ];

  const solutions = [
    {
      icon: <Database size={20} className="text-krevia-cyan" />,
      title: "Una sola fuente de la verdad",
      description:
        "Base de datos centralizada y segura. Precios, clientes y stock actualizados en el momento para todo tu equipo.",
    },
    {
      icon: <DeviceMobileCamera size={20} className="text-krevia-cyan" />,
      title: "Toma de pedidos sin fricción",
      description:
        "Tus clientes o vendedores cargan pedidos desde una web rápida o bot asistido. El pedido entra ordenado directo a preparación.",
    },
    {
      icon: <CheckCircle size={20} className="text-emerald-400" />,
      title: "Operaciones automáticas",
      description:
        "El sistema valida stock, calcula montos y notifica al cliente sin que nadie tenga que escribir cinco mensajes de seguimiento.",
    },
    {
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      title: "Control total desde cualquier lugar",
      description:
        "Métricas de ventas, cobranzas y stock al instante desde tu computadora o celular, con permisos claros por rol.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: stacked vertically */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Tu negocio creció. El Excel, no.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Las planillas y los grupos de WhatsApp sirven para arrancar. Pero
              cuando el volumen sube, los procesos manuales se vuelven un techo de
              cristal que genera errores costosos y quema a tu equipo.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison grid: Before vs After */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: The current bottleneck */}
          <ScrollReveal delay={100} distance={20}>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F14] border border-red-500/20 hover:border-red-500/35 transition-all duration-300 shadow-lg group">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                  <h3 className="text-lg font-semibold text-white">
                    Operando con parches
                  </h3>
                </div>
                <span className="text-xs font-mono text-red-400/90 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                  Pérdida de tiempo y margen
                </span>
              </div>

              <div className="space-y-6">
                {painPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-2 rounded-xl transition-colors duration-150 hover:bg-white/[0.02]"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: With Krevia custom software */}
          <ScrollReveal delay={200} distance={20}>
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#14141E] to-[#0F0F16] border border-krevia-violet/30 hover:border-krevia-violet/50 transition-all duration-300 shadow-xl shadow-krevia-violet/5 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-krevia-violet/15 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-subtle" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-krevia-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                    <h3 className="text-lg font-semibold text-white">
                      Con tu sistema a medida
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-krevia-cyan bg-krevia-cyan/10 px-2.5 py-1 rounded-full border border-krevia-cyan/20">
                    Operación ordenada
                  </span>
                </div>

                <div className="space-y-6">
                  {solutions.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-2 rounded-xl transition-colors duration-150 hover:bg-white/[0.03] group/item"
                    >
                      <div className="mt-0.5 p-2 rounded-lg bg-krevia-violet/10 border border-krevia-violet/20 flex-shrink-0 transform group-hover/item:scale-105 transition-transform duration-200 ease-out">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

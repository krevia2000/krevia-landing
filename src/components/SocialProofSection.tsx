"use client";

import React from "react";
import {
  ShieldCheck,
  CodeBlock,
  MapPin,
  ClockCountdown,
  ArrowRight,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const SocialProofSection: React.FC = () => {
  const guarantees = [
    {
      icon: <ShieldCheck size={24} className="text-krevia-violet" />,
      title: "El código es 100% tuyo",
      description:
        "No retenemos tu software ni te atamos a licencias mensuales obligatorias. El código fuente, la base de datos y la infraestructura son propiedad exclusiva de tu negocio.",
    },
    {
      icon: <MapPin size={24} className="text-krevia-cyan" />,
      title: "Trato directo en Rosario",
      description:
        "Hablás con los mismos profesionales que diseñan y programan tu sistema. Sin intermediarios, ejecutivos de cuenta rotativos ni respuestas automáticas que no resuelven nada.",
    },
    {
      icon: <CodeBlock size={24} className="text-krevia-violet-light" />,
      title: "Tecnología moderna y estándar",
      description:
        "Desarrollamos con Next.js, TypeScript, PostgreSQL y Tailwind. Estándares globales que garantizan velocidad, seguridad y facilidad para sumar nuevas funciones en el futuro.",
    },
    {
      icon: <ClockCountdown size={24} className="text-emerald-400" />,
      title: "Garantía de puesta en marcha",
      description:
        "Incluimos 30 días de acompañamiento intensivo post-lanzamiento para resolver dudas de tu equipo, ajustar detalles operativos y asegurar una adopción sin tropiezos.",
    },
  ];

  const typicalUseCases = [
    {
      category: "Distribución mayorista",
      problem: "3 planillas de Excel desactualizadas y pedidos dispersos por audio.",
      solution: "Portal web de catálogo con precios por cliente y pedidos directo a preparación.",
      result: "Ahorro de 3 horas diarias en carga y cero pedidos traspapelados.",
    },
    {
      category: "Empresa de instalaciones y servicios",
      problem: "Órdenes de servicio en papel y demoras de semanas para facturar.",
      solution: "Panel web responsive para técnicos en calle con firma de conformidad y remito digital.",
      result: "Facturación en el día y trazabilidad total del estado de cada cuadrilla.",
    },
    {
      category: "Comercio con stock crítico",
      problem: "Ventas de productos que ya no estaban en depósito.",
      solution: "Sincronización en tiempo real de inventario con alertas automáticas de reposición.",
      result: "Fin de los reclamos por quiebre de stock y compras a proveedores anticipadas.",
    },
  ];

  return (
    <section id="confianza" className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Confianza basada en reglas claras
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Sabemos que mandar a hacer software puede generar dudas por malas
              experiencias previas. Por eso trabajamos con entregas semanales
              visibles, propiedad total del producto y soporte cara a cara.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              distance={16}
              className="h-full flex flex-col"
            >
              <div className="card-luxury p-6 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between h-full group">
                <div>
                  <div className="p-3 w-fit rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5 transform group-hover:scale-105 group-hover:border-white/[0.12] transition-all duration-200 ease-out">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Typical Use Cases / Honest Archetypes */}
        <ScrollReveal delay={200} distance={20}>
          <div className="rounded-2xl bg-[#121218] border border-white/[0.08] p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                Desafíos operativos típicos que resolvemos
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Situaciones reales que nos traen negocios de la zona antes de
                implementar su sistema:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {typicalUseCases.map((useCase, index) => (
                <div
                  key={index}
                  className="card-luxury p-5 rounded-xl bg-black/40 border border-white/[0.06] hover:border-krevia-violet/30 hover:bg-black/60 flex flex-col justify-between group"
                >
                  <div className="space-y-3 mb-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-krevia-violet/10 text-krevia-violet-light text-[11px] font-mono font-medium">
                      {useCase.category}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono text-red-400/90 block">
                        El problema:
                      </span>
                      <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
                        {useCase.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-krevia-cyan block">
                        La solución:
                      </span>
                      <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-start gap-2">
                    <ArrowRight size={14} className="text-emerald-400 mt-0.5 flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-150" />
                    <span className="text-xs text-emerald-400 font-medium">
                      {useCase.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

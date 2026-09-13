"use client";

import React from "react";
import {
  Storefront,
  Buildings,
  UsersThree,
  Prohibit,
  CheckCircle,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const TargetSection: React.FC = () => {
  const profiles = [
    {
      icon: <Storefront size={24} className="text-krevia-violet" />,
      title: "Comercios y distribuidoras",
      description:
        "Si manejás catálogo de productos, listas de precios diferenciadas por cliente y pedidos diarios por WhatsApp, necesitás que el stock y los remitos se actualicen automáticamente.",
      highlight: "Stock unificado y pedidos rápidos",
    },
    {
      icon: <Buildings size={24} className="text-krevia-cyan" />,
      title: "Pymes y empresas de servicios",
      description:
        "Equipos que coordinan presupuestos, cuadrillas de trabajo, órdenes de servicio o cobranzas. Cuando el volumen sube, depender de la memoria de una persona se vuelve peligroso.",
      highlight: "Trazabilidad de cada trabajo",
    },
    {
      icon: <UsersThree size={24} className="text-emerald-400" />,
      title: "Equipos que operan con planillas",
      description:
        "Negocios donde varias personas cargan información en paralelo y pierden horas semanales pasando datos en limpio o corrigiendo errores de tipeo.",
      highlight: "Menos horas manuales, más control",
    },
  ];

  return (
    <section id="para-quien" className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
              <span>Para quién es Krevia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Pensado para negocios que ya no pueden perder tiempo
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Trabajamos con dueños y líderes operativos de Rosario y la región
              que buscan ordenar su estructura para seguir creciendo sin sumar
              caos.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Target Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              distance={18}
              className="h-full flex flex-col"
            >
              <div className="card-luxury p-7 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between h-full group">
                <div>
                  <div className="p-3 w-fit rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5 transform group-hover:scale-105 group-hover:border-white/[0.12] transition-all duration-200 ease-out">
                    {profile.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {profile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle size={14} className="text-krevia-cyan flex-shrink-0" weight="bold" />
                  <span>{profile.highlight}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Honest contrast box: Para quién NO es */}
        <ScrollReveal delay={250} distance={16}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-200 max-w-4xl mx-auto shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-zinc-800/40 border border-white/[0.06] text-zinc-400 flex-shrink-0">
                <Prohibit size={24} weight="bold" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Para quién no es nuestro servicio
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Si estás buscando una plantilla genérica de bajo costo o una
                  herramienta estándar para armar vos mismo en dos clicks, no somos
                  el equipo adecuado. En Krevia diseñamos y programamos soluciones
                  personalizadas para negocios con flujos propios que necesitan un
                  sistema robusto y duradero.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

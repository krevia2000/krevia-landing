"use client";

import React from "react";
import {
  MagnifyingGlass,
  Browsers,
  CodeSimple,
  RocketLaunch,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <MagnifyingGlass size={22} className="text-krevia-violet" />,
      title: "Descubrimiento y alcance",
      description:
        "Nos juntamos en persona en Rosario o por videollamada para entender cómo trabaja tu equipo, dónde se traban los pedidos y qué datos necesitás ver a diario. Definimos un alcance claro y un presupuesto cerrado.",
      deliverable: "Alcance funcional y roadmap",
    },
    {
      number: "02",
      icon: <Browsers size={22} className="text-krevia-cyan" />,
      title: "Prototipo interactivo",
      description:
        "Diseñamos las pantallas y el flujo de navegación antes de escribir una sola línea de código. Podés hacer click, probarlo y validarlo con tu equipo para asegurarnos de que sea cómodo de usar.",
      deliverable: "Diseño aprobado por vos",
    },
    {
      number: "03",
      icon: <CodeSimple size={22} className="text-krevia-violet-light" />,
      title: "Desarrollo y testing",
      description:
        "Construimos el sistema con tecnologías sólidas y código limpio. Hacemos pruebas reales con tus datos y te mostramos versiones funcionales cada semana para recibir tu feedback continuo.",
      deliverable: "Demostraciones semanales",
    },
    {
      number: "04",
      icon: <RocketLaunch size={22} className="text-emerald-400" />,
      title: "Puesta en marcha y soporte",
      description:
        "Migramos la información de tus planillas existentes, capacitamos a tu personal y dejamos todo funcionando. Tenés línea directa con nosotros para dudas, ajustes o nuevas funciones.",
      deliverable: "Sistema activo + acompañamiento",
    },
  ];

  return (
    <section id="metodologia" className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: vertically stacked */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Cuatro pasos, cero sorpresas
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Un método transparente para que sepas en todo momento qué estamos
              construyendo, cuándo lo vas a tener listo y cómo lo va a usar tu
              gente.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              delay={index * 90}
              distance={18}
              className="h-full flex flex-col"
            >
              <div className="card-luxury p-6 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-krevia-violet/40 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-zinc-600 group-hover:text-krevia-violet transition-colors duration-200">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] transform group-hover:scale-105 group-hover:border-white/[0.12] transition-all duration-200 ease-out">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Entregable
                  </span>
                  <span className="text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-krevia-cyan/80" />
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

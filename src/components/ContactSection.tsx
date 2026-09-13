"use client";

import React, { useState } from "react";
import { BRAND } from "../constants/tokens";
import {
  EnvelopeSimple,
  InstagramLogo,
  Copy,
  Check,
  PaperPlaneRight,
  MapPin,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Consulta de sistema a medida - ${name}`
    );
    const body = encodeURIComponent(
      `Hola equipo de Krevia,\n\nMi nombre es ${name}.\nEmail: ${email}\nTeléfono/WhatsApp: ${phone || "No especificado"}\n\nQué necesitamos resolver:\n${need}\n\nSaludos!`
    );

    const mailtoUrl = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-3">
                <span>Contacto directo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Hablemos de cómo ordenar tu negocio
              </h2>

              <p className="text-base text-zinc-400 leading-relaxed mb-6">
                Contanos qué proceso hoy te quita tiempo o dónde se generan
                errores. Te respondemos en el día con una evaluación honesta de
                viabilidad, tiempos y próximos pasos.
              </p>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              {/* Email badge with copy */}
              <ScrollReveal delay={100} distance={14}>
                <div className="card-luxury p-4 rounded-xl bg-[#0F0F14] border border-white/[0.08] hover:border-white/[0.18] flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-krevia-violet/10 text-krevia-violet-light transform group-hover:scale-105 transition-transform duration-200 ease-out">
                      <EnvelopeSimple size={20} weight="bold" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-500 block">
                        Email principal
                      </span>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="text-sm font-medium text-white hover:text-krevia-cyan transition-colors"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn-tactile p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                    title="Copiar email"
                    aria-label="Copiar email de Krevia"
                  >
                    {copied ? (
                      <Check size={18} className="text-emerald-400 animate-in zoom-in-75 duration-150" weight="bold" />
                    ) : (
                      <Copy size={18} className="transform hover:scale-110 transition-transform duration-150" />
                    )}
                  </button>
                </div>
              </ScrollReveal>

              {/* Instagram badge */}
              <ScrollReveal delay={180} distance={14}>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-luxury p-4 rounded-xl bg-[#0F0F14] border border-white/[0.08] hover:border-white/[0.18] flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 transform group-hover:scale-105 transition-transform duration-200 ease-out">
                      <InstagramLogo size={20} weight="bold" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-500 block">
                        Instagram
                      </span>
                      <span className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors">
                        {BRAND.instagram}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-white font-mono flex items-center gap-1">
                    Abrir perfil
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                  </span>
                </a>
              </ScrollReveal>

              {/* Location badge */}
              <ScrollReveal delay={260} distance={14}>
                <div className="card-luxury p-4 rounded-xl bg-[#0F0F14] border border-white/[0.08] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-krevia-cyan/10 text-krevia-cyan">
                    <MapPin size={20} weight="bold" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">
                      Base operativa
                    </span>
                    <span className="text-sm font-medium text-white">
                      {BRAND.city}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150} distance={20}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F14] border border-white/[0.1] hover:border-white/[0.16] transition-all duration-300 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Envianos tu consulta
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Completá este formulario breve y te contactamos para coordinar una
                  primera charla sin compromiso.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <Check size={24} weight="bold" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      ¡Gracias por escribirnos!
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Se abrió tu cliente de correo para enviar la consulta a{" "}
                      <strong className="text-white">{BRAND.email}</strong>. Si no se
                      abrió automáticamente, podés mandarnos un mail directamente a esa
                      dirección.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-krevia-cyan hover:underline pt-2 inline-block font-mono"
                    >
                      Volver a editar el formulario
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Tu nombre o nombre de tu negocio *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: Martín · Distribuidora San Martín"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#16161F] border border-white/[0.1] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-krevia-violet focus:ring-2 focus:ring-krevia-violet/20 focus:bg-[#1a1a24] transition-all duration-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-zinc-300 mb-1.5"
                        >
                          Email de contacto *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#16161F] border border-white/[0.1] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-krevia-violet focus:ring-2 focus:ring-krevia-violet/20 focus:bg-[#1a1a24] transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-zinc-300 mb-1.5"
                        >
                          WhatsApp / Teléfono (opcional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ej: 341 555 1234"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#16161F] border border-white/[0.1] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-krevia-violet focus:ring-2 focus:ring-krevia-violet/20 focus:bg-[#1a1a24] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="need"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        ¿Qué proceso necesitás resolver o digitalizar? *
                      </label>
                      <textarea
                        id="need"
                        required
                        rows={4}
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        placeholder="Contanos brevemente: ¿cómo cargás pedidos hoy? ¿dónde se producen demoras o errores en tu negocio?"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#16161F] border border-white/[0.1] text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-krevia-violet focus:ring-2 focus:ring-krevia-violet/20 focus:bg-[#1a1a24] transition-all duration-200 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-tactile btn-tactile-lift group w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-krevia-violet hover:bg-krevia-violet-light rounded-xl shadow-lg shadow-krevia-violet/20 hover:shadow-glow-violet active:scale-[0.97]"
                    >
                      <span>{BRAND.primaryCta}</span>
                      <PaperPlaneRight
                        size={18}
                        weight="bold"
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out"
                      />
                    </button>

                    <p className="text-[11px] text-zinc-500 text-center pt-1 font-mono">
                      Respondemos en menos de 24 horas hábiles. Cero spam.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

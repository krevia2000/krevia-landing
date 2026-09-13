"use client";

import React, { useState } from "react";
import {
  Package,
  Users,
  Warehouse,
  CheckCircle,
  Clock,
  ArrowsClockwise,
  ArrowUpRight,
  DeviceMobile,
  ChartBar,
} from "@phosphor-icons/react";

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pedidos" | "clientes" | "stock">(
    "pedidos"
  );

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/[0.1] hover:border-white/[0.16] bg-[#0E0E14] shadow-2xl shadow-black/80 overflow-hidden text-left transition-all duration-300">
      {/* Chrome / Window header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#13131A] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60 hover:bg-red-500/80 transition-colors cursor-default" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60 hover:bg-amber-500/80 transition-colors cursor-default" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/60 hover:bg-emerald-500/80 transition-colors cursor-default" />
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <span className="text-xs font-mono text-zinc-400">
            app.tudominio.com / panel-central
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-krevia-cyan/10 border border-krevia-cyan/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-krevia-cyan animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="text-[11px] font-medium text-krevia-cyan">
              Sincronizado en tiempo real
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">v2.4</span>
        </div>
      </div>

      {/* Main dashboard body */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Top metrics row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-krevia-violet/40 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Pedidos procesados hoy</span>
              <Package size={16} className="text-krevia-violet transform group-hover:scale-110 transition-transform duration-200 ease-out" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">
                42
              </span>
              <span className="text-[11px] font-medium text-emerald-400">
                +18% vs ayer
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              0 pedidos demorados
            </p>
          </div>

          <div className="group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-krevia-cyan/40 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Operación acumulada</span>
              <ChartBar size={16} className="text-krevia-cyan transform group-hover:scale-110 transition-transform duration-200 ease-out" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">
                $ 5.480.000
              </span>
              <span className="text-[11px] font-medium text-emerald-400">
                Al día
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Cobranzas automáticas activas
            </p>
          </div>

          <div className="group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-krevia-violet/40 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Control de inventario</span>
              <Warehouse size={16} className="text-krevia-violet transform group-hover:scale-110 transition-transform duration-200 ease-out" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono text-white">
                99.2%
              </span>
              <span className="text-[11px] font-medium text-krevia-cyan">
                Sin faltantes
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Aviso automático a compras
            </p>
          </div>
        </div>

        {/* Navigation Tabs inside dashboard */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("pedidos")}
              className={`btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                activeTab === "pedidos"
                  ? "bg-krevia-violet/20 text-krevia-violet border border-krevia-violet/30 shadow-sm shadow-krevia-violet/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <Package size={14} />
              <span>Pedidos recientes</span>
            </button>
            <button
              onClick={() => setActiveTab("clientes")}
              className={`btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                activeTab === "clientes"
                  ? "bg-krevia-violet/20 text-krevia-violet border border-krevia-violet/30 shadow-sm shadow-krevia-violet/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <Users size={14} />
              <span>Cuentas corrientes</span>
            </button>
            <button
              onClick={() => setActiveTab("stock")}
              className={`btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                activeTab === "stock"
                  ? "bg-krevia-violet/20 text-krevia-violet border border-krevia-violet/30 shadow-sm shadow-krevia-violet/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <Warehouse size={14} />
              <span>Depósito y stock</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <span className="text-zinc-500">Filtrado por:</span>
            <span className="text-zinc-300 font-mono bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">Turno Mañana</span>
          </div>
        </div>

        {/* Tab 1: Orders Table */}
        {activeTab === "pedidos" && (
          <div key="pedidos" className="tab-content-enter overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06] text-zinc-500 font-medium">
                  <th className="pb-2.5 font-normal">ID</th>
                  <th className="pb-2.5 font-normal">Cliente</th>
                  <th className="pb-2.5 font-normal">Origen</th>
                  <th className="pb-2.5 font-normal">Monto</th>
                  <th className="pb-2.5 font-normal">Estado</th>
                  <th className="pb-2.5 font-normal text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                <tr className="hover:bg-white/[0.03] transition-colors duration-150 group">
                  <td className="py-2.5 font-mono text-zinc-400">#1084</td>
                  <td className="py-2.5 font-medium text-white">
                    Distribuidora San Martín
                  </td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
                      <DeviceMobile size={12} className="text-emerald-400" />
                      WhatsApp Bot
                    </span>
                  </td>
                  <td className="py-2.5 font-mono text-zinc-200">$ 485.000</td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-krevia-cyan/10 text-krevia-cyan text-[11px] font-medium border border-krevia-cyan/20">
                      <Clock size={11} />
                      En preparación
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <span className="text-zinc-400 group-hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 group-hover:underline">
                      Ver remito
                      <span className="transform group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.03] transition-colors duration-150 group">
                  <td className="py-2.5 font-mono text-zinc-400">#1083</td>
                  <td className="py-2.5 font-medium text-white">
                    Corralón Pellegrini
                  </td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
                      <ArrowUpRight size={12} className="text-krevia-violet" />
                      Portal Web
                    </span>
                  </td>
                  <td className="py-2.5 font-mono text-zinc-200">$ 1.250.000</td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                      <CheckCircle size={11} />
                      Despachado
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <span className="text-zinc-400 group-hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 group-hover:underline">
                      Ver remito
                      <span className="transform group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.03] transition-colors duration-150 group">
                  <td className="py-2.5 font-mono text-zinc-400">#1082</td>
                  <td className="py-2.5 font-medium text-white">
                    Pinturería del Centro
                  </td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
                      <ArrowsClockwise size={12} className="text-krevia-cyan" />
                      Pedido recurrente
                    </span>
                  </td>
                  <td className="py-2.5 font-mono text-zinc-200">$ 320.000</td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 text-krevia-violet-light text-[11px] font-medium border border-krevia-violet/20">
                      Cobrado y emitido
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <span className="text-zinc-400 group-hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 group-hover:underline">
                      Ver remito
                      <span className="transform group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Customers View */}
        {activeTab === "clientes" && (
          <div key="clientes" className="tab-content-enter space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-150">
              <div>
                <p className="text-xs font-medium text-white">
                  Ferretería Central Rosario
                </p>
                <p className="text-[11px] text-zinc-400">
                  Saldo en cuenta: $ 120.000 · Límite de crédito asignado
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono">
                Al día
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-150">
              <div>
                <p className="text-xs font-medium text-white">
                  Constructora Pellegrini SRL
                </p>
                <p className="text-[11px] text-zinc-400">
                  3 pedidos en tránsito · Facturación automática quincenal
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-krevia-cyan/10 text-krevia-cyan text-[11px] font-mono">
                Factura A
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Inventory View */}
        {activeTab === "stock" && (
          <div key="stock" className="tab-content-enter space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-150">
              <div>
                <p className="text-xs font-medium text-white">
                  SKU-4820 · Perfil Aluminio Anodizado 6m
                </p>
                <p className="text-[11px] text-zinc-400">
                  Stock actual: 480 unidades (Depósito Circunvalación)
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono">
                Nivel óptimo
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-150">
              <div>
                <p className="text-xs font-medium text-white">
                  SKU-1192 · Adhesivo Sellador Poliuretánico
                </p>
                <p className="text-[11px] text-amber-300">
                  Punto de reposición alcanzado (quedan 18 unidades)
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-300 text-[11px] font-mono">
                Orden enviada a proveedor
              </span>
            </div>
          </div>
        )}

        {/* Live sync banner at bottom */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-krevia-violet-dark/30 to-krevia-cyan/5 border border-krevia-violet/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-krevia-cyan animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-zinc-200">
              Automatización de WhatsApp conectada:{" "}
              <strong className="text-white">16 pedidos</strong> cargados hoy
              sin tipeo manual.
            </span>
          </div>
          <span className="text-krevia-cyan text-[11px] font-mono">
            Ahorro estimado: 2.5 hs/día
          </span>
        </div>
      </div>
    </div>
  );
};

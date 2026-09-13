// Centralized design tokens and brand constants for Krevia

export const BRAND = {
  name: "Krevia",
  tagline: "Software y webs a medida en Rosario",
  city: "Rosario, Santa Fe, Argentina",
  email: "krevia2000@gmail.com",
  instagram: "@krevia_software",
  instagramUrl: "https://instagram.com/krevia_software",
  whatsappNumber: "5493410000000", // placeholder configurable
  primaryCta: "Quiero mi sistema",
  secondaryCta: "Ver cómo trabajamos",
} as const;

export const COLORS = {
  bg: "#0A0A0A",
  surface: "#121216",
  surfaceElevated: "#17171E",
  surfaceCard: "#0F0F14",
  border: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(124, 92, 255, 0.35)",
  violet: "#7C5CFF",
  violetDark: "#2F1C9A",
  violetLight: "#967BFF",
  cyan: "#22D3EE",
  cyanDark: "#0E7490",
  textPrimary: "#F8FAFC",
  textSecondary: "#94A3B8",
  textMuted: "#64748B",
} as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#metodologia" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Garantía y equipo", href: "#confianza" },
] as const;

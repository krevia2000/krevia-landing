/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      colors: {
        krevia: {
          bg: "#0A0A0A",
          surface: "#121216",
          "surface-elevated": "#17171E",
          "surface-card": "#0F0F14",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(124, 92, 255, 0.35)",
          violet: "#7C5CFF",
          "violet-dark": "#2F1C9A",
          "violet-light": "#967BFF",
          cyan: "#22D3EE",
          "cyan-dark": "#0E7490",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-violet": "0 0 35px -5px rgba(124, 92, 255, 0.3)",
        "glow-cyan": "0 0 35px -5px rgba(34, 211, 238, 0.3)",
        "card-inner": "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "card-hover": "0 14px 34px -10px rgba(0, 0, 0, 0.7), 0 0 24px -6px rgba(124, 92, 255, 0.2)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "ambient-breathe": "ambient-breathe 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "ambient-breathe": {
          "0%, 100%": { transform: "translateX(-50%) scale(1)", opacity: "0.85" },
          "50%": { transform: "translateX(-50%) scale(1.06) translateY(-8px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

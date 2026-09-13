import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krevia | Software y webs a medida en Rosario",
  description:
    "Desarrollamos sistemas de gestión y webs a medida para negocios que crecieron y necesitan ordenar pedidos, clientes y operaciones sin depender de planillas de Excel.",
  keywords: [
    "software a medida rosario",
    "desarrollo web rosario",
    "sistemas de gestión santa fe",
    "digitalización de procesos",
    "krevia software",
    "programación a medida argentina",
  ],
  authors: [{ name: "Krevia" }],
  creator: "Krevia",
  metadataBase: new URL("https://krevia.com.ar"),
  openGraph: {
    title: "Krevia | Software y webs a medida en Rosario",
    description:
      "Webs y sistemas que ordenan pedidos, clientes y operaciones, pensados para cómo trabaja tu negocio.",
    url: "https://krevia.com.ar",
    siteName: "Krevia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo-cropped.png",
        width: 1200,
        height: 630,
        alt: "Krevia Software a Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia | Software y webs a medida en Rosario",
    description:
      "Webs y sistemas que ordenan pedidos, clientes y operaciones, pensados para cómo trabaja tu negocio.",
    images: ["/logo-cropped.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-slate-100 min-h-screen selection:bg-krevia-violet/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

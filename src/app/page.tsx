import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TargetSection } from "@/components/TargetSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col font-sans selection:bg-krevia-violet/30 selection:text-white">
      {/* Navbar with official logo */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <TargetSection />
        <ProcessSection />
        <SocialProofSection />
        <ContactSection />
      </main>

      {/* Footer with official logo */}
      <Footer />
    </div>
  );
}

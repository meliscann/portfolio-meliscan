"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { GradientBlob } from "@/components/ui/GradientBlob";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-slate-100 bg-grid-pattern transition-colors duration-300 overflow-hidden pt-28 pb-16">
      <GradientBlob />
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}

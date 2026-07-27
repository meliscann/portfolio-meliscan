"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GradientBlob } from "@/components/ui/GradientBlob";

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-slate-100 bg-grid-pattern transition-colors duration-300 overflow-hidden pt-28">
      <GradientBlob />
      <Navbar />
      <div className="flex-1">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  );
}

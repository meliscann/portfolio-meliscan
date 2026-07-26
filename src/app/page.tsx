"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { useLanguage } from "@/components/context/LanguageContext";
import { ArrowRight, User, Briefcase, FolderKanban, Mail } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-slate-100 bg-grid-pattern transition-colors duration-300 overflow-hidden">
      <GradientBlob />
      <Navbar />

      {/* Hero Greeting Section */}
      <HeroSection />

      {/* Quick Navigation Cards */}
      <section className="relative z-10 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/about"
            className="group p-6 rounded-2xl bg-white/75 dark:bg-slate-900/75 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow-pastel-glow hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pastel-lavender/30 flex items-center justify-center text-indigo-600 dark:text-pastel-lavender">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-pastel-lavender transition">
                {t.nav.about}
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-400">
                Academic degree & engineering journey.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-indigo-600 dark:text-pastel-lavender gap-1">
              <span>Read About</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/experience"
            className="group p-6 rounded-2xl bg-white/75 dark:bg-slate-900/75 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow-mint-glow hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pastel-mint/30 flex items-center justify-center text-emerald-600 dark:text-pastel-mint">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-pastel-mint transition">
                {t.nav.experience}
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-400">
                Work experience & technical skills.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-pastel-mint gap-1">
              <span>View Track Record</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/projects"
            className="group p-6 rounded-2xl bg-white/75 dark:bg-slate-900/75 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow-peach-glow hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pastel-peach/30 flex items-center justify-center text-amber-600 dark:text-pastel-peach">
                <FolderKanban className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-pastel-peach transition">
                {t.nav.projects}
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-400">
                8 featured AI/ML & multi-agent systems.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-amber-600 dark:text-pastel-peach gap-1">
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/contact"
            className="group p-6 rounded-2xl bg-white/75 dark:bg-slate-900/75 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow-pastel-glow hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pastel-sky/30 flex items-center justify-center text-sky-600 dark:text-pastel-sky">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-pastel-sky transition">
                {t.nav.contact}
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-400">
                Direct email & contact details.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-semibold text-sky-600 dark:text-pastel-sky gap-1">
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

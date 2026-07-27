"use client";

import React from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-stone-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Branding Signature */}
        <div className="flex items-center gap-2">
          <span className="font-signature text-2xl font-bold text-stone-900 dark:text-white">
            Melis Can
          </span>
          <span className="font-mono text-xs text-indigo-600 dark:text-pastel-lavender">
            // Portfolio 2026
          </span>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Melis Can. {t.footer.copyright}</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-700 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

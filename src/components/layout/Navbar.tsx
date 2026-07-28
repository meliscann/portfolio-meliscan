"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/context/LanguageContext";
import { useTheme } from "@/components/context/ThemeContext";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.experience, href: "/experience" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-lg border-b border-stone-200/60 dark:border-slate-800/60 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-10">
        {/* Empty left spacer */}
        <div className="hidden md:block w-24 shrink-0" />

        {/* Desktop Nav Links Pill - Exactly Centered */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-1.5 bg-stone-100/80 dark:bg-slate-800/80 border border-stone-200/80 dark:border-slate-700/80 backdrop-blur-md absolute left-1/2 -translate-x-1/2 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold transition rounded-full ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "text-stone-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-pastel-lavender hover:bg-white/60 dark:hover:bg-slate-700/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Language Switcher + Theme Toggle - Positioned Further Right */}
        <div className="hidden md:flex items-center gap-3.5 ml-auto">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:border-pastel-lavender transition shadow-sm"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500" />
            <span className={language === "en" ? "text-indigo-600 dark:text-pastel-lavender font-bold" : "opacity-60"}>
              EN
            </span>
            <span className="text-stone-300 dark:text-slate-600">|</span>
            <span className={language === "tr" ? "text-indigo-600 dark:text-pastel-lavender font-bold" : "opacity-60"}>
              TR
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:scale-105 transition shadow-sm"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 border-b border-stone-200 dark:border-slate-800 px-6 py-4 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href ? "text-indigo-600 font-bold" : "text-stone-800 dark:text-slate-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

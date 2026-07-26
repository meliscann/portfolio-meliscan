"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/../content/profile";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Bot, Search, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 z-10">

        {/* Main Name & Title (Hi! I'm Melis) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.hero.greeting}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-emerald-500 to-orange-400 dark:from-pastel-lavender dark:via-pastel-mint dark:to-pastel-peach">
              Melis
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 font-heading font-semibold text-lg sm:text-2xl text-stone-700 dark:text-slate-200">
            {profileData.titles[language].map((title, idx) => (
              <React.Fragment key={title}>
                <span>{title}</span>
                {idx < profileData.titles[language].length - 1 && (
                  <span className="text-stone-300 dark:text-slate-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-stone-600 dark:text-slate-300 leading-relaxed"
        >
          {profileData.headline[language]}
        </motion.p>

        {/* Specialization Tags / Tech Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto"
        >
          <Badge variant="lavender" size="md">
            <Bot className="w-4 h-4 text-indigo-600" /> Multi-Agent Systems
          </Badge>
          <Badge variant="mint" size="md">
            <Cpu className="w-4 h-4 text-emerald-600" /> RAG Architectures
          </Badge>
          <Badge variant="peach" size="md">
            <Search className="w-4 h-4 text-amber-600" /> Explainable AI (XAI)
          </Badge>
        </motion.div>

        {/* Action Call To Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm shadow-lg hover:shadow-pastel-glow transition-all duration-300 group"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-stone-200 dark:border-slate-700 font-semibold text-sm shadow-sm backdrop-blur-md transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>{t.hero.ctaContact}</span>
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Melis_Can_CV.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-50 dark:bg-slate-800/80 hover:bg-emerald-100 dark:hover:bg-slate-800 text-emerald-700 dark:text-pastel-mint border border-emerald-200 dark:border-slate-700 font-semibold text-sm shadow-sm backdrop-blur-md transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-emerald-600 dark:text-pastel-mint" />
            <span>{t.hero.downloadCv}</span>
          </a>

          {/* Social Quick Buttons */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-pastel-lavender hover:scale-110 transition border border-stone-200 dark:border-slate-700"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-pastel-lavender hover:scale-110 transition border border-stone-200 dark:border-slate-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/../content/profile";
import { skillsData } from "@/../content/skills";
import { useLanguage } from "@/components/context/LanguageContext";
import { Briefcase, BookOpen, Award, CheckCircle2, Calendar, MapPin, Sparkles, Code2, Check } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();
  const aboutInfo = profileData.about[language];

  return (
    <section className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.experience.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* 2-Column Side-by-Side Grid: Work Experience (Left) & Skills Single Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Work Experience */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              {t.experience.workTitle}
            </h3>

            <div className="space-y-6">
              {aboutInfo.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-slate-800 pb-3">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-pastel-lavender">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-stone-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-stone-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Skills & Tech Stack (Single Clean Card) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-500" />
              {t.experience.skillsTitle}
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-6"
            >
              {skillsData.map((cat, idx) => (
                <div key={cat.id} className={idx > 0 ? "pt-4 border-t border-stone-100 dark:border-slate-800" : ""}>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-pastel-lavender mb-2.5">
                    {cat.categoryName[language]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-medium ${
                          skill.highlight
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                            : "bg-stone-100 text-stone-800 dark:bg-slate-800 dark:text-slate-200 border border-stone-200/60 dark:border-slate-700/60"
                        }`}
                      >
                        {skill.highlight && <Check className="w-3 h-3 text-pastel-mint" />}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* AI Programs & Fellowships */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            {t.experience.programsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutInfo.programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-300 font-semibold">
                      {prog.date}
                    </span>
                    <Sparkles className="w-4 h-4 text-pastel-peach" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-stone-900 dark:text-white">
                    {prog.title}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-pastel-lavender">
                    {prog.org}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">{prog.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            {t.experience.certificationsTitle}
          </h3>

          <div className="p-6 rounded-2xl bg-stone-50/80 dark:bg-slate-900/80 border border-stone-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutInfo.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800 border border-stone-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-stone-800 dark:text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

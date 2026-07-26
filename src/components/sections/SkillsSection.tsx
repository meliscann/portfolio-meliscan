"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/../content/skills";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { BrainCircuit, Sparkles, Code2, Server, Check } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-pastel-lavender" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-pastel-mint" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-amber-600 dark:text-pastel-peach" />;
      case "Server":
        return <Server className="w-5 h-5 text-sky-600 dark:text-pastel-sky" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 py-20 px-4 sm:px-6 bg-stone-50/50 dark:bg-slate-950/40 border-y border-stone-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-pastel-mint font-semibold">
            // 02. Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-slate-800">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
                    {category.categoryName[language]}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-slate-400">
                    {category.description[language]}
                  </p>
                </div>
              </div>

              {/* Skills Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      skill.highlight
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-sm"
                        : "bg-stone-100 text-stone-800 dark:bg-slate-800/80 dark:text-slate-200 border border-stone-200/60 dark:border-slate-700/60"
                    }`}
                  >
                    {skill.highlight && <Check className="w-3.5 h-3.5 text-pastel-mint" />}
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="ml-1 text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

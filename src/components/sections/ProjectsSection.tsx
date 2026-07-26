"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/../content/projects";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import {
  Leaf,
  TrendingUp,
  Navigation,
  Activity,
  Mic,
  Eye,
  ShieldAlert,
  Briefcase,
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { key: "All", label: t.projects.filterAll },
    { key: "Multi-Agent", label: t.projects.filterMultiAgent },
    { key: "AI/ML & XAI", label: t.projects.filterAiXai },
    { key: "Computer Vision & Audio", label: t.projects.filterVisionAudio },
    { key: "Systems & Hacks", label: t.projects.filterSystemsHacks },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (name: string) => {
    const className = "w-5 h-5";
    switch (name) {
      case "Leaf":
        return <Leaf className={`${className} text-emerald-500`} />;
      case "TrendingUp":
        return <TrendingUp className={`${className} text-indigo-500`} />;
      case "Navigation":
        return <Navigation className={`${className} text-amber-500`} />;
      case "Activity":
        return <Activity className={`${className} text-rose-500`} />;
      case "Mic":
        return <Mic className={`${className} text-sky-500`} />;
      case "Eye":
        return <Eye className={`${className} text-purple-500`} />;
      case "ShieldAlert":
        return <ShieldAlert className={`${className} text-orange-500`} />;
      case "Briefcase":
        return <Briefcase className={`${className} text-teal-500`} />;
      default:
        return <Sparkles className={`${className} text-indigo-500`} />;
    }
  };

  return (
    <section id="projects" className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-pastel-peach font-semibold">
            // 03. Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Category Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat.key
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                  : "bg-white/80 dark:bg-slate-800/80 text-stone-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700/80 hover:bg-stone-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 p-6 backdrop-blur-md shadow-sm hover:shadow-pastel-glow transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-stone-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                      {getProjectIcon(project.iconName)}
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-1.5">
                      <Badge variant={project.badgeColor}>{project.category}</Badge>
                    </div>
                  </div>

                  {/* Title & Status */}
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-pastel-lavender transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-[11px] font-mono text-stone-500 dark:text-slate-400">
                      ⚡ {project.status[language]}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription[language]}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 border border-stone-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-slate-800 text-stone-500 dark:text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-stone-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-pastel-lavender hover:underline"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
                        aria-label="Source code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/../content/projects";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import {
  TrendingUp,
  Navigation,
  Activity,
  Mic,
  Eye,
  ShieldAlert,
  Leaf,
  Briefcase,
  Github,
  ExternalLink,
  ChevronRight,
  X,
  Layers,
  BarChart3,
  Bot,
  ChevronLeft,
  Image as ImageIcon,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  const filterOptions = [
    { label: t.projects.filterAll, category: "All" },
    { label: t.projects.filterMultiAgent, category: "Multi-Agent" },
    { label: t.projects.filterAiXai, category: "AI/ML & XAI" },
    { label: t.projects.filterVisionAudio, category: "Computer Vision & Audio" },
    { label: t.projects.filterSystemsHacks, category: "Systems & Hacks" },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-indigo-500" />;
      case "Navigation":
        return <Navigation className="w-5 h-5 text-amber-500" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-emerald-500" />;
      case "Mic":
        return <Mic className="w-5 h-5 text-sky-500" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-purple-500" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      case "Leaf":
        return <Leaf className="w-5 h-5 text-emerald-500" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-sky-500" />;
      default:
        return <Bot className="w-5 h-5 text-indigo-500" />;
    }
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIdx(0);
  };

  return (
    <section id="projects" className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-pastel-lavender font-semibold">
            // 03. Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.category}
              onClick={() => setActiveFilter(opt.category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === opt.category
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white/80 dark:bg-slate-800/80 text-stone-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700 hover:bg-stone-100 dark:hover:bg-slate-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow-pastel-glow transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 border border-stone-200/60 dark:border-slate-700/60">
                      {getIcon(project.iconName)}
                    </div>
                    <Badge variant={project.badgeColor} size="sm">
                      {project.status[language]}
                    </Badge>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-pastel-lavender transition">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.shortDescription[language]}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-slate-800 text-[11px] font-mono font-medium text-stone-700 dark:text-slate-300 border border-stone-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-slate-800 text-[10px] font-mono text-stone-500 dark:text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-4 border-t border-stone-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-pastel-lavender hover:underline"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-stone-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Technical Overview Modal with Carousel */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-400 hover:bg-stone-200 dark:hover:bg-slate-700 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <Badge variant={selectedProject.badgeColor} size="sm">
                    {selectedProject.category}
                  </Badge>
                  <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                    {selectedProject.status[language]}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-stone-900 dark:text-white">
                  {selectedProject.title[language]}
                </h3>
              </div>

              {/* Optional Project Image Carousel / Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-2">
                  <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 group">
                    <img
                      src={selectedProject.images[currentImageIdx]}
                      alt={`${selectedProject.title[language]} screenshot ${currentImageIdx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Prev / Next Slider Controls */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentImageIdx(
                              (prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition backdrop-blur-md"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIdx((prev) => (prev + 1) % selectedProject.images!.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition backdrop-blur-md"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIdx(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIdx ? "w-5 bg-white" : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Full Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-pastel-lavender">
                  {t.projects.modalTitle}
                </h4>
                <p className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed">
                  {selectedProject.fullDescription[language]}
                </p>
              </div>

              {/* Multi-Agent Architecture if available */}
              {selectedProject.agentArchitecture && (
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-900 dark:text-pastel-lavender flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-500" />
                    {t.projects.agentArchLabel}
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.agentArchitecture[language].map((arch, idx) => (
                      <li key={idx} className="text-xs text-stone-700 dark:text-slate-300 flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Metrics */}
              {selectedProject.metrics && (
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/60 border border-emerald-100 dark:border-slate-700 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 dark:text-pastel-mint flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-emerald-500" />
                    {t.projects.metricsLabel}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedProject.metrics[language].map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/50 dark:border-slate-700/50 text-xs font-medium text-stone-800 dark:text-slate-200"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                  {t.projects.techStackLabel}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-stone-100 dark:bg-slate-800 text-xs font-mono text-stone-800 dark:text-slate-200 border border-stone-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between">
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t.projects.githubLink}</span>
                  </a>
                ) : (
                  <div />
                )}

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.projects.demoLink}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

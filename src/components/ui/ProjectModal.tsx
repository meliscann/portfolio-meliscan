"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/../content/projects";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "./Badge";
import { X, Github, ExternalLink, Cpu, CheckCircle, Bot, Layers, Activity } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Overlay Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-stone-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={project.badgeColor}>{project.category}</Badge>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 dark:bg-slate-800 dark:text-slate-300">
                {project.status[language]}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 dark:text-white">
              {project.title[language]}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-pastel-lavender flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> {t.projects.roleLabel}: {project.role[language]}
            </p>
          </div>

          <div className="my-6 border-t border-stone-200 dark:border-slate-800" />

          {/* Full Description */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-pastel-mintDark" /> Project Overview
            </h4>
            <p className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed">
              {project.fullDescription[language]}
            </p>
          </div>

          {/* Agent Architecture / System Pipeline */}
          {project.agentArchitecture && (
            <div className="mt-6 space-y-3 bg-stone-50 dark:bg-slate-800/50 p-4 rounded-xl border border-stone-200/80 dark:border-slate-700/50">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 dark:text-slate-200 flex items-center gap-2">
                <Bot className="w-4 h-4 text-indigo-500" /> {t.projects.agentArchLabel}
              </h4>
              <ul className="space-y-2">
                {project.agentArchitecture[language].map((archItem, index) => (
                  <li key={index} className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{archItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Metrics & Benchmarks */}
          {project.metrics && (
            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-pastel-peachDark" /> {t.projects.metricsLabel}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.metrics[language].map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-pastel-peach/10 border border-pastel-peach/30 dark:bg-slate-800 dark:border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pastel-peachDark shrink-0" />
                    <span className="text-xs font-medium text-stone-800 dark:text-slate-200">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400">
              {t.projects.techStackLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-md bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 border border-stone-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="mt-8 pt-4 border-t border-stone-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition shadow-sm"
                >
                  <Github className="w-4 h-4" /> {t.projects.githubLink}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pastel-lavender/40 text-indigo-900 dark:text-white text-xs font-semibold hover:bg-pastel-lavender/60 transition"
                >
                  <ExternalLink className="w-4 h-4" /> {t.projects.demoLink}
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-stone-300 dark:border-slate-700 text-stone-600 dark:text-slate-300 text-xs font-medium hover:bg-stone-100 dark:hover:bg-slate-800 transition"
            >
              {t.projects.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

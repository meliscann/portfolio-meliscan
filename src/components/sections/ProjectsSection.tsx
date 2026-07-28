"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/../content/projects";
import { useLanguage } from "@/components/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import {
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  Layers,
  BarChart3,
  Target,
  Cpu,
  TrendingUp,
  Lightbulb,
  GraduationCap,
  Info,
  CheckCircle2,
  Film,
  FileText,
  Download,
  Images,
  Presentation,
} from "lucide-react";

// Bullet-point renderer with bold title headers and bold highlighted sentences
const StructuredShortDescription: React.FC<{ text: string }> = ({ text }) => {
  if (
    !text.includes("Background:") &&
    !text.includes("Arka Plan:") &&
    !text.includes("Through this project") &&
    !text.includes("Bu çalışmam sayesinde")
  ) {
    return (
      <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    );
  }

  // Split by single line breaks so each line becomes a separate bullet item
  const rawLines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const mainIntro = rawLines[0];
  const bulletLines = rawLines.slice(1);

  return (
    <div className="space-y-3">
      <p className="text-sm sm:text-base text-stone-700 dark:text-slate-200 font-medium leading-relaxed">
        {mainIntro}
      </p>
      <ul className="space-y-2.5 pt-1">
        {bulletLines.map((line, idx) => {
          const colonIdx = line.indexOf(":");
          const isFullBoldSentence =
            line.startsWith("Through this project") ||
            line.startsWith("Bu çalışmam sayesinde") ||
            line.includes("learned how to distinguish") ||
            line.includes("ayrımını yapmayı öğrendim");

          if (isFullBoldSentence) {
            return (
              <li
                key={idx}
                className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>
                  <strong className="font-bold text-stone-900 dark:text-white">{line}</strong>
                </span>
              </li>
            );
          }

          if (colonIdx !== -1) {
            const label = line.substring(0, colonIdx).trim();
            const rest = line.substring(colonIdx + 1).trim();
            return (
              <li
                key={idx}
                className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>
                  <strong className="font-bold text-stone-900 dark:text-white">{label}:</strong> {rest}
                </span>
              </li>
            );
          }

          return (
            <li
              key={idx}
              className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{line}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Helper component to render rich structured project full descriptions
const StructuredDescription: React.FC<{ text: string }> = ({ text }) => {
  if (!text.includes("Introduction") && !text.includes("Giriş")) {
    return (
      <p className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
        {text}
      </p>
    );
  }

  const blocks = text.split("\n\n").map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const header = lines[0];

        // 1. Introduction / Giriş
        if (header.startsWith("Introduction") || header.startsWith("Giriş")) {
          const content = lines.slice(1).join(" ");
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-indigo-50/40 dark:bg-slate-800/50 border border-indigo-100 dark:border-slate-700/80 space-y-2"
            >
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-pastel-lavender flex items-center gap-2">
                <Info className="w-4 h-4 text-indigo-500" />
                {header}
              </h5>
              <p className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed">
                {content}
              </p>
            </div>
          );
        }

        // 2. Goal / Amaçlarım
        if (header.includes("goal") || header.includes("Amaçlarım")) {
          const bullets = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));
          return (
            <div key={idx} className="space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-500" />
                {header}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-stone-200/80 dark:border-slate-700/70 text-xs font-medium text-stone-800 dark:text-slate-200 flex items-start gap-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // 3. Process / Süreç
        if (header.startsWith("Process") || header.startsWith("Süreç")) {
          const bullets = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));
          const subTitle = lines.find((l) => !l.startsWith("Process") && !l.startsWith("Süreç") && !l.startsWith("•"));

          return (
            <div key={idx} className="space-y-3">
              <div className="space-y-1">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-500" />
                  {header}
                </h5>
                {subTitle && (
                  <p className="text-xs text-stone-500 dark:text-slate-400 font-mono">{subTitle}</p>
                )}
              </div>

              <div className="space-y-2">
                {bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-xl bg-stone-50/80 dark:bg-slate-800/40 border border-stone-200/60 dark:border-slate-800 text-xs text-stone-700 dark:text-slate-300 flex items-start gap-3"
                  >
                    <span className="font-mono text-[11px] font-bold text-indigo-600 dark:text-pastel-lavender bg-indigo-500/10 px-2 py-0.5 rounded shrink-0">
                      0{bIdx + 1}
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // 4. Results / Sonuçlar
        if (header.startsWith("Results") || header.startsWith("Sonuçlar")) {
          const bullets = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));

          return (
            <div key={idx} className="space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                {header}
              </h5>

              <div className="space-y-2.5">
                {bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-emerald-50/40 dark:bg-slate-800/50 border border-emerald-100 dark:border-slate-700/80 flex items-start gap-3 shadow-sm"
                  >
                    <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-pastel-mint shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-stone-800 dark:text-slate-200 leading-relaxed">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // 5. Insights / Çıkarımlar
        if (header.startsWith("Insights") || header.startsWith("Çıkarımlar")) {
          const content = lines.slice(1).join(" ");

          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-amber-50/40 dark:bg-slate-800/50 border border-amber-200/60 dark:border-slate-700/80 space-y-2"
            >
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                {header}
              </h5>
              <p className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed italic">
                "{content}"
              </p>
            </div>
          );
        }

        // 6. Learnings / Öğrenimler
        if (header.startsWith("Learnings") || header.startsWith("Öğrenimler")) {
          const bullets = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));

          return (
            <div key={idx} className="space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-500 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                {header}
              </h5>

              <div className="flex flex-wrap gap-2">
                {bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="px-3.5 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 text-xs font-medium text-purple-900 dark:text-purple-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Default fallback block
        return (
          <p key={idx} className="text-stone-700 dark:text-slate-300 text-sm leading-relaxed">
            {block}
          </p>
        );
      })}
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  const totalProjects = projectsData.length;
  const project = projectsData[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleSelectTab = (idx: number) => {
    setDirection(idx > currentIndex ? "right" : "left");
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, selectedProject]);

  // Lock body scroll and hide header/footer when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleOpenModal = (p: Project) => {
    setSelectedProject(p);
    setCurrentImageIdx(0);
  };

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.25, ease: "easeIn" },
    }),
  };

  return (
    <section id="projects" className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Full-Page Showcase Hero Card with Carousel Controls */}
        <div className="relative flex items-center justify-center pt-2 pb-6">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-800 text-stone-800 dark:text-slate-100 border border-stone-200 dark:border-slate-700 shadow-xl hover:scale-110 transition duration-200"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white dark:bg-slate-800 text-stone-800 dark:text-slate-100 border border-stone-200 dark:border-slate-700 shadow-xl hover:scale-110 transition duration-200"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Large Showcase Card */}
          <div className="w-full max-w-4xl min-h-[480px] overflow-hidden px-2 sm:px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full p-6 sm:p-10 rounded-3xl bg-white/85 dark:bg-slate-900/85 border border-stone-200/90 dark:border-slate-800 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Counter & Status Row */}
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-indigo-600 dark:text-pastel-lavender bg-indigo-500/10 px-3 py-1 rounded-full">
                        {String(currentIndex + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
                      </span>
                    </div>
                    <Badge variant={project.badgeColor} size="sm">
                      {project.status[language]}
                    </Badge>
                  </div>

                  {/* Title & Structured Short Description (Simple Bullets with Bold Headers) */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 dark:text-white leading-tight">
                      {project.title[language]}
                    </h3>

                    {/* Simple Bullet List Short Description */}
                    <StructuredShortDescription text={project.shortDescription[language]} />
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                      Tech Stack & Tools:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-stone-100 dark:bg-slate-800 text-xs font-mono font-medium text-stone-800 dark:text-slate-200 border border-stone-200/80 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-stone-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-pastel-glow transition-all duration-300 group"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={selectedProject ? selectedProject.githubUrl : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-xs font-semibold hover:text-slate-900 dark:hover:text-white transition border border-stone-200/80 dark:border-slate-700/80"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.projects.githubLink}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Project Navigator Bar / Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {projectsData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelectTab(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-indigo-600 dark:bg-pastel-lavender"
                  : "w-2.5 bg-stone-300 dark:bg-slate-700 hover:bg-stone-400 dark:hover:bg-slate-600"
              }`}
              aria-label={`Jump to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Project Technical Overview Modal with Video Player / PDF Presentation / Poster & Photo Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-400 hover:bg-stone-200 dark:hover:bg-slate-700 transition z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <h3 className="text-2xl font-heading font-extrabold text-stone-900 dark:text-white">
                  {selectedProject.title[language]}
                </h3>
              </div>

              {/* Video Player if videoUrl is provided */}
              {selectedProject.videoUrl && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-pastel-mint flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-emerald-500" />
                    Project Video Demonstration
                  </h4>
                  <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-stone-800 shadow-xl aspect-video">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {/* Optional Project Presentation Slides PDF */}
              {selectedProject.presentationPdfUrl && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                      <Presentation className="w-4 h-4 text-purple-500" />
                      {language === "tr" ? "Proje Slayt Sunumu (PDF)" : "Project Presentation Slides (PDF)"}
                    </h4>

                    <div className="flex items-center gap-2">
                      <a
                        href={selectedProject.presentationPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-semibold hover:bg-purple-500/20 transition shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{language === "tr" ? "Yeni Sekmede Aç" : "Open in New Tab"}</span>
                      </a>
                      <a
                        href={selectedProject.presentationPdfUrl}
                        download="BuildingPath_Presentation_Slides.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-50 dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-slate-700 text-xs font-semibold hover:bg-purple-100 transition shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === "tr" ? "Slaytları İndir (PDF)" : "Download Slides (PDF)"}</span>
                      </a>
                    </div>
                  </div>

                  <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-slate-950 border border-stone-800 shadow-xl">
                    <iframe
                      src={`${selectedProject.presentationPdfUrl}#view=FitH`}
                      className="w-full h-full border-0"
                      title={`${selectedProject.title[language]} presentation slides`}
                    />
                  </div>
                </div>
              )}

              {/* Academic Poster Section with PDF Download */}
              {(selectedProject.posterImageUrl || selectedProject.posterPdfUrl) && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-pastel-lavender flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-indigo-500" />
                      Academic Research Poster
                    </h4>

                    {selectedProject.posterPdfUrl && (
                      <a
                        href={selectedProject.posterPdfUrl}
                        download="MelisCan-Workshop-Poster.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-pastel-lavender border border-indigo-200 dark:border-slate-700 text-xs font-semibold hover:bg-indigo-100 transition shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === "tr" ? "Posteri PDF Olarak İndir" : "Download Poster PDF"}</span>
                      </a>
                    )}
                  </div>

                  {selectedProject.posterImageUrl && (
                    <div className="relative w-full rounded-2xl overflow-hidden bg-stone-50/80 dark:bg-slate-800/40 border border-stone-200/80 dark:border-slate-700/60 p-3 sm:p-4 shadow-sm flex items-center justify-center">
                      <img
                        src={selectedProject.posterImageUrl}
                        alt={`${selectedProject.title[language]} poster`}
                        className="w-full max-w-4xl h-auto rounded-xl shadow-md object-contain border border-stone-200/60 dark:border-slate-700/60 mx-auto"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Photo Gallery Carousel Section */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <Images className="w-4 h-4 text-rose-500" />
                      {language === "tr" ? "Çalıştay & Sunum Fotoğraf Galerisi" : "Workshop & Presentation Gallery"}
                    </h4>
                    <span className="font-mono text-xs font-semibold text-stone-500 dark:text-slate-400 bg-stone-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {currentImageIdx + 1} / {selectedProject.images.length}
                    </span>
                  </div>

                  <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 group shadow-xl flex items-center justify-center">
                    <img
                      src={selectedProject.images[currentImageIdx]}
                      alt={`Workshop photo ${currentImageIdx + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-300"
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
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition backdrop-blur-md shadow-lg hover:scale-110"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIdx((prev) => (prev + 1) % selectedProject.images!.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition backdrop-blur-md shadow-lg hover:scale-110"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIdx(idx)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentImageIdx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                              }`}
                              aria-label={`Go to photo ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Full Detailed Structured Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-pastel-lavender">
                  {t.projects.modalTitle}
                </h4>
                <StructuredDescription text={selectedProject.fullDescription[language]} />
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

"use client";

import React from "react";
import { profileData } from "@/../content/profile";
import { useLanguage } from "@/components/context/LanguageContext";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const aboutInfo = profileData.about[language];

  return (
    <section id="about" className="relative z-10 py-4 px-4 sm:px-6 max-w-5xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
          {t.about.sectionTitle}
        </h2>
      </div>

      {/* Engineering Journey & Academic Education Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Engineering Journey Card */}
        <div className="lg:col-span-7 space-y-4 bg-white/70 dark:bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm">
          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500" />
            Engineering Journey
          </h3>
          
          {aboutInfo.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-stone-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* Academic Education Card */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-br from-white/90 via-pastel-lavenderLight/20 to-white/90 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl border border-pastel-lavender/40 dark:border-slate-700 backdrop-blur-md shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-pastel-lavender/40 text-indigo-900 dark:text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
                  {aboutInfo.education.degree}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-pastel-lavender">
                  {aboutInfo.education.school}
                </p>
                <span className="inline-block mt-1 font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                  {aboutInfo.education.scholarship}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-stone-500 dark:text-slate-400 border-y border-stone-200 dark:border-slate-800 py-2.5">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                {aboutInfo.education.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {aboutInfo.education.location}
              </span>
            </div>

            <ul className="space-y-3">
              {/* Core Highlights */}
              {aboutInfo.education.highlights.map((highlight, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-700 dark:text-slate-300 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: highlight }} />
                </li>
              ))}

              {/* Nested Coursework Sub-List */}
              {aboutInfo.education.coursework && (
                <li className="text-xs sm:text-sm text-stone-700 dark:text-slate-300 space-y-1.5 pt-1">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="font-semibold text-stone-800 dark:text-slate-200">
                      {aboutInfo.education.courseworkTitle}
                    </span>
                  </div>

                  <ul className="pl-5 space-y-1 border-l-2 border-indigo-200/60 dark:border-slate-800 ml-2.5 py-0.5">
                    {aboutInfo.education.coursework.map((course, cIdx) => (
                      <li key={cIdx} className="text-xs text-stone-600 dark:text-slate-400 flex items-start gap-2 leading-tight">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400/80 shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

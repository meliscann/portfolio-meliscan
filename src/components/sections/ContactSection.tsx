"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/../content/profile";
import { useLanguage } from "@/components/context/LanguageContext";
import { Mail, Copy, Check, Send, MapPin, Linkedin, Github } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profileData.contact.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-pastel-lavender font-semibold">
            // 05. Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 dark:text-white">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-white">
                  Direct Communication
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-400">
                  Feel free to send an email or connect via professional networks.
                </p>
              </div>

              {/* Copyable Email Pill */}
              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="font-mono text-xs text-stone-800 dark:text-slate-200 truncate">
                    {profileData.contact.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-medium shrink-0 flex items-center gap-1 hover:opacity-90 transition"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-pastel-mint" />
                      <span>{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-slate-400 font-mono">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{profileData.contact.location}</span>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-stone-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-mono text-stone-500 dark:text-slate-400">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 text-xs font-medium hover:border-pastel-lavender transition border border-stone-200 dark:border-slate-700"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn
                  </a>
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-200 text-xs font-medium hover:border-pastel-lavender transition border border-stone-200 dark:border-slate-700"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 dark:text-slate-300">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 dark:text-slate-300">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-700 dark:text-slate-300">
                  {t.contact.formMessage}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                  placeholder="Hello Meliscan, I would like to connect regarding..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm shadow-md hover:opacity-90 transition duration-200"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.formSubmit}</span>
              </button>

              {submitted && (
                <p className="text-xs text-emerald-600 dark:text-pastel-mint text-center font-medium">
                  {t.contact.formSuccess}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

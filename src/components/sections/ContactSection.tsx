"use client";

import React, { useState } from "react";
import { profileData } from "@/../content/profile";
import { useLanguage } from "@/components/context/LanguageContext";
import { Mail, Copy, Check, Send, Linkedin, Github, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Public Web3Forms client access key
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "07050683-8b79-4d6c-93a7-f051a82b9a0a";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error result:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
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
                <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-white leading-snug">
                  {language === "tr"
                    ? "Benimle iletişime geçmek isterseniz e-posta göndermekten çekinmeyin! :)"
                    : "If you would like to get in touch with me, feel free to send an email! :)"}
                </h3>
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
                  placeholder="Hello Melis, I would like to connect regarding..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm shadow-md hover:opacity-90 transition duration-200 disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                    <span>{t.contact.formSending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.formSubmit}</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-600 dark:text-pastel-mint text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t.contact.formSuccess}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-600 dark:text-rose-300 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>An error occurred while sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, I18nDictionary } from "@/../content/i18n";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: I18nDictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "tr")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "tr" : "en";
    setLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: dictionaries[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

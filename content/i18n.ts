export interface I18nDictionary {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    ctaProjects: string;
    ctaContact: string;
    downloadCv: string;
  };
  about: {
    sectionTitle: string;
    educationTitle: string;
    focusAreasTitle: string;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    tagCloudTitle: string;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    filterMultiAgent: string;
    filterAiXai: string;
    filterVisionAudio: string;
    filterSystemsHacks: string;
    viewDetails: string;
    watchDemo: string;
    githubLink: string;
    demoLink: string;
    modalTitle: string;
    roleLabel: string;
    statusLabel: string;
    metricsLabel: string;
    agentArchLabel: string;
    techStackLabel: string;
    closeModal: string;
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
    workTitle: string;
    skillsTitle: string;
    programsTitle: string;
    certificationsTitle: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    emailLabel: string;
    copyEmail: string;
    copied: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
  };
  footer: {
    copyright: string;
  };
}

export const dictionaries: { en: I18nDictionary; tr: I18nDictionary } = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Software Engineer & AI/ML Developer",
      greeting: "Hi! I'm",
      ctaProjects: "Explore Featured Projects",
      ctaContact: "Get in Touch",
      downloadCv: "Download CV",
    },
    about: {
      sectionTitle: "About Me",
      educationTitle: "Academic Education",
      focusAreasTitle: "Core Engineering Focus",
    },
    skills: {
      sectionTitle: "Skills & Tech Stack",
      sectionSubtitle: "Categorized competencies across AI & LLM Systems, ML/DL, Backend, and DevOps.",
      tagCloudTitle: "Core Competencies",
    },
    projects: {
      sectionTitle: "Featured Projects",
      sectionSubtitle: "Some of the things I've been building. Mostly multi-agent systems, explainable AI models, and a few RAG pipelines along the way.",
      filterAll: "All Projects",
      filterMultiAgent: "Multi-Agent Systems",
      filterAiXai: "AI / ML & XAI",
      filterVisionAudio: "Vision & Audio",
      filterSystemsHacks: "Systems & Hacks",
      viewDetails: "View Details, Architecture & Demo",
      watchDemo: "Watch Demo",
      githubLink: "Source Code",
      demoLink: "Live Demo",
      modalTitle: "Project Technical Overview",
      roleLabel: "Role & Responsibility",
      statusLabel: "Project Status",
      metricsLabel: "Key Benchmarks & Metrics",
      agentArchLabel: "Multi-Agent / System Architecture",
      techStackLabel: "Technologies Used",
      closeModal: "Close Overview",
    },
    experience: {
      sectionTitle: "Experience & Skills",
      sectionSubtitle: "Work experience, technical skill stack, AI fellowships, and certifications.",
      workTitle: "Work Experience",
      skillsTitle: "Skills & Tech Stack",
      programsTitle: "AI Programs & Acceleration Fellowships",
      certificationsTitle: "Certifications & Professional Development",
    },
    contact: {
      sectionTitle: "Get in Touch",
      sectionSubtitle: "Open for job opportunities, academic research, and AI project discussions.",
      emailLabel: "Email Address",
      copyEmail: "Copy Email",
      copied: "Copied!",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSending: "Sending Message...",
      formSuccess: "Thank you! Your message has been prepared.",
    },
    footer: {
      copyright: "All Rights Reserved.",
    },
  },
  tr: {
    nav: {
      home: "Anasayfa",
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      badge: "Software Engineer & AI/ML Developer",
      greeting: "Merhaba, Ben",
      ctaProjects: "Projelerimi Keşfet",
      ctaContact: "İletişime Geç",
      downloadCv: "CV İndir",
    },
    about: {
      sectionTitle: "Hakkımda",
      educationTitle: "Akademik Eğitim",
      focusAreasTitle: "Temel Mühendislik Odakları",
    },
    skills: {
      sectionTitle: "Yetkinlikler & Teknolojiler",
      sectionSubtitle: "AI & LLM Sistemleri, ML/Derin Öğrenme, Backend ve DevOps alanlarında uzmanlıklar.",
      tagCloudTitle: "Öne Çıkan Yetkinlikler",
    },
    projects: {
      sectionTitle: "Öne Çıkan Projeler",
      sectionSubtitle: "Geliştirdiğim projelerden bazıları. Ağırlıklı olarak çoklu ajan sistemleri, açıklanabilir yapay zeka modelleri ve RAG mimarileri.",
      filterAll: "Tüm Projeler",
      filterMultiAgent: "Çoklu Ajan Sistemleri",
      filterAiXai: "AI / ML & XAI",
      filterVisionAudio: "Görü & Ses",
      filterSystemsHacks: "Sistemler & Hackathon",
      viewDetails: "Detayları, Mimariyi ve Demo'yu Gör",
      watchDemo: "Demo'yu İncele",
      githubLink: "Kaynak Kodu",
      demoLink: "Canlı Demo",
      modalTitle: "Proje Teknik İncelemesi",
      roleLabel: "Rol & Sorumluluk",
      statusLabel: "Proje Durumu",
      metricsLabel: "Temel Başarı Metrikleri",
      agentArchLabel: "Çoklu Ajan / Sistem Mimarisi",
      techStackLabel: "Kullanılan Teknolojiler",
      closeModal: "Detayı Kapat",
    },
    experience: {
      sectionTitle: "Deneyim & Yetkinlikler",
      sectionSubtitle: "İş tecrübeleri, teknik yetkinlik seti, yapay zeka akademisi ve sertifikalar.",
      workTitle: "Work Experience",
      skillsTitle: "Skills & Tech Stack",
      programsTitle: "Yapay Zeka Programları & Hızlandırma Bursları",
      certificationsTitle: "Sertifikalar ve Mesleki Gelişim",
    },
    contact: {
      sectionTitle: "İletişime Geçin",
      sectionSubtitle: "İşe alım süreçleri, akademik çalışmalar ve yapay zeka projeleri için ulaşıma açığım.",
      emailLabel: "E-posta Adresi",
      copyEmail: "E-postayı Kopyala",
      copied: "Kopyalandı!",
      formName: "Adınız",
      formEmail: "E-posta Adresiniz",
      formMessage: "Mesajınız",
      formSubmit: "Mesaj Gönder",
      formSending: "Gönderiliyor...",
      formSuccess: "Teşekkürler! Mesajınız hazırlandı.",
    },
    footer: {
      copyright: "Tüm Hakları Saklıdır.",
    },
  },
};

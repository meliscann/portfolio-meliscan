export interface SkillCategory {
  id: string;
  categoryName: {
    en: string;
    tr: string;
  };
  icon: string;
  description: {
    en: string;
    tr: string;
  };
  badgeColor: "lavender" | "mint" | "peach" | "sky";
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai-llm-systems",
    categoryName: {
      en: "AI & LLM Systems",
      tr: "Yapay Zeka ve LLM Sistemleri",
    },
    icon: "BrainCircuit",
    description: {
      en: "Multi-agent LLM orchestration, agentic tool calling, retrieval-augmented generation (RAG), and speech-to-text processing.",
      tr: "Çoklu ajan LLM orkestrasyonu, otonom araç çağırımı (tool calling), RAG ve ses tanıma sistemleri.",
    },
    badgeColor: "lavender",
    skills: [
      { name: "Multi-Agent Systems", highlight: true, tag: "Core Focus" },
      { name: "LLM Orchestration (LangChain, LangGraph)", highlight: true },
      { name: "Agentic Function Calling & Tool Use", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true },
      { name: "Whisper ASR (Speech-to-Text)", highlight: false },
      { name: "SentenceTransformers & FAISS", highlight: false },
      { name: "LLaMA-3.3-70B & Groq API", highlight: false },
    ],
  },
  {
    id: "ml-dl-frameworks",
    categoryName: {
      en: "ML / DL & Explainable AI (XAI)",
      tr: "ML / Derin Öğrenme & Açıklanabilir AI",
    },
    icon: "Sparkles",
    description: {
      en: "Deep learning computer vision models, gradient boosting, and SHAP-based feature attributions.",
      tr: "Derin öğrenme bilgisayarlı görü modelleri, gradyan artırma ve SHAP tabanlı açıklanabilirlik.",
    },
    badgeColor: "mint",
    skills: [
      { name: "Explainable AI (SHAP)", highlight: true, tag: "XAI Specialization" },
      { name: "MobileNetV2 & CNNs", highlight: true, tag: "95% F1-Score" },
      { name: "XGBoost & LightGBM", highlight: true },
      { name: "PyTorch & TensorFlow / Keras", highlight: true },
      { name: "Scikit-Learn & Classical ML Models", highlight: false },
      { name: "Pandas & NumPy Data Engineering", highlight: false },
      { name: "Model Evaluation (ROC-AUC, F1-Score)", highlight: false },
    ],
  },
  {
    id: "languages-backend",
    categoryName: {
      en: "Languages & Backend Engineering",
      tr: "Diller ve Backend Mühendisliği",
    },
    icon: "Code2",
    description: {
      en: "High-concurrency backend services, graph algorithms, and relational data extraction queries.",
      tr: "Yüksek performanslı backend servisleri, çizge algoritmaları ve veri sorgulama mimarileri.",
    },
    badgeColor: "peach",
    skills: [
      { name: "Python", highlight: true, tag: "Primary Language" },
      { name: "FastAPI", highlight: true, tag: "API Framework" },
      { name: "Pathfinding Algorithms (A*, Theta*, IDA*)", highlight: true },
      { name: "SQL & Relational Databases", highlight: false },
      { name: "Java", highlight: false },
      { name: "Flask & REST APIs", highlight: false },
      { name: "WebSocket Protocol", highlight: false },
    ],
  },
  {
    id: "frontend-devops",
    categoryName: {
      en: "Frontend & Developer Tools",
      tr: "Frontend ve Geliştirici Araçları",
    },
    icon: "Server",
    description: {
      en: "Modern web frameworks, interactive dashboard tools, version control, and containerization.",
      tr: "Modern web kütüphaneleri, etkileşimli veri panelleri, versiyon kontrol ve konteyner teknolojileri.",
    },
    badgeColor: "sky",
    skills: [
      { name: "Next.js 14 & React", highlight: true, tag: "Web Stack" },
      { name: "Tailwind CSS", highlight: true },
      { name: "Streamlit Dashboards", highlight: true },
      { name: "Git & GitHub", highlight: false },
      { name: "Docker", highlight: false },
      { name: "Vercel Deployment", highlight: false },
      { name: "Cursor & Claude Code", highlight: false },
    ],
  },
];

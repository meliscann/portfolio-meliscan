export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    tr: string;
  };
  shortDescription: {
    en: string;
    tr: string;
  };
  fullDescription: {
    en: string;
    tr: string;
  };
  category: "Multi-Agent" | "AI/ML & XAI" | "Computer Vision & Audio" | "Systems & Hacks";
  status: {
    en: string;
    tr: string;
  };
  badgeColor: "lavender" | "mint" | "peach" | "sky";
  featured: boolean;
  role: {
    en: string;
    tr: string;
  };
  technologies: string[];
  metrics?: {
    en: string[];
    tr: string[];
  };
  agentArchitecture?: {
    en: string[];
    tr: string[];
  };
  githubUrl?: string;
  demoUrl?: string;
  iconName: string;
  images?: string[]; // Optional array of image paths for modal carousel
}

export const projectsData: Project[] = [
  {
    id: "finagent",
    slug: "finagent-investment-advisor",
    title: {
      en: "FinAgent — Multi-Agent AI Investment & Portfolio Platform",
      tr: "FinAgent — Çoklu Ajanlı Yapay Zeka Yatırım ve Portföy Platformu",
    },
    shortDescription: {
      en: "Multi-agent investment analysis platform featuring an 8-agent FastAPI backend, Inflation Protection Score (IPS 0-100), 1,000 Monte Carlo GBM simulations, and Next.js 14 UI.",
      tr: "8 ajanlı FastAPI backend, Enflasyon Koruma Skoru (IPS 0-100), 1.000 Monte Carlo GBM simülasyonu ve Next.js 14 arayüzüne sahip çoklu ajanlı yatırım platformu.",
    },
    fullDescription: {
      en: "FinAgent is an end-to-end investment analysis platform designed for retail investors. Architected an 8-agent LLM orchestrator in FastAPI providing Turkish natural language QA, real-time market streams (USD/TRY, Gold, BIST 100) via CBRT EVDS API & Yahoo Finance, a Monte Carlo simulation engine executing 1,000 GBM scenarios, and a Next.js 14 dynamic portfolio simulator backtesting 6 years of historical data (2020-2026).",
      tr: "FinAgent; bireysel yatırımcılar için geliştirilmiş uçtan uca yatırım analizi platformudur. Türkçe doğal dil desteği sunan 8 ajanlı FastAPI orkestratörü, TCMB EVDS API ve Yahoo Finance ile canlı piyasa akışları (USD/TRY, Altın, BIST 100), 1.000 GBM senaryosu çalıştıran Monte Carlo simülasyon motoru ve 6 yıllık (2020-2026) veriyi geriye dönük test eden Next.js 14 portföy simülatörü içermektedir.",
    },
    category: "Multi-Agent",
    status: {
      en: "04/2026 – Present",
      tr: "04/2026 – Günümüz",
    },
    badgeColor: "lavender",
    featured: true,
    role: {
      en: "AI Engineer & Platform Creator",
      tr: "AI Mühendisi & Platform Geliştiricisi",
    },
    technologies: [
      "Next.js 14",
      "FastAPI",
      "LLM Orchestration",
      "Python",
      "Monte Carlo (GBM)",
      "EVDS API",
      "Yahoo Finance API",
      "Tailwind CSS",
    ],
    metrics: {
      en: ["8-Agent LLM Backend Orchestrator", "1,000 Monte Carlo GBM Scenarios", "6 Years Historical Backtesting (2020-2026)"],
      tr: ["8 Ajanlı LLM Backend Orkestratörü", "1.000 Monte Carlo GBM Senaryosu", "6 Yıllık Veri Geriye Dönük Testi (2020-2026)"],
    },
    agentArchitecture: {
      en: [
        "8-Agent Orchestrator: Autonomous LLM agents processing Turkish QA & financial market sentiment.",
        "Monte Carlo Engine: Executes 1,000 Geometric Brownian Motion (GBM) market trajectory simulations.",
        "Inflation Protection Score (IPS): Proprietary 0-100 metric assessing real vs nominal portfolio growth.",
      ],
      tr: [
        "8 Ajanlı Orkestratör: Türkçe Soru-Cevap ve finansal duygu analizi yapan otonom LLM ajanları.",
        "Monte Carlo Motoru: 1.000 Geometrik Brownian Hareketi (GBM) piyasa senaryosu simüle eder.",
        "Enflasyon Koruma Skoru (IPS): Reel ve nominal portföy getirisini ölçen 0-100 arası özel metrik.",
      ],
    },
    //githubUrl: "https://github.com/meliscann/FinAgent",
    iconName: "TrendingUp",
    images: [],
  },
  {
    id: "buildingpath",
    slug: "buildingpath-indoor-navigation",
    title: {
      en: "Multi-Floor Indoor Navigation with Semantic Search & LLM Integration (Graduation Project)",
      tr: "Semantik Arama ve LLM Entegrasyonlu Çok Katlı İç Mekan Navigasyonu (Bitirme Projesi)",
    },
    shortDescription: {
      en: "A fully working navigation system tested on a real 6-floor, 65k-cell building. Benchmarked 7 pathfinding algorithms head-to-head — A* cuts node expansions by up to 3.8x over Dijkstra, and a hybrid LLM + deterministic architecture resolves natural language queries in Turkish and English without ever letting the LLM touch the actual routing math.",
      tr: "Gerçek bir 6 katlı, 65 bin hücrelik binada uçtan uca çalışan bir navigasyon sistemi. 7 yol bulma algoritması birebir karşılaştırıldı — A*, Dijkstra'ya göre düğüm genişletmesini 3.8 kata kadar azaltıyor. Hibrit LLM + deterministik mimari, Türkçe/İngilizce doğal dil sorgularını çözerken rota hesaplamasının tamamını LLM'den bağımsız tutuyor.",
    },
    fullDescription: {
      en: "B.Sc. Graduation Project (01/2026 – 05/2026), supervised by Prof. Dr. Mehmet Raşit Eskicioğlu. Indoor GPS doesn't exist — this project solves the three problems that come with that: no reliable positioning, natural language destinations that don't map to coordinates ('Prof. Whitfield's office'), and multi-floor routing that has to reason about stairs vs. elevators, not just 2D distance.\n\nThe core is a 65,467-cell walkable grid across 6 real floors (230×128 per floor, 0.32m/cell), benchmarked against 7 pathfinding algorithms — BFS, UCS, A*, Weighted A*, Theta*, IDA*, and Bidirectional A* — all built on shared state-space infrastructure. A custom multi-floor admissible heuristic (Euclidean in-floor, extended with the minimum elevator cost for cross-floor estimates) guarantees A* always finds the optimal route while cutting explored nodes by up to 3.8x versus Dijkstra's UCS baseline, and up to 6.8x with Weighted A* at under 4.1% cost tradeoff.\n\nA 3-tier POI resolver (exact alias → labeled instance match → token overlap scoring) maps free-form queries against 168 named POIs, 31 space types, and 125+ bilingual aliases. On top of that sits a hybrid LLM layer (LLaMA-3.3-70B via Groq, temperature 0.1): the model handles language understanding, pronoun resolution across turns, and route narration — but it never touches coordinate lookup, pathfinding, or cost calculation, and falls back to a deterministic resolver if the API is unreachable. A time-calibrated cost model (elevator boarding ≈25s, stair climb ≈22s/floor) also powers a profile system — 'fastest route' vs. 'minimum effort' — where routing behavior emerges purely from MET-based cost multipliers, with zero hardcoded if/else routing logic.",
      tr: "Lisans Bitirme Projesi (01/2026 – 05/2026), Danışman: Prof. Dr. Mehmet Raşit Eskicioğlu. Kapalı alanlarda GPS çalışmıyor — bu proje bundan doğan üç problemi çözüyor: güvenilir konumlandırma yokluğu, koordinata dönüşmeyen doğal dil hedefleri ('Prof. Whitfield'ın ofisi') ve sadece 2D mesafeyi değil merdiven/asansör tercihini de hesaba katması gereken çok katlı rotalama.\n\nSistemin çekirdeği, 6 gerçek katta 65.467 hücrelik yürünebilir bir ızgara (kat başına 230×128, hücre başına 0.32m) ve bu ızgara üzerinde birebir karşılaştırılan 7 algoritma: BFS, UCS, A*, Weighted A*, Theta*, IDA* ve Bidirectional A*. Özel bir çok katlı kabul edilebilir (admissible) sezgisel fonksiyon — kat içinde Öklid mesafesi, katlar arası geçişte minimum asansör maliyetiyle genişletilmiş — A*'ın her zaman optimal rotayı bulmasını garanti ederken, Dijkstra (UCS) tabanlı karşılaştırmaya göre genişletilen düğüm sayısını 3.8 kata, Weighted A* ile ise %4.1'in altında maliyet artışıyla 6.8 kata kadar azaltıyor.\n\n3 katmanlı bir POI çözücü (tam alias eşleşmesi → etiketli örnek eşleşmesi → token örtüşme skorlaması) serbest metin sorgularını 168 adlandırılmış POI, 31 mekan tipi ve 125+ iki dilli takma ad üzerinden çözüyor. Bunun üzerinde hibrit bir LLM katmanı (Groq üzerinden LLaMA-3.3-70B, sıcaklık 0.1) çalışıyor: model dil anlama, konuşma turları arası zamir çözümü ve rota anlatımını üstleniyor — ama koordinat arama, yol bulma veya maliyet hesaplamasına asla dokunmuyor; API erişilemez olursa deterministik çözücüye otomatik geçiyor. Zaman kalibreli bir maliyet modeli (asansöre binme ≈25sn, merdiven çıkışı ≈22sn/kat) aynı zamanda bir profil sistemini besliyor — 'en hızlı rota' ile 'en az efor' — burada rotalama davranışı tamamen MET tabanlı maliyet çarpanlarından ortaya çıkıyor, sıfır hardcoded if/else mantığı ile.",
    },
    category: "AI/ML & XAI",
    status: {
      en: "01/2026 – 05/2026 (Graduation Project)",
      tr: "01/2026 – 05/2026 (Bitirme Projesi)",
    },
    badgeColor: "peach",
    featured: true,
    role: {
      en: "Sole Developer & Researcher",
      tr: "Tekil Geliştirici & Araştırmacı",
    },
    technologies: [
      "Python",
      "Flask",
      "LLaMA-3.3-70B (Groq API)",
      "A* / Theta* / IDA* / Bidirectional A*",
      "Admissible Heuristic Design",
      "Pillow / ImageDraw",
      "Vanilla JS SPA",
      "REST API",
    ],
    metrics: {
      en: [
        "3.8× fewer node expansions (A* vs. UCS/Dijkstra), always optimal",
        "6.8× fewer expansions with Weighted A*, under 4.1% cost tradeoff",
        "168 POIs · 31 space types · 125+ bilingual aliases, tested on a real 6-floor building",
      ],
      tr: [
        "A*, UCS/Dijkstra'ya göre düğüm genişletmesini 3.8 kat azaltıyor, her zaman optimal",
        "Weighted A* ile %4.1'in altında maliyet artışıyla 6.8 kat daha az genişletme",
        "168 POI · 31 mekan tipi · 125+ iki dilli takma ad, gerçek 6 katlı binada test edildi",
      ],
    },
    agentArchitecture: {
      en: [
        "LLM Layer (LLaMA-3.3-70B): query parsing (text → {destination, profile, floor, language}), pronoun resolution, route narration, and explore-mode chat — with rule-based fallback if the API fails.",
        "Deterministic Layer: 3-tier POI resolver, A*-family pathfinding engine, and Pillow-based map renderer — the LLM never sees or influences these.",
        "Cost Model: time-calibrated stair/elevator costs (0.32m/cell, 1.4m/s walking speed) drive an emergent 'fastest vs. minimum-effort' profile system with no hardcoded routing rules.",
      ],
      tr: [
        "LLM Katmanı (LLaMA-3.3-70B): sorgu ayrıştırma (metin → {hedef, profil, kat, dil}), zamir çözümü, rota anlatımı ve keşif modu sohbeti — API başarısız olursa kural tabanlı yedeğe geçiyor.",
        "Deterministik Katman: 3 katmanlı POI çözücü, A* ailesi yol bulma motoru ve Pillow tabanlı harita çizici — LLM bunları asla görmüyor veya etkilemiyor.",
        "Maliyet Modeli: zaman kalibreli merdiven/asansör maliyetleri (0.32m/hücre, 1.4m/s yürüme hızı), hardcoded rota kuralı olmadan 'en hızlı vs. en az efor' profil sistemini ortaya çıkarıyor.",
      ],
    },
    githubUrl: "https://github.com/meliscann/building-path",
    iconName: "Navigation",
    images: [],
    // TODO: add screen recording — see note below
  },
  {
    id: "clinical-dss",
    slug: "explainable-clinical-decision-support",
    title: {
      en: "Explainable AI Clinical Decision Support for Genetic Variant Classification",
      tr: "Genetik Varyant Sınıflandırması İçin Açıklanabilir AI Klinik Karar Destek Sistemi",
    },
    shortDescription: {
      en: "Genomic variant classification system using XGBoost, LightGBM, and SHAP-based feature attributions for transparent, clinically verifiable diagnostic decisions.",
      tr: "Hekimler için şeffaf ve doğrulanabilir kararlar sunan XGBoost, LightGBM ve SHAP tabanlı genomik varyant sınıflandırma sistemi.",
    },
    fullDescription: {
      en: "Clinical decision support system designed to assist healthcare professionals in genomic variant classification. Trained gradient boosting algorithms (XGBoost and LightGBM) on tabular genomic datasets, integrating SHAP (SHapley Additive exPlanations) to explain individual patient risk contributions and strictly tuning hyperparameters to minimize false negatives for patient safety.",
      tr: "Hekimlere genomik varyant sınıflandırmasında yardımcı olan klinik karar destek sistemi. XGBoost ve LightGBM gradyan artırma modelleri eğitilmiş, hasta güvenliği için yanlış negatifleri en aza indirecek hiperparametre optimizasyonu yapılmış ve SHAP öznitelik kat analizi ile kararlar klinik olarak doğrulanabilir kılınmıştır.",
    },
    category: "AI/ML & XAI",
    status: {
      en: "02/2026 – Present",
      tr: "02/2026 – Günümüz",
    },
    badgeColor: "mint",
    featured: true,
    role: {
      en: "AI/ML Engineer",
      tr: "AI/ML Mühendisi",
    },
    technologies: ["Python", "XGBoost", "LightGBM", "SHAP", "Scikit-learn", "Tabular Data Engineering"],
    metrics: {
      en: ["Minimized False Negatives for Patient Safety", "SHAP Local & Global Interpretability", "Optimized Diagnostic F1-Score & ROC-AUC"],
      tr: ["Hasta Güvenliği İçin En Aza İndirilmiş Yanlış Negatifler", "SHAP Yerel ve Küresel Açıklanabilirlik", "Optimize Edilmiş Teşhis F1-Skoru ve ROC-AUC"],
    },
    //githubUrl: "https://github.com/meliscann/Clinical-Variant-XAI",
    iconName: "Activity",
    images: [],
  },
  {
    id: "industrial-voice-assistant",
    slug: "industrial-voice-assistant-whisper-rag",
    title: {
      en: "AI-Powered Real-Time Industrial Voice Assistant (Whisper ASR + RAG)",
      tr: "Yapay Zeka Destekli Gerçek Zamanlı Endüstriyel Sesli Asistan (Whisper ASR + RAG)",
    },
    shortDescription: {
      en: "Speech-to-text and RAG troubleshooting assistant combining Whisper ASR, Llama-3, SentenceTransformers, FAISS, and Streamlit TTS with 80% Exact Code Match Accuracy under acoustic noise.",
      tr: "Gürültülü endüstriyel ortamlar için Whisper ASR, Llama-3, SentenceTransformers, FAISS ve Streamlit TTS içeren sesli bakım asistanı.",
    },
    fullDescription: {
      en: "Built a low-latency speech-activated assistant for noisy industrial maintenance environments. Voice commands are processed via OpenAI Whisper ASR, passed through intent detection combining SentenceTransformers and FAISS vector retrieval over technical machinery manuals, and responded to via Text-to-Speech (TTS) in Streamlit, achieving 80% Exact Code Match Accuracy.",
      tr: "Endüstriyel bakım ortamları için düşük gecikmeli sesli asistan. Sesli komutlar Whisper ASR ile metne çevrilir, SentenceTransformers ve FAISS vektör arama ile teknik kılavuzlardan çözüm bulunur ve Streamlit TTS ile sesli olarak iletilir. Gürültülü ortamda %80 Tam Kod Eşleşme Doğruluğu elde edilmiştir.",
    },
    category: "Computer Vision & Audio",
    status: {
      en: "11/2025 – 01/2026",
      tr: "11/2025 – 01/2026",
    },
    badgeColor: "sky",
    featured: true,
    role: {
      en: "Speech & RAG Engineer",
      tr: "Ses & RAG Mühendisi",
    },
    technologies: ["Whisper ASR", "Llama-3", "SentenceTransformers", "FAISS", "Streamlit", "Python", "NLP"],
    metrics: {
      en: ["80% Exact Code Match under Background Noise", "Low-Latency Whisper Speech-to-Text", "Hands-Free Field Technician Workflow"],
      tr: ["Gürültülü Ortamda %80 Tam Kod Eşleşme Doğruluğu", "Düşük Gecikmeli Whisper Ses Tanıma", "Eller Serbest Saha Kullanımı"],
    },
    githubUrl: "https://github.com/meliscann/Industrial-Voice-RAG",
    iconName: "Mic",
    images: [],
  },
  {
    id: "bluesense-ai",
    slug: "bluesense-ai-skin-analysis",
    title: {
      en: "Bluesense AI — MobileNetV2 CNN Skin Analysis Model (Internship Project)",
      tr: "Bluesense AI — MobileNetV2 CNN Cilt Analiz Modeli (Staj Projesi)",
    },
    shortDescription: {
      en: "MobileNetV2 CNN facial skin diagnostic model achieving 95% macro F1-score across 10 health classes for the SmartBeauty mobile app.",
      tr: "SmartBeauty mobil uygulaması için 10 teşhis sınıfında %95 makro F1-skoruna ulaşan MobileNetV2 CNN cilt analiz modeli.",
    },
    fullDescription: {
      en: "Developed during software engineering internship at Bluesense AI. Built, trained, and fine-tuned a MobileNetV2 Convolutional Neural Network for facial skin diagnostic classification. Applied data preprocessing, feature extraction, and image augmentation techniques, achieving 95% macro F1-score across 10 distinct classes.",
      tr: "Bluesense AI stajım süresince geliştirilmiştir. Yüz cilt analizi için MobileNetV2 Konvolüsyonel Sinir Ağı (CNN) eğitilmiş ve 10 teşhis sınıfında %95 makro F1-skoru elde edilmiştir. SmartBeauty mobil uygulaması için yüksek doğruluklu öznitelik çıkarma ve veri artırma teknikleri uygulanmıştır.",
    },
    category: "Computer Vision & Audio",
    status: {
      en: "06/2025 – 08/2025 (Internship)",
      tr: "06/2025 – 08/2025 (Staj)",
    },
    badgeColor: "lavender",
    featured: false,
    role: {
      en: "AI Engineer Intern",
      tr: "AI Mühendisi Stajyeri",
    },
    technologies: ["Python", "TensorFlow / Keras", "MobileNetV2", "OpenCV", "FastAPI"],
    metrics: {
      en: ["95% Macro F1-Score Across 10 Diagnostic Classes", "Mobile-Optimized Inference Latency", "Integrated into SmartBeauty Mobile App"],
      tr: ["10 Teşhis Sınıfında %95 Makro F1-Skoru", "Mobil Uyumlu Düşük Gecikmeli Çıkarım", "SmartBeauty Mobil Uygulamasına Entegre"],
    },
    //githubUrl: "https://github.com/meliscann/Bluesense-Skin-CNN",
    iconName: "Eye",
    images: [],
  },
  {
    id: "weak-password-xai",
    slug: "weak-password-detection-xai",
    title: {
      en: "Explainable Weak Password Detection (MEF University Workshop Poster)",
      tr: "Açıklanabilir Zayıf Şifre Tespiti (MEF Üniversitesi Çalıştay Posteri)",
    },
    shortDescription: {
      en: "Random Forest password vulnerability classifier on ~50K zxcvbn-labeled entries (85.3% accuracy, 0.93 ROC-AUC) with SHAP attributions presented at MEF University AI-Cybersecurity Workshop.",
      tr: "~50 bin şifre üzerinde eğitilmiş Random Forest modeli (%85.3 doğruluk, 0.93 ROC-AUC), SHAP analizleri ile MEF Üniversitesi AI-Siber Güvenlik Çalıştayı'nda sunulmuştur.",
    },
    fullDescription: {
      en: "Engineered an explainable security classifier on ~50,000 passwords scored via the zxcvbn entropy engine. Trained a Random Forest model achieving 85.3% accuracy and 0.93 ROC-AUC score. Applied SHAP feature attributions to highlight how length, character variety, and dictionary n-grams influence vulnerability. Presented as a research poster at the MEF University AI & Cybersecurity Workshop.",
      tr: "zxcvbn motoru ile etiketlenmiş ~50.000 şifre üzerinde açıklanabilir siber güvenlik modeli. Random Forest modeli %85.3 doğruluk ve 0.93 ROC-AUC skoru elde etmiştir. SHAP analizi ile zayıflığı tetikleyen faktörler görselleştirilmiş ve MEF Üniversitesi AI-Siber Güvenlik Çalıştayı'nda poster olarak sunulmuştur.",
    },
    category: "AI/ML & XAI",
    status: {
      en: "Academic Workshop Poster Presentation",
      tr: "Akademik Çalıştay Poster Sunumu",
    },
    badgeColor: "peach",
    featured: false,
    role: {
      en: "Lead Researcher & Presenter",
      tr: "Lider Araştırmacı & Sunucu",
    },
    technologies: ["Python", "Random Forest", "zxcvbn", "SHAP", "Scikit-Learn", "Matplotlib / Seaborn"],
    metrics: {
      en: ["85.3% Classification Accuracy", "0.93 ROC-AUC Score", "~50K Password Dataset Analyzed"],
      tr: ["%85.3 Sınıflandırma Doğruluğu", "0.93 ROC-AUC Skoru", "~50 Bini Aşkın Şifre Veriset"],
    },
    //githubUrl: "https://github.com/meliscann/Password-XAI-Research",
    iconName: "ShieldAlert",
    images: [],
  },
  {
    id: "carbon",
    slug: "carbon-ai-coach",
    title: {
      en: "CarbOn — Multi-Agent AI Carbon Footprint Coach",
      tr: "CarbOn — Çoklu Ajanlı Yapay Zeka Karbon Ayak İzi Koçu",
    },
    shortDescription: {
      en: "Multi-agent AI ecosystem featuring Tracking, Insight, and Coach agents developed during a 6-week intensive AI bootcamp as Product Owner.",
      tr: "6 haftalık yoğun AI bootcamp sürecinde Product Owner rolüyle geliştirilen Tracking, Insight ve Coach ajanlı çoklu ajan sistemi.",
    },
    fullDescription: {
      en: "CarbOn is a multi-agent AI sustainability platform built during a 6-week intensive AI Bootcamp capstone where I served as Product Owner and AI Developer. The platform delegates responsibilities across specialized LLM agents: the Tracking Agent computes carbon impact, the Insight Agent detects energy waste patterns via ChromaDB vector search, and the Coach Agent generates personalized behavior nudges.",
      tr: "CarbOn; Product Owner ve AI Geliştiricisi olarak liderlik ettiğim 6 haftalık AI Bootcamp bitirme projesidir. Sistem sorumlulukları uzmanlaşmış LLM ajanlarına böler: Tracking Ajanı emisyon hesaplar, Insight Ajanı enerjideki israf kalıplarını bulur, Coach Ajanı ise kişiselleştirilmiş sürdürülebilirlik önerileri sunar.",
    },
    category: "Multi-Agent",
    status: {
      en: "6-Week Bootcamp Capstone Project",
      tr: "6 Haftalık Bootcamp Bitirme Projesi",
    },
    badgeColor: "mint",
    featured: false,
    role: {
      en: "Product Owner & AI Architect",
      tr: "Product Owner & AI Mimarı",
    },
    technologies: ["Python", "LangGraph", "FastAPI", "OpenAI / Gemini", "ChromaDB", "Streamlit"],
    metrics: {
      en: ["3 Coordinated AI Agents", "Product Owner Leadership", "Vector Search Energy Waste Detection"],
      tr: ["3 Koordineli Yapay Zeka Ajanı", "Product Owner Rolü", "Vektör Arama İsraf Tespiti"],
    },
    //githubUrl: "https://github.com/meliscann/CarbOn",
    iconName: "Leaf",
    images: [],
  },
  {
    id: "kobi-pilot",
    slug: "kobi-pilot-sme-assistant",
    title: {
      en: "KOBİ Pilot — SME Operations Multi-Agent Assistant (Hackathon Project)",
      tr: "KOBİ Pilot — Çoklu Ajanlı KOBİ Operasyon Asistanı (Hackathon Projesi)",
    },
    shortDescription: {
      en: "Multi-agent business operations assistant powered by Gemini 1.5 Flash, FastAPI, SQLite, and Streamlit built for rapid SME workflow automation.",
      tr: "Gemini 1.5 Flash, FastAPI, SQLite ve Streamlit ile geliştirilmiş, KOBİ iş süreçlerini otomatikleştiren çoklu ajanlı operasyon asistanı.",
    },
    fullDescription: {
      en: "Developed during a competitive AI hackathon, KOBİ Pilot empowers small and medium enterprises (SMEs) with automated invoice parsing, inventory replenishment alerts, and customer response draft generation using Google's Gemini 1.5 Flash model inside a multi-agent architecture.",
      tr: "AI Hackathon etkinliğinde geliştirilen KOBİ Pilot; küçük ve orta ölçekli işletmeler için fatura ayrıştırma, stok yenileme uyarıları ve müşteri yanıt taslağı hazırlama süreçlerini Google Gemini 1.5 Flash ve çoklu ajan altyapısı ile otomatize eder.",
    },
    category: "Systems & Hacks",
    status: {
      en: "Hackathon Project",
      tr: "Hackathon Projesi",
    },
    badgeColor: "sky",
    featured: false,
    role: {
      en: "Full-Stack AI Developer",
      tr: "Full-Stack AI Geliştiricisi",
    },
    technologies: ["Python", "Gemini 1.5 Flash", "FastAPI", "SQLite", "Streamlit"],
    metrics: {
      en: ["Sub-2-Second Agent Response", "Automated Invoice & Inventory Parsing", "Built under Hackathon Time Constraints"],
      tr: ["2 Saniye Altı Ajan Yanıtı", "Otomatik Fatura ve Stok Ayrıştırma", "Kısıtlı Hackathon Süresinde Geliştirildi"],
    },
    //githubUrl: "https://github.com/meliscann/KOBI-Pilot",
    iconName: "Briefcase",
    images: [],
  },
];

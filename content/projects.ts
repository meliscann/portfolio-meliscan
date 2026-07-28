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
  images?: string[]; // Optional array of image paths for gallery carousel
  posterImageUrl?: string; // Optional poster image path
  videoUrl?: string; // Optional video path (.mp4) or video URL
  posterPdfUrl?: string; // Optional PDF poster path
}

export const projectsData: Project[] = [
  // 1. BuildingPath
  {
    id: "buildingpath",
    slug: "buildingpath-indoor-navigation",
    title: {
      en: "BuildingPath: AI-Powered Multi-Floor Indoor Navigation",
      tr: "BuildingPath: Yapay Zeka Destekli Çok Katlı İç Mekan Navigasyonu",
    },
    shortDescription: {
      en: `BuildingPath is an indoor navigation system I built for a 6-floor, 160+ room research building where GPS doesn't work and floor plans aren't machine-readable.

Background: Users are unable to access GPS signals inside the building and typically describe destinations in words, not coordinates.
Goal: Let users type a destination in plain English or Turkish and get an optimal, real-world-calibrated route across floors.
Tools: Python for 7 benchmarked pathfinding algorithms, a custom cost model based on real walking speed and physical exertion data, and an LLM (via Groq) for natural language understanding, kept deliberately separate from all routing decisions for reliability.
Insights: A* cut search time by up to 3.8x over baseline while guaranteeing optimal routes; the accessibility profile system produced sensible stairs vs. elevator routing with zero hardcoded rules.
Through this project, I learned how to distinguish between the components of AI systems that should be delegated to language models and those that must remain deterministic.`,
      tr: `BuildingPath, GPS'in çalışmadığı ve kat planlarının makine tarafından okunamadığı, 6 katlı ve 160'tan fazla odalı bir araştırma binası için geliştirdiğim bir bina içi navigasyon sistemi.

Arka Plan: Kullanıcılar, bina içinde GPS'e erişemiyorlar ve hedeflerini genellikle koordinat değil, kelimelerle tarif ediyorlar.
Amaç: Kullanıcının hedefini İngilizce veya Türkçe yazmasıyla katlar arası optimal, gerçek dünya verilerine göre kalibre edilmiş bir rota sunmak.
Araçlar: Birbirine karşı test ettiğim 7 farklı yol bulma algoritması için Python, gerçek yürüme hızı ve fiziksel efor verilerine dayanan özel bir maliyet modeli, ve doğal dil anlama için (Groq üzerinden) bir LLM. LLM'i güvenilirlik için tüm rota kararlarından bilinçli olarak ayrı tuttum.
Bulgular: A*, optimal rotayı garanti ederken arama süresini temel yönteme göre 3,8 kata kadar kısalttı. Erişilebilirlik profil sistemi ise sıfır sabit kodlanmış kuralla mantıklı merdiven-asansör seçimleri yaptı.
Bu çalışmam sayesinde yapay zeka projelerinde, problemin dil modeline bırakılacak kısımları ile deterministik tutulması gereken kısımlarının ayrımını yapmayı öğrendim.`,
    },
    fullDescription: {
      en: `Introduction
Outdoor navigation has been solved by GPS, but indoors it's still an open problem: no reliable positioning, no machine-readable floor plans, and people describe destinations in words, not coordinates ("Prof. Whitfield's office," not "x:141, y:11"). I built BuildingPath to solve this for a real, complex building: a 6-floor, 160+ room research facility.

The goal was to:
• Answer natural-language destination queries
• Compute genuinely optimal routes across floors, not just "shortest path" but fastest in real time
• Explain the route back to the user in plain language
• Keep the system reliable even if the AI component goes down

Process
Key steps in building the system:
• Converted architectural floor plans into a 230×128 grid per floor (65,000+ walkable cells)
• Built a resolver that matches free-text queries against 168 named locations and 31 space categories using a 3-tier strategy: exact match, then labeled-entity match, then token-overlap scoring, supporting both English and Turkish
• Implemented and benchmarked 7 pathfinding algorithms (A*, Weighted A*, Theta*, Bidirectional A*, IDA*, UCS, BFS)
• Calibrated a cost model to real walking speed and physical exertion (MET values for stairs vs. elevators), so the system finds the route that matches how a real person would want to move, including a "fastest" vs. "minimum effort" (accessibility-aware) profile
• Integrated an LLM (LLaMA-3.3-70B via Groq) to handle the fuzzy part: interpreting queries, resolving pronouns across a conversation, and narrating routes in natural language, but never making routing decisions itself, so the app keeps working even if the API call fails
• Wrapped everything in a Flask backend and a vanilla JS single-page frontend with live floor-plan visualization

Results
• A* cut node expansion by up to 3.8x vs. brute-force search while still guaranteeing the optimal route
• A speed-optimized variant (Weighted A*) delivered up to 6.8x faster computation for a max 4.1% cost tradeoff
• The two user profiles produced genuinely different, sensible routes (stairs vs. elevator) for the same start/end point, purely from the cost model, with no hardcoded "if minimum effort, avoid stairs" logic anywhere

Insights
The biggest lesson was architectural: keeping the LLM strictly out of the decision-making path (routing, cost calculation) and confined to language understanding made the system dramatically more reliable and debuggable than an end-to-end "ask the LLM to find the path" approach, which, per related research I reviewed, is both slower and less accurate. Good product design here meant knowing which problems AI should solve and which it shouldn't.

Learnings
• Structured-output prompt engineering (forcing reliable JSON from an LLM)
• Designing admissible heuristics for guaranteed-optimal search
• Calibrating abstract cost functions against real-world physical constants
• Building a resilient system with graceful degradation when an external API is unavailable`,

      tr: `Giriş
Açık alanda navigasyon GPS ile çözülmüş bir problem, ama bina içinde durum farklı: konum sinyali güvenilir değil, kat planları makine tarafından okunabilir formatta değil, ve insanlar hedeflerini koordinat değil, kelimelerle tarif ediyor ("Prof. Whitfield'ın ofisi" gibi). Bu projede, 6 katlı ve 160'tan fazla odası olan gerçek bir araştırma binası için bu problemi çözdüm.

Amaçlarım:
• Doğal dilde yazılan hedef sorgularını anlamak
• Katlar arası gerçekten optimal, sadece en kısa değil, gerçek zamanda en hızlı rotayı hesaplamak
• Rotayı kullanıcıya anlaşılır bir dille geri anlatmak
• Yapay zeka bileşeni çökse bile sistemi çalışır tutmak

Süreç
Sistemi kurarken izlediğim adımlar:
• Mimari kat planlarını her kat için 230×128'lik bir grid'e (65.000+ yürünebilir hücre) dönüştürdüm
• 168 isimlendirilmiş konum ve 31 mekân kategorisi üzerinde, hem İngilizce hem Türkçe destekleyen 3 aşamalı bir eşleştirme stratejisiyle (tam eşleşme, ardından etiketli varlık eşleşmesi, ardından kelime örtüşme skorlaması) çalışan bir sorgu çözücü kurdum
• 7 farklı yol bulma algoritması (A*, Weighted A*, Theta*, Bidirectional A*, IDA*, UCS, BFS) uyguladım ve karşılaştırdım
• Maliyet modelini gerçek yürüme hızına ve fiziksel efor verilerine (merdiven/asansör için MET değerleri) göre kalibre ettim, böylece sistem gerçek bir insanın tercih edeceği rotayı buluyor ("en hızlı" ve erişilebilirlik odaklı "en az efor" profilleri dahil)
• Belirsiz kısmı halletmesi için bir LLM (Groq üzerinden LLaMA-3.3-70B) entegre ettim: sorguları yorumluyor, konuşma boyunca zamir çözümlemesi yapıyor, rotayı doğal dilde anlatıyor, ama hiçbir rota kararı vermiyor, bu sayede API çağrısı başarısız olsa bile uygulama çalışmaya devam ediyor
• Sistemi Flask backend ve canlı kat planı görselleştirmesi olan vanilla JS bir SPA ile bütünleştirdim

Sonuçlar
• A*, kaba kuvvet aramaya kıyasla düğüm genişletmesini optimal rotayı garanti ederken 3,8 kata kadar azalttı
• Hız odaklı bir varyant (Weighted A*), maksimum %4,1 maliyet artışı karşılığında hesaplamayı 6,8 kata kadar hızlandırdı
• İki kullanıcı profili, aynı başlangıç/bitiş noktası için maliyet modelinden tamamen doğal şekilde farklı ve mantıklı rotalar (merdiven vs. asansör) üretti, hiçbir yerde sabit kodlanmış bir kural olmadan

Çıkarımlar
En büyük ders mimariyle ilgiliydi. LLM'i karar verme sürecinden (rota belirleme, maliyet hesaplama) tamamen uzak tutup sadece dil anlama görevine hapsetmek, sistemi "LLM'e haritadan yol buldur" yaklaşımına göre çok daha güvenilir ve hata ayıklanabilir hale getirdi. İncelediğim ilgili araştırmalara göre bu yaklaşım hem daha yavaş hem de daha az doğru. İyi ürün tasarımı burada, yapay zekanın hangi problemleri çözmesi, hangilerini çözmemesi gerektiğini bilmekti.

Öğrenimler
• LLM'den güvenilir JSON çıktısı almak için prompt mühendisliği
• Garantili optimal arama için admissible heuristic tasarımı
• Soyut maliyet fonksiyonlarını gerçek dünya fiziksel sabitlerine göre kalibre etmek
• Dış API kullanılamadığında zarifçe geri düşen (graceful degradation), dayanıklı sistem tasarımı`,
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
    videoUrl: "/projects/buildingpath-demo.mp4",
  },

  // 2. Explainable Weak Password Detection
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
    posterImageUrl: "/projects/MelisCan-Workshop-Poster.png",
    posterPdfUrl: "/projects/MelisCan-Workshop-Poster.pdf",
    images: [
      "/projects/1.jpg",
      "/projects/2.jpg",
      "/projects/3.jpg",
      "/projects/4.jpg",
    ],
  },

  // 3. FinAgent
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
    githubUrl: "",
    iconName: "TrendingUp",
    images: [],
  },

  // 4. CarbOn
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
    githubUrl: "https://github.com/meliscann/CarbOn",
    iconName: "Leaf",
    images: [],
  },

  // 5. Bluesense AI
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
    //githubUrl: "",
    iconName: "Eye",
    images: [],
  },

  // 6. Industrial Voice Assistant
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
    githubUrl: "",
    iconName: "Mic",
    images: [],
  },

  // 7. Clinical Decision Support System (Genetic)
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
    githubUrl: "",
    iconName: "Activity",
    images: [],
  },

  // 8. KOBİ Pilot
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
    //githubUrl: "https://github.com/meliscann/ai-hackathon",
    iconName: "Briefcase",
    images: [],
  },
];

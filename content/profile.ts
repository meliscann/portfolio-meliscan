export interface ProfileData {
  name: string;
  signatureName: string;
  titles: {
    en: string[];
    tr: string[];
  };
  headline: {
    en: string;
    tr: string;
  };
  about: {
    en: {
      bio: string[];
      education: {
        school: string;
        degree: string;
        date: string;
        location: string;
        scholarship: string;
        highlights: string[];
        courseworkTitle: string;
        coursework: string[];
      };
      experience: {
        role: string;
        company: string;
        date: string;
        location: string;
        highlights: string[];
      }[];
      programs: {
        title: string;
        org: string;
        date: string;
        description: string;
      }[];
      certifications: string[];
    };
    tr: {
      bio: string[];
      education: {
        school: string;
        degree: string;
        date: string;
        location: string;
        scholarship: string;
        highlights: string[];
        courseworkTitle: string;
        coursework: string[];
      };
      experience: {
        role: string;
        company: string;
        date: string;
        location: string;
        highlights: string[];
      }[];
      programs: {
        title: string;
        org: string;
        date: string;
        description: string;
      }[];
      certifications: string[];
    };
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

export const profileData: ProfileData = {
  name: "Melis Can",
  signatureName: "Melis Can",
  titles: {
    en: [
      "Software Engineer",
      "AI & ML Developer",
      "AI Researcher",
    ],
    tr: [
      "Yazılım Mühendisi",
      "AI & ML Geliştiricisi",
      "AI Araştırmacısı",
    ],
  },
  headline: {
    en: "AI/ML Engineer with hands-on experience building end-to-end machine learning systems & multi-agent LLM applications.",
    tr: "Uçtan uca makine öğrenmesi sistemleri ve çoklu ajan LLM uygulamaları geliştiren AI/ML ve Yazılım Mühendisi.",
  },
  about: {
    en: {
      bio: [
        "I'm on a path where I've built AI engineering on top of my software engineering foundation, and I genuinely enjoy it. I like working with <strong>multi-agent systems, RAG architectures, CNN-based models, and natural language models</strong>, and integrating branches of AI into existing software. I'm an engineer who understands that a system simply working isn't enough; it also has to produce results that are <strong>correct and understandable</strong>.",
        "Throughout my university education, I worked on a range of different problems: I built a <strong>navigation system that finds its way across a multi-floor building</strong>, and developed an <strong>academic assistant using RAG architecture</strong> that summarizes lecture notes and generates quizzes for students. During my AI engineer internship, I trained a <strong>CNN model to analyze skin images</strong> and deployed it to production with <strong>FastAPI</strong>. I also designed an <strong>industrial assistant that understands voice commands</strong> and assists users, using TTS and STT.",
        "Alongside these, I'm developing <strong>FinAgent</strong>, an investment advisory platform where multiple agents work together, and I'm currently working as <strong>Product Owner</strong> on our <strong>CarbOn</strong> project in an AI bootcamp. Each project I've built required its own technical approach and product-focused thinking, and that variety has always pushed me to try something new.",
        "I believe learning never really stops, and I aim to combine my current skills with hardware knowledge to work on <strong>embedded AI and hardware integration</strong>.",
      ],
      education: {
        school: "Istanbul Atlas University",
        degree: "B.Sc. in Software Engineering",
        date: "10/2022 – 06/2026",
        location: "Istanbul, Türkiye",
        scholarship: "Full Scholarship",
        highlights: [
          "As a <strong>Core Team Member</strong> of the Technical Development and Training Committee at <strong>HSD (Huawei Student Developers)</strong>, I organized technical training sessions and workshop events for students of Atlas University on AI, ML, and current technology topics.",
          "Graduation Project: <strong>Multi-Floor Indoor Route Planning</strong>: Semantic Search and Pathfinding Algorithms with Large Language Model Integration",
        ],
        courseworkTitle: "Related Coursework:",
        coursework: [
          "Deep Learning",
          "Generative AI",
          "Natural Language Processing",
          "Artificial Intelligence (game algorithm design & pathfinding)",
          "Artificial Neural Networks",
          "Software Design and Architecture (design patterns, client-server architecture)",
          "Design and Analysis of Algorithms",
        ],
      },
      experience: [
        {
          role: "AI Engineer Intern",
          company: "Bluesense AI",
          date: "06/2025 – 08/2025",
          location: "Istanbul, Türkiye",
          highlights: [
            "Built and trained a MobileNetV2-based CNN model for facial skin analysis, achieving 95% macro F1-score across 10 classes.",
            "Applied data preprocessing, feature extraction, and augmentation techniques for the SmartBeauty mobile application.",
          ],
        },
        {
          role: "IT Intern",
          company: "ADM Electricity Distribution",
          date: "07/2024 – 08/2024",
          location: "Denizli, Türkiye",
          highlights: [
            "Designed and executed complex SQL queries for data extraction & transformation to build executive reporting workflows.",
            "Analyzed operational datasets to identify efficiency bottlenecks, contributing to strategic planning decisions.",
          ],
        },
      ],
      programs: [
        {
          title: "AI Scholar",
          org: "Artificial Intelligence & Technology Academy (Google Türkiye)",
          date: "12/2025 – Present",
          description: "Google Türkiye-supported AI program focusing on project-based learning, hackathons, and advanced ML model deployments.",
        },
        {
          title: "Future Talent Program",
          org: "Citi Foundation, YGA & UP School",
          date: "02/2026 – 04/2026",
          description: "AI & Big Data acceleration program focusing on sustainability analytics, automation, and tech leadership.",
        },
        {
          title: "Data Science Trainee",
          org: "EPAM Systems",
          date: "11/2025 – 02/2026",
          description: "Hands-on training in end-to-end ML pipelines, EDA, hyperparameter optimization, and MLOps workflows.",
        },
      ],
      certifications: [
        "Convolutional Neural Networks (DeepLearning.AI)",
        "Developing Generative AI Applications using Python (IBM)",
        "Foundations of Project Management (Google)",
        "Forward Program (McKinsey.org)",
      ],
    },
    tr: {
      bio: [
        "Yazılım mühendisliği temelimin üzerine yapay zeka mühendisliğini ekleyerek keyif aldığım bir yolda ilerliyorum. <strong>Çoklu ajan sistemleri, RAG mimarileri, CNN tabanlı modeller ve doğal dil modelleriyle</strong> çalışmayı; var olan yazılımlara yapay zekanın dallarını entegre etmeyi seviyorum. Bir sistemin sadece çalışmasının yeterli olmadığını, mutlaka <strong>doğru ve anlaşılır</strong> sonuçlar üretmesi gerektiğinin farkında olan bir mühendisim.",
        "Üniversite eğitimim boyunca birbirinden farklı problemlerle uğraştım: <strong>çok katlı bir binada yol bulan bir navigasyon sistemi</strong> kurdum, <strong>RAG mimarisi kullanarak öğrenciler için ders notlarından özet çıkarıp quiz üreten bir akademik asistan</strong> geliştirdim. AI engineer stajımda <strong>cilt görüntülerini analiz eden bir CNN modeli</strong> eğitip <strong>FastAPI</strong> ile production'a aldım. TTS ve STT kullanarak, <strong>sesli komutları anlayıp kullanıcıyı asiste eden bir endüstriyel asistan</strong> tasarladım.",
        "Bunların yanı sıra, birden fazla ajanın birlikte çalıştığı bir yatırım danışmanlığı platformu (<strong>FinAgent</strong>) geliştirdim ve şu anda bir yapay zeka bootcamp'inde <strong>ürün sorumlusu (Product Owner)</strong> olarak <strong>CarbOn</strong> projemiz üzerinde çalışıyorum. Geliştirdiğim projelerin her biri ayrı bir teknik yaklaşım ve ürün odaklı yaklaşım gerektirdi ve bu çeşitlilik beni hep yeni şeyler denemeye itti.",
        "Öğrenmenin hiçbir zaman bitmediğini düşünüyor ve güncel yetkinliklerimi donanım bilgisiyle birleştirerek <strong>gömülü yapay zeka ve donanım entegrasyonu</strong> üzerine çalışmalar yapmayı hedefliyorum.",
      ],
      education: {
        school: "İstanbul Atlas Üniversitesi",
        degree: "Yazılım Mühendisliği Lisans",
        date: "10/2022 – 06/2026",
        location: "İstanbul, Türkiye",
        scholarship: "Tam Burslu",
        highlights: [
          "<strong>HSD (HUAWEI Student Developers)</strong> topluluğunda Teknik Gelişim ve Eğitim Komitesi <strong>Core Takım Üyesi</strong> olarak Atlas Üniversitesi öğrencilerine yönelik teknik eğitimler ve AI, ML, güncel teknoloji alanlarında workshop etkinlikleri düzenledim.",
          "Bitirme Projesi: <strong>Çok Katlı Kapalı Alanlarda Rota Planlama</strong>: Büyük Dil Modeli Entegrasyonuyla Semantik Arama ve Yol Bulma Algoritmaları",
        ],
        courseworkTitle: "Aldığım Dersler:",
        coursework: [
          "Derin Öğrenme",
          "Üretken Yapay Zeka",
          "Doğal Dil İşleme",
          "Yapay Zeka (oyun algoritması tasarımı ve yol bulma ağırlıklı)",
          "Yapay Sinir Ağları",
          "Yazılım Tasarımı ve Mimarisi (tasarım kalıpları, istemci-sunucu mimarisi)",
          "Algoritma Tasarımı ve Analizi",
        ],
      },
      experience: [
        {
          role: "AI Mühendisi Stajyeri",
          company: "Bluesense AI",
          date: "06/2025 – 08/2025",
          location: "İstanbul, Türkiye",
          highlights: [
            "Yüz cilt analizi için MobileNetV2 tabanlı CNN modeli geliştirdi ve 10 sınıfta %95 makro F1-skoru elde etti.",
            "SmartBeauty mobil uygulaması için veri ön işleme, öznitelik çıkarma ve veri artırma tekniklerini uyguladı.",
          ],
        },
        {
          role: "BT Stajyeri",
          company: "ADM Elektrik Dağıtım",
          date: "07/2024 – 08/2024",
          location: "Denizli, Türkiye",
          highlights: [
            "Yönetim raporlama süreçlerini desteklemek amacıyla veri çıkarma ve dönüştürme SQL sorguları tasarladı.",
            "Operasyonel verisetlerini analiz ederek sistem optimizasyonu ve stratejik kararlara katkı sağladı.",
          ],
        },
      ],
      programs: [
        {
          title: "AI Scholar",
          org: "Yapay Zeka & Teknoloji Akademisi (Google Türkiye)",
          date: "12/2025 – Günümüz",
          description: "Google Türkiye destekli, proje tabanlı öğrenme ve hackathon odaklı yapay zeka programı.",
        },
        {
          title: "Geleceğin Yetenekleri Programı",
          org: "Citi Foundation, YGA & UP School",
          date: "02/2026 – 04/2026",
          description: "Sürdürülebilirlik analitiği, otomasyon ve teknoloji liderliğine odaklanan AI & Big Data hızlandırma programı.",
        },
        {
          title: "Veri Bilimi Kursiyeri",
          org: "EPAM Systems",
          date: "11/2025 – 02/2026",
          description: "Uçtan uca ML boru hatları, EDA, hiperparametre optimizasyonu ve MLOps iş akışları eğitimi.",
        },
      ],
      certifications: [
        "Convolutional Neural Networks (DeepLearning.AI)",
        "Developing Generative AI Applications using Python (IBM)",
        "Foundations of Project Management (Google)",
        "Forward Program (McKinsey.org)",
      ],
    },
  },
  contact: {
    email: "meliscan2002@gmail.com",
    phone: "+90 543 931 31 93",
    linkedin: "https://linkedin.com/in/meliscann",
    github: "https://github.com/meliscann",
    location: "Kagithane, Istanbul, Türkiye",
  },
};

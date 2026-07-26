import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/context/LanguageContext";
import { ThemeProvider } from "@/components/context/ThemeContext";

export const metadata: Metadata = {
  title: "Melis Can | AI/ML Engineer & Software Engineer",
  description:
    "Personal portfolio of Melis Can, Software Engineer & AI/ML Specialist focusing on Multi-Agent Systems, RAG, Explainable AI (XAI), and Deep Learning.",
  keywords: [
    "Melis Can",
    "AI Engineer",
    "ML Engineer",
    "Software Engineer",
    "Multi-Agent Systems",
    "RAG",
    "XAI",
    "Explainable AI",
    "Istanbul Atlas University",
  ],
  authors: [{ name: "Melis Can" }],
  openGraph: {
    title: "Melis Can | AI/ML Engineer & Software Engineer",
    description:
      "Explore intelligent multi-agent AI platforms, explainable clinical decision models, and 3D graph pathfinding algorithms.",
    type: "website",
    locale: "en_US",
    siteName: "Melis Can AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melis Can | AI/ML Engineer & Software Engineer",
    description:
      "AI/ML Engineer specializing in Multi-Agent Systems, RAG, and Explainable AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

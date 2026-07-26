import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: "#C9B8FF",
          lavenderLight: "#E8E1FF",
          lavenderDark: "#8B65FF",
          mint: "#A8E6CF",
          mintLight: "#DCF5EC",
          mintDark: "#3BB88C",
          peach: "#FFD6C4",
          peachLight: "#FFF0EA",
          peachDark: "#FF8E6B",
          sky: "#BDE0FE",
          rose: "#FFC6FF",
        },
        bg: {
          light: "#FAFAF9",
          lightCard: "rgba(255, 255, 255, 0.75)",
          dark: "#0B0F17",
          darkCard: "rgba(18, 24, 38, 0.75)",
        },
        borderCustom: {
          light: "rgba(226, 232, 240, 0.8)",
          dark: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
        signature: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 10s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        "pastel-glow": "0 10px 30px -10px rgba(201, 184, 255, 0.35)",
        "mint-glow": "0 10px 30px -10px rgba(168, 230, 207, 0.35)",
        "peach-glow": "0 10px 30px -10px rgba(255, 214, 196, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

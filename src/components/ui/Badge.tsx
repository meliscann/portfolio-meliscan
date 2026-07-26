import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "lavender" | "mint" | "peach" | "sky" | "neutral" | "mono";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "lavender",
  size = "sm",
  className = "",
}) => {
  const variantStyles = {
    lavender: "bg-pastel-lavender/30 text-indigo-900 dark:text-pastel-lavenderLight border-pastel-lavender/60",
    mint: "bg-pastel-mint/30 text-emerald-900 dark:text-pastel-mintLight border-pastel-mint/60",
    peach: "bg-pastel-peach/30 text-amber-900 dark:text-pastel-peachLight border-pastel-peach/60",
    sky: "bg-pastel-sky/30 text-sky-900 dark:text-sky-100 border-pastel-sky/60",
    neutral: "bg-stone-100 text-stone-800 dark:bg-slate-800 dark:text-slate-200 border-stone-200 dark:border-slate-700",
    mono: "bg-slate-900 text-pastel-mint font-mono border-slate-700 shadow-sm",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3 py-1 text-sm font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm transition-all hover:scale-105 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

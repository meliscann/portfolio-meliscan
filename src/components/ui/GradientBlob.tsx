import React from "react";

export const GradientBlob: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Top Left Lavender Blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pastel-lavender/40 dark:bg-purple-900/20 blur-3xl animate-float-slow" />

      {/* Top Right Mint Blob */}
      <div className="absolute top-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-pastel-mint/40 dark:bg-emerald-900/20 blur-3xl animate-float-medium" />

      {/* Center Peach Blob */}
      <div className="absolute top-[45%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-pastel-peach/30 dark:bg-rose-950/20 blur-3xl animate-pulse-glow" />

      {/* Bottom Sky/Lavender Blob */}
      <div className="absolute -bottom-40 right-10 w-[28rem] h-[28rem] rounded-full bg-pastel-sky/40 dark:bg-indigo-950/30 blur-3xl animate-float-slow" />
    </div>
  );
};

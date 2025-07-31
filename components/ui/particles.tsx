"use client";
import { useTheme } from "./themeprovider"; 
import { useRef } from "react";

export default function Particles() {
  const { lightMode } = useTheme();
  const particlesRef = useRef(null);

  const base = (extra: string) =>
    `absolute rounded-full bg-gradient-to-r ${lightMode ? "opacity-40" : "opacity-70"} ${extra}`;

  return (
    <div ref={particlesRef} className="pointer-events-none absolute inset-0 z-0">
      {/* Top area */}
      <div className={base("top-[5%] left-[10%] w-1.5 h-1.5 from-blue-400 to-sky-600")} />
      <div className={base("top-[9%] left-[28%] w-1 h-1 from-purple-400 to-pink-500")} />
      <div className={base("top-[7%] right-[15%] w-2 h-2 from-cyan-400 to-blue-500")} />
      <div className={base("top-[13%] right-[5%] w-1.5 h-1.5 from-rose-400 to-pink-500")} />
      <div className={base("top-[16%] left-[52%] w-1 h-1 from-indigo-400 to-blue-500")} />

      {/* Left vertical area */}
      <div className={base("top-[25%] left-[5%] w-1.5 h-1.5 from-green-300 to-emerald-500")} />
      <div className={base("top-[45%] left-[3%] w-2 h-2 from-red-400 to-rose-500")} />
      <div className={base("bottom-[40%] left-[7%] w-1.5 h-1.5 from-yellow-300 to-amber-400")} />
      <div className={base("bottom-[15%] left-[9%] w-2 h-2 from-lime-300 to-green-500")} />

      {/* Right lower area */}
      <div className={base("bottom-[8%] right-[5%] w-2 h-2 from-fuchsia-400 to-violet-500")} />
      <div className={base("bottom-[22%] right-[10%] w-1.5 h-1.5 from-blue-400 to-indigo-600")} />
      <div className={base("bottom-[30%] right-[15%] w-2 h-2 from-orange-400 to-red-500")} />
      <div className={base("bottom-[12%] right-[25%] w-1 h-1 from-teal-400 to-cyan-500")} />

      {/* Random spread particles */}
      <div className={base("top-[22%] left-[70%] w-1.5 h-1.5 from-yellow-300 to-orange-400")} />
      <div className={base("top-[50%] left-[60%] w-2 h-2 from-sky-400 to-blue-500")} />
      <div className={base("top-[33%] right-[35%] w-1 h-1 from-emerald-400 to-green-600")} />
      <div className={base("bottom-[45%] left-[35%] w-2.5 h-2.5 from-purple-400 to-pink-500")} />
      <div className={base("top-[60%] right-[30%] w-1.5 h-1.5 from-lime-400 to-green-500")} />
      <div className={base("bottom-[20%] right-[40%] w-2 h-2 from-red-400 to-pink-500")} />
      <div className={base("top-[38%] left-[18%] w-2 h-2 from-blue-400 to-blue-600")} />
      <div className={base("bottom-[28%] right-[50%] w-1 h-1 from-indigo-300 to-violet-500")} />
    </div>
  );
}

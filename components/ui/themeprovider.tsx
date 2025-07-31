"use client";
import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({
  lightMode: false,
  toggleLightMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lightMode, setLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const isLight = savedTheme ? savedTheme === "light" : prefersLight;

    setLightMode(isLight);
    document.documentElement.classList.toggle('light', isLight);
    document.documentElement.classList.toggle('dark', !isLight);
    setMounted(true);
  }, []);

  const toggleLightMode = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem("theme", newMode ? "light" : "dark");
    document.documentElement.classList.toggle('light', newMode);
    document.documentElement.classList.toggle('dark', !newMode);
  };


  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      <div
        className={`transition-colors duration-500 ${
          lightMode ? "bg-[#FFFCF3] text-black" : "bg-black text-white"
        } min-h-screen`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
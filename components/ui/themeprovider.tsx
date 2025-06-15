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

  const toggleLightMode = () => setLightMode((prev) => !prev);

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

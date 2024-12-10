"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  themeColor: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const colors = [
  "11 100% 60%", // Red
  "227 100% 56%", // Blue
  "131 100% 60%", // Green
  "328 100% 60%", // Pink
  "208 100% 60%", // Teal
  "88 100% 60%", // Lime
  "39 100% 60%", // Orange
  "279 100% 60%", // Purple
  "168 100% 60%", // Aqua
  "59 100% 60%", // Yellow-green
  "300 100% 60%", // Magenta
  "150 100% 60%", // Spring Green
  "51 100% 50%", // Olive
  "90 100% 50%", // Forest Green
  "150 100% 50%", // Sea Green
  "180 100% 50%", // Cyan
  "16 100% 50%", // Coral
  "282 100% 41%", // Dark Orchid
  "300 100% 50%", // Fuchsia
  "120 100% 50%", // Lime Green
  "181 100% 41%", // Steel Blue
  "300 76% 72%", // Lavender
  "348 83% 47%", // Crimson
];

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    const nextIndex = (themeIndex + 1) % colors.length;
    setThemeIndex(nextIndex);

    document.documentElement.style.setProperty("--theme", colors[nextIndex]);
  };

  return (
    <ThemeContext.Provider
      value={{ themeColor: colors[themeIndex], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

"use client";

import { useTranslations } from "next-intl";
import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";

interface ThemeContextType {
  colorMap: { name: string; code: string }[];
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslations("global.color");

  const setThemeColor = useCallback((color: string) => {
    document.documentElement.style.setProperty("--theme", color);
    localStorage.setItem("themeColor", color);
  }, []);

  const colorMap = useMemo(
    () => [
      { name: t("red"), code: "0 100% 50%" },
      { name: t("blue"), code: "220 100% 60%" },
      { name: t("green"), code: "140 100% 55%" },
      { name: t("pink"), code: "330 100% 65%" },
      { name: t("orange"), code: "30 100% 55%" },
      { name: t("purple"), code: "270 100% 60%" },
      { name: t("lime"), code: "75 100% 60%" },
      { name: t("magenta"), code: "295 100% 60%" },
      { name: t("yellow"), code: "55 100% 60%" },
      { name: t("cyan"), code: "195 100% 55%" },
    ],
    [t]
  );

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--theme", savedColor);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMap, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

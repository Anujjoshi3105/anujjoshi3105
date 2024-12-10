"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const Mode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Switch onCheckedChange={toggleTheme} checked={isDark} className="mx-2" />
  );
};

export default Mode;

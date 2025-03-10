"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import TooltipComponent from "./tooltip-component";
import { useTranslations } from "next-intl";

export default function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("global");

  return (
    <TooltipComponent message={theme === "dark" ? t("light") : t("dark")}>
      <Button
        className={cn("rounded-full size-8", className)}
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <SunIcon className="size-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
        <MoonIcon className="absolute size-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
        <span className="sr-only">
          {theme === "dark" ? t("light") : t("dark")}
        </span>
      </Button>
    </TooltipComponent>
  );
}

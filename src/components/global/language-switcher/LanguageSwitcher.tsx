"use client";

import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcherSelect from "./LanguageSwitcherSelect";
import { cn, getCountryLocale } from "@/lib/utils";
import TooltipComponent from "@/components/global/tooltip-component";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <TooltipComponent message={t("global.language")}>
      <div className={cn("relative flex items-center", className)}>
        <LanguageSwitcherSelect
          defaultValue={getCountryLocale(locale)}
          label={t("global.language")}
        />
      </div>
    </TooltipComponent>
  );
}

"use client";

import EducationSection from "@/components/About/EducationSection";
import SkillSection from "@/components/About/SkillSection";
import AboutSection from "@/components/About/AboutSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import QuoteSection from "@/components/About/QuoteSection";
import { PageTemplate } from "@/components/Template";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("about");
  return (
    <>
      <PageTemplate title={t("title")} subtitle={t("subtitle")} />

      <div className="my-12">
        <AboutSection />
      </div>
      <EducationSection />
      <SkillSection />
      <ExperienceSection />
      <QuoteSection />
    </>
  );
}

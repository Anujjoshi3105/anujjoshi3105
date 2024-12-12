"use client";
import EducationSection from "@/sections/About/EducationSection";
import SkillSection from "@/sections/About/SkillSection";
import AboutSection from "@/sections/About/AboutSection";
import ExperienceSection from "@/sections/Home/ExperienceSection";
import QuoteSection from "@/sections/About/QuoteSection";
import { PageTemplate } from "@/components/Template";

export default function Page() {
  return (
    <>
      <PageTemplate title="About" subtitle="My Introduction" />
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

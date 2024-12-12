"use client";

import Hero from "@/sections/Home/Hero";
import AboutSection from "@/sections/About/AboutSection";
import ExperienceSection from "@/sections/Home/ExperienceSection";
import TestimonialSection from "@/sections/Home/TestimonialSection";
import ProjectSection from "@/sections/Home/ProjectSection";
import BlogSection from "@/sections/Home/BlogSection";
import { SectionTemplate } from "@/components/Template";
import QuoteSection from "@/sections/About/QuoteSection";

export default function Page() {
  return (
    <main className="space-y-24">
      <Hero />
      <SectionTemplate title="About Me" subtitle="My Introduction">
        <AboutSection />
      </SectionTemplate>
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />
      <QuoteSection />
      <TestimonialSection />
    </main>
  );
}

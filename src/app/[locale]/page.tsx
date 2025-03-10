"use client";

import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/About/AboutSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import ProjectSection from "@/components/Home/ProjectSection";
import BlogSection from "@/components/Home/BlogSection";
import { SectionTemplate } from "@/components/Template";
import QuoteSection from "@/components/About/QuoteSection";

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

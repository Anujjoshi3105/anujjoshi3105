"use client";

import Hero from "@/sections/Home/Hero";
import About from "@/sections/About/About";
import Experience from "@/sections/Home/Experience";
import Testimonial from "@/sections/Home/Testimonial";
import Project from "@/sections/Home/Projects";
import Blog from "@/sections/Home/Blog";
import { SectionTemplate } from "@/components/Template";
import Quote from "@/sections/About/Quote";

export default function Page() {
  return (
    <main className="space-y-24">
      <Hero />
      <SectionTemplate title="About Me" subtitle="My Introduction">
        <About />
      </SectionTemplate>
      <Experience />
      <Project />
      <Blog />
      <Quote />
      <Testimonial />
    </main>
  );
}

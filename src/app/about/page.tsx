"use client";
import Education from "@/sections/About/Education";
import Skill from "@/sections/About/Skill";
import About from "@/sections/About/About";
import Experience from "@/sections/Home/Experience";
import Quote from "@/sections/About/Quote";
import { PageTemplate } from "@/components/Template";

export default function Page() {
  return (
    <>
      <PageTemplate title="About" subtitle="My Introduction" />
      <div className="my-12">
        <About />
      </div>
      <Education />
      <Skill />
      <Experience />
      <Quote />
    </>
  );
}

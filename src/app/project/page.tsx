"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import { childVariants, containerVariants } from "@/utils/animate";
import { PageTemplate } from "@/components/Template";

export default function Page() {
  const [pIndex, setPIndex] = useState(-1);
  const topics = Array.from(new Set(projects.map((project) => project.topic)));
  return (
    <>
      <PageTemplate title="Project" subtitle="My recent work" />
      <div className="py-12">
        {/* Topics Section */}
        <div className="gap-1 justify-center w-full flex items-center py-8 overflow-x-auto">
          {/* All Projects Tab */}
          <div
            className={`link text-nowrap w-fit p-2 px-4 sm:text-lg font-semibold cursor-pointer transition-all delay-150 ${
              pIndex === -1 && "border-b-2 border-b-theme bg-foreground"
            }`}
            onClick={() => setPIndex(-1)}
            key="all">
            All
          </div>
          {/* Individual Topics Tabs */}
          {topics.map((topic, index) => (
            <div
              className={`link text-nowrap p-2 w-fit px-4 sm:text-lg font-semibold cursor-pointer transition-all delay-150 ${
                pIndex === index && "border-b-2 border-b-theme bg-foreground"
              }`}
              onClick={() => setPIndex(index)}
              key={index}>
              {topic}
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid py-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(pIndex === -1
            ? projects
            : projects.filter((project) => project.topic === topics[pIndex])
          ).map((project, index) => (
            <motion.div variants={childVariants} key={index}>
              <ProjectCard project={project} size={true} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

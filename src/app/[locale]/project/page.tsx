"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { childVariants, containerVariants } from "@/lib/animate";
import { PageTemplate } from "@/components/Template";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("project");
  const projects: Project[] = t.raw("entries");
  const [pIndex, setPIndex] = useState(-1);
  const types = Array.from(new Set(projects.map((project) => project.type)));
  const [projectData, setProjectData] = useState<Project[]>(
    projects as Project[]
  );
  return (
    <>
      <PageTemplate title={t("title")} subtitle={t("subtitle")} />
      <div className="py-12">
        {/* types Section */}
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
          {/* Individual types Tabs */}
          {types.map((type, index) => (
            <div
              className={`link text-nowrap p-2 w-fit px-4 sm:text-lg font-semibold cursor-pointer transition-all delay-150 ${
                pIndex === index && "border-b-2 border-b-theme bg-foreground"
              }`}
              onClick={() => setPIndex(index)}
              key={index}>
              {type}
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
            : projects.filter((project) => project.type === types[pIndex])
          ).map((project, index) => (
            <motion.div variants={childVariants} key={index}>
              <ProjectCard project={projectData[index]} size={true} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

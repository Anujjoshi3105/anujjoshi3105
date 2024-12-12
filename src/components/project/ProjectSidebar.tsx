"use client";

import { useState, useEffect, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SocialLink } from "@/components/Social";

const sections = [
  "problem",
  "action",
  "features",
  "challenges",
  "results",
  "future-scope",
];

export default function ProjectSidebar({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-6 h-fit w-full lg:order-last lg:sticky lg:top-24">
      <TableOfContents activeSection={activeSection} />
      <ProjectInfo project={project} />
    </div>
  );
}

function TableOfContents({ activeSection }: { activeSection: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-fit rounded-md bg-muted p-6">
      <h2 className="mb-2 text-2xl font-semibold">Table of Contents</h2>
      <ul className="text-muted-foreground space-y-1 pl-8">
        {sections.map((section) => (
          <TableOfContentsItem
            key={section}
            section={section}
            isActive={activeSection === section}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function TableOfContentsItem({
  section,
  isActive,
}: {
  section: string;
  isActive: boolean;
}) {
  return (
    <motion.li
      className={`custom-bullet capitalize ${
        isActive && "font-bold text-theme"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <a href={`#${section}`}>{section.replace("-", " ")}</a>
    </motion.li>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-fit space-y-8 rounded-md bg-muted p-6">
      <TechnologiesSection tags={project.tags} />
      <ProjectLinksSection github={project.github} link={project.link} />
    </motion.div>
  );
}

function TechnologiesSection({ tags }: { tags: string[] }) {
  return (
    <div>
      <h2 className="mb-2 text-lg sm:text-xl font-semibold">Technologies</h2>
      <div className="flex flex-wrap gap-1">
        {tags.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}>
            <Badge>{tech}</Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectLinksSection({
  github,
  link,
}: {
  github?: string;
  link?: string;
}) {
  return (
    <div>
      <h2 className="mb-2 text-lg sm:text-xl font-semibold">Project Links</h2>
      <div className="flex justify-between items-center">
        {github && <SocialLink href={github} icon={FaGithub} title="Github" />}
        {link && <SocialLink href={link} icon={FaGlobe} title="Link" />}
      </div>
    </div>
  );
}

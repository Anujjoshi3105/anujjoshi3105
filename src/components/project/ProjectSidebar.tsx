"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-6 h-fit w-content lg:sticky lg:top-24">
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
      <h2 className="mb-2 text-2xl font-semibold">Table of Content</h2>
      <ul className="text-muted-foreground space-y-1 pl-8">
        {sections.map((section) => (
          <motion.li
            key={section}
            className={`custom-bullet capitalize ${
              activeSection === section ? "font-bold text-theme" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <a href={`#${section}`}>{section.replace("-", " ")}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-fit space-y-8 rounded-md bg-muted p-6">
      <div>
        <h2 className="mb-2 text-lg sm:text-xl font-semibold">Technologies</h2>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tech, index) => (
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
      <div>
        <h2 className="mb-2 text-lg sm:text-xl font-semibold">Project Links</h2>
        <div className="flex justify-between items-center">
          {project.github && (
            <ProjectLink
              href={project.github}
              icon={<FaGithub />}
              text="Github"
            />
          )}
          {project.link && (
            <ProjectLink href={project.link} icon={<FaGlobe />} text="Link" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {icon}
      <span className="link">{text}</span>
    </motion.a>
  );
}

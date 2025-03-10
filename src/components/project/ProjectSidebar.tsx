"use client";

import { useState, useEffect, useCallback } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SocialLink } from "@/components/Social";
import { useTranslations } from "next-intl";

const sections = [
  "problem",
  "action",
  "features",
  "challenges",
  "results",
  "future-scope",
] as const;

type Section = (typeof sections)[number];

export default function ProjectSidebar({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);

  const handleScroll = useCallback(() => {
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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="space-y-6 h-fit w-full lg:order-last lg:sticky lg:top-24">
      <TableOfContents activeSection={activeSection} />
      <ProjectInfo project={project} />
    </div>
  );
}

const TableOfContents = ({ activeSection }: { activeSection: Section }) => {
  const t = useTranslations("project");
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-fit rounded-md bg-muted p-6">
      <h2 className="mb-2 text-2xl font-semibold">{t("tableOfContent")}</h2>
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
};

const TableOfContentsItem = ({
  section,
  isActive,
}: {
  section: Section;
  isActive: boolean;
}) => {
  const t = useTranslations("project");
  return (
    <motion.li
      className={`custom-bullet capitalize ${
        isActive && "font-bold text-theme"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <a href={`#${section}`}>{t(section)}</a>
    </motion.li>
  );
};

const ProjectInfo = ({ project }: { project: Project }) => {
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
};

const TechnologiesSection = ({ tags }: { tags: string[] }) => {
  const t = useTranslations("project");
  return (
    <div>
      <h2 className="mb-2 text-lg sm:text-xl font-semibold">
        {t("technologies")}
      </h2>
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
};

const ProjectLinksSection = ({
  github,
  link,
}: {
  github?: string;
  link?: string;
}) => {
  const t = useTranslations("project");
  return (
    <div>
      <h2 className="mb-2 text-lg sm:text-xl font-semibold">Project Links</h2>
      <div className="flex justify-between items-center">
        {github && (
          <SocialLink href={github} icon={FaGithub} title={t("github")} />
        )}
        {link && <SocialLink href={link} icon={FaGlobe} title={t("link")} />}
      </div>
    </div>
  );
};

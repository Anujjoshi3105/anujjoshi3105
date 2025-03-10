"use client";

import { useEffect, useRef, useState, useMemo, forwardRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
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

export default function ProjectContent({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>(
    {} as Record<Section, HTMLElement | null>
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach(
      (ref) => ref && observer.observe(ref)
    );
    return () => observer.disconnect();
  }, []);

  const ProjectImage = useMemo(
    () =>
      project.img && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-md overflow-hidden mb-4">
          <Image
            src={project.img}
            alt="Project visualization"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </motion.div>
      ),
    [project.img]
  );

  return (
    <>
      <ProgressBar scaleX={scaleX} />
      {ProjectImage}
      {sections.map((section) => (
        <ProjectSection
          key={section}
          section={section}
          content={project[section]}
          ref={(el) => {
            sectionRefs.current[section] = el;
          }}
        />
      ))}
    </>
  );
}

const ProgressBar = ({ scaleX }: { scaleX: any }) => (
  <motion.div
    className="fixed bottom-0 left-0 right-0 h-1 bg-theme z-50"
    style={{ scaleX, transformOrigin: "0%" }}
  />
);

const ProjectSection = forwardRef<
  HTMLElement,
  { section: Section; content: string | string[] | undefined }
>(({ section, content }, ref) => {
  const t = useTranslations("project");
  return (
    <section id={section} ref={ref} className="mb-8">
      <h2 className="text-3xl font-bold capitalize mb-4">{t(section)}</h2>
      {Array.isArray(content) ? (
        <ul className="pl-4">
          {content.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="custom-bullet"
              transition={{ duration: 0.3, delay: idx * 0.1 }}>
              {item}
            </motion.li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </section>
  );
});
ProjectSection.displayName = "ProjectSection";

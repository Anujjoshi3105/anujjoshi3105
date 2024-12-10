"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  "problem",
  "action",
  "features",
  "challenges",
  "results",
  "futureScope",
] as const;

export default function ProjectContent({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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

  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-theme z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      {project.img && (
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
      )}
      {sections.map((section) => (
        <section
          key={section}
          id={section}
          ref={(el) => {
            sectionRefs.current[section] = el;
          }}
          className="mb-8">
          <h2 className="text-3xl font-bold capitalize mb-4">{section}</h2>
          {Array.isArray(project[section]) ? (
            <ul className="pl-4">
              {(project[section] as string[]).map((item, idx) => (
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
            <p>{project[section]}</p>
          )}
        </section>
      ))}
    </>
  );
}

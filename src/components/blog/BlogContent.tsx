"use client";

import { useEffect, useRef, useState, useMemo, forwardRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogContent({ blog }: { blog: Blog }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sections = useMemo(
    () => blog.content.split(/(?=##\s)/).filter(Boolean),
    [blog.content]
  );

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
      {blog.img && <BlogImage src={blog.img} />}
      {sections.map((section, index) => (
        <BlogSection
          key={index}
          section={section}
          ref={(el) => {
            const sectionId = getSectionId(section);
            sectionRefs.current[sectionId] = el;
          }}
        />
      ))}
    </>
  );
}

const BlogImage = ({ src }: { src: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="rounded-md overflow-hidden mb-4">
    <Image
      src={src}
      alt="blog visualization"
      width={1000}
      height={1000}
      className="w-full object-cover"
    />
  </motion.div>
);

const BlogSection = forwardRef<HTMLElement, { section: string }>(
  ({ section }, ref) => {
    const [heading, ...contentParts] = section.split("\n");
    const sectionId = getSectionId(heading);
    const content = contentParts.join("\n").trim();

    return (
      <section id={sectionId} ref={ref} className="mb-8">
        <h2 className="text-3xl font-bold capitalize mb-4">
          {heading.replace(/##\s/, "")}
        </h2>
        <div className="prose text-primary">{content}</div>
      </section>
    );
  }
);

BlogSection.displayName = "BlogSection";

function getSectionId(heading: string): string {
  return heading.replace(/##\s/, "").trim().toLowerCase().replace(/\s+/g, "-");
}

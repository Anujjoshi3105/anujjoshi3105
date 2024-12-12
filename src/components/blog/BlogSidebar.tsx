"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BlogSidebar({ blog }: { blog: Blog }) {
  const [activeSection, setActiveSection] = useState("");
  const sections = blog.content.split(/(?=##\s)/).map((section) => {
    const heading = section.split("\n")[0].replace(/##\s/, "").trim();
    return heading.toLowerCase().replace(/\s+/g, "-");
  });

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
  }, [sections]);

  return (
    <div className="space-y-6 h-fit w-content lg:sticky lg:top-24 lg:order-last">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="h-fit rounded-md bg-muted p-6">
        <h2 className="mb-2 text-2xl font-semibold">Table of Contents</h2>
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
    </div>
  );
}

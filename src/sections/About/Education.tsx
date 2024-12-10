"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/data";
import { SectionTemplate } from "@/components/Template";

const EduCard = ({ grade, title, date, center }: Qualification) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasPassed, setHasPassed] = useState(false);

  const isInView = useInView(ref, {
    margin: "-45% 0px",
    once: true,
  });

  if (isInView && !hasPassed) {
    setHasPassed(true);
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      {/* Icon */}
      <motion.div
        className={`md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative isolate rounded-full p-2 transition-all duration-150 shrink-0 ${
          hasPassed ? "bg-theme text-muted scale-110" : "bg-muted text-theme"
        }`}>
        <FaGraduationCap className="text-2xl" />
      </motion.div>
      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 py-6 rounded shadow-md transition-all bg-muted group-hover:shadow-theme/40 border-muted">
        <div className="flex justify-between">
          <p className="font-semibold sm:text-lg">{title}</p>
          <time className="text-xs text-nowrap text-theme">{date}</time>
        </div>
        <div className="mb-2 text-sm sm:text-base">{center}</div>
        <div className="text-sm">{grade}</div>
      </div>
    </div>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const bgHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionTemplate title="Education" subtitle="My Qualifications">
      <div ref={ref} className="space-y-20 relative">
        {/* Vertical Line */}
        <div className="absolute inset-0 ml-5 -translate-x-1 md:mx-auto md:translate-x-0 translate-y-16 h-[75%] w-1 bg-foreground" />
        <motion.div
          style={{ height: bgHeight }}
          className="absolute inset-0 ml-5 -translate-x-1 md:mx-auto md:translate-x-0 -translate-y-2 max-h-[75%] w-1 bg-theme"
        />
        {education.map((edu, index) => (
          <EduCard key={index} {...edu} />
        ))}
      </div>
    </SectionTemplate>
  );
};

export default Education;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionTemplate } from "@/components/Template";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { timeAgo } from "@/lib/utils";

const EduCard = ({ edu }: { edu: Education }) => {
  const ref = useRef(null);
  const [hasPassed, setHasPassed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 1 && !hasPassed) {
        setHasPassed(true);
      } else if (value < 1 && hasPassed) {
        setHasPassed(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasPassed]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      {/* Icon */}
      <motion.div
        className={`md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative isolate rounded-full p-2 transition-all duration-150 shrink-0 ${
          hasPassed
            ? "bg-theme text-muted scale-110 shadow-lg shadow-theme"
            : "bg-muted text-theme"
        }`}>
        <FaGraduationCap className="text-2xl" />
      </motion.div>
      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 py-6 rounded shadow-md transition-all bg-muted group-hover:shadow-theme/40 border-muted">
        <div className="flex justify-between items-center mb-2">
          <h2>
            <p className="font-semibold sm:text-lg text-balance">
              {edu.institute}
              <span className="text-theme text-sm">&nbsp;@{edu.place}</span>
            </p>
          </h2>
          <time className="text-xs text-nowrap text-theme">
            {timeAgo(edu?.start as unknown as Date)}
            &nbsp;-&nbsp;
            {timeAgo(edu?.end as unknown as Date)}
          </time>
        </div>
        <div className="text-sm sm:text-base">{edu.degree}</div>
        <div className="text-sm">{edu.grade}</div>
      </div>
    </div>
  );
};

export default function EducationSection() {
  const t = useTranslations("education");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const bgHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const educationData: Education[] = t.raw("entries");

  return (
    <SectionTemplate title={t("title")} subtitle={t("subtitle")}>
      <div ref={ref} className="space-y-20 relative">
        <div className="absolute inset-0 ml-5 -translate-x-1 md:mx-auto md:translate-x-0 translate-y-16 h-[74%] w-1 bg-foreground" />
        <motion.div
          style={{ height: bgHeight }}
          className="absolute inset-0 ml-5 -translate-x-1 md:mx-auto md:translate-x-0 -translate-y-2 max-h-[74%] w-1 bg-theme"
        />
        {educationData.map((edu, index) => (
          <EduCard edu={edu} key={index} />
        ))}
      </div>
    </SectionTemplate>
  );
}

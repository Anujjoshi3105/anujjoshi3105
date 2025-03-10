"use client";

import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { MagnetBtn } from "@/components/animate/MagnetBtn";
import { motion, useTransform, useScroll } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";

export default function ProjectSection() {
  const t = useTranslations("project");
  const projects: Project[] = t.raw("entries");

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-120%"]);
  {
    /*            <Skeleton className="h-[400px] w-[400px]" key={index} /> */
  }
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-1/3 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <Link href="/project" className="my-auto mx-8">
            <MagnetBtn
              text={`${t("title")} ..... ${t("title")} ..... ${t(
                "title"
              )} ..... ${t("title")} ..... `}>
              <MdArrowOutward />
            </MagnetBtn>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

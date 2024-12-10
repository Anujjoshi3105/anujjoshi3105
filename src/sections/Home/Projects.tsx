"use client";

import Link from "next/link";
import { useRef } from "react";
import { MagnetBtn } from "@/components/animate/MagnetBtn";
import { projects } from "@/data";
import { motion, useTransform, useScroll } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
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
            <MagnetBtn text="Projects &bull; Projects &bull; Projects &bull; Projects &bull;">
              <MdArrowOutward />
            </MagnetBtn>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

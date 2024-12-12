"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MagnetBtn } from "@/components/animate/MagnetBtn";
import projects from "@/data/seed/projects.json";
import { motion, useTransform, useScroll } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSection() {
  const [projectData, setProjectData] = useState<Project[]>(
    projects as Project[]
  );
  useEffect(() => {
    async function fetchProjectData() {
      const res = await fetch("/api/project");
      if (res.status === 404) {
        console.log("Project data not found");
        return;
      }
      if (res.status !== 200) {
        console.log("Error fetching project data from API");
        return;
      }
      const data = await res.json();
      setProjectData(data.data as Project[]);
    }
    fetchProjectData();
  }, []);

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
          {projectData.map((project, index) => (
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

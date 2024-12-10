"use client";

import { motion } from "framer-motion";
import { allTags, projects } from "@/data";
import { SearchBar } from "@/components/SearchBar";
import { childVariants, containerVariants } from "@/utils/animate";
import BlogCard from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PageTemplate } from "@/components/Template";

const Page = () => {
  return (
    <>
      <PageTemplate
        title="Recent Blogs"
        subtitle="Insights, Tutorials, and Tech Trends"
      />

      <div className="py-8">
        <SearchBar allTags={allTags} allProjects={projects} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div variants={childVariants} key={index}>
              {/*<Skeleton className="my-2 h-[350px] mx-auto" /> */}
              <BlogCard key={project.title} blog={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Page;

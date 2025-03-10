"use client";

import { useEffect, useState, useMemo } from "react";
import BlogCard from "@/components/BlogCard";
import { childVariants, containerVariants } from "@/lib/animate";
import blog from "@/lib/data/seed/blogs.json";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";

interface SearchProps {
  searchParams: { q?: string };
}

export default function Page({ searchParams }: SearchProps) {
  const t = useTranslations("blog");
  const [blogs, setBlogs] = useState(blog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = searchParams.q;
      if (!query) return;

      setLoading(true);
      try {
        const res = await fetch(`/api/blog?q=${encodeURIComponent(query)}`, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data?.data?.length ? data.data : blog);
      } catch (err) {
        console.error(err);
        setBlogs(blog);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchParams.q]);

  if (loading) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <motion.div variants={childVariants} key={index}>
            <Skeleton />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center text-center text-2xl font-extrabold opacity-40 select-none md:text-5xl">
        {t("notFound", { fallback: "NO SUCH CONTENT FOUND" })}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <motion.div variants={childVariants} key={blog._id}>
          <BlogCard blog={blog} />
        </motion.div>
      ))}
    </motion.div>
  );
}

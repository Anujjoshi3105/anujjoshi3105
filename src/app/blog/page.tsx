"use client";

import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchBar";
import { childVariants, containerVariants } from "@/utils/animate";
import BlogCard from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PageTemplate } from "@/components/Template";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import blog from "@/data/seed/blogs.json";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>(blog);
  const [allTags, setAllTags] = useState<string[]>(
    Array.from(new Set(blog.flatMap((post) => post.tags)))
  );
  const searchParams = useSearchParams();

  const fetchBlogs = useCallback(async (query: string, category: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.set("search", query);
      if (category !== "All categories") params.set("category", category);

      const res = await fetch(`/api/blog?${params.toString()}`);
      if (!res.ok) {
        setBlogs([]);
        console.log("Failed to fetch blog data");
      } else {
        const data = await res.json();
        setBlogs(data.data);
      }
      const tagRes = await fetch("/api/tags");
      console.log(tagRes.json());
      if (!tagRes.ok) {
        console.log("Error fetching tags");
      } else {
        const tagData = await tagRes.json();
        setAllTags(tagData.data || []);
      }
    } catch (error) {
      console.error("An error occurred while fetching blog data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs(
      searchParams.get("search") || "",
      searchParams.get("category") || "All categories"
    );
  }, [fetchBlogs, searchParams]);

  const handleSearch = useCallback(
    (query: string, category: string) => {
      fetchBlogs(query, category);
    },
    [fetchBlogs]
  );

  const memoizedSearchBar = useMemo(
    () => <SearchBar onSearch={handleSearch} allTags={allTags} />,
    [handleSearch, allTags]
  );

  const memoizedBlogCards = useMemo(() => {
    return blogs.length !== 0 ? (
      <div className="flex h-[80vh] w-full font-extrabold opacity-40 select-none items-center justify-center text-center text-2xl md:text-5xl">
        NO SUCH CONTENT FOUND
      </div>
    ) : (
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
  }, [blogs]);

  return (
    <>
      <PageTemplate
        title="Recent Blogs"
        subtitle="Insights, Tutorials, and Tech Trends"
      />

      <div className="py-8 container mx-auto px-4">
        {memoizedSearchBar}

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-[350px] w-full" />
            ))}
          </div>
        ) : (
          memoizedBlogCards
        )}
      </div>
    </>
  );
};

export default Page;

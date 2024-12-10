"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { motion } from "framer-motion";

export function SearchBar({
  allTags,
  allProjects,
}: {
  allTags: string[];
  allProjects: Post[];
}) {
  const [category, setCategory] = useState("All categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Update URL when filters change
  const updateURL = useCallback(() => {
    const queryParams = new URLSearchParams();
    if (debouncedSearchTerm) queryParams.append("search", debouncedSearchTerm);
    if (category !== "All categories") queryParams.append("category", category);
    router.push(`?${queryParams.toString().replace(/%20/g, " ")}`);
  }, [debouncedSearchTerm, category, router]);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm || category !== "All categories") {
      updateURL();
    }
  }, [debouncedSearchTerm, category, updateURL]);

  useClickOutside(inputRef, () => setIsInputFocused(false));

  const filteredProjects = allProjects.filter((project) =>
    project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      className="flex justify-center items-center w-full max-w-3xl mb-10 relative z-50">
      {/* DropDown Category */}
      <div
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}>
        <Button
          size="md"
          className="text-sm flex gap-2 whitespace-nowrap rounded-none rounded-l-2xl">
          <span className="hidden md:block">{category}</span>
          <ChevronDown className="h-4 w-4 group-hover:rotate-180 duration-150" />
        </Button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 bg-background border rounded-sm shadow-lg z-20 w-full">
            {["All categories", ...allTags].map((tech) => (
              <div
                key={tech}
                onClick={() => {
                  setCategory(tech);
                  setIsDropdownOpen(false);
                }}
                className="p-1.5 mx-1 border-b-[1px] text-sm hover:bg-muted cursor-pointer">
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="flex flex-1 items-center relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search blogs, projects, and more"
          className="flex-1 rounded-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
        />

        <Button className="rounded-none rounded-r-2xl" size="md">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>

        {/* Search Dropdown */}
        {isInputFocused && debouncedSearchTerm && (
          <div className="absolute top-full left-0 right-0 bg-background border border-t-0 rounded-sm shadow-lg">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-2 mx-2 hover:bg-muted cursor-pointer border-b-[1px]">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="text-xs truncate">{project.description}</p>
                </div>
              ))
            ) : (
              <div className="p-2 mx-2 hover:bg-muted cursor-pointer border-b-[1px] text-sm">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

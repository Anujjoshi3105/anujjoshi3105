"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string, tag: string) => void;
  allTags: string[];
}

export function SearchBar({ onSearch, allTags }: SearchBarProps) {
  const [tag, settag] = useState("All categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const debouncedSearchTerm = useMemo(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm, tag);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm, tag, onSearch]);

  const updateURL = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) params.set("search", searchTerm);
    else params.delete("search");
    if (tag !== "All categories") params.set("tag", tag);
    else params.delete("tag");
    router.push(`?${params.toString()}`, { scroll: false });
  }, [searchTerm, tag, router, searchParams]);

  useEffect(() => {
    updateURL();
    return debouncedSearchTerm;
  }, [updateURL, debouncedSearchTerm]);

  const handletagChange = useCallback(
    (newtag: string) => {
      settag(newtag);
      setIsDropdownOpen(false);
      onSearch(searchTerm, newtag);
    },
    [searchTerm, onSearch]
  );

  useClickOutside(inputRef, () => setIsInputFocused(false));

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      className="flex justify-center items-center w-full max-w-3xl mb-10 relative z-50">
      <div
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}>
        <Button
          size="md"
          className="text-sm flex gap-2 whitespace-nowrap rounded-none rounded-l-2xl"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}>
          <span className="hidden md:block">{tag}</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
        </Button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 bg-background border rounded-md shadow-lg z-20 min-w-fit"
              role="listbox">
              {["All categories", ...allTags].map((tag) => (
                <div
                  key={tag}
                  onClick={() => handletagChange(tag)}
                  className="p-1 m-1 text-sm hover:bg-accent hover:text-accent-foreground border-b-[1px] cursor-pointer transition-colors duration-200"
                  role="option"
                  aria-selected={tag === tag}>
                  {tag}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-1 items-center relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search blogs, projects, and more"
          className="flex-1 rounded-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          aria-label="Search blogs and projects"
        />
        <Button
          type="submit"
          className="rounded-none rounded-r-2xl"
          size="md"
          onClick={() => onSearch(searchTerm, tag)}
          aria-label="Submit search">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

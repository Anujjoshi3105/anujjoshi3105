"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/lib/hooks/useSearch";
import { cn } from "@/lib/utils";
import { Search, XIcon, Loader2 } from "lucide-react";
import React from "react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  auto?: boolean;
  loading?: boolean;
  searchPath?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  auto = true,
  value: propValue,
  name = "q",
  type = "text",
  searchPath = "/blog",
  placeholder = "Search...",
  className,
  loading = false,
  ...props
}) => {
  const { term, clearSearch, handleChange, handleKeyDown } = useSearch(
    auto,
    searchPath
  );
  const value = propValue ?? term;

  return (
    <div className={cn("relative flex-grow w-full cursor-pointer", className)}>
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-6 rounded-full transition-all duration-300 ease-in-out w-full"
        {...props}
      />
      {value && (
        <Button
          size="mdIcon"
          variant="ghost"
          className="absolute rounded-full right-10 -translate-x-1/3 top-1/2 -translate-y-1/2"
          onClick={(e) => {
            e.stopPropagation();
            clearSearch();
          }}
          aria-label="Clear search">
          <XIcon />
        </Button>
      )}
      <Button
        type="submit"
        size="icon"
        className="absolute right-0 top-0 rounded-l-none rounded-r-full"
        disabled={loading}
        aria-label="Search">
        {loading ? <Loader2 className="animate-spin" /> : <Search />}
      </Button>
    </div>
  );
};

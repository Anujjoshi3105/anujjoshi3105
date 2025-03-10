"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { sendGAEvent } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = (
  auto = true,
  searchPath = "/blog",
  gaEventCategory = "blog"
) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [page, setPage] = useState<string>();
  const [term, setTerm] = useState(query ?? "");
  const [debouncedTerm] = useDebounce(term, 500);

  useEffect(() => {
    if (pathname !== searchPath) {
      setPage(pathname);
    }
  }, [pathname, query, searchPath, term]);

  const handleSearch = useCallback(
    (value: string) => {
      if (value !== "") {
        router.push(`${searchPath}?q=${value}`);
        sendGAEvent("event", gaEventCategory, {
          search_term: value,
        });
        return;
      }

      if (value === "" && pathname === searchPath) {
        router.replace(searchPath);
        return;
      }

      if (!page && pathname === searchPath) {
        router.replace("/", { scroll: true });
        return;
      }

      if (page && pathname !== page) {
        router.replace(page, { scroll: true });
        return;
      }
    },
    [router, pathname, searchPath, page, gaEventCategory]
  );

  useEffect(() => {
    if (auto) {
      handleSearch(debouncedTerm);
    }
  }, [debouncedTerm, auto, handleSearch]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value);
    },
    []
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && query !== debouncedTerm && !auto) {
        handleSearch(debouncedTerm);
      }

      if (event.key === "Escape") {
        setTerm("");
      }
    },
    [query, debouncedTerm, auto, handleSearch]
  );

  const clearSearch = useCallback(() => {
    setTerm("");
  }, []);

  return {
    term,
    handleChange,
    handleKeyDown,
    clearSearch,
  };
};

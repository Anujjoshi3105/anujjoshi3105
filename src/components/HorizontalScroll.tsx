"use client";

import { projects } from "@/data";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HorizontalScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 mx-14 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {projects.map((project) => (
          <div key={project.title} className="h-[200px] w-[300px]">
            {/*<Skeleton className="my-2 h-[350px] mx-auto" /> */}
            <Image src="/me.jpg" height={1000} width={1000} alt="" />
          </div>
        ))}
      </div>

      <span
        className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 font-bold bg-primary hover:bg-foreground text-background ring-2 ring-primary border-2 rounded-full p-1 border-background hover:text-primary duration-150 text-2xl"
        onClick={() => scroll("left")}>
        <ChevronLeft className="h-6 w-6" />
      </span>
      <span
        className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 font-bold bg-primary hover:bg-foreground text-background ring-2 ring-primary border-2 rounded-full p-1 border-background hover:text-primary duration-150 text-2xl"
        onClick={() => scroll("right")}>
        <ChevronRight className="h-6 w-6" />
      </span>
    </div>
  );
}

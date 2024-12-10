"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

type MagnetBtnProps = {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
};

const sizeClasses = {
  sm: "w-16 h-16 text-xs text-[8px]",
  md: "w-24 h-24 text-sm text-[10px]",
  lg: "w-32 h-32 text-base text-[12px]",
  xl: "w-40 h-40 text-lg text-[14px]",
};

export function MagnetBtn({ text, size = "md", children }: MagnetBtnProps) {
  const currentSize = sizeClasses[size];
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "group hover:scale-105 ring-1 ring-primary relative flex items-center justify-center bg-primary text-background hover:bg-foreground hover:text-primary rounded-full transition-all",
        currentSize
      )}>
      <div
        className={cn(
          "transition-transform group-hover:rotate-12",
          {
            sm: "text-xl",
            md: "text-3xl",
            lg: "text-4xl",
            xl: "text-5xl",
          }[size]
        )}>
        {children}
      </div>
      <svg
        className="absolute w-full h-full -rotate-90 animate-spinSlow"
        viewBox="0 0 100 100">
        <path
          id="circlePath"
          d="M50,50m-40,0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0"
          fill="none"
        />
        <text
          className={cn("text-[10px] font-semibold uppercase fill-current")}>
          <textPath href="#circlePath" xlinkHref="#circlePath">
            {text}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
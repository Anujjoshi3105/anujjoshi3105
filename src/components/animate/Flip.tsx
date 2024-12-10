"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const flipVariants = cva(
  "relative block overflow-hidden whitespace-nowrap uppercase",
  {
    variants: {
      size: {
        sm: "text-sm sm:text-xl",
        md: "text-lg sm:text-2xl",
        lg: "text-2xl sm:text-4xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        bold: "font-bold",
        black: "font-black",
      },
    },
    defaultVariants: {
      size: "sm",
      weight: "black",
    },
  }
);

export interface FlipProps
  extends Omit<HTMLMotionProps<"div">, keyof VariantProps<typeof flipVariants>>,
    VariantProps<typeof flipVariants> {
  children: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const Flip = React.forwardRef<HTMLDivElement, FlipProps>(
  ({ children, className, size, weight, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="initial"
        whileHover="hovered"
        className={cn(flipVariants({ size, weight, className }))}
        style={{
          lineHeight: 0.75,
        }}
        {...props}>
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={`initial-${i}`}>
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={`hovered-${i}`}>
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  }
);

Flip.displayName = "Flip";

export default Flip;

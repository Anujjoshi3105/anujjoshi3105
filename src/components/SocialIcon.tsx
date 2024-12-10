import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const socialIconVariants = cva(
  "group relative isolate rounded-full p-2 transition-all shrink-0 before:absolute before:inset-px before:-z-10 before:rounded-full before:transition-all before:duration-500  hover:before:inset-full",
  {
    variants: {
      variant: {
        default:
          "bg-background hover:bg-primary hover:text-background before:bg-background",
        secondary: "bg-theme hover:bg-muted hover:text-theme before:bg-theme",
        destructive:
          "bg-destructive hover:bg-destructive-hover text-destructive-foreground",
        outline: "bg-transparent border text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SocialIconProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof socialIconVariants> {
  href: string;
  title: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  title,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(socialIconVariants({ variant }), className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      {...props}>
      {children}
    </a>
  );
};

export default SocialIcon;

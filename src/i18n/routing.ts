import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales } from "@/lib/utils";

export const routing = defineRouting({
  locales,
  defaultLocale: "en" as const,
  domains: [
    {
      domain: "bitlog.netlify.app",
      defaultLocale: "en",
    },
    {
      domain: "bitlog.vercel.app",
      defaultLocale: "en",
    },
  ],
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

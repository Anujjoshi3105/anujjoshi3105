import { Metadata } from "next";
import { pages } from "@/lib/config";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

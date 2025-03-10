import { Metadata } from "next";
import { pages } from "@/lib/config";

export const metadata: Metadata = {
  title: pages.project.title,
  description: pages.project.description,
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

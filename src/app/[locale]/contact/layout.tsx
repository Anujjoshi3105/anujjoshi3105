import { Metadata } from "next";
import { pages } from "@/lib/config";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

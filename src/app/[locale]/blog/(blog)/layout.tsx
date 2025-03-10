import { pages } from "@/lib/config";
import { PageTemplate } from "@/components/Template";
import { SearchInput } from "@/components/search-input";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ q?: string }>;
}) {
  const { q } = await params;
  if (!q)
    return { title: pages.blog.title, description: pages.blog.description };
  return {
    title: q,
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("blog");
  return (
    <>
      <PageTemplate title={t("title")} subtitle={t("subtitle")} />
      <div className="py-8 container mx-auto px-4 space-y-8">
        <SearchInput placeholder={t("search")} className="max-w-3xl" />
        {children}
      </div>
    </>
  );
}

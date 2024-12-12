import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/Template";
import BlogContent from "@/components/blog/BlogContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { getBlogById, getAllBlogIds } from "@/action/blog";
/*
export async function generateStaticParams() {
  const blogIds = await getAllBlogIds();
  return blogIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);
  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog page you are looking for does not exist",
    };
  }
  return {
    title: blog.title,
    description: blog.description,
    images: [blog.img],
  };
}
*/
export default async function Page({ params }: { params: { id: string } }) {
  const blogData: Blog = JSON.parse(
    JSON.stringify(await getBlogById(params.id))
  );
  if (!blogData) notFound();

  return (
    <>
      <PageTemplate title={blogData.title} subtitle={""}>
        <div className="flex flex-wrap gap-1 mt-2">
          {blogData.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </PageTemplate>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto py-10">
        <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
          <BlogSidebar blog={blogData} />
        </Suspense>
        <div className="lg:col-span-3 space-y-8">
          <Suspense
            fallback={
              <Skeleton className="w-full h-[400px] flex items-center justify-center">
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-theme" />
              </Skeleton>
            }>
            <BlogContent blog={blogData} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data";
import { PageTemplate } from "@/components/Template";
import ProjectContent from "@/components/project/ProjectContent";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === params.id);
  if (!project) notFound();

  return (
    <>
      <PageTemplate title={project.title} subtitle={project.topic} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto py-10">
        <div className="lg:col-span-3 space-y-8">
          <Suspense
            fallback={
              <Skeleton className="w-full h-[400px] flex items-center justify-center">
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-theme" />
              </Skeleton>
            }>
            <ProjectContent project={project} />
          </Suspense>
        </div>
        <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
          <ProjectSidebar project={project} />
        </Suspense>
      </div>
    </>
  );
}

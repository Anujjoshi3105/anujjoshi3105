import { Suspense } from "react";
import { PageTemplate } from "@/components/Template";
import ProjectContent from "@/components/project/ProjectContent";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { getTranslations } from "next-intl/server";
import NotFound from "../../[...rest]/page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTranslations("project");
  const projects: Project[] = (await t).raw("entries");

  const projectData = projects.find((project) => project._id === id);
  if (!projectData) return <NotFound />;

  return (
    <>
      <PageTemplate title={projectData.title} subtitle={projectData.type} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto py-10">
        <Suspense
          fallback={
            <Skeleton className="w-full h-[400px] flex items-center justify-center" />
          }>
          <ProjectSidebar project={projectData} />
        </Suspense>
        <div className="lg:col-span-3 space-y-8">
          <Suspense
            fallback={
              <Skeleton className="w-full h-[400px] flex items-center justify-center">
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-theme" />
              </Skeleton>
            }>
            <ProjectContent project={projectData} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

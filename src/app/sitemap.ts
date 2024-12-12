import { getAllBlogs } from "@/action/blog";
import { getAllProjects } from "@/action/project";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://anujjoshi.netlify.app/";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}about/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}project/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}blog/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}contact/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ];

  const [allBlogs, allProjects] = await Promise.all([
    getAllBlogs(),
    getAllProjects(),
  ]);

  const blogPostUrls = allBlogs.map((blog) => ({
    url: `${baseUrl}blog/${blog._id}`,
    lastModified: blog.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const projectPostUrls = allProjects.map((project) => ({
    url: `${baseUrl}project/${project._id}`,
    lastModified: project.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPostUrls, ...projectPostUrls];
}

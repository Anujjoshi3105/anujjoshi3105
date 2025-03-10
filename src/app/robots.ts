import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://anujjoshi.netlify.app";
  return {
    rules: {
      userAgent: "*",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from "next";
import { getCategories } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tools.addidev.me";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  const categories = getCategories();
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...categoryRoutes];
}

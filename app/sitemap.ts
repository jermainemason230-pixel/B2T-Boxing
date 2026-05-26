import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, changeFreq: "weekly" },
    { path: "/programs", priority: 0.9, changeFreq: "monthly" },
    { path: "/coaches", priority: 0.8, changeFreq: "monthly" },
    { path: "/pricing", priority: 0.8, changeFreq: "monthly" },
    { path: "/contact", priority: 0.9, changeFreq: "monthly" },
    { path: "/waiver", priority: 0.5, changeFreq: "yearly" },
    { path: "/pay", priority: 0.6, changeFreq: "yearly" },
  ] as const;

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }));
}

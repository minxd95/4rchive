import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(["slug"]);

  return [
    {
      url: "https://www.minseok.life",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.minseok.life/search",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://www.minseok.life/tags",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...posts.map(
      (
        post
      ): {
        url: string;
        lastModified: Date;
        changeFrequency: "daily";
        priority: number;
      } => ({
        url: `https://www.minseok.life/posts/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      })
    ),
  ];
}

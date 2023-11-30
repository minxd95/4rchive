import { SearchPostsTemplate } from "@/components";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4rchive - Minseok's tech blog2",
  description: "Generated by create next app",
};

export default function Page() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "author",
    "date",
    "coverImage",
    "content",
    "excerpt",
  ]);

  return <SearchPostsTemplate allPosts={allPosts} />;
}

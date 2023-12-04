import { AnimatedPage, SearchPageTemplate } from "@/components";
import { getAllPosts } from "@/lib/api";

export default function Page() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "author",
    "date",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return (
    <AnimatedPage>
      <SearchPageTemplate allPosts={allPosts} />
    </AnimatedPage>
  );
}

import { AnimatedPage, TagsPageTemplate } from "@/components";
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

  const tagCounts: { [key: string]: number } = {};

  allPosts.forEach((post) =>
    post.tags?.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag] += 1;
      } else {
        tagCounts[tag] = 1;
      }
    })
  );

  const allTags = Object.entries(tagCounts);

  return (
    <AnimatedPage>
      <TagsPageTemplate allPosts={allPosts} allTags={allTags} />
    </AnimatedPage>
  );
}

import { PostList, Profile, AnimatedPage, TagList } from "@/components";
import { getAllPosts } from "@/lib/api";

export default async function Home() {
  const posts = getAllPosts([
    "slug",
    "title",
    "author",
    "date",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  const tagCounts: { [key: string]: number } = {};

  posts.forEach((post) =>
    post.tags?.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag] += 1;
      } else {
        tagCounts[tag] = 1;
      }
    })
  );

  const tags = Object.entries(tagCounts);

  return (
    <AnimatedPage>
      <div className="max-w-[50rem] mx-auto px-4 pb-12 sm:pb-36">
        <div className="mt-4 sm:mt-12 flex justify-center sm:justify-start">
          <Profile />
        </div>
        <div className="relative">
          <div className="absolute -left-[12.25rem] top-12 hidden xl:block">
            <TagList tags={tags} />
          </div>
          <div className="mt-[2.5rem] sm:mt-[3rem]">
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

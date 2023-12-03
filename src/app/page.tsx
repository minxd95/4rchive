import {
  RecentPostList,
  PageTitleText,
  Profile,
  AnimatedPage,
  TagList,
} from "@/components";
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
        <div className="mt-[2rem] sm:mt-[4.5rem]">
          <PageTitleText title="Welcome to 4rchive :)" />
        </div>
        <div className="mt-[3rem] flex justify-center">
          <Profile />
        </div>
        <div className="relative">
          <div className=" absolute -right-[12.25rem] top-12">
            <TagList tags={tags} />
          </div>
          <RecentPostList posts={posts} />
        </div>
      </div>
    </AnimatedPage>
  );
}

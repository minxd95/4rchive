import {
  RecentPostList,
  PageTitleText,
  Profile,
  AnimatedPage,
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
  ]);

  return (
    <AnimatedPage>
      <div className="max-w-[50rem] mx-auto px-4">
        <div className="mt-[2rem] sm:mt-[4.5rem]">
          <PageTitleText title="Welcome to 4rchive :)" />
        </div>
        <div className="mt-[3rem]">
          <Profile />
        </div>
        <RecentPostList posts={posts} />
      </div>
    </AnimatedPage>
  );
}

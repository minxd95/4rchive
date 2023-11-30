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
      <div className="max-w-[58.25rem] mx-auto px-4">
        <div className="mt-[2rem] sm:mt-[4.5rem]">
          <PageTitleText
            title="Welcome to 4rchive :)"
            subTitle="Minseok’s Tech Blog"
          />
        </div>
        <RecentPostList posts={posts} />
        <div className="flex justify-center mt-20 mb-0 sm:mt-20 sm:mb-20">
          <Profile />
        </div>
      </div>
    </AnimatedPage>
  );
}

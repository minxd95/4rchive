import { RecentPostList, PageTitleText } from "@/components";
import { getAllPosts } from "@/lib/api";

export default async function Home() {
  const posts = getAllPosts(["slug", "title", "date", "coverImage", "excerpt"]);

  return (
    <div className="max-w-[58.25rem] mx-auto px-4">
      <div className="mt-[2rem] sm:mt-[4.5rem]">
        <PageTitleText
          title="Welcome to 4rchive :)"
          subTitle="Minseok’s Tech Blog"
        />
      </div>
      <RecentPostList posts={posts} />
    </div>
  );
}

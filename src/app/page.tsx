import { RecentPostList, WelcomeText } from "@/components";
import { getAllPosts } from "@/lib/api";

export default async function Home() {
  const posts = getAllPosts(["slug", "title", "date", "coverImage"]);

  return (
    <div className="max-w-[58.25rem] mx-auto px-4">
      <div className="mt-[4.5rem]">
        <WelcomeText />
      </div>
      <RecentPostList posts={posts} />
    </div>
  );
}

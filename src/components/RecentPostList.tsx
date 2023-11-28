"use client";

import { ShowMoreButton, PostItem } from "@/components";
import { useWindowSize } from "@/hooks";

interface RecentPostListProps {
  posts: {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
  }[];
}

export default function RecentPostList({ posts }: RecentPostListProps) {
  const windowSize = useWindowSize();

  if (!posts.length) return null;
  if (windowSize.width && windowSize.width < 640) {
    return (
      <div>
        <div className="mt-[4.5rem] flex flex-col gap-y-12">
          {posts.map((post) => (
            <PostItem key={post.slug} type="mobile" post={post} />
          ))}
        </div>
        <div className="flex justify-end mt-[2.25rem]">
          <ShowMoreButton text="Show More" onClick={() => alert(123)} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-[6.25rem]">
        <PostItem type="large" post={posts[0]} />
      </div>
      <div className="mt-[4.5rem] flex justify-between flex-wrap gap-y-12">
        {posts.slice(1).map((post) => (
          <PostItem key={post.slug} type="small" post={post} />
        ))}
      </div>
      <div className="flex justify-end mt-[2.25rem]">
        <ShowMoreButton text="Show More" onClick={() => alert(123)} />
      </div>
    </div>
  );
}

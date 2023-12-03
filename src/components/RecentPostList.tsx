"use client";

import { PostItem } from "@/components";
import { TPostItem } from "@/types";

interface RecentPostListProps {
  posts: TPostItem[];
}

export default function RecentPostList({ posts }: RecentPostListProps) {
  return (
    <div className="mt-[3rem] flex flex-col gap-y-12">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}

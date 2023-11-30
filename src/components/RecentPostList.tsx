"use client";

import { ShowMoreButton, PostItem } from "@/components";
import { MOBILE_MAX } from "@/constants";
import { useWindowSize } from "@/hooks";
import { TPostItem } from "@/types";
import { useState } from "react";

interface RecentPostListProps {
  posts: TPostItem[];
}

export default function RecentPostList({ posts }: RecentPostListProps) {
  const windowSize = useWindowSize();
  const [index, setIndex] = useState(0);

  if (!posts.length) return null;

  // const shownItemCount = 5 + index * 4;
  const shownItemCount = 4 + index * 4;

  if (windowSize.width && windowSize.width < MOBILE_MAX) {
    return (
      <div>
        <div className="mt-12 flex flex-col gap-y-12">
          {posts.slice(0, shownItemCount).map((post) => (
            <PostItem key={post.slug} type="mobile" post={post} />
          ))}
        </div>
        <div className="flex justify-end mt-[2.25rem]">
          {shownItemCount < posts.length && (
            <ShowMoreButton onClick={() => setIndex((prev) => prev + 1)} />
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <div className="mt-[6.25rem]">
        <PostItem type="large" post={posts[0]} />
      </div> */}
      <div className="mt-[4.5rem] flex justify-between flex-wrap gap-y-12">
        {/* {posts.slice(1, shownItemCount).map((post) => (
          <PostItem key={post.slug} type="small" post={post} />
        ))} */}
        {posts.slice(0, shownItemCount).map((post) => (
          <PostItem key={post.slug} type="small" post={post} />
        ))}
      </div>
      <div className="flex justify-end mt-[2.25rem]">
        {shownItemCount < posts.length && (
          <ShowMoreButton onClick={() => setIndex((prev) => prev + 1)} />
        )}
      </div>
    </div>
  );
}

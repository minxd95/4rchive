"use client";

import { PostItem } from "@/components";
import { TPostItem } from "@/types";
import { useState, useRef, useEffect } from "react";

interface RecentPostListProps {
  posts: TPostItem[];
}

export default function PostList({ posts }: RecentPostListProps) {
  const [displayedPostCount, setDisplayedPostCount] = useState(2);

  const lastPostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (posts.length <= displayedPostCount) return;
        setDisplayedPostCount((prev) => prev + 2);
      }
    });
    if (lastPostRef.current) {
      observer.observe(lastPostRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [displayedPostCount, posts]);

  useEffect(() => {
    setDisplayedPostCount(2);
  }, [posts]);

  return (
    <div className="mt-[2.5rem] sm:mt-[4.5rem] flex flex-col gap-y-12">
      {posts.slice(0, displayedPostCount).map((post, idx, origin) => {
        if (origin.length === idx + 1) {
          return (
            <div key={post.slug} ref={lastPostRef}>
              <PostItem post={post} />
            </div>
          );
        }
        return <PostItem key={post.slug} post={post} />;
      })}
    </div>
  );
}

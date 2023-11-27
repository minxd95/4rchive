"use client";

import { ShowMoreButton, PostItem } from "@/components";
import { useWindowSize } from "@/hooks";

interface RecentPostListProps {
  posts?: {
    title: string;
    date: string;
    contents: string;
  };
}

export default function RecentPostList({ posts }: RecentPostListProps) {
  const windowSize = useWindowSize();

  if (windowSize.width && windowSize.width < 640) {
    return (
      <div>
        <div className="mt-[4.5rem] flex flex-col gap-y-12">
          <PostItem type="mobile" />
          <PostItem type="mobile" />
          <PostItem type="mobile" />
          <PostItem type="mobile" />
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
        <PostItem type="large" />
      </div>
      <div className="mt-[4.5rem] flex justify-between flex-wrap gap-y-12">
        <PostItem type="small" />
        <PostItem type="small" />
        <PostItem type="small" />
        <PostItem type="small" />
      </div>
      <div className="flex justify-end mt-[2.25rem]">
        <ShowMoreButton text="Show More" onClick={() => alert(123)} />
      </div>
    </div>
  );
}

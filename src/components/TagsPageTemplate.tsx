"use client";

import { PageTitleText, PostList, Tag } from "@/components";
import { TSearchPostItem } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface TagsPageTemplateProps {
  allPosts: TSearchPostItem[];
  allTags: [string, number][];
}
export default function TagsPageTemplate({
  allPosts,
  allTags,
}: TagsPageTemplateProps) {
  const params = useSearchParams();
  const filter = params.get("filter") || "";

  const router = useRouter();

  const [filteredList, setFilteredList] =
    useState<TagsPageTemplateProps["allPosts"]>(allPosts);

  useEffect(() => {
    setFilteredList(() => {
      if (!filter) return allPosts;
      return allPosts.filter((post) => post.tags?.includes(filter));
    });
  }, [filter, allPosts]);

  return (
    <div className="max-w-[48rem] mx-auto px-4 pb-12 sm:pb-36">
      <div className="mt-[2rem] sm:mt-[4.5rem]">
        <PageTitleText
          title="Tags"
          subTitle={
            filter
              ? `There are ${filteredList.length} posts tagged with '${filter}'.`
              : `There are a total of ${allTags.length} tags.`
          }
        />
      </div>
      <div className="mt-[2rem]">
        <div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-[0.625rem]">
            {allTags.map((tag) => (
              <button
                key={tag[0]}
                onClick={() => {
                  if (filter === tag[0]) {
                    router.push("?filter=");
                    return;
                  }
                  router.push(`?filter=${tag[0]}`);
                }}
              >
                <Tag
                  text={`${tag[0]} (${tag[1]})`}
                  selected={filter === tag[0]}
                />
              </button>
            ))}
          </div>
          <div className="mt-[2.5rem] sm:mt-[4.5rem]">
            <PostList posts={filteredList} />
          </div>
        </div>
      </div>
    </div>
  );
}

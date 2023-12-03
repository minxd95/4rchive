"use client";

import { PageTitleText, PostItem, Tag } from "@/components";
import { TSearchPostItem } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface TagsPageTemplateProps {
  allPosts: TSearchPostItem[];
  allTags: string[];
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
                key={tag}
                onClick={() => {
                  if (filter === tag) {
                    router.push("?filter=");
                    return;
                  }
                  router.push(`?filter=${tag}`);
                }}
              >
                <Tag text={tag} selected={filter === tag} />
              </button>
            ))}
          </div>
          <div className="flex justify-between flex-wrap gap-y-12 mt-[2.5rem] sm:mt-[4.5rem]">
            {filteredList.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
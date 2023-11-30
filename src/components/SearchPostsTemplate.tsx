"use client";

import {
  PageTitleText,
  PostItem,
  SearchBar,
  ShowMoreButton,
} from "@/components";
import { MOBILE_MAX } from "@/constants";
import { useWindowSize } from "@/hooks";
import { TSearchPostItem } from "@/types";
import { useEffect, useState } from "react";

interface SearchPostsTemplateProps {
  allPosts: TSearchPostItem[];
}
export default function SearchPostsTemplate({
  allPosts,
}: SearchPostsTemplateProps) {
  const windowSize = useWindowSize();
  const [filter, setFilter] = useState<string>("");
  const [filteredList, setFilteredList] =
    useState<SearchPostsTemplateProps["allPosts"]>(allPosts);
  const [index, setIndex] = useState(0);

  const shownItemCount = 4 + index * 4;

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredList(
        allPosts.filter((post) => {
          const lowerCaseFilter = filter.toLowerCase();
          const lowerCaseBody = post.content.toLowerCase() || "";
          const lowerCaseTitle = post.title.toLowerCase() || "";
          if (lowerCaseTitle.includes(lowerCaseFilter)) return true;
          else if (lowerCaseBody.includes(lowerCaseFilter)) return true;
          else return false;
        })
      );
    }, 250);

    return () => clearTimeout(debounce);
  }, [filter, allPosts]);

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  const isMobile = windowSize.width && windowSize.width < MOBILE_MAX;

  return (
    <div className="max-w-[58.25rem] mx-auto px-4">
      <div className="mt-[2rem] sm:mt-[4.5rem]">
        <PageTitleText
          title="Posts"
          subTitle={
            filter
              ? `Search results for '${filter}' show ${filteredList.length} posts.`
              : `There are a total of ${allPosts.length} posts.`
          }
        />
      </div>
      <div className="mt-[1.5rem]">
        <div>
          <SearchBar
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          <div className="flex justify-between flex-wrap gap-y-12 mt-[2.5rem] sm:mt-[4.5rem]">
            {filteredList.slice(0, shownItemCount).map((post) => (
              <PostItem
                key={post.slug}
                type={isMobile ? "mobile" : "small"}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[2.25rem]">
        {shownItemCount < filteredList.length && (
          <ShowMoreButton onClick={() => setIndex((prev) => prev + 1)} />
        )}
      </div>
    </div>
  );
}

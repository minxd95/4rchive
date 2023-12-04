"use client";

import { PageTitleText, PostList, SearchBar } from "@/components";
import { TSearchPostItem } from "@/types";
import { useEffect, useState } from "react";

interface SearchPageTemplateProps {
  allPosts: TSearchPostItem[];
}
export default function SearchPageTemplate({
  allPosts,
}: SearchPageTemplateProps) {
  const [filter, setFilter] = useState<string>("");
  const [filteredList, setFilteredList] =
    useState<SearchPageTemplateProps["allPosts"]>(allPosts);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredList(
        allPosts.filter((post) => {
          const lowerCaseFilter = filter.toLowerCase();
          const lowerCaseTitle = post.title.toLowerCase() || "";
          // const lowerCaseBody = post.content.toLowerCase() || "";
          if (lowerCaseTitle.includes(lowerCaseFilter)) return true;
          // else if (lowerCaseBody.includes(lowerCaseFilter)) return true;
          else return false;
        })
      );
    }, 250);

    return () => clearTimeout(debounce);
  }, [filter, allPosts]);

  return (
    <div className="max-w-[48rem] mx-auto px-4 pb-12 sm:pb-36">
      <div className="mt-[2rem] sm:mt-[4.5rem]">
        <PageTitleText
          title="Search"
          subTitle={
            filter
              ? `Search results for '${filter}' show ${filteredList.length} posts.`
              : `There are a total of ${allPosts.length} posts.`
          }
        />
      </div>
      <div className="mt-[2rem]">
        <div>
          <SearchBar
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          <div className="mt-[2.5rem] sm:mt-[4.5rem]">
            <PostList posts={filteredList} />
          </div>
        </div>
      </div>
    </div>
  );
}

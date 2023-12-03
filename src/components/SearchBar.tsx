"use client";

import { SVGIcon } from "@/components";
import { ChangeEventHandler } from "react";

interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
export default function SearchBar({ onChange, value }: SearchBarProps) {
  return (
    <div className="flex px-2.5 items-center mx-auto max-w-[25.625rem] h-9 sm:h-10 rounded-[1.24rem] border border-slate-600 dark:border-slate-200">
      <div className="mr-5">
        <SVGIcon.search width="24" height="24" />
      </div>
      <input
        type="text"
        placeholder="Search by post title"
        onChange={onChange}
        value={value}
        className="flex-1 focus:outline-none placeholder:font-[300] placeholder:text-gray-300 dark:placeholder:text-gray-500 bg-transparent"
      />
    </div>
  );
}

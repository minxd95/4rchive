"use client";

import images from "@/assets/images";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";

interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
export default function SearchBar({ onChange, value }: SearchBarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex px-2.5 items-center mx-auto max-w-[25.625rem] h-9 sm:h-10 rounded-[1.24rem] border border-black dark:border-white">
      <Image
        src={
          mounted && resolvedTheme === "light"
            ? images.searchBlack
            : images.searchWhite
        }
        alt="search icon"
        width={24}
        height={24}
        className="mr-5"
      />
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
        className="flex-1 focus:outline-none placeholder:font-[300] placeholder:text-gray-300 dark:placeholder:text-gray-600 bg-transparent"
      />
    </div>
  );
}

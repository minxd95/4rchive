"use client";

import { SVGIcon } from "@/components";
import { useMenu } from "@/hooks";
import Link from "next/link";

export default function SearchButton() {
  const { hideMenu } = useMenu();

  return (
    <Link
      href="/posts"
      onClick={() => hideMenu()}
      className="w-8 h-8 rounded-full border border-black dark:border-white flex justify-center items-center transition-[width,height] duration-200"
    >
      <SVGIcon.search />
    </Link>
  );
}

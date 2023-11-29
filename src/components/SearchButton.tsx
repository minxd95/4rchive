"use client";

import images from "@/assets/images";
import { useMenu } from "@/hooks";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchButton() {
  const { hideMenu } = useMenu();

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Link
      href="/posts"
      onClick={() => hideMenu()}
      className="w-8 h-8 rounded-full border border-black dark:border-white flex justify-center items-center transition-[width,height] duration-200"
    >
      <Image
        src={
          resolvedTheme === "light" ? images.searchBlack : images.searchWhite
        }
        alt="search icon"
        className="w-5 h-5"
      />
    </Link>
  );
}

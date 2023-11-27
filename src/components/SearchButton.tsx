"use client";

import images from "@/assets/images";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchButton() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Link
      href="/search"
      className="w-8 h-8 rounded-full border border-black dark:border-white flex justify-center items-center"
    >
      <Image
        src={
          resolvedTheme === "light" ? images.searchBlack : images.searchWhite
        }
        alt="search icon"
        width={20}
        height={20}
        className="dark:fill-white"
      />
    </Link>
  );
}

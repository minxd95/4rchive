"use client";

import images from "@/assets/images";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="relative w-[60px] h-[32px] rounded-[16px] border border-black dark:border-white flex items-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={images.moon}
        alt="moon icon"
        width={16}
        height={16}
        className="absolute left-2"
      />
      <Image
        src={images.sun}
        alt="sun icon"
        width={20}
        height={20}
        className="absolute right-[6px]"
      />
      <div
        className={`w-6 h-6 rounded-[12px] bg-black dark:bg-white absolute transition-[left,background] duration-200 ${
          resolvedTheme === "light" ? "left-1" : "left-8"
        }`}
      />
    </button>
  );
}

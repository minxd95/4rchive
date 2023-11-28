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
      className="relative w-[2.8125rem] h-6 sm:w-[3.75rem] sm:h-[2rem] rounded-[1rem] border border-black dark:border-white flex items-center transition-[width,height] duration-200"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={images.moon}
        alt="moon icon"
        className="absolute left-[0.375rem] sm:left-2 w-3 h-3 sm:w-4 sm:h-4 transition-[width,height] duration-200"
      />
      <Image
        src={images.sun}
        alt="sun icon"
        className="absolute right-1 sm:right-[0.375rem] w-[0.9375rem] h-[0.9375rem] sm:w-5 sm:h-5 transition-[width,height] duration-200"
      />
      <div
        className={`w-[1.125rem] h-[1.125rem] sm:w-6 sm:h-6 rounded-full bg-black dark:bg-white absolute transition-[width,height,left,background] duration-200 left-[0.125rem] sm:left-[0.1875rem] dark:left-[1.4375rem] dark:sm:left-[1.9375rem]`}
      />
    </button>
  );
}

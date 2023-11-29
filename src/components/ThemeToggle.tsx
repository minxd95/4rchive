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
      className="relative w-[3.75rem] h-[2rem] rounded-[1rem] border border-black dark:border-white flex items-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={images.moon}
        alt="moon icon"
        className="absolute left-2 w-4 h-4"
      />
      <Image
        src={images.sun}
        alt="sun icon"
        className="absolute right-[0.375rem] w-5 h-5"
      />
      <div
        className={`w-6 h-6 rounded-full bg-black dark:bg-white absolute transition-[left,background] duration-200 left-[0.1875rem] dark:left-[1.9375rem]`}
      />
    </button>
  );
}

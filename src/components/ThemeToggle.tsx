"use client";

import images from "@/assets/images";
import styles from "./ThemeToggle.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  return (
    <button
      className="relative w-[60px] h-[32px] rounded-[16px] border border-black flex items-center"
      onClick={() =>
        setTheme((prev) => {
          if (prev === "light") return "dark";
          return "light";
        })
      }
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
        className={`w-6 h-6 rounded-[12px] bg-black absolute transition-[left] duration-200 ${
          theme === "light" ? "left-1" : "left-8"
        }`}
      />
    </button>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SVGIcon } from "@/components";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-[3.75rem] h-[2rem]" />;
  }

  return (
    <button
      className="relative w-[3.75rem] h-[2rem] rounded-[1rem] border border-slate-600 dark:border-slate-200 flex items-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <div className="absolute left-2 w-4 h-4">
        <SVGIcon.moon />
      </div>
      <div className="absolute right-[0.375rem] w-5 h-5">
        <SVGIcon.sun />
      </div>
      <div
        className={`w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-50 absolute transition-[left,background] duration-200 left-[0.1875rem] dark:left-[1.9375rem]`}
      />
    </button>
  );
}

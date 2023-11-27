"use client";

import { useTheme } from "next-themes";
import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ShowMoreButton({ text, onClick }: ButtonProps) {
  const { resolvedTheme } = useTheme();

  return (
    <button
      className={`w-full sm:w-40 h-[2.25rem] rounded-[1.25rem] border ${
        resolvedTheme === "light" ? "border-black" : "border-white"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

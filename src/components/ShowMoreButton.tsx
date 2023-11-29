"use client";

import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ShowMoreButton({ onClick }: ButtonProps) {
  return (
    <button
      className={`w-full sm:w-40 h-[2.25rem] rounded-[1.25rem] border border-black dark:border-white`}
      onClick={onClick}
    >
      Show More
    </button>
  );
}

"use client";

import { SVGIcon } from "@/components";
import { useMenu } from "@/hooks";

export default function MenuButton() {
  const { toggleMenu } = useMenu();

  return (
    <button onClick={() => toggleMenu()} className="w-6 h-6 sm:hidden ml-1">
      <SVGIcon.menu />
    </button>
  );
}

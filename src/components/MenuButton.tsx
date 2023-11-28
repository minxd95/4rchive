"use client";

import images from "@/assets/images";
import { IsShowMenuState } from "@/recoil/atoms";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function MenuButton() {
  const { resolvedTheme } = useTheme();

  const setIsShowMenu = useSetRecoilState(IsShowMenuState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setIsShowMenu((prev) => !prev)}
      className="w-6 h-6 relative block sm:hidden ml-1"
    >
      <Image
        src={resolvedTheme === "light" ? images.menuBlack : images.menuWhite}
        alt="menu"
        fill
      />
    </button>
  );
}

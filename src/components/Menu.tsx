"use client";

import images from "@/assets/images";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Menu() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-6 h-6 relative block sm:hidden ml-1">
      <Image
        src={resolvedTheme === "light" ? images.menuBlack : images.menuWhite}
        alt="menu"
        fill
      />
    </div>
  );
}

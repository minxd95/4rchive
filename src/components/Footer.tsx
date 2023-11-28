"use client";

import images from "@/assets/images";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="absolute w-full bottom-0 mb-[3.125rem] flex flex-col items-center mt-[8.75rem]">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative w-[7.5rem] h-[7.5rem]">
          <Image
            src={images.me}
            alt="me"
            fill
            objectFit="cover"
            placeholder="blur"
            className="rounded-full"
          />
        </div>
        <div className="ml-0 flex flex-col items-center sm:block sm:ml-5">
          <p className="font-bold mt-2 sm:mt-0">서민석(Minseok Seo)</p>
          <p className="leading-6 mt-[1.0625rem] hidden sm:block">
            더 좋은 개발을 위한 끊임없는 탐구를 중요하게 생각합니다.
            <br />
            함께 일하고 싶은 사람이 되기 위해 항상 노력하고 있습니다.
          </p>
          <div className="flex gap-3 mt-[1.25rem] sm:mt-2">
            <Image
              src={
                resolvedTheme === "light"
                  ? images.githubBlack
                  : images.githubWhite
              }
              alt="github"
              width={24}
              height={24}
            />
            <Image
              src={
                resolvedTheme === "light"
                  ? images.instaBlack
                  : images.instaWhite
              }
              alt="github"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <p className="text-xs mt-[4.5rem]">
        © 2023. Minseok Seo all rights reserved.
      </p>
    </footer>
  );
}

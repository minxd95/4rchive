"use client";

import Image from "next/image";
import images from "@/assets/images";
import { SVGIcon } from "@/components";

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <Image
        src={images.me}
        alt="me"
        placeholder="blur"
        className="w-[7.5rem] h-[7.5rem] rounded-full object-cover"
      />
      <div className="ml-0 flex flex-col items-center sm:block sm:ml-5">
        <p className="font-bold mt-2 sm:mt-0">서민석(Minseok Seo)</p>
        <p className="leading-6 mt-[1.0625rem] hidden sm:block">
          더 좋은 개발을 위한 끊임없는 탐구를 중요하게 생각합니다.
          <br />
          함께 일하고 싶은 사람이 되기 위해 항상 노력하고 있습니다.
        </p>
        <div className="flex gap-3 mt-[1.25rem] sm:mt-2">
          <SVGIcon.github />
          <SVGIcon.instagram />
        </div>
      </div>
    </div>
  );
}

"use client";

import { SVGIcon } from "@/components";
import Link from "next/link";
import profileAnimation from "@/assets/lottie/profileAnimation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="relative w-44 h-44 mr-6">
        <Lottie
          loop
          animationData={profileAnimation}
          play
          className="absolute w-full h-full"
        />
      </div>
      <div className="ml-0 flex flex-col items-center sm:block sm:ml-5">
        <p className="font-bold mt-2 sm:mt-0">서민석(Minseok Seo)</p>
        <p className="leading-7 mt-[1.0625rem] hidden sm:block">
          더 좋은 개발을 위한 끊임없는 탐구를 중요하게 생각합니다.
          <br />
          함께 일하고 싶은 사람이 되기 위해 항상 노력하고 있습니다.
        </p>
        <div className="flex gap-3 mt-[1.25rem] sm:mt-2">
          <Link href="https://github.com/minxd95" target="_blank">
            <SVGIcon.github />
          </Link>
          <Link href="https://www.instagram.com/smin_stone_/" target="_blank">
            <SVGIcon.instagram />
          </Link>
        </div>
      </div>
    </div>
  );
}

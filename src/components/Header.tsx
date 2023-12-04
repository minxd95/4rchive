"use client";

import { inter } from "@/assets/fonts";
import Link from "next/link";
import { SVGIcon, ThemeToggle } from "@/components";
import { useMenu } from "@/hooks";
import { useEffect, useState } from "react";

const SCROLL_THROTTLE = 50;

export default function Header() {
  // todo: 메뉴관련 로직 제거
  const { hideMenu } = useMenu();

  const [scrollY, setScrollY] = useState<number>(0);
  const [isHideHeader, setIsHideHeader] = useState(false);
  const [throttleTimeout, setThrottleTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const scrollHandler = () => {
      if (throttleTimeout) return;

      const currentScrollY = window.scrollY;

      if (scrollY - currentScrollY > 5 || currentScrollY < 200) {
        setIsHideHeader(false);
      } else if (scrollY - currentScrollY < -5) {
        setIsHideHeader(true);
      }

      setScrollY(currentScrollY);

      setThrottleTimeout(
        setTimeout(() => {
          setThrottleTimeout(null);
        }, SCROLL_THROTTLE) // 200ms 간격으로 쓰로틀링 적용
      );
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [scrollY, throttleTimeout]);

  return (
    <header
      className={`border-b-2 border-slate-200 dark:border-slate-700 bg-inherit fixed h-[3.75rem] sm:h-[4.5rem] w-screen px-4 ${
        isHideHeader ? "-top-[3.75rem] sm:-top-[4.5rem]" : "top-0"
      } transition-[height,top] duration-200 z-10`}
    >
      <div className="mx-auto max-w-7xl h-full flex justify-between items-center">
        <div className="flex gap-9 items-baseline">
          <Link href="/" onClick={() => hideMenu()}>
            <span
              className={`${inter.className} text-[1.25rem] sm:text-[1.75rem] font-bold !italic transition-[font-size] duration-200`}
            >
              4rchive :)
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <CircleButton href="/tags" icon={<SVGIcon.tag />} />
          <CircleButton href="/search" icon={<SVGIcon.search />} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function CircleButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  const { hideMenu } = useMenu();

  return (
    <Link
      href={href}
      onClick={() => hideMenu()}
      className="w-8 h-8 rounded-full border border-slate-600 dark:border-slate-200 flex justify-center items-center transition-[width,height] duration-200"
    >
      {icon}
    </Link>
  );
}

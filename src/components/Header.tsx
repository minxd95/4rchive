"use client";

import { inter } from "@/assets/fonts";
import Link from "next/link";
import { MenuButton, ThemeToggle } from "@/components";
import SearchButton from "./SearchButton";
import { useMenu } from "@/hooks";

export default function Header() {
  const { hideMenu } = useMenu();

  return (
    <header className="border-b-2 border-gray-100 dark:border-gray-800 bg-inherit fixed h-[3.75rem] sm:h-[4.5rem] w-full flex justify-between items-center px-4 sm:px-5 transition-[height] duration-200 z-10">
      <div className="flex gap-9 items-baseline">
        <Link href="/" onClick={() => hideMenu()}>
          <span
            className={`${inter.className} text-[1.25rem] sm:text-[1.75rem] font-bold !italic transition-[font-size] duration-200`}
          >
            4rchive :)
          </span>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex gap-9">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link
                href="https://minxd.notion.site/624b998aab054c15a7da87527d4a7a80?pvs=4"
                target="_blank"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <SearchButton />
        <ThemeToggle />
        <MenuButton />
      </div>
    </header>
  );
}

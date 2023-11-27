"use server";

import { inter } from "@/assets/fonts";
import Link from "next/link";
import { ThemeToggle } from "@/components";
import SearchButton from "./SearchButton";

export default async function Header() {
  return (
    <div className="h-[72px] w-[100vw] flex justify-between items-center px-5">
      <div className="flex gap-9">
        <Link href="/">
          <span className={`${inter.className} text-[28px] font-bold !italic`}>
            4rchive :)
          </span>
        </Link>
        <nav className="flex items-end -translate-y-[4px]">
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
      <div className="flex gap-3">
        <SearchButton />
        <ThemeToggle />
      </div>
    </div>
  );
}

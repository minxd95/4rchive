"use server";

import { inter } from "@/assets/fonts";
import Link from "next/link";
import images from "@/assets/images";
import Image from "next/image";
import { ThemeToggle } from "@/components";

export default async function Header() {
  return (
    <div className="h-[72px] w-[100vw] flex justify-between items-center px-5">
      <div className="flex gap-9">
        <Link href="/">
          <span className={`${inter.className} text-[28px] font-bold italic`}>
            4rchive :)
          </span>
        </Link>
        <nav className="flex items-end -translate-y-[4px]">
          <ul className="flex gap-9">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-3">
        <button className="w-8 h-8 rounded-full border border-black flex justify-center items-center">
          <Image src={images.search} alt="search icon" width={20} height={20} />
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
}

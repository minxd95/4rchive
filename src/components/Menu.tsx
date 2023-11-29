"use client";

import { useMenu } from "@/hooks";
import Link from "next/link";

const menu = [
  { text: "Home", href: "/" },
  {
    text: "Portfolio",
    href: "https://minxd.notion.site/624b998aab054c15a7da87527d4a7a80?pvs=4",
    target: "_blank",
  },
];

export default function Menu() {
  const { isShowMenu, hideMenu } = useMenu();

  if (!isShowMenu) {
    return <></>;
  }
  return (
    <div className="sm:hidden fixed top-[3.75rem] z-10 w-screen h-[calc(100vh-3.75rem)]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 bg-white dark:bg-black opacity-80 w-full h-full" />
        <div className="absolute top-0 backdrop-blur-xl flex flex-col w-full h-full">
          {menu.map((item, idx) => (
            <Link
              key={idx.toString()}
              href={item.href}
              target={item.target}
              onClick={() => hideMenu()}
              className="flex justify-center items-center h-[3.75rem] border-b-2 border-grey-100 dark:border-gray-800"
            >
              <span className="font-bold">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { IsShowMenuState } from "@/recoil/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

const menu = [
  { text: "Home", href: "/", external: false },
  {
    text: "Portfolio",
    href: "https://minxd.notion.site/624b998aab054c15a7da87527d4a7a80?pvs=4",
    external: true,
  },
];

export default function Menu() {
  const router = useRouter();

  const [isShowMenu, setIsShowMenu] = useRecoilState(IsShowMenuState);
  if (!isShowMenu) {
    return <></>;
  }

  return (
    <div className="sm:hidden fixed top-[3.75rem] z-10 w-screen h-[calc(100vh-3.75rem)]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 bg-white dark:bg-black opacity-80 w-full h-full" />
        <div className="absolute top-0 backdrop-blur-xl flex flex-col w-full h-full">
          {menu.map((item, idx) => (
            <button
              key={idx.toString()}
              onClick={() => {
                if (item.external === true) {
                  window.open(item.href, "_ blank");
                } else {
                  router.push(item.href);
                }
                setIsShowMenu(false);
              }}
              className="flex justify-center items-center h-[3.75rem] border-b-2 border-grey-100 dark:border-gray-800"
            >
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

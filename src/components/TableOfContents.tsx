"use client";

import { useTOC } from "@/hooks";
import Link from "next/link";

interface TableOfContentsProps {
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
}
export default function TableOfContents({ headings }: TableOfContentsProps) {
  const activeId = useTOC(headings.map((heading) => heading.id));

  return (
    <div>
      <span className="font-bold text-xl">Table Of Contents</span>
      <ul className="mt-4">
        {headings.map((heading, index, origin) => {
          const nextHeading = origin[index + 1];
          return (
            <li
              key={index}
              style={{
                marginLeft: `${(heading.level - 2) * 0.75}rem`,
                marginBottom:
                  nextHeading && nextHeading.level === 1 ? "0.25rem" : "0",
              }}
              className={`leading-relaxed transition-[color,transform] duration-150 ${
                heading.id === activeId
                  ? "text-gray-700 dark:text-gray-50 -translate-x-1"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            >
              <Link href={`#${heading.id}`}>{heading.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

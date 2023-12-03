import { SVGIcon } from "@/components";
import Link from "next/link";

interface TagListProps {
  tags: [string, number][];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="w-40 hidden lg:block">
      <div className="flex items-center -translate-x-0.5 gap-x-0.5">
        <SVGIcon.tag />
        <span className="text-lg font-bold">Tags</span>
      </div>
      <div className="flex flex-col mt-6 gap-y-3">
        {tags.map((tag) => (
          <Link
            key={tag[0]}
            href={`/tags?filter=${tag[0]}`}
          >{`${tag[0]} (${tag[1]})`}</Link>
        ))}
      </div>
    </div>
  );
}

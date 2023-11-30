import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { TPostItem } from "@/types";

interface PostItemProps {
  type: "large" | "small" | "mobile";
  post: TPostItem;
}
export default function PostItem({ type, post }: PostItemProps) {
  const parsedDate = format(parseISO(post.date), "yyyy. MM. dd.");

  if (type !== "mobile") {
    return (
      <Link
        href={`/posts/${post.slug}`}
        className={`flex flex-col ${type === "large" ? "w-full" : "w-[48%]"}`}
      >
        <div className={`relative aspect-[3/2] w-full`}>
          <Image
            src={post.coverImage}
            alt="loremIpsum"
            fill
            className="rounded-[1.25rem] object-cover"
            priority
            // placeholder="blur"
          />
          <div className="flex items-center p-4 absolute top-0 w-full h-full bg-black bg-opacity-50 rounded-[1.25rem] opacity-0 hover:opacity-100 transition-opacity duration-200">
            <span className="text-white">{post.excerpt}</span>
          </div>
        </div>
        <div
          className={`flex ${type === "large" ? "flex-row" : "flex-col"} ${
            type === "large" ? "justify-between" : "justify-start"
          } items-baseline mt-2`}
        >
          <div className="w-full flex justify-between">
            <span>{post.author}</span>
            <span>{parsedDate}</span>
          </div>
          <span className="font-bold text-[1.5rem] break-all">
            {post.title}
          </span>
        </div>
      </Link>
    );
  }
  return (
    <Link href={`/posts/${post.slug}`} className="flex flex-col w-full">
      <div className="relative w-full aspect-[432/284]">
        <Image
          src={post.coverImage}
          alt="loremIpsum"
          fill
          className="rounded-[1.25rem] object-cover"
          // placeholder="blur"
        />
      </div>
      <div className={`flex flex-col justify-start items-baseline mt-2`}>
        <div className="w-full flex justify-between">
          <span>{post.author}</span>
          <span>{parsedDate}</span>
        </div>
        <span className="font-bold text-[1.5rem] break-all">{post.title}</span>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

interface PostItemProps {
  type: "large" | "small" | "mobile";
  post: { slug: string; title: string; date: string; coverImage: string };
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
            objectFit="cover"
            className="rounded-[1.25rem]"
            // placeholder="blur"
          />
        </div>
        <div
          className={`flex ${type === "large" ? "flex-row" : "flex-col"} ${
            type === "large" ? "justify-between" : "justify-start"
          } items-baseline mt-1`}
        >
          <span className="font-medium text-[1.5rem]">{post.title}</span>
          <span className="font-medium">{parsedDate}</span>
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
          objectFit="cover"
          className="rounded-[1.25rem]"
          // placeholder="blur"
        />
      </div>
      <div className={`flex flex-col justify-start items-baseline mt-1`}>
        <span className="font-medium text-[1.5rem]">{post.title}</span>
        <span className="font-medium">{parsedDate}</span>
      </div>
    </Link>
  );
}

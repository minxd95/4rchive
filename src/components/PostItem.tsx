"use client";

import { format, parseISO } from "date-fns";
import { TPostItem } from "@/types";
import Image from "next/image";
import { Tag } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostItemProps {
  post: TPostItem;
}
export default function PostItem({ post }: PostItemProps) {
  const router = useRouter();

  const parsedDate = format(parseISO(post.date), "yyyy년 M월 dd일");

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col pt-12 border-t border-slate-200 dark:border-slate-700"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={post.coverImage}
          alt="cover image"
          className="rounded-3xl object-cover"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <span className="mt-2 text-[1.5rem] sm:text-[2rem] font-bold break-all">
        {post.title}
      </span>
      <div className="flex text-[0.875rem] mt-4">
        <span>{post.author}</span>
        <span className="text-slate-400">&nbsp;·&nbsp;{parsedDate}</span>
      </div>
      <p className="mt-3">{post.excerpt}</p>
      {post.tags && (
        <div className="flex mt-4 gap-x-2 gap-y-[0.625rem]">
          {post.tags.map((tag, index) => (
            <button
              key={tag}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/tags?filter=${tag}`);
              }}
            >
              <Tag key={index} text={tag} />
            </button>
          ))}
        </div>
      )}
    </Link>
  );
}

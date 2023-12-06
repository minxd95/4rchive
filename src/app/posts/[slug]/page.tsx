import { AnimatedPage, PostBody, TableOfContents, Tag } from "@/components";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import getTableOfContents from "@/lib/getTableOfContents";
import markdownToHtml from "@/lib/markdownToHtml";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "");
  const headings = getTableOfContents(content);

  return (
    <AnimatedPage>
      <div className="flex justify-center px-4 pb-12 sm:pb-36">
        <div className="flex flex-col basis-[48rem]">
          <div className="flex flex-col">
            <h1 className="mt-[2.25rem] sm:mt-[4.5rem] text-2xl sm:text-4xl sm:leading-snug font-extrabold break-all">
              {post.title}
            </h1>
            <div className="mt-2">
              <span className="font-medium">{post.author}</span>
              <span className="text-slate-400">
                &nbsp;·&nbsp;{format(new Date(post.date), "yyyy년 M월 dd일")}
              </span>
            </div>
            {post.tags && (
              <div className="flex mt-4 gap-x-2 gap-y-[0.625rem]">
                {post.tags.map((tag, index) => (
                  <Link key={tag} href={`/tags?filter=${tag}`}>
                    <Tag key={index} text={tag} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5">
            <div className="relative w-full aspect-video">
              <Image
                src={post.coverImage}
                alt="hero"
                className="rounded-[1.25rem] object-cover"
                fill
                sizes="(max-width: 50rem) 100vw, 50rem"
                priority
              />
            </div>
            <PostBody content={content} />
          </div>
        </div>
        <div className="hidden [@media(min-width:70.5rem)]:block">
          <div className="sticky w-52 ml-[7.5rem] top-[12rem]">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = getPostBySlug(slug, ["title", "excerpt", "coverImage"]);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

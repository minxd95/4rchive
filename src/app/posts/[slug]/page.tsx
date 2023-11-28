import { PostBody } from "@/components";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col max-w-[52rem] mx-auto px-4">
      <div className="flex flex-col">
        <span className="mt-[4.5rem] text-[2.25rem] font-extrabold leading-[2.75rem]">
          {post.title}
        </span>
        <span className="mt-2 font-bold">
          {format(parseISO(post.date), "yyyy. MM. dd.")}
        </span>
      </div>
      <div className="mt-5">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={post.coverImage}
            alt="hero"
            className="rounded-[1.25rem]"
            fill
            objectFit="cover"
          />
        </div>
        <PostBody content={content} />
      </div>
    </div>
  );
}

export const dynamicParams = false;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = getPostBySlug(slug, ["title", "excerpt"]);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

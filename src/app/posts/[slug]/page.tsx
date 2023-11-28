import images from "@/assets/images";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col max-w-[52rem] mx-auto px-4">
      <div className="flex flex-col">
        <span className="mt-[4.5rem] text-[2.25rem] font-extrabold leading-[2.75rem]">
          Building Responsive UIs: Best Practices and Techniques
        </span>
        <span className="mt-2 font-bold">2023. 11. 28.</span>
      </div>
      <div className="mt-5">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={images.loremIpsum}
            alt="hero"
            className="rounded-[1.25rem]"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = [
    {
      slug: "exploring-the-latest-web-dev-trends",
      title: "Exploring the Latest Web Development Trends",
      date: "2023-11-15",
      contents:
        "In this post, we delve into the latest trends in web development, including the rise of progressive web apps, the importance of responsive design, and the integration of AI-driven features.",
    },
    {
      slug: "mastering-react-hooks",
      title: "Mastering React Hooks for Efficient Coding",
      date: "2023-10-30",
      contents:
        "This article provides a comprehensive guide to using React Hooks, offering insights into useState, useEffect, and custom hooks to enhance your React applications.",
    },
    {
      slug: "the-future-of-javascript",
      title: "The Future of JavaScript: What's Next?",
      date: "2023-09-20",
      contents:
        "Exploring the future of JavaScript, this post discusses upcoming features, the evolving ecosystem, and how developers can prepare for the changes.",
    },
    {
      slug: "building-responsive-uis",
      title: "Building Responsive UIs: Best Practices and Techniques",
      date: "2023-08-05",
      contents:
        "Focused on front-end development, this blog post covers best practices and techniques for building responsive user interfaces that adapt to various devices.",
    },
    {
      slug: "vue-vs-react-comparison",
      title: "Vue vs React: A Detailed Comparison",
      date: "2023-07-19",
      contents:
        "This post compares Vue and React, two of the most popular front-end frameworks, discussing their similarities, differences, and use cases to help developers make informed decisions.",
    },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

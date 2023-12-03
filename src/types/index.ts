export interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  ogImage: string;
  content: string;
  tags: string[];
}

export type TPostItem = Pick<
  IPost,
  "slug" | "title" | "author" | "date" | "coverImage" | "excerpt" | "tags"
>;

export type TSearchPostItem = Pick<
  IPost,
  "slug" | "title" | "author" | "date" | "coverImage" | "excerpt" | "tags"
>;

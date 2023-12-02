import { format, parseISO } from "date-fns";
import { TPostItem } from "@/types";

interface PostItemProps {
  post: TPostItem;
}
export default function PostItem({ post }: PostItemProps) {
  const parsedDate = format(parseISO(post.date), "yyyy. MM. dd.");

  return <></>;
}

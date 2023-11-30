import Comments from "@/components/Comments";
import styles from "./PostBody.module.css";
import { Profile } from "@/components";

interface PostBodyProps {
  content: string;
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className="w-full">
      <div
        className={styles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-16 sm:mt-24 flex justify-center">
        <Profile />
      </div>
      <div className="mt-16 sm:mt-24">
        <Comments />
      </div>
    </div>
  );
};

export default PostBody;

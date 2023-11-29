import Comments from "@/components/Comments";
import styles from "./PostBody.module.css";

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
      <div className="mt-24">
        <Comments />
      </div>
    </div>
  );
};

export default PostBody;

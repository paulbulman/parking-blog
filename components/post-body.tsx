import { MDXRemote } from "next-mdx-remote";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  mdxSource: any;
};

const PostBody = ({ mdxSource }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
};

export default PostBody;

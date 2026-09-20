import { memo } from "react";
import type { Post as PostType } from "../types/Post";
import "./Post.css";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const isHighlighted = post.author === "Alice";

  return (
    <article className={`post ${isHighlighted ? "highlighted-post" : ""}`}>
      <h3>{post.title}</h3>

      <p className="post-author">
        <strong>By:</strong> {post.author}
      </p>

      <p className="post-content">
        {post.content.split(" ").slice(0, 10).join(" ")}...
      </p>

      <small className="post-date">{post.date}</small>
    </article>
  );
}

export default memo(Post);
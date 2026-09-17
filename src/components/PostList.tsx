import Post from "./Post";
import type { Post as PostType } from "../types/Post";
import "./PostList.css";

function PostList() {
  const posts: PostType[] = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "Alice",
      content:
        "React makes it easier to build interactive user interfaces using reusable components.",
      date: "September 17, 2026",
    },
    {
      id: 2,
      title: "Why TypeScript Matters",
      author: "Christian",
      content:
        "TypeScript helps developers catch errors early and makes React applications easier to maintain.",
      date: "September 16, 2026",
    },
    {
      id: 3,
      title: "Understanding Vite",
      author: "Alice",
      content:
        "Vite provides a fast development environment for modern frontend applications.",
      date: "September 15, 2026",
    },
  ];

  return (
    <section className="post-list">
      <h2 className="post-list-title">Latest Posts</h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
import { useState, useEffect } from "react";
import Router from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { NextPageContext } from "next";
import { MyPost } from "@/interfaces/post";

interface PostsPageProps {
  posts: MyPost[];
}

const Posts = ({ posts: serverPosts }: PostsPageProps) => {
  const [posts, setPosts] = useState(serverPosts);
  // useEffect - в рамках SSR бесполезен
  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.API_URL}/posts`);
      const json = await res.json();
      setPosts(json);
    }

    if (!serverPosts) {
      load();
    }
  }, [serverPosts]);

  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading......</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Posts Page"}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={linkClickHandler}>Go back to Home</button>
    </MainLayout>
  );
};

// can use for frontend abd backend
// getInitialProps - стфтический метод который выполняется на сервере; теперь поисковики могут видеть контент
Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch("http://localhost:4200/posts");
  const posts: MyPost = await res.json();
  return { posts }; // важно вернуть обект
};

export default Posts;

// only for SSR
// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {post: null}
//   // }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await response.json()
//
//   return {props: {post}}
// }

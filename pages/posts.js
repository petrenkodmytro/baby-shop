import { useState, useEffect } from "react";
import Router from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([]);
  // useEffect - в рамках SSR бесполезен
  // useEffect(() => {
  //   async function load() {
  //     const res = await fetch("http://localhost:4200/posts");
  //     const json = await res.json();
  //     setPosts(json);
  //   }
  //   load();
  // }, []);

  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };
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

// getInitialProps - стфтический метод который выполняется на сервере; теперь поисковики могут видеть контент
Posts.getInitialProps = async () => {
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return { posts }; // важно вернуть обект
};

export default Posts;

// переход на страницу с динамическим параметром

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { MyPost, PostNextPageContext, PostPageProps } from "@/interfaces/post";

const Post = ({ post: serverPost }: PostPageProps) => {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  // console.log(post);
  // console.log(serverPost);
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }
    // если с сервера прилител null, тогда делаем загрузку на фронте
    if (!serverPost) {
      load();
    }
  }, [router.query.id, serverPost]);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading......</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={"/posts"}>Back to all posts</Link>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx: PostNextPageContext) => {
  // console.log(ctx.query);
  if (!ctx.req) {
    return { post: null };
  }

  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post: MyPost = await res.json();

  return { post };
};

export default Post;

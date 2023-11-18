// переход на страницу с динамическим параметром

// import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";

const Post = ({ post }) => {
  // const router = useRouter();
  //   console.log(router);
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={"/posts"}>Back to all posts</Link>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx) => {
  console.log(ctx.query);
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await res.json();

  return { post };
};

export default Post;

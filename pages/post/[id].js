// переход на страницу с динамическим параметром

import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
//   console.log(router);
  return <div>Post {router.query.id}</div>;
};

export default Post;

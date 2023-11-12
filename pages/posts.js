import Router from "next/router";
import MainLayout from "../components/MainLayout";

const Posts = () => {
  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };
  return (
    <MainLayout title={"Posts Page"}>
      <h1>Posts</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
    </MainLayout>
  );
};

export default Posts;

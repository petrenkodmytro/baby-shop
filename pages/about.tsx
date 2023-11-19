import Router from "next/router";
import MainLayout from "../components/MainLayout";

interface Title {
  title: string;
}

const About = ({ title }: Title) => {
  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };
  return (
    <MainLayout title={"About Page"}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/about`);
  const data = await res.json();
  return {
    title: data.title,
  };
};

export default About;

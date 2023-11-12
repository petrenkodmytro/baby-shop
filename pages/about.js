import Router from "next/router";
import MainLayout from "../components/MainLayout";

const About = () => {
  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };
  return (
    <MainLayout title={"About Page"}>
      <h1>About</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
    </MainLayout>
  );
};

export default About;

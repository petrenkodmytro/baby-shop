import Router from "next/router";
import MainLayout from "../components/MainLayout";


const About = () => {
  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };

  return (
    <MainLayout title={"About Page"}>
      <h1>About Page</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
      <button onClick={() => Router.push("/products")}>Go to products</button>
    </MainLayout>
  );
};

// About.getInitialProps = async () => {
//   const res = await fetch(`${process.env.API_URL}/about`);
//   const data = await res.json();
//   return {
//     title: data.title,
//   };
// };

export default About;

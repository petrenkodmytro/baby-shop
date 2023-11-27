import Router from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

const About = () => {
  return (
    <MainLayout title={"About Page"}>
      <h1>About Page</h1>
      <Link href={"/"} className="block italic text-indigo-500">
        Go back to Home
      </Link>
      <button onClick={() => Router.push("/products")} className="italic text-indigo-500">
        Go to Products
      </button>
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

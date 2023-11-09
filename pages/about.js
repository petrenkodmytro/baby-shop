import Router from "next/router";

const About = () => {
  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };
  return (
    <>
      <h1>About</h1>
      <button onClick={linkClickHandler}>Go back to Home</button>
    </>
  );
};

export default About;

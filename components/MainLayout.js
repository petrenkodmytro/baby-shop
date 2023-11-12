import Head from "next/head";
import Link from "next/link";
import React, { Children } from "react";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next,react" />
        <meta name="description" content="tutorial" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link legacyBehavior href={"/"}>
          <a>Home</a>
        </Link>
        <Link legacyBehavior href={"/about"}>
          <a>About</a>
        </Link>
        <Link legacyBehavior href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            background: darkblue;
          }
          nav a {
            color: #fff;
            text-decoration: none;
          }
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default MainLayout;

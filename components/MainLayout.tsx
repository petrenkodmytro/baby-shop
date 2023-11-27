import { MainLayout } from "@/interfaces/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const MainLayout = ({ children, title }: MainLayout) => {
  return (
    <>
      <Head>
        <title>{title} | Baby-Shop</title>
        <meta name="keywords" content="t-shot, dress, shoes, shorts" />
        <meta name="description" content="baby-shop" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link legacyBehavior href={"/"}>
          <a>Home</a>
        </Link>
        <Link legacyBehavior href={"/about"}>
          <a>About</a>
        </Link>
        <Link legacyBehavior href={"/products"}>
          <a>Products</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            display: flex;
            z-index: 5;
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

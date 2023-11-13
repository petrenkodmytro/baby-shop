import Link from "next/link";
import React from "react";
import classes from "../styles/error.module.scss";
const ErrorPage = () => {
  return (
    <>
      <h1 className={classes.error}>ErrorPage 404</h1>
      <p>
        Page no found <Link href={"/"}>go to HomePage</Link>
      </p>
    </>
  );
};

export default ErrorPage;

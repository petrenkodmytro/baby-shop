import { NextPageContext } from "next";

export interface MyPost {
  id: string;
  title: string;
  body: string;
}

export interface PostPageProps {
  post: MyPost;
}

export interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

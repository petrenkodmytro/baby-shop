import { NextPageContext } from "next";

export interface IProduct {
  id: string;
  name: string;
  make: string;
  img: string;
  description: string;
  price: number;
  category: string[];
  size: number;
  color: string[];
}

export interface ProductPageProps {
  product: IProduct;
}

export interface ProductNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

import { useState, useEffect } from "react";
import Router from "next/router";
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { NextPageContext } from "next";
import { IProduct } from "@/interfaces/product";
import ProductImage from "@/components/ProductImage";
import Product from "@/components/Product";

interface ProductsPageProps {
  products: IProduct[];
}

const Products = ({ products: serverProducts }: ProductsPageProps) => {
  const [products, setProducts] = useState(serverProducts);
  // useEffect - в рамках SSR бесполезен
  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.API_URL}/products`);
      const json = await res.json();
      setProducts(json);
    }

    if (!serverProducts) {
      load();
    }
  }, [serverProducts]);

  const linkClickHandler = () => {
    // Router.push() - go to url
    Router.push("/");
  };

  if (!products) {
    return (
      <MainLayout>
        <p>Loading......</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Products Page"}>
      <section className="flex flex-col space-y-12 pb-44">
        <h1>Products Page</h1>
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Link href={"/"} className="italic text-indigo-500">Go back to Home</Link>
      </section>
    </MainLayout>
  );
};

// can use for frontend abd backend
// getInitialProps - стфтический метод который выполняется на сервере; теперь поисковики могут видеть контент
Products.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { products: null };
  }

  const res = await fetch(`${process.env.API_URL}/products`);
  const products: IProduct = await res.json();
  return { products }; // важно вернуть обект
};

export default Products;

// only for SSR
// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {post: null}
//   // }
//   const response = await fetch(`http://localhost:4200/products/${query.id}`)
//   const post = await response.json()
//
//   return {props: {post}}
// }

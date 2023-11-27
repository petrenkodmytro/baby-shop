// переход на страницу с динамическим параметром

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { IProduct, ProductPageProps } from "@/interfaces/product";
import { NextPageContext } from "next";
import ProductImage from "@/components/ProductImage";

const Product = ({ product: serverProduct }: ProductPageProps) => {
  const router = useRouter();
  const [product, setProduct] = useState(serverProduct);
  // console.log(post);
  // console.log(serverPost);
  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.API_URL}/products/${router.query.id}`);
      const data = await res.json();
      setProduct(data);
    }
    // если с сервера прилител null, тогда делаем загрузку на фронте
    if (!serverProduct) {
      load();
    }
  }, [router.query.id, serverProduct]);

  if (!product) {
    return (
      <MainLayout>
        <p>Loading......</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="min-h-40">
          <ProductImage product={product} fill />
        </div>
      </div>

      <Link href={"/products"} className="italic text-indigo-500">Back to all products</Link>
    </MainLayout>
  );
};

Product.getInitialProps = async (ctx: NextPageContext) => {
  // console.log(ctx.query);
  if (!ctx.req) {
    return { product: null };
  }

  const res = await fetch(`${process.env.API_URL}/products/${ctx.query.id}`);
  const product: IProduct = await res.json();

  return { product };
};

export default Product;

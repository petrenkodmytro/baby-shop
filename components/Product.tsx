import Link from "next/link";
import ProductImage from "./ProductImage";
import { IProduct } from "@/interfaces/product";

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  return (
    <Link className="h-96 p-1 flex flex-col border-2 border-cyan-100 rounded-md hover:scale-105 transition-transform ease-out duration-200 ring-offset-red-600" prefetch={false} href={`/product/${product.id}`}>
      <div className="relative max-h-72 flex-1 flex items-center justify-center">
        <ProductImage product={product} fill />
      </div>
      <div className="font-semibold flex flex-col items-center justify-between mt-4 mb-4 p-2">
        <p className="text-center">{product.name}</p>
        <p>${product.price}</p>
        <p className="italic text-xs line-clamp-2 text-gray-600">{product.description}</p>
      </div>
    </Link>
  );
};

export default Product;
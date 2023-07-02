import Image from "next/image";
import { useCartStore } from "../store/userCartStore";
import { Product } from "../store/useProductStore";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="rounded-md bg-[#22252D]">
      <div className="relative w-full h-40">
        <Image
          src={product?.images[0]}
          // loader={loaderProp}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt={product?.title}
          className="rounded-md shadow-lg"
        />
        <span className="bg-black rounded-full py-0.5 px-3 text-white text-xs absolute top-1 left-1 font-light">
          {product?.category}
        </span>
      </div>

      <div className="px-2 py-3 text-sm text-gray-300">
        <h3 className="mb-1 text-lg font-medium">{product?.title}</h3>
        <p className="mb-3 text-gray-500 text-ellipsis">{`${product?.description.substring(
          0,
          50
        )}...`}</p>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">${product?.price}</p>
          <button
            type="button"
            className="py-1.5 px-3 rounded-md bg-[#161A1E] hover:ring-1 hover:ring-[#161A1E]"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

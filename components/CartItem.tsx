import Image from "next/image";
import { Product } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore";

interface Props {
  product: Product;
}

const CartItem = ({ product }: Props) => {
  // Recover the store action to remove items from the cart
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  return (
    // <div className="rounded-md bg-[#22252D] flex my-5 relative">
    //   <button
    //     type="button"
    //     className="absolute right-1 top-1"
    //     onClick={() => removeFromCart(product)}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-4 h-4 text-red-500"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   <div className="relative w-20">
    //     <Image
    //       src={product?.images[0]}
    //       // loader={loaderProp}
    //       layout="fill"
    //       objectFit="contain"
    //       objectPosition="center"
    //       alt={product?.title}
    //       className="shadow-lg rounded-tl-md rounded-bl-md"
    //     />
    //   </div>
    //   <div className="flex-grow px-3 py-2 details">
    //     <h3 className="mb-1 font-medium text-gray-300">{product?.title}</h3>
    //     <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
    //       ${product?.price}
    //     </p>
    //     <div className="flex items-center justify-between">
    //       <p className="text-sm text-gray-300">Qty: {product?.quantity}</p>

    //       <div className="flex items-center justify-end flex-grow space-x-2 text-gray-300">
    //         <button type="button" onClick={() => updateQuantity(product, "decrease")}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-5 h-5"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <span>{product?.quantity}</span>
    //         <button type="button" onClick={() => updateQuantity(product, "increase")}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-5 h-5"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="rounded-md bg-[#22252D] flex my-5 relative">
      <button
        type="button"
        className="absolute right-1 top-1"
        onClick={() => removeFromCart(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="relative w-20">
        <Image
          src={product?.images[0]}
          alt={product?.title}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          priority={true}
          className="shadow-lg rounded-tl-md rounded-bl-md"
        />
      </div>
      <div className="flex-grow px-3 py-2 details">
        <h3 className="mb-1 font-medium text-gray-300">{product?.title}</h3>
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          ${product?.price}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-300">Qty: {product?.quantity}</p>

          <div className="flex items-center justify-end flex-grow space-x-2 text-gray-300">
            <button type="button" onClick={() => updateQuantity(product, "decrease")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span>{product?.quantity}</span>
            <button type="button" onClick={() => updateQuantity(product, "increase")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

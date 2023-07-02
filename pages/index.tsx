import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { Cart } from "../components/Cart";
import { CartBadge } from "../components/CardBadge";
import { useCartStore } from "../store/userCartStore";
import { useProductStore } from "../store/useProductStore";

const Home: NextPage = () => {
  const { products, fetchProducts } = useProductStore();
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#161A1E] relative">
      <Head>
        <title>exTTan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-10 xl:px-16">
        {/* title */}
        <div className="title flex justify-center">
          <h1 className="font-bold text-7xl xl:text-9xl text-center inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            exTTan
          </h1>
        </div>

        {/* catalogs */}
        <div className="flex items-center justify-between mt-5">
          <h4 className="font-semibold text-xl xl:text-3xl text-white uppercase">Catalogs</h4>
          <div className="relative">
            <button
              type="button"
              className="py-1.5 px-3 flex items-center space-x-1 rounded-md text-sm bg-blue-600 text-gray-200 hover:ring-1 hover:ring-blue-600"
              onClick={toggleCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>My Cart</span>
            </button>
            <CartBadge />
          </div>
        </div>

        {/* products */}
        <ProductList products={products} />
      </main>

      {/* cart */}
      <Cart />
    </div>
  );
};

export default Home;

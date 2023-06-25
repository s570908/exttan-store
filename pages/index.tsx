import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Product, useProductsStore } from "../store/useProductStore";
import useFromStore from "../hooks/useFormState";
import { useCartStore } from "../store/useCartStore";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CartBadge from "../components/CartBadge";

const Home: NextPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { products, isLoading, error, fetchProducts } = useProductsStore();
  const [mProducts, setMProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setMProducts(products);
  }, [products]);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-[#161A1E] relative">
      <Head>
        <title>exTTan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 py-8 xl:px-16">
        {/* title */}
        <div className="flex justify-center title">
          <h1 className="inline-block font-bold text-center text-transparent text-7xl xl:text-9xl bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            exTTan
          </h1>
        </div>

        {/* catalogs */}
        <div className="flex items-center justify-between mt-5">
          <h4 className="text-xl font-semibold text-white uppercase xl:text-3xl">Catalogs</h4>
          <div className="relative">
            <button
              type="button"
              className="py-1.5 px-3 flex items-center space-x-1 rounded-md text-sm bg-blue-600 text-gray-200 hover:ring-1 hover:ring-blue-600"
              onClick={handleCartIconClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
        {isLoading ? (
          <div className="text-lg text-center">Loading...</div>
        ) : (
          <ProductList products={mProducts} />
        )}
      </main>

      {/* cart */}
      <Cart isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick} />
    </div>
  );
};

export default Home;

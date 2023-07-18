import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import ProductList from "../components/ProductList";
import { Cart } from "../components/Cart";
import { CartBadge } from "../components/CardBadge";
import { useCartStore } from "../store/userCartStore";
import useSWRInfinite from "swr/infinite";
import fetcher from "../utils/fetcher";

const PAGE_SIZE = 6;
const Home: NextPage = () => {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const target = useRef<HTMLDivElement>(null);

  const {
    data: productData,
    mutate,
    setSize,
    isValidating,
  } = useSWRInfinite<any>(
    (index) => {
      return `https://dummyjson.com/products?skip=${index * PAGE_SIZE}&limit=${PAGE_SIZE}`;
    },
    fetcher,
    {
      onSuccess(data) {
        console.log("onSuccess--data: ", data);
      },
      revalidateOnFocus: false,
      revalidateFirstPage: false,
    }
  );
  console.log("productData: ", productData);
  /*
  useSWRInfinite
  
   optional chaining ?.[i] 사용됨: array?.[i]  좌측 operand가 null undefined 이 아니면 array[i]를 가져와라.
   productData는 최대 10개의 product을 갖고 있는 array이다.
   productData[0] 에 10개의 product
   productData[1] 에 10개의 product
   productData[2] 에 10개의 product
   productData[3] 에 4개의 product
   productData = 
    [ 
      [{id:1}, ..., {id:10}], 
      [{id:11}, ..., {id:20}], 
      [{id:21}, ..., {id:30}], 
      [{id:31}, ..., {id:34}]
    ]
  */

  const isEmpty = productData?.[0].products.length === 0;
  const isReachingEnd =
    isEmpty || (productData && productData[productData.length - 1]?.products < PAGE_SIZE);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(([e]) => {
      console.log("Inter.Observer callback called--e: ", e);
      if (e.isIntersecting && !isReachingEnd) {
        setSize((prev) => prev + 1);
      }
    });
    observer.observe(target.current!);
  }, [target]);

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
              onClick={toggleCart}
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
        {productData &&
          productData.map((pageData, index) => {
            console.log("pageData.products: ", pageData.products);
            return <ProductList key={index} products={pageData.products} />;
          })}
      </main>

      {isReachingEnd || (
        <div ref={target} className="w-full h-24 text-white">
          Loading...
        </div>
      )}

      {/* cart */}
      <Cart />
    </div>
  );
};

export default Home;

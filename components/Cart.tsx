import { useEffect, useState } from "react";
import { CartStore, useCartStore } from "../store/userCartStore";
import { CartItem } from "./CartItem";
import { Product } from "../store/useProductStore";
import useFromStore from "../hooks/useFromStore";

interface Props {
  isOpen: boolean;
  onCartIconClick: () => void;
}

export const Cart = ({ isOpen, onCartIconClick }: Props) => {
  const mCart = useFromStore<CartStore, Product[]>(useCartStore, (state) => state.cart);
  const calculateTotal = () => {
    return mCart?.reduce((acc, item) => acc + item.price * item.quantity!, 0);
  };

  return (
    <div
      className={`absolute right-0 top-0 h-full w-1/4 bg-[#1b1c1f] p-5 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between text-gray-400">
        <h4 className="text-xl font-semibold xl:text-2xl">My Cart</h4>
        <button type="button" onClick={onCartIconClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* cart items */}
      {mCart?.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      {mCart?.length! > 0 && (
        <div className="mt-5 text-center">
          <p className="text-gray-500 uppercase">Total</p>
          <h4 className="text-4xl font-semibold text-white">${calculateTotal()}</h4>
        </div>
      )}
    </div>
  );
};

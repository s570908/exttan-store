import { useEffect, useState } from "react";
import { CartStore, useCartStore } from "../store/userCartStore";
import { Product } from "../store/useProductStore";
import useFromStore from "../hooks/useFromStore";

export const CartBadge = () => {
  const mCart = useFromStore<CartStore, Product[]>(useCartStore, (state) => state.cart);

  return (
    <span className="absolute -right-2 -top-2 bg-amber-400 rounded-full text-xs px-1.5 py-0.5 font-semibold animate-bounce">
      {mCart?.length}
    </span>
  );
};

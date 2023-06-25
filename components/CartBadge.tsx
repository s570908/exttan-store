import { useEffect, useState } from "react";
import useFromStore from "../hooks/useFormState";
import { useCartStore } from "../store/useCartStore";
import { Product } from "../store/useProductStore";

const CartBadge = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  //// 이 훅에서 이미 zustand state인 cart를 useEffect와 useState를 사용하여 react state인 cart로 만들어서 저장을 하였다.
  //// 따라서 production 환경에서 cart로 인한 hydration runtime error는 발생하지 않는다.

  return (
    <span className="absolute -right-2 -top-2 bg-amber-400 rounded-full text-xs px-1.5 py-0.5 font-semibold animate-bounce">
      {cart?.length}
    </span>
  );
};
export default CartBadge;

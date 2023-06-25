import useFromStore from "../hooks/useFormState";
import { useCartStore } from "../store/useCartStore";

const CartBadge = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <span className="absolute -right-2 -top-2 bg-amber-400 rounded-full text-xs px-1.5 py-0.5 font-semibold animate-bounce">
      {cart?.length}
    </span>
  );
};
export default CartBadge;

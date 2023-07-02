import { useCartStore } from "../store/userCartStore";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const showCart = useCartStore((state) => state.showCart);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity!, 0);
  };
  return (
    <div
      className={`absolute right-0 top-0 h-full w-1/4 bg-[#1b1c1f] p-5 ${
        showCart ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between text-gray-400">
        <h4 className="font-semibold text-xl xl:text-2xl">My Cart</h4>
        <button type="button" onClick={toggleCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
      {cart?.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      {cart?.length > 0 && (
        <div className="mt-5 text-center">
          <p className="text-gray-500 uppercase">Total</p>
          <h4 className="font-semibold text-4xl text-white">${calculateTotal()}</h4>
        </div>
      )}
    </div>
  );
};

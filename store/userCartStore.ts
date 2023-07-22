import create from "zustand";
import { Product } from "./useProductStore";
import { devtools, persist } from "zustand/middleware";

export interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: "increase" | "decrease") => void;
}

export const useCartStore = create<
  CartStore,
  [["zustand/devtools", never], ["zustand/persist", CartStore]]
>(
  devtools(
    persist((set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === product.id);
        if (findProduct) {
          findProduct.quantity! += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        set({ cart: JSON.parse(JSON.stringify(cart)) });
      },
      removeFromCart: (productId: number) => {
        set({ cart: get().cart.filter((product) => product.id !== productId) });
      },
      updateQuantity: (productId: number, action: "increase" | "decrease") => {
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === productId);
        if (findProduct) {
          if (action === "decrease") {
            findProduct.quantity =
              findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
          } else {
            findProduct.quantity! += 1;
          }
        }
        set({ cart: JSON.parse(JSON.stringify(cart)) });
      },
    }))
  )
);

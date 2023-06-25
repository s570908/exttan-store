import create from "zustand";
import { Product } from "./useProductStore";
import { persist } from "zustand/middleware";

interface CartStore {
  cart: Product[];
  showCart: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  updateQuantity: (product: Product, action: "increase" | "decrease") => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],
      showCart: false,
      addToCart: (product: Product) => {
        const cart = get().cart;
        // const findProduct = cart.find((p) => p.id === product.id);
        // if (findProduct) {
        //   findProduct.quantity! += 1;
        // } else {
        //   cart.push({ ...product, quantity: 1 });
        // }
        // set((state) => ({ cart }));
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
          );
          set((state) => ({
            cart: updatedCart,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];
          set((state) => ({
            cart: updatedCart,
          }));
        }
      },
      // removeFromCart: (productId: number) => {
      //   set({ cart: get().cart.filter((product) => product.id !== productId) });
      // },
      removeFromCart: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        }));
      },
      // updateQuantity: (product: Product, action: "increase" | "decrease") => {
      //   const cart = get().cart;
      //   const findProduct = cart.find((p) => p.id === product.id);
      //   if (findProduct) {
      //     if (action === "decrease") {
      //       findProduct.quantity =
      //         findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
      //     } else {
      //       findProduct.quantity! += 1;
      //     }
      //   }
      //   set({ cart });
      // },
      updateQuantity: (product: Product, action: "increase" | "decrease") => {
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === product.id);
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
    }),
    {
      name: "cart-storage", // unic name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    }
  )
);

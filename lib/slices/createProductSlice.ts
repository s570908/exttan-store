import { StateCreator } from "zustand";
import { CombinedStoreCreator } from "../store";

export interface Product {
  category: {
    id: number;
    image: string;
    name: string;
  };
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  quantity?: number;
}

export interface ProductSlice {
  products: Product[];
  fetchProducts: () => void;
}

// type CombinedStoreCreator<T> = StateCreator<
//   StoreState,
//   [["zustand/devtools", never], ["zustand/persist", unknown]],
//   [],
//   T
// >;

export const createProductSlice: CombinedStoreCreator<ProductSlice> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
    set({ products: await res.json() });
  },
});

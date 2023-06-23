import { StateCreator } from "zustand";
import { CombinedStoreCreator, StoreState } from "../store";

export interface Product {
  category: string;
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

export const createProductSlice: CombinedStoreCreator<ProductSlice> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await fetch("https://dummyjson.com/products?skip=0&limit=20");
    const data = await res.json();
    set({ products: data.products });
  },
});

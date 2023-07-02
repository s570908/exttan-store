import create from "zustand";

export interface Product {
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  quantity?: number;
}

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  error: any;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch("https://dummyjson.com/products?skip=0&limit=20");
      const data = await res.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

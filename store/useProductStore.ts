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

export interface ProductPage {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
  isLoading: boolean;
  error: any;
}

export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?skip=0&limit=20");
      const data = await res.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

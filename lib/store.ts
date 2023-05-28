import create from "zustand";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";
import { ProductSlice, createProductSlice } from "./slices/createProductSlice";
import { devtools } from "zustand/middleware";

export type StoreState = ProductSlice & CartSlice;

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  }))
);

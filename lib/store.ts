import create from "zustand";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";
import { createProductSlice, ProductSlice } from "./slices/createProductSlice";
import { devtools, persist } from "zustand/middleware";

export type StoreState = ProductSlice & CartSlice;

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  }))
);

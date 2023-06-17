import create, { StateCreator } from "zustand";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";
import { createProductSlice, ProductSlice } from "./slices/createProductSlice";
import { devtools, persist } from "zustand/middleware";

export type StoreState = ProductSlice & CartSlice;

export type CombinedStoreCreator<T> = StateCreator<
  StoreState,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;

export const useAppStore = create<StoreState>()(
  devtools(
    persist((...a) => ({
      ...createProductSlice(...a),
      ...createCartSlice(...a),
    }))
  )
);

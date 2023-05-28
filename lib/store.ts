import create, { StateCreator } from "zustand";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";
import { ProductSlice, createProductSlice } from "./slices/createProductSlice";
import { devtools, persist } from "zustand/middleware";

export type CombinedSlices = ProductSlice & CartSlice;

export type CombinedStoreCreator<T> = StateCreator<
  CombinedSlices,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;

export const useAppStore = create<CombinedSlices>()(
  devtools(
    persist((...a) => ({
      ...createProductSlice(...a),
      ...createCartSlice(...a),
    }))
  )
);

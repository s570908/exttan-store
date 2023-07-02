import create, { StateCreator } from "zustand";
import { CartSlice, createCartSlice } from "./slices/createCartSliceTmp";
import { createProductSlice, ProductSlice } from "./slices/createProductSliceTmp";
import { devtools, persist } from "zustand/middleware";

export type StoreState = ProductSlice & CartSlice;

export type CombinedStoreCreator<T> = StateCreator<
  StoreState,
  [["zustand/devtools", never]],
  [],
  T
>;

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  }))
);

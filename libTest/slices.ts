//import { create, StateCreator } from 'zustand'

import create, { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}
const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const useBoundStore = create<BearSlice & FishSlice>()(
  devtools((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
  }))
);

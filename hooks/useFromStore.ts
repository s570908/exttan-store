import { useEffect, useState } from "react";

//// (state) => state.cart
type CallbackType<T, F> = (state: T) => F;

//// const cart = useCartStore((state) => state.cart)
type StoreType<T, F> = (callback: CallbackType<T, F>) => F;

// T: store states, F: selected state
export default function useFromStore<T, F>(store: StoreType<T, F>, callback: CallbackType<T, F>) {
  const stateOfStore = store(callback) as F;
  const [state, setState] = useState<F>();

  //// stateOfStore가 function일 경우에는 useEffect에서 setState하지 않는다.
  if (typeof stateOfStore === "function") return stateOfStore;

  useEffect(() => {
    setState(stateOfStore);
  });
  return state;
}

//// usage example
//// const totalItems = useFromStore(useCartStore, state => state.totalItems)

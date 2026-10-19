import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "swiftmove_cart";

/* Read the saved cart safely (handles corrupt data, blocked storage, SSR) */
const loadCart = () => {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    const parsed = JSON.parse(raw);

    /* Only accept an array of objects that have an id + price */
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item) =>
        item &&
        typeof item === "object" &&
        item.id !== undefined &&
        item.price !== undefined
    );
  } catch (err) {
    return [];
  }
};

 export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  /* Save to localStorage whenever the cart changes */
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      /* Storage full or blocked - the cart still works in memory */
    }
  }, [items]);

  /* Add qty copies of a product */
  const add = (product, qty = 1) => {
    if (!product) return;

    setItems((prev) => [
      ...prev,
      ...Array.from({ length: qty }, () => product),
    ]);
  };

  /* Remove ONE copy of a product */
  const removeOne = (id) => {
    setItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;

      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  /* Remove EVERY copy of a product */
  const removeAll = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* Empty the whole cart */
  const clear = () => setItems([]);

  const count = items.length;

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.price || 0), 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, count, subtotal, add, removeOne, removeAll, clear }),
    [items, count, subtotal]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

 export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }

  return ctx;
}

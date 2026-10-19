import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);

const STORAGE_KEY = "swiftmove_wishlist";

/* Read the saved wishlist safely (handles corrupt data, blocked storage, SSR) */
const loadWishlist = () => {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item) => item && typeof item === "object" && item.id !== undefined
    );
  } catch (err) {
    return [];
  }
};

 export function WishlistProvider({ children }) {
  const [items, setItems] = useState(loadWishlist);

  /* Save whenever the wishlist changes */
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      /* Storage blocked or full - wishlist still works in memory */
    }
  }, [items]);

  /* Add if missing, remove if already saved */
  const toggle = (product) => {
    if (!product) return;

    setItems((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  /* Remove a single product */
  const remove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* Empty the whole wishlist */
  const clear = () => setItems([]);

  const count = items.length;

  const has = (id) => items.some((item) => item.id === id);

  const value = useMemo(
    () => ({ items, count, has, toggle, remove, clear }),
    [items, count]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

 export function useWishlist() {
  const ctx = useContext(WishlistContext);

  if (!ctx) {
    throw new Error("useWishlist must be used inside a <WishlistProvider>");
  }

  return ctx;
}
